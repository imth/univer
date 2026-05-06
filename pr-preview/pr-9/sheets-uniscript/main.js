import {
  UniverUniscriptPlugin
} from "../chunk-FG3EPOIJ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-OVOEYEA7.js";
import "../chunk-NYCJEMS2.js";
import "../chunk-DH4W5MI2.js";
import "../chunk-O2IPJ4FZ.js";
import "../chunk-GLLJOGIP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-TSIJPLCV.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-7CTVKCQT.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-HIQGBEGJ.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-5HXVVKLM.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-JPEJESUU.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-TAIZCCTW.js";
import {
  zh_CN_default
} from "../chunk-CDZYV7BA.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-YCGSDOUF.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-KGVU6IBH.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-TN3DLTSL.js";
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
