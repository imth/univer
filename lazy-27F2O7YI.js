import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VHYIPID2.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-4HNX63EC.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-CHYUDBM4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JH3FFNZQ.js";
import "./chunk-BLY6KGJU.js";
import "./chunk-6GX22XZL.js";
import "./chunk-3O56Q7JX.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-S6XI6XHZ.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3S3BSE65.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MDAKDVRD.js";
import "./chunk-XVEZPHK4.js";
import "./chunk-KYN535KI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-NIJGA6ZV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EI2TEFDE.js";
import "./chunk-BZ25A25P.js";
import "./chunk-YGIF56FI.js";
import "./chunk-LFPIB5AQ.js";
import "./chunk-532SQ457.js";
import "./chunk-QBIHOX7Z.js";
import "./chunk-EXRU3EBB.js";
import "./chunk-YP3FTPWW.js";
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
