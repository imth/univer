import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MIS5AI4E.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5GDQJ6WT.js";
import "./chunk-GWVG5NNF.js";
import "./chunk-CV44LTQV.js";
import "./chunk-745JPES5.js";
import "./chunk-ZX6K5YS4.js";
import "./chunk-A2IMCSEE.js";
import "./chunk-C72FZPR3.js";
import "./chunk-3W5OARJG.js";
import "./chunk-6OAZQ7KO.js";
import "./chunk-4GH4Q4IP.js";
import "./chunk-LVPQOPM6.js";
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
