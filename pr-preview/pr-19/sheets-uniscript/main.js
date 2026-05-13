import {
  UniverUniscriptPlugin
} from "../chunk-4DCIYCNR.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-P2DGE4XU.js";
import "../chunk-HFLTRR5X.js";
import "../chunk-QQILDGRH.js";
import "../chunk-LKRAL3A2.js";
import "../chunk-GLLJOGIP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-53MBDK6G.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-ZBBJ55TF.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-TQL525AY.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-MQ7SILF6.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-SK4TRILR.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-Y3QSWE6O.js";
import {
  zh_CN_default
} from "../chunk-CDZYV7BA.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-CYJUNQ7N.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-3QIG335W.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-YO7JIRAQ.js";
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
