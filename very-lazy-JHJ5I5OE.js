import {
  UniverActionRecorderPlugin
} from "./chunk-KLHEHYVV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DCWRMIBR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-L4H7NER5.js";
import {
  UniverUniscriptPlugin
} from "./chunk-VKGFGTKR.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-OWCOPX25.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FI35NUDK.js";
import "./chunk-SK52SX2N.js";
import {
  UniverDebuggerPlugin
} from "./chunk-PEUSSAWF.js";
import "./chunk-2RXBWQAF.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2Q5Y46ZC.js";
import "./chunk-EI6LXNRM.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-QHE3GYBX.js";
import "./chunk-W5HYTCP5.js";
import "./chunk-DKG3ND25.js";
import "./chunk-YEMSYPPD.js";
import "./chunk-6BI4E4FH.js";
import "./chunk-QHUPZ3XV.js";
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
