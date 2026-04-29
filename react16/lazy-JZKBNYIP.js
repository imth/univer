import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EI6LXNRM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YOJAITA6.js";
import "./chunk-5RETGFZ5.js";
import "./chunk-QHE3GYBX.js";
import "./chunk-W5HYTCP5.js";
import "./chunk-4L54LCYD.js";
import "./chunk-DKG3ND25.js";
import "./chunk-6BI4E4FH.js";
import "./chunk-QHUPZ3XV.js";
import "./chunk-F6LNSSAA.js";
import "./chunk-AUPUCYDH.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
