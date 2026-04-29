import {
  UniverActionRecorderPlugin
} from "./chunk-YGEWP5AP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LQDTXP2S.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VCKXRBDN.js";
import {
  UniverUniscriptPlugin
} from "./chunk-GGMGFC3S.js";
import "./chunk-GCGI23F5.js";
import "./chunk-CQY74AWC.js";
import "./chunk-CLMLYKFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4FGUYO3L.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SQPH3FDG.js";
import "./chunk-ZQZSRUMO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-WINCC6FI.js";
import "./chunk-J3PVGPNI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3C4OY2I7.js";
import "./chunk-7HAQKVDX.js";
import "./chunk-HM2RZA4P.js";
import "./chunk-WFZN5P7Q.js";
import "./chunk-KNNCWYZJ.js";
import "./chunk-5AQH5H5L.js";
import "./chunk-SVW75NOL.js";
import "./chunk-QVAAKY2I.js";
import "./chunk-WAAGLRXD.js";
import "./chunk-4LFMFKL5.js";
import "./chunk-EWRU3GCM.js";
import "./chunk-7USV3ESF.js";
import "./chunk-KN22OUW2.js";
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
