import {
  UniverUniscriptPlugin
} from "../chunk-2FALKZTN.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-JO5PFQ5B.js";
import "../chunk-UJ3QZ2LJ.js";
import "../chunk-R75WIQQJ.js";
import "../chunk-VW3WZZGE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-3OUTO23H.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-MWBVRRLU.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-BGBIKM5E.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-5UF6K5II.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-RWPMR47C.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-NFRVCGXI.js";
import {
  zh_CN_default
} from "../chunk-TEFKPMMF.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-DDNH2LYO.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-FHKGEGDD.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-VGF75R5Y.js";
import {
  Univer
} from "../chunk-AGUCVTH3.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets-uniscript/main.ts
var IS_E2E = false;
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic"
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(_, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
if (IS_E2E) {
  univer.registerPlugin(UniverDebuggerPlugin, {
    fab: false,
    performanceMonitor: {
      enabled: false
    }
  });
}
univer.createUnit(2 /* UNIVER_SHEET */, UNISCRIT_WORKBOOK_DATA_DEMO);
window.univer = univer;
