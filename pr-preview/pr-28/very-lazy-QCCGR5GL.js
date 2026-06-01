import {
  UniverActionRecorderPlugin
} from "./chunk-6JMZ62RS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EWJKUIVG.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-RYUFVRBB.js";
import {
  UniverUniscriptPlugin
} from "./chunk-IARVNEA7.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-HRPVIQWC.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5UVOMGFD.js";
import "./chunk-VI4F7W4R.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UA7SWQM7.js";
import "./chunk-WT2L3KGQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NH4KUAXR.js";
import "./chunk-VFTYBZI5.js";
import "./chunk-32E5INCS.js";
import "./chunk-5BKQ3UGE.js";
import "./chunk-DGOLKE3J.js";
import "./chunk-ZTNTIYC7.js";
import "./chunk-D333OPGQ.js";
import "./chunk-AWWTHDNL.js";
import "./chunk-YCYH7T4W.js";
import "./chunk-ARVZLWAF.js";
import "./chunk-OH3WKAXS.js";
import "./chunk-TZSKLHKF.js";
import "./chunk-MR7DLPM2.js";
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
