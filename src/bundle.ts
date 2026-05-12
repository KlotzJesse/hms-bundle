export { HMSPrebuilt } from '@100mslive/roomkit-react'

/**
 * Inject React into HMS bundle for environments where React is not available
 * as window.React (e.g. Framer production).
 *
 * Call this **once** in your component module body, after imports but before
 * any render, e.g.:
 *
 * ```tsx
 * import React from "react"
 * import ReactDOM from "react-dom"
 * import { setReact, HMSPrebuilt } from "https://.../hms.mjs"
 *
 * setReact(React, ReactDOM)
 *
 * export default function Room({ roomCode }) {
 *   return <HMSPrebuilt roomCode={roomCode} />
 * }
 * ```
 */
export function setReact(React: unknown, ReactDOM: unknown): void {
  if (typeof (globalThis as any).__hmsSetReact === 'function') {
    ;(globalThis as any).__hmsSetReact(React, ReactDOM)
  } else {
    // Fallback: if banner was stripped, set globals directly
    ;(globalThis as any).React = React
    ;(globalThis as any).ReactDOM = ReactDOM
  }
}