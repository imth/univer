import {
  UniverActionRecorderPlugin
} from "./chunk-NUYWSPT3.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VBT63GPZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3FD6CQEQ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-FG3EPOIJ.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-G46RUMOI.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-W4IQU4YN.js";
import "./chunk-U2WWCADK.js";
import {
  UniverDebuggerPlugin
} from "./chunk-B2W5C7IH.js";
import "./chunk-NYCJEMS2.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DH4W5MI2.js";
import "./chunk-O2IPJ4FZ.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-SEVCTQ3A.js";
import "./chunk-EOBSCXRK.js";
import "./chunk-HIQGBEGJ.js";
import "./chunk-5HXVVKLM.js";
import "./chunk-JPEJESUU.js";
import "./chunk-TAIZCCTW.js";
import "./chunk-YCGSDOUF.js";
import "./chunk-KGVU6IBH.js";
import "./chunk-TN3DLTSL.js";
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
