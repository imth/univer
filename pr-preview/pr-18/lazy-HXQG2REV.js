import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-QAEEO2BW.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PECNCQ4C.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-3COAZ3S6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3LZY7QQP.js";
import "./chunk-IGA6XN5N.js";
import "./chunk-RAPHDJ77.js";
import "./chunk-PFYJEY7M.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-HSOCFSU5.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Q33T22F3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-676TJQBA.js";
import "./chunk-NFSVMD5B.js";
import "./chunk-HBZUPJCB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TGI4IBQU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CROIVHJT.js";
import "./chunk-VP5TOKSI.js";
import "./chunk-XDZ5CUIG.js";
import "./chunk-WROESJ3X.js";
import "./chunk-O757RHHG.js";
import "./chunk-HSOKXHAZ.js";
import "./chunk-MJAXIOMM.js";
import "./chunk-SFWFNTNZ.js";
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
