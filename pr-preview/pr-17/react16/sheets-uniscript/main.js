import {
  UniverUniscriptPlugin
} from "../chunk-CZTQ4IC2.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-R4JABW27.js";
import "../chunk-O57ZKDID.js";
import "../chunk-CQOIX53H.js";
import "../chunk-XROPR5BN.js";
import "../chunk-GLLJOGIP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-YET5GO4N.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-GR5RHQYW.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-OTTVWBEA.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-BJBNBCOY.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-SRBSH6F4.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-LTAJG2GS.js";
import {
  zh_CN_default
} from "../chunk-CDZYV7BA.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-55QJK6MU.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-ZZJA2GVV.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-73QXLKSZ.js";
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
