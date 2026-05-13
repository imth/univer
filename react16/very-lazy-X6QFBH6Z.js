import {
  UniverActionRecorderPlugin
} from "./chunk-4TMAINML.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MMBQQG54.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QDQ65B45.js";
import {
  UniverUniscriptPlugin
} from "./chunk-CL7R7J6I.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BDHKHNTZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-Y7BQU7BZ.js";
import "./chunk-PFYJEY7M.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UNYHVPNY.js";
import "./chunk-HSOCFSU5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-CXA5KQ3D.js";
import "./chunk-Q33T22F3.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-HBZUPJCB.js";
import "./chunk-CROIVHJT.js";
import "./chunk-XDZ5CUIG.js";
import "./chunk-KSHKBW3R.js";
import "./chunk-WROESJ3X.js";
import "./chunk-O757RHHG.js";
import "./chunk-HSOKXHAZ.js";
import "./chunk-MJAXIOMM.js";
import "./chunk-SFWFNTNZ.js";
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
