/**
 * loadHMS — the only entry point for Framer (and any env where React is not
 * on window at module-load time).
 *
 * 1. Sets window.React / window.ReactDOM to the caller's React instance.
 * 2. Dynamically imports the roomkit-react chunk AFTER step 1.
 *    All module-level React calls inside that chunk (createContext, lazy, …)
 *    therefore see the real React, not an empty proxy.
 * 3. Returns { HMSPrebuilt } once loaded.
 *
 * Usage in a Framer code component:
 *
 * ```tsx
 * import React, { Suspense, lazy } from "react"
 * import ReactDOM from "react-dom"
 * import { loadHMS } from "https://esm.sh/gh/KlotzJesse/hms-bundle@COMMIT/dist/hms.mjs"
 *
 * const HMSRoom = lazy(() =>
 *   loadHMS(React, ReactDOM).then(m => ({ default: m.HMSPrebuilt }))
 * )
 *
 * export default function HMSVideoRoom({ roomCode }) {
 *   if (!roomCode) return <div>Bitte Room Code eingeben</div>
 *   return (
 *     <Suspense fallback={<div>Loading…</div>}>
 *       <HMSRoom roomCode={roomCode} />
 *     </Suspense>
 *   )
 * }
 * ```
 */
export async function loadHMS(
  React: unknown,
  ReactDOM: unknown
): Promise<{ HMSPrebuilt: React.ComponentType<any> }> {
  // Set React on window BEFORE roomkit-react module code evaluates.
  // roomkit-react calls createContext(), lazy(), memo() etc. at module level —
  // they need the real React already present on globalThis.
  ;(globalThis as any).React = React
  ;(globalThis as any).ReactDOM = ReactDOM

  // Dynamic import: roomkit-react (and its deps tsvb, HMSEffectsPlugin, …)
  // evaluate here, AFTER window.React is set.
  return import('./room-exports') as any
}
