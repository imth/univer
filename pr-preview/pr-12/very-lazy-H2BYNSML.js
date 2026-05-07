import {
  UniverActionRecorderPlugin
} from "./chunk-OQ35DD2W.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2DEK6RIA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OT4Y3KK6.js";
import {
  UniverUniscriptPlugin
} from "./chunk-PEEETMXT.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4SCT5Q3N.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UEKS36SD.js";
import "./chunk-562R7UQK.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FMJLHL5L.js";
import "./chunk-JHX2I7ZT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-EENPKLZZ.js";
import "./chunk-H677YOA4.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-HH5C53SC.js";
import "./chunk-THOVHZD3.js";
import "./chunk-G6CJXC4A.js";
import "./chunk-YQZE33SE.js";
import "./chunk-XF2DIZSE.js";
import "./chunk-JGZS7AX4.js";
import "./chunk-OSVIMPGP.js";
import "./chunk-TZZREQS5.js";
import "./chunk-Z5E4FBP3.js";
import "./chunk-RXFCYNLY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin]);
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
