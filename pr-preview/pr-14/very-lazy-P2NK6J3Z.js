import {
  UniverActionRecorderPlugin
} from "./chunk-3YOXEY6A.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UAOQE6RA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KF2AEFXE.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5EOQTIQ6.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZPSYVCA5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VJ564XUG.js";
import "./chunk-VXILA3FC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UN4FCR3P.js";
import "./chunk-APHEZZDH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-75BPAYSL.js";
import "./chunk-OP4JPT24.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-BHESN2ZP.js";
import "./chunk-KESOSEWP.js";
import "./chunk-RHAV7LHU.js";
import "./chunk-W5OPKFXQ.js";
import "./chunk-H7LC445H.js";
import "./chunk-W7B5HECI.js";
import "./chunk-PVJZH4UA.js";
import "./chunk-ZCFMLIOH.js";
import "./chunk-NCYBCTVB.js";
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
