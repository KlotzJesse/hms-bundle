// Set React on globalThis BEFORE the roomkit-react chunk evaluates.
// roomkit-react calls createContext/lazy/memo at module level, so React must
// already be available when the dynamic import below triggers evaluation.
export async function loadHMS(React: unknown, ReactDOM: unknown) {
  ;(globalThis as any).React = React
  ;(globalThis as any).ReactDOM = ReactDOM
  return import('./room-exports') as Promise<{ HMSPrebuilt: React.ComponentType<any> }>
}
