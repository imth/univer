import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-Y63UVEH5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ORWC4AIL.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-BWKQ6CYD.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2MZQWWXU.js";
import "./chunk-ZFPRJUYY.js";
import "./chunk-DJW3JEDE.js";
import "./chunk-3YUHUVYC.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-32V2M4NI.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MJWEYAR4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NBFWNWYQ.js";
import "./chunk-YDMUS53G.js";
import "./chunk-NMCUS4LF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZTJ5S4VN.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CZBBG6HS.js";
import "./chunk-ENS66ZVI.js";
import "./chunk-3EXW5FV6.js";
import "./chunk-2LYTGUQY.js";
import "./chunk-Y7KEDE7P.js";
import "./chunk-4KT7BDSK.js";
import "./chunk-EVZQHTBF.js";
import "./chunk-U7RR6SAI.js";
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
