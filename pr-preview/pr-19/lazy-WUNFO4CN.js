import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MJWEYAR4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NBFWNWYQ.js";
import "./chunk-YDMUS53G.js";
import "./chunk-NMCUS4LF.js";
import "./chunk-CZBBG6HS.js";
import "./chunk-ENS66ZVI.js";
import "./chunk-3EXW5FV6.js";
import "./chunk-2LYTGUQY.js";
import "./chunk-Y7KEDE7P.js";
import "./chunk-4KT7BDSK.js";
import "./chunk-EVZQHTBF.js";
import "./chunk-U7RR6SAI.js";
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
