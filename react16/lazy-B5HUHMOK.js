import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JZ526HBS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2DW6PSUZ.js";
import "./chunk-5RETGFZ5.js";
import "./chunk-QHE3GYBX.js";
import "./chunk-U7COZTXY.js";
import "./chunk-4L54LCYD.js";
import "./chunk-US4GHTPO.js";
import "./chunk-6BGVBGKF.js";
import "./chunk-LJX3KESO.js";
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
