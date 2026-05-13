import {
  UniverActionRecorderPlugin
} from "./chunk-OAM6DI35.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-22XFJIWQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-TN63XHXE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KXCHI2FZ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YDEAAVYJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QIVY2EQK.js";
import "./chunk-3YUHUVYC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ZRF67TEA.js";
import "./chunk-32V2M4NI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KCGP6OFY.js";
import "./chunk-MJWEYAR4.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-NMCUS4LF.js";
import "./chunk-CZBBG6HS.js";
import "./chunk-3EXW5FV6.js";
import "./chunk-BIUNMLGF.js";
import "./chunk-2LYTGUQY.js";
import "./chunk-Y7KEDE7P.js";
import "./chunk-4KT7BDSK.js";
import "./chunk-EVZQHTBF.js";
import "./chunk-U7RR6SAI.js";
import "./chunk-RXFCYNLY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/very-lazy.ts
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
