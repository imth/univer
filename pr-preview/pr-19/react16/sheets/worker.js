import {
  UniverSheetsFilterPlugin
} from "../chunk-25WV3IE6.js";
import {
  zh_CN_default
} from "../chunk-CDZYV7BA.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-CYJUNQ7N.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-3QIG335W.js";
import "../chunk-YO7JIRAQ.js";
import {
  Univer
} from "../chunk-RXFCYNLY.js";
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
