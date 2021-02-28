"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareMixinAppCard = void 0;
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const js_base64_1 = require("js-base64");
const context_1 = require("./context");
const shareMixinAppCard = (data, success, fail) => {
    if (context_1.mixinContext.platform) {
        location.replace(`mixin://send?category=app_card&data=${encodeURIComponent(js_base64_1.encode(JSON.stringify(data)))}`);
        success && success();
    }
    else {
        copy_to_clipboard_1.default(data.action);
        fail && fail();
    }
};
exports.shareMixinAppCard = shareMixinAppCard;
//# sourceMappingURL=share.js.map