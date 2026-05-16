import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-H55JINO5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-GEILDY36.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-JFHN7R5S.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-G5Z5VO3B.js";
import "./chunk-SRI5AZ5L.js";
import "./chunk-EYMO5IX2.js";
import "./chunk-ACJBG5D6.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-5KFKVRCW.js";
import "./chunk-DZ6TA4PJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KV3H7E3T.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KN2UA5ZC.js";
import "./chunk-PXB5BOHU.js";
import "./chunk-FJOLVOHL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-THWVDNLS.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FZJEFGWZ.js";
import "./chunk-I5DZAYHY.js";
import "./chunk-A2Y7KRES.js";
import "./chunk-HAB6LGSI.js";
import "./chunk-RMLE2HAY.js";
import "./chunk-PQSEFKLG.js";
import "./chunk-E7FKCCUV.js";
import "./chunk-J5SAR3ED.js";
import "./chunk-M7PJGVD7.js";
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
