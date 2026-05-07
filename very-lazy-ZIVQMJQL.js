import {
  UniverActionRecorderPlugin
} from "./chunk-QRFWBFSD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BCFT52MK.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-AL3GFD2Z.js";
import {
  UniverUniscriptPlugin
} from "./chunk-TXQOSWO2.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JI2ECW6T.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-CRFHFSNI.js";
import "./chunk-3O56Q7JX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-F6VOTS4G.js";
import "./chunk-S6XI6XHZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3K2X7H57.js";
import "./chunk-3S3BSE65.js";
import "./chunk-GLLJOGIP.js";
import "./chunk-KYN535KI.js";
import "./chunk-EI2TEFDE.js";
import "./chunk-YGIF56FI.js";
import "./chunk-TS3SH2KF.js";
import "./chunk-LFPIB5AQ.js";
import "./chunk-532SQ457.js";
import "./chunk-QBIHOX7Z.js";
import "./chunk-EXRU3EBB.js";
import "./chunk-YP3FTPWW.js";
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
