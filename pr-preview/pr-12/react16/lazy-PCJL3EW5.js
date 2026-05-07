import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KS76DS4K.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HKFQZKYN.js";
import "./chunk-4O6M77FR.js";
import "./chunk-G2IRZJPX.js";
import "./chunk-O3IFZN76.js";
import "./chunk-LWA2FX7H.js";
import "./chunk-XV3DV4GL.js";
import "./chunk-ECUUJW4X.js";
import "./chunk-UTQ3MIPI.js";
import "./chunk-HLLAQN3R.js";
import "./chunk-WOLJGEFA.js";
import "./chunk-3Y3FTDJE.js";
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
