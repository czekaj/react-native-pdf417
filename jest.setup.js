// Jest setup for React Native

// Set up required globals
global.__DEV__ = true;

// Fix for "Cannot assign to read only property 'performance'" error
// This ensures the performance object exists and is mutable
Object.defineProperty(global, 'performance', {
    writable: true,
    configurable: true,
    value: {
        now: () => Date.now()
    }
});

// Silence specific console warnings during tests
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
    console.warn = (...args) => {
        if (typeof args[0] === 'string' && (
            args[0].includes('Warning:') ||
            args[0].includes('componentWillReceiveProps')
        )) {
            return;
        }
        originalWarn.apply(console, args);
    };

    console.error = (...args) => {
        if (typeof args[0] === 'string' && (
            args[0].includes('Warning:') ||
            args[0].includes('ReactDOM.render is no longer supported')
        )) {
            return;
        }
        originalError.apply(console, args);
    };
});

afterAll(() => {
    console.warn = originalWarn;
    console.error = originalError;
}); 