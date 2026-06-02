import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5EQZX2ZM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YXCIWDCH.js";
import "./chunk-3FOX6JA3.js";
import "./chunk-XYGGBW5H.js";
import "./chunk-NZEZJ4WA.js";
import "./chunk-3RNKOTDK.js";
import "./chunk-TAJMLV5R.js";
import "./chunk-WORBCXKB.js";
import "./chunk-CV6DP4OR.js";
import "./chunk-HY2OAPV5.js";
import "./chunk-LVNQYW4R.js";
import "./chunk-ODWOHFZR.js";
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
