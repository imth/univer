import {
  UniverActionRecorderPlugin
} from "./chunk-5JDITNY2.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YRK5BDBD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2DG6ZCHS.js";
import {
  UniverUniscriptPlugin
} from "./chunk-T5ROI373.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VRX5YZVE.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5S3GVCIJ.js";
import "./chunk-ACJBG5D6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W67OUDKD.js";
import "./chunk-R5Q556K3.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KNAG33MK.js";
import "./chunk-H5KKX4CO.js";
import "./chunk-F2HG4ICC.js";
import "./chunk-FJOLVOHL.js";
import "./chunk-PVHKSVPP.js";
import "./chunk-DH3FDBZT.js";
import "./chunk-HXD6QOJE.js";
import "./chunk-WVVHQV7W.js";
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
