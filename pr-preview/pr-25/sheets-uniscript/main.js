import {
  UniverUniscriptPlugin
} from "../chunk-2J6JMVWQ.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-5LVS2AAU.js";
import "../chunk-5KFKVRCW.js";
import "../chunk-KNAG33MK.js";
import "../chunk-KV3H7E3T.js";
import "../chunk-F2HG4ICC.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-THWVDNLS.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-I5DZAYHY.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-A2Y7KRES.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-HWERDKDR.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-HAB6LGSI.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-RMLE2HAY.js";
import {
  zh_CN_default
} from "../chunk-ROYVWBWZ.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-PQSEFKLG.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-E7FKCCUV.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-J5SAR3ED.js";
import {
  Univer
} from "../chunk-M7PJGVD7.js";
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
