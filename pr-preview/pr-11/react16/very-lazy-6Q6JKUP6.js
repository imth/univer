import {
  UniverActionRecorderPlugin
} from "./chunk-XJ5YQEM4.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ANSXM6MO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-U5SKMUTY.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KIQJEENG.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BWTP7LSA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SW5UA6RR.js";
import "./chunk-Y5U6L52U.js";
import {
  UniverDebuggerPlugin
} from "./chunk-BBQMARHL.js";
import "./chunk-FEMKZ7XI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-622JGF2V.js";
import "./chunk-MIS5AI4E.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-CV44LTQV.js";
import "./chunk-745JPES5.js";
import "./chunk-A2IMCSEE.js";
import "./chunk-KQ25NPPU.js";
import "./chunk-C72FZPR3.js";
import "./chunk-3W5OARJG.js";
import "./chunk-6OAZQ7KO.js";
import "./chunk-4GH4Q4IP.js";
import "./chunk-LVPQOPM6.js";
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
