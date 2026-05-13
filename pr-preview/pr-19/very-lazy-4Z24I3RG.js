import {
  UniverActionRecorderPlugin
} from "./chunk-2N243MYR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-G2JQUUZP.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KPEE3CCG.js";
import {
  UniverUniscriptPlugin
} from "./chunk-4DCIYCNR.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FKQBTDIQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VG5OWX73.js";
import "./chunk-37VBDGXX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-P2DGE4XU.js";
import "./chunk-HFLTRR5X.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QQILDGRH.js";
import "./chunk-LKRAL3A2.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-25WV3IE6.js";
import "./chunk-C62STZSC.js";
import "./chunk-TQL525AY.js";
import "./chunk-MQ7SILF6.js";
import "./chunk-SK4TRILR.js";
import "./chunk-Y3QSWE6O.js";
import "./chunk-CYJUNQ7N.js";
import "./chunk-3QIG335W.js";
import "./chunk-YO7JIRAQ.js";
import "./chunk-RXFCYNLY.js";
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
