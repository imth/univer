import {
  UniverSheetsFilterPlugin
} from "../chunk-5BKQ3UGE.js";
import {
  zh_CN_default
} from "../chunk-YRBPDJQT.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-ARVZLWAF.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-OH3WKAXS.js";
import "../chunk-TZSKLHKF.js";
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
