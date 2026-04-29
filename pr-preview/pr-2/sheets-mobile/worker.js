import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-AUPUCYDH.js";
import "../chunk-QYXLJWB3.js";
import {
  Univer
} from "../chunk-KN22OUW2.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets-mobile/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true });
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverRPCWorkerThreadPlugin);
self.univer = univer;
