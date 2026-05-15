import {
  UniverActionRecorderPlugin
} from "./chunk-UMQNITIQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ZL5P4URW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HUIQ6LCZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-YLC3FHVY.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YTNQR56Y.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MDXMMS6L.js";
import "./chunk-5SIMKMJF.js";
import {
  UniverDebuggerPlugin
} from "./chunk-B7WLLW5T.js";
import "./chunk-E6VAVGYR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-YJYPSLQA.js";
import "./chunk-INBG5SZW.js";
import "./chunk-32E5INCS.js";
import "./chunk-CUW7VLLI.js";
import "./chunk-ENGOP3NU.js";
import "./chunk-LKVXGXDI.js";
import "./chunk-AT4KGPUX.js";
import "./chunk-XHQE667S.js";
import "./chunk-6NLCZNFG.js";
import "./chunk-LJNGJSAA.js";
import "./chunk-OZJJTPRS.js";
import "./chunk-53LCI556.js";
import "./chunk-MR7DLPM2.js";
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
