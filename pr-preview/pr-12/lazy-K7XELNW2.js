import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OF5TLTWE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-CHF6S3QN.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-D7CZOY6J.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5SXY4DSF.js";
import "./chunk-WTX2NNSN.js";
import "./chunk-HESUB25E.js";
import "./chunk-DUBULVHJ.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-3RPQYMIW.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KS76DS4K.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HKFQZKYN.js";
import "./chunk-4O6M77FR.js";
import "./chunk-G2IRZJPX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PW6BKYBL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-O3IFZN76.js";
import "./chunk-LWA2FX7H.js";
import "./chunk-XV3DV4GL.js";
import "./chunk-ECUUJW4X.js";
import "./chunk-UTQ3MIPI.js";
import "./chunk-HLLAQN3R.js";
import "./chunk-WOLJGEFA.js";
import "./chunk-3Y3FTDJE.js";
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
