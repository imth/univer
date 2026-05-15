import {
  UniverSheetsFilterPlugin
} from "../chunk-FJOLVOHL.js";
import {
  zh_CN_default
} from "../chunk-ROYVWBWZ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-PQSEFKLG.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-E7FKCCUV.js";
import "../chunk-J5SAR3ED.js";
import {
  Univer
} from "../chunk-M7PJGVD7.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  }
});
univer.registerPlugins([
  [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
  [UniverFormulaEnginePlugin],
  [UniverRPCWorkerThreadPlugin],
  [UniverRemoteSheetsFormulaPlugin],
  [UniverSheetsFilterPlugin]
]);
self.univer = univer;
