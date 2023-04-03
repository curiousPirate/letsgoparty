"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.jsx
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_react = require("react");
var import_prop_types = __toESM(require("prop-types"));
var DefaultCanvasSize = 16;
var linkElements = [];
var drawAlert = (context, { fillColor, text, textColor, canvasSize }) => {
  const Padding = canvasSize / 5;
  context.font = `bold ${canvasSize - Padding * 2}px arial`;
  const w = Math.min(
    // Take the text with if it's smaller than available space (eg: '2')
    context.measureText(text).width,
    // Or take the maximum size we'll force our text to fit in anyway (eg: '1000000')
    canvasSize - Padding
  ) + Padding;
  const x = canvasSize - w;
  const y = canvasSize / 2 - Padding;
  const h = Padding + canvasSize / 2;
  const r = Math.min(w / 2, h / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + w, y, x + w, y + h, r);
  context.arcTo(x + w, y + h, x, y + h, r);
  context.arcTo(x, y + h, x, y, r);
  context.arcTo(x, y, x + w, y, r);
  context.closePath();
  context.fillStyle = fillColor;
  context.fill();
  context.fillStyle = textColor;
  context.textBaseline = "bottom";
  context.textAlign = "right";
  context.fillText(
    text,
    canvasSize - Padding / 2,
    canvasSize,
    // This will prevent the text from going outside the favicon, instead it'll squeeze his with to fit in
    canvasSize - Padding
  );
};
var drawIcon = ({
  alertCount,
  alertFillColor,
  alertTextColor,
  callback,
  renderOverlay,
  url: src,
  canvasSize
}) => {
  const img = document.createElement("img");
  img.crossOrigin = "Anonymous";
  img.onload = function() {
    const canvas = document.createElement("canvas");
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, img.width, img.height);
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    if (alertCount) {
      drawAlert(context, {
        fillColor: alertFillColor,
        textColor: alertTextColor,
        text: alertCount,
        canvasSize
      });
    }
    if (renderOverlay) {
      renderOverlay(canvas, context);
    }
    callback(context.canvas.toDataURL());
  };
  img.src = src;
};
var updateHtmlIconLink = (keepIconLink) => {
  if (typeof document === "undefined") {
    return;
  }
  if (linkElements.length === 0) {
    var head = document.getElementsByTagName("head")[0];
    const linkEl = document.createElement("link");
    linkEl.type = "image/x-icon";
    linkEl.rel = "icon";
    const linkApple = document.createElement("link");
    linkApple.rel = "apple-touch-icon";
    linkElements.push(linkEl, linkApple);
    var links = head.getElementsByTagName("link");
    for (var i = links.length; --i >= 0; ) {
      if (/\bicon\b/i.test(links[i].getAttribute("rel")) && !keepIconLink(links[i])) {
        head.removeChild(links[i]);
      }
    }
    linkElements.forEach((el) => head.appendChild(el));
  }
};
var Favicon = ({
  iconSize,
  alertCount,
  alertFillColor,
  alertTextColor,
  animated,
  animationDelay,
  keepIconLink,
  renderOverlay,
  url
}) => {
  const animationIndex = (0, import_react.useRef)(0);
  const animationTickIntervalId = (0, import_react.useRef)(null);
  const [, updateState] = (0, import_react.useState)();
  const forceUpdate = (0, import_react.useCallback)(() => updateState({}), []);
  const onAnimationTick = (0, import_react.useCallback)(() => {
    updateHtmlIconLink(keepIconLink);
    animationIndex.current = (animationIndex.current + 1) % url.length;
    forceUpdate();
  }, [forceUpdate, keepIconLink, url]);
  (0, import_react.useEffect)(() => {
    onAnimationTick();
  }, [onAnimationTick]);
  const isAnimated = url instanceof Array && animated;
  (0, import_react.useEffect)(() => {
    if (isAnimated) {
      if (!animationTickIntervalId.current) {
        const intervalId = setInterval(onAnimationTick, animationDelay);
        animationTickIntervalId.current = intervalId;
      }
    } else {
      if (animationTickIntervalId.current) {
        clearInterval(animationTickIntervalId.current);
        animationTickIntervalId.current = null;
        updateHtmlIconLink(keepIconLink);
      }
    }
  }, [animationDelay, isAnimated, keepIconLink, onAnimationTick, url]);
  const currentUrl = isAnimated ? url[animationIndex.current] : url instanceof Array ? url[0] : url;
  if (alertCount || renderOverlay) {
    drawIcon({
      alertCount,
      alertFillColor,
      alertTextColor,
      callback: (url2) => {
        linkElements.forEach((el) => el.href = url2);
      },
      renderOverlay,
      url: currentUrl,
      canvasSize: iconSize
    });
  } else {
    linkElements.forEach((el) => el.href = currentUrl);
  }
  return null;
};
Favicon.defaultProps = {
  iconSize: DefaultCanvasSize,
  alertCount: null,
  alertFillColor: "red",
  alertTextColor: "white",
  animated: true,
  animationDelay: 500,
  keepIconLink: () => false,
  renderOverlay: null,
  url: null
};
Favicon.propTypes = {
  iconSize: import_prop_types.default.number,
  alertCount: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  alertFillColor: import_prop_types.default.string,
  alertTextColor: import_prop_types.default.string,
  animated: import_prop_types.default.bool,
  animationDelay: import_prop_types.default.number,
  keepIconLink: import_prop_types.default.func,
  renderOverlay: import_prop_types.default.func,
  url: import_prop_types.default.oneOfType([
    import_prop_types.default.arrayOf(import_prop_types.default.string),
    import_prop_types.default.string
  ]).isRequired
};
var src_default = Favicon;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
module.exports = module.exports.default;
//# sourceMappingURL=index.js.map