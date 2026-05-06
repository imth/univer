import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LE74OVYT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BNEKXXRT.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-CTLKXGHM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YKKW2FPS.js";
import "./chunk-JYDEB6VZ.js";
import "./chunk-KVSIEHK5.js";
import "./chunk-3ZCHNMG2.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-FFSSQRSL.js";
import "./chunk-IBVO3ATC.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TKU54CML.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OUTR4T6A.js";
import "./chunk-K75BVDWI.js";
import "./chunk-YHHX4EDX.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZAOJTSWO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RJTR5ZQ7.js";
import "./chunk-XBG6NRV3.js";
import "./chunk-LLROKE42.js";
import "./chunk-EPGPLS2V.js";
import "./chunk-HDNFHLII.js";
import "./chunk-J7KWERHJ.js";
import "./chunk-OV4JCWTQ.js";
import "./chunk-PHMHGCNA.js";
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
