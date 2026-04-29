import {
  UniverActionRecorderPlugin
} from "./chunk-A2WYVRNP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5HBIS3VD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-UKHYPRTG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-2PTLIIWU.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-3A7WI2HE.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SBFKPBVY.js";
import "./chunk-SK52SX2N.js";
import {
  UniverDebuggerPlugin
} from "./chunk-V5L3XH3R.js";
import "./chunk-NUMYSSOH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2Q5Y46ZC.js";
import "./chunk-JZ526HBS.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-QHE3GYBX.js";
import "./chunk-U7COZTXY.js";
import "./chunk-US4GHTPO.js";
import "./chunk-NL4BWSOT.js";
import "./chunk-6BGVBGKF.js";
import "./chunk-LJX3KESO.js";
import "./chunk-F6LNSSAA.js";
import "./chunk-AUPUCYDH.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
