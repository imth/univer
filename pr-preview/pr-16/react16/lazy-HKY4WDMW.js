import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XROPR5BN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HES4C2Q2.js";
import "./chunk-HIGUAOGE.js";
import "./chunk-JRJHP7S4.js";
import "./chunk-KA2DML4H.js";
import "./chunk-GR5RHQYW.js";
import "./chunk-OTTVWBEA.js";
import "./chunk-SRBSH6F4.js";
import "./chunk-LTAJG2GS.js";
import "./chunk-55QJK6MU.js";
import "./chunk-ZZJA2GVV.js";
import "./chunk-73QXLKSZ.js";
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
