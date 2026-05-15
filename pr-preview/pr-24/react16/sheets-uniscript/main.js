import {
  UniverUniscriptPlugin
} from "../chunk-YLC3FHVY.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-65MPV3TF.js";
import "../chunk-7SDOUPZO.js";
import "../chunk-YJYPSLQA.js";
import "../chunk-AQEQGIAN.js";
import "../chunk-32E5INCS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-67DUF45A.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-YQYBDCF5.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-LKVXGXDI.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-AT4KGPUX.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-XHQE667S.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-6NLCZNFG.js";
import {
  zh_CN_default
} from "../chunk-YRBPDJQT.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-LJNGJSAA.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-OZJJTPRS.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-53LCI556.js";
import {
  Univer
} from "../chunk-MR7DLPM2.js";
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
