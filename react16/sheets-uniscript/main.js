import {
  UniverUniscriptPlugin
} from "../chunk-LDXXUILK.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-E2TPAHW4.js";
import "../chunk-OLTJTSGC.js";
import "../chunk-WKLWJH5R.js";
import "../chunk-VXDMYCCW.js";
import "../chunk-GLLJOGIP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-ACJRXTAM.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-ZAU7EDEY.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-CHSE5JSO.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-KKXBLOVV.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-OQB6QELS.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-ME367ETE.js";
import {
  zh_CN_default
} from "../chunk-CDZYV7BA.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-P4DTESLN.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-WFHVUUKE.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-NDMH6LA4.js";
import {
  Univer
} from "../chunk-RXFCYNLY.js";
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
