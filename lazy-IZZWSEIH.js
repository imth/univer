import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YVV2NFXH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DYQNEVVL.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-OSHQINEE.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-NEX7NRAZ.js";
import "./chunk-CALHULNE.js";
import "./chunk-JRN2VZUC.js";
import "./chunk-U2WWCADK.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-NYCJEMS2.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-O2IPJ4FZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YJMTJO2N.js";
import "./chunk-I7OTIZNC.js";
import "./chunk-SEVCTQ3A.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TSIJPLCV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EOBSCXRK.js";
import "./chunk-7CTVKCQT.js";
import "./chunk-HIQGBEGJ.js";
import "./chunk-JPEJESUU.js";
import "./chunk-TAIZCCTW.js";
import "./chunk-YCGSDOUF.js";
import "./chunk-KGVU6IBH.js";
import "./chunk-TN3DLTSL.js";
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
