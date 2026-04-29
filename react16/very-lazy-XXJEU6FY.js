import {
  UniverActionRecorderPlugin
} from "./chunk-V7U7JWCS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MUQI3GXE.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KO6NXRMG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5QR5G7WR.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZBOEMMIO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7A3VGSOU.js";
import "./chunk-SK52SX2N.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6JEF4QDK.js";
import "./chunk-M32VSJTW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2Q5Y46ZC.js";
import "./chunk-I3TANQBH.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-QHE3GYBX.js";
import "./chunk-BKXHVGES.js";
import "./chunk-E2DEMQQU.js";
import "./chunk-NBHWZPCR.js";
import "./chunk-4URBNYAO.js";
import "./chunk-JAWGSHYY.js";
import "./chunk-F6LNSSAA.js";
import "./chunk-AUPUCYDH.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
