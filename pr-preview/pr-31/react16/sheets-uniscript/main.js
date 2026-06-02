import {
  UniverUniscriptPlugin
} from "../chunk-RWCD2WY7.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-TGV5OJEG.js";
import "../chunk-TZEE3RW5.js";
import "../chunk-5EQZX2ZM.js";
import "../chunk-VW3WZZGE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-COQKICIN.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-3RNKOTDK.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-TAJMLV5R.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-3RS4E3O3.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-WORBCXKB.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-CV6DP4OR.js";
import {
  zh_CN_default
} from "../chunk-TEFKPMMF.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-HY2OAPV5.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-LVNQYW4R.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-ODWOHFZR.js";
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
