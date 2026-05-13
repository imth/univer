import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XSI67AV7.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CKSTTFUW.js";
import "./chunk-JD5HTIDB.js";
import "./chunk-CUW7VLLI.js";
import "./chunk-ENGOP3NU.js";
import "./chunk-YQYBDCF5.js";
import "./chunk-LKVXGXDI.js";
import "./chunk-XHQE667S.js";
import "./chunk-6NLCZNFG.js";
import "./chunk-LJNGJSAA.js";
import "./chunk-OZJJTPRS.js";
import "./chunk-53LCI556.js";
import "./chunk-MR7DLPM2.js";
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
