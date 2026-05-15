import {
  UniverUniscriptPlugin
} from "../chunk-T5ROI373.js";
import "../chunk-GCGI23F5.js";
import "../chunk-CQY74AWC.js";
import "../chunk-CLMLYKFF.js";
import "../chunk-F2HG4ICC.js";
import {
  UniverSheetsUIPlugin
} from "../chunk-DH3FDBZT.js";
import {
  DEFAULT_DOCUMENT_DATA_CN
} from "../chunk-HXD6QOJE.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin
} from "../chunk-WVVHQV7W.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-RMLE2HAY.js";
import {
  zh_CN_default
} from "../chunk-ROYVWBWZ.js";
import "../chunk-PQSEFKLG.js";
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

// src/docs-uniscript/main.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic",
  footer: false
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverUniscriptPlugin, {
  getWorkerUrl(moduleID, label) {
    if (label === "typescript" || label === "javascript") {
      return "/vs/language/typescript/ts.worker.js";
    }
    return "/vs/editor/editor.worker.js";
  }
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_CN);
window.univer = univer;
