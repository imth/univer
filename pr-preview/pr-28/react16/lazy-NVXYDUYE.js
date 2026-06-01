import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-PP5G772A.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-D7SNSMVB.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-TUIUF3VQ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VGNKBCGN.js";
import "./chunk-ZZJ35QRB.js";
import "./chunk-ZCATEE7P.js";
import "./chunk-VI4F7W4R.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-WT2L3KGQ.js";
import "./chunk-TM5QNBBA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VFTYBZI5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YV5NZR7V.js";
import "./chunk-VG56UQXC.js";
import "./chunk-5BKQ3UGE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TWDDNSLR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DGOLKE3J.js";
import "./chunk-Z4Y6TDWT.js";
import "./chunk-ZTNTIYC7.js";
import "./chunk-AWWTHDNL.js";
import "./chunk-YCYH7T4W.js";
import "./chunk-ARVZLWAF.js";
import "./chunk-OH3WKAXS.js";
import "./chunk-TZSKLHKF.js";
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
