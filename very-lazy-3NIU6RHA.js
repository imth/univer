import {
  UniverActionRecorderPlugin
} from "./chunk-EB2XWY2Y.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GVI2WEUB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MMJAN6NN.js";
import {
  UniverUniscriptPlugin
} from "./chunk-2FALKZTN.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BVRGHH7U.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-S2KHV4SL.js";
import "./chunk-PDIQKNQQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ELIHJTE5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-UJ3QZ2LJ.js";
import "./chunk-R75WIQQJ.js";
import "./chunk-VW3WZZGE.js";
import "./chunk-QONLHEDA.js";
import "./chunk-SZVFURCV.js";
import "./chunk-BGBIKM5E.js";
import "./chunk-5UF6K5II.js";
import "./chunk-RWPMR47C.js";
import "./chunk-NFRVCGXI.js";
import "./chunk-DDNH2LYO.js";
import "./chunk-FHKGEGDD.js";
import "./chunk-VGF75R5Y.js";
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
