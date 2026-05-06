import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-O2IPJ4FZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YJMTJO2N.js";
import "./chunk-I7OTIZNC.js";
import "./chunk-SEVCTQ3A.js";
import "./chunk-EOBSCXRK.js";
import "./chunk-7CTVKCQT.js";
import "./chunk-HIQGBEGJ.js";
import "./chunk-JPEJESUU.js";
import "./chunk-TAIZCCTW.js";
import "./chunk-YCGSDOUF.js";
import "./chunk-KGVU6IBH.js";
import "./chunk-TN3DLTSL.js";
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
