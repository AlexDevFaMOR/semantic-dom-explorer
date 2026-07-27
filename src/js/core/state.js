/**
 * state.js - Gestión de Estado Global
 * 
 * Este módulo implementa el patrón Observer para manejar el estado
 * de la aplicación de forma centralizada y reactiva.
 * 
 * @module core/state
 */

// ==========================================================================
// 1. DEFINICIÓN DEL ESTADO INICIAL
// ==========================================================================

/**
 * Estado inicial de la aplicación
 * @type {Object}
 */
const INITIAL_STATE = {
    // Elemento actualmente seleccionado en el DOM
    selectedElement: null,
    
    // Historial de selecciones (para navegación "atrás")
    selectionHistory: [],
    
    // Estado del árbol DOM (expandido/colapsado)
    treeState: {
        expanded: new Set(), // IDs de nodos expandidos
        selected: null
    },
    
    // Configuración de la aplicación
    config: {
        highlightColor: '#2563eb',
        animationDuration: 300,
        maxHistory: 10
    }
};

// ==========================================================================
// 2. ESTADO PRIVADO Y SUSCRIPTORES
// ==========================================================================

// Copia profunda del estado inicial (para no mutarlo)
let currentState = JSON.parse(JSON.stringify(INITIAL_STATE));

// Lista de funciones suscritas a cambios
const subscribers = [];

// ==========================================================================
// 3. FUNCIONES PÚBLICAS
// ==========================================================================

/**
 * Obtiene una copia del estado actual
 * @returns {Object} Copia del estado actual
 */
export function getState() {
    // Retornamos una copia para evitar mutaciones externas
    return JSON.parse(JSON.stringify(currentState));
}

/**
 * Actualiza el estado con nuevos valores
 * @param {Object} updates - Objeto con las actualizaciones
 * @param {boolean} [silent=false] - Si es true, no notifica a los suscriptores
 * @returns {Object} Estado actualizado
 */
export function setState(updates, silent = false) {
    // Validar que updates sea un objeto
    if (!updates || typeof updates !== 'object') {
        console.warn('setState: updates debe ser un objeto');
        return currentState;
    }

    // Actualizar el estado (fusión superficial)
    currentState = {
        ...currentState,
        ...updates
    };

    // Notificar a los suscriptores (a menos que sea silencioso)
    if (!silent) {
        notifySubscribers();
    }

    return currentState;
}

/**
 * Suscribe una función a los cambios de estado
 * @param {Function} callback - Función que recibirá el estado actualizado
 * @returns {Function} Función para cancelar la suscripción
 */
export function subscribe(callback) {
    if (typeof callback !== 'function') {
        console.warn('subscribe: callback debe ser una función');
        return () => {};
    }

    subscribers.push(callback);
    
    // Notificar inmediatamente con el estado actual
    try {
        callback(getState());
    } catch (error) {
        console.error('Error en suscriptor inicial:', error);
    }

    // Retornar función para desuscribirse
    return () => {
        const index = subscribers.indexOf(callback);
        if (index > -1) {
            subscribers.splice(index, 1);
        }
    };
}

// ==========================================================================
// 4. FUNCIONES PRIVADAS (no exportadas)
// ==========================================================================

/**
 * Notifica a todos los suscriptores sobre cambios en el estado
 * @private
 */
function notifySubscribers() {
    const snapshot = getState();
    subscribers.forEach(callback => {
        try {
            callback(snapshot);
        } catch (error) {
            console.error('Error en suscriptor de estado:', error);
        }
    });
}

// ==========================================================================
// 5. PERSISTENCIA (opcional)
// ==========================================================================

/**
 * Guarda el estado actual en sessionStorage (para persistencia)
 */
export function persistState() {
    try {
        // Creamos una copia del estado sin elementos DOM (no se pueden serializar)
        const stateToPersist = {
            selectedElement: null, // No podemos persistir elementos DOM
            selectionHistory: [], // Limpiamos por seguridad
            treeState: {
                expanded: Array.from(currentState.treeState.expanded),
                selected: null
            },
            config: currentState.config
        };
        sessionStorage.setItem('domExplorerState', JSON.stringify(stateToPersist));
    } catch (error) {
        console.warn('No se pudo persistir el estado:', error);
    }
}

/**
 * Carga el estado persistido desde sessionStorage
 */
export function loadPersistedState() {
    try {
        const saved = sessionStorage.getItem('domExplorerState');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Restaurar solo las partes que podemos
            if (parsed.treeState?.expanded) {
                currentState.treeState.expanded = new Set(parsed.treeState.expanded);
            }
            if (parsed.config) {
                currentState.config = { ...currentState.config, ...parsed.config };
            }
            // Notificar a los suscriptores que el estado ha cambiado
            notifySubscribers();
        }
    } catch (error) {
        console.warn('No se pudo cargar el estado persistido:', error);
    }
}

/**
 * Resetea el estado a sus valores iniciales
 */
export function resetState() {
    currentState = JSON.parse(JSON.stringify(INITIAL_STATE));
    notifySubscribers();
}

// ==========================================================================
// 6. INICIALIZACIÓN
// ==========================================================================

console.log('📦 State module initialized');

// Cargar estado persistido al iniciar (opcional)
// loadPersistedState();