import {
  UniverActionRecorderPlugin
} from "./chunk-2NT6HHTN.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-I2OYJGW2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OJCOO4YD.js";
import {
  UniverUniscriptPlugin
} from "./chunk-YCZTM6NB.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZXQR2AZU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-IV5P4BWI.js";
import "./chunk-W6F5JI2S.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NPJU2AOD.js";
import "./chunk-XPJ3GPLX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-GYVAKLVU.js";
import "./chunk-SHEHTVFD.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-PKAHI533.js";
import "./chunk-XE2VWRU7.js";
import "./chunk-GAFEZZY4.js";
import "./chunk-HK3XLRJT.js";
import "./chunk-LCMYWWGY.js";
import "./chunk-ZITBAF2W.js";
import "./chunk-LEEVSF3X.js";
import "./chunk-JZ2VBUIL.js";
import "./chunk-U74YHLPY.js";
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
