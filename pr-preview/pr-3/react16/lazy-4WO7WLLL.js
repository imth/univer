import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7HAQKVDX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TKY6PXJB.js";
import "./chunk-LIQDA5XD.js";
import "./chunk-WFZN5P7Q.js";
import "./chunk-KNNCWYZJ.js";
import "./chunk-T3GMOP2R.js";
import "./chunk-5AQH5H5L.js";
import "./chunk-QVAAKY2I.js";
import "./chunk-WAAGLRXD.js";
import "./chunk-4LFMFKL5.js";
import "./chunk-EWRU3GCM.js";
import "./chunk-7USV3ESF.js";
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
