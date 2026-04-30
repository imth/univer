import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TMV6XZFZ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-EMHWL4YF.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-VLZ4KDJI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CWUINLTY.js";
import "./chunk-PQNC2YIW.js";
import "./chunk-IAMSRTGL.js";
import "./chunk-SX2V3KQW.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-FEVSF4A7.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TDPOH4IQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KKDTE5U2.js";
import "./chunk-L4YF6UBK.js";
import "./chunk-RCFF3KUN.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BT6GNM4I.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GUTRRKXY.js";
import "./chunk-XTAWAYSX.js";
import "./chunk-BGDEWX3I.js";
import "./chunk-VQXHD755.js";
import "./chunk-3H2NVD65.js";
import "./chunk-HMW7DLMS.js";
import "./chunk-CNTBAGPE.js";
import "./chunk-PBSOXRSO.js";
import "./chunk-KN22OUW2.js";
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
