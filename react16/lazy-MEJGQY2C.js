import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-R75WIQQJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-D22UMSAC.js";
import "./chunk-RCFVT6UA.js";
import "./chunk-QONLHEDA.js";
import "./chunk-SZVFURCV.js";
import "./chunk-MWBVRRLU.js";
import "./chunk-BGBIKM5E.js";
import "./chunk-RWPMR47C.js";
import "./chunk-NFRVCGXI.js";
import "./chunk-DDNH2LYO.js";
import "./chunk-FHKGEGDD.js";
import "./chunk-VGF75R5Y.js";
import "./chunk-AGUCVTH3.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
