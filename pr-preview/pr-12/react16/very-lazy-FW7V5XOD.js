import {
  UniverActionRecorderPlugin
} from "./chunk-IMEBCQOS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2VG352RB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-C72RXIN3.js";
import {
  UniverUniscriptPlugin
} from "./chunk-L6JCS3RX.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6ARKAZUU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-W7IP6X6X.js";
import "./chunk-DUBULVHJ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GQIULMYK.js";
import "./chunk-3RPQYMIW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-R2RIT76L.js";
import "./chunk-KS76DS4K.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-G2IRZJPX.js";
import "./chunk-O3IFZN76.js";
import "./chunk-XV3DV4GL.js";
import "./chunk-7ZRRZ7WA.js";
import "./chunk-ECUUJW4X.js";
import "./chunk-UTQ3MIPI.js";
import "./chunk-HLLAQN3R.js";
import "./chunk-WOLJGEFA.js";
import "./chunk-3Y3FTDJE.js";
import "./chunk-RXFCYNLY.js";
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
