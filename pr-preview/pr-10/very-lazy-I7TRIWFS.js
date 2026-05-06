import {
  UniverActionRecorderPlugin
} from "./chunk-EVN3WWNV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ZYKZ3QJX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KNJPYBXO.js";
import {
  UniverUniscriptPlugin
} from "./chunk-LDXXUILK.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZIFFBWPS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XSWE3GYB.js";
import "./chunk-TUDJHTXO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SAZBCAVV.js";
import "./chunk-OLTJTSGC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-WKLWJH5R.js";
import "./chunk-VXDMYCCW.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-JWYSWANJ.js";
import "./chunk-IKXTJOBU.js";
import "./chunk-CHSE5JSO.js";
import "./chunk-KKXBLOVV.js";
import "./chunk-OQB6QELS.js";
import "./chunk-ME367ETE.js";
import "./chunk-P4DTESLN.js";
import "./chunk-WFHVUUKE.js";
import "./chunk-NDMH6LA4.js";
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
