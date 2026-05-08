import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LAMNNRKS.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-G2Q6VK5Y.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-QMAWFV3X.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZK4YA7J5.js";
import "./chunk-VBCQ2KXE.js";
import "./chunk-FWS4RZC6.js";
import "./chunk-ZN33EX7B.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-O57ZKDID.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XROPR5BN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HES4C2Q2.js";
import "./chunk-HIGUAOGE.js";
import "./chunk-JRJHP7S4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YET5GO4N.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KA2DML4H.js";
import "./chunk-GR5RHQYW.js";
import "./chunk-OTTVWBEA.js";
import "./chunk-SRBSH6F4.js";
import "./chunk-LTAJG2GS.js";
import "./chunk-55QJK6MU.js";
import "./chunk-ZZJA2GVV.js";
import "./chunk-73QXLKSZ.js";
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
