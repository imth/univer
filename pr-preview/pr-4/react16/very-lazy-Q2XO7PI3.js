import {
  UniverActionRecorderPlugin
} from "./chunk-TMG7QFJV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ZWS34S2J.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-O4IWTJBR.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5KNXT744.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-AG2GMZQY.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SLOKBH6A.js";
import "./chunk-SX2V3KQW.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VGBUVXKD.js";
import "./chunk-FEVSF4A7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-BI2UILIU.js";
import "./chunk-TDPOH4IQ.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-RCFF3KUN.js";
import "./chunk-GUTRRKXY.js";
import "./chunk-BGDEWX3I.js";
import "./chunk-RJJP26R3.js";
import "./chunk-VQXHD755.js";
import "./chunk-3H2NVD65.js";
import "./chunk-HMW7DLMS.js";
import "./chunk-CNTBAGPE.js";
import "./chunk-PBSOXRSO.js";
import "./chunk-KN22OUW2.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets/very-lazy.ts
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
