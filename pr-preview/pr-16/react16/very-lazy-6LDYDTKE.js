import {
  UniverActionRecorderPlugin
} from "./chunk-53TDSJTH.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-X4TUYZCQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OHR5AMI5.js";
import {
  UniverUniscriptPlugin
} from "./chunk-CZTQ4IC2.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UDEA23JD.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DVLQ76BX.js";
import "./chunk-ZN33EX7B.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4VHUZUQ4.js";
import "./chunk-O57ZKDID.js";
import {
  UniverWatermarkPlugin
} from "./chunk-CQOIX53H.js";
import "./chunk-XROPR5BN.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-JRJHP7S4.js";
import "./chunk-KA2DML4H.js";
import "./chunk-OTTVWBEA.js";
import "./chunk-BJBNBCOY.js";
import "./chunk-SRBSH6F4.js";
import "./chunk-LTAJG2GS.js";
import "./chunk-55QJK6MU.js";
import "./chunk-ZZJA2GVV.js";
import "./chunk-73QXLKSZ.js";
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
