import {
  UniverSheetsConditionalFormattingMobileUIPlugin,
  UniverSheetsDataValidationMobileUIPlugin,
  UniverSheetsFilterMobileUIPlugin
} from "../chunk-TKY6PXJB.js";
import "../chunk-LIQDA5XD.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-WFZN5P7Q.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "../chunk-GIDUVHSJ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "../chunk-KNNCWYZJ.js";
import {
  UniverSheetsNumfmtPlugin
} from "../chunk-T3GMOP2R.js";
import {
  UniverSheetsMobileUIPlugin
} from "../chunk-5AQH5H5L.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-SVW75NOL.js";
import {
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverSheetsDataValidationPlugin
} from "../chunk-QVAAKY2I.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverMobileUIPlugin
} from "../chunk-WAAGLRXD.js";
import {
  zh_CN_default
} from "../chunk-EB3DJFG6.js";
import {
  UniverSheetsFormulaPlugin
} from "../chunk-4LFMFKL5.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCMainThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-EWRU3GCM.js";
import {
  UniverRenderEnginePlugin
} from "../chunk-7USV3ESF.js";
import {
  Univer,
  UserManagerService
} from "../chunk-KN22OUW2.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-24OICD5T.js";

// src/sheets-mobile/main.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverMobileUIPlugin, {
  container: "app"
});
var worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });
univer.registerPlugin(UniverRPCMainThreadPlugin, { workerURL: worker });
univer.onDispose(() => worker.terminate());
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsMobileUIPlugin);
univer.registerPlugin(UniverSheetsFilterPlugin);
univer.registerPlugin(UniverSheetsFilterMobileUIPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverSheetsNumfmtUIPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverSheetsFormulaUIPlugin);
univer.registerPlugin(UniverSheetsConditionalFormattingMobileUIPlugin);
univer.registerPlugin(UniverSheetsDataValidationPlugin);
univer.registerPlugin(UniverSheetsDataValidationMobileUIPlugin);
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
var injector = univer.__getInjector();
var userManagerService = injector.get(UserManagerService);
userManagerService.setCurrentUser(mockUser);
univer.createUnit(2 /* UNIVER_SHEET */, DEFAULT_WORKBOOK_DATA_DEMO);
