import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2RTAL7WY.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-S227I6D3.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-H5RJ6FP2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-2GTWJNDP.js";
import "./chunk-B76VLZJY.js";
import "./chunk-SNDELHEJ.js";
import "./chunk-37VBDGXX.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-HFLTRR5X.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LKRAL3A2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4QCL3BIB.js";
import "./chunk-KMD4WXJJ.js";
import "./chunk-25WV3IE6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-53MBDK6G.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-C62STZSC.js";
import "./chunk-ZBBJ55TF.js";
import "./chunk-TQL525AY.js";
import "./chunk-SK4TRILR.js";
import "./chunk-Y3QSWE6O.js";
import "./chunk-CYJUNQ7N.js";
import "./chunk-3QIG335W.js";
import "./chunk-YO7JIRAQ.js";
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
