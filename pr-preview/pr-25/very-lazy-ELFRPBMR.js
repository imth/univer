import {
  UniverActionRecorderPlugin
} from "./chunk-N67LAXF3.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VLEXSMHU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-XMKJIIHR.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5337HOIH.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-N2FV7ZWM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RJY5PMEH.js";
import "./chunk-ACJBG5D6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RWCMKRFR.js";
import "./chunk-BIX6BSKM.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KNAG33MK.js";
import "./chunk-3S6ASZEZ.js";
import "./chunk-F2HG4ICC.js";
import "./chunk-FJOLVOHL.js";
import "./chunk-ZSYF6MTV.js";
import "./chunk-CDAHGIVN.js";
import "./chunk-BLSEFJEV.js";
import "./chunk-A2LTVDIE.js";
import "./chunk-RMLE2HAY.js";
import "./chunk-PQSEFKLG.js";
import "./chunk-E7FKCCUV.js";
import "./chunk-J5SAR3ED.js";
import "./chunk-M7PJGVD7.js";
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
