import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-V2HVPGER.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2UAQUK54.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-FP7Z65K2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DR4HITTZ.js";
import "./chunk-SRI5AZ5L.js";
import "./chunk-EYMO5IX2.js";
import "./chunk-ACJBG5D6.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-AYVV7WSE.js";
import "./chunk-DZ6TA4PJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3S6ASZEZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FGXQG23U.js";
import "./chunk-PXB5BOHU.js";
import "./chunk-FJOLVOHL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-JCYYWMJA.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZSYF6MTV.js";
import "./chunk-I5DZAYHY.js";
import "./chunk-CDAHGIVN.js";
import "./chunk-A2LTVDIE.js";
import "./chunk-RMLE2HAY.js";
import "./chunk-PQSEFKLG.js";
import "./chunk-E7FKCCUV.js";
import "./chunk-J5SAR3ED.js";
import "./chunk-M7PJGVD7.js";
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
