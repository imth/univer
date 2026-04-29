import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-PFEQ2JY3.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XZNOMUT5.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-KEYZHOYV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5NL7ROBI.js";
import "./chunk-FRSU62BE.js";
import "./chunk-ZT5VZXQD.js";
import "./chunk-SK52SX2N.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-NUMYSSOH.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JZ526HBS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2DW6PSUZ.js";
import "./chunk-5RETGFZ5.js";
import "./chunk-QHE3GYBX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-DKY3EF7B.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-U7COZTXY.js";
import "./chunk-4L54LCYD.js";
import "./chunk-US4GHTPO.js";
import "./chunk-6BGVBGKF.js";
import "./chunk-LJX3KESO.js";
import "./chunk-F6LNSSAA.js";
import "./chunk-AUPUCYDH.js";
import "./chunk-QYXLJWB3.js";
import "./chunk-KN22OUW2.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/lazy.ts
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
