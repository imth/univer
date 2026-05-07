import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3XONIHKO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-J2DOWVHQ.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-GXVWGKXW.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WVSGLBI5.js";
import "./chunk-XPYSDJ7J.js";
import "./chunk-5T2Y47MD.js";
import "./chunk-562R7UQK.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-JHX2I7ZT.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H677YOA4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CD4NUZSS.js";
import "./chunk-ZGUPGDJB.js";
import "./chunk-HH5C53SC.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RBEMVZ4O.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-THOVHZD3.js";
import "./chunk-4T4QRU77.js";
import "./chunk-G6CJXC4A.js";
import "./chunk-XF2DIZSE.js";
import "./chunk-JGZS7AX4.js";
import "./chunk-OSVIMPGP.js";
import "./chunk-TZZREQS5.js";
import "./chunk-Z5E4FBP3.js";
import "./chunk-RXFCYNLY.js";
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
