import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-GAIJ6IGN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5J5352NS.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-CQEDTAB3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5G5BKEPR.js";
import "./chunk-I2JO5QJZ.js";
import "./chunk-6NMVLP73.js";
import "./chunk-W6F5JI2S.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-XPJ3GPLX.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SHEHTVFD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-7L3MXM75.js";
import "./chunk-AQJU5GY2.js";
import "./chunk-PKAHI533.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TORTUAC3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-XE2VWRU7.js";
import "./chunk-FIQ3BHQX.js";
import "./chunk-GAFEZZY4.js";
import "./chunk-LCMYWWGY.js";
import "./chunk-ZITBAF2W.js";
import "./chunk-LEEVSF3X.js";
import "./chunk-JZ2VBUIL.js";
import "./chunk-U74YHLPY.js";
import "./chunk-RXFCYNLY.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsDrawingUIPlugin],
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
