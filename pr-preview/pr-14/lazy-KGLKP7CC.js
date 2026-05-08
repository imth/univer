import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-M3P2KR64.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PGWBAYWK.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-WSHYDUY4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PELNZATT.js";
import "./chunk-ZV54YFTX.js";
import "./chunk-5N4WR6WQ.js";
import "./chunk-VXILA3FC.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-APHEZZDH.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OP4JPT24.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SGV4IGQF.js";
import "./chunk-WAUG2PVG.js";
import "./chunk-BHESN2ZP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3ZCDVAZV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KESOSEWP.js";
import "./chunk-UVBMNOD7.js";
import "./chunk-RHAV7LHU.js";
import "./chunk-H7LC445H.js";
import "./chunk-W7B5HECI.js";
import "./chunk-PVJZH4UA.js";
import "./chunk-ZCFMLIOH.js";
import "./chunk-NCYBCTVB.js";
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
