import "react";
import "react-dom";
import { t as e } from "./tsvb-Br5jW706.mjs";
//#region node_modules/@100mslive/hms-virtual-background/dist/esm/HMSEffectsPlugin.js
var t = (e, t, n) => new Promise((r, i) => {
	var a = (e) => {
		try {
			s(n.next(e));
		} catch (e) {
			i(e);
		}
	}, o = (e) => {
		try {
			s(n.throw(e));
		} catch (e) {
			i(e);
		}
	}, s = (e) => e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
	s((n = n.apply(e, t)).next());
}), n = "https://static.100ms.live/effectsdk/3.6.2/", r = class {
	constructor(t, r) {
		this.blurAmount = 0, this.backgroundType = "none", this.preset = "balanced", this.TAG = "[HMSEffectsPlugin]", this.operationQueue = Promise.resolve(), this.effectRequestId = 0, this.effects = new e(t), this.onInit = r, this.initPromise = new Promise((e) => {
			this.resolveInit = e;
		}), this.effects.config({
			sdk_url: n,
			models: {
				colorcorrector: "",
				facedetector: "",
				lowlighter: ""
			},
			test_inference: !0,
			wasmPaths: {
				"ort-wasm.wasm": `${n}ort-wasm.wasm`,
				"ort-wasm-simd.wasm": `${n}ort-wasm-simd.wasm`,
				"ort-wasm-simd.jsep.wasm": `${n}ort-wasm-simd.jsep.wasm`
			}
		}), this.effects.onError((e) => {
			e.type === "error" && e.message && console.error(this.TAG, "Effects SDK error:", e.message);
		}), this.effects.cache(), this.effects.onReady = () => {
			var e;
			this.effects && (this.resolveInit(), (e = this.onInit) == null || e.call(this), this.effects.setBackgroundFitMode("fill"), this.effects.setSegmentationPreset(this.preset));
		};
	}
	getName() {
		return "HMSEffects";
	}
	isSupported() {
		return this.effects.isSupported();
	}
	enqueueOperation(e) {
		return this.operationQueue = this.operationQueue.then(() => this.initPromise).then(() => e()).catch((e) => {
			console.error(this.TAG, "Operation failed:", e);
		}), this.operationQueue;
	}
	removeBlur() {
		this.blurAmount = 0, this.backgroundType === "blur" && (this.backgroundType = "none");
		let e = ++this.effectRequestId;
		this.enqueueOperation(() => {
			e === this.effectRequestId && this.effects.clearBlur();
		});
	}
	removeBackground() {
		this.background = "", this.backgroundType === "image" && (this.backgroundType = "none");
		let e = ++this.effectRequestId;
		this.enqueueOperation(() => {
			e === this.effectRequestId && this.effects.clearBackground();
		});
	}
	setBlur(e) {
		if (e < 0 || e > 1) throw Error("Blur amount should be between 0 and 1");
		this.blurAmount = e, this.background = "", this.backgroundType = "blur";
		let t = ++this.effectRequestId;
		this.enqueueOperation(() => {
			t === this.effectRequestId && (this.effects.clearBackground(), this.effects.setBlur(this.blurAmount), this.effects.run());
		});
	}
	setPreset(e) {
		return t(this, null, function* () {
			return this.preset = e, new Promise((e, t) => {
				this.enqueueOperation(() => {
					this.effects.setSegmentationPreset(this.preset).then(e).catch(t);
				});
			});
		});
	}
	onResolutionChange(e) {
		this.onResolutionChangeCallback = e;
	}
	getPreset() {
		return this.preset;
	}
	removeEffects() {
		this.backgroundType = "none", this.background = "", this.blurAmount = 0;
		let e = ++this.effectRequestId;
		this.enqueueOperation(() => {
			e === this.effectRequestId && (this.effects.clearBackground(), this.effects.clearBlur(), this.effects.stop());
		});
	}
	setBackground(e) {
		if (!e) throw Error("Background url cannot be empty");
		this.background = e, this.blurAmount = 0, this.backgroundType = "image";
		let t = ++this.effectRequestId;
		this.enqueueOperation(() => {
			t === this.effectRequestId && (this.effects.clearBlur(), this.effects.setBackground(this.background), this.effects.run());
		});
	}
	getBlurAmount() {
		return this.blurAmount;
	}
	getBackground() {
		return this.background || this.backgroundType;
	}
	getMetrics() {
		var e;
		return (e = this.effects).getMetrics?.call(e);
	}
	apply(e) {
		return this.effects.clear(), this.applyEffect(), this.effects.onChangeInputResolution(() => {
			var e;
			let t = this.effects.getStream();
			if (t) {
				let { height: n, width: r } = t.getVideoTracks()[0].getSettings();
				(e = this.onResolutionChangeCallback) == null || e.call(this, r, n);
			}
		}), this.effects.useStream(e), this.effects.getStream() || e;
	}
	stop() {
		this.removeEffects();
	}
	applyEffect() {
		this.blurAmount ? this.setBlur(this.blurAmount) : this.background && this.setBackground(this.background);
	}
};
//#endregion
export { r as HMSEffectsPlugin };
