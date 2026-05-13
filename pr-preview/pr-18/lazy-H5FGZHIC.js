import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Q33T22F3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-676TJQBA.js";
import "./chunk-NFSVMD5B.js";
import "./chunk-HBZUPJCB.js";
import "./chunk-CROIVHJT.js";
import "./chunk-VP5TOKSI.js";
import "./chunk-XDZ5CUIG.js";
import "./chunk-WROESJ3X.js";
import "./chunk-O757RHHG.js";
import "./chunk-HSOKXHAZ.js";
import "./chunk-MJAXIOMM.js";
import "./chunk-SFWFNTNZ.js";
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
