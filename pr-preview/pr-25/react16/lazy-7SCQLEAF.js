import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H5KKX4CO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CITJ33XC.js";
import "./chunk-PXB5BOHU.js";
import "./chunk-FJOLVOHL.js";
import "./chunk-PVHKSVPP.js";
import "./chunk-I5DZAYHY.js";
import "./chunk-DH3FDBZT.js";
import "./chunk-WVVHQV7W.js";
import "./chunk-RMLE2HAY.js";
import "./chunk-PQSEFKLG.js";
import "./chunk-E7FKCCUV.js";
import "./chunk-J5SAR3ED.js";
import "./chunk-M7PJGVD7.js";
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
