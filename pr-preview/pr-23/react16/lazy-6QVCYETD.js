import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DX3BXA2O.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-QM5KF6KX.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-XSYLA4MU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-GQG566ZE.js";
import "./chunk-OEDWNGYU.js";
import "./chunk-TYXMO7FW.js";
import "./chunk-5SIMKMJF.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-QM2P7D6V.js";
import "./chunk-TM5QNBBA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-NZ23BXP7.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CKSTTFUW.js";
import "./chunk-JD5HTIDB.js";
import "./chunk-CUW7VLLI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-67DUF45A.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ENGOP3NU.js";
import "./chunk-YQYBDCF5.js";
import "./chunk-LKVXGXDI.js";
import "./chunk-XHQE667S.js";
import "./chunk-6NLCZNFG.js";
import "./chunk-LJNGJSAA.js";
import "./chunk-OZJJTPRS.js";
import "./chunk-53LCI556.js";
import "./chunk-MR7DLPM2.js";
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
