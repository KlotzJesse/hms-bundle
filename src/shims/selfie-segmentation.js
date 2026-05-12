// Stub for @mediapipe/selfie_segmentation.
// The real library loads WASM + model files from CDN at runtime via locateFile().
// We only need the class shape here so the bundle compiles; the actual
// segmentation work happens inside the wasm/js loaded at init() time.
export class SelfieSegmentation {
  constructor(_config) {}
  setOptions(_opts) {}
  onResults(_cb) {}
  initialize() { return Promise.resolve() }
  send(_input) { return Promise.resolve() }
  reset() {}
  close() { return Promise.resolve() }
}
