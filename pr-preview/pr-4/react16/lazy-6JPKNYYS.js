import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TDPOH4IQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KKDTE5U2.js";
import "./chunk-L4YF6UBK.js";
import "./chunk-RCFF3KUN.js";
import "./chunk-GUTRRKXY.js";
import "./chunk-XTAWAYSX.js";
import "./chunk-BGDEWX3I.js";
import "./chunk-VQXHD755.js";
import "./chunk-3H2NVD65.js";
import "./chunk-HMW7DLMS.js";
import "./chunk-CNTBAGPE.js";
import "./chunk-PBSOXRSO.js";
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
