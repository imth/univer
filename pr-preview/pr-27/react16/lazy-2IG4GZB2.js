import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VFTYBZI5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YV5NZR7V.js";
import "./chunk-VG56UQXC.js";
import "./chunk-5BKQ3UGE.js";
import "./chunk-DGOLKE3J.js";
import "./chunk-Z4Y6TDWT.js";
import "./chunk-ZTNTIYC7.js";
import "./chunk-AWWTHDNL.js";
import "./chunk-YCYH7T4W.js";
import "./chunk-ARVZLWAF.js";
import "./chunk-OH3WKAXS.js";
import "./chunk-TZSKLHKF.js";
import "./chunk-MR7DLPM2.js";
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
