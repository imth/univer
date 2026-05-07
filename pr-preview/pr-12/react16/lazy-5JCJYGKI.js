import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H677YOA4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CD4NUZSS.js";
import "./chunk-ZGUPGDJB.js";
import "./chunk-HH5C53SC.js";
import "./chunk-THOVHZD3.js";
import "./chunk-4T4QRU77.js";
import "./chunk-G6CJXC4A.js";
import "./chunk-XF2DIZSE.js";
import "./chunk-JGZS7AX4.js";
import "./chunk-OSVIMPGP.js";
import "./chunk-TZZREQS5.js";
import "./chunk-Z5E4FBP3.js";
import "./chunk-RXFCYNLY.js";
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
