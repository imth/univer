import {
  UniverSheetsFilterPlugin
} from "../chunk-CUW7VLLI.js";
import {
  zh_CN_default
} from "../chunk-YRBPDJQT.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-LJNGJSAA.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-OZJJTPRS.js";
import "../chunk-53LCI556.js";
import {
  Univer
} from "../chunk-MR7DLPM2.js";
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
