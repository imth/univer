import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LKRAL3A2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4QCL3BIB.js";
import "./chunk-KMD4WXJJ.js";
import "./chunk-25WV3IE6.js";
import "./chunk-C62STZSC.js";
import "./chunk-ZBBJ55TF.js";
import "./chunk-TQL525AY.js";
import "./chunk-SK4TRILR.js";
import "./chunk-Y3QSWE6O.js";
import "./chunk-CYJUNQ7N.js";
import "./chunk-3QIG335W.js";
import "./chunk-YO7JIRAQ.js";
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
