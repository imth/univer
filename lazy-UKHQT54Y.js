import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SHEHTVFD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-7L3MXM75.js";
import "./chunk-AQJU5GY2.js";
import "./chunk-PKAHI533.js";
import "./chunk-XE2VWRU7.js";
import "./chunk-FIQ3BHQX.js";
import "./chunk-GAFEZZY4.js";
import "./chunk-LCMYWWGY.js";
import "./chunk-ZITBAF2W.js";
import "./chunk-LEEVSF3X.js";
import "./chunk-JZ2VBUIL.js";
import "./chunk-U74YHLPY.js";
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
