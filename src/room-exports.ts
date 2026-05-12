// This file is the LAZY chunk — imported dynamically by loadHMS() AFTER
// window.React / window.ReactDOM have been set.  All module-level React API
// calls inside @100mslive/roomkit-react (createContext, lazy, memo, …) run
// here, so they see the real React on globalThis rather than an empty proxy.
export { HMSPrebuilt } from '@100mslive/roomkit-react'
