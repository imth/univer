import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LAQ4X6SB.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NNTMQW7C.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-YVO24X5P.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UTLZ3HOU.js";
import "./chunk-BZ7MWFPU.js";
import "./chunk-A44JXGOW.js";
import "./chunk-TUDJHTXO.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-OLTJTSGC.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VXDMYCCW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QJQEFSTH.js";
import "./chunk-2ZGC5AU6.js";
import "./chunk-JWYSWANJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ACJRXTAM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-IKXTJOBU.js";
import "./chunk-ZAU7EDEY.js";
import "./chunk-CHSE5JSO.js";
import "./chunk-OQB6QELS.js";
import "./chunk-ME367ETE.js";
import "./chunk-P4DTESLN.js";
import "./chunk-WFHVUUKE.js";
import "./chunk-NDMH6LA4.js";
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
