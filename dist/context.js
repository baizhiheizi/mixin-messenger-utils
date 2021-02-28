"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixinContext = void 0;
const getMixinContext = () => {
    let ctx = {};
    if (window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.MixinContext) {
        ctx = JSON.parse(prompt("MixinContext.getContext()") || "");
        ctx.platform = ctx.platform || "iOS";
    }
    else if (window.MixinContext &&
        typeof window.MixinContext.getContext === "function") {
        ctx = JSON.parse(window.MixinContext.getContext());
        ctx.platform = ctx.platform || "Android";
    }
    ctx.appVersion = ctx.app_version;
    ctx.conversationId = ctx.conversation_id;
    return ctx;
};
exports.mixinContext = getMixinContext();
//# sourceMappingURL=context.js.map