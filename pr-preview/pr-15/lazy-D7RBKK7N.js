import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OP4JPT24.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SGV4IGQF.js";
import "./chunk-WAUG2PVG.js";
import "./chunk-BHESN2ZP.js";
import "./chunk-KESOSEWP.js";
import "./chunk-UVBMNOD7.js";
import "./chunk-RHAV7LHU.js";
import "./chunk-H7LC445H.js";
import "./chunk-W7B5HECI.js";
import "./chunk-PVJZH4UA.js";
import "./chunk-ZCFMLIOH.js";
import "./chunk-NCYBCTVB.js";
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
