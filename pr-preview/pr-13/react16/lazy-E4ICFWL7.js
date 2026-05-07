import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3S3BSE65.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MDAKDVRD.js";
import "./chunk-XVEZPHK4.js";
import "./chunk-KYN535KI.js";
import "./chunk-EI2TEFDE.js";
import "./chunk-BZ25A25P.js";
import "./chunk-YGIF56FI.js";
import "./chunk-LFPIB5AQ.js";
import "./chunk-532SQ457.js";
import "./chunk-QBIHOX7Z.js";
import "./chunk-EXRU3EBB.js";
import "./chunk-YP3FTPWW.js";
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
