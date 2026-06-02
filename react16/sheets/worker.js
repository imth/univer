import {
  UniverSheetsFilterPlugin
} from "../chunk-XYGGBW5H.js";
import {
  zh_CN_default
} from "../chunk-TEFKPMMF.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-HY2OAPV5.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-LVNQYW4R.js";
import "../chunk-ODWOHFZR.js";
import {
  Univer
} from "../chunk-AGUCVTH3.js";
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
