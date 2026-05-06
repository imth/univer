import {
  UniverSheetsFilterPlugin
} from "../chunk-YHHX4EDX.js";
import {
  zh_CN_default
} from "../chunk-EB3DJFG6.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-J7KWERHJ.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-OV4JCWTQ.js";
import "../chunk-PHMHGCNA.js";
import {
  Univer
} from "../chunk-KN22OUW2.js";
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
