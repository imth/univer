import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VXDMYCCW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QJQEFSTH.js";
import "./chunk-2ZGC5AU6.js";
import "./chunk-JWYSWANJ.js";
import "./chunk-IKXTJOBU.js";
import "./chunk-ZAU7EDEY.js";
import "./chunk-CHSE5JSO.js";
import "./chunk-OQB6QELS.js";
import "./chunk-ME367ETE.js";
import "./chunk-P4DTESLN.js";
import "./chunk-WFHVUUKE.js";
import "./chunk-NDMH6LA4.js";
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
