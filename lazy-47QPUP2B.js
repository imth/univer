import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-AHTZH2W4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZZHY7JRW.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-QKBOCFG3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OK7UDFCS.js";
import "./chunk-FRSU62BE.js";
import "./chunk-ZT5VZXQD.js";
import "./chunk-SK52SX2N.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-M32VSJTW.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-I3TANQBH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JFL7BFHK.js";
import "./chunk-5RETGFZ5.js";
import "./chunk-QHE3GYBX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-V2FR5XJG.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BKXHVGES.js";
import "./chunk-4L54LCYD.js";
import "./chunk-E2DEMQQU.js";
import "./chunk-4URBNYAO.js";
import "./chunk-JAWGSHYY.js";
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
