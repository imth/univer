import {
  UniverUniscriptPlugin
} from "../chunk-GGMGFC3S.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import {
  UniverDebuggerPlugin
} from "../chunk-WINCC6FI.js";
import "../chunk-J3PVGPNI.js";
import "../chunk-3C4OY2I7.js";
import "../chunk-7HAQKVDX.js";
import "../chunk-HM2RZA4P.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-GIDUVHSJ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-T3GMOP2R.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-5AQH5H5L.js";
import {
  UNISCRIT_WORKBOOK_DATA_DEMO
} from "../chunk-SVW75NOL.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-QVAAKY2I.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-WAAGLRXD.js";
import {
  zh_CN_default
} from "../chunk-EB3DJFG6.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-4LFMFKL5.js";
import {
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin
} from "../chunk-EWRU3GCM.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-7USV3ESF.js";
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
