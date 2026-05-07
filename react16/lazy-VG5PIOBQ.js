import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3RWLXKLL.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-UF4JLYB4.js";
import {
  UniverDocsMentionUIPlugin
} from "./chunk-PAYPIOUB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HA4U4KWS.js";
import "./chunk-ZZQSHDVF.js";
import "./chunk-RCF6FM6W.js";
import "./chunk-Y5U6L52U.js";
import {
  UniverDocsDrawingUIPlugin
} from "./chunk-FEMKZ7XI.js";
import "./chunk-CB7V3IIA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MIS5AI4E.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5GDQJ6WT.js";
import "./chunk-GWVG5NNF.js";
import "./chunk-CV44LTQV.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-65HLPFKQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-745JPES5.js";
import "./chunk-ZX6K5YS4.js";
import "./chunk-A2IMCSEE.js";
import "./chunk-C72FZPR3.js";
import "./chunk-3W5OARJG.js";
import "./chunk-6OAZQ7KO.js";
import "./chunk-4GH4Q4IP.js";
import "./chunk-LVPQOPM6.js";
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
