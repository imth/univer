import {
  UniverUniscriptPlugin
} from "../chunk-5KNXT744.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-SRO3W2WC.js";
import "../chunk-FEVSF4A7.js";
import "../chunk-BI2UILIU.js";
import "../chunk-TDPOH4IQ.js";
import "../chunk-HM2RZA4P.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-BT6GNM4I.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-XTAWAYSX.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-BGDEWX3I.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-RJJP26R3.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-VQXHD755.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-3H2NVD65.js";
import {
  zh_CN_default
} from "../chunk-EB3DJFG6.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-HMW7DLMS.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-CNTBAGPE.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-PBSOXRSO.js";
import {
  Univer
} from "../chunk-KN22OUW2.js";
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
