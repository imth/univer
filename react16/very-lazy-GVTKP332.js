import {
  UniverActionRecorderPlugin
} from "./chunk-LIVIXYUL.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XVNYQXSO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OX5EIYUZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-5JAVPANN.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IATTSHFS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-YWJRLVBC.js";
import "./chunk-3ZCHNMG2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HEEVQZAY.js";
import "./chunk-FFSSQRSL.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JGBSSIFR.js";
import "./chunk-TKU54CML.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-YHHX4EDX.js";
import "./chunk-RJTR5ZQ7.js";
import "./chunk-LLROKE42.js";
import "./chunk-HCQ36VEC.js";
import "./chunk-EPGPLS2V.js";
import "./chunk-HDNFHLII.js";
import "./chunk-J7KWERHJ.js";
import "./chunk-OV4JCWTQ.js";
import "./chunk-PHMHGCNA.js";
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
