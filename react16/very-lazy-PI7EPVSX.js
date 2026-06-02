import {
  UniverActionRecorderPlugin
} from "./chunk-PCH3GZAC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SJNBNNUV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5MGHPZOW.js";
import {
  UniverUniscriptPlugin
} from "./chunk-RWCD2WY7.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QKI7E43A.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-53FJPQK3.js";
import "./chunk-SDJEA6Y7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-JUQHS3HT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TZEE3RW5.js";
import "./chunk-5EQZX2ZM.js";
import "./chunk-VW3WZZGE.js";
import "./chunk-XYGGBW5H.js";
import "./chunk-NZEZJ4WA.js";
import "./chunk-TAJMLV5R.js";
import "./chunk-3RS4E3O3.js";
import "./chunk-WORBCXKB.js";
import "./chunk-CV6DP4OR.js";
import "./chunk-HY2OAPV5.js";
import "./chunk-LVNQYW4R.js";
import "./chunk-ODWOHFZR.js";
import "./chunk-AGUCVTH3.js";
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
