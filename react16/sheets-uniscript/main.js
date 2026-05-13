import {
  UniverUniscriptPlugin
} from "../chunk-CL7R7J6I.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-UNYHVPNY.js";
import "../chunk-HSOCFSU5.js";
import "../chunk-CXA5KQ3D.js";
import "../chunk-Q33T22F3.js";
import "../chunk-GLLJOGIP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-TGI4IBQU.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-VP5TOKSI.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-XDZ5CUIG.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-KSHKBW3R.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-WROESJ3X.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-O757RHHG.js";
import {
  zh_CN_default
} from "../chunk-CDZYV7BA.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-HSOKXHAZ.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-MJAXIOMM.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-SFWFNTNZ.js";
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
