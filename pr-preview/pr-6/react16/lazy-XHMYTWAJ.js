import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TKU54CML.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OUTR4T6A.js";
import "./chunk-K75BVDWI.js";
import "./chunk-YHHX4EDX.js";
import "./chunk-RJTR5ZQ7.js";
import "./chunk-XBG6NRV3.js";
import "./chunk-LLROKE42.js";
import "./chunk-EPGPLS2V.js";
import "./chunk-HDNFHLII.js";
import "./chunk-J7KWERHJ.js";
import "./chunk-OV4JCWTQ.js";
import "./chunk-PHMHGCNA.js";
import "./chunk-KN22OUW2.js";
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
