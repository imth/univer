import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TLVJXMEN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DQAZDUNP.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-K4XE3KBM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-IZFMZK3P.js";
import "./chunk-FRSU62BE.js";
import "./chunk-ZT5VZXQD.js";
import "./chunk-SK52SX2N.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-2RXBWQAF.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EI6LXNRM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YOJAITA6.js";
import "./chunk-5RETGFZ5.js";
import "./chunk-QHE3GYBX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PB6TJOTT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-W5HYTCP5.js";
import "./chunk-4L54LCYD.js";
import "./chunk-DKG3ND25.js";
import "./chunk-6BI4E4FH.js";
import "./chunk-QHUPZ3XV.js";
import "./chunk-F6LNSSAA.js";
import "./chunk-AUPUCYDH.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
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
