import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-X2NNXKUE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ECKGIX6H.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-MRSJUGGV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DJYJQQ33.js";
import "./chunk-YVBYDNVJ.js";
import "./chunk-4BR7HJ7S.js";
import "./chunk-SDJEA6Y7.js";
import "./chunk-QJ52P6YG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5EQZX2ZM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YXCIWDCH.js";
import "./chunk-3FOX6JA3.js";
import "./chunk-XYGGBW5H.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-COQKICIN.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NZEZJ4WA.js";
import "./chunk-3RNKOTDK.js";
import "./chunk-TAJMLV5R.js";
import "./chunk-WORBCXKB.js";
import "./chunk-CV6DP4OR.js";
import "./chunk-HY2OAPV5.js";
import "./chunk-LVNQYW4R.js";
import "./chunk-ODWOHFZR.js";
import "./chunk-AGUCVTH3.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
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
