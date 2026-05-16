import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5MN73PHJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-Q2XB5XC4.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-BAENSDOP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YO623QGV.js";
import "./chunk-SRI5AZ5L.js";
import "./chunk-EYMO5IX2.js";
import "./chunk-ACJBG5D6.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-2UTTSVTR.js";
import "./chunk-DZ6TA4PJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H5KKX4CO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CITJ33XC.js";
import "./chunk-PXB5BOHU.js";
import "./chunk-FJOLVOHL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4W2NU3ZM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-PVHKSVPP.js";
import "./chunk-I5DZAYHY.js";
import "./chunk-DH3FDBZT.js";
import "./chunk-WVVHQV7W.js";
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
