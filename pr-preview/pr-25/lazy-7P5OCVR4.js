import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3S6ASZEZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FGXQG23U.js";
import "./chunk-PXB5BOHU.js";
import "./chunk-FJOLVOHL.js";
import "./chunk-ZSYF6MTV.js";
import "./chunk-I5DZAYHY.js";
import "./chunk-CDAHGIVN.js";
import "./chunk-A2LTVDIE.js";
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
