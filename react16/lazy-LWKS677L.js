import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-Q5PT6UQV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5I2C7Q2N.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-Z6YKATGB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZMNFLBQU.js";
import "./chunk-PM7JNR7L.js";
import "./chunk-JXMVOULZ.js";
import "./chunk-PDIQKNQQ.js";
import "./chunk-QJ52P6YG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-R75WIQQJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-D22UMSAC.js";
import "./chunk-RCFVT6UA.js";
import "./chunk-QONLHEDA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3OUTO23H.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-SZVFURCV.js";
import "./chunk-MWBVRRLU.js";
import "./chunk-BGBIKM5E.js";
import "./chunk-RWPMR47C.js";
import "./chunk-NFRVCGXI.js";
import "./chunk-DDNH2LYO.js";
import "./chunk-FHKGEGDD.js";
import "./chunk-VGF75R5Y.js";
import "./chunk-AGUCVTH3.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-24OICD5T.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
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
