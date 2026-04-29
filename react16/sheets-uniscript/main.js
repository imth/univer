import {
  UniverUniscriptPlugin
} from "../chunk-VKGFGTKR.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-LLXNSXWQ.js";
import "../chunk-2RXBWQAF.js";
import "../chunk-2Q5Y46ZC.js";
import "../chunk-EI6LXNRM.js";
import "../chunk-HM2RZA4P.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-PB6TJOTT.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-4L54LCYD.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DKG3ND25.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-YEMSYPPD.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-6BI4E4FH.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-QHUPZ3XV.js";
import {
  zh_CN_default
} from "../chunk-EB3DJFG6.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-F6LNSSAA.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-AUPUCYDH.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-QYXLJWB3.js";
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
