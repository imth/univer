import {
  EditingRenderController,
  HoverManagerService,
  IEditorBridgeService,
  ISheetClipboardService,
  ISheetSelectionRenderService,
  PREDEFINED_HOOK_NAME_PASTE,
  SetCellEditVisibleOperation,
  SetScrollOperation,
  SetZoomRatioOperation,
  SheetCanvasPopManagerService,
  SheetPrintInterceptorService,
  SheetSkeletonManagerService,
  getCurrentRangeDisable$,
  useHighlightRange,
  virtualizeDiscreteRanges
} from "./chunk-BGBIKM5E.js";
import {
  DRAWING_IMAGE_ALLOW_IMAGE_LIST,
  DRAWING_IMAGE_COUNT_LIMIT,
  DRAWING_IMAGE_HEIGHT_LIMIT,
  DRAWING_IMAGE_WIDTH_LIMIT,
  IDrawingManagerService,
  InnerPasteCommand,
  ReplaceSnapshotCommand,
  SetDrawingSelectedOperation,
  UnitDrawingService,
  UniverDrawingPlugin,
  docDrawingPositionToTransform,
  getDrawingImageAllowSize,
  getDrawingShapeKeyByDrawingSearch,
  getImageSize
} from "./chunk-RWPMR47C.js";
import {
  AutofillDoubleIcon,
  BottomIcon,
  Button,
  CanvasFloatDomService,
  Checkbox,
  CheckboxGroup,
  ComponentManager,
  CreateCopyIcon,
  DeleteIcon,
  DocSettingIcon,
  Dropdown,
  DropdownMenu,
  FormLayout,
  GroupIcon,
  IClipboardInterfaceService,
  IContextMenuService,
  IDialogService,
  IGalleryService,
  ILocalFileService,
  IMenuManagerService,
  IMessageService,
  IShortcutService,
  ISidebarService,
  InputNumber,
  MoreDownIcon,
  MoveDownIcon,
  MoveUpIcon,
  PrintFloatDomSingle,
  Radio,
  RadioGroup,
  Select,
  Tooltip,
  TopmostIcon,
  UngroupIcon,
  borderClassName,
  clsx,
  connectInjector,
  getMenuHiddenObservable,
  render,
  require_jsx_runtime,
  require_react,
  unmount,
  useDependency,
  useObservable
} from "./chunk-NFRVCGXI.js";
import {
  COMMAND_LISTENER_SKELETON_CHANGE,
  CopySheetCommand,
  DeleteRangeMoveLeftCommand,
  DeleteRangeMoveUpCommand,
  DeltaColumnWidthCommand,
  DeltaRowHeightCommand,
  IAutoFillService,
  INTERCEPTOR_POINT,
  InsertColCommand,
  InsertRangeMoveDownCommand,
  InsertRangeMoveRightCommand,
  InsertRowCommand,
  MoveColsCommand,
  MoveRangeCommand,
  MoveRowsCommand,
  RangeProtectionPermissionEditPoint,
  RemoveColCommand,
  RemoveRowCommand,
  RemoveSheetCommand,
  SetColHiddenCommand,
  SetColHiddenMutation,
  SetColVisibleMutation,
  SetColWidthCommand,
  SetFrozenMutation,
  SetRangeValuesCommand,
  SetRowHeightCommand,
  SetRowHiddenCommand,
  SetRowHiddenMutation,
  SetRowVisibleMutation,
  SetSelectionsOperation,
  SetSpecificColsVisibleCommand,
  SetSpecificRowsVisibleCommand,
  SetWorksheetActiveOperation,
  SetWorksheetColWidthMutation,
  SetWorksheetRowAutoHeightMutation,
  SetWorksheetRowHeightMutation,
  SetWorksheetRowIsAutoHeightMutation,
  SheetInterceptorService,
  SheetPermissionCheckController,
  SheetSkeletonService,
  SheetsSelectionsService,
  WorkbookEditablePermission,
  WorkbookViewPermission,
  WorksheetEditPermission,
  WorksheetViewPermission,
  attachRangeWithCoord,
  convertPositionSheetOverGridToAbsolute,
  discreteRangeToRange,
  getSheetCommandTarget
} from "./chunk-FHKGEGDD.js";
import {
  Canvas,
  DRAWING_OBJECT_LAYER_INDEX,
  DrawingGroupObject,
  Group,
  IRenderManagerService,
  Image,
  Rect,
  RichText,
  Shape,
  Vector2,
  degToRad,
  getCurrentTypeOfRenderer,
  getGroupState,
  precisionTo,
  transformObjectOutOfGroup
} from "./chunk-VGF75R5Y.js";
import {
  BehaviorSubject,
  BuildTextUtils,
  DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DOCS_ZEN_EDITOR_UNIT_ID_KEY,
  DependentOn,
  Disposable,
  DisposableCollection,
  EMPTY,
  FOCUSING_COMMON_DRAWINGS,
  FOCUSING_FX_BAR_EDITOR,
  FOCUSING_PANEL_EDITOR,
  FOCUSING_SHAPE_TEXT_EDITOR,
  FOCUSING_SHEET,
  ICommandService,
  IConfigService,
  IContextService,
  IImageIoService,
  IPermissionService,
  IResourceManagerService,
  IURLImageService,
  IUndoRedoService,
  IUniverInstanceService,
  Inject,
  Injector,
  LifecycleService,
  LocaleService,
  ObjectMatrix,
  Observable,
  PRINT_CHART_COMPONENT_KEY,
  Plugin,
  Rectangle,
  RxDisposable,
  Subject,
  Tools,
  UserManagerService,
  bufferTime,
  checkIfMove,
  combineLatest,
  createDocumentModelWithStyle,
  createIdentifier,
  debounce_default,
  distinctUntilChanged,
  filter,
  fromEventSubject,
  generateRandomId,
  map,
  merge_default,
  of,
  registerDependencies,
  sequenceExecute,
  switchMap,
  take,
  tap,
  throttleTime,
  toDisposable,
  touchDependencies
} from "./chunk-AGUCVTH3.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField,
  __toESM
} from "./chunk-24OICD5T.js";

// ../packages/sheets-drawing/package.json
var package_default = {
  name: "@univerjs/sheets-drawing",
  version: "0.25.0",
  private: false,
  description: "Drawing model integration for Univer Sheets.",
  author: "DreamNum Co., Ltd. <developer@univer.ai>",
  license: "Apache-2.0",
  funding: {
    type: "opencollective",
    url: "https://opencollective.com/univer"
  },
  homepage: "https://univer.ai",
  repository: {
    type: "git",
    url: "https://github.com/dream-num/univer"
  },
  bugs: {
    url: "https://github.com/dream-num/univer/issues"
  },
  keywords: [
    "univer",
    "sheets",
    "drawing",
    "spreadsheet",
    "plugin"
  ],
  exports: {
    ".": "./src/index.ts",
    "./*": "./src/*",
    "./facade": "./src/facade/index.ts"
  },
  main: "./src/index.ts",
  types: "./lib/types/index.d.ts",
  publishConfig: {
    access: "public",
    main: "./lib/es/index.js",
    module: "./lib/es/index.js",
    exports: {
      ".": {
        import: "./lib/es/index.js",
        require: "./lib/cjs/index.js",
        types: "./lib/types/index.d.ts"
      },
      "./*": {
        import: "./lib/es/*",
        require: "./lib/cjs/*",
        types: "./lib/types/index.d.ts"
      },
      "./facade": {
        import: "./lib/es/facade.js",
        require: "./lib/cjs/facade.js",
        types: "./lib/types/facade/index.d.ts"
      },
      "./lib/facade": {
        import: "./lib/es/facade.js",
        require: "./lib/cjs/facade.js",
        types: "./lib/types/facade/index.d.ts"
      },
      "./lib/*": "./lib/*"
    }
  },
  directories: {
    lib: "lib"
  },
  files: [
    "lib"
  ],
  scripts: {
    test: "vitest run",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
    typecheck: "tsc --noEmit",
    "build:bundle": "univer-cli build",
    "build:types": "tsc -p tsconfig.node.json",
    build: "pnpm run build:bundle && pnpm run build:types"
  },
  dependencies: {
    "@univerjs/core": "workspace:*",
    "@univerjs/drawing": "workspace:*",
    "@univerjs/engine-render": "workspace:*",
    "@univerjs/sheets": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    typescript: "^6.0.3",
    vitest: "^4.1.7"
  }
};

// ../packages/sheets-drawing/src/config/config.ts
var SHEETS_DRAWING_PLUGIN_CONFIG_KEY = "sheets-drawing.config";
var configSymbol = Symbol(SHEETS_DRAWING_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/sheets-drawing/src/services/sheet-drawing.service.ts
var SheetDrawingAnchorType = /* @__PURE__ */ ((SheetDrawingAnchorType2) => {
  SheetDrawingAnchorType2["Position"] = "0";
  SheetDrawingAnchorType2["Both"] = "1";
  SheetDrawingAnchorType2["None"] = "2";
  return SheetDrawingAnchorType2;
})(SheetDrawingAnchorType || {});
var SheetDrawingService = class extends UnitDrawingService {
};
var ISheetDrawingService = createIdentifier("sheets-drawing.sheet-drawing.service");

// ../packages/sheets-drawing/src/commands/mutations/set-drawing-apply.mutation.ts
var SetDrawingApplyMutation = {
  id: "sheet.mutation.set-drawing-apply",
  type: 2 /* MUTATION */,
  handler: (accessor, params) => {
    const drawingManagerService = accessor.get(IDrawingManagerService);
    const sheetDrawingService = accessor.get(ISheetDrawingService);
    const { op, unitId, subUnitId, type, objects } = params;
    drawingManagerService.applyJson1(unitId, subUnitId, op);
    sheetDrawingService.applyJson1(unitId, subUnitId, op);
    switch (type) {
      case 0 /* INSERT */:
        drawingManagerService.addNotification(objects);
        sheetDrawingService.addNotification(objects);
        break;
      case 1 /* REMOVE */:
        drawingManagerService.removeNotification(objects);
        sheetDrawingService.removeNotification(objects);
        break;
      case 2 /* UPDATE */:
        drawingManagerService.updateNotification(objects);
        sheetDrawingService.updateNotification(objects);
        break;
      case 3 /* ARRANGE */:
        drawingManagerService.orderNotification(objects);
        sheetDrawingService.orderNotification(objects);
        break;
      case 4 /* GROUP */:
        drawingManagerService.groupUpdateNotification(objects);
        sheetDrawingService.groupUpdateNotification(objects);
        break;
      case 5 /* UNGROUP */:
        drawingManagerService.ungroupUpdateNotification(objects);
        sheetDrawingService.ungroupUpdateNotification(objects);
        break;
    }
    return true;
  }
};

// ../packages/sheets-drawing/src/commands/operations/clear-drawing-transformer.operation.ts
var ClearSheetDrawingTransformerOperation = {
  id: "sheet.operation.clear-drawing-transformer",
  type: 2 /* MUTATION */,
  handler: (accessor, params) => {
    const renderManagerService = accessor.get(IRenderManagerService);
    params.forEach((unitId) => {
      var _a, _b;
      (_b = (_a = renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.scene.getTransformer()) == null ? void 0 : _b.debounceRefreshControls();
    });
    return true;
  }
};

// ../packages/sheets-drawing/src/commands/commands/insert-sheet-drawing.command.ts
var InsertSheetDrawingCommand = {
  id: "sheet.command.insert-sheet-image",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    var _a, _b;
    if (!params) return false;
    const commandService = accessor.get(ICommandService);
    const undoRedoService = accessor.get(IUndoRedoService);
    const sheetDrawingService = accessor.get(ISheetDrawingService);
    const sheetInterceptorService = accessor.get(SheetInterceptorService);
    const drawings = params.drawings;
    const jsonOp = sheetDrawingService.getBatchAddOp(drawings);
    const { unitId, subUnitId, undo, redo, objects } = jsonOp;
    const intercepted = sheetInterceptorService.onCommandExecute({ id: InsertSheetDrawingCommand.id, params });
    const redoMutations = [
      ...(_a = intercepted.preRedos) != null ? _a : [],
      {
        id: SetDrawingApplyMutation.id,
        params: {
          unitId,
          subUnitId,
          op: redo,
          objects,
          type: 0 /* INSERT */
        }
      },
      {
        id: ClearSheetDrawingTransformerOperation.id,
        params: [unitId]
      },
      ...intercepted.redos
    ];
    const undoMutations = [
      ...(_b = intercepted.preUndos) != null ? _b : [],
      {
        id: SetDrawingApplyMutation.id,
        params: {
          unitId,
          subUnitId,
          op: undo,
          objects,
          type: 1 /* REMOVE */
        }
      },
      {
        id: ClearSheetDrawingTransformerOperation.id,
        params: [unitId]
      },
      ...intercepted.undos
    ];
    const result = sequenceExecute(redoMutations, commandService);
    if (result.result) {
      undoRedoService.pushUndoRedo({
        unitID: unitId,
        undoMutations,
        redoMutations
      });
      return true;
    }
    return false;
  }
};

// ../packages/sheets-drawing/src/commands/commands/remove-sheet-drawing.command.ts
var RemoveSheetDrawingCommand = {
  id: "sheet.command.remove-sheet-image",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    var _a, _b;
    if (!params) return false;
    const commandService = accessor.get(ICommandService);
    const undoRedoService = accessor.get(IUndoRedoService);
    const sheetInterceptorService = accessor.get(SheetInterceptorService);
    const sheetDrawingService = accessor.get(ISheetDrawingService);
    const { drawings } = params;
    const jsonOp = sheetDrawingService.getBatchRemoveOp(drawings);
    const { unitId, subUnitId, undo, redo, objects } = jsonOp;
    const intercepted = sheetInterceptorService.onCommandExecute({ id: RemoveSheetDrawingCommand.id, params });
    const redoMutations = [
      ...(_a = intercepted.preRedos) != null ? _a : [],
      {
        id: SetDrawingApplyMutation.id,
        params: {
          unitId,
          subUnitId,
          op: redo,
          objects,
          type: 1 /* REMOVE */
        }
      },
      {
        id: ClearSheetDrawingTransformerOperation.id,
        params: [unitId]
      },
      ...intercepted.redos
    ];
    const undoMutations = [
      ...(_b = intercepted.preUndos) != null ? _b : [],
      {
        id: SetDrawingApplyMutation.id,
        params: {
          unitId,
          subUnitId,
          op: undo,
          objects,
          type: 0 /* INSERT */
        }
      },
      {
        id: ClearSheetDrawingTransformerOperation.id,
        params: [unitId]
      },
      ...intercepted.undos
    ];
    const result = sequenceExecute(redoMutations, commandService);
    if (result.result) {
      undoRedoService.pushUndoRedo({
        unitID: unitId,
        undoMutations,
        redoMutations
      });
      return true;
    }
    return false;
  }
};

// ../packages/sheets-drawing/src/commands/commands/set-drawing-arrange.command.ts
var SetDrawingArrangeCommand = {
  id: "sheet.command.set-drawing-arrange",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    const commandService = accessor.get(ICommandService);
    const undoRedoService = accessor.get(IUndoRedoService);
    if (!params) return false;
    const sheetDrawingService = accessor.get(ISheetDrawingService);
    const { unitId, subUnitId, drawingIds, arrangeType } = params;
    const drawingOrderMapParam = { unitId, subUnitId, drawingIds };
    let jsonOp;
    if (arrangeType === 0 /* forward */) {
      jsonOp = sheetDrawingService.getForwardDrawingsOp(drawingOrderMapParam);
    } else if (arrangeType === 1 /* backward */) {
      jsonOp = sheetDrawingService.getBackwardDrawingOp(drawingOrderMapParam);
    } else if (arrangeType === 2 /* front */) {
      jsonOp = sheetDrawingService.getFrontDrawingsOp(drawingOrderMapParam);
    } else if (arrangeType === 3 /* back */) {
      jsonOp = sheetDrawingService.getBackDrawingsOp(drawingOrderMapParam);
    }
    if (jsonOp == null) {
      return false;
    }
    const { objects, redo, undo } = jsonOp;
    const result = commandService.syncExecuteCommand(SetDrawingApplyMutation.id, { op: redo, unitId, subUnitId, objects, type: 3 /* ARRANGE */ });
    if (result) {
      undoRedoService.pushUndoRedo({
        unitID: unitId,
        undoMutations: [
          { id: SetDrawingApplyMutation.id, params: { op: undo, unitId, subUnitId, objects, type: 3 /* ARRANGE */ } }
        ],
        redoMutations: [
          { id: SetDrawingApplyMutation.id, params: { op: redo, unitId, subUnitId, objects, type: 3 /* ARRANGE */ } }
        ]
      });
      return true;
    }
    return false;
  }
};

// ../packages/sheets-drawing/src/commands/commands/set-sheet-drawing.command.ts
var SetSheetDrawingCommand = {
  id: "sheet.command.set-sheet-image",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    var _a, _b;
    if (!params) return false;
    const commandService = accessor.get(ICommandService);
    const undoRedoService = accessor.get(IUndoRedoService);
    const sheetDrawingService = accessor.get(ISheetDrawingService);
    const sheetInterceptorService = accessor.get(SheetInterceptorService);
    const { drawings } = params;
    const jsonOp = sheetDrawingService.getBatchUpdateOp(drawings);
    const { unitId, subUnitId, undo, redo, objects } = jsonOp;
    const intercepted = sheetInterceptorService.onCommandExecute({ id: SetSheetDrawingCommand.id, params });
    const redoMutations = [
      ...(_a = intercepted.preRedos) != null ? _a : [],
      {
        id: SetDrawingApplyMutation.id,
        params: {
          unitId,
          subUnitId,
          op: redo,
          objects,
          type: 2 /* UPDATE */
        }
      },
      {
        id: ClearSheetDrawingTransformerOperation.id,
        params: [unitId]
      },
      ...intercepted.redos
    ];
    const undoMutations = [
      ...(_b = intercepted.preUndos) != null ? _b : [],
      {
        id: SetDrawingApplyMutation.id,
        params: {
          unitId,
          subUnitId,
          op: undo,
          objects,
          type: 2 /* UPDATE */
        }
      },
      {
        id: ClearSheetDrawingTransformerOperation.id,
        params: [unitId]
      },
      ...intercepted.undos
    ];
    const result = sequenceExecute(redoMutations, commandService);
    if (result.result) {
      undoRedoService.pushUndoRedo({
        unitID: unitId,
        undoMutations,
        redoMutations
      });
      return true;
    }
    return false;
  }
};

// ../packages/sheets-drawing/src/controllers/sheet-drawing.controller.ts
var SHEET_DRAWING_PLUGIN = "SHEET_DRAWING_PLUGIN";
var SheetsDrawingLoadController = class extends Disposable {
  constructor(_sheetInterceptorService, _univerInstanceService, _commandService, _sheetDrawingService, _drawingManagerService, _resourceManagerService) {
    super();
    __publicField(this, "_sheetInterceptorService", _sheetInterceptorService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_sheetDrawingService", _sheetDrawingService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_resourceManagerService", _resourceManagerService);
    this._initCommands();
    this._initSnapshot();
    this._initSheetChange();
    this.disposeWithMe(this._commandService.registerCommand(SetDrawingApplyMutation));
  }
  _initCommands() {
    [
      SetSheetDrawingCommand,
      InsertSheetDrawingCommand,
      RemoveSheetDrawingCommand,
      SetDrawingArrangeCommand,
      ClearSheetDrawingTransformerOperation
    ].forEach((command) => this.disposeWithMe(this._commandService.registerCommand(command)));
  }
  _initSnapshot() {
    const toJson = (unitId, model) => {
      const map2 = model || this._sheetDrawingService.getDrawingDataForUnit(unitId);
      if (map2) {
        return JSON.stringify(map2);
      }
      return "";
    };
    const parseJson = (json) => {
      if (!json) {
        return {};
      }
      try {
        return JSON.parse(json);
      } catch {
        return {};
      }
    };
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: SHEET_DRAWING_PLUGIN,
        businesses: [2 /* UNIVER_SHEET */],
        toJson: (unitId, model) => toJson(unitId, model),
        parseJson: (json) => parseJson(json),
        onUnLoad: (unitId) => {
          this._sheetDrawingService.removeDrawingDataForUnit(unitId);
          this._drawingManagerService.removeDrawingDataForUnit(unitId);
        },
        onLoad: (unitId, value) => {
          this._sheetDrawingService.registerDrawingData(unitId, value);
          this._drawingManagerService.registerDrawingData(unitId, value);
        }
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _initSheetChange() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        // eslint-disable-next-line max-lines-per-function
        getMutations: (commandInfo) => {
          var _a;
          if (commandInfo.id === RemoveSheetCommand.id) {
            const params = commandInfo.params;
            const unitId = params.unitId || this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */).getUnitId();
            const subUnitId = params.subUnitId || ((_a = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */).getActiveSheet()) == null ? void 0 : _a.getSheetId());
            if (!unitId || !subUnitId) {
              return { redos: [], undos: [] };
            }
            const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
            const drawings = Object.values(drawingData).filter((drawing) => {
              if (drawing.drawingType === 2 /* DRAWING_CHART */) {
                return false;
              }
              return true;
            });
            if (drawings.length === 0) {
              return { redos: [], undos: [] };
            }
            const jsonOp = this._sheetDrawingService.getBatchRemoveOp(drawings);
            const { unitId: jsonOpUnitId, subUnitId: jsonOpSubUnitId, undo, redo, objects } = jsonOp;
            return {
              redos: [
                {
                  id: SetDrawingApplyMutation.id,
                  params: {
                    op: redo,
                    unitId: jsonOpUnitId,
                    subUnitId: jsonOpSubUnitId,
                    objects,
                    type: 1 /* REMOVE */
                  }
                }
              ],
              undos: [
                {
                  id: SetDrawingApplyMutation.id,
                  params: {
                    op: undo,
                    unitId: jsonOpUnitId,
                    subUnitId: jsonOpSubUnitId,
                    objects,
                    type: 0 /* INSERT */
                  }
                }
              ]
            };
          } else if (commandInfo.id === CopySheetCommand.id) {
            const params = commandInfo.params;
            const { unitId, subUnitId, targetSubUnitId } = params;
            if (!unitId || !subUnitId || !targetSubUnitId) {
              return { redos: [], undos: [] };
            }
            const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
            const drawings = Object.values(drawingData).filter((drawing) => {
              if (drawing.drawingType === 2 /* DRAWING_CHART */) {
                return false;
              }
              return true;
            }).map((drawing) => {
              return {
                ...drawing,
                subUnitId: targetSubUnitId,
                drawingId: generateRandomId(6)
              };
            });
            if (drawings.length === 0) {
              return { redos: [], undos: [] };
            }
            const jsonOp = this._sheetDrawingService.getBatchAddOp(drawings);
            const { unitId: jsonOpUnitId, subUnitId: jsonOpSubUnitId, undo, redo, objects } = jsonOp;
            return {
              redos: [
                {
                  id: SetDrawingApplyMutation.id,
                  params: {
                    op: redo,
                    unitId: jsonOpUnitId,
                    subUnitId: jsonOpSubUnitId,
                    objects,
                    type: 0 /* INSERT */
                  }
                }
              ],
              undos: [
                {
                  id: SetDrawingApplyMutation.id,
                  params: {
                    op: undo,
                    unitId: jsonOpUnitId,
                    subUnitId: jsonOpSubUnitId,
                    objects,
                    type: 1 /* REMOVE */
                  }
                }
              ]
            };
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
};
SheetsDrawingLoadController = __decorateClass([
  __decorateParam(0, Inject(SheetInterceptorService)),
  __decorateParam(1, Inject(IUniverInstanceService)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, ISheetDrawingService),
  __decorateParam(4, IDrawingManagerService),
  __decorateParam(5, IResourceManagerService)
], SheetsDrawingLoadController);

// ../packages/sheets-drawing/src/plugin.ts
var UniverSheetsDrawingPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_configService", _configService);
    const { ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    this._configService.setConfig(SHEETS_DRAWING_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [SheetsDrawingLoadController],
      [ISheetDrawingService, { useClass: SheetDrawingService }]
    ].forEach((dependency) => this._injector.add(dependency));
    this._injector.get(SheetsDrawingLoadController);
  }
};
__publicField(UniverSheetsDrawingPlugin, "pluginName", SHEET_DRAWING_PLUGIN);
__publicField(UniverSheetsDrawingPlugin, "packageName", package_default.name);
__publicField(UniverSheetsDrawingPlugin, "version", package_default.version);
__publicField(UniverSheetsDrawingPlugin, "type", 2 /* UNIVER_SHEET */);
UniverSheetsDrawingPlugin = __decorateClass([
  DependentOn(UniverDrawingPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverSheetsDrawingPlugin);

// ../packages/sheets-drawing/src/basics/transform-position.ts
function drawingPositionToTransform(position, sheetSkeletonParam) {
  if (!sheetSkeletonParam) return;
  const { unitId, sheetId, skeleton } = sheetSkeletonParam;
  const { from, to, flipY = false, flipX = false, angle = 0, skewX = 0, skewY = 0 } = position;
  const absolutePosition = convertPositionSheetOverGridToAbsolute(unitId, sheetId, { from, to }, skeleton);
  let { left, top, width, height } = absolutePosition;
  const sheetWidth = skeleton.rowHeaderWidth + skeleton.columnTotalWidth;
  const sheetHeight = skeleton.columnHeaderHeight + skeleton.rowTotalHeight;
  if (left + width > sheetWidth) {
    left = sheetWidth - width;
  }
  if (top + height > sheetHeight) {
    top = sheetHeight - height;
  }
  return {
    flipY,
    flipX,
    angle,
    skewX,
    skewY,
    left,
    top,
    width,
    height
  };
}
function transformToDrawingPosition(transform, skeleton) {
  const { left = 0, top = 0, width = 0, height = 0, flipY = false, flipX = false, angle = 0, skewX = 0, skewY = 0 } = transform;
  const startSelectionCell = skeleton.getCellIndexAndOffsetByPosition(left, top);
  const endSelectionCell = skeleton.getCellIndexAndOffsetByPosition(left + width, top + height);
  return {
    flipY,
    flipX,
    angle,
    skewX,
    skewY,
    from: startSelectionCell,
    to: endSelectionCell
  };
}
function transformToAxisAlignPosition(transform, skeleton) {
  const { left = 0, top = 0, width = 0, height = 0, angle = 0 } = transform;
  const norm = (angle % 360 + 360) % 360;
  const useSwappedAxis = norm >= 45 && norm < 135 || norm >= 225 && norm < 315;
  if (!useSwappedAxis) {
    return transformToDrawingPosition(transform, skeleton);
  }
  const rotatedTransform = {
    ...transform,
    left: left + width / 2 - height / 2,
    top: top + height / 2 - width / 2,
    width: height,
    height: width
  };
  return transformToDrawingPosition(rotatedTransform, skeleton);
}

// ../packages/docs-drawing/src/services/doc-drawing.service.ts
var DocDrawingService = class extends UnitDrawingService {
};
var IDocDrawingService = createIdentifier("univer.doc.plugin.doc-drawing.service");

// ../packages/docs-drawing/src/controllers/doc-drawing.controller.ts
var DOCS_DRAWING_PLUGIN = "DOC_DRAWING_PLUGIN";
var DocDrawingController = class extends Disposable {
  constructor(_docDrawingService, _drawingManagerService, _resourceManagerService, _univerInstanceService) {
    super();
    __publicField(this, "_docDrawingService", _docDrawingService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_resourceManagerService", _resourceManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    this._init();
  }
  _init() {
    this._initSnapshot();
    this._initUnitAddedListener();
  }
  _initUnitAddedListener() {
    this.disposeWithMe(
      this._univerInstanceService.getTypeOfUnitAdded$(1 /* UNIVER_DOC */).subscribe((event) => {
        this.loadDrawingDataForUnit(event.unit.getUnitId());
      })
    );
  }
  _initSnapshot() {
    const toJson = (unitId) => {
      const doc = this._univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
      if (doc) {
        const drawings = doc.getSnapshot().drawings;
        const drawingOrder = doc.getSnapshot().drawingsOrder;
        const data = {
          data: drawings != null ? drawings : {},
          order: drawingOrder != null ? drawingOrder : []
        };
        return JSON.stringify(data);
      }
      return "";
    };
    const parseJson = (json) => {
      if (!json) {
        return { data: {}, order: [] };
      }
      try {
        return JSON.parse(json);
      } catch (err) {
        return { data: {}, order: [] };
      }
    };
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: DOCS_DRAWING_PLUGIN,
        businesses: [1 /* UNIVER_DOC */],
        toJson: (unitId) => toJson(unitId),
        parseJson: (json) => parseJson(json),
        onUnLoad: (unitId) => {
          this._setDrawingDataForUnit(unitId, { data: {}, order: [] });
        },
        onLoad: (unitId, value) => {
          var _a, _b;
          this._setDrawingDataForUnit(unitId, { data: (_a = value.data) != null ? _a : {}, order: (_b = value.order) != null ? _b : [] });
        }
      })
    );
  }
  _setDrawingDataForUnit(unitId, drawingMapItem) {
    const documentDataModel = this._univerInstanceService.getUnit(unitId);
    if (documentDataModel == null) {
      return;
    }
    documentDataModel.resetDrawing(drawingMapItem.data, drawingMapItem.order);
    this.loadDrawingDataForUnit(unitId);
  }
  loadDrawingDataForUnit(unitId) {
    const dataModel = this._univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
    if (!dataModel) {
      return false;
    }
    const subUnitId = unitId;
    const drawingDataModels = dataModel.getDrawings();
    const drawingOrderModel = dataModel.getDrawingsOrder();
    if (!drawingDataModels || !drawingOrderModel) {
      return false;
    }
    Object.keys(drawingDataModels).forEach((drawingId) => {
      const drawingDataModel = drawingDataModels[drawingId];
      drawingDataModels[drawingId] = { ...drawingDataModel };
    });
    const subDrawings = {
      [subUnitId]: {
        unitId,
        subUnitId,
        data: drawingDataModels,
        order: drawingOrderModel
      }
    };
    this._docDrawingService.registerDrawingData(unitId, subDrawings);
    this._drawingManagerService.registerDrawingData(unitId, subDrawings);
    this._drawingManagerService.initializeNotification(unitId);
    return true;
  }
};
DocDrawingController = __decorateClass([
  __decorateParam(0, IDocDrawingService),
  __decorateParam(1, IDrawingManagerService),
  __decorateParam(2, IResourceManagerService),
  __decorateParam(3, IUniverInstanceService)
], DocDrawingController);

// ../packages/docs-drawing/package.json
var package_default2 = {
  name: "@univerjs/docs-drawing",
  version: "0.25.0",
  private: false,
  description: "Drawing model integration for Univer Docs.",
  author: "DreamNum Co., Ltd. <developer@univer.ai>",
  license: "Apache-2.0",
  funding: {
    type: "opencollective",
    url: "https://opencollective.com/univer"
  },
  homepage: "https://univer.ai",
  repository: {
    type: "git",
    url: "https://github.com/dream-num/univer"
  },
  bugs: {
    url: "https://github.com/dream-num/univer/issues"
  },
  keywords: [
    "univer",
    "docs",
    "drawing",
    "document",
    "plugin"
  ],
  exports: {
    ".": "./src/index.ts",
    "./*": "./src/*"
  },
  main: "./src/index.ts",
  types: "./lib/types/index.d.ts",
  publishConfig: {
    access: "public",
    main: "./lib/es/index.js",
    module: "./lib/es/index.js",
    exports: {
      ".": {
        import: "./lib/es/index.js",
        require: "./lib/cjs/index.js",
        types: "./lib/types/index.d.ts"
      },
      "./*": {
        import: "./lib/es/*",
        require: "./lib/cjs/*",
        types: "./lib/types/index.d.ts"
      },
      "./lib/*": "./lib/*"
    }
  },
  directories: {
    lib: "lib"
  },
  files: [
    "lib"
  ],
  scripts: {
    test: "vitest run",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
    typecheck: "tsc --noEmit",
    "build:bundle": "univer-cli build",
    "build:types": "tsc -p tsconfig.node.json",
    build: "pnpm run build:bundle && pnpm run build:types"
  },
  dependencies: {
    "@univerjs/core": "workspace:*",
    "@univerjs/drawing": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    typescript: "^6.0.3",
    vitest: "^4.1.7"
  }
};

// ../packages/docs-drawing/src/config/config.ts
var DOCS_DRAWING_PLUGIN_CONFIG_KEY = "docs-drawing.config";
var configSymbol2 = Symbol(DOCS_DRAWING_PLUGIN_CONFIG_KEY);
var defaultPluginConfig2 = {};

// ../packages/docs-drawing/src/plugin.ts
var UniverDocsDrawingPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig2, _injector, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_configService", _configService);
    const { ...rest } = merge_default(
      {},
      defaultPluginConfig2,
      this._config
    );
    this._configService.setConfig(DOCS_DRAWING_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [DocDrawingController],
      [DocDrawingService],
      [IDocDrawingService, { useClass: DocDrawingService }]
    ].forEach((dependency) => this._injector.add(dependency));
    touchDependencies(this._injector, [
      [DocDrawingController]
    ]);
  }
};
__publicField(UniverDocsDrawingPlugin, "pluginName", DOCS_DRAWING_PLUGIN);
__publicField(UniverDocsDrawingPlugin, "packageName", package_default2.name);
__publicField(UniverDocsDrawingPlugin, "version", package_default2.version);
__publicField(UniverDocsDrawingPlugin, "type", 1 /* UNIVER_DOC */);
UniverDocsDrawingPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverDocsDrawingPlugin);

// ../packages/drawing-ui/src/commands/operations/drawing-align.operation.ts
var SetDrawingAlignOperation = {
  id: "sheet.operation.set-image-align",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    return true;
  }
};
var SetDrawingAlignLeftOperation = {
  id: "sheet.operation.set-drawing-align-left",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingAlignOperation.id, { alignType: "1" /* left */ });
  }
};
var SetDrawingAlignCenterOperation = {
  id: "sheet.operation.set-drawing-align-center",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingAlignOperation.id, { alignType: "2" /* center */ });
  }
};
var SetDrawingAlignRightOperation = {
  id: "sheet.operation.set-drawing-align-right",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingAlignOperation.id, { alignType: "3" /* right */ });
  }
};
var SetDrawingAlignTopOperation = {
  id: "sheet.operation.set-drawing-align-top",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingAlignOperation.id, { alignType: "4" /* top */ });
  }
};
var SetDrawingAlignMiddleOperation = {
  id: "sheet.operation.set-drawing-align-middle",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingAlignOperation.id, { alignType: "5" /* middle */ });
  }
};
var SetDrawingAlignBottomOperation = {
  id: "sheet.operation.set-drawing-align-bottom",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingAlignOperation.id, { alignType: "6" /* bottom */ });
  }
};
var SetDrawingAlignHorizonOperation = {
  id: "sheet.operation.set-drawing-align-horizon",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingAlignOperation.id, { alignType: "7" /* horizon */ });
  }
};
var SetDrawingAlignVerticalOperation = {
  id: "sheet.operation.set-drawing-align-vertical",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingAlignOperation.id, { alignType: "8" /* vertical */ });
  }
};

// ../packages/drawing-ui/src/commands/operations/drawing-arrange.operation.ts
var SetDrawingArrangeOperation = {
  id: "drawing.operation.set-drawing-arrange",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const drawingManagerService = accessor.get(IDrawingManagerService);
    const { arrangeType } = params;
    const drawings = params.drawings || drawingManagerService.getFocusDrawings();
    const { unitId, subUnitId } = drawings[0];
    const drawingIds = drawings.map((drawing) => drawing.drawingId);
    drawingManagerService.featurePluginOrderUpdateNotification({ unitId, subUnitId, drawingIds, arrangeType });
    return true;
  }
};
var SetDrawingArrangeFrontOperation = {
  id: "drawing.operation.set-drawing-arrange-front",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingArrangeOperation.id, { arrangeType: 2 /* front */ });
  }
};
var SetDrawingArrangeForwardOperation = {
  id: "drawing.operation.set-drawing-arrange-forward",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingArrangeOperation.id, { arrangeType: 0 /* forward */ });
  }
};
var SetDrawingArrangeBackOperation = {
  id: "drawing.operation.set-drawing-arrange-back",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingArrangeOperation.id, { arrangeType: 3 /* back */ });
  }
};
var SetDrawingArrangeBackwardOperation = {
  id: "drawing.operation.set-drawing-arrange-backward",
  type: 1 /* OPERATION */,
  handler: (accessor) => {
    return accessor.get(ICommandService).syncExecuteCommand(SetDrawingArrangeOperation.id, { arrangeType: 1 /* backward */ });
  }
};

// ../packages/drawing-ui/src/commands/operations/drawing-group.operation.ts
var DRAWING_GROUP_TYPES = [0 /* DRAWING_IMAGE */, 1 /* DRAWING_SHAPE */, 6 /* DRAWING_GROUP */];
var SetDrawingGroupOperation = {
  id: "drawing.operation.set-drawing-group",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const drawingManagerService = accessor.get(IDrawingManagerService);
    const drawings = params.drawings || drawingManagerService.getFocusDrawings();
    if (drawings.length < 2) return false;
    if (!drawings.every((drawing) => DRAWING_GROUP_TYPES.includes(drawing.drawingType))) return false;
    const { unitId, subUnitId } = drawings[0];
    const groupId = generateRandomId(10);
    const groupTransform = getGroupState(0, 0, drawings.map((o) => o.transform || {}));
    const groupParam = {
      unitId,
      subUnitId,
      drawingId: groupId,
      drawingType: 6 /* DRAWING_GROUP */,
      transform: groupTransform,
      groupBaseBound: {
        left: groupTransform.left,
        top: groupTransform.top,
        width: groupTransform.width,
        height: groupTransform.height
      }
    };
    const children = drawings.map((drawing) => {
      const transform = drawing.transform || { left: 0, top: 0 };
      const { unitId: unitId2, subUnitId: subUnitId2, drawingId } = drawing;
      return {
        unitId: unitId2,
        subUnitId: subUnitId2,
        drawingId,
        transform: {
          ...transform
          // left: transform.left! - groupTransform.left,
          // top: transform.top! - groupTransform.top,
        },
        groupId
      };
    });
    drawingManagerService.featurePluginGroupUpdateNotification([{
      parent: groupParam,
      children
    }]);
    return true;
  }
};
var CancelDrawingGroupOperation = {
  id: "drawing.operation.cancel-drawing-group",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const drawingManagerService = accessor.get(IDrawingManagerService);
    const drawings = params.drawings || drawingManagerService.getFocusDrawings();
    const groupParams = drawings.map((drawing) => {
      if (drawing.drawingType !== 6 /* DRAWING_GROUP */) return null;
      const { unitId, subUnitId, drawingId, transform: groupTransform = { width: 0, height: 0 }, groupBaseBound } = drawing;
      if (groupTransform === null) return null;
      const objects = drawingManagerService.getDrawingsByGroup({ unitId, subUnitId, drawingId });
      if (objects.length === 0) return null;
      const children = objects.map((object) => {
        const { transform } = object;
        const { unitId: unitId2, subUnitId: subUnitId2, drawingId: drawingId2 } = object;
        const newTransform = transformObjectOutOfGroup(transform || {}, groupTransform, groupTransform.width || 0, groupTransform.height || 0, groupBaseBound);
        return {
          unitId: unitId2,
          subUnitId: subUnitId2,
          drawingId: drawingId2,
          transform: {
            ...transform,
            ...newTransform
          },
          groupId: void 0
        };
      });
      return {
        parent: drawing,
        children
      };
    }).filter((o) => o !== null);
    if (groupParams.length === 0) return false;
    drawingManagerService.featurePluginUngroupUpdateNotification(groupParams);
    return true;
  }
};

// ../packages/drawing-ui/src/commands/operations/image-crop.operation.ts
var OpenImageCropOperation = {
  id: "sheet.operation.open-image-crop",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    return true;
  }
};
var CloseImageCropOperation = {
  id: "sheet.operation.close-image-crop",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    return true;
  }
};
var AutoImageCropOperation = {
  id: "sheet.operation.Auto-image-crop",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    return true;
  }
};

// ../packages/drawing-ui/src/commands/operations/image-reset-size.operation.ts
var ImageResetSizeOperation = {
  id: "sheet.operation.image-reset-size",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    return true;
  }
};

// ../packages/drawing-ui/src/controllers/utils.ts
function insertGroupObject(objectParam, object, scene, drawingManagerService) {
  const groupParam = drawingManagerService.getDrawingByParam(objectParam);
  if (groupParam == null) {
    return;
  }
  const groupKey = getDrawingShapeKeyByDrawingSearch(objectParam);
  const groupObject = scene.getObjectIncludeInGroup(groupKey);
  if (groupObject && !(groupObject instanceof Group)) {
    return;
  }
  if (groupObject != null) {
    const objects = groupObject.getObjects();
    for (const obj of objects) {
      if (obj.oKey === object.oKey) {
        return;
      }
    }
    groupObject.addObject(object);
    return;
  }
  const group = new DrawingGroupObject(groupKey);
  scene.addObject(group, DRAWING_OBJECT_LAYER_INDEX).attachTransformerTo(group);
  group.addObject(object);
  const { transform, groupBaseBound } = groupParam;
  if (groupBaseBound) {
    group.setBaseBound(groupBaseBound);
  }
  if (groupParam.groupId) {
    group.isInGroup = true;
    insertGroupObject(
      { drawingId: groupParam.groupId, unitId: objectParam.unitId, subUnitId: objectParam.subUnitId },
      group,
      scene,
      drawingManagerService
    );
  }
  transform && group.transformByState(
    {
      left: transform.left,
      top: transform.top,
      angle: transform.angle,
      width: transform.width,
      height: transform.height
    }
  );
}
function getCurrentUnitInfo(currentUniverService, propUnitId) {
  var _a;
  const current = propUnitId ? currentUniverService.getUnit(propUnitId) : currentUniverService.getFocusedUnit();
  if (current == null) {
    return;
  }
  const unitId = current.getUnitId();
  let subUnitId;
  if (current.type === 2 /* UNIVER_SHEET */) {
    subUnitId = (_a = current.getActiveSheet()) == null ? void 0 : _a.getSheetId();
  } else if (current.type === 1 /* UNIVER_DOC */) {
    subUnitId = unitId;
  } else if (current.type === 3 /* UNIVER_SLIDE */) {
    subUnitId = unitId;
  }
  return { unitId, subUnitId, current };
}

// ../packages/drawing-ui/package.json
var package_default3 = {
  name: "@univerjs/drawing-ui",
  version: "0.25.0",
  private: false,
  description: "Shared drawing UI components and services for Univer.",
  author: "DreamNum Co., Ltd. <developer@univer.ai>",
  license: "Apache-2.0",
  funding: {
    type: "opencollective",
    url: "https://opencollective.com/univer"
  },
  homepage: "https://univer.ai",
  repository: {
    type: "git",
    url: "https://github.com/dream-num/univer"
  },
  bugs: {
    url: "https://github.com/dream-num/univer/issues"
  },
  keywords: [
    "univer",
    "drawing",
    "graphics",
    "ui",
    "plugin"
  ],
  exports: {
    ".": "./src/index.ts",
    "./*": "./src/*",
    "./locale/*": "./src/locale/*.ts"
  },
  main: "./src/index.ts",
  types: "./lib/types/index.d.ts",
  publishConfig: {
    access: "public",
    main: "./lib/es/index.js",
    module: "./lib/es/index.js",
    exports: {
      ".": {
        import: "./lib/es/index.js",
        require: "./lib/cjs/index.js",
        types: "./lib/types/index.d.ts"
      },
      "./*": {
        import: "./lib/es/*",
        require: "./lib/cjs/*",
        types: "./lib/types/index.d.ts"
      },
      "./locale/*": {
        import: "./lib/es/locale/*.js",
        require: "./lib/cjs/locale/*.js",
        types: "./lib/types/locale/*.d.ts"
      },
      "./lib/*": "./lib/*"
    }
  },
  directories: {
    lib: "lib"
  },
  files: [
    "lib"
  ],
  scripts: {
    test: "vitest run",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
    typecheck: "tsc --noEmit",
    "build:bundle": "univer-cli build",
    "build:types": "tsc -p tsconfig.node.json",
    build: "pnpm run build:bundle && pnpm run build:types"
  },
  peerDependencies: {
    react: "^16.9.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc",
    rxjs: ">=7.0.0"
  },
  dependencies: {
    "@univerjs/core": "workspace:*",
    "@univerjs/design": "workspace:*",
    "@univerjs/drawing": "workspace:*",
    "@univerjs/engine-render": "workspace:*",
    "@univerjs/icons": "1.4.0",
    "@univerjs/ui": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    postcss: "^8.5.15",
    react: "18.3.1",
    rxjs: "^7.8.2",
    tailwindcss: "3.4.18",
    typescript: "^6.0.3",
    vitest: "^4.1.7"
  }
};

// ../packages/drawing-ui/src/config/config.ts
var DRAWING_UI_PLUGIN_CONFIG_KEY = "drawing-ui.config";
var configSymbol3 = Symbol(DRAWING_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig3 = {};

// ../packages/drawing-ui/src/menu/align.menu.ts
var getMenuStateByDrawingFocusChangedObservable$ = (accessor) => {
  const drawingManagerService = accessor.get(IDrawingManagerService);
  return new Observable((subscriber) => {
    const update = (drawings) => {
      if (!drawings || drawings.length === 0) {
        return subscriber.next(true);
      }
      if (drawings.length < 2) {
        return subscriber.next(true);
      }
      subscriber.next(false);
    };
    const subscription = drawingManagerService.focus$.subscribe((drawings) => {
      if (!drawings || drawings.length === 0) {
        return subscriber.next(true);
      }
      update(drawings);
    });
    update(drawingManagerService.getFocusDrawings());
    return () => subscription.unsubscribe();
  });
};
var DRAWING_ALIGN_CONTEXT_MENU_ID = "contextMenu.drawing-align";
function DrawingAlignContextMenuItemFactory(accessor) {
  return {
    id: DRAWING_ALIGN_CONTEXT_MENU_ID,
    type: 3 /* SUBITEMS */,
    icon: "HorizontallyIcon",
    title: "drawing-ui.image-panel.align.title",
    hidden$: getMenuStateByDrawingFocusChangedObservable$(accessor)
  };
}
function SetDrawingAlignLeftMenuItemFactory() {
  return {
    id: SetDrawingAlignLeftOperation.id,
    type: 0 /* BUTTON */,
    icon: "LeftJustifyingIcon",
    title: "drawing-ui.image-panel.align.left"
  };
}
function SetDrawingAlignCenterMenuItemFactory() {
  return {
    id: SetDrawingAlignCenterOperation.id,
    type: 0 /* BUTTON */,
    icon: "HorizontallyIcon",
    title: "drawing-ui.image-panel.align.center"
  };
}
function SetDrawingAlignRightMenuItemFactory() {
  return {
    id: SetDrawingAlignRightOperation.id,
    type: 0 /* BUTTON */,
    icon: "RightJustifyingIcon",
    title: "drawing-ui.image-panel.align.right"
  };
}
function SetDrawingAlignTopMenuItemFactory() {
  return {
    id: SetDrawingAlignTopOperation.id,
    type: 0 /* BUTTON */,
    icon: "AlignTopIcon",
    title: "drawing-ui.image-panel.align.top"
  };
}
function SetDrawingAlignMiddleMenuItemFactory() {
  return {
    id: SetDrawingAlignMiddleOperation.id,
    type: 0 /* BUTTON */,
    icon: "VerticalCenterIcon",
    title: "drawing-ui.image-panel.align.middle"
  };
}
function SetDrawingAlignBottomMenuItemFactory() {
  return {
    id: SetDrawingAlignBottomOperation.id,
    type: 0 /* BUTTON */,
    icon: "AlignBottomIcon",
    title: "drawing-ui.image-panel.align.bottom"
  };
}
function SetDrawingAlignHorizonMenuItemFactory() {
  return {
    id: SetDrawingAlignHorizonOperation.id,
    type: 0 /* BUTTON */,
    icon: "HorizontallyIcon",
    title: "drawing-ui.image-panel.align.horizon"
  };
}
function SetDrawingAlignVerticalMenuItemFactory() {
  return {
    id: SetDrawingAlignVerticalOperation.id,
    type: 0 /* BUTTON */,
    icon: "VerticalCenterIcon",
    title: "drawing-ui.image-panel.align.vertical"
  };
}

// ../packages/drawing-ui/src/menu/arrange.menu.ts
var DRAWING_ARRANGE_CONTEXT_MENU_ID = "contextMenu.drawing-arrange";
function DrawingArrangeContextMenuItemFactory() {
  return {
    id: DRAWING_ARRANGE_CONTEXT_MENU_ID,
    type: 3 /* SUBITEMS */,
    icon: "TopmostIcon",
    title: "drawing-ui.image-panel.arrange.title"
  };
}
function SetDrawingArrangeFrontMenuItemFactory() {
  return {
    id: SetDrawingArrangeFrontOperation.id,
    type: 0 /* BUTTON */,
    icon: "TopmostIcon",
    title: "drawing-ui.image-panel.arrange.front"
  };
}
function SetDrawingArrangeForwardMenuItemFactory() {
  return {
    id: SetDrawingArrangeForwardOperation.id,
    type: 0 /* BUTTON */,
    icon: "MoveUpIcon",
    title: "drawing-ui.image-panel.arrange.forward"
  };
}
function SetDrawingArrangeBackMenuItemFactory() {
  return {
    id: SetDrawingArrangeBackOperation.id,
    type: 0 /* BUTTON */,
    icon: "BottomIcon",
    title: "drawing-ui.image-panel.arrange.back"
  };
}
function SetDrawingArrangeBackwardMenuItemFactory() {
  return {
    id: SetDrawingArrangeBackwardOperation.id,
    type: 0 /* BUTTON */,
    icon: "MoveDownIcon",
    title: "drawing-ui.image-panel.arrange.backward"
  };
}

// ../packages/drawing-ui/src/menu/group.menu.ts
var getMenuStateByDrawingFocusChangedObservable$2 = (accessor, type) => {
  const drawingManagerService = accessor.get(IDrawingManagerService);
  return new Observable((subscriber) => {
    const update = (drawings) => {
      if (!drawings || drawings.length === 0) {
        return subscriber.next(true);
      }
      if (type === "group") {
        if (drawings.length < 2) {
          return subscriber.next(true);
        }
        if (!drawings.every((drawing) => DRAWING_GROUP_TYPES.includes(drawing.drawingType))) {
          return subscriber.next(true);
        }
      } else if (type === "unGroup") {
        const groups = drawings.filter((drawing) => drawing.drawingType === 6 /* DRAWING_GROUP */);
        if (groups.length === 0) {
          return subscriber.next(true);
        }
      } else {
        if (!drawings.every((drawing) => DRAWING_GROUP_TYPES.includes(drawing.drawingType))) {
          return subscriber.next(true);
        }
      }
      subscriber.next(false);
    };
    const subscription = drawingManagerService.focus$.subscribe((drawings) => {
      if (!drawings || drawings.length === 0) {
        return subscriber.next(true);
      }
      update(drawings);
    });
    update(drawingManagerService.getFocusDrawings());
    return () => subscription.unsubscribe();
  });
};
var DRAWING_GROUP_CONTEXT_MENU_ID = "contextMenu.drawing-group";
function DrawingGroupContextMenuItemFactory(accessor) {
  return {
    id: DRAWING_GROUP_CONTEXT_MENU_ID,
    type: 3 /* SUBITEMS */,
    icon: "GroupIcon",
    title: "drawing-ui.image-panel.group.title",
    hidden$: getMenuStateByDrawingFocusChangedObservable$2(accessor)
  };
}
function SetDrawingGroupMenuItemFactory(accessor) {
  return {
    id: SetDrawingGroupOperation.id,
    type: 0 /* BUTTON */,
    icon: "GroupIcon",
    title: "drawing-ui.image-panel.group.group",
    disabled$: getMenuStateByDrawingFocusChangedObservable$2(accessor, "group")
  };
}
function CancelDrawingGroupMenuItemFactory(accessor) {
  return {
    id: CancelDrawingGroupOperation.id,
    type: 0 /* BUTTON */,
    icon: "UngroupIcon",
    title: "drawing-ui.image-panel.group.unGroup",
    disabled$: getMenuStateByDrawingFocusChangedObservable$2(accessor, "unGroup")
  };
}

// ../packages/drawing-ui/src/menu/schema.ts
var menuSchema = {
  ["contextMenu.drawing" /* DRAWING */]: {
    ["contextMenu.others" /* OTHERS */]: {
      [DRAWING_GROUP_CONTEXT_MENU_ID]: {
        order: 1,
        menuItemFactory: DrawingGroupContextMenuItemFactory,
        [SetDrawingGroupOperation.id]: {
          order: 0,
          menuItemFactory: SetDrawingGroupMenuItemFactory
        },
        [CancelDrawingGroupOperation.id]: {
          order: 1,
          menuItemFactory: CancelDrawingGroupMenuItemFactory
        }
      },
      [DRAWING_ARRANGE_CONTEXT_MENU_ID]: {
        order: 2,
        menuItemFactory: DrawingArrangeContextMenuItemFactory,
        [SetDrawingArrangeFrontOperation.id]: {
          order: 0,
          menuItemFactory: SetDrawingArrangeFrontMenuItemFactory
        },
        [SetDrawingArrangeForwardOperation.id]: {
          order: 1,
          menuItemFactory: SetDrawingArrangeForwardMenuItemFactory
        },
        [SetDrawingArrangeBackOperation.id]: {
          order: 2,
          menuItemFactory: SetDrawingArrangeBackMenuItemFactory
        },
        [SetDrawingArrangeBackwardOperation.id]: {
          order: 3,
          menuItemFactory: SetDrawingArrangeBackwardMenuItemFactory
        }
      },
      [DRAWING_ALIGN_CONTEXT_MENU_ID]: {
        order: 3,
        menuItemFactory: DrawingAlignContextMenuItemFactory,
        [SetDrawingAlignLeftOperation.id]: {
          order: 0,
          menuItemFactory: SetDrawingAlignLeftMenuItemFactory
        },
        [SetDrawingAlignCenterOperation.id]: {
          order: 1,
          menuItemFactory: SetDrawingAlignCenterMenuItemFactory
        },
        [SetDrawingAlignRightOperation.id]: {
          order: 2,
          menuItemFactory: SetDrawingAlignRightMenuItemFactory
        },
        [SetDrawingAlignTopOperation.id]: {
          order: 3,
          menuItemFactory: SetDrawingAlignTopMenuItemFactory
        },
        [SetDrawingAlignMiddleOperation.id]: {
          order: 4,
          menuItemFactory: SetDrawingAlignMiddleMenuItemFactory
        },
        [SetDrawingAlignBottomOperation.id]: {
          order: 5,
          menuItemFactory: SetDrawingAlignBottomMenuItemFactory
        },
        [SetDrawingAlignHorizonOperation.id]: {
          order: 6,
          menuItemFactory: SetDrawingAlignHorizonMenuItemFactory
        },
        [SetDrawingAlignVerticalOperation.id]: {
          order: 7,
          menuItemFactory: SetDrawingAlignVerticalMenuItemFactory
        }
      }
    }
  }
};

// ../packages/drawing-ui/src/views/image-popup-menu/component-name.ts
var COMPONENT_IMAGE_POPUP_MENU = "COMPONENT_IMAGE_POPUP_MENU";

// ../packages/drawing-ui/src/views/image-popup-menu/ImagePopupMenu.tsx
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function ImagePopupMenu(props) {
  var _a, _b;
  const { popup } = props;
  const menuItems = (_a = popup == null ? void 0 : popup.extraProps) == null ? void 0 : _a.menuItems;
  if (!menuItems) return null;
  if (((_b = popup.extraProps) == null ? void 0 : _b.variant) === "doc-floating-toolbar" && popup.extraProps.unitId && popup.extraProps.subUnitId && popup.extraProps.drawingId) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      DocImageFloatingToolbar,
      {
        menuItems,
        unitId: popup.extraProps.unitId,
        subUnitId: popup.extraProps.subUnitId,
        drawingId: popup.extraProps.drawingId
      }
    );
  }
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const [visible, setVisible] = (0, import_react.useState)(false);
  const [isHovered, setHovered] = (0, import_react.useState)(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const onVisibleChange = (visible2) => {
    setVisible(visible2);
  };
  const handleClick = (item) => {
    commandService.executeCommand(item.commandId, item.commandParams);
    setVisible(false);
  };
  const showMore = visible || isHovered;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        DropdownMenu,
        {
          align: "start",
          items: menuItems.map((item) => ({
            type: "item",
            children: localeService.t(item.label),
            disabled: item.disable,
            onSelect: () => handleClick(item)
          })),
          open: visible,
          onOpenChange: onVisibleChange,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: clsx(`univer-flex univer-items-center univer-gap-2 univer-rounded univer-p-1 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800`, borderClassName, {
                "univer-bg-gray-100 dark:!univer-bg-gray-800": visible,
                "univer-bg-white dark:!univer-bg-gray-900": !visible
              }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  AutofillDoubleIcon,
                  {
                    className: `univer-fill-primary-600 univer-text-gray-900 dark:!univer-text-white`
                  }
                ),
                showMore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreDownIcon, { className: "dark:!univer-text-white" })
              ]
            }
          )
        }
      )
    }
  );
}
var UPDATE_DOC_DRAWING_WRAPPING_STYLE_COMMAND_ID = "doc.command.update-doc-drawing-wrapping-style";
function getWrappingStyle(documentDataModel, drawingId) {
  var _a;
  const drawing = (_a = documentDataModel == null ? void 0 : documentDataModel.getSnapshot().drawings) == null ? void 0 : _a[drawingId];
  if (!drawing) {
    return "inline" /* INLINE */;
  }
  if (drawing.layoutType === 1 /* WRAP_NONE */) {
    return drawing.behindDoc === 1 /* TRUE */ ? "behindText" /* BEHIND_TEXT */ : "inFrontOfText" /* IN_FRONT_OF_TEXT */;
  }
  if (drawing.layoutType === 3 /* WRAP_SQUARE */) {
    return "wrapSquare" /* WRAP_SQUARE */;
  }
  if (drawing.layoutType === 6 /* WRAP_TOP_AND_BOTTOM */) {
    return "wrapTopAndBottom" /* WRAP_TOP_AND_BOTTOM */;
  }
  return "inline" /* INLINE */;
}
function Divider() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      className: "\n              univer-h-5 univer-w-px univer-bg-gray-200\n              dark:!univer-bg-gray-700\n            "
    }
  );
}
function ToolbarGroup(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "univer-flex univer-h-7 univer-items-center univer-gap-1 univer-px-1", children: props.children });
}
function ToolbarButton(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { title: props.title, placement: "bottom", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      disabled: props.disabled,
      onClick: props.onClick,
      className: clsx(`univer-flex univer-h-6 univer-w-6 univer-items-center univer-justify-center univer-rounded-md univer-border-none univer-bg-transparent univer-p-0 univer-text-sm univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 disabled:univer-cursor-not-allowed disabled:univer-opacity-40 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700`, {
        "univer-bg-gray-100 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300": props.active
      }),
      children: props.children
    }
  ) });
}
function TextWrapShapeIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 20 20", width: "1em", height: "1em", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 4.5H8.2", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.8 4.5H17.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 10H5.7", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.3 10H17.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.5 15.5H8.2", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.8 15.5H17.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "6.8", y: "7", width: "6.4", height: "6", rx: "1", stroke: "currentColor", strokeWidth: "1.4" })
  ] });
}
function CropIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 20 20", width: "1em", height: "1em", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 2.8V12.5C5 13.9 6.1 15 7.5 15H17.2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.8 5H12.5C13.9 5 15 6.1 15 7.5V17.2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.3 8.3H11.7V11.7H8.3V8.3Z", stroke: "currentColor", strokeWidth: "1.2" })
  ] });
}
function ToolbarDropdownButton(props) {
  var _a;
  const [open, setOpen] = (0, import_react.useState)(false);
  const activeOption = (_a = props.options.find((option) => option.value === props.value)) != null ? _a : props.options[0];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Dropdown,
    {
      open,
      onOpenChange: setOpen,
      overlay: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: `univer-min-w-32 univer-rounded-lg univer-border univer-border-solid univer-border-gray-200 univer-bg-white univer-p-1 univer-shadow-lg dark:!univer-border-gray-700 dark:!univer-bg-gray-900`,
          children: props.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              type: "button",
              onClick: () => {
                props.onChange(option.value);
                setOpen(false);
              },
              className: clsx(`univer-flex univer-h-8 univer-w-full univer-items-center univer-gap-2 univer-rounded-md univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-800`, {
                "univer-bg-primary-50 univer-text-primary-600 dark:!univer-bg-gray-800 dark:!univer-text-primary-300": option.value === props.value
              }),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "univer-flex univer-size-4 univer-items-center univer-justify-center", children: option.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "univer-flex-1", children: option.label })
              ]
            },
            option.value
          ))
        }
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { title: props.title, placement: "bottom", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "button",
        {
          type: "button",
          className: clsx(`univer-flex univer-h-6 univer-min-w-9 univer-items-center univer-justify-center univer-gap-1 univer-rounded-md univer-border-none univer-bg-transparent univer-px-1.5 univer-text-sm univer-text-gray-700 univer-transition-colors hover:univer-bg-gray-100 dark:!univer-text-gray-100 dark:hover:!univer-bg-gray-700`, {
            "univer-bg-gray-100 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300": open
          }),
          children: [
            activeOption.icon,
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreDownIcon, { className: "univer-text-xs" })
          ]
        }
      ) }) })
    }
  );
}
function DocImageFloatingToolbar(props) {
  var _a, _b, _c;
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const documentDataModel = (_a = univerInstanceService.getUnit(props.unitId, 1 /* UNIVER_DOC */)) != null ? _a : void 0;
  const [wrappingStyle, setWrappingStyle] = (0, import_react.useState)(() => getWrappingStyle(documentDataModel, props.drawingId));
  const [hidden, setHidden] = (0, import_react.useState)(false);
  const getMenuItem = (label) => props.menuItems.find((item) => item.label === label);
  const editItem = getMenuItem("drawing-ui.image-popup.edit");
  const cropItem = getMenuItem("drawing-ui.image-popup.crop");
  const deleteItem = getMenuItem("drawing-ui.image-popup.delete");
  const wrappingStyleOptions = [
    { label: localeService.t("drawing-ui.image-text-wrap.inline"), value: "inline" /* INLINE */, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWrapShapeIcon, {}) },
    { label: localeService.t("drawing-ui.image-text-wrap.square"), value: "wrapSquare" /* WRAP_SQUARE */, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWrapShapeIcon, {}) },
    { label: localeService.t("drawing-ui.image-text-wrap.topAndBottom"), value: "wrapTopAndBottom" /* WRAP_TOP_AND_BOTTOM */, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWrapShapeIcon, {}) },
    { label: localeService.t("drawing-ui.image-text-wrap.behindText"), value: "behindText" /* BEHIND_TEXT */, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWrapShapeIcon, {}) },
    { label: localeService.t("drawing-ui.image-text-wrap.inFrontText"), value: "inFrontOfText" /* IN_FRONT_OF_TEXT */, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWrapShapeIcon, {}) }
  ];
  const executeMenuItem = (item) => {
    if (!item || item.disable) {
      return;
    }
    commandService.executeCommand(item.commandId, item.commandParams);
  };
  const updateWrappingStyle = (value) => {
    setWrappingStyle(value);
    commandService.executeCommand(UPDATE_DOC_DRAWING_WRAPPING_STYLE_COMMAND_ID, {
      unitId: props.unitId,
      subUnitId: props.subUnitId,
      drawings: [{ unitId: props.unitId, subUnitId: props.subUnitId, drawingId: props.drawingId }],
      wrappingStyle: value
    });
  };
  if (hidden) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-u-comp": "doc-image-floating-toolbar",
      onMouseDown: (event) => {
        event.stopPropagation();
        event.preventDefault();
      },
      className: clsx(`univer-box-border univer-flex univer-items-center univer-rounded univer-bg-white univer-px-1 univer-py-1 univer-shadow-sm dark:!univer-border-gray-700 dark:!univer-bg-gray-900`, borderClassName),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarDropdownButton,
          {
            title: (_c = (_b = wrappingStyleOptions.find((option) => option.value === wrappingStyle)) == null ? void 0 : _b.label) != null ? _c : localeService.t("drawing-ui.image-text-wrap.inline"),
            value: wrappingStyle,
            options: wrappingStyleOptions,
            onChange: updateWrappingStyle
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolbarGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ToolbarButton,
            {
              title: editItem ? localeService.t(editItem.label) : localeService.t("drawing-ui.image-popup.edit"),
              disabled: !editItem || editItem.disable,
              onClick: () => {
                setHidden(true);
                executeMenuItem(editItem);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocSettingIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            ToolbarButton,
            {
              title: cropItem ? localeService.t(cropItem.label) : localeService.t("drawing-ui.image-popup.crop"),
              disabled: !cropItem || cropItem.disable,
              onClick: () => executeMenuItem(cropItem),
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CropIcon, {})
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ToolbarButton,
          {
            title: deleteItem ? localeService.t(deleteItem.label) : localeService.t("drawing-ui.image-popup.delete"),
            disabled: !deleteItem || deleteItem.disable,
            onClick: () => executeMenuItem(deleteItem),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteIcon, {})
          }
        ) })
      ]
    }
  );
}

// ../packages/drawing-ui/src/controllers/drawing-ui.controller.ts
var DrawingUIController = class extends Disposable {
  constructor(_componentManager, _commandService, _menuManagerService) {
    super();
    __publicField(this, "_componentManager", _componentManager);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_menuManagerService", _menuManagerService);
    this._init();
  }
  _init() {
    this._initMenus();
    this._initCommands();
    this._initComponents();
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema);
  }
  _initCommands() {
    [
      OpenImageCropOperation,
      CloseImageCropOperation,
      ImageResetSizeOperation,
      SetDrawingAlignOperation,
      SetDrawingAlignLeftOperation,
      SetDrawingAlignCenterOperation,
      SetDrawingAlignRightOperation,
      SetDrawingAlignTopOperation,
      SetDrawingAlignMiddleOperation,
      SetDrawingAlignBottomOperation,
      SetDrawingAlignHorizonOperation,
      SetDrawingAlignVerticalOperation,
      AutoImageCropOperation,
      SetDrawingGroupOperation,
      CancelDrawingGroupOperation,
      SetDrawingArrangeOperation,
      SetDrawingArrangeFrontOperation,
      SetDrawingArrangeForwardOperation,
      SetDrawingArrangeBackOperation,
      SetDrawingArrangeBackwardOperation
    ].forEach((command) => this.disposeWithMe(this._commandService.registerCommand(command)));
  }
  _initComponents() {
    [
      [COMPONENT_IMAGE_POPUP_MENU, ImagePopupMenu],
      ["BottomIcon", BottomIcon],
      ["GroupIcon", GroupIcon],
      ["MoveDownIcon", MoveDownIcon],
      ["MoveUpIcon", MoveUpIcon],
      ["TopmostIcon", TopmostIcon],
      ["UngroupIcon", UngroupIcon]
    ].forEach(([key, component]) => {
      this.disposeWithMe(this._componentManager.register(key, component));
    });
  }
};
DrawingUIController = __decorateClass([
  __decorateParam(0, Inject(ComponentManager)),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IMenuManagerService)
], DrawingUIController);

// ../packages/drawing-ui/src/utils/get-update-params.ts
function getUpdateParams(objects, drawingManagerService) {
  const params = [];
  objects.forEach((object) => {
    const { oKey, left, top, height, width, angle } = object;
    const searchParam = drawingManagerService.getDrawingOKey(oKey);
    if (searchParam == null) {
      params.push(null);
      return true;
    }
    const { unitId, subUnitId, drawingId, drawingType } = searchParam;
    const param = {
      unitId,
      subUnitId,
      drawingId,
      drawingType,
      transform: {
        left,
        top,
        height,
        width,
        angle
      }
    };
    if (drawingType === 0 /* DRAWING_IMAGE */) {
      param.srcRect = object.srcRect;
    }
    params.push(param);
  });
  return params;
}

// ../packages/drawing-ui/src/controllers/drawing-update.controller.ts
var DrawingUpdateController = class extends Disposable {
  constructor(_currentUniverService, _commandService, _renderManagerService, _drawingManagerService) {
    super();
    __publicField(this, "_currentUniverService", _currentUniverService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_sceneListenerOnDrawingMap", /* @__PURE__ */ new WeakSet());
    this._initialize();
  }
  dispose() {
    super.dispose();
  }
  _initialize() {
    this._recoveryImages();
    this._drawingAddListener();
    this._drawingRemoveListener();
    this._drawingUpdateListener();
    this._commandExecutedListener();
    this._drawingArrangeListener();
    this._drawingGroupListener();
    this._drawingRefreshListener();
    this._drawingVisibleListener();
  }
  _recoveryImages() {
    const drawingList = this._drawingManagerService.drawingManagerData;
    const info = getCurrentUnitInfo(this._currentUniverService);
    if (info == null) {
      return;
    }
    const { unitId: currentUnitId, subUnitId: currentSubUnitId } = info;
    Object.keys(drawingList).forEach((unitId) => {
      Object.keys(drawingList[unitId]).forEach((subUnitId) => {
        const drawingMap = drawingList[unitId][subUnitId].data;
        if (drawingMap == null || unitId !== currentUnitId || subUnitId !== currentSubUnitId) {
          return;
        }
        Object.keys(drawingMap).forEach((drawingId) => {
          const drawing = drawingMap[drawingId];
          if (drawing) {
            this._insertDrawing([{ unitId, subUnitId, drawingId }]);
          }
        });
      });
    });
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        if (command.id === SetDrawingAlignOperation.id) {
          const params = command.params;
          if (params == null) {
            return;
          }
          this._drawingAlign(params);
        }
      })
    );
  }
  _drawingGroupListener() {
    this.disposeWithMe(
      this._drawingManagerService.group$.subscribe((params) => {
        this._groupDrawings(params);
      })
    );
    this.disposeWithMe(
      this._drawingManagerService.ungroup$.subscribe((params) => {
        this._ungroupDrawings(params);
      })
    );
  }
  // private _drawingGroup(params: ISetImageGroupOperationParams) {
  //     const { groupType } = params;
  //     const drawings = this._drawingManagerService.getFocusDrawings();
  //     if (drawings.length === 0) {
  //         return;
  //     }
  //     switch (groupType) {
  //         case GroupType.group:
  //             this._groupDrawings(drawings);
  //             break;
  //         case GroupType.regroup:
  //             this._regroupDrawings(drawings);
  //             break;
  //         case GroupType.ungroup:
  //             this._ungroupDrawings(drawings);
  //             break;
  //         default:
  //             break;
  //     }
  // }
  _getSceneAndTransformerByDrawingSearch(unitId) {
    if (unitId == null) {
      return;
    }
    const renderObject = this._renderManagerService.getRenderById(unitId);
    const scene = renderObject == null ? void 0 : renderObject.scene;
    if (scene == null) {
      return null;
    }
    const transformer = scene.getTransformerByCreate();
    return { scene, transformer };
  }
  _groupDrawings(drawings) {
    drawings.forEach((drawing) => {
      this._groupDrawing(drawing);
    });
  }
  _groupDrawing(params) {
    const { parent, children } = params;
    const { unitId, subUnitId, drawingId } = parent;
    const renderObject = this._getSceneAndTransformerByDrawingSearch(parent.unitId);
    if (renderObject == null) {
      return;
    }
    const { scene, transformer } = renderObject;
    this._commandService.syncExecuteCommand(CloseImageCropOperation.id);
    const objects = [];
    children.forEach((drawing) => {
      const drawingShapeKey = getDrawingShapeKeyByDrawingSearch(drawing);
      const object = scene.getObjectIncludeInGroup(drawingShapeKey);
      if (object == null || objects.includes(object)) {
        return;
      }
      objects.push(object);
      const { transform } = drawing;
      if (transform == null) {
        return;
      }
      if (object.classType === "Group" /* GROUP */) {
        object.transformByState({ left: transform.left, top: transform.top });
      } else {
        object.transformByState(transform);
      }
    });
    if (objects.length === 0) {
      return;
    }
    const groupKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
    const group = new DrawingGroupObject(groupKey);
    scene.addObject(group, DRAWING_OBJECT_LAYER_INDEX).attachTransformerTo(group);
    group.addObjects(...objects);
    if (parent.groupBaseBound) {
      group.setBaseBound(parent.groupBaseBound);
    }
    if (parent.groupId) {
      group.isInGroup = true;
      insertGroupObject(
        { drawingId: parent.groupId, unitId, subUnitId },
        group,
        scene,
        this._drawingManagerService
      );
    }
    parent.transform && group.transformByState({ left: parent.transform.left, top: parent.transform.top, width: parent.transform.width, height: parent.transform.height, angle: parent.transform.angle });
    transformer.clearSelectedObjects();
    transformer.setSelectedControl(group);
  }
  // private _regroupDrawings(drawings: IDrawingSearch[]) {
  //     const renderObject = this._getSceneAndTransformerByDrawingSearch(drawings[0].unitId);
  //     if (renderObject == null) {
  //         return;
  //     }
  //     const { scene, transformer } = renderObject;
  //     const objects: BaseObject[] = [];
  //     let firstGroup: Nullable<Group> = null;
  //     drawings.forEach((drawing) => {
  //         const imageShapeKey = getDrawingShapeKeyByDrawingSearch(drawing);
  //         const o = scene.getObject(imageShapeKey);
  //         if (o == null) {
  //             return true;
  //         }
  //         const group = o.ancestorGroup as Nullable<Group>;
  //         if (group != null && firstGroup == null) {
  //             firstGroup = group;
  //         } else if (group != null && !objects.includes(group)) {
  //             objects.push(group);
  //         } else if (!objects.includes(o)) {
  //             objects.push(o);
  //         }
  //     });
  //     if (firstGroup == null) {
  //         return;
  //     }
  //     if (objects.length === 0) {
  //         return;
  //     }
  //     (firstGroup as Group).addObjects(...objects);
  //     (firstGroup as Group).reCalculateObjects();
  //     transformer.clearSelectedObjects();
  //     transformer.setSelectedControl(firstGroup);
  // }
  _ungroupDrawings(drawings) {
    drawings.forEach((drawing) => {
      this._ungroupDrawing(drawing);
    });
  }
  _ungroupDrawing(drawing) {
    const { parent, children } = drawing;
    const renderObject = this._getSceneAndTransformerByDrawingSearch(parent.unitId);
    if (renderObject == null) {
      return;
    }
    const { scene, transformer } = renderObject;
    children.forEach((drawing2) => {
      const drawingKey = getDrawingShapeKeyByDrawingSearch(drawing2);
      const object = scene.getObjectIncludeInGroup(drawingKey);
      if (object == null) {
        return true;
      }
      if (object == null) {
        return;
      }
      const { transform } = drawing2;
      if (transform == null) {
        return;
      }
      if (object.classType === "Group" /* GROUP */) {
        object.transformByState({ left: transform.left, top: transform.top });
      } else {
        object.transformByState(transform);
      }
    });
    const groupKey = getDrawingShapeKeyByDrawingSearch(parent);
    const group = scene.getObject(groupKey);
    const { width, height } = group;
    group.getObjects().forEach((object) => {
      group.removeSelfObjectAndTransform(object.oKey, width, height);
    });
    group.dispose();
    transformer.clearSelectedObjects();
  }
  _drawingAlign(params) {
    const { alignType } = params;
    const drawings = params.drawings || this._drawingManagerService.getFocusDrawings();
    if (alignType === "0" /* default */) {
      return;
    }
    const drawingTransformCaches = [];
    let minLeft = Number.POSITIVE_INFINITY;
    let minTop = Number.POSITIVE_INFINITY;
    let maxRight = Number.NEGATIVE_INFINITY;
    let maxBottom = Number.NEGATIVE_INFINITY;
    let drawingCount = 0;
    drawings.forEach((drawing) => {
      const { unitId, subUnitId, drawingId, drawingType } = drawing;
      const drawingParam = this._drawingManagerService.getDrawingByParam({ unitId, subUnitId, drawingId });
      if (drawingParam == null || drawingParam.transform == null) {
        return;
      }
      drawingTransformCaches.push({
        unitId,
        subUnitId,
        drawingId,
        drawingType,
        transform: drawingParam.transform
      });
      const { left = 0, top = 0, width = 0, height = 0 } = drawingParam.transform;
      minLeft = Math.min(minLeft, left);
      minTop = Math.min(minTop, top);
      maxRight = Math.max(maxRight, left + width);
      maxBottom = Math.max(maxBottom, top + height);
      drawingCount++;
    });
    if (drawingCount === 0) {
      return;
    }
    this._sortDrawingTransform(drawingTransformCaches, alignType);
    this._applyAlignType(drawingTransformCaches, alignType, minLeft, minTop, maxRight, maxBottom, drawingCount);
  }
  _applyAlignType(drawingTransformCaches, alignType, minLeft, minTop, maxRight, maxBottom, drawingCount) {
    const averageHorizon = Math.round((maxRight - minLeft) / drawingCount * 10) / 10;
    const averageVertical = Math.round((maxBottom - minTop) / drawingCount * 10) / 10;
    const updateParams = [];
    const renderObject = this._getSceneAndTransformerByDrawingSearch(drawingTransformCaches[0].unitId);
    if (renderObject == null) {
      return;
    }
    const { scene, transformer } = renderObject;
    drawingTransformCaches.forEach((drawingTransformCache, index) => {
      const { unitId, subUnitId, drawingId, transform, drawingType } = drawingTransformCache;
      const { left = 0, top = 0, width = 0, height = 0 } = transform;
      let newLeft = left;
      let newTop = top;
      switch (alignType) {
        case "1" /* left */:
          newLeft = minLeft;
          break;
        case "2" /* center */:
          newLeft = minLeft + (maxRight - minLeft) / 2 - width / 2;
          break;
        case "3" /* right */:
          newLeft = maxRight - width;
          break;
        case "4" /* top */:
          newTop = minTop;
          break;
        case "5" /* middle */:
          newTop = minTop + (maxBottom - minTop) / 2 - height / 2;
          break;
        case "6" /* bottom */:
          newTop = maxBottom - height;
          break;
        case "7" /* horizon */:
          newLeft = minLeft + averageHorizon * index;
          break;
        case "8" /* vertical */:
          newTop = minTop + averageVertical * index;
          break;
        default:
          break;
      }
      if (newLeft !== left || newTop !== top) {
        updateParams.push({
          unitId,
          subUnitId,
          drawingId,
          drawingType,
          transform: {
            left: newLeft,
            top: newTop
          }
        });
      }
    });
    this._drawingManagerService.featurePluginUpdateNotification(updateParams);
    transformer.refreshControls().changeNotification();
  }
  _sortDrawingTransform(drawingTransformCaches, alignType) {
    drawingTransformCaches.sort((a, b) => {
      const aTransform = a.transform;
      const bTransform = b.transform;
      const {
        left: aLeft = 0,
        top: aTop = 0,
        width: aWidth = 0,
        height: aHeight = 0
      } = aTransform;
      const {
        left: bLeft = 0,
        top: bTop = 0,
        width: bWidth = 0,
        height: bHeight = 0
      } = bTransform;
      switch (alignType) {
        case "1" /* left */:
          return aLeft - bLeft;
        case "2" /* center */:
          return aLeft + aWidth / 2 - (bLeft + bWidth / 2);
        case "3" /* right */:
          return aLeft + aWidth - (bLeft + bWidth);
        case "4" /* top */:
          return aTop - bTop;
        case "5" /* middle */:
          return aTop + aHeight / 2 - (bTop + bHeight / 2);
        case "6" /* bottom */:
          return aTop + aHeight - (bTop + bHeight);
        case "7" /* horizon */:
          return aLeft + aWidth / 2 - (bLeft + bWidth / 2);
        case "8" /* vertical */:
          return aTop + aHeight / 2 - (bTop + bHeight / 2);
        default:
          return 0;
      }
    });
  }
  _drawingArrangeListener() {
    this.disposeWithMe(
      this._drawingManagerService.order$.subscribe((params) => {
        this._drawingArrange(params);
      })
    );
  }
  _drawingArrange(params) {
    const { unitId, subUnitId, drawingIds } = params;
    const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
    if (renderObject == null) {
      return;
    }
    const { scene } = renderObject;
    drawingIds.forEach((drawingId) => {
      const oKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
      const drawingShapes = scene.fuzzyMathObjects(oKey, true);
      if (drawingShapes == null || drawingShapes.length === 0) {
        return;
      }
      const index = this._drawingManagerService.getDrawingOrder(unitId, subUnitId).indexOf(drawingId);
      for (const shape of drawingShapes) {
        shape.setProps({ zIndex: index });
        shape.makeDirty();
      }
    });
  }
  _drawingAddListener() {
    this.disposeWithMe(
      this._drawingManagerService.add$.subscribe((params) => {
        this._insertDrawing(params);
      })
    );
  }
  _insertDrawing(params) {
    const sceneList = [];
    params.forEach((param) => {
      const { unitId } = param;
      const drawingParam = this._drawingManagerService.getDrawingByParam(param);
      if (drawingParam == null) {
        return;
      }
      const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
      if (renderObject == null) {
        return;
      }
      const { scene } = renderObject;
      if (!sceneList.includes(scene)) {
        sceneList.push(scene);
      }
    });
    sceneList.forEach((scene) => {
      if (this._sceneListenerOnDrawingMap.has(scene)) {
        return;
      }
      this._addListenerOnDrawing(scene);
      this._sceneListenerOnDrawingMap.add(scene);
    });
  }
  _drawingRemoveListener() {
    this.disposeWithMe(
      this._drawingManagerService.remove$.subscribe((params) => {
        params.forEach((param) => {
          var _a;
          const { unitId, subUnitId, drawingId } = param;
          const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
          if (renderObject == null) {
            return;
          }
          const { scene } = renderObject;
          const drawingShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const drawingShapes = scene.fuzzyMathObjects(drawingShapeKey, true);
          if (drawingShapes.length > 0) {
            for (const drawingShape of drawingShapes) {
              drawingShape.dispose();
            }
            (_a = scene.getTransformer()) == null ? void 0 : _a.clearSelectedObjects();
          }
        });
      })
    );
  }
  _drawingUpdateListener() {
    this.disposeWithMe(
      this._drawingManagerService.update$.subscribe((params) => {
        params.forEach((param) => {
          var _a;
          const { unitId, subUnitId, drawingId } = param;
          const drawingParam = this._drawingManagerService.getDrawingByParam(param);
          if (drawingParam == null) {
            return;
          }
          const { transform, drawingType } = drawingParam;
          const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
          if (renderObject == null) {
            return;
          }
          const { scene, transformer } = renderObject;
          if (transform == null) {
            return true;
          }
          const { left = 0, top = 0, width = 0, height = 0, angle = 0, flipX = false, flipY = false, skewX = 0, skewY = 0 } = transform;
          const drawingShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const drawingShape = scene.getObject(drawingShapeKey);
          if (drawingShape == null) {
            return true;
          }
          drawingShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
          (_a = scene.getTransformer()) == null ? void 0 : _a.debounceRefreshControls();
        });
      })
    );
  }
  _drawingRefreshListener() {
    this.disposeWithMe(
      this._drawingManagerService.refreshTransform$.subscribe((params) => {
        params.forEach((param) => {
          const { unitId, subUnitId, drawingId } = param;
          const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
          if (renderObject == null) {
            return;
          }
          const drawingParam = this._drawingManagerService.getDrawingByParam(param);
          if (drawingParam == null) {
            return;
          }
          const { transform } = drawingParam;
          const { scene } = renderObject;
          const drawingShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const drawingShape = scene.getObject(drawingShapeKey);
          if (drawingShape == null || transform == null) {
            return true;
          }
          const {
            left = 0,
            top = 0,
            width = 0,
            height = 0,
            angle = 0,
            flipX = false,
            flipY = false,
            skewX = 0,
            skewY = 0
          } = transform;
          drawingShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
        });
      })
    );
  }
  _drawingVisibleListener() {
    this.disposeWithMe(
      this._drawingManagerService.visible$.subscribe((params) => {
        params.forEach((param) => {
          const { unitId, subUnitId, drawingId, visible } = param;
          const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
          if (renderObject == null) {
            return;
          }
          const { scene } = renderObject;
          const drawingShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const drawingShape = scene.getObject(drawingShapeKey);
          if (drawingShape == null) {
            return true;
          }
          if (visible) {
            drawingShape.show();
          } else {
            drawingShape.hide();
          }
        });
      })
    );
  }
  _filterUpdateParams(params, startTransforms) {
    return params.filter((param, index) => {
      if (param == null) {
        return false;
      }
      const { transform } = param;
      return checkIfMove(transform, startTransforms == null ? void 0 : startTransforms[index]);
    });
  }
  // group?.getObjects().forEach((o) => {
  //     const drawing = this._drawingManagerService.getDrawingOKey(o.oKey);
  //     if (drawing != null) {
  //         const { unitId, subUnitId, drawingId } = drawing;
  //         drawings.push({ unitId, subUnitId, drawingId });
  //     }
  // });
  _addListenerOnDrawing(scene) {
    const transformer = scene.getTransformerByCreate();
    let startTransforms = null;
    this.disposeWithMe(
      toDisposable(
        transformer.changeStart$.subscribe((state) => {
          const { objects } = state;
          const objectArray = Array.from(objects.values());
          const drawings = [];
          startTransforms = objectArray.map((object) => {
            const { left, top, height, width, angle, oKey, isInGroup } = object;
            const drawing = this._drawingManagerService.getDrawingOKey(oKey);
            if (isInGroup || object instanceof Group) {
              let group = object.ancestorGroup;
              if (group == null && object instanceof Group) {
                group = object;
              }
              if (group == null) {
                return null;
              }
              const groupDrawing = this._drawingManagerService.getDrawingOKey(group.oKey);
              if (groupDrawing) {
                const { unitId, subUnitId, drawingId } = groupDrawing;
                drawings.push({ unitId, subUnitId, drawingId });
                const { left: left2, top: top2, height: height2, width: width2, angle: angle2 } = group;
                return { left: left2, top: top2, height: height2, width: width2, angle: angle2 };
              }
            } else if (drawing != null) {
              const { unitId, subUnitId, drawingId } = drawing;
              drawings.push({ unitId, subUnitId, drawingId });
              return { left, top, height, width, angle };
            }
            return null;
          }).filter((transform) => transform != null);
          if (drawings.length > 0) {
            this._commandService.syncExecuteCommand(SetDrawingSelectedOperation.id, drawings);
          } else {
            this._commandService.syncExecuteCommand(SetDrawingSelectedOperation.id, []);
          }
        })
      )
    );
    this.disposeWithMe(
      toDisposable(
        transformer.changeEnd$.subscribe((state) => {
          const { objects } = state;
          const params = this._filterUpdateParams(getUpdateParams(objects, this._drawingManagerService), startTransforms);
          if (params.length > 0) {
            this._drawingManagerService.featurePluginUpdateNotification(params);
          }
        })
      )
    );
  }
};
DrawingUpdateController = __decorateClass([
  __decorateParam(0, IUniverInstanceService),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IDrawingManagerService)
], DrawingUpdateController);

// ../packages/drawing-ui/src/views/crop/image-cropper-object.ts
var ImageCropperObject = class extends Shape {
  constructor(key, props) {
    if (props == null) {
      props = {};
    }
    props.transformerConfig = {
      keepRatio: false,
      isCropper: true,
      anchorFill: "rgb(0, 0, 0)",
      anchorStroke: "rgb(255, 255, 255)",
      anchorSize: 24
    };
    super(key, props);
    __publicField(this, "_srcRect");
    __publicField(this, "_prstGeom");
    __publicField(this, "_applyTransform");
    __publicField(this, "_dragPadding", 8);
    __publicField(this, "_cacheCanvas");
    if (props == null ? void 0 : props.srcRect) {
      this._srcRect = props.srcRect;
    }
    if (props == null ? void 0 : props.prstGeom) {
      this._prstGeom = props.prstGeom;
    }
    if (props == null ? void 0 : props.applyTransform) {
      this._applyTransform = props.applyTransform;
    }
    if (props == null ? void 0 : props.dragPadding) {
      this._dragPadding = props.dragPadding;
    }
    this._applyProps();
  }
  refreshSrcRect(value, transform) {
    this._srcRect = value;
    this._applyTransform = transform;
    this._applyProps();
  }
  get srcRect() {
    return this._srcRect;
  }
  dispose() {
    var _a;
    super.dispose();
    (_a = this._cacheCanvas) == null ? void 0 : _a.dispose();
    this._srcRect = null;
  }
  isHit(coord) {
    const oCoord = this.getInverseCoord(coord);
    if (oCoord.x >= -this.strokeWidth / 2 && oCoord.x <= this.width + this.strokeWidth / 2 && oCoord.y >= -this.strokeWidth / 2 && oCoord.y <= this.height + this.strokeWidth / 2 && !this._inSurround(oCoord)) {
      return true;
    }
    return false;
  }
  _inSurround(oCoord) {
    const padding = this._dragPadding;
    if (oCoord.x >= padding - this.strokeWidth / 2 && oCoord.x <= this.width + this.strokeWidth / 2 - padding && oCoord.y >= padding - this.strokeWidth / 2 && oCoord.y <= this.height + this.strokeWidth / 2 - padding) {
      return true;
    }
    return false;
  }
  render(mainCtx, bounds) {
    if (!this.visible) {
      this.makeDirty(false);
      return this;
    }
    mainCtx.save();
    this._draw(mainCtx);
    mainCtx.restore();
    this.makeDirty(false);
    return this;
  }
  _draw(ctx) {
    var _a, _b;
    const scene = this.getScene();
    const engine = scene.getEngine();
    const { width: engineWidth, height: engineHeight } = engine;
    this._initialCacheCanvas();
    (_a = this._cacheCanvas) == null ? void 0 : _a.clear();
    const cacheCtx = (_b = this._cacheCanvas) == null ? void 0 : _b.getContext();
    if (cacheCtx == null) {
      return;
    }
    cacheCtx.save();
    Rect.drawWith(cacheCtx, {
      left: 0,
      top: 0,
      width: engineWidth,
      height: engineHeight,
      fill: "rgba(0, 0, 0, 0.5)"
    });
    cacheCtx.setTransform(ctx.getTransform());
    this._clipForApplyObject(cacheCtx);
    this._applyCache(ctx);
    cacheCtx.restore();
  }
  _clipForApplyObject(cacheCtx) {
    let objectType = 0 /* RECT */;
    if (this._prstGeom != null) {
      objectType = 1 /* PATH */;
    }
    cacheCtx.globalCompositeOperation = "destination-out";
    cacheCtx.beginPath();
    if (objectType === 0 /* RECT */) {
      const m = this.transform.getMatrix();
      cacheCtx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      cacheCtx.rect(0, 0, this.width, this.height);
      cacheCtx.fill();
    } else {
    }
  }
  _applyProps() {
    if (this._applyTransform == null) {
      return;
    }
    let cropLeft = 0;
    let cropTop = 0;
    let cropRight = 0;
    let cropBottom = 0;
    const { left: applyLeft = 0, top: applyTop = 0, width: applyWidth = 0, height: applyHeight = 0, angle } = this._applyTransform;
    if (this._srcRect != null) {
      const { left: left2 = 0, top: top2 = 0, right = 0, bottom = 0 } = this._srcRect;
      cropLeft = left2;
      cropTop = top2;
      cropRight = right;
      cropBottom = bottom;
    }
    const left = applyLeft + cropLeft;
    const top = applyTop + cropTop;
    this.transformByState({
      left,
      top,
      width: applyLeft + applyWidth - cropRight - left,
      height: applyTop + applyHeight - cropBottom - top,
      angle
    });
  }
  _applyCache(ctx) {
    if (!ctx || this._cacheCanvas == null) {
      return;
    }
    const cacheCtx = this._cacheCanvas.getContext();
    cacheCtx.save();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    cacheCtx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(this._cacheCanvas.getCanvasEle(), 0, 0);
    ctx.restore();
    cacheCtx.restore();
  }
  _initialCacheCanvas() {
    if (this._cacheCanvas != null) {
      return;
    }
    const scene = this.getScene();
    if (scene == null) return;
    this._cacheCanvas = new Canvas();
    const engine = scene.getEngine();
    this._cacheCanvas.setSize(engine.width, engine.height);
    engine.onTransformChange$.subscribeEvent(() => {
      var _a;
      (_a = this._cacheCanvas) == null ? void 0 : _a.setSize(engine.width, engine.height);
      this.makeDirty(true);
    });
  }
};

// ../packages/drawing-ui/src/controllers/image-cropper.controller.ts
var ImageCropperController = class extends Disposable {
  constructor(_commandService, _drawingManagerService, _renderManagerService, _univerInstanceService, _messageService, _localeService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_messageService", _messageService);
    __publicField(this, "_localeService", _localeService);
    __publicField(this, "_sceneListenerOnImageMap", /* @__PURE__ */ new WeakSet());
    this._init();
  }
  _init() {
    this._initOpenCrop();
    this._initCloseCrop();
    this._initAutoCrop();
  }
  _initAutoCrop() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        if (command.id !== AutoImageCropOperation.id) {
          return;
        }
        const params = command.params;
        if (params == null) {
          return;
        }
        const { cropType } = params;
        const drawingParams = this._drawingManagerService.getFocusDrawings();
        if (drawingParams.length !== 1) {
          return;
        }
        const drawingParam = drawingParams[0];
        const { unitId, subUnitId, drawingId } = drawingParam;
        const renderObject = this._renderManagerService.getRenderById(unitId);
        const scene = renderObject == null ? void 0 : renderObject.scene;
        if (scene == null) {
          return true;
        }
        const imageCropperObject = this._searchCropObject(scene);
        if (imageCropperObject != null) {
          this._commandService.syncExecuteCommand(CloseImageCropOperation.id, { isAuto: true });
        }
        const imageShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
        const imageShape = scene.getObject(imageShapeKey);
        if (!(imageShape instanceof Image)) {
          this._messageService.show({
            type: "error" /* Error */,
            content: this._localeService.t("drawing-ui.image-cropper.error")
          });
          return;
        }
        if (imageShape == null) {
          return;
        }
        this._updateCropperObject(cropType, imageShape);
        this._commandService.executeCommand(OpenImageCropOperation.id, { unitId, subUnitId, drawingId });
      })
    );
  }
  _calculateSrcRectByRatio(left, top, width, height, numerator, denominator) {
    const srcRatio = width / height;
    const ratio = numerator / denominator;
    let newWidth = width;
    let newHeight = height;
    if (srcRatio > ratio) {
      newWidth = height * ratio;
    } else {
      newHeight = width / ratio;
    }
    const newLeft = (width - newWidth) / 2;
    const newTop = (height - newHeight) / 2;
    return {
      left: precisionTo(newLeft, 1),
      top: precisionTo(newTop, 1),
      right: precisionTo(width - (newLeft + newWidth), 1),
      bottom: precisionTo(height - (newTop + newHeight), 1)
    };
  }
  _updateCropperObject(cropType, imageShape) {
    const { left, top, width, height } = imageShape.calculateTransformWithSrcRect();
    let newSrcRect;
    switch (cropType) {
      case "1" /* R1_1 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 1, 1);
        break;
      case "2" /* R16_9 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 16, 9);
        break;
      case "3" /* R9_16 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 9, 16);
        break;
      case "4" /* R5_4 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 5, 4);
        break;
      case "5" /* R4_5 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 4, 5);
        break;
      case "6" /* R4_3 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 4, 3);
        break;
      case "7" /* R3_4 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 3, 4);
        break;
      case "8" /* R3_2 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 3, 2);
        break;
      case "9" /* R2_3 */:
        newSrcRect = this._calculateSrcRectByRatio(left, top, width, height, 2, 3);
        break;
      case "0" /* FREE */:
      default:
        break;
    }
    if (newSrcRect == null) {
      return;
    }
    imageShape.setSrcRect(newSrcRect);
    const { left: newLeft = 0, top: newTop = 0, bottom: newBottom = 0, right: newRight = 0 } = newSrcRect;
    imageShape.transformByStateCloseCropper({
      left: left + newLeft,
      top: top + newTop,
      width: width - newRight - newLeft,
      height: height - newBottom - newTop
    });
  }
  _initOpenCrop() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        if (command.id !== OpenImageCropOperation.id) {
          return;
        }
        const params = command.params;
        if (params == null) {
          return;
        }
        const { unitId, subUnitId, drawingId } = params;
        const renderObject = this._renderManagerService.getRenderById(unitId);
        const scene = renderObject == null ? void 0 : renderObject.scene;
        if (scene == null) {
          return true;
        }
        if (!this._sceneListenerOnImageMap.has(scene)) {
          this._addListenerOnImage(scene);
          this._sceneListenerOnImageMap.add(scene);
        }
        const imageData = this._drawingManagerService.getDrawingByParam({ unitId, subUnitId, drawingId });
        if (imageData == null) {
          return;
        }
        const imageShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
        const imageShape = scene.getObject(imageShapeKey);
        if (imageShape == null) {
          return;
        }
        if (!(imageShape instanceof Image)) {
          this._messageService.show({
            type: "error" /* Error */,
            content: this._localeService.t("drawing-ui.image-cropper.error")
          });
          return;
        }
        const transformer = scene.getTransformer();
        transformer == null ? void 0 : transformer.clearControls();
        const imageCropperObject = new ImageCropperObject(`${imageShapeKey}-crop`, {
          srcRect: imageShape.srcRect,
          prstGeom: imageShape.prstGeom,
          applyTransform: imageShape.calculateTransformWithSrcRect()
        });
        scene.addObject(imageCropperObject, imageShape.getLayerIndex() + 1).attachTransformerTo(imageCropperObject);
        transformer == null ? void 0 : transformer.createControlForCopper(imageCropperObject);
        this._addHoverForImageCopper(imageCropperObject);
        imageShape.openRenderByCropper();
        transformer == null ? void 0 : transformer.refreshControls();
        imageCropperObject.makeDirty(true);
        this._commandService.syncExecuteCommand(SetDrawingSelectedOperation.id, [{ unitId, subUnitId, drawingId }]);
      })
    );
  }
  _searchCropObject(scene) {
    const objects = scene.getAllObjectsByOrder();
    for (const object of objects) {
      if (object instanceof ImageCropperObject) {
        return object;
      }
    }
  }
  _initCloseCrop() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        if (command.id !== CloseImageCropOperation.id) {
          return;
        }
        const currentUnit = this._univerInstanceService.getFocusedUnit();
        if (currentUnit == null) {
          return;
        }
        const unitId = currentUnit.getUnitId();
        const renderObject = this._renderManagerService.getRenderById(unitId);
        const scene = renderObject == null ? void 0 : renderObject.scene;
        if (scene == null) {
          return true;
        }
        const imageCropperObject = this._searchCropObject(scene);
        if (imageCropperObject == null) {
          return;
        }
        const imageShape = this._getApplyObjectByCropObject(imageCropperObject);
        if (imageShape == null) {
          return;
        }
        const transformer = scene.getTransformerByCreate();
        transformer.detachFrom(imageCropperObject);
        transformer.clearCopperControl();
        const srcRect = this._getSrcRectByTransformState(imageShape, imageCropperObject);
        const drawingParam = this._drawingManagerService.getDrawingOKey(imageShape.oKey);
        if (drawingParam != null) {
          const { left, top, height, width } = imageCropperObject;
          this._drawingManagerService.featurePluginUpdateNotification([{
            ...drawingParam,
            transform: {
              ...drawingParam.transform,
              left,
              top,
              height,
              width
            },
            srcRect: srcRect.srcRectAngle
          }]);
        }
        imageShape.setSrcRect({ ...srcRect.srcRectAngle });
        imageShape.closeRenderByCropper();
        imageShape.makeDirty(true);
        imageCropperObject == null ? void 0 : imageCropperObject.dispose();
      })
    );
    const sheetUnit$ = this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */).pipe(
      switchMap((workbook) => workbook ? workbook.activeSheet$ : of(null))
    );
    this.disposeWithMe(sheetUnit$.subscribe(() => {
      this._commandService.syncExecuteCommand(CloseImageCropOperation.id);
    }));
  }
  _getApplyObjectByCropObject(cropObject) {
    const cropOKey = cropObject.oKey;
    const applyOKey = cropOKey.slice(0, cropOKey.length - 5);
    const scene = cropObject.getScene();
    if (!scene) return null;
    const applyObject = scene.getObject(applyOKey);
    if (applyObject == null) {
      return null;
    }
    return applyObject;
  }
  _addListenerOnImage(scene) {
    const transformer = scene.getTransformerByCreate();
    let startTransform = null;
    this.disposeWithMe(
      transformer.changeStart$.subscribe((state) => {
        const { objects } = state;
        const cropObject = objects.values().next().value;
        if (cropObject == null || !(cropObject instanceof ImageCropperObject)) {
          return;
        }
        const { left, top, height, width, angle } = cropObject;
        startTransform = { left, top, height, width, angle };
        transformer.clearCopperControl();
      })
    );
    this.disposeWithMe(
      transformer.changeEnd$.subscribe((state) => {
        const { objects } = state;
        const cropObject = objects.values().next().value;
        if (cropObject == null || !(cropObject instanceof ImageCropperObject)) {
          return;
        }
        const { left, top, height, width, angle } = cropObject;
        if (!checkIfMove({ left, top, height, width, angle }, startTransform)) {
          return;
        }
        const applyObject = this._getApplyObjectByCropObject(cropObject);
        if (applyObject == null) {
          return;
        }
        const srcRect = this._getSrcRectByTransformState(applyObject, cropObject);
        cropObject.refreshSrcRect(srcRect.srcRect, applyObject.getState());
        transformer.createControlForCopper(cropObject);
      })
    );
    this._endCropListener(scene);
  }
  _addHoverForImageCopper(o) {
    this.disposeWithMe(
      o.onPointerEnter$.subscribeEvent(() => {
        o.cursor = "move" /* MOVE */;
      })
    );
    this.disposeWithMe(
      o.onPointerLeave$.subscribeEvent(() => {
        o.cursor = "default" /* DEFAULT */;
      })
    );
  }
  _endCropListener(scene) {
    const transformer = scene.getTransformerByCreate();
    this.disposeWithMe(
      transformer.clearControl$.subscribe((changeSelf) => {
        if (changeSelf === true) {
          this._commandService.syncExecuteCommand(CloseImageCropOperation.id);
        }
      })
    );
  }
  _getSrcRectByTransformState(applyObject, imageCropperObject) {
    const { left, top, height, width, strokeWidth, angle: copperAngle } = imageCropperObject;
    const { left: applyLeft, top: applyTop, width: applyWidth, height: applyHeight, angle: applyAngle, strokeWidth: applyStrokeWidth } = applyObject;
    const newLeft = left - applyLeft;
    const newTop = top - applyTop;
    const srcRect = {
      left: newLeft,
      top: newTop,
      right: applyWidth - newLeft - width,
      bottom: applyHeight - newTop - height
    };
    const srcRectAngle = { ...srcRect };
    if (applyAngle !== 0) {
      const cx = left + width / 2;
      const cy = top + height / 2;
      const centerPoint = new Vector2(cx, cy);
      const newCx = applyWidth / 2 + applyLeft;
      const newCy = applyHeight / 2 + applyTop;
      const newCenterPoint = new Vector2(newCx, newCy);
      const vertexPoint = new Vector2(applyLeft, applyTop);
      vertexPoint.rotateByPoint(degToRad(applyAngle), newCenterPoint);
      const applyFinalPoint = vertexPoint.clone();
      applyFinalPoint.rotateByPoint(degToRad(-applyAngle), centerPoint);
      const newAngleLeft = left - applyFinalPoint.x;
      const newAngleTop = top - applyFinalPoint.y;
      srcRectAngle.left = newAngleLeft;
      srcRectAngle.top = newAngleTop;
      srcRectAngle.right = applyWidth - newAngleLeft - width;
      srcRectAngle.bottom = applyHeight - newAngleTop - height;
    }
    return {
      srcRect,
      srcRectAngle
    };
  }
};
ImageCropperController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IDrawingManagerService),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IUniverInstanceService),
  __decorateParam(4, IMessageService),
  __decorateParam(5, Inject(LocaleService))
], ImageCropperController);

// ../packages/drawing-ui/src/shapes/preset/shape-arc.ts
function shapeArc(cx, cy, rx, ry, startAngle, endAngle, isClose) {
  const startRad = startAngle * Math.PI / 180;
  const endRad = endAngle * Math.PI / 180;
  const x1 = cx + rx * Math.cos(startRad);
  const y1 = cy + ry * Math.sin(startRad);
  const x2 = cx + rx * Math.cos(endRad);
  const y2 = cy + ry * Math.sin(endRad);
  let sweepDeg = ((endAngle - startAngle) % 360 + 360) % 360;
  if (sweepDeg === 0 && startAngle !== endAngle) sweepDeg = 360;
  if (sweepDeg === 360) {
    const midRad = startRad + Math.PI;
    const xm = cx + rx * Math.cos(midRad);
    const ym = cy + ry * Math.sin(midRad);
    let d2 = `M${x1},${y1} A${rx},${ry} 0 0,1 ${xm},${ym} A${rx},${ry} 0 0,1 ${x2},${y2}`;
    if (isClose) {
      d2 += " Z";
    }
    return d2;
  }
  const largeArc = sweepDeg > 180 ? 1 : 0;
  const sweep = 1;
  let d = `M${x1},${y1} A${rx},${ry} 0 ${largeArc},${sweep} ${x2},${y2}`;
  if (isClose) {
    d += " Z";
  }
  return d;
}

// ../packages/drawing-ui/src/shapes/preset/presets.ts
function adj(adjustments, name, defaultVal) {
  var _a;
  const raw = (_a = adjustments == null ? void 0 : adjustments.get(name)) != null ? _a : defaultVal;
  return raw / 1e5;
}
function adjRaw(adjustments, name, defaultVal) {
  var _a;
  return (_a = adjustments == null ? void 0 : adjustments.get(name)) != null ? _a : defaultVal;
}
function starShape(w, h, points, innerRatio = 0.4) {
  const cx = w / 2;
  const cy = h / 2;
  const outerRx = w / 2;
  const outerRy = h / 2;
  const innerRx = outerRx * innerRatio;
  const innerRy = outerRy * innerRatio;
  const totalPoints = points * 2;
  const parts = [];
  for (let i = 0; i < totalPoints; i++) {
    const angle = 2 * Math.PI * i / totalPoints - Math.PI / 2;
    const isOuter = i % 2 === 0;
    const rx = isOuter ? outerRx : innerRx;
    const ry = isOuter ? outerRy : innerRy;
    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle);
    parts.push(i === 0 ? `M${x},${y}` : `L${x},${y}`);
  }
  parts.push("Z");
  return parts.join(" ");
}
function mirrorAbsolutePathHorizontally(path, width) {
  const tokens = path.match(/[MLAZ]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi);
  if (!tokens) return path;
  const out = [];
  let i = 0;
  while (i < tokens.length) {
    const cmd = tokens[i++];
    if (!cmd) break;
    out.push(cmd);
    if (cmd === "Z") continue;
    if (cmd === "M" || cmd === "L") {
      const x = Number(tokens[i++]);
      const y = Number(tokens[i++]);
      out.push(String(width - x), String(y));
      continue;
    }
    if (cmd === "A") {
      const rx = tokens[i++];
      const ry = tokens[i++];
      const rot = tokens[i++];
      const largeArc = tokens[i++];
      const sweep = Number(tokens[i++]);
      const x = Number(tokens[i++]);
      const y = Number(tokens[i++]);
      out.push(rx, ry, rot, largeArc, String(sweep ? 0 : 1), String(width - x), String(y));
      continue;
    }
    return path;
  }
  return out.join(" ");
}
function mirrorAbsolutePathVertically(path, height) {
  const tokens = path.match(/[MLAZ]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi);
  if (!tokens) return path;
  const out = [];
  let i = 0;
  while (i < tokens.length) {
    const cmd = tokens[i++];
    if (!cmd) break;
    out.push(cmd);
    if (cmd === "Z") continue;
    if (cmd === "M" || cmd === "L") {
      const x = Number(tokens[i++]);
      const y = Number(tokens[i++]);
      out.push(String(x), String(height - y));
      continue;
    }
    if (cmd === "A") {
      const rx = tokens[i++];
      const ry = tokens[i++];
      const rot = tokens[i++];
      const largeArc = tokens[i++];
      const sweep = Number(tokens[i++]);
      const x = Number(tokens[i++]);
      const y = Number(tokens[i++]);
      out.push(rx, ry, rot, largeArc, String(sweep ? 0 : 1), String(x), String(height - y));
    }
  }
  return out.join(" ");
}
var presetShapes = /* @__PURE__ */ new Map();
var STROKE_ONLY_PRESETS = /* @__PURE__ */ new Set([
  "line",
  "lineInv",
  "straightConnector1",
  "bentConnector2",
  "bentConnector3",
  "bentConnector4",
  "bentConnector5",
  "curvedConnector2",
  "curvedConnector3",
  "curvedConnector4",
  "curvedConnector5"
]);
presetShapes.set("rect", (w, h) => `M0,0 L${w},0 L${w},${h} L0,${h} Z`);
presetShapes.set("roundRect", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 16667);
  const r = Math.min(w, h) * a;
  return [
    `M${r},0`,
    `L${w - r},0`,
    `A${r},${r} 0 0,1 ${w},${r}`,
    `L${w},${h - r}`,
    `A${r},${r} 0 0,1 ${w - r},${h}`,
    `L${r},${h}`,
    `A${r},${r} 0 0,1 0,${h - r}`,
    `L0,${r}`,
    `A${r},${r} 0 0,1 ${r},0`,
    "Z"
  ].join(" ");
});
presetShapes.set("plaque", (w, h, adjustments) => {
  const a = Math.min(Math.max(adjRaw(adjustments, "adj", 16667), 0), 5e4);
  const x1 = Math.min(w, h) * a / 1e5;
  const x2 = w - x1;
  const y2 = h - x1;
  const a1 = ooArcTo(0, x1, x1, x1, 90, -90);
  const a2 = ooArcTo(x2, 0, x1, x1, 180, -90);
  const a3 = ooArcTo(w, y2, x1, x1, 270, -90);
  const a4 = ooArcTo(x1, h, x1, x1, 0, -90);
  return [
    `M0,${x1}`,
    a1.svg,
    `L${x2},0`,
    a2.svg,
    `L${w},${y2}`,
    a3.svg,
    `L${x1},${h}`,
    a4.svg,
    "Z"
  ].join(" ");
});
presetShapes.set("cornerTabs", (w, h) => {
  const dx = Math.sqrt(w * w + h * h) / 20;
  return [
    `M0,0 L${dx},0 L0,${dx} Z`,
    `M${w},0 L${w - dx},0 L${w},${dx} Z`,
    `M${w},${h} L${w - dx},${h} L${w},${h - dx} Z`,
    `M0,${h} L${dx},${h} L0,${h - dx} Z`
  ].join(" ");
});
presetShapes.set("squareTabs", (w, h) => {
  const dx = Math.sqrt(w * w + h * h) / 20;
  return [
    `M0,0 L${dx},0 L${dx},${dx} L0,${dx} Z`,
    `M${w - dx},0 L${w},0 L${w},${dx} L${w - dx},${dx} Z`,
    `M0,${h - dx} L${dx},${h - dx} L${dx},${h} L0,${h} Z`,
    `M${w - dx},${h - dx} L${w},${h - dx} L${w},${h} L${w - dx},${h} Z`
  ].join(" ");
});
presetShapes.set("plaqueTabs", (w, h) => {
  const dx = Math.sqrt(w * w + h * h) / 20;
  return [
    `M0,0 L${dx},0 A${dx},${dx} 0 0,1 0,${dx} Z`,
    `M${w},0 L${w - dx},0 A${dx},${dx} 0 0,0 ${w},${dx} Z`,
    `M0,${h} L0,${h - dx} A${dx},${dx} 0 0,1 ${dx},${h} Z`,
    `M${w},${h} L${w - dx},${h} A${dx},${dx} 0 0,1 ${w},${h - dx} Z`
  ].join(" ");
});
presetShapes.set("ellipse", (w, h) => {
  const rx = w / 2;
  const ry = h / 2;
  return [`M${w},${ry}`, `A${rx},${ry} 0 1,1 0,${ry}`, `A${rx},${ry} 0 1,1 ${w},${ry}`, "Z"].join(
    " "
  );
});
presetShapes.set("triangle", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 5e4);
  const topX = w * a;
  return `M${topX},0 L${w},${h} L0,${h} Z`;
});
presetShapes.set("isosTriangle", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 5e4);
  const topX = w * a;
  return `M${topX},0 L${w},${h} L0,${h} Z`;
});
presetShapes.set("rtTriangle", (w, h) => `M0,0 L${w},${h} L0,${h} Z`);
presetShapes.set("diamond", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  return `M${cx},0 L${w},${cy} L${cx},${h} L0,${cy} Z`;
});
presetShapes.set("pentagon", (w, h) => {
  const hc = w / 2;
  const swd2 = hc * 105146 / 1e5;
  const shd2 = h / 2 * 110557 / 1e5;
  const svc = shd2;
  const dx1 = swd2 * Math.cos(18 * Math.PI / 180);
  const dx2 = swd2 * Math.cos(54 * Math.PI / 180);
  const dy1 = shd2 * Math.sin(18 * Math.PI / 180);
  const dy2 = shd2 * Math.sin(54 * Math.PI / 180);
  return [
    `M${hc - dx1},${svc - dy1}`,
    // x1, y1 (upper-left)
    `L${hc},0`,
    // hc, t (top)
    `L${hc + dx1},${svc - dy1}`,
    // x4, y1 (upper-right)
    `L${hc + dx2},${svc + dy2}`,
    // x3, y2 (lower-right)
    `L${hc - dx2},${svc + dy2}`,
    // x2, y2 (lower-left)
    "Z"
  ].join(" ");
});
presetShapes.set("hexagon", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const a = Math.min(
    Math.max(adjRaw(adjustments, "adj", 25e3), 0),
    ss > 0 ? 5e4 * w / ss : 5e4
  );
  const vf = 115470;
  const shd2 = h / 2 * vf / 1e5;
  const x1 = ss * a / 1e5;
  const x2 = w - x1;
  const _hc = w / 2;
  const vc = h / 2;
  const dy1 = shd2 * Math.sin(60 * Math.PI / 180);
  const y1 = vc - dy1;
  const y2 = vc + dy1;
  return [
    `M0,${vc}`,
    `L${x1},${y1}`,
    `L${x2},${y1}`,
    `L${w},${vc}`,
    `L${x2},${y2}`,
    `L${x1},${y2}`,
    "Z"
  ].join(" ");
});
presetShapes.set("octagon", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const a = Math.min(Math.max(adjRaw(adjustments, "adj", 29289), 0), 5e4);
  const x1 = ss * a / 1e5;
  const x2 = w - x1;
  const y2 = h - x1;
  return [
    `M0,${x1}`,
    `L${x1},0`,
    `L${x2},0`,
    `L${w},${x1}`,
    `L${w},${y2}`,
    `L${x2},${h}`,
    `L${x1},${h}`,
    `L0,${y2}`,
    "Z"
  ].join(" ");
});
presetShapes.set("heptagon", (w, h) => {
  const hc = w / 2;
  const swd2 = hc * 102572 / 1e5;
  const shd2 = h / 2 * 105210 / 1e5;
  const svc = h / 2 * 105210 / 1e5;
  const dx1 = swd2 * 97493 / 1e5;
  const dx2 = swd2 * 78183 / 1e5;
  const dx3 = swd2 * 43388 / 1e5;
  const dy1 = shd2 * 62349 / 1e5;
  const dy2 = shd2 * 22252 / 1e5;
  const dy3 = shd2 * 90097 / 1e5;
  return [
    `M${hc - dx1},${svc + dy2}`,
    // x1, y2 (left)
    `L${hc - dx2},${svc - dy1}`,
    // x2, y1 (upper-left)
    `L${hc},0`,
    // hc, t (top: svc - shd2 = 0)
    `L${hc + dx2},${svc - dy1}`,
    // x5, y1 (upper-right)
    `L${hc + dx1},${svc + dy2}`,
    // x6, y2 (right)
    `L${hc + dx3},${svc + dy3}`,
    // x4, y3 (lower-right)
    `L${hc - dx3},${svc + dy3}`,
    // x3, y3 (lower-left)
    "Z"
  ].join(" ");
});
presetShapes.set("decagon", (w, h) => {
  const hc = w / 2;
  const vc = h / 2;
  const shd2 = vc * 105146 / 1e5;
  const dx1 = hc * Math.cos(36 * Math.PI / 180);
  const dx2 = hc * Math.cos(72 * Math.PI / 180);
  const dy1 = shd2 * Math.sin(72 * Math.PI / 180);
  const dy2 = shd2 * Math.sin(36 * Math.PI / 180);
  return [
    `M0,${vc}`,
    // l, vc
    `L${hc - dx1},${vc - dy2}`,
    // x1, y2
    `L${hc - dx2},${vc - dy1}`,
    // x2, y1
    `L${hc + dx2},${vc - dy1}`,
    // x3, y1
    `L${hc + dx1},${vc - dy2}`,
    // x4, y2
    `L${w},${vc}`,
    // r, vc
    `L${hc + dx1},${vc + dy2}`,
    // x4, y3
    `L${hc + dx2},${vc + dy1}`,
    // x3, y4
    `L${hc - dx2},${vc + dy1}`,
    // x2, y4
    `L${hc - dx1},${vc + dy2}`,
    // x1, y3
    "Z"
  ].join(" ");
});
presetShapes.set("dodecagon", (w, h) => {
  const x1 = w * 2894 / 21600;
  const x2 = w * 7906 / 21600;
  const x3 = w * 13694 / 21600;
  const x4 = w * 18706 / 21600;
  const y1 = h * 2894 / 21600;
  const y2 = h * 7906 / 21600;
  const y3 = h * 13694 / 21600;
  const y4 = h * 18706 / 21600;
  return [
    `M0,${y2}`,
    `L${x1},${y1}`,
    `L${x2},0`,
    `L${x3},0`,
    `L${x4},${y1}`,
    `L${w},${y2}`,
    `L${w},${y3}`,
    `L${x4},${y4}`,
    `L${x3},${h}`,
    `L${x2},${h}`,
    `L${x1},${y4}`,
    `L0,${y3}`,
    "Z"
  ].join(" ");
});
presetShapes.set("parallelogram", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const maxAdj = ss > 0 ? 1e5 * w / ss : 1e5;
  const a = Math.min(Math.max(adjRaw(adjustments, "adj", 25e3), 0), maxAdj);
  const x2 = ss * a / 1e5;
  const x5 = w - x2;
  return `M0,${h} L${x2},0 L${w},0 L${x5},${h} Z`;
});
presetShapes.set("trapezoid", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const maxAdj = ss > 0 ? 5e4 * w / ss : 5e4;
  const a = Math.min(Math.max(adjRaw(adjustments, "adj", 25e3), 0), maxAdj);
  const x2 = ss * a / 1e5;
  const x3 = w - x2;
  return `M0,${h} L${x2},0 L${x3},0 L${w},${h} Z`;
});
presetShapes.set("nonIsoscelesTrapezoid", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const maxAdj = ss > 0 ? 5e4 * w / ss : 5e4;
  const a1 = Math.min(Math.max(adjRaw(adjustments, "adj1", 25e3), 0), maxAdj);
  const a2 = Math.min(Math.max(adjRaw(adjustments, "adj2", 25e3), 0), maxAdj);
  const x2 = ss * a1 / 1e5;
  const dx3 = ss * a2 / 1e5;
  const x3 = w - dx3;
  return `M0,${h} L${x2},0 L${x3},0 L${w},${h} Z`;
});
presetShapes.set("corner", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const a1 = Math.min(Math.max(adj(adjustments, "adj1", 5e4), 0), 1);
  const a2 = Math.min(Math.max(adj(adjustments, "adj2", 5e4), 0), 1);
  const x1 = ss * a2;
  const dy1 = ss * a1;
  const y1 = h - dy1;
  return ["M0,0", `L${x1},0`, `L${x1},${y1}`, `L${w},${y1}`, `L${w},${h}`, `L0,${h}`, "Z"].join(
    " "
  );
});
presetShapes.set("diagStripe", (w, h, adjustments) => {
  const a = Math.min(Math.max(adj(adjustments, "adj", 5e4), 0), 1);
  const x2 = w * a;
  const y2 = h * a;
  return [`M0,${y2}`, `L${x2},0`, `L${w},0`, `L0,${h}`, "Z"].join(" ");
});
presetShapes.set("star4", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 12500) * 2;
  return starShape(w, h, 4, Math.min(Math.max(a, 0), 1));
});
presetShapes.set("star5", (w, h, adjustments) => {
  var _a;
  const aRaw = (_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 19098;
  const a = Math.min(Math.max(aRaw, 0), 5e4);
  const hf = 105146;
  const vf = 110557;
  const swd2 = w / 2 * hf / 1e5;
  const shd2 = h / 2 * vf / 1e5;
  const svc = h / 2 * vf / 1e5;
  const iwd2 = swd2 * a / 5e4;
  const ihd2 = shd2 * a / 5e4;
  const cx = w / 2;
  const step = 2 * Math.PI / 5;
  const halfStep = step / 2;
  const startAngle = -Math.PI / 2;
  const parts = [];
  for (let i = 0; i < 5; i++) {
    const outerAngle = startAngle + step * i;
    const innerAngle = outerAngle + halfStep;
    const ox = cx + swd2 * Math.cos(outerAngle);
    const oy = svc + shd2 * Math.sin(outerAngle);
    const ix = cx + iwd2 * Math.cos(innerAngle);
    const iy = svc + ihd2 * Math.sin(innerAngle);
    parts.push(i === 0 ? `M${ox},${oy}` : `L${ox},${oy}`);
    parts.push(`L${ix},${iy}`);
  }
  parts.push("Z");
  return parts.join(" ");
});
presetShapes.set("star6", (w, h, adjustments) => {
  var _a;
  const aRaw = (_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 28868;
  const a = Math.min(Math.max(aRaw, 0), 5e4);
  const hf = 115470;
  const swd2 = w / 2 * hf / 1e5;
  const shd2 = h / 2;
  const iwd2 = swd2 * a / 5e4;
  const ihd2 = shd2 * a / 5e4;
  const cx = w / 2;
  const cy = h / 2;
  const step = 2 * Math.PI / 6;
  const halfStep = step / 2;
  const startAngle = -Math.PI / 2;
  const parts = [];
  for (let i = 0; i < 6; i++) {
    const outerAngle = startAngle + step * i;
    const innerAngle = outerAngle + halfStep;
    const ox = cx + swd2 * Math.cos(outerAngle);
    const oy = cy + shd2 * Math.sin(outerAngle);
    const ix = cx + iwd2 * Math.cos(innerAngle);
    const iy = cy + ihd2 * Math.sin(innerAngle);
    parts.push(i === 0 ? `M${ox},${oy}` : `L${ox},${oy}`);
    parts.push(`L${ix},${iy}`);
  }
  parts.push("Z");
  return parts.join(" ");
});
presetShapes.set("star7", (w, h, adjustments) => {
  var _a;
  const aRaw = (_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 34601;
  const a = Math.min(Math.max(aRaw, 0), 5e4);
  const swd2 = w / 2 * 102572 / 1e5;
  const shd2 = h / 2 * 105210 / 1e5;
  const svc = shd2;
  const iwd2 = swd2 * a / 5e4;
  const ihd2 = shd2 * a / 5e4;
  const cx = w / 2;
  const step = 2 * Math.PI / 7;
  const halfStep = step / 2;
  const startAngle = -Math.PI / 2;
  const parts = [];
  for (let i = 0; i < 7; i++) {
    const outerAngle = startAngle + step * i;
    const innerAngle = outerAngle + halfStep;
    const ox = cx + swd2 * Math.cos(outerAngle);
    const oy = svc + shd2 * Math.sin(outerAngle);
    const ix = cx + iwd2 * Math.cos(innerAngle);
    const iy = svc + ihd2 * Math.sin(innerAngle);
    parts.push(i === 0 ? `M${ox},${oy}` : `L${ox},${oy}`);
    parts.push(`L${ix},${iy}`);
  }
  parts.push("Z");
  return parts.join(" ");
});
presetShapes.set("star8", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 37500) * 2;
  return starShape(w, h, 8, Math.min(Math.max(a, 0), 1));
});
presetShapes.set("star10", (w, h, adjustments) => {
  var _a;
  const aRaw = (_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 42533;
  const a = Math.min(Math.max(aRaw, 0), 5e4);
  const hf = 105146;
  const swd2 = w / 2 * hf / 1e5;
  const shd2 = h / 2;
  const iwd2 = swd2 * a / 5e4;
  const ihd2 = shd2 * a / 5e4;
  const cx = w / 2;
  const cy = h / 2;
  const step = 2 * Math.PI / 10;
  const halfStep = step / 2;
  const startAngle = -Math.PI / 2;
  const parts = [];
  for (let i = 0; i < 10; i++) {
    const outerAngle = startAngle + step * i;
    const innerAngle = outerAngle + halfStep;
    const ox = cx + swd2 * Math.cos(outerAngle);
    const oy = cy + shd2 * Math.sin(outerAngle);
    const ix = cx + iwd2 * Math.cos(innerAngle);
    const iy = cy + ihd2 * Math.sin(innerAngle);
    parts.push(i === 0 ? `M${ox},${oy}` : `L${ox},${oy}`);
    parts.push(`L${ix},${iy}`);
  }
  parts.push("Z");
  return parts.join(" ");
});
presetShapes.set("star12", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 37500) * 2;
  return starShape(w, h, 12, Math.min(Math.max(a, 0), 1));
});
presetShapes.set("star16", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 37500) * 2;
  return starShape(w, h, 16, Math.min(Math.max(a, 0), 1));
});
presetShapes.set("star24", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 37500) * 2;
  return starShape(w, h, 24, Math.min(Math.max(a, 0), 1));
});
presetShapes.set("star32", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 37500) * 2;
  return starShape(w, h, 32, Math.min(Math.max(a, 0), 1));
});
presetShapes.set("line", (w, h) => {
  const safeH = h || 1;
  const safeW = w || 1;
  if (w === 0) return `M0.5,0 L0.5,${safeH}`;
  if (h === 0) return `M0,0.5 L${safeW},0.5`;
  return `M0,0 L${w},${h}`;
});
presetShapes.set("lineInv", (w, h) => {
  const safeH = h || 1;
  const safeW = w || 1;
  if (w === 0) return `M0.5,0 L0.5,${safeH}`;
  if (h === 0) return `M0,0.5 L${safeW},0.5`;
  return `M${w},0 L0,${h}`;
});
presetShapes.set("straightConnector1", (w, h) => {
  const safeH = h || 1;
  const safeW = w || 1;
  if (w === 0) return `M0.5,0 L0.5,${safeH}`;
  if (h === 0) return `M0,0.5 L${safeW},0.5`;
  return `M0,0 L${w},${h}`;
});
presetShapes.set("bentConnector2", (w, h) => `M0,0 L${w},0 L${w},${h}`);
presetShapes.set("bentConnector3", (w, h, adjustments) => {
  const a = adj(adjustments, "adj1", 5e4);
  const midX = w * a;
  return `M0,0 L${midX},0 L${midX},${h} L${w},${h}`;
});
presetShapes.set("bentConnector4", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 5e4);
  const a2 = adj(adjustments, "adj2", 5e4);
  const midX = w * a1;
  const midY = h * a2;
  return `M0,0 L${midX},0 L${midX},${midY} L${w},${midY} L${w},${h}`;
});
presetShapes.set("curvedConnector2", (w, h) => {
  return `M0,0 C${w},0 0,${h} ${w},${h}`;
});
presetShapes.set("curvedConnector3", (w, h, adjustments) => {
  const x2 = w * adj(adjustments, "adj1", 5e4);
  const x1 = x2 / 2;
  const x3 = (w + x2) / 2;
  const vc = h / 2;
  const hd4 = h / 4;
  const y3 = h * 3 / 4;
  return `M0,0 C${x1},0 ${x2},${hd4} ${x2},${vc} C${x2},${y3} ${x3},${h} ${w},${h}`;
});
presetShapes.set("curvedConnector4", (w, h, adjustments) => {
  const x2 = w * adj(adjustments, "adj1", 5e4);
  const y4 = h * adj(adjustments, "adj2", 5e4);
  const x1 = x2 / 2;
  const x3 = (w + x2) / 2;
  const x4 = (x2 + x3) / 2;
  const x5 = (x3 + w) / 2;
  const y1 = y4 / 2;
  const y2 = y1 / 2;
  const y3 = (y1 + y4) / 2;
  const y5 = (h + y4) / 2;
  return [
    "M0,0",
    `C${x1},0 ${x2},${y2} ${x2},${y1}`,
    `C${x2},${y3} ${x4},${y4} ${x3},${y4}`,
    `C${x5},${y4} ${w},${y5} ${w},${h}`
  ].join(" ");
});
presetShapes.set("curvedConnector5", (w, h, adjustments) => {
  const x3 = w * adj(adjustments, "adj1", 5e4);
  const y4 = h * adj(adjustments, "adj2", 5e4);
  const x6 = w * adj(adjustments, "adj3", 5e4);
  const x1 = (x3 + x6) / 2;
  const x2 = x3 / 2;
  const x4 = (x3 + x1) / 2;
  const x5 = (x6 + x1) / 2;
  const x7 = (x6 + w) / 2;
  const y1 = y4 / 2;
  const y2 = y1 / 2;
  const y3 = (y1 + y4) / 2;
  const y5 = (h + y4) / 2;
  const y6 = (y5 + y4) / 2;
  const y7 = (y5 + h) / 2;
  return [
    "M0,0",
    `C${x2},0 ${x3},${y2} ${x3},${y1}`,
    `C${x3},${y3} ${x4},${y4} ${x1},${y4}`,
    `C${x5},${y4} ${x6},${y6} ${x6},${y5}`,
    `C${x6},${y7} ${x7},${h} ${w},${h}`
  ].join(" ");
});
presetShapes.set("bentConnector5", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 5e4);
  const a2 = adj(adjustments, "adj2", 5e4);
  const a3 = adj(adjustments, "adj3", 5e4);
  const x1 = w * a1;
  const y1 = h * a2;
  const x2 = w * a3;
  return `M0,0 L${x1},0 L${x1},${y1} L${x2},${y1} L${x2},${h} L${w},${h}`;
});
presetShapes.set("rightArrow", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 5e4);
  const a2 = adj(adjustments, "adj2", 5e4);
  const ss = Math.min(w, h);
  const shaftHalfH = h * a1 / 2;
  const headLen = ss * a2;
  const cy = h / 2;
  const shaftEnd = w - headLen;
  return [
    `M0,${cy - shaftHalfH}`,
    `L${shaftEnd},${cy - shaftHalfH}`,
    `L${shaftEnd},0`,
    `L${w},${cy}`,
    `L${shaftEnd},${h}`,
    `L${shaftEnd},${cy + shaftHalfH}`,
    `L0,${cy + shaftHalfH}`,
    "Z"
  ].join(" ");
});
presetShapes.set("leftArrow", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 5e4);
  const a2 = adj(adjustments, "adj2", 5e4);
  const ss = Math.min(w, h);
  const shaftHalfH = h * a1 / 2;
  const headLen = ss * a2;
  const cy = h / 2;
  return [
    `M${w},${cy - shaftHalfH}`,
    `L${headLen},${cy - shaftHalfH}`,
    `L${headLen},0`,
    `L0,${cy}`,
    `L${headLen},${h}`,
    `L${headLen},${cy + shaftHalfH}`,
    `L${w},${cy + shaftHalfH}`,
    "Z"
  ].join(" ");
});
presetShapes.set("upArrow", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 5e4);
  const a2 = adj(adjustments, "adj2", 5e4);
  const shaftHalfW = w * a1 / 2;
  const headLen = h * a2;
  const cx = w / 2;
  return [
    `M${cx - shaftHalfW},${h}`,
    `L${cx - shaftHalfW},${headLen}`,
    `L0,${headLen}`,
    `L${cx},0`,
    `L${w},${headLen}`,
    `L${cx + shaftHalfW},${headLen}`,
    `L${cx + shaftHalfW},${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("downArrow", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 5e4);
  const a2 = adj(adjustments, "adj2", 5e4);
  const shaftHalfW = w * a1 / 2;
  const headLen = h * a2;
  const cx = w / 2;
  const shaftEnd = h - headLen;
  return [
    `M${cx - shaftHalfW},0`,
    `L${cx + shaftHalfW},0`,
    `L${cx + shaftHalfW},${shaftEnd}`,
    `L${w},${shaftEnd}`,
    `L${cx},${h}`,
    `L0,${shaftEnd}`,
    `L${cx - shaftHalfW},${shaftEnd}`,
    "Z"
  ].join(" ");
});
presetShapes.set("downArrowCallout", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const adj1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const adj2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 25e3;
  const adj3 = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3;
  const adj4 = (_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 64977;
  const ss = Math.min(w, h);
  const a2 = Math.max(0, Math.min(adj2, 5e4 * w / Math.max(ss, 1)));
  const a1 = Math.max(0, Math.min(adj1, a2 * 2));
  const a3 = Math.max(0, Math.min(adj3, 1e5 * h / Math.max(ss, 1)));
  const q2 = a3 * ss / Math.max(h, 1);
  const a4 = Math.max(0, Math.min(adj4, 1e5 - q2));
  const hc = w / 2;
  const dx1 = ss * a2 / 1e5;
  const dx2 = ss * a1 / 2e5;
  const x1 = hc - dx1;
  const x2 = hc - dx2;
  const x3 = hc + dx2;
  const x4 = hc + dx1;
  const y3 = h - ss * a3 / 1e5;
  const y2 = h * a4 / 1e5;
  return [
    "M0,0",
    `L${w},0`,
    `L${w},${y2}`,
    `L${x3},${y2}`,
    `L${x3},${y3}`,
    `L${x4},${y3}`,
    `L${hc},${h}`,
    `L${x1},${y3}`,
    `L${x2},${y3}`,
    `L${x2},${y2}`,
    `L0,${y2}`,
    "Z"
  ].join(" ");
});
presetShapes.set("rightArrowCallout", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const ss = Math.min(w, h);
  const maxAdj2 = 5e4 * h / Math.max(ss, 1);
  const a2 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 25e3, maxAdj2));
  const a1 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 25e3, a2 * 2));
  const maxAdj3 = 1e5 * w / Math.max(ss, 1);
  const a3 = Math.max(0, Math.min((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3, maxAdj3));
  const q2 = a3 * ss / Math.max(w, 1);
  const a4 = Math.max(0, Math.min((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 64977, 1e5 - q2));
  const vc = h / 2;
  const dy1 = ss * a2 / 1e5;
  const dy2 = ss * a1 / 2e5;
  const y1 = vc - dy1;
  const y2 = vc - dy2;
  const y3 = vc + dy2;
  const y4 = vc + dy1;
  const dx3 = ss * a3 / 1e5;
  const x3 = w - dx3;
  const x2 = w * a4 / 1e5;
  return [
    "M0,0",
    `L${x2},0`,
    `L${x2},${y2}`,
    `L${x3},${y2}`,
    `L${x3},${y1}`,
    `L${w},${vc}`,
    `L${x3},${y4}`,
    `L${x3},${y3}`,
    `L${x2},${y3}`,
    `L${x2},${h}`,
    `L0,${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("leftArrowCallout", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const ss = Math.min(w, h);
  const maxAdj2 = 5e4 * h / Math.max(ss, 1);
  const a2 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 25e3, maxAdj2));
  const a1 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 25e3, a2 * 2));
  const maxAdj3 = 1e5 * w / Math.max(ss, 1);
  const a3 = Math.max(0, Math.min((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3, maxAdj3));
  const q2 = a3 * ss / Math.max(w, 1);
  const a4 = Math.max(0, Math.min((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 64977, 1e5 - q2));
  const vc = h / 2;
  const dy1 = ss * a2 / 1e5;
  const dy2 = ss * a1 / 2e5;
  const y1 = vc - dy1;
  const y2 = vc - dy2;
  const y3 = vc + dy2;
  const y4 = vc + dy1;
  const x1 = ss * a3 / 1e5;
  const dx2 = w * a4 / 1e5;
  const x2 = w - dx2;
  return [
    `M0,${vc}`,
    `L${x1},${y1}`,
    `L${x1},${y2}`,
    `L${x2},${y2}`,
    `L${x2},0`,
    `L${w},0`,
    `L${w},${h}`,
    `L${x2},${h}`,
    `L${x2},${y3}`,
    `L${x1},${y3}`,
    `L${x1},${y4}`,
    "Z"
  ].join(" ");
});
presetShapes.set("upArrowCallout", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const ss = Math.min(w, h);
  const maxAdj2 = 5e4 * w / Math.max(ss, 1);
  const a2 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 25e3, maxAdj2));
  const a1 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 25e3, a2 * 2));
  const maxAdj3 = 1e5 * h / Math.max(ss, 1);
  const a3 = Math.max(0, Math.min((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3, maxAdj3));
  const q2 = a3 * ss / Math.max(h, 1);
  const a4 = Math.max(0, Math.min((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 64977, 1e5 - q2));
  const hc = w / 2;
  const dx1 = ss * a2 / 1e5;
  const dx2 = ss * a1 / 2e5;
  const x1 = hc - dx1;
  const x2 = hc - dx2;
  const x3 = hc + dx2;
  const x4 = hc + dx1;
  const y1 = ss * a3 / 1e5;
  const dy2 = h * a4 / 1e5;
  const y2 = h - dy2;
  return [
    `M0,${y2}`,
    `L${x2},${y2}`,
    `L${x2},${y1}`,
    `L${x1},${y1}`,
    `L${hc},0`,
    `L${x4},${y1}`,
    `L${x3},${y1}`,
    `L${x3},${y2}`,
    `L${w},${y2}`,
    `L${w},${h}`,
    `L0,${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("upDownArrowCallout", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 25e3;
  const adj3Raw = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3;
  const adj4Raw = (_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 48123;
  const ss = Math.min(w, h);
  const a2 = Math.max(0, Math.min(adj2Raw, 5e4 * w / Math.max(ss, 1)));
  const a1 = Math.max(0, Math.min(adj1Raw, a2 * 2));
  const a3 = Math.max(0, Math.min(adj3Raw, 5e4 * h / Math.max(ss, 1)));
  const q2 = a3 * ss / Math.max(h, 1);
  const a4 = Math.max(0, Math.min(adj4Raw, 1e5 - q2 - q2));
  const dx1 = ss * a2 / 1e5;
  const dx2 = ss * a1 / 2e5;
  const hc = w / 2;
  const x1 = hc - dx1;
  const x2 = hc - dx2;
  const x3 = hc + dx2;
  const x4 = hc + dx1;
  const y1 = ss * a3 / 1e5;
  const dy2 = h * a4 / 2e5;
  const y2 = h / 2 - dy2;
  const y3 = h / 2 + dy2;
  const y4 = h - y1;
  return [
    `M${hc},0`,
    `L${x4},${y1}`,
    `L${x3},${y1}`,
    `L${x3},${y2}`,
    `L${w},${y2}`,
    `L${w},${y3}`,
    `L${x3},${y3}`,
    `L${x3},${y4}`,
    `L${x4},${y4}`,
    `L${hc},${h}`,
    `L${x1},${y4}`,
    `L${x2},${y4}`,
    `L${x2},${y3}`,
    `L0,${y3}`,
    `L0,${y2}`,
    `L${x2},${y2}`,
    `L${x2},${y1}`,
    `L${x1},${y1}`,
    "Z"
  ].join(" ");
});
presetShapes.set("leftRightArrowCallout", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 25e3;
  const adj3Raw = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3;
  const adj4Raw = (_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 48123;
  const ss = Math.min(w, h);
  const a2 = Math.max(0, Math.min(adj2Raw, 5e4 * h / Math.max(ss, 1)));
  const a1 = Math.max(0, Math.min(adj1Raw, a2 * 2));
  const a3 = Math.max(0, Math.min(adj3Raw, 5e4 * w / Math.max(ss, 1)));
  const q2 = a3 * ss / Math.max(w, 1);
  const a4 = Math.max(0, Math.min(adj4Raw, 1e5 - q2 - q2));
  const dy1 = ss * a2 / 1e5;
  const dy2 = ss * a1 / 2e5;
  const vc = h / 2;
  const y1 = vc - dy1;
  const y2 = vc - dy2;
  const y3 = vc + dy2;
  const y4 = vc + dy1;
  const x1 = ss * a3 / 1e5;
  const dx2 = w * a4 / 2e5;
  const x2 = w / 2 - dx2;
  const x3 = w / 2 + dx2;
  const x4 = w - x1;
  return [
    `M0,${vc}`,
    `L${x1},${y1}`,
    `L${x1},${y2}`,
    `L${x2},${y2}`,
    `L${x2},0`,
    `L${x3},0`,
    `L${x3},${y2}`,
    `L${x4},${y2}`,
    `L${x4},${y1}`,
    `L${w},${vc}`,
    `L${x4},${y4}`,
    `L${x4},${y3}`,
    `L${x3},${y3}`,
    `L${x3},${h}`,
    `L${x2},${h}`,
    `L${x2},${y3}`,
    `L${x1},${y3}`,
    `L${x1},${y4}`,
    "Z"
  ].join(" ");
});
presetShapes.set("uturnArrow", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e;
  const adj1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const adj2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 25e3;
  const adj3 = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3;
  const adj4 = (_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 43750;
  const adj5 = (_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 75e3;
  const ss = Math.min(w, h);
  const a2 = Math.max(0, Math.min(adj2, 25e3));
  const a1 = Math.max(0, Math.min(adj1, a2 * 2));
  const q2 = a1 * ss / Math.max(h, 1);
  const q3 = 1e5 - q2;
  const a3 = Math.max(0, Math.min(adj3, q3 * h / Math.max(ss, 1)));
  const minAdj5 = (a3 + a1) * ss / Math.max(h, 1);
  const a5 = Math.max(minAdj5, Math.min(adj5, 1e5));
  const th = ss * a1 / 1e5;
  const aw2 = ss * a2 / 1e5;
  const th2 = th / 2;
  const dh2 = aw2 - th2;
  const y5 = h * a5 / 1e5;
  const ah = ss * a3 / 1e5;
  const y4 = y5 - ah;
  const x9 = w - dh2;
  const bs = Math.min(x9 / 2, y4);
  const a4 = Math.max(0, Math.min(adj4, 1e5 * bs / Math.max(ss, 1)));
  const bd = ss * a4 / 1e5;
  const bd2 = Math.max(bd - th, 0);
  const x3 = th + bd2;
  const x8 = w - aw2;
  const x6 = x8 - aw2;
  const x7 = x6 + dh2;
  const x4 = x9 - bd;
  const x5 = x7 - bd2;
  return [
    `M0,${h}`,
    `L0,${bd}`,
    bd > 0.1 ? `A${bd},${bd} 0 0,1 ${bd},0` : "L0,0",
    `L${x4},0`,
    bd > 0.1 ? `A${bd},${bd} 0 0,1 ${x9},${bd}` : `L${x9},0`,
    `L${x9},${y4}`,
    `L${w},${y4}`,
    `L${x8},${y5}`,
    `L${x6},${y4}`,
    `L${x7},${y4}`,
    `L${x7},${x3}`,
    bd2 > 0.1 ? `A${bd2},${bd2} 0 0,0 ${x5},${th}` : `L${x5},${th}`,
    `L${x3},${th}`,
    bd2 > 0.1 ? `A${bd2},${bd2} 0 0,0 ${th},${x3}` : `L${th},${x3}`,
    `L${th},${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("leftRightArrow", (w, h, adjustments) => {
  var _a, _b;
  const ss = Math.min(w, h);
  const hd2 = h / 2;
  const maxAdj2 = ss > 0 ? 5e4 * w / ss : 0;
  const a1 = Math.min(Math.max((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 5e4, 0), 1e5);
  const a2 = Math.min(Math.max((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4, 0), maxAdj2);
  const x2 = ss * a2 / 1e5;
  const x3 = w - x2;
  const dy = h * a1 / 2e5;
  const vc = hd2;
  const y1 = vc - dy;
  const y2 = vc + dy;
  const dx1 = hd2 > 0 ? y1 * x2 / hd2 : 0;
  const _x1 = x2 - dx1;
  const _x4 = x3 + dx1;
  return [
    `M0,${vc}`,
    `L${x2},0`,
    `L${x2},${y1}`,
    `L${x3},${y1}`,
    `L${x3},0`,
    `L${w},${vc}`,
    `L${x3},${h}`,
    `L${x3},${y2}`,
    `L${x2},${y2}`,
    `L${x2},${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("leftUpArrow", (w, h, adjustments) => {
  var _a, _b, _c;
  const rawAdj2 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 25e3, 5e4));
  const maxAdj1 = rawAdj2 * 2;
  const rawAdj1 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 25e3, maxAdj1));
  const maxAdj3 = 1e5 - maxAdj1;
  const rawAdj3 = Math.max(0, Math.min((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3, maxAdj3));
  const ss = Math.min(w, h);
  const x1 = ss * rawAdj3 / 1e5;
  const dx2 = ss * rawAdj2 / 5e4;
  const x2 = w - dx2;
  const y2 = h - dx2;
  const dx4 = ss * rawAdj2 / 1e5;
  const x4 = w - dx4;
  const y4 = h - dx4;
  const dx3 = ss * rawAdj1 / 2e5;
  const x3 = x4 - dx3;
  const x5 = x4 + dx3;
  const y3 = y4 - dx3;
  const y5 = y4 + dx3;
  return [
    `M0,${y4}`,
    `L${x1},${y2}`,
    `L${x1},${y3}`,
    `L${x3},${y3}`,
    `L${x3},${x1}`,
    `L${x2},${x1}`,
    `L${x4},0`,
    `L${w},${x1}`,
    `L${x5},${x1}`,
    `L${x5},${y5}`,
    `L${x1},${y5}`,
    `L${x1},${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("upDownArrow", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 5e4;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4;
  const ss = Math.min(w, h);
  const maxAdj2 = 5e4 * h / Math.max(ss, 1);
  const a2 = Math.max(0, Math.min(adj2Raw, maxAdj2));
  const a1 = Math.max(0, Math.min(adj1Raw, 1e5));
  const dx1 = ss * a1 / 2e5;
  const dy = ss * a2 / 1e5;
  const hc = w / 2;
  return [
    `M${hc},0`,
    `L${w},${dy}`,
    `L${hc + dx1},${dy}`,
    `L${hc + dx1},${h - dy}`,
    `L${w},${h - dy}`,
    `L${hc},${h}`,
    `L0,${h - dy}`,
    `L${hc - dx1},${h - dy}`,
    `L${hc - dx1},${dy}`,
    `L0,${dy}`,
    "Z"
  ].join(" ");
});
presetShapes.set("notchedRightArrow", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 5e4);
  const a2 = adj(adjustments, "adj2", 5e4);
  const ss = Math.min(w, h);
  const shaftHalfH = h * a1 / 2;
  const headLen = ss * a2;
  const cy = h / 2;
  const shaftEnd = w - headLen;
  const notchDepth = cy > 0 ? shaftHalfH * headLen / cy : 0;
  return [
    `M0,${cy - shaftHalfH}`,
    `L${shaftEnd},${cy - shaftHalfH}`,
    `L${shaftEnd},0`,
    `L${w},${cy}`,
    `L${shaftEnd},${h}`,
    `L${shaftEnd},${cy + shaftHalfH}`,
    `L0,${cy + shaftHalfH}`,
    `L${notchDepth},${cy}`,
    "Z"
  ].join(" ");
});
presetShapes.set("chevron", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 5e4);
  const ss = Math.min(w, h);
  const offset = ss * a;
  return [
    "M0,0",
    `L${w - offset},0`,
    `L${w},${h / 2}`,
    `L${w - offset},${h}`,
    `L0,${h}`,
    `L${offset},${h / 2}`,
    "Z"
  ].join(" ");
});
presetShapes.set("homePlate", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 5e4);
  const ss = Math.min(w, h);
  const offset = ss * a;
  const shoulderX = w - offset;
  return ["M0,0", `L${shoulderX},0`, `L${w},${h / 2}`, `L${shoulderX},${h}`, `L0,${h}`, "Z"].join(
    " "
  );
});
presetShapes.set("stripedRightArrow", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const maxAdj2 = ss > 0 ? 84375 * w / ss : 84375;
  const a1 = Math.min(Math.max(adjRaw(adjustments, "adj1", 5e4), 0), 1e5);
  const a2 = Math.min(Math.max(adjRaw(adjustments, "adj2", 5e4), 0), maxAdj2);
  const dy1 = h * a1 / 2e5;
  const dx5 = ss * a2 / 1e5;
  const x5 = w - dx5;
  const vc = h / 2;
  const y1 = vc - dy1;
  const y2 = vc + dy1;
  const ssd32 = ss / 32;
  const ssd16 = ss / 16;
  const ssd8 = ss / 8;
  const x4 = ss * 5 / 32;
  return [
    // Stripe 1: 0 to ssd32
    `M0,${y1} L${ssd32},${y1} L${ssd32},${y2} L0,${y2} Z`,
    // Stripe 2: ssd16 to ssd8
    `M${ssd16},${y1} L${ssd8},${y1} L${ssd8},${y2} L${ssd16},${y2} Z`,
    // Main body + arrowhead: x4 to r
    `M${x4},${y1}`,
    `L${x5},${y1}`,
    `L${x5},0`,
    `L${w},${vc}`,
    `L${x5},${h}`,
    `L${x5},${y2}`,
    `L${x4},${y2}`,
    "Z"
  ].join(" ");
});
presetShapes.set("bentArrow", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const ss = Math.min(w, h);
  const adj2Raw = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 25e3, 5e4));
  const maxAdj1 = adj2Raw * 2;
  const adj1Raw = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 25e3, maxAdj1));
  const adj3Raw = Math.max(0, Math.min((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3, 5e4));
  const th = ss * adj1Raw / 1e5;
  const aw2 = ss * adj2Raw / 1e5;
  const th2 = th / 2;
  const dh2 = aw2 - th2;
  const ah = ss * adj3Raw / 1e5;
  const bw = w - ah;
  const bh = h - dh2;
  const bs = Math.min(bw, bh);
  const maxAdj4 = bs > 0 ? 1e5 * bs / ss : 0;
  const adj4Raw = Math.max(0, Math.min((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 43750, maxAdj4));
  const bd = ss * adj4Raw / 1e5;
  const bd2 = Math.max(bd - th, 0);
  const x3 = th + bd2;
  const x4 = w - ah;
  const y3 = dh2 + th;
  const y4 = y3 + dh2;
  const y5 = dh2 + bd;
  const y6 = y3 + bd2;
  const parts = [
    `M0,${h}`,
    // bottom-left
    `L0,${y5}`
    // up left edge to arc start
  ];
  if (bd > 0.1) {
    parts.push(`A${bd},${bd} 0 0,1 ${bd},${dh2}`);
  } else {
    parts.push(`L0,${dh2}`);
  }
  parts.push(
    `L${x4},${dh2}`,
    // horizontal to arrowhead base (top)
    `L${x4},0`,
    // up to arrowhead top-left wing
    `L${w},${aw2}`,
    // arrowhead tip (pointing right)
    `L${x4},${y4}`,
    // arrowhead bottom wing
    `L${x4},${y3}`,
    // back to arrowhead base (bottom)
    `L${x3},${y3}`
    // horizontal back toward bend
  );
  if (bd2 > 0.1) {
    parts.push(`A${bd2},${bd2} 0 0,0 ${th},${y6}`);
  } else {
    parts.push(`L${th},${y3}`);
  }
  parts.push(
    `L${th},${h}`,
    // down right side of shaft to bottom
    "Z"
  );
  return parts.join(" ");
});
presetShapes.set("bentUpArrow", (w, h, adjustments) => {
  var _a, _b, _c;
  const raw1 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3, 5e4));
  const raw2 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 25e3, 5e4));
  const raw3 = Math.max(0, Math.min((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3, 5e4));
  const ss = Math.min(w, h);
  const y1 = ss * raw3 / 1e5;
  const dx1 = ss * raw2 / 5e4;
  const x1 = w - dx1;
  const dx3 = ss * raw2 / 1e5;
  const x3 = w - dx3;
  const dx2 = ss * raw1 / 2e5;
  const x2 = x3 - dx2;
  const x4 = x3 + dx2;
  const dy2 = ss * raw1 / 1e5;
  const y2 = h - dy2;
  return [
    `M0,${y2}`,
    `L${x2},${y2}`,
    `L${x2},${y1}`,
    `L${x1},${y1}`,
    `L${x3},0`,
    `L${w},${y1}`,
    `L${x4},${y1}`,
    `L${x4},${h}`,
    `L0,${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("curvedRightArrow", (w, h, adjustments) => {
  var _a, _b, _c;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4;
  const adj3Raw = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3;
  const cnstVal1 = 5e4;
  const cnstVal2 = 1e5;
  const hd2 = h / 2;
  const r = w;
  const b = h;
  const l = 0;
  const c3d4 = 270;
  const cd2 = 180;
  const cd4 = 90;
  const ss = Math.max(Math.min(w, h), 1);
  const maxAdj2 = cnstVal1 * h / ss;
  const a2 = Math.max(0, Math.min(adj2Raw, maxAdj2));
  const a1 = Math.max(0, Math.min(adj1Raw, a2));
  const th = ss * a1 / cnstVal2;
  const aw = ss * a2 / cnstVal2;
  const q1 = (th + aw) / 4;
  const hR = hd2 - q1;
  const q7 = hR * 2;
  const q8 = q7 * q7;
  const q9 = th * th;
  const q10 = Math.max(q8 - q9, 0);
  const q11 = Math.sqrt(q10);
  const iDx = q11 * w / Math.max(q7, 1e-6);
  const maxAdj3 = cnstVal2 * iDx / ss;
  const a3 = Math.max(0, Math.min(adj3Raw, maxAdj3));
  const ah = ss * a3 / cnstVal2;
  const y3 = hR + th;
  const q2 = w * w;
  const q3 = ah * ah;
  const q4 = Math.max(q2 - q3, 0);
  const q5 = Math.sqrt(q4);
  const dy = q5 * hR / Math.max(w, 1e-6);
  const y5 = hR + dy;
  const y7 = y3 + dy;
  const q6 = aw - th;
  const dh = q6 / 2;
  const y4 = y5 - dh;
  const y8 = y7 + dh;
  const aw2 = aw / 2;
  const y6 = b - aw2;
  const x1 = r - ah;
  const swAng = Math.atan(dy / Math.max(ah, 1e-6));
  const stAng = Math.PI - swAng;
  const mswAng = -swAng;
  const q12 = th / 2;
  const dang2 = Math.atan2(q12, Math.max(iDx, 1e-6));
  const swAng2 = dang2 - Math.PI / 2;
  const stAngDg = stAng * 180 / Math.PI;
  const mswAngDg = mswAng * 180 / Math.PI;
  const swAngDg = swAng * 180 / Math.PI;
  const swAng2Dg = swAng2 * 180 / Math.PI;
  const arc = (cx, cy, rx, ry, startDeg, endDeg) => {
    const s = startDeg * Math.PI / 180;
    const e = endDeg * Math.PI / 180;
    const xS = cx + rx * Math.cos(s);
    const yS = cy + ry * Math.sin(s);
    const xE = cx + rx * Math.cos(e);
    const yE = cy + ry * Math.sin(e);
    const delta = endDeg - startDeg;
    const largeArc = Math.abs(delta) > 180 ? 1 : 0;
    const sweep = delta >= 0 ? 1 : 0;
    return `M${xS},${yS} A${rx},${ry} 0 ${largeArc},${sweep} ${xE},${yE}`;
  };
  return [
    `M${l},${hR}`,
    arc(w, hR, w, hR, cd2, cd2 + mswAngDg).replace("M", "L"),
    `L${x1},${y5}`,
    `L${x1},${y4}`,
    `L${r},${y6}`,
    `L${x1},${y8}`,
    `L${x1},${y7}`,
    arc(w, y3, w, hR, stAngDg, stAngDg + swAngDg).replace("M", "L"),
    "Z",
    arc(w, hR, w, hR, cd2, cd2 + cd4),
    `L${r},${th}`,
    arc(w, y3, w, hR, c3d4, c3d4 + swAng2Dg).replace("M", "L"),
    "Z"
  ].join(" ");
});
presetShapes.set("curvedLeftArrow", (w, h, adjustments) => mirrorAbsolutePathHorizontally(presetShapes.get("curvedRightArrow")(w, h, adjustments), w));
function splitFirstClosedContour(path) {
  const closeIdx = path.indexOf("Z");
  if (closeIdx === -1) {
    return { outer: path, remainder: "" };
  }
  const outer = path.slice(0, closeIdx + 1).trim();
  const remainder = path.slice(closeIdx + 1).trim();
  return { outer, remainder };
}
function buildCurvedArrowMultiPath(shapeName, w, h, adjustments) {
  const fullPath = presetShapes.get(shapeName)(w, h, adjustments);
  const { outer, remainder } = splitFirstClosedContour(fullPath);
  if (!remainder) {
    return [{ d: fullPath, fill: "norm", stroke: true }];
  }
  if (shapeName === "curvedRightArrow") {
    return [
      { d: remainder, fill: "norm", stroke: true },
      { d: outer, fill: "norm", stroke: true }
    ];
  }
  return [
    { d: outer, fill: "norm", stroke: true },
    { d: remainder, fill: "norm", stroke: true }
  ];
}
function buildCurvedVerticalArrowMultiPath(shapeName, w, h, adjustments) {
  const downFullPath = presetShapes.get("curvedDownArrow")(w, h, adjustments);
  const { outer, remainder } = splitFirstClosedContour(downFullPath);
  const ordered = remainder ? [
    { d: remainder, fill: "norm", stroke: true },
    { d: outer, fill: "norm", stroke: true }
  ] : [{ d: downFullPath, fill: "norm", stroke: true }];
  if (shapeName === "curvedDownArrow") {
    return ordered;
  }
  const mirrored = ordered.map((path) => ({
    ...path,
    d: mirrorAbsolutePathVertically(path.d, h)
  }));
  return mirrored.reverse();
}
presetShapes.set("curvedUpArrow", (w, h, adjustments) => {
  var _a, _b, _c;
  const arc = (cx, cy, rx, ry, startDeg, endDeg) => {
    const s = startDeg * Math.PI / 180;
    const e = endDeg * Math.PI / 180;
    const xS = cx + rx * Math.cos(s);
    const yS = cy + ry * Math.sin(s);
    const xE = cx + rx * Math.cos(e);
    const yE = cy + ry * Math.sin(e);
    const delta = endDeg - startDeg;
    const largeArc = Math.abs(delta) > 180 ? 1 : 0;
    const sweep = delta >= 0 ? 1 : 0;
    return `M${xS},${yS} A${rx},${ry} 0 ${largeArc},${sweep} ${xE},${yE}`;
  };
  const ss = Math.min(w, h);
  const wd2 = w / 2;
  const a1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const a2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4;
  const a3Raw = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3;
  const maxAdj2 = 5e4 * w / Math.max(ss, 1);
  const a2 = Math.max(0, Math.min(a2Raw, maxAdj2));
  const a1 = Math.max(0, Math.min(a1Raw, 1e5));
  const th = ss * a1 / 1e5;
  const aw = ss * a2 / 1e5;
  const q1 = (th + aw) / 4;
  const wR = wd2 - q1;
  const q7 = wR * 2;
  const idy = Math.sqrt(Math.max(q7 * q7 - th * th, 0)) * h / Math.max(q7, 1);
  const maxAdj3 = 1e5 * idy / Math.max(ss, 1);
  const a3 = Math.max(0, Math.min(a3Raw, maxAdj3));
  const ah = ss * a3 / 1e5;
  const x3 = wR + th;
  const dx = Math.sqrt(Math.max(h * h - ah * ah, 0)) * wR / Math.max(h, 1);
  const x5 = wR + dx;
  const x7 = x3 + dx;
  const dh = (aw - th) / 2;
  const x4 = x5 - dh;
  const x8 = x7 + dh;
  const x6 = w - aw / 2;
  const y1 = ah;
  const swAng = Math.atan2(dx, ah);
  const dang2 = Math.atan2(th / 2, idy);
  const stAng2 = Math.PI / 2 - dang2;
  const swAng2 = dang2 - swAng;
  const stAng3 = Math.PI / 2 - swAng;
  const stAng2Deg = stAng2 * 180 / Math.PI;
  const swAng2Deg = swAng2 * 180 / Math.PI;
  const stAng3Deg = stAng3 * 180 / Math.PI;
  const swAngDeg = swAng * 180 / Math.PI;
  return [
    arc(wR, 0, wR, h, stAng2Deg, stAng2Deg + swAng2Deg),
    `L${x5},${y1}`,
    `L${x4},${y1}`,
    `L${x6},0`,
    `L${x8},${y1}`,
    `L${x7},${y1}`,
    arc(x3, 0, wR, h, stAng3Deg, stAng3Deg + swAngDeg).replace("M", "L"),
    `L${wR},${h}`,
    arc(wR, 0, wR, h, 90, 180).replace("M", "L"),
    `L${th},0`,
    arc(x3, 0, wR, h, 180, 90).replace("M", "L"),
    "Z"
  ].join(" ");
});
presetShapes.set("curvedDownArrow", (w, h, adjustments) => {
  var _a, _b, _c;
  const arc = (cx, cy, rx, ry, startDeg, endDeg) => {
    const s = startDeg * Math.PI / 180;
    const e = endDeg * Math.PI / 180;
    const xS = cx + rx * Math.cos(s);
    const yS = cy + ry * Math.sin(s);
    const xE = cx + rx * Math.cos(e);
    const yE = cy + ry * Math.sin(e);
    const delta = endDeg - startDeg;
    const largeArc = Math.abs(delta) > 180 ? 1 : 0;
    const sweep = delta >= 0 ? 1 : 0;
    return `M${xS},${yS} A${rx},${ry} 0 ${largeArc},${sweep} ${xE},${yE}`;
  };
  const ss = Math.min(w, h);
  const wd2 = w / 2;
  const a1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const a2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4;
  const a3Raw = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3;
  const maxAdj2 = 5e4 * w / Math.max(ss, 1);
  const a2 = Math.max(0, Math.min(a2Raw, maxAdj2));
  const a1 = Math.max(0, Math.min(a1Raw, 1e5));
  const th = ss * a1 / 1e5;
  const aw = ss * a2 / 1e5;
  const q1 = (th + aw) / 4;
  const wR = wd2 - q1;
  const q7 = wR * 2;
  const idy = Math.sqrt(Math.max(q7 * q7 - th * th, 0)) * h / Math.max(q7, 1);
  const maxAdj3 = 1e5 * idy / Math.max(ss, 1);
  const a3 = Math.max(0, Math.min(a3Raw, maxAdj3));
  const ah = ss * a3 / 1e5;
  const x3 = wR + th;
  const dx = Math.sqrt(Math.max(h * h - ah * ah, 0)) * wR / Math.max(h, 1);
  const x5 = wR + dx;
  const x7 = x3 + dx;
  const dh = (aw - th) / 2;
  const x4 = x5 - dh;
  const x8 = x7 + dh;
  const x6 = w - aw / 2;
  const y1 = h - ah;
  const swAng = Math.atan2(dx, ah);
  const swAngDeg = swAng * 180 / Math.PI;
  const dang2 = Math.atan2(th / 2, idy);
  const dang2Deg = dang2 * 180 / Math.PI;
  const stAng = 270 + swAngDeg;
  const stAng2 = 270 - dang2Deg;
  const swAng2 = dang2Deg - 90;
  const swAng3 = 90 + dang2Deg;
  return [
    `M${x6},${h}`,
    `L${x4},${y1}`,
    `L${x5},${y1}`,
    arc(wR, h, wR, h, stAng, stAng - swAngDeg).replace("M", "L"),
    `L${x3},0`,
    arc(x3, h, wR, h, 270, 270 + swAngDeg).replace("M", "L"),
    `L${x5 + th},${y1}`,
    `L${x8},${y1}`,
    "Z",
    `M${x3},0`,
    arc(x3, h, wR, h, stAng2, stAng2 + swAng2).replace("M", "L"),
    arc(wR, h, wR, h, 180, 180 + swAng3).replace("M", "L"),
    "Z"
  ].join(" ");
});
function buildCircularArrowPath(w, h, adjustments, _mirrorX = false, variant = "circularArrow") {
  var _a, _b, _c, _d, _e;
  const hc = w / 2;
  const vc = h / 2;
  const wd2 = w / 2;
  const hd2 = h / 2;
  const ss = Math.min(w, h);
  const cd2 = 108e5;
  const toRad60k = (a) => a / 6e4 * Math.PI / 180;
  const ooxSin = (val, ang) => val * Math.sin(toRad60k(ang));
  const ooxCos = (val, ang) => val * Math.cos(toRad60k(ang));
  const cat2 = (r, ht, wt) => r * Math.cos(Math.atan2(wt, ht));
  const sat2 = (r, ht, wt) => r * Math.sin(Math.atan2(wt, ht));
  const at2 = (x, y) => Math.atan2(y, x) * 180 / Math.PI * 6e4;
  const modF = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
  const isLeft = variant === "leftCircularArrow";
  const adj1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 12500;
  const adj2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : isLeft ? -1142319 : 1142319;
  const adj3 = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : isLeft ? 1142319 : 20457681;
  const adj4 = (_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 108e5;
  const adj5v = (_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 12500;
  const a5 = Math.max(0, Math.min(adj5v, 25e3));
  const maxAdj1 = a5 * 2;
  const a1 = Math.max(0, Math.min(adj1, maxAdj1));
  const enAng = Math.max(1, Math.min(adj3, 21599999));
  const stAng = Math.max(0, Math.min(adj4, 21599999));
  const th = ss * a1 / 1e5;
  const thh = ss * a5 / 1e5;
  const th2 = th / 2;
  const rw1 = wd2 + th2 - thh;
  const rh1 = hd2 + th2 - thh;
  const rw2 = rw1 - th;
  const rh2 = rh1 - th;
  const rw3 = rw2 + th2;
  const rh3 = rh2 + th2;
  const wtH = ooxSin(rw3, enAng);
  const htH = ooxCos(rh3, enAng);
  const dxH = cat2(rw3, htH, wtH);
  const dyH = sat2(rh3, htH, wtH);
  const xH = hc + dxH;
  const yH = vc + dyH;
  const rI = Math.min(rw2, rh2);
  const u1 = dxH * dxH;
  const u2 = dyH * dyH;
  const u3 = rI * rI;
  const u4 = u1 - u3;
  const u5 = u2 - u3;
  const u6 = u2 !== 0 ? u4 * u5 / u1 : 0;
  const u7 = u2 !== 0 ? u6 / u2 : 0;
  const u8 = 1 - u7;
  const u9 = Math.sqrt(Math.max(0, u8));
  const u10 = dxH !== 0 ? u4 / dxH : 0;
  const u11 = dyH !== 0 ? u10 / dyH : 0;
  const u12 = u11 !== 0 ? (1 + u9) / u11 : 0;
  const u13 = at2(1, u12);
  const u14 = u13 + 216e5;
  const u15 = u13 >= 0 ? u13 : u14;
  const u16 = u15 - enAng;
  const u17 = u16 + 216e5;
  const u18 = u16 >= 0 ? u16 : u17;
  const u19 = u18 - cd2;
  const u20 = u18 - 216e5;
  const u21 = u19 >= 0 ? u20 : u18;
  const maxAng = Math.abs(u21);
  let aAng;
  if (isLeft) {
    const minAng = -maxAng;
    const a2 = -Math.abs(adj2);
    aAng = Math.max(minAng, Math.min(a2, 0));
  } else {
    aAng = Math.max(0, Math.min(adj2, maxAng));
  }
  const ptAng = enAng + aAng;
  const wtA = ooxSin(rw3, ptAng);
  const htA = ooxCos(rh3, ptAng);
  const dxA = cat2(rw3, htA, wtA);
  const dyA = sat2(rh3, htA, wtA);
  const xA = hc + dxA;
  const yA = vc + dyA;
  const wtE = ooxSin(rw1, stAng);
  const htE = ooxCos(rh1, stAng);
  const dxE = cat2(rw1, htE, wtE);
  const dyE = sat2(rh1, htE, wtE);
  const xE = hc + dxE;
  const yE = vc + dyE;
  const dxG = ooxCos(thh, ptAng);
  const dyG = ooxSin(thh, ptAng);
  const xG = xH + dxG;
  const yG = yH + dyG;
  const xB = xH - dxG;
  const yB = yH - dyG;
  const sx1 = xB - hc;
  const sy1 = yB - vc;
  const sx2 = xG - hc;
  const sy2 = yG - vc;
  const rO = Math.min(rw1, rh1);
  const x1O = rw1 !== 0 ? sx1 * rO / rw1 : 0;
  const y1O = rh1 !== 0 ? sy1 * rO / rh1 : 0;
  const x2O = rw1 !== 0 ? sx2 * rO / rw1 : 0;
  const y2O = rh1 !== 0 ? sy2 * rO / rh1 : 0;
  const dxO = x2O - x1O;
  const dyO = y2O - y1O;
  const dOval = modF(dxO, dyO, 0);
  const q1 = x1O * y2O;
  const q2 = x2O * y1O;
  const DO = q1 - q2;
  const q3 = rO * rO;
  const q4 = dOval * dOval;
  const q5 = q3 * q4;
  const q6 = DO * DO;
  const q7 = q5 - q6;
  const q8 = Math.max(q7, 0);
  const sdelO = Math.sqrt(q8);
  const ndyO = dyO * -1;
  const sdyO = ndyO >= 0 ? -1 : 1;
  const q9 = sdyO * dxO;
  const q10 = q9 * sdelO;
  const q11 = DO * dyO;
  const dxF1 = q4 !== 0 ? (q11 + q10) / q4 : 0;
  const q12 = q11 - q10;
  const dxF2 = q4 !== 0 ? q12 / q4 : 0;
  const adyO = Math.abs(dyO);
  const q13 = adyO * sdelO;
  const q14 = DO * dxO * -1;
  const dyF1 = q4 !== 0 ? (q14 + q13) / q4 : 0;
  const q15 = q14 - q13;
  const dyF2 = q4 !== 0 ? q15 / q4 : 0;
  const q16 = x2O - dxF1;
  const q17 = x2O - dxF2;
  const q18 = y2O - dyF1;
  const q19 = y2O - dyF2;
  const q20 = modF(q16, q18, 0);
  const q21 = modF(q17, q19, 0);
  const q22 = q21 - q20;
  const dxF = q22 >= 0 ? dxF1 : dxF2;
  const dyF = q22 >= 0 ? dyF1 : dyF2;
  const sdxF = rO !== 0 ? dxF * rw1 / rO : 0;
  const sdyF = rO !== 0 ? dyF * rh1 / rO : 0;
  const xF = hc + sdxF;
  const yF = vc + sdyF;
  const x1I = rw2 !== 0 ? sx1 * rI / rw2 : 0;
  const y1I = rh2 !== 0 ? sy1 * rI / rh2 : 0;
  const x2I = rw2 !== 0 ? sx2 * rI / rw2 : 0;
  const y2I = rh2 !== 0 ? sy2 * rI / rh2 : 0;
  const dxI = x2I - x1I;
  const dyI = y2I - y1I;
  const dI = modF(dxI, dyI, 0);
  const v1 = x1I * y2I;
  const v2 = x2I * y1I;
  const DI = v1 - v2;
  const v3 = rI * rI;
  const v4 = dI * dI;
  const v5 = v3 * v4;
  const v6 = DI * DI;
  const v7 = v5 - v6;
  const v8 = Math.max(v7, 0);
  const sdelI = Math.sqrt(v8);
  const v9 = sdyO * dxI;
  const v10 = v9 * sdelI;
  const v11 = DI * dyI;
  const dxC1 = v4 !== 0 ? (v11 + v10) / v4 : 0;
  const v12 = v11 - v10;
  const dxC2 = v4 !== 0 ? v12 / v4 : 0;
  const adyI = Math.abs(dyI);
  const v13 = adyI * sdelI;
  const v14 = DI * dxI * -1;
  const dyC1 = v4 !== 0 ? (v14 + v13) / v4 : 0;
  const v15 = v14 - v13;
  const dyC2 = v4 !== 0 ? v15 / v4 : 0;
  const v16 = x1I - dxC1;
  const v17 = x1I - dxC2;
  const v18 = y1I - dyC1;
  const v19 = y1I - dyC2;
  const v20 = modF(v16, v18, 0);
  const v21 = modF(v17, v19, 0);
  const v22 = v21 - v20;
  const dxC = v22 >= 0 ? dxC1 : dxC2;
  const dyC = v22 >= 0 ? dyC1 : dyC2;
  const sdxC = rI !== 0 ? dxC * rw2 / rI : 0;
  const sdyC = rI !== 0 ? dyC * rh2 / rI : 0;
  const xC = hc + sdxC;
  const yC = vc + sdyC;
  const ist0 = at2(sdxC, sdyC);
  const ist1 = ist0 + 216e5;
  const istAng0 = ist0 >= 0 ? ist0 : ist1;
  const isw1 = stAng - istAng0;
  let istAng;
  let iswAng;
  if (isLeft) {
    const iswAng0 = isw1 >= 0 ? isw1 : isw1 + 216e5;
    istAng = istAng0 + iswAng0;
    iswAng = -iswAng0;
  } else {
    istAng = istAng0;
    iswAng = isw1 >= 0 ? isw1 - 216e5 : isw1;
  }
  const p1 = xF - xC;
  const p2 = yF - yC;
  const p3 = modF(p1, p2, 0);
  const p4 = p3 / 2;
  const p5 = p4 - thh;
  const xGp = p5 >= 0 ? xF : xG;
  const yGp = p5 >= 0 ? yF : yG;
  const xBp = p5 >= 0 ? xC : xB;
  const yBp = p5 >= 0 ? yC : yB;
  const en0 = at2(sdxF, sdyF);
  const en1 = en0 + 216e5;
  const en2 = en0 >= 0 ? en0 : en1;
  const sw0 = en2 - stAng;
  let outerArcStAng;
  let outerArcSwAng;
  if (isLeft) {
    const swAngRaw = sw0 >= 0 ? sw0 - 216e5 : sw0;
    outerArcStAng = stAng + swAngRaw;
    outerArcSwAng = -swAngRaw;
  } else {
    const swAng = sw0 >= 0 ? sw0 : sw0 + 216e5;
    outerArcStAng = stAng;
    outerArcSwAng = swAng;
  }
  const outerEndAng = outerArcStAng + outerArcSwAng;
  const wtOE = ooxSin(rw1, outerEndAng);
  const htOE = ooxCos(rh1, outerEndAng);
  const xOE = hc + cat2(rw1, htOE, wtOE);
  const yOE = vc + sat2(rh1, htOE, wtOE);
  const innerEndAng = istAng + iswAng;
  const wtIE = ooxSin(rw2, innerEndAng);
  const htIE = ooxCos(rh2, innerEndAng);
  const xIE = hc + cat2(rw2, htIE, wtIE);
  const yIE = vc + sat2(rh2, htIE, wtIE);
  const outerSweepDeg = Math.abs(outerArcSwAng / 6e4);
  const outerLargeArc = outerSweepDeg > 180 ? 1 : 0;
  const outerSweepFlag = outerArcSwAng > 0 ? 1 : 0;
  const innerSweepDeg = Math.abs(iswAng / 6e4);
  const innerLargeArc = innerSweepDeg > 180 ? 1 : 0;
  const innerSweepFlag = iswAng > 0 ? 1 : 0;
  if (isLeft) {
    const wtD = ooxSin(rw2, stAng);
    const htD = ooxCos(rh2, stAng);
    const xD = hc + cat2(rw2, htD, wtD);
    const yD = vc + sat2(rh2, htD, wtD);
    return [
      `M${xE},${yE}`,
      `L${xD},${yD}`,
      `A${rw2},${rh2} 0 ${innerLargeArc},${innerSweepFlag} ${xIE},${yIE}`,
      `L${xBp},${yBp}`,
      `L${xA},${yA}`,
      `L${xGp},${yGp}`,
      `L${xF},${yF}`,
      `A${rw1},${rh1} 0 ${outerLargeArc},${outerSweepFlag} ${xOE},${yOE}`,
      "Z"
    ].join(" ");
  }
  return [
    `M${xE},${yE}`,
    `A${rw1},${rh1} 0 ${outerLargeArc},${outerSweepFlag} ${xOE},${yOE}`,
    `L${xGp},${yGp}`,
    `L${xA},${yA}`,
    `L${xBp},${yBp}`,
    `L${xC},${yC}`,
    `A${rw2},${rh2} 0 ${innerLargeArc},${innerSweepFlag} ${xIE},${yIE}`,
    "Z"
  ].join(" ");
}
presetShapes.set("circularArrow", (w, h, adjustments) => {
  return buildCircularArrowPath(w, h, adjustments, false, "circularArrow");
});
presetShapes.set("leftCircularArrow", (w, h, adjustments) => {
  return buildCircularArrowPath(w, h, adjustments, false, "leftCircularArrow");
});
presetShapes.set("leftRightCircularArrow", (w, h, _adjustments) => {
  const sx = w / 400;
  const sy = h / 280;
  const p = (x, y) => ({ x: x * sx, y: y * sy });
  const p1 = p(35, 140);
  const p2 = p(19.9536, 89.9471);
  const p3 = p(33.4296, 89.9471);
  const c1 = p(74.6127, 28.1974);
  const c2 = p(182.5744, 0.5489);
  const p4 = p(274.5688, 28.1924);
  const c3 = p(315.4978, 40.4912);
  const c4 = p(348.2481, 62.4743);
  const p5 = p(366.5707, 89.9471);
  const p6 = p(380.0463, 89.9471);
  const p7 = p(365, 140);
  const p8 = p(310.0463, 89.9471);
  const p9 = p(320.9838, 89.9471);
  const c5 = p(274.3848, 50.3095);
  const c6 = p(182.4425, 40.5864);
  const p10 = p(115.6249, 68.2298);
  const c7 = p(101.3589, 74.1319);
  const c8 = p(88.9651, 81.4842);
  const p11 = p(79.0159, 89.947);
  const p12 = p(89.9536, 89.9471);
  return [
    `M${p1.x},${p1.y}`,
    `L${p2.x},${p2.y}`,
    `L${p3.x},${p3.y}`,
    `C${c1.x},${c1.y} ${c2.x},${c2.y} ${p4.x},${p4.y}`,
    `C${c3.x},${c3.y} ${c4.x},${c4.y} ${p5.x},${p5.y}`,
    `L${p6.x},${p6.y}`,
    `L${p7.x},${p7.y}`,
    `L${p8.x},${p8.y}`,
    `L${p9.x},${p9.y}`,
    `C${c5.x},${c5.y} ${c6.x},${c6.y} ${p10.x},${p10.y}`,
    `C${c7.x},${c7.y} ${c8.x},${c8.y} ${p11.x},${p11.y}`,
    `L${p12.x},${p12.y}`,
    "Z"
  ].join(" ");
});
presetShapes.set("quadArrow", (w, h, adjustments) => {
  var _a, _b, _c;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 22500;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 22500;
  const adj3Raw = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 22500;
  const vc = h / 2;
  const hc = w / 2;
  const minWH = Math.min(w, h);
  const a2 = Math.max(0, Math.min(adj2Raw, 5e4));
  const a1 = Math.max(0, Math.min(adj1Raw, 2 * a2));
  const a3 = Math.max(0, Math.min(adj3Raw, (1e5 - 2 * a2) / 2));
  const x1 = minWH * a3 / 1e5;
  const dx2 = minWH * a2 / 1e5;
  const x2 = hc - dx2;
  const x5 = hc + dx2;
  const dx3 = minWH * a1 / 2e5;
  const x3 = hc - dx3;
  const x4 = hc + dx3;
  const x6 = w - x1;
  const y2 = vc - dx2;
  const y5 = vc + dx2;
  const y3 = vc - dx3;
  const y4 = vc + dx3;
  const y6 = h - x1;
  return [
    `M0,${vc}`,
    `L${x1},${y2}`,
    `L${x1},${y3}`,
    `L${x3},${y3}`,
    `L${x3},${x1}`,
    `L${x2},${x1}`,
    `L${hc},0`,
    `L${x5},${x1}`,
    `L${x4},${x1}`,
    `L${x4},${y3}`,
    `L${x6},${y3}`,
    `L${x6},${y2}`,
    `L${w},${vc}`,
    `L${x6},${y5}`,
    `L${x6},${y4}`,
    `L${x4},${y4}`,
    `L${x4},${y6}`,
    `L${x5},${y6}`,
    `L${hc},${h}`,
    `L${x2},${y6}`,
    `L${x3},${y6}`,
    `L${x3},${y4}`,
    `L${x1},${y4}`,
    `L${x1},${y5}`,
    "Z"
  ].join(" ");
});
presetShapes.set("quadArrowCallout", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const ss = Math.min(w, h);
  const hc = w / 2;
  const vc = h / 2;
  const a2 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 18515, 5e4));
  const a1 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 18515, a2 * 2));
  const maxAdj3 = 5e4 - a2;
  const a3 = Math.max(0, Math.min((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18515, maxAdj3));
  const q2 = a3 * 2;
  const a4 = Math.max(a1, Math.min((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : 48123, 1e5 - q2));
  const dx2 = ss * a2 / 1e5;
  const dx3 = ss * a1 / 2e5;
  const ah = ss * a3 / 1e5;
  const dx1 = w * a4 / 2e5;
  const dy1 = h * a4 / 2e5;
  const x8 = w - ah;
  const x2 = hc - dx1;
  const x7 = hc + dx1;
  const x3 = hc - dx2;
  const x6 = hc + dx2;
  const x4 = hc - dx3;
  const x5 = hc + dx3;
  const y8 = h - ah;
  const y2 = vc - dy1;
  const y7 = vc + dy1;
  const y3 = vc - dx2;
  const y6 = vc + dx2;
  const y4 = vc - dx3;
  const y5 = vc + dx3;
  return [
    `M0,${vc}`,
    `L${ah},${y3}`,
    `L${ah},${y4}`,
    `L${x2},${y4}`,
    `L${x2},${y2}`,
    `L${x4},${y2}`,
    `L${x4},${ah}`,
    `L${x3},${ah}`,
    `L${hc},0`,
    `L${x6},${ah}`,
    `L${x5},${ah}`,
    `L${x5},${y2}`,
    `L${x7},${y2}`,
    `L${x7},${y4}`,
    `L${x8},${y4}`,
    `L${x8},${y3}`,
    `L${w},${vc}`,
    `L${x8},${y6}`,
    `L${x8},${y5}`,
    `L${x7},${y5}`,
    `L${x7},${y7}`,
    `L${x5},${y7}`,
    `L${x5},${y8}`,
    `L${x6},${y8}`,
    `L${hc},${h}`,
    `L${x3},${y8}`,
    `L${x4},${y8}`,
    `L${x4},${y7}`,
    `L${x2},${y7}`,
    `L${x2},${y5}`,
    `L${ah},${y5}`,
    `L${ah},${y6}`,
    "Z"
  ].join(" ");
});
presetShapes.set("leftRightUpArrow", (w, h, adjustments) => {
  var _a, _b, _c;
  const rawAdj2 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 25e3, 5e4));
  const maxAdj1 = rawAdj2 * 2;
  const rawAdj1 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 25e3, maxAdj1));
  const q1 = 1e5 - maxAdj1;
  const maxAdj3 = q1 / 2;
  const rawAdj3 = Math.max(0, Math.min((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3, maxAdj3));
  const ss = Math.min(w, h);
  const hc = w / 2;
  const x1 = ss * rawAdj3 / 1e5;
  const dx2 = ss * rawAdj2 / 1e5;
  const x2 = hc - dx2;
  const x5 = hc + dx2;
  const dx3 = ss * rawAdj1 / 2e5;
  const x3 = hc - dx3;
  const x4 = hc + dx3;
  const x6 = w - x1;
  const dy2 = ss * rawAdj2 / 5e4;
  const y2 = h - dy2;
  const y4 = h - dx2;
  const y3 = y4 - dx3;
  const y5 = y4 + dx3;
  return [
    `M0,${y4}`,
    `L${x1},${y2}`,
    `L${x1},${y3}`,
    `L${x3},${y3}`,
    `L${x3},${x1}`,
    `L${x2},${x1}`,
    `L${hc},0`,
    `L${x5},${x1}`,
    `L${x4},${x1}`,
    `L${x4},${y3}`,
    `L${x6},${y3}`,
    `L${x6},${y2}`,
    `L${w},${y4}`,
    `L${x6},${h}`,
    `L${x6},${y5}`,
    `L${x1},${y5}`,
    `L${x1},${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("swooshArrow", (w, h, adjustments) => {
  var _a, _b;
  const ss = Math.min(w, h);
  const raw1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const raw2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 16667;
  const a1 = Math.max(1, Math.min(raw1, 75e3));
  const maxAdj2 = 7e4 * w / ss;
  const a2 = Math.max(0, Math.min(raw2, maxAdj2));
  const ad1 = h * a1 / 1e5;
  const ad2 = ss * a2 / 1e5;
  const ssd8 = ss / 8;
  const hd6 = h / 6;
  const alfa = Math.PI / 2 / 14;
  const tanAlfa = Math.tan(alfa);
  const xB = w - ad2;
  const yB = ssd8;
  const dx0 = ssd8 * tanAlfa;
  const xC = xB - dx0;
  const dx1 = ad1 * tanAlfa;
  const yF = yB + ad1;
  const xF = xB + dx1;
  const xE = xF + dx0;
  const yE = yF + ssd8;
  const dy2 = yE;
  const dy22 = dy2 / 2;
  const dy3 = h / 20;
  const yD = dy22 + dy3;
  const xP1 = w / 6;
  const yP1 = hd6 + hd6;
  const dy5 = hd6 / 2;
  const yP2 = yF + dy5;
  const xP2 = w / 4;
  return [
    `M0,${h}`,
    `Q${xP1},${yP1} ${xB},${yB}`,
    `L${xC},0`,
    `L${w},${yD}`,
    `L${xE},${yE}`,
    `L${xF},${yF}`,
    `Q${xP2},${yP2} 0,${h}`,
    "Z"
  ].join(" ");
});
presetShapes.set("flowChartProcess", (w, h) => `M0,0 L${w},0 L${w},${h} L0,${h} Z`);
presetShapes.set("flowChartDecision", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  return `M${cx},0 L${w},${cy} L${cx},${h} L0,${cy} Z`;
});
presetShapes.set("flowChartTerminator", (w, h) => {
  const x1 = w * 3475 / 21600;
  const x2 = w * 18125 / 21600;
  const wR = x1;
  const hR = h / 2;
  return [
    `M${x1},0`,
    `L${x2},0`,
    `A${wR},${hR} 0 0,1 ${x2},${h}`,
    `L${x1},${h}`,
    `A${wR},${hR} 0 0,1 ${x1},0`,
    "Z"
  ].join(" ");
});
presetShapes.set("flowChartDocument", (w, h) => {
  const y1 = h * 17322 / 21600;
  const cy1 = y1;
  const cy2 = h * 23922 / 21600;
  const y2 = h * 20172 / 21600;
  return ["M0,0", `L${w},0`, `L${w},${y1}`, `C${w / 2},${cy1} ${w / 2},${cy2} 0,${y2}`, "Z"].join(
    " "
  );
});
presetShapes.set("flowChartInputOutput", (w, h) => {
  const offset = w / 5;
  return `M${offset},0 L${w},0 L${w - offset},${h} L0,${h} Z`;
});
presetShapes.set("flowChartPredefinedProcess", (w, h) => {
  const inset = w * 0.1;
  return [
    // Outer rectangle
    `M0,0 L${w},0 L${w},${h} L0,${h} Z`,
    // Left inner line
    `M${inset},0 L${inset},${h}`,
    // Right inner line
    `M${w - inset},0 L${w - inset},${h}`
  ].join(" ");
});
presetShapes.set("flowChartAlternateProcess", (w, h) => {
  const r = Math.min(w, h) / 6;
  return [
    `M${r},0`,
    `L${w - r},0`,
    `A${r},${r} 0 0,1 ${w},${r}`,
    `L${w},${h - r}`,
    `A${r},${r} 0 0,1 ${w - r},${h}`,
    `L${r},${h}`,
    `A${r},${r} 0 0,1 0,${h - r}`,
    `L0,${r}`,
    `A${r},${r} 0 0,1 ${r},0`,
    "Z"
  ].join(" ");
});
presetShapes.set("flowChartManualInput", (w, h) => {
  const topOffset = h * 0.2;
  return `M0,${topOffset} L${w},0 L${w},${h} L0,${h} Z`;
});
presetShapes.set("flowChartManualOperation", (w, h) => {
  return `M0,0 L${w},0 L${w * 4 / 5},${h} L${w / 5},${h} Z`;
});
presetShapes.set("flowChartPreparation", (w, h) => {
  const inset = w * 0.2;
  const cy = h / 2;
  return `M${inset},0 L${w - inset},0 L${w},${cy} L${w - inset},${h} L${inset},${h} L0,${cy} Z`;
});
presetShapes.set("flowChartData", (w, h) => {
  const offset = w * 0.15;
  return `M${offset},0 L${w},0 L${w - offset},${h} L0,${h} Z`;
});
presetShapes.set("flowChartInternalStorage", (w, h) => {
  const inset = Math.min(w, h) * 0.12;
  return [
    `M0,0 L${w},0 L${w},${h} L0,${h} Z`,
    `M${inset},0 L${inset},${h}`,
    `M0,${inset} L${w},${inset}`
  ].join(" ");
});
presetShapes.set("flowChartMagneticDisk", (w, h) => {
  const ry = h / 6;
  const bodyTop = ry;
  const bodyBottom = h - ry;
  return [
    // Top ellipse
    `M0,${bodyTop}`,
    `A${w / 2},${ry} 0 1,1 ${w},${bodyTop}`,
    // Right side down
    `L${w},${bodyBottom}`,
    // Bottom ellipse
    `A${w / 2},${ry} 0 1,1 0,${bodyBottom}`,
    // Left side up
    `L0,${bodyTop}`,
    "Z",
    // Top ellipse visible arc (back half)
    `M${w},${bodyTop}`,
    `A${w / 2},${ry} 0 1,1 0,${bodyTop}`
  ].join(" ");
});
presetShapes.set("flowChartDelay", (w, h) => {
  const hc = w / 2;
  const a = ooArcTo(hc, 0, hc, h / 2, 270, 180);
  return ["M0,0", `L${hc},0`, a.svg, `L0,${h}`, "Z"].join(" ");
});
presetShapes.set("flowChartDisplay", (w, h) => {
  const sx = w / 6;
  const sy = h / 6;
  const arcWR = sx;
  const arcHR = sy * 3;
  const a = ooArcTo(5 * sx, 0, arcWR, arcHR, 270, 180);
  return [`M0,${3 * sy}`, `L${sx},0`, `L${5 * sx},0`, a.svg, `L${sx},${h}`, "Z"].join(" ");
});
presetShapes.set("flowChartExtract", (w, h) => `M${w / 2},0 L${w},${h} L0,${h} Z`);
presetShapes.set("flowChartMerge", (w, h) => `M0,0 L${w},0 L${w / 2},${h} Z`);
presetShapes.set("flowChartOffpageConnector", (w, h) => {
  const arrowH = h * 0.2;
  return ["M0,0", `L${w},0`, `L${w},${h - arrowH}`, `L${w / 2},${h}`, `L0,${h - arrowH}`, "Z"].join(
    " "
  );
});
presetShapes.set("flowChartConnector", (w, h) => {
  const rx = w / 2;
  const ry = h / 2;
  return [`M${w},${ry}`, `A${rx},${ry} 0 1,1 0,${ry}`, `A${rx},${ry} 0 1,1 ${w},${ry}`, "Z"].join(
    " "
  );
});
presetShapes.set("flowChartSort", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  return [`M${cx},0 L${w},${cy} L${cx},${h} L0,${cy} Z`, `M0,${cy} L${w},${cy}`].join(" ");
});
presetShapes.set("flowChartCollate", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  return [
    // top inverted triangle
    `M0,0 L${w},0 L${cx},${cy} Z`,
    // bottom upright triangle
    `M0,${h} L${w},${h} L${cx},${cy} Z`
  ].join(" ");
});
presetShapes.set("flowChartPunchedTape", (w, h) => {
  const sx = w / 20;
  const sy = h / 20;
  const arcTo = (curX, curY, wR2, hR2, stAng60k, swAng60k) => {
    const stDeg = stAng60k / 6e4;
    const swDeg = swAng60k / 6e4;
    const stRad = stDeg * Math.PI / 180;
    const endRad = (stDeg + swDeg) * Math.PI / 180;
    const cx = curX - wR2 * Math.cos(stRad);
    const cy = curY - hR2 * Math.sin(stRad);
    const endX = cx + wR2 * Math.cos(endRad);
    const endY = cy + hR2 * Math.sin(endRad);
    const largeArc = Math.abs(swDeg) > 180 ? 1 : 0;
    const sweep = swDeg > 0 ? 1 : 0;
    return { endX, endY, svg: `A${wR2},${hR2} 0 ${largeArc},${sweep} ${endX},${endY}` };
  };
  const wR = 5 * sx;
  const hR = 2 * sy;
  let x = 0;
  let y = 2 * sy;
  const parts = [`M${x},${y}`];
  let a = arcTo(x, y, wR, hR, 108e5, -108e5);
  parts.push(a.svg);
  x = a.endX;
  y = a.endY;
  a = arcTo(x, y, wR, hR, 108e5, 108e5);
  parts.push(a.svg);
  x = a.endX;
  y = a.endY;
  const bx = 20 * sx;
  const by = 18 * sy;
  parts.push(`L${bx},${by}`);
  x = bx;
  y = by;
  a = arcTo(x, y, wR, hR, 0, -108e5);
  parts.push(a.svg);
  x = a.endX;
  y = a.endY;
  a = arcTo(x, y, wR, hR, 0, 108e5);
  parts.push(a.svg);
  parts.push("Z");
  return parts.join(" ");
});
presetShapes.set("flowChartPunchedCard", (w, h) => {
  const sx = w / 5;
  const sy = h / 5;
  return `M0,${sy} L${sx},0 L${w},0 L${w},${h} L0,${h} Z`;
});
presetShapes.set("flowChartSummingJunction", (w, h) => {
  const wd2 = w / 2;
  const hd2 = h / 2;
  const idx = wd2 * Math.cos(Math.PI / 4);
  const idy = hd2 * Math.sin(Math.PI / 4);
  const il = wd2 - idx;
  const ir = wd2 + idx;
  const it = hd2 - idy;
  const ib = hd2 + idy;
  return [
    // Circle
    `M0,${hd2}`,
    `A${wd2},${hd2} 0 1,1 ${w},${hd2}`,
    `A${wd2},${hd2} 0 1,1 0,${hd2}`,
    "Z",
    // X cross
    `M${il},${it} L${ir},${ib}`,
    `M${ir},${it} L${il},${ib}`
  ].join(" ");
});
presetShapes.set("flowChartOr", (w, h) => {
  const wd2 = w / 2;
  const hd2 = h / 2;
  return [
    // Circle
    `M0,${hd2}`,
    `A${wd2},${hd2} 0 1,1 ${w},${hd2}`,
    `A${wd2},${hd2} 0 1,1 0,${hd2}`,
    "Z",
    // + cross
    `M${wd2},0 L${wd2},${h}`,
    `M0,${hd2} L${w},${hd2}`
  ].join(" ");
});
presetShapes.set("flowChartOnlineStorage", (w, h) => {
  const x1 = w / 6;
  return [
    `M${x1},0`,
    `L${w},0`,
    `A${x1},${h / 2} 0 0,0 ${w},${h}`,
    `L${x1},${h}`,
    `A${x1},${h / 2} 0 0,1 ${x1},0`,
    "Z"
  ].join(" ");
});
presetShapes.set("flowChartMagneticDrum", (w, h) => {
  const x1 = w / 6;
  const x2 = w * 5 / 6;
  const ry = h / 2;
  return [
    // Body
    `M${x1},0`,
    `L${x2},0`,
    `A${x1},${ry} 0 0,1 ${x2},${h}`,
    `L${x1},${h}`,
    `A${x1},${ry} 0 0,1 ${x1},0`,
    "Z",
    // Right ellipse back-face (visible part)
    `M${x2},${h}`,
    `A${x1},${ry} 0 0,1 ${x2},0`
  ].join(" ");
});
presetShapes.set("flowChartMagneticTape", (w, h) => {
  const wd2 = w / 2;
  const hd2 = h / 2;
  const hc = wd2;
  const vc = hd2;
  const ang1 = Math.atan2(h, w);
  const ib = vc + hd2 * Math.sin(Math.PI / 4);
  const arcTo = (curX2, curY2, wR, hR, stDeg, swDeg) => {
    const stRad = stDeg * Math.PI / 180;
    const endRad = (stDeg + swDeg) * Math.PI / 180;
    const cx = curX2 - wR * Math.cos(stRad);
    const cy = curY2 - hR * Math.sin(stRad);
    const endX = cx + wR * Math.cos(endRad);
    const endY = cy + hR * Math.sin(endRad);
    const largeArc = Math.abs(swDeg) > 180 ? 1 : 0;
    const sweep = swDeg > 0 ? 1 : 0;
    return { endX, endY, svg: `A${wR},${hR} 0 ${largeArc},${sweep} ${endX},${endY}` };
  };
  let curX = hc;
  let curY = h;
  const a1 = arcTo(curX, curY, wd2, hd2, 90, 90);
  curX = a1.endX;
  curY = a1.endY;
  const a2 = arcTo(curX, curY, wd2, hd2, 180, 90);
  curX = a2.endX;
  curY = a2.endY;
  const a3 = arcTo(curX, curY, wd2, hd2, 270, 90);
  curX = a3.endX;
  curY = a3.endY;
  const ang1Deg = ang1 * 180 / Math.PI;
  const a4 = arcTo(curX, curY, wd2, hd2, 0, ang1Deg);
  return [`M${hc},${h}`, a1.svg, a2.svg, a3.svg, a4.svg, `L${w},${ib}`, `L${w},${h}`, "Z"].join(
    " "
  );
});
presetShapes.set("flowChartMultidocument", (w, h) => {
  const s = (x) => w * x / 21600;
  const t = (y) => h * y / 21600;
  return [
    // Front doc (bottom layer, with wave)
    `M0,${t(20782)}`,
    `C${s(9298)},${t(23542)} ${s(9298)},${t(18022)} ${s(18595)},${t(18022)}`,
    `L${s(18595)},${t(3675)} L0,${t(3675)} Z`,
    // Middle doc
    `M${s(1532)},${t(3675)} L${s(1532)},${t(1815)} L${s(2e4)},${t(1815)}`,
    `L${s(2e4)},${t(16252)}`,
    `C${s(19298)},${t(16252)} ${s(18595)},${t(16352)} ${s(18595)},${t(16352)}`,
    `L${s(18595)},${t(3675)} Z`,
    // Back doc (top layer)
    `M${s(2972)},${t(1815)} L${s(2972)},0 L${w},0`,
    `L${w},${t(14392)}`,
    `C${s(20800)},${t(14392)} ${s(2e4)},${t(14467)} ${s(2e4)},${t(14467)}`,
    `L${s(2e4)},${t(1815)} Z`
  ].join(" ");
});
presetShapes.set("wedgeRectCallout", (w, h, adjustments) => {
  var _a, _b;
  const hc = w / 2;
  const vc = h / 2;
  const dxPos = w * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : -20833) / 1e5;
  const dyPos = h * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 62500) / 1e5;
  const xPos = hc + dxPos;
  const yPos = vc + dyPos;
  const dq = dxPos * h / w;
  const ady = Math.abs(dyPos);
  const adq = Math.abs(dq);
  const dz = ady - adq;
  const x1 = w * (dxPos >= 0 ? 7 : 2) / 12;
  const x2 = w * (dxPos >= 0 ? 10 : 5) / 12;
  const y1 = h * (dyPos >= 0 ? 7 : 2) / 12;
  const y2 = h * (dyPos >= 0 ? 10 : 5) / 12;
  const xl = dz > 0 ? 0 : dxPos >= 0 ? 0 : xPos;
  const xt = dz > 0 ? dyPos >= 0 ? x1 : xPos : x1;
  const xr = dz > 0 ? w : dxPos >= 0 ? xPos : w;
  const xb = dz > 0 ? dyPos >= 0 ? xPos : x1 : x1;
  const yl = dz > 0 ? y1 : dxPos >= 0 ? y1 : yPos;
  const yt = dz > 0 ? dyPos >= 0 ? 0 : yPos : 0;
  const yr = dz > 0 ? y1 : dxPos >= 0 ? yPos : y1;
  const yb = dz > 0 ? dyPos >= 0 ? yPos : h : h;
  return [
    "M0,0",
    `L${x1},0`,
    `L${xt},${yt}`,
    `L${x2},0`,
    `L${w},0`,
    `L${w},${y1}`,
    `L${xr},${yr}`,
    `L${w},${y2}`,
    `L${w},${h}`,
    `L${x2},${h}`,
    `L${xb},${yb}`,
    `L${x1},${h}`,
    `L0,${h}`,
    `L0,${y2}`,
    `L${xl},${yl}`,
    `L0,${y1}`,
    "Z"
  ].join(" ");
});
presetShapes.set("wedgeRoundRectCallout", (w, h, adjustments) => {
  var _a, _b, _c;
  const hc = w / 2;
  const vc = h / 2;
  const ss = Math.min(w, h);
  const dxPos = w * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : -20833) / 1e5;
  const dyPos = h * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 62500) / 1e5;
  const u1 = ss * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 16667) / 1e5;
  const xPos = hc + dxPos;
  const yPos = vc + dyPos;
  const dq = dxPos * h / w;
  const ady = Math.abs(dyPos);
  const adq = Math.abs(dq);
  const dz = ady - adq;
  const u2 = w - u1;
  const v2 = h - u1;
  const x1 = w * (dxPos >= 0 ? 7 : 2) / 12;
  const x2 = w * (dxPos >= 0 ? 10 : 5) / 12;
  const y1 = h * (dyPos >= 0 ? 7 : 2) / 12;
  const y2 = h * (dyPos >= 0 ? 10 : 5) / 12;
  const xl = dz > 0 ? 0 : dxPos >= 0 ? 0 : xPos;
  const xt = dz > 0 ? dyPos >= 0 ? x1 : xPos : x1;
  const xr = dz > 0 ? w : dxPos >= 0 ? xPos : w;
  const xb = dz > 0 ? dyPos >= 0 ? xPos : x1 : x1;
  const yl = dz > 0 ? y1 : dxPos >= 0 ? y1 : yPos;
  const yt = dz > 0 ? dyPos >= 0 ? 0 : yPos : 0;
  const yr = dz > 0 ? y1 : dxPos >= 0 ? yPos : y1;
  const yb = dz > 0 ? dyPos >= 0 ? yPos : h : h;
  return [
    `M0,${u1}`,
    `A${u1},${u1} 0 0,1 ${u1},0`,
    `L${x1},0`,
    `L${xt},${yt}`,
    `L${x2},0`,
    `L${u2},0`,
    `A${u1},${u1} 0 0,1 ${w},${u1}`,
    `L${w},${y1}`,
    `L${xr},${yr}`,
    `L${w},${y2}`,
    `L${w},${v2}`,
    `A${u1},${u1} 0 0,1 ${u2},${h}`,
    `L${x2},${h}`,
    `L${xb},${yb}`,
    `L${x1},${h}`,
    `L${u1},${h}`,
    `A${u1},${u1} 0 0,1 0,${v2}`,
    `L0,${y2}`,
    `L${xl},${yl}`,
    `L0,${y1}`,
    "Z"
  ].join(" ");
});
presetShapes.set("wedgeEllipseCallout", (w, h, adjustments) => {
  const ax = adj(adjustments, "adj1", -20833);
  const ay = adj(adjustments, "adj2", 62500);
  const rx = w / 2;
  const ry = h / 2;
  const tipX = rx + w * ax;
  const tipY = ry + h * ay;
  const angle = Math.atan2(tipY - ry, tipX - rx);
  const gapAngle = 0.15;
  const _x1 = rx + rx * Math.cos(angle - gapAngle);
  const _y1 = ry + ry * Math.sin(angle - gapAngle);
  const _x2 = rx + rx * Math.cos(angle + gapAngle);
  const _y2 = ry + ry * Math.sin(angle + gapAngle);
  return [
    shapeArc(
      rx,
      ry,
      rx,
      ry,
      (angle + gapAngle) * 180 / Math.PI,
      (angle - gapAngle + 2 * Math.PI) * 180 / Math.PI,
      false
    ),
    `L${tipX},${tipY}`,
    "Z"
  ].join(" ");
});
presetShapes.set("cloudCallout", (w, h, adjustments) => {
  const ax = adj(adjustments, "adj1", -20833);
  const ay = adj(adjustments, "adj2", 62500);
  const tipX = w / 2 + w * ax;
  const tipY = h / 2 + h * ay;
  const cloud = presetShapes.get("cloud")(w, h);
  const cx = w / 2;
  const cy = h / 2;
  const dx = tipX - cx;
  const dy = tipY - cy;
  const r1 = Math.min(w, h) * 0.04;
  const r2 = Math.min(w, h) * 0.025;
  const c1x = cx + dx * 0.5;
  const c1y = cy + dy * 0.5;
  const c2x = cx + dx * 0.75;
  const c2y = cy + dy * 0.75;
  return [
    cloud,
    // Connector circles (approximated as small ellipses)
    `M${c1x + r1},${c1y} A${r1},${r1} 0 1,1 ${c1x - r1},${c1y} A${r1},${r1} 0 1,1 ${c1x + r1},${c1y} Z`,
    `M${c2x + r2},${c2y} A${r2},${r2} 0 1,1 ${c2x - r2},${c2y} A${r2},${r2} 0 1,1 ${c2x + r2},${c2y} Z`
  ].join(" ");
});
presetShapes.set("borderCallout1", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 112500) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -38333) / 1e5;
  return `M0,0 L${w},0 L${w},${h} L0,${h} Z M${x1},${y1} L${x2},${y2}`;
});
presetShapes.set("cube", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 25e3);
  const depth = Math.min(w, h) * a;
  return [
    // Front face
    `M0,${depth} L${w - depth},${depth} L${w - depth},${h} L0,${h} Z`,
    // Top face
    `M0,${depth} L${depth},0 L${w},0 L${w - depth},${depth} Z`,
    // Right face
    `M${w - depth},${depth} L${w},0 L${w},${h - depth} L${w - depth},${h} Z`
  ].join(" ");
});
presetShapes.set("plus", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const a = Math.min(Math.max(adjRaw(adjustments, "adj", 25e3), 0), 5e4);
  const x1 = ss * a / 1e5;
  const x2 = w - x1;
  const y2 = h - x1;
  return [
    `M0,${x1}`,
    `L${x1},${x1}`,
    `L${x1},0`,
    `L${x2},0`,
    `L${x2},${x1}`,
    `L${w},${x1}`,
    `L${w},${y2}`,
    `L${x2},${y2}`,
    `L${x2},${h}`,
    `L${x1},${h}`,
    `L${x1},${y2}`,
    `L0,${y2}`,
    "Z"
  ].join(" ");
});
presetShapes.set("heart", (w, h) => {
  const hc = w / 2;
  const hd4 = h / 4;
  const hd3 = h / 3;
  const dx1 = w * 49 / 48;
  const dx2 = w * 10 / 48;
  const x1 = hc - dx1;
  const x2 = hc - dx2;
  const x3 = hc + dx2;
  const x4 = hc + dx1;
  const y1 = -hd3;
  return [
    `M${hc},${hd4}`,
    `C${x3},${y1} ${x4},${hd4} ${hc},${h}`,
    `C${x1},${hd4} ${x2},${y1} ${hc},${hd4}`,
    "Z"
  ].join(" ");
});
presetShapes.set("cloud", (w, h) => {
  const sx = w / 43200;
  const sy = h / 43200;
  const arcs = [
    [6753, 9190, -11429249, 7426832],
    [5333, 7267, -8646143, 5396714],
    [4365, 5945, -8748475, 5983381],
    [4857, 6595, -7859164, 7034504],
    [5333, 7273, -4722533, 6541615],
    [6775, 9220, -2776035, 7816140],
    [5785, 7867, 37501, 6842e3],
    [6752, 9215, 1347096, 6910353],
    [7720, 10543, 3974558, 4542661],
    [4360, 5918, -16496525, 8804134],
    [4345, 5945, -14809710, 9151131]
  ];
  let curX = 3900 * sx;
  let curY = 14370 * sy;
  const parts = [`M${curX},${curY}`];
  let ux = 3900;
  let uy = 14370;
  for (const [wR, hR, stAng60k, swAng60k] of arcs) {
    const stDeg = stAng60k / 6e4;
    const swDeg = swAng60k / 6e4;
    const stVisRad = stDeg * Math.PI / 180;
    const stRad = Math.atan2(wR * Math.sin(stVisRad), hR * Math.cos(stVisRad));
    const endVisRad = (stDeg + swDeg) * Math.PI / 180;
    const endRad = Math.atan2(wR * Math.sin(endVisRad), hR * Math.cos(endVisRad));
    const acx = ux - wR * Math.cos(stRad);
    const acy = uy - hR * Math.sin(stRad);
    const endUX = acx + wR * Math.cos(endRad);
    const endUY = acy + hR * Math.sin(endRad);
    const endX = endUX * sx;
    const endY = endUY * sy;
    const rwS = wR * sx;
    const rhS = hR * sy;
    const largeArc = Math.abs(swDeg) > 180 ? 1 : 0;
    const sweep = swDeg > 0 ? 1 : 0;
    parts.push(`A${rwS},${rhS} 0 ${largeArc},${sweep} ${endX},${endY}`);
    ux = endUX;
    uy = endUY;
    curX = endX;
    curY = endY;
  }
  parts.push("Z");
  return parts.join(" ");
});
presetShapes.set("frame", (w, h, adjustments) => {
  const a = adj(adjustments, "adj1", 12500);
  const t = Math.min(w, h) * a;
  return [
    // Outer rectangle
    `M0,0 L${w},0 L${w},${h} L0,${h} Z`,
    // Inner rectangle (counter-clockwise for hole)
    `M${t},${t} L${t},${h - t} L${w - t},${h - t} L${w - t},${t} Z`
  ].join(" ");
});
presetShapes.set("halfFrame", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 33333;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 33333;
  const minWH = Math.min(w, h);
  const a2 = Math.max(0, Math.min(adj2Raw, 1e5 * w / Math.max(minWH, 1)));
  const x1 = minWH * a2 / 1e5;
  const g1 = h * x1 / Math.max(w, 1);
  const g2 = h - g1;
  const a1 = Math.max(0, Math.min(adj1Raw, 1e5 * g2 / Math.max(minWH, 1)));
  const y1 = minWH * a1 / 1e5;
  const x2 = w - y1 * w / Math.max(h, 1);
  const y2 = h - x1 * h / Math.max(w, 1);
  return ["M0,0", `L${w},0`, `L${x2},${y1}`, `L${x1},${y1}`, `L${x1},${y2}`, `L0,${h}`, "Z"].join(
    " "
  );
});
presetShapes.set("donut", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const a = Math.min(Math.max(adjRaw(adjustments, "adj", 25e3), 0), 5e4);
  const dr = ss * a / 1e5;
  const rx = w / 2;
  const ry = h / 2;
  const iwd2 = Math.max(0, rx - dr);
  const ihd2 = Math.max(0, ry - dr);
  return [
    // Outer circle (CW)
    `M0,${ry}`,
    `A${rx},${ry} 0 1,1 ${w},${ry}`,
    `A${rx},${ry} 0 1,1 0,${ry}`,
    "Z",
    // Inner circle (CCW for evenodd hole)
    `M${dr},${ry}`,
    `A${iwd2},${ihd2} 0 1,0 ${w - dr},${ry}`,
    `A${iwd2},${ihd2} 0 1,0 ${dr},${ry}`,
    "Z"
  ].join(" ");
});
presetShapes.set("noSmoking", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const a = Math.min(Math.max(adjRaw(adjustments, "adj", 18750), 0), 5e4);
  const dr = ss * a / 1e5;
  const rx = w / 2;
  const ry = h / 2;
  const hc = w / 2;
  const vc = h / 2;
  const iwd2 = rx - dr;
  const ihd2 = ry - dr;
  const ang = Math.atan2(h, w);
  const ct = ihd2 * Math.cos(ang);
  const st = iwd2 * Math.sin(ang);
  const m = Math.sqrt(ct * ct + st * st) || 1;
  const n = iwd2 * ihd2 / m;
  const drd2 = dr / 2;
  const dang = Math.atan2(drd2, n);
  const dang2 = dang * 2;
  const swAngRad = -(Math.PI - dang2);
  const stAng1 = ang - dang;
  const stAng2 = stAng1 - Math.PI;
  const innerPt = (angle) => {
    const ct2 = ihd2 * Math.cos(angle);
    const st2 = iwd2 * Math.sin(angle);
    const m2 = Math.sqrt(ct2 * ct2 + st2 * st2) || 1;
    const n2 = iwd2 * ihd2 / m2;
    return { x: hc + n2 * Math.cos(angle), y: vc + n2 * Math.sin(angle) };
  };
  const p1 = innerPt(stAng1);
  const p2 = innerPt(stAng2);
  const endAng1 = stAng1 + swAngRad;
  const endAng2 = stAng2 + swAngRad;
  const e1 = innerPt(endAng1);
  const e2 = innerPt(endAng2);
  const largeArc = Math.abs(swAngRad) > Math.PI ? 1 : 0;
  const sweep = swAngRad > 0 ? 1 : 0;
  return [
    // Outer circle (CW)
    `M0,${vc}`,
    `A${rx},${ry} 0 1,1 ${w},${vc}`,
    `A${rx},${ry} 0 1,1 0,${vc}`,
    "Z",
    // First diagonal band arc (inner ellipse)
    `M${p1.x},${p1.y}`,
    `A${iwd2},${ihd2} 0 ${largeArc},${sweep} ${e1.x},${e1.y}`,
    "Z",
    // Second diagonal band arc (opposite quadrant)
    `M${p2.x},${p2.y}`,
    `A${iwd2},${ihd2} 0 ${largeArc},${sweep} ${e2.x},${e2.y}`,
    "Z"
  ].join(" ");
});
presetShapes.set("blockArc", (w, h, adjustments) => {
  var _a, _b, _c;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 108e5;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 0;
  const adj3Raw = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 25e3;
  const startDeg = Math.min(Math.max(adj1Raw / 6e4, 0), 360);
  const innerStartDeg = Math.min(Math.max(adj2Raw / 6e4, 0), 360);
  const sweepDeg = (innerStartDeg - startDeg + 360) % 360 || 360;
  const endDeg = startDeg + sweepDeg;
  const innerEndDeg = innerStartDeg - sweepDeg;
  const wd2 = w / 2;
  const hd2 = h / 2;
  const dr = Math.min(w, h) * Math.max(0, Math.min(adj3Raw, 5e4)) / 1e5;
  const iwd2 = Math.max(1, wd2 - dr);
  const ihd2 = Math.max(1, hd2 - dr);
  const p = (cx, cy, rx, ry, deg) => {
    const r = deg * Math.PI / 180;
    return { x: cx + rx * Math.cos(r), y: cy + ry * Math.sin(r) };
  };
  const oStart = p(wd2, hd2, wd2, hd2, startDeg);
  const oEnd = p(wd2, hd2, wd2, hd2, endDeg);
  const iStart = p(wd2, hd2, iwd2, ihd2, innerStartDeg);
  const iEnd = p(wd2, hd2, iwd2, ihd2, innerEndDeg);
  const largeArc = sweepDeg > 180 ? 1 : 0;
  return [
    `M${oStart.x},${oStart.y}`,
    `A${wd2},${hd2} 0 ${largeArc},1 ${oEnd.x},${oEnd.y}`,
    `L${iStart.x},${iStart.y}`,
    `A${iwd2},${ihd2} 0 ${largeArc},0 ${iEnd.x},${iEnd.y}`,
    "Z"
  ].join(" ");
});
presetShapes.set("gear6", (w, h, adjustments) => {
  var _a, _b;
  const a1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 15e3;
  const a2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 3526;
  return gearShape(w, h, 6, a1, a2);
});
presetShapes.set("gear9", (w, h, adjustments) => {
  var _a, _b;
  const a1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 1e4;
  const a2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 1763;
  return gearShape(w, h, 9, a1, a2);
});
function gearShape(w, h, teeth, adj1Raw, adj2Raw) {
  const cx = w / 2;
  const cy = h / 2;
  const ss = Math.min(w, h);
  const maxAdj2 = teeth === 6 ? 5358 : 2679;
  const a1v = Math.min(Math.max(adj1Raw, 0), 2e4);
  const a2v = Math.min(Math.max(adj2Raw, 0), maxAdj2);
  const th = ss * a1v / 1e5;
  const lFD = ss * a2v / 1e5;
  const rw = w / 2 - th;
  const rh = h / 2 - th;
  if (rw <= 0 || rh <= 0) return `M0,0 L${w},0 L${w},${h} L0,${h} Z`;
  const l3 = th / 2 + lFD / 2;
  const maxr = Math.min(rw, rh);
  const ha = Math.atan2(l3, maxr);
  const centerDegs = teeth === 6 ? [330, 30, 90, 150, 210, 270] : [310, 350, 30, 70, 110, 150, 190, 230, 270];
  const parts = [];
  for (let i = 0; i < centerDegs.length; i++) {
    const baseAngle = centerDegs[i] * Math.PI / 180;
    const aStart = baseAngle - ha;
    const aEnd = baseAngle + ha;
    const ax = cx + rw * Math.cos(aStart);
    const ay = cy + rh * Math.sin(aStart);
    const dx = cx + rw * Math.cos(aEnd);
    const dy = cy + rh * Math.sin(aEnd);
    const edgeX = dx - ax;
    const edgeY = dy - ay;
    const edgeLen = Math.sqrt(edgeX * edgeX + edgeY * edgeY);
    let nx = -edgeY / edgeLen;
    let ny = edgeX / edgeLen;
    const radX = Math.cos(baseAngle);
    const radY = Math.sin(baseAngle);
    if (nx * radX + ny * radY < 0) {
      nx = -nx;
      ny = -ny;
    }
    const ex = edgeLen > 0 ? edgeX / edgeLen : 0;
    const ey = edgeLen > 0 ? edgeY / edgeLen : 0;
    const axN = ax + ex * lFD;
    const ayN = ay + ey * lFD;
    const dxN = dx - ex * lFD;
    const dyN = dy - ey * lFD;
    const bx = axN + nx * th;
    const by = ayN + ny * th;
    const _cx = dxN + nx * th;
    const _cy = dyN + ny * th;
    if (i === 0) {
      const prevEnd = centerDegs[centerDegs.length - 1] * Math.PI / 180 + ha;
      const prevIx = cx + rw * Math.cos(prevEnd);
      const prevIy = cy + rh * Math.sin(prevEnd);
      parts.push(`M${prevIx},${prevIy}`);
      parts.push(`A${rw},${rh} 0 0,1 ${ax},${ay}`);
    }
    parts.push(`L${bx},${by}`);
    parts.push(`L${_cx},${_cy}`);
    parts.push(`L${dx},${dy}`);
    if (i < centerDegs.length - 1) {
      const nextStart = centerDegs[i + 1] * Math.PI / 180 - ha;
      const nx2 = cx + rw * Math.cos(nextStart);
      const ny2 = cy + rh * Math.sin(nextStart);
      parts.push(`A${rw},${rh} 0 0,1 ${nx2},${ny2}`);
    }
  }
  parts.push("Z");
  return parts.join(" ");
}
presetShapes.set("mathPlus", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const a1 = Math.min(Math.max(adjRaw(adjustments, "adj", 23520), 0), 73490);
  const dx1 = w * 73490 / 2e5;
  const dy1 = h * 73490 / 2e5;
  const dx2 = ss * a1 / 2e5;
  const hc = w / 2;
  const vc = h / 2;
  const x1 = hc - dx1;
  const x2 = hc - dx2;
  const x3 = hc + dx2;
  const x4 = hc + dx1;
  const y1 = vc - dy1;
  const y2 = vc - dx2;
  const y3 = vc + dx2;
  const y4 = vc + dy1;
  return [
    `M${x1},${y2}`,
    `L${x2},${y2}`,
    `L${x2},${y1}`,
    `L${x3},${y1}`,
    `L${x3},${y2}`,
    `L${x4},${y2}`,
    `L${x4},${y3}`,
    `L${x3},${y3}`,
    `L${x3},${y4}`,
    `L${x2},${y4}`,
    `L${x2},${y3}`,
    `L${x1},${y3}`,
    "Z"
  ].join(" ");
});
presetShapes.set("mathMinus", (w, h, adjustments) => {
  const a1 = Math.min(Math.max(adjRaw(adjustments, "adj1", 23520), 0), 1e5);
  const dy1 = h * a1 / 2e5;
  const dx1 = w * 73490 / 2e5;
  const hc = w / 2;
  const vc = h / 2;
  const x1 = hc - dx1;
  const x2 = hc + dx1;
  const y1 = vc - dy1;
  const y2 = vc + dy1;
  return `M${x1},${y1} L${x2},${y1} L${x2},${y2} L${x1},${y2} Z`;
});
presetShapes.set("mathMultiply", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const hc = w / 2;
  const vc = h / 2;
  const a1 = Math.min(Math.max(adjRaw(adjustments, "adj1", 23520), 0), 51965);
  const th = ss * a1 / 1e5;
  const a = Math.atan2(h, w);
  const sa = Math.sin(a);
  const ca = Math.cos(a);
  const ta = sa / ca;
  const dl = Math.sqrt(w * w + h * h);
  const rw = dl * 51965 / 1e5;
  const lM = dl - rw;
  const xM = ca * lM / 2;
  const yM = sa * lM / 2;
  const dxAM = sa * th / 2;
  const dyAM = ca * th / 2;
  const xA = xM - dxAM;
  const yA = yM + dyAM;
  const xB = xM + dxAM;
  const yB = yM - dyAM;
  const xBC = hc - xB;
  const yBC = xBC * ta;
  const yC = yBC + yB;
  const xD = w - xB;
  const xE = w - xA;
  const yFE = vc - yA;
  const xFE = yFE / ta;
  const xF = xE - xFE;
  const xL = xA + xFE;
  const yG = h - yA;
  const yH = h - yB;
  const yI = h - yC;
  return [
    `M${xA},${yA}`,
    `L${xB},${yB}`,
    `L${hc},${yC}`,
    `L${xD},${yB}`,
    `L${xE},${yA}`,
    `L${xF},${vc}`,
    `L${xE},${yG}`,
    `L${xD},${yH}`,
    `L${hc},${yI}`,
    `L${xB},${yH}`,
    `L${xA},${yG}`,
    `L${xL},${vc}`,
    "Z"
  ].join(" ");
});
presetShapes.set("mathDivide", (w, h, adjustments) => {
  var _a, _b, _c;
  const adj1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 23520;
  const adj2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5880;
  const adj3 = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 11760;
  const a1 = Math.min(Math.max(adj1, 1e3), 36745);
  const maxAdj3 = Math.min((73490 - a1) / 4, 36745 * w / Math.max(h, 1));
  const a3 = Math.min(Math.max(adj3, 1e3), maxAdj3);
  const maxAdj2 = 73490 - 4 * a3 - a1;
  const a2 = Math.min(Math.max(adj2, 0), maxAdj2);
  const hc = w / 2;
  const vc = h / 2;
  const dy1 = h * a1 / 2e5;
  const yg = h * a2 / 1e5;
  const rad = h * a3 / 1e5;
  const dx1 = w * 73490 / 2e5;
  const y3 = vc - dy1;
  const y4 = vc + dy1;
  const y2 = y3 - (yg + rad);
  const y1 = y2 - rad;
  const y5 = h - y1;
  const x1 = hc - dx1;
  const x3 = hc + dx1;
  return [
    // Top dot
    `M${hc + rad},${y1 + rad} A${rad},${rad} 0 1,1 ${hc - rad},${y1 + rad} A${rad},${rad} 0 1,1 ${hc + rad},${y1 + rad} Z`,
    // Bottom dot
    `M${hc + rad},${y5 - rad} A${rad},${rad} 0 1,1 ${hc - rad},${y5 - rad} A${rad},${rad} 0 1,1 ${hc + rad},${y5 - rad} Z`,
    // Bar
    `M${x1},${y3} L${x3},${y3} L${x3},${y4} L${x1},${y4} Z`
  ].join(" ");
});
presetShapes.set("mathEqual", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 23520;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 11760;
  const a1 = Math.min(Math.max(adj1Raw, 0), 36745);
  const mAdj2 = 1e5 - a1 * 2;
  const a2 = Math.min(Math.max(adj2Raw, 0), Math.max(mAdj2, 0));
  const dy1 = h * a1 / 1e5;
  const dy2 = h * a2 / 2e5;
  const dx1 = w * 73490 / 2e5;
  const hc = w / 2;
  const vc = h / 2;
  const y2 = vc - dy2;
  const y3 = vc + dy2;
  const y1 = y2 - dy1;
  const y4 = y3 + dy1;
  const x1 = hc - dx1;
  const x2 = hc + dx1;
  return [
    `M${x1},${y1} L${x2},${y1} L${x2},${y2} L${x1},${y2} Z`,
    `M${x1},${y3} L${x2},${y3} L${x2},${y4} L${x1},${y4} Z`
  ].join(" ");
});
presetShapes.set("mathNotEqual", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 23520;
  const adj2Raw = adjustments == null ? void 0 : adjustments.get("adj2");
  const adj3Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _b : 11760;
  const hc = w / 2;
  const vc = h / 2;
  const hd2 = h / 2;
  const a1 = Math.min(Math.max(adj1Raw, 0), 5e4);
  const crAng = (() => {
    if (adj2Raw === void 0) return 110 * Math.PI / 180;
    const rad = adj2Raw / 6e4 * Math.PI / 180;
    const min = 70 * Math.PI / 180;
    const max = 110 * Math.PI / 180;
    return Math.min(Math.max(rad, min), max);
  })();
  const maxAdj3 = 1e5 - a1 * 2;
  const a3 = Math.min(Math.max(adj3Raw, 0), maxAdj3);
  const dy1 = h * a1 / 1e5;
  const dy2 = h * a3 / 2e5;
  const dx1 = w * 73490 / 2e5;
  const x1 = hc - dx1;
  const x8 = hc + dx1;
  const y2 = vc - dy2;
  const y3 = vc + dy2;
  const y1 = y2 - dy1;
  const y4 = y3 + dy1;
  const cadj2 = crAng - Math.PI / 2;
  const xadj2 = hd2 * Math.tan(cadj2);
  const len = Math.hypot(xadj2, hd2) || 1;
  const bhw = len * dy1 / hd2;
  const bhw2 = bhw / 2;
  const x7 = hc + xadj2 - bhw2;
  const x6 = x7 - xadj2 * y1 / hd2;
  const x5 = x7 - xadj2 * y2 / hd2;
  const x4 = x7 - xadj2 * y3 / hd2;
  const x3 = x7 - xadj2 * y4 / hd2;
  const rx7 = x7 + bhw;
  const rx6 = x6 + bhw;
  const rx5 = x5 + bhw;
  const rx4 = x4 + bhw;
  const rx3 = x3 + bhw;
  const dx7 = dy1 * hd2 / len;
  const rx = cadj2 > 0 ? x7 + dx7 : rx7;
  const lx = cadj2 > 0 ? x7 : rx7 - dx7;
  const dy3 = dy1 * xadj2 / len;
  const ry = cadj2 > 0 ? dy3 : 0;
  const ly = cadj2 > 0 ? 0 : -dy3;
  const dlx = w - rx;
  const drx = w - lx;
  const dly = h - ry;
  const dry = h - ly;
  return [
    `M${x1},${y1}`,
    `L${x6},${y1}`,
    `L${lx},${ly}`,
    `L${rx},${ry}`,
    `L${rx6},${y1}`,
    `L${x8},${y1}`,
    `L${x8},${y2}`,
    `L${rx5},${y2}`,
    `L${rx4},${y3}`,
    `L${x8},${y3}`,
    `L${x8},${y4}`,
    `L${rx3},${y4}`,
    `L${drx},${dry}`,
    `L${dlx},${dly}`,
    `L${x3},${y4}`,
    `L${x1},${y4}`,
    `L${x1},${y3}`,
    `L${x4},${y3}`,
    `L${x5},${y2}`,
    `L${x1},${y2}`,
    "Z"
  ].join(" ");
});
presetShapes.set("round1Rect", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 16667);
  const r = Math.min(w, h) * a;
  return ["M0,0", `L${w - r},0`, `A${r},${r} 0 0,1 ${w},${r}`, `L${w},${h}`, `L0,${h}`, "Z"].join(
    " "
  );
});
presetShapes.set("round2SameRect", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 16667);
  const a2 = adj(adjustments, "adj2", 0);
  const r1 = Math.min(w, h) * a1;
  const r2 = Math.min(w, h) * a2;
  return [
    `M${r1},0`,
    `L${w - r1},0`,
    `A${r1},${r1} 0 0,1 ${w},${r1}`,
    `L${w},${h - r2}`,
    `A${r2},${r2} 0 0,1 ${w - r2},${h}`,
    `L${r2},${h}`,
    `A${r2},${r2} 0 0,1 0,${h - r2}`,
    `L0,${r1}`,
    `A${r1},${r1} 0 0,1 ${r1},0`,
    "Z"
  ].join(" ");
});
presetShapes.set("round2DiagRect", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 16667);
  const a2 = adj(adjustments, "adj2", 0);
  const r1 = Math.min(w, h) * a1;
  const r2 = Math.min(w, h) * a2;
  return [
    `M${r1},0`,
    `L${w},0`,
    `L${w},${h - r2}`,
    `A${r2},${r2} 0 0,1 ${w - r2},${h}`,
    `L0,${h}`,
    `L0,${r1}`,
    `A${r1},${r1} 0 0,1 ${r1},0`,
    "Z"
  ].join(" ");
});
presetShapes.set("snip1Rect", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 16667);
  const d = Math.min(w, h) * a;
  return `M0,0 L${w - d},0 L${w},${d} L${w},${h} L0,${h} Z`;
});
presetShapes.set("snip2SameRect", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 16667);
  const a2 = adj(adjustments, "adj2", 0);
  const d1 = Math.min(w, h) * a1;
  const d2 = Math.min(w, h) * a2;
  return `M${d1},0 L${w - d1},0 L${w},${d1} L${w},${h - d2} L${w - d2},${h} L${d2},${h} L0,${h - d2} L0,${d1} Z`;
});
presetShapes.set("snip2DiagRect", (w, h, adjustments) => {
  var _a, _b;
  const ss = Math.min(w, h);
  const a1 = Math.min(Math.max((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 0, 0), 5e4);
  const a2 = Math.min(Math.max((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 16667, 0), 5e4);
  const lx1 = ss * a1 / 1e5;
  const lx2 = w - lx1;
  const ly1 = h - lx1;
  const rx1 = ss * a2 / 1e5;
  const rx2 = w - rx1;
  const ry1 = h - rx1;
  return `M${lx1},0 L${rx2},0 L${w},${rx1} L${w},${ly1} L${lx2},${h} L${rx1},${h} L0,${ry1} L0,${lx1} Z`;
});
presetShapes.set("snipRoundRect", (w, h, adjustments) => {
  const a1 = adj(adjustments, "adj1", 16667);
  const a2 = adj(adjustments, "adj2", 16667);
  const r = Math.min(w, h) * a1;
  const d = Math.min(w, h) * a2;
  return [
    `M${r},0`,
    `L${w - d},0`,
    `L${w},${d}`,
    `L${w},${h}`,
    `L0,${h}`,
    `L0,${r}`,
    `A${r},${r} 0 0,1 ${r},0`,
    "Z"
  ].join(" ");
});
presetShapes.set("bevel", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 12500);
  const t = Math.min(w, h) * a;
  return [
    // Outer
    `M0,0 L${w},0 L${w},${h} L0,${h} Z`,
    // Inner
    `M${t},${t} L${t},${h - t} L${w - t},${h - t} L${w - t},${t} Z`,
    // Connecting triangles (top)
    `M0,0 L${w},0 L${w - t},${t} L${t},${t} Z`,
    // Right
    `M${w},0 L${w},${h} L${w - t},${h - t} L${w - t},${t} Z`,
    // Bottom
    `M${w},${h} L0,${h} L${t},${h - t} L${w - t},${h - t} Z`,
    // Left
    `M0,${h} L0,0 L${t},${t} L${t},${h - t} Z`
  ].join(" ");
});
presetShapes.set("foldedCorner", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 16667);
  const fold = Math.min(w, h) * a * 0.7;
  return [
    `M0,0 L${w},0 L${w},${h} L0,${h} Z`,
    // Fold triangle
    `M${w - fold},${h} L${w},${h} L${w},${h - fold}`
  ].join(" ");
});
presetShapes.set("sun", (w, h, adjustments) => {
  var _a;
  const adjRaw2 = (_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 25e3;
  const a = Math.min(Math.max(adjRaw2, 12500), 46875);
  const g0 = 5e4 - a;
  const g1 = g0 * 30274 / 32768;
  const g2 = g0 * 12540 / 32768;
  const _g3 = g1 + 5e4;
  const _g4 = g2 + 5e4;
  const g5 = 5e4 - g1;
  const g6 = 5e4 - g2;
  const g7 = g0 * 23170 / 32768;
  const g8 = 5e4 + g7;
  const g9 = 5e4 - g7;
  const g10 = g5 * 3 / 4;
  const g11 = g6 * 3 / 4;
  const g12 = g10 + 3662;
  const g13 = g11 + 3662;
  const g14 = g11 + 12500;
  const g15 = 1e5 - g10;
  const g16 = 1e5 - g12;
  const g17 = 1e5 - g13;
  const g18 = 1e5 - g14;
  const hc = w / 2;
  const vc = h / 2;
  const ox1 = w * 18436 / 21600;
  const oy1 = h * 3163 / 21600;
  const ox2 = w * 3163 / 21600;
  const oy2 = h * 18436 / 21600;
  const s = (pct, dim) => dim * pct / 1e5;
  const _x8 = s(g8, w);
  const _x9 = s(g9, w);
  const x10 = s(g10, w);
  const x12 = s(g12, w);
  const x13 = s(g13, w);
  const x14 = s(g14, w);
  const x15 = s(g15, w);
  const x16 = s(g16, w);
  const x17 = s(g17, w);
  const x18 = s(g18, w);
  const wR = s(g0, w);
  const hR = s(g0, h);
  const _y8 = s(g8, h);
  const _y9 = s(g9, h);
  const y10 = s(g10, h);
  const y12 = s(g12, h);
  const y13 = s(g13, h);
  const y14 = s(g14, h);
  const y15 = s(g15, h);
  const y16 = s(g16, h);
  const y17 = s(g17, h);
  const y18 = s(g18, h);
  const x19 = s(a, w);
  return [
    // Ray 0: right
    `M${w},${vc} L${x15},${y18} L${x15},${y14} Z`,
    // Ray 1: top-right
    `M${ox1},${oy1} L${x16},${y13} L${x17},${y12} Z`,
    // Ray 2: top
    `M${hc},0 L${x18},${y10} L${x14},${y10} Z`,
    // Ray 3: top-left
    `M${ox2},${oy1} L${x13},${y12} L${x12},${y13} Z`,
    // Ray 4: left
    `M0,${vc} L${x10},${y14} L${x10},${y18} Z`,
    // Ray 5: bottom-left
    `M${ox2},${oy2} L${x12},${y17} L${x13},${y16} Z`,
    // Ray 6: bottom
    `M${hc},${h} L${x14},${y15} L${x18},${y15} Z`,
    // Ray 7: bottom-right
    `M${ox1},${oy2} L${x17},${y16} L${x16},${y17} Z`,
    // Center ellipse (arcTo from x19,vc with wR,hR, startAngle=180°, sweep=360°)
    `M${x19},${vc}`,
    `A${wR},${hR} 0 1,1 ${x19 + 2 * wR},${vc}`,
    `A${wR},${hR} 0 1,1 ${x19},${vc}`,
    "Z"
  ].join(" ");
});
presetShapes.set("moon", (w, h, adjustments) => {
  var _a;
  if (w <= 0 || h <= 0) return `M0,0 L${w},0 L${w},${h} L0,${h} Z`;
  const ss = Math.min(w, h);
  const hd2 = h / 2;
  const a = Math.min(Math.max((_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 5e4, 0), 87500);
  const g0 = ss * a / 1e5;
  const g1 = ss - g0;
  if (g1 <= 0) return `M0,0 L${w},0 L${w},${h} L0,${h} Z`;
  const g0w = g0 * w / ss;
  const g5 = (2 * ss * ss - g0 * g0) / g1;
  const g6w = (g5 - g0) * w / ss;
  const g8 = g5 / 2 - g0;
  const dy1 = g8 * hd2 / ss;
  const g18w = (g6w - g0w) / 2;
  return [
    `M${w},${h}`,
    `A${w},${hd2} 0 0,1 ${w},0`,
    // outer: (w,h) → left semicircle → (w,0)
    `A${g18w},${dy1} 0 0,0 ${w},${h}`,
    // inner: (w,0) → concave arc → (w,h)
    "Z"
  ].join(" ");
});
presetShapes.set("lightningBolt", (w, h) => {
  return [
    `M${w * 0.3895},${h * 0}`,
    `L${w * 0},${h * 0.1821}`,
    `L${w * 0.3425},${h * 0.3845}`,
    `L${w * 0.2265},${h * 0.4452}`,
    `L${w * 0.5497},${h * 0.6391}`,
    `L${w * 0.453},${h * 0.683}`,
    `L${w * 0.9972},${h * 0.9983}`,
    `L${w * 0.6796},${h * 0.5919}`,
    `L${w * 0.7624},${h * 0.5514}`,
    `L${w * 0.5138},${h * 0.3153}`,
    `L${w * 0.5939},${h * 0.2816}`,
    "Z"
  ].join(" ");
});
presetShapes.set("bracketPair", (w, h, adjustments) => {
  const ss = Math.min(w, h);
  const a = Math.min(Math.max(adjRaw(adjustments, "adj", 16667), 0), 5e4);
  const r = ss * a / 1e5;
  const x2 = w - r;
  const y2 = h - r;
  return [
    `M${r},0`,
    `A${r},${r} 0 0,0 0,${r}`,
    `L0,${y2}`,
    `A${r},${r} 0 0,0 ${r},${h}`,
    `L${x2},${h}`,
    `A${r},${r} 0 0,0 ${w},${y2}`,
    `L${w},${r}`,
    `A${r},${r} 0 0,0 ${x2},0`,
    "Z"
  ].join(" ");
});
presetShapes.set("bracePair", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 8333);
  const r = Math.min(w, h) * a;
  const cy = h / 2;
  return [
    // Top: left brace going down (its top-end at (2r, 0))
    `M${r * 2},0`,
    `A${r},${r} 0 0,0 ${r},${r}`,
    `L${r},${cy - r}`,
    `A${r},${r} 0 0,1 0,${cy}`,
    `A${r},${r} 0 0,1 ${r},${cy + r}`,
    `L${r},${h - r}`,
    `A${r},${r} 0 0,0 ${r * 2},${h}`,
    // Bottom edge → into right brace at its bottom-end (w - 2r, h)
    `L${w - r * 2},${h}`,
    // Right brace going up (mirror of left)
    `A${r},${r} 0 0,0 ${w - r},${h - r}`,
    `L${w - r},${cy + r}`,
    `A${r},${r} 0 0,1 ${w},${cy}`,
    `A${r},${r} 0 0,1 ${w - r},${cy - r}`,
    `L${w - r},${r}`,
    `A${r},${r} 0 0,0 ${w - r * 2},0`,
    // Top edge back to start
    "Z"
  ].join(" ");
});
presetShapes.set("leftBracket", (w, h, adjustments) => {
  var _a;
  const ss = Math.min(w, h);
  const maxAdj = ss > 0 ? 5e4 * h / ss : 0;
  const a = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 8333, maxAdj));
  const y1 = ss * a / 1e5;
  const toDeg = (ooxmlAng) => ooxmlAng / 6e4;
  const arcFrom = (x0, y0, rx, ry, stAng, swAng) => {
    const st = toDeg(stAng) * Math.PI / 180;
    const sw = toDeg(swAng) * Math.PI / 180;
    const cx = x0 - rx * Math.cos(st);
    const cy = y0 - ry * Math.sin(st);
    const x1 = cx + rx * Math.cos(st + sw);
    const y1p = cy + ry * Math.sin(st + sw);
    const large = Math.abs(toDeg(swAng)) > 180 ? 1 : 0;
    const sweep = swAng >= 0 ? 1 : 0;
    return { cmd: `A${rx},${ry} 0 ${large},${sweep} ${x1},${y1p}`, x: x1, y: y1p };
  };
  const a1 = arcFrom(w, h, w, y1, 54e5, 54e5);
  const a2 = arcFrom(0, y1, w, y1, 108e5, 54e5);
  return [`M${w},${h}`, a1.cmd, `L0,${y1}`, a2.cmd].join(" ");
});
presetShapes.set("rightBracket", (w, h, adjustments) => {
  var _a;
  const ss = Math.min(w, h);
  const maxAdj = ss > 0 ? 5e4 * h / ss : 0;
  const a = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 8333, maxAdj));
  const y1 = ss * a / 1e5;
  const y2 = h - y1;
  const toDeg = (ooxmlAng) => ooxmlAng / 6e4;
  const arcFrom = (x0, y0, rx, ry, stAng, swAng) => {
    const st = toDeg(stAng) * Math.PI / 180;
    const sw = toDeg(swAng) * Math.PI / 180;
    const cx = x0 - rx * Math.cos(st);
    const cy = y0 - ry * Math.sin(st);
    const x1 = cx + rx * Math.cos(st + sw);
    const y1p = cy + ry * Math.sin(st + sw);
    const large = Math.abs(toDeg(swAng)) > 180 ? 1 : 0;
    const sweep = swAng >= 0 ? 1 : 0;
    return { cmd: `A${rx},${ry} 0 ${large},${sweep} ${x1},${y1p}`, x: x1, y: y1p };
  };
  const a1 = arcFrom(0, 0, w, y1, 162e5, 54e5);
  const a2 = arcFrom(w, y2, w, y1, 0, 54e5);
  return ["M0,0", a1.cmd, `L${w},${y2}`, a2.cmd].join(" ");
});
presetShapes.set("leftBrace", (w, h, adjustments) => {
  var _a, _b;
  const ss = Math.min(w, h);
  const a2 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 5e4, 1e5));
  const q1 = 1e5 - a2;
  const q2 = Math.min(q1, a2);
  const q3 = q2 / 2;
  const maxAdj1 = ss > 0 ? q3 * h / ss : 0;
  const a1 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 8333, maxAdj1));
  const y1 = ss * a1 / 1e5;
  const y3 = h * a2 / 1e5;
  const y4 = y3 + y1;
  const wd2 = w / 2;
  const hc = w / 2;
  const toDeg = (ooxmlAng) => ooxmlAng / 6e4;
  const arcFrom = (x0, y0, rx, ry, stAng, swAng) => {
    const st = toDeg(stAng) * Math.PI / 180;
    const sw = toDeg(swAng) * Math.PI / 180;
    const cx = x0 - rx * Math.cos(st);
    const cy = y0 - ry * Math.sin(st);
    const x1 = cx + rx * Math.cos(st + sw);
    const y1p = cy + ry * Math.sin(st + sw);
    const large = Math.abs(toDeg(swAng)) > 180 ? 1 : 0;
    const sweep = swAng >= 0 ? 1 : 0;
    return { cmd: `A${rx},${ry} 0 ${large},${sweep} ${x1},${y1p}`, x: x1, y: y1p };
  };
  let x = w;
  let y = h;
  const aTop = arcFrom(x, y, wd2, y1, 54e5, 54e5);
  x = aTop.x;
  y = aTop.y;
  const aMid1 = arcFrom(hc, y4, wd2, y1, 0, -54e5);
  const aMid2 = arcFrom(aMid1.x, aMid1.y, wd2, y1, 54e5, -54e5);
  const aBot = arcFrom(hc, y1, wd2, y1, 108e5, 54e5);
  return [
    `M${w},${h}`,
    aTop.cmd,
    `L${hc},${y4}`,
    aMid1.cmd,
    aMid2.cmd,
    `L${hc},${y1}`,
    aBot.cmd
  ].join(" ");
});
presetShapes.set("rightBrace", (w, h, adjustments) => {
  var _a, _b;
  const ss = Math.min(w, h);
  const a2 = Math.max(0, Math.min((_a = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _a : 5e4, 1e5));
  const q1 = 1e5 - a2;
  const q2 = Math.min(q1, a2);
  const q3 = q2 / 2;
  const maxAdj1 = ss > 0 ? q3 * h / ss : 0;
  const a1 = Math.max(0, Math.min((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 8333, maxAdj1));
  const y1 = ss * a1 / 1e5;
  const y3 = h * a2 / 1e5;
  const y2 = y3 - y1;
  const y4 = h - y1;
  const wd2 = w / 2;
  const hc = w / 2;
  const toDeg = (ooxmlAng) => ooxmlAng / 6e4;
  const arcFrom = (x0, y0, rx, ry, stAng, swAng) => {
    const st = toDeg(stAng) * Math.PI / 180;
    const sw = toDeg(swAng) * Math.PI / 180;
    const cx = x0 - rx * Math.cos(st);
    const cy = y0 - ry * Math.sin(st);
    const x1 = cx + rx * Math.cos(st + sw);
    const y1p = cy + ry * Math.sin(st + sw);
    const large = Math.abs(toDeg(swAng)) > 180 ? 1 : 0;
    const sweep = swAng >= 0 ? 1 : 0;
    return { cmd: `A${rx},${ry} 0 ${large},${sweep} ${x1},${y1p}`, x: x1, y: y1p };
  };
  const aTop = arcFrom(0, 0, wd2, y1, 162e5, 54e5);
  const aMid1 = arcFrom(hc, y2, wd2, y1, 108e5, -54e5);
  const aMid2 = arcFrom(aMid1.x, aMid1.y, wd2, y1, 162e5, -54e5);
  const aBot = arcFrom(hc, y4, wd2, y1, 0, 54e5);
  return ["M0,0", aTop.cmd, `L${hc},${y2}`, aMid1.cmd, aMid2.cmd, `L${hc},${y4}`, aBot.cmd].join(
    " "
  );
});
presetShapes.set("actionButtonBlank", (w, h) => `M0,0 L${w},0 L${w},${h} L0,${h} Z`);
var actionButtonIcons = /* @__PURE__ */ new Map();
actionButtonIcons.set("actionButtonForwardNext", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const s = Math.min(w, h) * 0.3;
  return `M${cx - s * 0.5},${cy - s} L${cx + s},${cy} L${cx - s * 0.5},${cy + s} Z`;
});
actionButtonIcons.set("actionButtonBackPrevious", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const s = Math.min(w, h) * 0.3;
  return `M${cx + s * 0.5},${cy - s} L${cx - s},${cy} L${cx + s * 0.5},${cy + s} Z`;
});
actionButtonIcons.set("actionButtonReturn", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const s = Math.min(w, h) * 0.28;
  const thick = s * 0.22;
  const bottomY = cy + s * 0.4;
  const topY = cy - s * 0.4;
  const leftX = cx - s * 0.6;
  const rightX = cx + s * 0.6;
  const r = (bottomY - topY) / 2;
  return [
    // Outer edge: bottom-left → right → arc up → left to arrowhead junction
    `M${leftX},${bottomY}`,
    `L${rightX},${bottomY}`,
    `A${r},${r} 0 0,1 ${rightX},${topY}`,
    `L${leftX + s * 0.15},${topY}`,
    // Inner edge: top → right → arc down → bottom-left
    `L${leftX + s * 0.15},${topY + thick}`,
    `L${rightX - thick * 0.3},${topY + thick}`,
    `A${r - thick},${r - thick} 0 0,0 ${rightX - thick * 0.3},${bottomY - thick}`,
    `L${leftX},${bottomY - thick}`,
    "Z",
    // Arrowhead pointing left at top-left
    `M${leftX - s * 0.3},${topY + thick / 2}`,
    `L${leftX + s * 0.15},${topY - s * 0.2}`,
    `L${leftX + s * 0.15},${topY + thick + s * 0.2}`,
    "Z"
  ].join(" ");
});
actionButtonIcons.set("actionButtonBeginning", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const s = Math.min(w, h) * 0.28;
  return [
    // Left bar
    `M${cx - s},${cy - s} L${cx - s + s * 0.2},${cy - s} L${cx - s + s * 0.2},${cy + s} L${cx - s},${cy + s} Z`,
    // Left-pointing triangle
    `M${cx + s},${cy - s} L${cx - s + s * 0.35},${cy} L${cx + s},${cy + s} Z`
  ].join(" ");
});
actionButtonIcons.set("actionButtonEnd", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const s = Math.min(w, h) * 0.28;
  return [
    // Right bar
    `M${cx + s - s * 0.2},${cy - s} L${cx + s},${cy - s} L${cx + s},${cy + s} L${cx + s - s * 0.2},${cy + s} Z`,
    // Right-pointing triangle
    `M${cx - s},${cy - s} L${cx + s - s * 0.35},${cy} L${cx - s},${cy + s} Z`
  ].join(" ");
});
actionButtonIcons.set("actionButtonInformation", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const s = Math.min(w, h) * 0.28;
  return [
    // Dot
    `M${cx - s * 0.1},${cy - s * 0.65} L${cx + s * 0.1},${cy - s * 0.65} L${cx + s * 0.1},${cy - s * 0.4} L${cx - s * 0.1},${cy - s * 0.4} Z`,
    // Stem
    `M${cx - s * 0.12},${cy - s * 0.2} L${cx + s * 0.12},${cy - s * 0.2} L${cx + s * 0.12},${cy + s * 0.65} L${cx - s * 0.12},${cy + s * 0.65} Z`
  ].join(" ");
});
actionButtonIcons.set("actionButtonDocument", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  const s = Math.min(w, h) * 0.28;
  const dx = s * 0.7;
  const dy = s;
  const fold = s * 0.3;
  return [
    `M${cx - dx},${cy - dy}`,
    `L${cx + dx - fold},${cy - dy} L${cx + dx},${cy - dy + fold}`,
    `L${cx + dx},${cy + dy} L${cx - dx},${cy + dy} Z`,
    `M${cx + dx - fold},${cy - dy} L${cx + dx - fold},${cy - dy + fold} L${cx + dx},${cy - dy + fold}`
  ].join(" ");
});
presetShapes.set("wave", (w, h, adjustments) => {
  const a1 = Math.min(Math.max(adjRaw(adjustments, "adj1", 12500), 0), 2e4);
  const a2 = Math.min(Math.max(adjRaw(adjustments, "adj2", 0), -1e4), 1e4);
  const y1 = h * a1 / 1e5;
  const dy2 = y1 * 10 / 3;
  const y2 = y1 - dy2;
  const y3 = y1 + dy2;
  const y4 = h - y1;
  const y5 = y4 - dy2;
  const y6 = y4 + dy2;
  const of2 = w * a2 / 5e4;
  const dx2 = of2 < 0 ? 0 : of2;
  const dx5 = of2 < 0 ? of2 : 0;
  const x2 = -dx2;
  const x5 = w - dx5;
  const dx3 = (x5 - x2) / 3;
  const x3 = x2 + dx3;
  const x4 = (x3 + x5) / 2;
  const x6 = dx5;
  const x10 = w + dx2;
  const x7 = x6 + (x10 - x6) / 3;
  const x8 = (x7 + x10) / 2;
  return [
    `M${x2},${y1}`,
    `C${x3},${y2} ${x4},${y3} ${x5},${y1}`,
    `L${x10},${y4}`,
    `C${x8},${y6} ${x7},${y5} ${x6},${y4}`,
    "Z"
  ].join(" ");
});
presetShapes.set("doubleWave", (w, h, adjustments) => {
  const a1 = Math.min(Math.max(adjRaw(adjustments, "adj1", 6250), 0), 12500);
  const a2 = Math.min(Math.max(adjRaw(adjustments, "adj2", 0), -1e4), 1e4);
  const y1 = h * a1 / 1e5;
  const dy2 = y1 * 10 / 3;
  const y2 = y1 - dy2;
  const y3 = y1 + dy2;
  const y4 = h - y1;
  const y5 = y4 - dy2;
  const y6 = y4 + dy2;
  const of2 = w * a2 / 5e4;
  const dx2 = of2 < 0 ? 0 : of2;
  const dx8 = of2 < 0 ? of2 : 0;
  const x2 = -dx2;
  const x8 = w - dx8;
  const dx3 = (x8 - x2) / 6;
  const x3 = x2 + dx3;
  const dx4 = (x8 - x2) / 3;
  const x4 = x2 + dx4;
  const x5 = (x2 + x8) / 2;
  const x6 = x5 + dx3;
  const x7 = (x6 + x8) / 2;
  const x9 = dx8;
  const x15 = w + dx2;
  const dx3b = (x15 - x9) / 6;
  const x10 = x9 + dx3b;
  const x11 = x9 + (x15 - x9) / 3;
  const x12 = (x9 + x15) / 2;
  const x13 = x12 + dx3b;
  const x14 = (x13 + x15) / 2;
  return [
    `M${x2},${y1}`,
    `C${x3},${y2} ${x4},${y3} ${x5},${y1}`,
    `C${x6},${y2} ${x7},${y3} ${x8},${y1}`,
    `L${x15},${y4}`,
    `C${x14},${y6} ${x13},${y5} ${x12},${y4}`,
    `C${x11},${y6} ${x10},${y5} ${x9},${y4}`,
    "Z"
  ].join(" ");
});
presetShapes.set("irregularSeal1", (w, h) => {
  const sx = (x) => w * x / 21600;
  const sy = (y) => h * y / 21600;
  return [
    `M${sx(10800)},${sy(5800)}`,
    `L${sx(14522)},0`,
    `L${sx(14155)},${sy(5325)}`,
    `L${sx(18380)},${sy(4457)}`,
    `L${sx(16702)},${sy(7315)}`,
    `L${sx(21097)},${sy(8137)}`,
    `L${sx(17607)},${sy(10475)}`,
    `L${sx(21600)},${sy(13290)}`,
    `L${sx(16837)},${sy(12942)}`,
    `L${sx(18145)},${sy(18095)}`,
    `L${sx(14020)},${sy(14457)}`,
    `L${sx(13247)},${sy(19737)}`,
    `L${sx(10532)},${sy(14935)}`,
    `L${sx(8485)},${sy(21600)}`,
    `L${sx(7715)},${sy(15627)}`,
    `L${sx(4762)},${sy(17617)}`,
    `L${sx(5667)},${sy(13937)}`,
    `L${sx(135)},${sy(14587)}`,
    `L${sx(3722)},${sy(11775)}`,
    `L0,${sy(8615)}`,
    `L${sx(4627)},${sy(7617)}`,
    `L${sx(370)},${sy(2295)}`,
    `L${sx(7312)},${sy(6320)}`,
    `L${sx(8352)},${sy(2295)}`,
    "Z"
  ].join(" ");
});
presetShapes.set("irregularSeal2", (w, h) => {
  return [
    `M${w * 11462 / 21600},${h * 4342 / 21600}`,
    `L${w * 14790 / 21600},0`,
    `L${w * 14525 / 21600},${h * 5777 / 21600}`,
    `L${w * 18007 / 21600},${h * 3172 / 21600}`,
    `L${w * 16380 / 21600},${h * 6532 / 21600}`,
    `L${w},${h * 6645 / 21600}`,
    `L${w * 16985 / 21600},${h * 9402 / 21600}`,
    `L${w * 18270 / 21600},${h * 11290 / 21600}`,
    `L${w * 16380 / 21600},${h * 12310 / 21600}`,
    `L${w * 18877 / 21600},${h * 15632 / 21600}`,
    `L${w * 14640 / 21600},${h * 14350 / 21600}`,
    `L${w * 14942 / 21600},${h * 17370 / 21600}`,
    `L${w * 12180 / 21600},${h * 15935 / 21600}`,
    `L${w * 11612 / 21600},${h * 18842 / 21600}`,
    `L${w * 9872 / 21600},${h * 17370 / 21600}`,
    `L${w * 8700 / 21600},${h * 19712 / 21600}`,
    `L${w * 7527 / 21600},${h * 18125 / 21600}`,
    `L${w * 4917 / 21600},${h}`,
    `L${w * 4805 / 21600},${h * 18240 / 21600}`,
    `L${w * 1285 / 21600},${h * 17825 / 21600}`,
    `L${w * 3330 / 21600},${h * 15370 / 21600}`,
    `L0,${h * 12877 / 21600}`,
    `L${w * 3935 / 21600},${h * 11592 / 21600}`,
    `L${w * 1172 / 21600},${h * 8270 / 21600}`,
    `L${w * 5372 / 21600},${h * 7817 / 21600}`,
    `L${w * 4502 / 21600},${h * 3625 / 21600}`,
    `L${w * 8550 / 21600},${h * 6382 / 21600}`,
    `L${w * 9722 / 21600},${h * 1887 / 21600}`,
    "Z"
  ].join(" ");
});
presetShapes.set("teardrop", (w, h) => {
  const rx = w / 2;
  const ry = h / 2;
  return [`M${w},${ry}`, `A${rx},${ry} 0 1,1 ${rx},0`, `L${w},0`, `L${w},${ry}`, "Z"].join(" ");
});
presetShapes.set("pie", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 0;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 162e5;
  const startDeg = adj1Raw / 6e4 % 360;
  const endDeg = adj2Raw / 6e4 % 360;
  let sweepDeg = ((endDeg - startDeg) % 360 + 360) % 360;
  if (sweepDeg === 0 && startDeg !== endDeg) sweepDeg = 360;
  const rx = w / 2;
  const ry = h / 2;
  const toRad = (d) => d * Math.PI / 180;
  const visualToParam = (deg) => Math.atan2(Math.sin(toRad(deg)) / ry, Math.cos(toRad(deg)) / rx);
  const startParam = visualToParam(startDeg);
  const endParam = visualToParam(endDeg);
  const x1 = rx + rx * Math.cos(startParam);
  const y1 = ry + ry * Math.sin(startParam);
  const x2 = rx + rx * Math.cos(endParam);
  const y2 = ry + ry * Math.sin(endParam);
  const largeArc = sweepDeg > 180 ? 1 : 0;
  return [`M${rx},${ry}`, `L${x1},${y1}`, `A${rx},${ry} 0 ${largeArc},1 ${x2},${y2}`, "Z"].join(
    " "
  );
});
presetShapes.set("pieWedge", (w, h) => {
  return [`M0,${h}`, `A${w},${h} 0 0,1 ${w},0`, `L${w},${h}`, "Z"].join(" ");
});
presetShapes.set("arc", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 162e5;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 0;
  const startDeg = adj1Raw / 6e4;
  const endDeg = adj2Raw / 6e4;
  const cx = w / 2;
  const cy = h / 2;
  const rx = w / 2;
  const ry = h / 2;
  const toRad = (d) => d * Math.PI / 180;
  const visualToParam = (deg) => Math.atan2(Math.sin(toRad(deg)) / ry, Math.cos(toRad(deg)) / rx);
  const startParam = visualToParam(startDeg);
  const endParam = visualToParam(endDeg);
  const x1 = cx + rx * Math.cos(startParam);
  const y1 = cy + ry * Math.sin(startParam);
  const x2 = cx + rx * Math.cos(endParam);
  const y2 = cy + ry * Math.sin(endParam);
  let sweepDeg = ((endDeg - startDeg) % 360 + 360) % 360;
  if (sweepDeg === 0 && startDeg !== endDeg) sweepDeg = 360;
  const largeArc = sweepDeg > 180 ? 1 : 0;
  return `M${cx},${cy} L${x1},${y1} A${rx},${ry} 0 ${largeArc},1 ${x2},${y2} Z`;
});
presetShapes.set("chord", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 27e5;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 162e5;
  const startDeg = adj1Raw / 6e4;
  const endDeg = adj2Raw / 6e4;
  const cx = w / 2;
  const cy = h / 2;
  const rx = w / 2;
  const ry = h / 2;
  const toRad = (d) => d * Math.PI / 180;
  const visualToParam = (deg) => Math.atan2(Math.sin(toRad(deg)) / ry, Math.cos(toRad(deg)) / rx);
  const startParam = visualToParam(startDeg);
  const endParam = visualToParam(endDeg);
  const x1 = cx + rx * Math.cos(startParam);
  const y1 = cy + ry * Math.sin(startParam);
  const x2 = cx + rx * Math.cos(endParam);
  const y2 = cy + ry * Math.sin(endParam);
  let sweepDeg = ((endDeg - startDeg) % 360 + 360) % 360;
  if (sweepDeg === 0 && startDeg !== endDeg) sweepDeg = 360;
  if (sweepDeg === 0) {
    return `M${cx - rx},${cy} A${rx},${ry} 0 1,1 ${cx + rx},${cy} A${rx},${ry} 0 1,1 ${cx - rx},${cy} Z`;
  }
  const largeArc = sweepDeg > 180 ? 1 : 0;
  return `M${x1},${y1} A${rx},${ry} 0 ${largeArc},1 ${x2},${y2} Z`;
});
presetShapes.set("funnel", (w, h) => {
  const ss = Math.min(w, h);
  const wd2 = w / 2;
  const hd4 = h / 4;
  const hc = w / 2;
  const b = h;
  const d = ss / 20;
  const rw2 = wd2 - d;
  const rh2 = hd4 - d;
  const ang8 = 8 * Math.PI / 180;
  const t1 = wd2 * Math.cos(ang8);
  const t2 = hd4 * Math.sin(ang8);
  const da = Math.atan2(t2, t1);
  const stAng1 = Math.PI - da;
  const swAng1 = Math.PI + 2 * da;
  const swAng3 = Math.PI - 2 * da;
  const rw3 = wd2 / 4;
  const rh3 = hd4 / 4;
  const ct1 = hd4 * Math.cos(stAng1);
  const st1 = wd2 * Math.sin(stAng1);
  const m1 = Math.sqrt(ct1 * ct1 + st1 * st1);
  const n1 = wd2 * hd4 / m1;
  const dx1 = n1 * Math.cos(stAng1);
  const dy1 = n1 * Math.sin(stAng1);
  const x1 = hc + dx1;
  const y1 = hd4 + dy1;
  const endAng1 = stAng1 + swAng1;
  const ct1e = hd4 * Math.cos(endAng1);
  const st1e = wd2 * Math.sin(endAng1);
  const m1e = Math.sqrt(ct1e * ct1e + st1e * st1e);
  const n1e = wd2 * hd4 / m1e;
  const dx1e = n1e * Math.cos(endAng1);
  const dy1e = n1e * Math.sin(endAng1);
  const x1e = hc + dx1e;
  const y1e = hd4 + dy1e;
  const vc3 = b - rh3;
  const ct3 = rh3 * Math.cos(da);
  const st3 = rw3 * Math.sin(da);
  const m3 = Math.sqrt(ct3 * ct3 + st3 * st3);
  const n3 = rw3 * rh3 / m3;
  const dx3 = n3 * Math.cos(da);
  const dy3 = n3 * Math.sin(da);
  const x3 = hc + dx3;
  const y2 = vc3 + dy3;
  const endAng3 = da + swAng3;
  const ct3e = rh3 * Math.cos(endAng3);
  const st3e = rw3 * Math.sin(endAng3);
  const m3e = Math.sqrt(ct3e * ct3e + st3e * st3e);
  const n3e = rw3 * rh3 / m3e;
  const dx3e = n3e * Math.cos(endAng3);
  const dy3e = n3e * Math.sin(endAng3);
  const x3e = hc + dx3e;
  const y2e = vc3 + dy3e;
  const swDeg1 = swAng1 * 180 / Math.PI;
  const largeArc1 = Math.abs(swDeg1) > 180 ? 1 : 0;
  const sweep1 = swAng1 > 0 ? 1 : 0;
  const swDeg3 = swAng3 * 180 / Math.PI;
  const largeArc3 = Math.abs(swDeg3) > 180 ? 1 : 0;
  const sweep3 = swAng3 > 0 ? 1 : 0;
  const body = [
    `M${x1},${y1}`,
    `A${wd2},${hd4} 0 ${largeArc1},${sweep1} ${x1e},${y1e}`,
    `L${x3},${y2}`,
    `A${rw3},${rh3} 0 ${largeArc3},${sweep3} ${x3e},${y2e}`,
    "Z"
  ].join(" ");
  const x2 = wd2 - rw2;
  const x2r = wd2 + rw2;
  const inset = [
    `M${x2},${hd4}`,
    `A${rw2},${rh2} 0 1,0 ${x2r},${hd4}`,
    `A${rw2},${rh2} 0 1,0 ${x2},${hd4}`,
    "Z"
  ].join(" ");
  return `${body} ${inset}`;
});
var presetOverlays = /* @__PURE__ */ new Map();
presetOverlays.set("can", (w, h) => {
  const ry = h * 0.1;
  const rx = w / 2;
  return [
    {
      path: [`M0,${ry}`, `A${rx},${ry} 0 0,1 ${w},${ry}`, `A${rx},${ry} 0 0,1 0,${ry}`, "Z"].join(
        " "
      ),
      fillModifier: "lighten"
    }
  ];
});
var multiPathPresets = /* @__PURE__ */ new Map();
function _abGuides(w, h) {
  const ss = Math.min(w, h);
  const hc = w / 2;
  const vc = h / 2;
  const dx2 = ss * 3 / 8;
  return {
    ss,
    hc,
    vc,
    dx2,
    g9: vc - dx2,
    g10: vc + dx2,
    g11: hc - dx2,
    g12: hc + dx2,
    g13: ss * 3 / 4
  };
}
var _rect = (w, h) => `M0,0 L${w},0 L${w},${h} L0,${h} Z`;
multiPathPresets.set("actionButtonForwardNext", (w, h) => {
  const { g9, g10, g11, g12, vc } = _abGuides(w, h);
  const tri = `M${g12},${vc} L${g11},${g9} L${g11},${g10} Z`;
  return [
    { d: `${_rect(w, h)} ${tri}`, fill: "norm", stroke: false },
    { d: tri, fill: "darken", stroke: false },
    { d: tri, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonForward", (w, h) => {
  const forwardNext = multiPathPresets.get("actionButtonForwardNext");
  return forwardNext ? forwardNext(w, h) : [];
});
multiPathPresets.set("actionButtonBackPrevious", (w, h) => {
  const { g9, g10, g11, g12, vc } = _abGuides(w, h);
  const tri = `M${g11},${vc} L${g12},${g9} L${g12},${g10} Z`;
  return [
    { d: `${_rect(w, h)} ${tri}`, fill: "norm", stroke: false },
    { d: tri, fill: "darken", stroke: false },
    { d: tri, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonBeginning", (w, h) => {
  const { g9, g10, g11, g12, g13, vc } = _abGuides(w, h);
  const g14 = g13 / 8;
  const g15 = g13 / 4;
  const g16 = g11 + g14;
  const g17 = g11 + g15;
  const tri = `M${g17},${vc} L${g12},${g9} L${g12},${g10} Z`;
  const bar = `M${g16},${g9} L${g11},${g9} L${g11},${g10} L${g16},${g10} Z`;
  const icon = `${tri} ${bar}`;
  return [
    { d: `${_rect(w, h)} ${icon}`, fill: "norm", stroke: false },
    { d: icon, fill: "darken", stroke: false },
    { d: icon, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonEnd", (w, h) => {
  const { g9, g10, g11, g12, g13, vc } = _abGuides(w, h);
  const g14 = g13 * 3 / 4;
  const g15 = g13 * 7 / 8;
  const g16 = g11 + g14;
  const g17 = g11 + g15;
  const tri = `M${g16},${vc} L${g11},${g9} L${g11},${g10} Z`;
  const bar = `M${g17},${g9} L${g12},${g9} L${g12},${g10} L${g17},${g10} Z`;
  const icon = `${tri} ${bar}`;
  return [
    { d: `${_rect(w, h)} ${icon}`, fill: "norm", stroke: false },
    { d: icon, fill: "darken", stroke: false },
    { d: icon, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonReturn", (w, h) => {
  const { g9, g10, g11, g12, g13, hc, vc: _vcR } = _abGuides(w, h);
  const g14 = g13 * 7 / 8;
  const g15 = g13 * 3 / 4;
  const g16 = g13 * 5 / 8;
  const g17 = g13 * 3 / 8;
  const g18 = g13 / 4;
  const g27 = g13 / 8;
  const g19 = g9 + g15;
  const g20 = g9 + g16;
  const g21 = g9 + g18;
  const g22 = g11 + g14;
  const g23 = g11 + g15;
  const g24 = g11 + g16;
  const g25 = g11 + g17;
  const g26 = g11 + g18;
  const fillIcon = [
    `M${g12},${g21}`,
    `L${g23},${g9}`,
    `L${hc},${g21}`,
    `L${g24},${g21}`,
    `L${g24},${g20}`,
    `A${g27},${g27} 0 0,1 ${g24 - g27},${g19}`,
    // arc 1: inner bottom-right corner
    `L${g25},${g19}`,
    // across inner bottom
    `A${g27},${g27} 0 0,1 ${g26},${g20}`,
    // arc 2: inner bottom-left corner
    `L${g26},${g21}`,
    `L${g11},${g21}`,
    `L${g11},${g20}`,
    `A${g17},${g17} 0 0,0 ${g25},${g10}`,
    // arc 3: outer bottom-left curve
    `L${hc},${g10}`,
    // across outer bottom
    `A${g17},${g17} 0 0,0 ${hc + g17},${g10 - g17}`,
    // arc 4: outer bottom-right curve
    `L${g22},${g21}`,
    "Z"
  ].join(" ");
  const outline = [
    `M${g12},${g21}`,
    `L${g22},${g21}`,
    `L${g22},${g20}`,
    `A${g17},${g17} 0 0,1 ${g11 + g13 / 2},${g10}`,
    // arc A: outer bottom-right (0°→90°)
    `L${g25},${g10}`,
    // across outer bottom
    `A${g17},${g17} 0 0,1 ${g11},${g20}`,
    // arc B: outer bottom-left (90°→180°)
    `L${g11},${g21}`,
    `L${g26},${g21}`,
    `L${g26},${g20}`,
    `A${g27},${g27} 0 0,0 ${g25},${g19}`,
    // arc C: inner bottom-left (180°→90°, CCW)
    `L${hc},${g19}`,
    // across inner bottom
    `A${g27},${g27} 0 0,0 ${g24},${g20}`,
    // arc D: inner bottom-right (90°→0°, CCW)
    `L${g24},${g21}`,
    `L${hc},${g21}`,
    `L${g23},${g9}`,
    "Z"
  ].join(" ");
  return [
    { d: `${_rect(w, h)} ${fillIcon}`, fill: "norm", stroke: false },
    { d: fillIcon, fill: "darken", stroke: false },
    { d: outline, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonSound", (w, h) => {
  const { g9, g10, g11, g12, g13, hc: _hcS, vc } = _abGuides(w, h);
  const g14 = g13 / 8;
  const g15 = g13 * 5 / 16;
  const g16 = g13 * 5 / 8;
  const g17 = g13 * 11 / 16;
  const g18 = g13 * 3 / 4;
  const g19 = g13 * 7 / 8;
  const g20 = g9 + g14;
  const g21 = g9 + g15;
  const g22 = g9 + g17;
  const g23 = g9 + g19;
  const g24 = g11 + g15;
  const g25 = g11 + g16;
  const g26 = g11 + g18;
  const speaker = `M${g11},${g21} L${g11},${g22} L${g24},${g22} L${g25},${g10} L${g25},${g9} L${g24},${g21} Z`;
  const speakerOutline = `M${g11},${g21} L${g24},${g21} L${g25},${g9} L${g25},${g10} L${g24},${g22} L${g11},${g22} Z`;
  const waveLine1 = `M${g26},${g21} L${g12},${g20}`;
  const waveLine2 = `M${g26},${vc} L${g12},${vc}`;
  const waveLine3 = `M${g26},${g22} L${g12},${g23}`;
  const outlineWithWaves = `${speakerOutline} ${waveLine1} ${waveLine2} ${waveLine3}`;
  return [
    { d: `${_rect(w, h)} ${speaker}`, fill: "norm", stroke: false },
    { d: speaker, fill: "darken", stroke: false },
    { d: outlineWithWaves, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonInformation", (w, h) => {
  const { g9, g10, g11, g13, hc, vc: _vcI, dx2 } = _abGuides(w, h);
  const g14 = g13 / 32;
  const g17v = g13 * 5 / 16;
  const g18v = g13 * 3 / 8;
  const g19v = g13 * 13 / 32;
  const g20v = g13 * 19 / 32;
  const g22v = g13 * 11 / 16;
  const g23v = g13 * 13 / 16;
  const g24v = g13 * 7 / 8;
  const g38 = g13 * 3 / 32;
  const y25 = g9 + g14;
  const y28 = g9 + g17v;
  const y29 = g9 + g18v;
  const y30 = g9 + g23v;
  const y31 = g9 + g24v;
  const x32 = g11 + g17v;
  const x34 = g11 + g19v;
  const x35 = g11 + g20v;
  const x37 = g11 + g22v;
  const circle = `M${hc},${g9} A${dx2},${dx2} 0 1,1 ${hc},${g10} A${dx2},${dx2} 0 1,1 ${hc},${g9} Z`;
  const dot = `M${hc},${y25} A${g38},${g38} 0 1,1 ${hc},${y25 + g38 * 2} A${g38},${g38} 0 1,1 ${hc},${y25} Z`;
  const iBody = `M${x32},${y28} L${x37},${y28} L${x37},${y29} L${x35},${y29} L${x35},${y30} L${x37},${y30} L${x37},${y31} L${x32},${y31} L${x32},${y30} L${x34},${y30} L${x34},${y29} L${x32},${y29} Z`;
  const iconInner = `${dot} ${iBody}`;
  return [
    { d: `${_rect(w, h)} ${circle}`, fill: "norm", stroke: false },
    { d: `${circle} ${iconInner}`, fill: "darken", stroke: false },
    { d: iconInner, fill: "lighten", stroke: false },
    { d: `${circle} ${iconInner}`, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonHome", (w, h) => {
  const { g9, g10, g11, g12, g13, hc, vc } = _abGuides(w, h);
  const g14 = g13 / 16;
  const g15 = g13 / 8;
  const g16 = g13 * 3 / 16;
  const g17 = g13 * 5 / 16;
  const g18 = g13 * 7 / 16;
  const g19 = g13 * 9 / 16;
  const g20 = g13 * 11 / 16;
  const g21 = g13 * 3 / 4;
  const g22 = g13 * 13 / 16;
  const g23 = g13 * 7 / 8;
  const g24 = g9 + g14;
  const g25 = g9 + g16;
  const g26 = g9 + g17;
  const g27 = g9 + g21;
  const g28 = g11 + g15;
  const g29 = g11 + g18;
  const g30 = g11 + g19;
  const g31 = g11 + g20;
  const g32 = g11 + g22;
  const g33 = g11 + g23;
  const houseOutline = `M${hc},${g9} L${g11},${vc} L${g28},${vc} L${g28},${g10} L${g33},${g10} L${g33},${vc} L${g12},${vc} L${g32},${g26} L${g32},${g24} L${g31},${g24} L${g31},${g25} Z`;
  const chimney = `M${g32},${g26} L${g32},${g24} L${g31},${g24} L${g31},${g25} Z`;
  const walls = `M${g28},${vc} L${g28},${g10} L${g29},${g10} L${g29},${g27} L${g30},${g27} L${g30},${g10} L${g33},${g10} L${g33},${vc} Z`;
  const roof = `M${hc},${g9} L${g11},${vc} L${g12},${vc} Z`;
  const door = `M${g29},${g27} L${g30},${g27} L${g30},${g10} L${g29},${g10} Z`;
  const iconOutline = `M${hc},${g9} L${g31},${g25} L${g31},${g24} L${g32},${g24} L${g32},${g26} L${g12},${vc} L${g33},${vc} L${g33},${g10} L${g28},${g10} L${g28},${vc} L${g11},${vc} Z M${g31},${g25} L${g32},${g26} M${g33},${vc} L${g28},${vc} M${g29},${g10} L${g29},${g27} L${g30},${g27} L${g30},${g10}`;
  return [
    { d: `${_rect(w, h)} ${houseOutline}`, fill: "norm", stroke: false },
    { d: `${chimney} ${walls}`, fill: "darkenLess", stroke: false },
    { d: `${roof} ${door}`, fill: "darken", stroke: false },
    { d: iconOutline, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonHelp", (w, h) => {
  const { g9, g11, g13, hc, vc: _vcH } = _abGuides(w, h);
  const g14 = g13 / 7;
  const g15 = g13 * 3 / 14;
  const g16 = g13 * 2 / 7;
  const g19 = g13 * 3 / 7;
  const g20 = g13 * 4 / 7;
  const g21 = g13 * 17 / 28;
  const g23 = g13 * 21 / 28;
  const g24 = g13 * 11 / 14;
  const g41 = g13 / 14;
  const g42 = g13 * 3 / 28;
  const g27 = g9 + g16;
  const g29 = g9 + g21;
  const g30 = g9 + g23;
  const g31 = g9 + g24;
  const g33 = g11 + g15;
  const g36 = g11 + g19;
  const g37 = g11 + g20;
  const arcSeg = (curX, curY, wR, hR, stDeg, swDeg) => {
    const stRad = stDeg * Math.PI / 180;
    const endRad = (stDeg + swDeg) * Math.PI / 180;
    const cx2 = curX - wR * Math.cos(stRad);
    const cy2 = curY - hR * Math.sin(stRad);
    const endX = cx2 + wR * Math.cos(endRad);
    const endY = cy2 + hR * Math.sin(endRad);
    const largeArc = Math.abs(swDeg) > 180 ? 1 : 0;
    const sweep = swDeg > 0 ? 1 : 0;
    return { endX, endY, svg: `A${wR},${hR} 0 ${largeArc},${sweep} ${endX},${endY}` };
  };
  let cx = g33;
  let cy = g27;
  const a1 = arcSeg(cx, cy, g16, g16, 180, 180);
  cx = a1.endX;
  cy = a1.endY;
  const a2 = arcSeg(cx, cy, g14, g15, 0, 90);
  cx = a2.endX;
  cy = a2.endY;
  const a3 = arcSeg(cx, cy, g41, g42, 270, -90);
  const a4 = arcSeg(g36, g29, g14, g15, 180, 90);
  const a5 = arcSeg(a4.endX, a4.endY, g41, g42, 90, -90);
  const a6 = arcSeg(a5.endX, a5.endY, g14, g14, 0, -180);
  const dot = `M${hc},${g31} A${g42},${g42} 0 1,1 ${hc},${g31 + g42 * 2} A${g42},${g42} 0 1,1 ${hc},${g31} Z`;
  const qMark = `M${g33},${g27} ${a1.svg} ${a2.svg} ${a3.svg} L${g37},${g30} L${g36},${g30} L${g36},${g29} ${a4.svg} ${a5.svg} ${a6.svg} Z`;
  const icon = `${qMark} ${dot}`;
  return [
    { d: `${_rect(w, h)} ${icon}`, fill: "norm", stroke: false },
    // Background with icon cutout
    { d: icon, fill: "darken", stroke: false },
    // Darkened icon fill
    { d: icon, fill: "none", stroke: true },
    // Icon outline
    { d: _rect(w, h), fill: "none", stroke: true }
    // Rect outline
  ];
});
multiPathPresets.set("actionButtonDocument", (w, h) => {
  const ss = Math.min(w, h);
  const hc = w / 2;
  const vc = h / 2;
  const dx2 = ss * 3 / 8;
  const dx1 = ss * 9 / 32;
  const g9 = vc - dx2;
  const g10 = vc + dx2;
  const g11 = hc - dx1;
  const g12 = hc + dx1;
  const g13 = ss * 3 / 16;
  const g14 = g12 - g13;
  const g15 = g9 + g13;
  const doc = `M${g11},${g9} L${g14},${g9} L${g12},${g15} L${g12},${g10} L${g11},${g10} Z`;
  const fold = `M${g14},${g9} L${g14},${g15} L${g12},${g15} Z`;
  const outline = `${doc} M${g12},${g15} L${g14},${g15} L${g14},${g9}`;
  return [
    { d: `${_rect(w, h)} ${doc}`, fill: "norm", stroke: false },
    { d: doc, fill: "darkenLess", stroke: false },
    { d: fold, fill: "darken", stroke: false },
    { d: outline, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("actionButtonMovie", (w, h) => {
  const { g9, g11, g12, g13 } = _abGuides(w, h);
  const g14 = g13 * 1455 / 21600;
  const g15 = g13 * 1905 / 21600;
  const g16 = g13 * 2325 / 21600;
  const g17 = g13 * 16155 / 21600;
  const g18 = g13 * 17010 / 21600;
  const g19 = g13 * 19335 / 21600;
  const g20 = g13 * 19725 / 21600;
  const g21 = g13 * 20595 / 21600;
  const g22 = g13 * 5280 / 21600;
  const g23 = g13 * 5730 / 21600;
  const g24 = g13 * 6630 / 21600;
  const g25 = g13 * 7492 / 21600;
  const g26 = g13 * 9067 / 21600;
  const g27 = g13 * 9555 / 21600;
  const g28 = g13 * 13342 / 21600;
  const g29 = g13 * 14580 / 21600;
  const g30 = g13 * 15592 / 21600;
  const x31 = g11 + g14;
  const x32 = g11 + g15;
  const x33 = g11 + g16;
  const x34 = g11 + g17;
  const x35 = g11 + g18;
  const x36 = g11 + g19;
  const x37 = g11 + g20;
  const x38 = g11 + g21;
  const y39 = g9 + g22;
  const y40 = g9 + g23;
  const y41 = g9 + g24;
  const y42 = g9 + g25;
  const y43 = g9 + g26;
  const y44 = g9 + g27;
  const y45 = g9 + g28;
  const y46 = g9 + g29;
  const y47 = g9 + g30;
  const icon = [
    `M${g11},${y39}`,
    `L${g11},${y44}`,
    `L${x31},${y44}`,
    `L${x32},${y43}`,
    `L${x33},${y43}`,
    `L${x33},${y47}`,
    `L${x35},${y47}`,
    `L${x35},${y45}`,
    `L${x36},${y45}`,
    `L${x38},${y46}`,
    `L${g12},${y46}`,
    `L${g12},${y41}`,
    `L${x38},${y41}`,
    `L${x37},${y42}`,
    `L${x35},${y42}`,
    `L${x35},${y41}`,
    `L${x34},${y40}`,
    `L${x32},${y40}`,
    `L${x31},${y39}`,
    "Z"
  ].join(" ");
  return [
    { d: `${_rect(w, h)} ${icon}`, fill: "norm", stroke: false },
    { d: icon, fill: "darken", stroke: false },
    { d: icon, fill: "none", stroke: true },
    { d: _rect(w, h), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("flowChartOfflineStorage", (w, h) => {
  const tri = `M0,0 L${w},0 L${w / 2},${h} Z`;
  const lineY = h * 4 / 5;
  const line = `M${w * 2 / 5},${lineY} L${w * 3 / 5},${lineY}`;
  return [
    { d: tri, fill: "norm", stroke: false },
    { d: line, fill: "none", stroke: true },
    { d: tri, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("cube", (w, h, adjustments) => {
  const a = Math.min(Math.max(adj(adjustments, "adj", 25e3), 0), 0.45);
  const depth = Math.min(w, h) * a;
  const front = [
    `M0,${depth}`,
    `L${w - depth},${depth}`,
    `L${w - depth},${h}`,
    `L0,${h}`,
    "Z"
  ].join(" ");
  const top = [`M0,${depth}`, `L${depth},0`, `L${w},0`, `L${w - depth},${depth}`, "Z"].join(" ");
  const right = [
    `M${w - depth},${depth}`,
    `L${w},0`,
    `L${w},${h - depth}`,
    `L${w - depth},${h}`,
    "Z"
  ].join(" ");
  return [
    { d: front, fill: "norm", stroke: true },
    { d: top, fill: "lightenLess", stroke: true },
    { d: right, fill: "darkenLess", stroke: true }
  ];
});
multiPathPresets.set("bevel", (w, h, adjustments) => {
  const a = Math.min(Math.max(adj(adjustments, "adj", 12500), 0), 0.45);
  const t = Math.min(w, h) * a;
  const inner = `M${t},${t} L${w - t},${t} L${w - t},${h - t} L${t},${h - t} Z`;
  const top = `M0,0 L${w},0 L${w - t},${t} L${t},${t} Z`;
  const bottom = `M0,${h} L${t},${h - t} L${w - t},${h - t} L${w},${h} Z`;
  const left = `M0,0 L${t},${t} L${t},${h - t} L0,${h} Z`;
  const right = `M${w},0 L${w},${h} L${w - t},${h - t} L${w - t},${t} Z`;
  return [
    { d: inner, fill: "norm", stroke: true },
    { d: top, fill: "lightenLess", stroke: true },
    { d: right, fill: "darkenLess", stroke: true },
    { d: bottom, fill: "darken", stroke: true },
    { d: left, fill: "lighten", stroke: true }
  ];
});
multiPathPresets.set("leftRightRibbon", (w, h, adjustments) => {
  var _a, _b, _c;
  const ss = Math.min(w, h);
  const wd2 = w / 2;
  const wd32 = w / 32;
  const hc = w / 2;
  const vc = h / 2;
  const a3 = Math.min(Math.max(((_a = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _a : 16667) / 1e5, 0), 0.33333);
  const maxAdj1 = 1 - a3;
  const a1 = Math.min(Math.max(((_b = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _b : 5e4) / 1e5, 0), maxAdj1);
  const w1 = wd2 - wd32;
  const maxAdj2 = w1 / ss;
  const a2 = Math.min(Math.max(((_c = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _c : 5e4) / 1e5, 0), maxAdj2);
  const x1 = ss * a2;
  const x4 = w - x1;
  const dy1 = h * a1 / 2;
  const dy2 = -h * a3 / 2;
  const ly1 = vc + dy2 - dy1;
  const ry4 = vc + dy1 - dy2;
  const ly2 = ly1 + dy1;
  const ry3 = h - ly2;
  const ly4 = ly2 * 2;
  const ry1 = h - ly4;
  const ly3 = ly4 - ly1;
  const ry2 = h - ly3;
  const hR = a3 * ss / 4;
  const x2 = hc - wd32;
  const x3 = hc + wd32;
  const y1 = ly1 + hR;
  const y2 = ry2 - hR;
  const arcTo = (curX, curY, wR, hRad, stDeg, swDeg) => {
    const stRad = stDeg * Math.PI / 180;
    const endRad = (stDeg + swDeg) * Math.PI / 180;
    const cx = curX - wR * Math.cos(stRad);
    const cy = curY - hRad * Math.sin(stRad);
    const endX = cx + wR * Math.cos(endRad);
    const endY = cy + hRad * Math.sin(endRad);
    const largeArc = Math.abs(swDeg) > 180 ? 1 : 0;
    const sweep = swDeg > 0 ? 1 : 0;
    return { endX, endY, svg: `A${wR},${hRad} 0 ${largeArc},${sweep} ${endX},${endY}` };
  };
  const cx1 = hc;
  const cy1 = ly1;
  const arc1a = arcTo(cx1, cy1, wd32, hR, 270, 180);
  const arc1b = arcTo(arc1a.endX, arc1a.endY, wd32, hR, 270, -180);
  const cx1c = hc;
  const cy1c = ry4;
  const arc1c = arcTo(cx1c, cy1c, wd32, hR, 90, 90);
  const body = [
    `M0,${ly2}`,
    `L${x1},0`,
    `L${x1},${ly1}`,
    `L${hc},${ly1}`,
    arc1a.svg,
    arc1b.svg,
    `L${x4},${ry2}`,
    `L${x4},${ry1}`,
    `L${w},${ry3}`,
    `L${x4},${h}`,
    `L${x4},${ry4}`,
    `L${hc},${ry4}`,
    arc1c.svg,
    `L${x2},${ly3}`,
    `L${x1},${ly3}`,
    `L${x1},${ly4}`,
    "Z"
  ].join(" ");
  const arc2a = arcTo(x3, y1, wd32, hR, 0, 90);
  const arc2b = arcTo(arc2a.endX, arc2a.endY, wd32, hR, 270, -180);
  const shadow = [`M${x3},${y1}`, arc2a.svg, arc2b.svg, `L${x3},${ry2}`, "Z"].join(" ");
  const outline = [body, `M${x3},${y1} L${x3},${ry2}`, `M${x2},${y2} L${x2},${ly3}`].join(" ");
  return [
    { d: body, fill: "norm", stroke: false },
    { d: shadow, fill: "darkenLess", stroke: false },
    { d: outline, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("ellipseRibbon", (w, h, adjustments) => {
  var _a, _b, _c;
  const adj1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const adj2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4;
  const adj3 = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 12500;
  const a1 = Math.max(0, Math.min(adj1, 1e5));
  const a2 = Math.max(25e3, Math.min(adj2, 75e3));
  const q10 = 1e5 - a1;
  const q11 = q10 / 2;
  const q12 = a1 - q11;
  const minAdj3 = Math.max(0, q12);
  const a3 = Math.max(minAdj3, Math.min(adj3, a1));
  const dx2 = w * a2 / 2e5;
  const x2 = w / 2 - dx2;
  const x3 = x2 + w / 8;
  const x4 = w - x3;
  const x5 = w - x2;
  const x6 = w - w / 8;
  const dy1 = h * a3 / 1e5;
  const f1 = w > 0 ? 4 * dy1 / w : 0;
  const parab = (x) => f1 * (x - x * x / w);
  const y1 = parab(x3);
  const cx1 = x3 / 2;
  const cy1 = f1 * cx1;
  const cx2 = w - cx1;
  const q1 = h * a1 / 1e5;
  const dy3 = q1 - dy1;
  const q5 = parab(x2);
  const y3 = q5 + dy3;
  const q6 = dy1 + dy3 - y3;
  const q7 = q6 + dy1;
  const cy3 = q7 + dy3;
  const rh = h - q1;
  const q8 = dy1 * 14 / 16;
  const y2 = (q8 + rh) / 2;
  const y5 = q5 + rh;
  const y6 = y3 + rh;
  const cx4 = x2 / 2;
  const cy4 = f1 * cx4 + rh;
  const cx5 = w - cx4;
  const cy6 = cy3 + rh;
  const y7 = y1 + dy3;
  const cy7 = q1 + q1 - y7;
  const hc = w / 2;
  const wd8 = w / 8;
  const body = [
    "M0,0",
    `Q${cx1},${cy1} ${x3},${y1}`,
    `L${x2},${y3}`,
    `Q${hc},${cy3} ${x5},${y3}`,
    `L${x4},${y1}`,
    `Q${cx2},${cy1} ${w},0`,
    `L${x6},${y2}`,
    `L${w},${rh}`,
    `Q${cx5},${cy4} ${x5},${y5}`,
    `L${x5},${y6}`,
    `Q${hc},${cy6} ${x2},${y6}`,
    `L${x2},${y5}`,
    `Q${cx4},${cy4} 0,${rh}`,
    `L${wd8},${y2}`,
    "Z"
  ].join(" ");
  const shadow = [
    `M${x3},${y7}`,
    `L${x3},${y1}`,
    `L${x2},${y3}`,
    `Q${hc},${cy3} ${x5},${y3}`,
    `L${x4},${y1}`,
    `L${x4},${y7}`,
    `Q${hc},${cy7} ${x3},${y7}`,
    "Z"
  ].join(" ");
  const outline = [
    "M0,0",
    `Q${cx1},${cy1} ${x3},${y1}`,
    `L${x2},${y3}`,
    `Q${hc},${cy3} ${x5},${y3}`,
    `L${x4},${y1}`,
    `Q${cx2},${cy1} ${w},0`,
    `L${x6},${y2}`,
    `L${w},${rh}`,
    `Q${cx5},${cy4} ${x5},${y5}`,
    `L${x5},${y6}`,
    `Q${hc},${cy6} ${x2},${y6}`,
    `L${x2},${y5}`,
    `Q${cx4},${cy4} 0,${rh}`,
    `L${wd8},${y2}`,
    "Z",
    `M${x2},${y5} L${x2},${y3}`,
    `M${x5},${y3} L${x5},${y5}`,
    `M${x3},${y1} L${x3},${y7}`,
    `M${x4},${y7} L${x4},${y1}`
  ].join(" ");
  return [
    { d: body, fill: "norm", stroke: false },
    { d: shadow, fill: "darkenLess", stroke: false },
    { d: outline, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("ellipseRibbon2", (w, h, adjustments) => {
  var _a, _b, _c;
  const adj1 = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 25e3;
  const adj2 = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4;
  const adj3 = (_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 12500;
  const a1 = Math.max(0, Math.min(adj1, 1e5));
  const a2 = Math.max(25e3, Math.min(adj2, 75e3));
  const q10 = 1e5 - a1;
  const q11 = q10 / 2;
  const q12 = a1 - q11;
  const minAdj3 = Math.max(0, q12);
  const a3 = Math.max(minAdj3, Math.min(adj3, a1));
  const b = h;
  const dx2 = w * a2 / 2e5;
  const x2 = w / 2 - dx2;
  const x3 = x2 + w / 8;
  const x4 = w - x3;
  const x5 = w - x2;
  const x6 = w - w / 8;
  const dy1 = h * a3 / 1e5;
  const f1 = w > 0 ? 4 * dy1 / w : 0;
  const u1 = f1 * (x3 - x3 * x3 / w);
  const y1 = b - u1;
  const cx1 = x3 / 2;
  const cu1 = f1 * cx1;
  const cy1 = b - cu1;
  const cx2 = w - cx1;
  const q1 = h * a1 / 1e5;
  const dy3 = q1 - dy1;
  const q5 = f1 * (x2 - x2 * x2 / w);
  const u3 = q5 + dy3;
  const y3 = b - u3;
  const q6 = dy1 + dy3 - u3;
  const q7 = q6 + dy1;
  const cu3 = q7 + dy3;
  const cy3 = b - cu3;
  const rh = b - q1;
  const q8 = dy1 * 14 / 16;
  const u2 = (q8 + rh) / 2;
  const y2 = b - u2;
  const u5 = q5 + rh;
  const y5 = b - u5;
  const u6 = u3 + rh;
  const y6 = b - u6;
  const cx4 = x2 / 2;
  const cu4 = f1 * cx4 + rh;
  const cy4 = b - cu4;
  const cx5 = w - cx4;
  const cu6 = cu3 + rh;
  const cy6 = b - cu6;
  const u7 = u1 + dy3;
  const y7 = b - u7;
  const cu7 = q1 + q1 - u7;
  const cy7 = b - cu7;
  const hc = w / 2;
  const wd8 = w / 8;
  const body = [
    `M0,${b}`,
    `Q${cx1},${cy1} ${x3},${y1}`,
    `L${x2},${y3}`,
    `Q${hc},${cy3} ${x5},${y3}`,
    `L${x4},${y1}`,
    `Q${cx2},${cy1} ${w},${b}`,
    `L${x6},${y2}`,
    `L${w},${q1}`,
    `Q${cx5},${cy4} ${x5},${y5}`,
    `L${x5},${y6}`,
    `Q${hc},${cy6} ${x2},${y6}`,
    `L${x2},${y5}`,
    `Q${cx4},${cy4} 0,${q1}`,
    `L${wd8},${y2}`,
    "Z"
  ].join(" ");
  const shadow = [
    `M${x3},${y7}`,
    `L${x3},${y1}`,
    `L${x2},${y3}`,
    `Q${hc},${cy3} ${x5},${y3}`,
    `L${x4},${y1}`,
    `L${x4},${y7}`,
    `Q${hc},${cy7} ${x3},${y7}`,
    "Z"
  ].join(" ");
  const outline = [
    `M0,${b}`,
    `L${wd8},${y2}`,
    `L0,${q1}`,
    `Q${cx4},${cy4} ${x2},${y5}`,
    `L${x2},${y6}`,
    `Q${hc},${cy6} ${x5},${y6}`,
    `L${x5},${y5}`,
    `Q${cx5},${cy4} ${w},${q1}`,
    `L${x6},${y2}`,
    `L${w},${b}`,
    `Q${cx2},${cy1} ${x4},${y1}`,
    `L${x5},${y3}`,
    `Q${hc},${cy3} ${x2},${y3}`,
    `L${x3},${y1}`,
    `Q${cx1},${cy1} 0,${b}`,
    "Z",
    `M${x2},${y3} L${x2},${y5}`,
    `M${x5},${y5} L${x5},${y3}`,
    `M${x3},${y7} L${x3},${y1}`,
    `M${x4},${y1} L${x4},${y7}`
  ].join(" ");
  return [
    { d: body, fill: "norm", stroke: false },
    { d: shadow, fill: "darkenLess", stroke: false },
    { d: outline, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("smileyFace", (w, h, adjustments) => {
  var _a;
  const wd2 = w / 2;
  const hd2 = h / 2;
  const hc = w / 2;
  const vc = h / 2;
  const rawAdj = (_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 4653;
  const a = Math.max(-4653, Math.min(rawAdj, 4653));
  const x2 = w * 6215 / 21600;
  const x3 = w * 13135 / 21600;
  const y1 = h * 7570 / 21600;
  const wR = w * 1125 / 21600;
  const hR = h * 1125 / 21600;
  const x1 = w * 4969 / 21699;
  const x4 = w * 16640 / 21600;
  const y3 = h * 16515 / 21600;
  const dy2 = h * a / 1e5;
  const y2 = y3 - dy2;
  const y4 = y3 + dy2;
  const dy3 = h * a / 5e4;
  const y5 = y4 + dy3;
  const face = `M${w},${vc} A${wd2},${hd2} 0 1,1 0,${vc} A${wd2},${hd2} 0 1,1 ${w},${vc} Z`;
  const leftEye = `M${(x2 + wR).toFixed(2)},${y1.toFixed(2)} A${wR.toFixed(2)},${hR.toFixed(2)} 0 1,1 ${(x2 - wR).toFixed(2)},${y1.toFixed(2)} A${wR.toFixed(2)},${hR.toFixed(2)} 0 1,1 ${(x2 + wR).toFixed(2)},${y1.toFixed(2)} Z`;
  const rightEye = `M${(x3 + wR).toFixed(2)},${y1.toFixed(2)} A${wR.toFixed(2)},${hR.toFixed(2)} 0 1,1 ${(x3 - wR).toFixed(2)},${y1.toFixed(2)} A${wR.toFixed(2)},${hR.toFixed(2)} 0 1,1 ${(x3 + wR).toFixed(2)},${y1.toFixed(2)} Z`;
  const smile = `M${x1.toFixed(2)},${y2.toFixed(2)} Q${hc.toFixed(2)},${y5.toFixed(2)} ${x4.toFixed(2)},${y2.toFixed(2)}`;
  const outline = `M${w},${vc} A${wd2},${hd2} 0 1,1 0,${vc} A${wd2},${hd2} 0 1,1 ${w},${vc} Z`;
  return [
    { d: face, fill: "norm", stroke: false },
    { d: `${leftEye} ${rightEye}`, fill: "darkenLess", stroke: false },
    { d: smile, fill: "none", stroke: true },
    { d: outline, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("foldedCorner", (w, h, adjustments) => {
  const a = adj(adjustments, "adj", 16667);
  const fold = Math.min(w, h) * a * 0.7;
  const body = `M0,0 L${w},0 L${w},${h - fold} L${w - fold},${h} L0,${h} Z`;
  const foldFace = `M${w - fold},${h} L${w - fold},${h - fold} L${w},${h - fold} Z`;
  const crease = `M${w - fold},${h} L${w - fold},${h - fold}`;
  return [
    { d: body, fill: "norm", stroke: true },
    { d: foldFace, fill: "darkenLess", stroke: false },
    { d: crease, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("can", (w, h, adjustments) => {
  var _a;
  const ss = Math.min(w, h);
  const maxAdj = 5e4 * h / ss;
  const a = Math.min(Math.max((_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 25e3, 0), maxAdj);
  const y1 = ss * a / 2e5;
  const y3 = h - y1;
  const wd2 = w / 2;
  const arcSeg = (curX, curY, wR, hR, stDeg, swDeg) => {
    const stRad = stDeg * Math.PI / 180;
    const endRad = (stDeg + swDeg) * Math.PI / 180;
    const cx = curX - wR * Math.cos(stRad);
    const cy = curY - hR * Math.sin(stRad);
    const endX = cx + wR * Math.cos(endRad);
    const endY = cy + hR * Math.sin(endRad);
    const largeArc = Math.abs(swDeg) > 180 ? 1 : 0;
    const sweep = swDeg > 0 ? 1 : 0;
    return { endX, endY, svg: `A${wR},${hR} 0 ${largeArc},${sweep} ${endX},${endY}` };
  };
  const a1 = arcSeg(0, y1, wd2, y1, 180, -180);
  const a2 = arcSeg(w, y3, wd2, y1, 0, 180);
  const body = `M0,${y1} ${a1.svg} L${w},${y3} ${a2.svg} Z`;
  const a3 = arcSeg(0, y1, wd2, y1, 180, 180);
  const a4 = arcSeg(a3.endX, a3.endY, wd2, y1, 0, 180);
  const topFace = `M0,${y1} ${a3.svg} ${a4.svg} Z`;
  const a5 = arcSeg(w, y1, wd2, y1, 0, 180);
  const a6 = arcSeg(a5.endX, a5.endY, wd2, y1, 180, 180);
  const a7 = arcSeg(w, y3, wd2, y1, 0, 180);
  const outline = `M${w},${y1} ${a5.svg} ${a6.svg} L${w},${y3} ${a7.svg} L0,${y1}`;
  return [
    { d: body, fill: "norm", stroke: false },
    { d: topFace, fill: "lighten", stroke: false },
    { d: outline, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("curvedrightarrow", (w, h, adjustments) => buildCurvedArrowMultiPath("curvedRightArrow", w, h, adjustments));
multiPathPresets.set("curvedleftarrow", (w, h, adjustments) => buildCurvedArrowMultiPath("curvedLeftArrow", w, h, adjustments));
multiPathPresets.set("curveduparrow", (w, h, adjustments) => buildCurvedVerticalArrowMultiPath("curvedUpArrow", w, h, adjustments));
multiPathPresets.set("curveddownarrow", (w, h, adjustments) => buildCurvedVerticalArrowMultiPath("curvedDownArrow", w, h, adjustments));
multiPathPresets.set("bordercallout1", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 112500) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -38333) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("accentcallout1", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 112500) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -38333) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    { d: `M${x1},0 L${x1},${h}`, fill: "none", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("accentcallout2", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e, _f;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18750) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -16667) / 1e5;
  const y3 = h * ((_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 112500) / 1e5;
  const x3 = w * ((_f = adjustments == null ? void 0 : adjustments.get("adj6")) != null ? _f : -46667) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    { d: `M${x1},0 L${x1},${h}`, fill: "none", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2} L${x3},${y3}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("accentcallout3", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18750) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -16667) / 1e5;
  const y3 = h * ((_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 1e5) / 1e5;
  const x3 = w * ((_f = adjustments == null ? void 0 : adjustments.get("adj6")) != null ? _f : -16667) / 1e5;
  const y4 = h * ((_g = adjustments == null ? void 0 : adjustments.get("adj7")) != null ? _g : 112963) / 1e5;
  const x4 = w * ((_h = adjustments == null ? void 0 : adjustments.get("adj8")) != null ? _h : -8333) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    { d: `M${x1},0 L${x1},${h}`, fill: "none", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("callout1", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 112500) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -38333) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    { d: `M${x1},${y1} L${x2},${y2}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("callout2", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e, _f;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18750) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -16667) / 1e5;
  const y3 = h * ((_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 112500) / 1e5;
  const x3 = w * ((_f = adjustments == null ? void 0 : adjustments.get("adj6")) != null ? _f : -46667) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    { d: `M${x1},${y1} L${x2},${y2} L${x3},${y3}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("callout3", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18750) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -16667) / 1e5;
  const y3 = h * ((_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 1e5) / 1e5;
  const x3 = w * ((_f = adjustments == null ? void 0 : adjustments.get("adj6")) != null ? _f : -16667) / 1e5;
  const y4 = h * ((_g = adjustments == null ? void 0 : adjustments.get("adj7")) != null ? _g : 112963) / 1e5;
  const x4 = w * ((_h = adjustments == null ? void 0 : adjustments.get("adj8")) != null ? _h : -8333) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    { d: `M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("bordercallout2", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e, _f;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18750) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -16667) / 1e5;
  const y3 = h * ((_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 112500) / 1e5;
  const x3 = w * ((_f = adjustments == null ? void 0 : adjustments.get("adj6")) != null ? _f : -46667) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2} L${x3},${y3}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("bordercallout3", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18750) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -16667) / 1e5;
  const y3 = h * ((_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 1e5) / 1e5;
  const x3 = w * ((_f = adjustments == null ? void 0 : adjustments.get("adj6")) != null ? _f : -16667) / 1e5;
  const y4 = h * ((_g = adjustments == null ? void 0 : adjustments.get("adj7")) != null ? _g : 112963) / 1e5;
  const x4 = w * ((_h = adjustments == null ? void 0 : adjustments.get("adj8")) != null ? _h : -8333) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("accentbordercallout1", (w, h, adjustments) => {
  var _a, _b, _c, _d;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 112500) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -38333) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: true },
    { d: `M${x1},0 L${x1},${h}`, fill: "none", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("accentbordercallout2", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e, _f;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18750) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -16667) / 1e5;
  const y3 = h * ((_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 112500) / 1e5;
  const x3 = w * ((_f = adjustments == null ? void 0 : adjustments.get("adj6")) != null ? _f : -46667) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: true },
    { d: `M${x1},0 L${x1},${h}`, fill: "none", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2} L${x3},${y3}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("accentbordercallout3", (w, h, adjustments) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const y1 = h * ((_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 18750) / 1e5;
  const x1 = w * ((_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : -8333) / 1e5;
  const y2 = h * ((_c = adjustments == null ? void 0 : adjustments.get("adj3")) != null ? _c : 18750) / 1e5;
  const x2 = w * ((_d = adjustments == null ? void 0 : adjustments.get("adj4")) != null ? _d : -16667) / 1e5;
  const y3 = h * ((_e = adjustments == null ? void 0 : adjustments.get("adj5")) != null ? _e : 1e5) / 1e5;
  const x3 = w * ((_f = adjustments == null ? void 0 : adjustments.get("adj6")) != null ? _f : -16667) / 1e5;
  const y4 = h * ((_g = adjustments == null ? void 0 : adjustments.get("adj7")) != null ? _g : 112963) / 1e5;
  const x4 = w * ((_h = adjustments == null ? void 0 : adjustments.get("adj8")) != null ? _h : -8333) / 1e5;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: true },
    { d: `M${x1},0 L${x1},${h}`, fill: "none", stroke: true },
    { d: `M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("chartx", (w, h) => {
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    { d: `M0,0 L${w},${h} M${w},0 L0,${h}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("chartplus", (w, h) => {
  const cx = w / 2;
  const cy = h / 2;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    { d: `M${cx},0 L${cx},${h} M0,${cy} L${w},${cy}`, fill: "none", stroke: true }
  ];
});
multiPathPresets.set("chartstar", (w, h) => {
  const cx = w / 2;
  return [
    { d: `M0,0 L${w},0 L${w},${h} L0,${h} Z`, fill: "norm", stroke: false },
    {
      d: `M0,0 L${w},${h} M${w},0 L0,${h} M${cx},0 L${cx},${h}`,
      fill: "none",
      stroke: true
    }
  ];
});
multiPathPresets.set("flowchartmagneticdisk", (w, h) => {
  const ry = h / 6;
  const bodyTop = ry;
  const bodyBottom = h - ry;
  return [
    {
      // Vertical cylinder body: top ellipse + sides + bottom ellipse.
      d: [
        `M0,${bodyTop}`,
        `A${w / 2},${ry} 0 1,1 ${w},${bodyTop}`,
        `L${w},${bodyBottom}`,
        `A${w / 2},${ry} 0 1,1 0,${bodyBottom}`,
        `L0,${bodyTop}`,
        "Z"
      ].join(" "),
      fill: "norm",
      stroke: true
    },
    {
      // Top-ellipse front-edge curve: the visible "lip" of the
      // cylinder lid. Stroke-only — Word draws this as a line, not a
      // filled region.
      d: `M${w},${bodyTop} A${w / 2},${ry} 0 1,1 0,${bodyTop}`,
      fill: "none",
      stroke: true
    }
  ];
});
multiPathPresets.set("flowchartmagneticdrum", (w, h) => {
  const x1 = w / 6;
  const x2 = w * 5 / 6;
  const ry = h / 2;
  return [
    {
      d: [
        `M${x1},0`,
        `L${x2},0`,
        `A${x1},${ry} 0 0,1 ${x2},${h}`,
        `L${x1},${h}`,
        `A${x1},${ry} 0 0,1 ${x1},0`,
        "Z"
      ].join(" "),
      fill: "norm",
      stroke: true
    },
    {
      // Right-cap front-edge curve.
      d: `M${x2},${h} A${x1},${ry} 0 0,1 ${x2},0`,
      fill: "none",
      stroke: true
    }
  ];
});
function ooArcTo(curX, curY, wR, hR, stAngDeg, swAngDeg) {
  const stRad = stAngDeg * Math.PI / 180;
  const cx = curX - wR * Math.cos(stRad);
  const cy = curY - hR * Math.sin(stRad);
  const endRad = (stAngDeg + swAngDeg) * Math.PI / 180;
  const ex = cx + wR * Math.cos(endRad);
  const ey = cy + hR * Math.sin(endRad);
  const absSweep = Math.abs(swAngDeg);
  const largeArc = absSweep > 180 ? 1 : 0;
  const sweepFlag = swAngDeg >= 0 ? 1 : 0;
  return { svg: `A${wR},${hR} 0 ${largeArc},${sweepFlag} ${ex},${ey}`, x: ex, y: ey };
}
multiPathPresets.set("ribbon", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 16667;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4;
  const a1 = Math.min(Math.max(adj1Raw, 0), 33333);
  const a2 = Math.min(Math.max(adj2Raw, 25e3), 75e3);
  const hc = w / 2;
  const wd8 = w / 8;
  const wd32 = w / 32;
  const x10 = w - wd8;
  const dx2 = w * a2 / 2e5;
  const x2 = hc - dx2;
  const x9 = hc + dx2;
  const x3 = x2 + wd32;
  const x8 = x9 - wd32;
  const x5 = x2 + wd8;
  const x6 = x9 - wd8;
  const x4 = x5 - wd32;
  const x7 = x6 + wd32;
  const y1 = h * a1 / 2e5;
  const y2 = h * a1 / 1e5;
  const y4 = h - y2;
  const y3 = y4 / 2;
  const hR = h * a1 / 4e5;
  const y5 = h - hR;
  const y6 = y2 - hR;
  let cx, cy, arc;
  const p1 = [];
  cx = 0;
  cy = 0;
  p1.push(`M${0},${0}`);
  p1.push(`L${x4},${0}`);
  cx = x4;
  cy = 0;
  arc = ooArcTo(cx, cy, wd32, hR, 270, 180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x3},${y1}`);
  cx = x3;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 270, -180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x8},${y2}`);
  cx = x8;
  cy = y2;
  arc = ooArcTo(cx, cy, wd32, hR, 90, -180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x7},${y1}`);
  cx = x7;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 90, 180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${w},${0}`);
  p1.push(`L${x10},${y3}`);
  p1.push(`L${w},${y4}`);
  p1.push(`L${x9},${y4}`);
  p1.push(`L${x9},${y5}`);
  cx = x9;
  cy = y5;
  arc = ooArcTo(cx, cy, wd32, hR, 0, 90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x3},${h}`);
  cx = x3;
  cy = h;
  arc = ooArcTo(cx, cy, wd32, hR, 90, 90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x2},${y4}`);
  p1.push(`L${0},${y4}`);
  p1.push(`L${wd8},${y3}`);
  p1.push("Z");
  const p2 = [];
  cx = x5;
  cy = hR;
  p2.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, wd32, hR, 0, 90);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p2.push(`L${x3},${y1}`);
  cx = x3;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 270, -180);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p2.push(`L${x5},${y2}`);
  p2.push("Z");
  cx = x6;
  cy = hR;
  p2.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, wd32, hR, 180, -90);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p2.push(`L${x8},${y1}`);
  cx = x8;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 270, 180);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p2.push(`L${x6},${y2}`);
  p2.push("Z");
  const p3 = [];
  cx = 0;
  cy = 0;
  p3.push(`M${0},${0}`);
  p3.push(`L${x4},${0}`);
  cx = x4;
  cy = 0;
  arc = ooArcTo(cx, cy, wd32, hR, 270, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x3},${y1}`);
  cx = x3;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 270, -180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x8},${y2}`);
  cx = x8;
  cy = y2;
  arc = ooArcTo(cx, cy, wd32, hR, 90, -180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x7},${y1}`);
  cx = x7;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 90, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${w},${0}`);
  p3.push(`L${x10},${y3}`);
  p3.push(`L${w},${y4}`);
  p3.push(`L${x9},${y4}`);
  p3.push(`L${x9},${y5}`);
  cx = x9;
  cy = y5;
  arc = ooArcTo(cx, cy, wd32, hR, 0, 90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x3},${h}`);
  cx = x3;
  cy = h;
  arc = ooArcTo(cx, cy, wd32, hR, 90, 90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x2},${y4}`);
  p3.push(`L${0},${y4}`);
  p3.push(`L${wd8},${y3}`);
  p3.push("Z");
  p3.push(`M${x5},${hR} L${x5},${y2}`);
  p3.push(`M${x6},${y2} L${x6},${hR}`);
  p3.push(`M${x2},${y4} L${x2},${y6}`);
  p3.push(`M${x9},${y6} L${x9},${y4}`);
  return [
    { d: p1.join(" "), fill: "norm", stroke: false },
    { d: p2.join(" "), fill: "darkenLess", stroke: false },
    { d: p3.join(" "), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("ribbon2", (w, h, adjustments) => {
  var _a, _b;
  const adj1Raw = (_a = adjustments == null ? void 0 : adjustments.get("adj1")) != null ? _a : 16667;
  const adj2Raw = (_b = adjustments == null ? void 0 : adjustments.get("adj2")) != null ? _b : 5e4;
  const a1 = Math.min(Math.max(adj1Raw, 0), 33333);
  const a2 = Math.min(Math.max(adj2Raw, 25e3), 75e3);
  const hc = w / 2;
  const wd8 = w / 8;
  const wd32 = w / 32;
  const x10 = w - wd8;
  const dx2 = w * a2 / 2e5;
  const x2 = hc - dx2;
  const x9 = hc + dx2;
  const x3 = x2 + wd32;
  const x8 = x9 - wd32;
  const x5 = x2 + wd8;
  const x6 = x9 - wd8;
  const x4 = x5 - wd32;
  const x7 = x6 + wd32;
  const dy1 = h * a1 / 2e5;
  const y1 = h - dy1;
  const dy2 = h * a1 / 1e5;
  const y2 = h - dy2;
  const y4 = dy2;
  const y3 = (y4 + h) / 2;
  const hR = h * a1 / 4e5;
  const y6 = h - hR;
  const y7 = y1 - hR;
  let cx, cy, arc;
  const p1 = [];
  p1.push(`M${0},${h}`);
  p1.push(`L${x4},${h}`);
  cx = x4;
  cy = h;
  arc = ooArcTo(cx, cy, wd32, hR, 90, -180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x3},${y1}`);
  cx = x3;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 90, 180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x8},${y2}`);
  cx = x8;
  cy = y2;
  arc = ooArcTo(cx, cy, wd32, hR, 270, 180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x7},${y1}`);
  cx = x7;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 270, -180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${w},${h}`);
  p1.push(`L${x10},${y3}`);
  p1.push(`L${w},${y4}`);
  p1.push(`L${x9},${y4}`);
  p1.push(`L${x9},${hR}`);
  cx = x9;
  cy = hR;
  arc = ooArcTo(cx, cy, wd32, hR, 0, -90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x3},${0}`);
  cx = x3;
  cy = 0;
  arc = ooArcTo(cx, cy, wd32, hR, 270, -90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x2},${y4}`);
  p1.push(`L${0},${y4}`);
  p1.push(`L${wd8},${y3}`);
  p1.push("Z");
  const p2 = [];
  cx = x5;
  cy = y6;
  p2.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, wd32, hR, 0, -90);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p2.push(`L${x3},${y1}`);
  cx = x3;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 90, 180);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p2.push(`L${x5},${y2}`);
  p2.push("Z");
  cx = x6;
  cy = y6;
  p2.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, wd32, hR, 180, 90);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p2.push(`L${x8},${y1}`);
  cx = x8;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 90, -180);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p2.push(`L${x6},${y2}`);
  p2.push("Z");
  const p3 = [];
  p3.push(`M${0},${h}`);
  p3.push(`L${wd8},${y3}`);
  p3.push(`L${0},${y4}`);
  p3.push(`L${x2},${y4}`);
  p3.push(`L${x2},${hR}`);
  cx = x2;
  cy = hR;
  arc = ooArcTo(cx, cy, wd32, hR, 180, 90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x8},${0}`);
  cx = x8;
  cy = 0;
  arc = ooArcTo(cx, cy, wd32, hR, 270, 90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x9},${y4}`);
  p3.push(`L${w},${y4}`);
  p3.push(`L${x10},${y3}`);
  p3.push(`L${w},${h}`);
  p3.push(`L${x7},${h}`);
  cx = x7;
  cy = h;
  arc = ooArcTo(cx, cy, wd32, hR, 90, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x8},${y1}`);
  cx = x8;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 90, -180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x3},${y2}`);
  cx = x3;
  cy = y2;
  arc = ooArcTo(cx, cy, wd32, hR, 270, -180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x4},${y1}`);
  cx = x4;
  cy = y1;
  arc = ooArcTo(cx, cy, wd32, hR, 270, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push("Z");
  p3.push(`M${x5},${y2} L${x5},${y6}`);
  p3.push(`M${x6},${y6} L${x6},${y2}`);
  p3.push(`M${x2},${y7} L${x2},${y4}`);
  p3.push(`M${x9},${y4} L${x9},${y7}`);
  return [
    { d: p1.join(" "), fill: "norm", stroke: false },
    { d: p2.join(" "), fill: "darkenLess", stroke: false },
    { d: p3.join(" "), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("horizontalscroll", (w, h, adjustments) => {
  var _a;
  const adjVal = (_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 12500;
  const a = Math.min(Math.max(adjVal, 0), 25e3);
  const ss = Math.min(w, h);
  const ch = ss * a / 1e5;
  const ch2 = ch / 2;
  const ch4 = ch / 4;
  const y3 = ch + ch2;
  const y4 = ch + ch;
  const y6 = h - ch;
  const y7 = h - ch2;
  const y5 = y6 - ch2;
  const x3 = w - ch;
  const x4 = w - ch2;
  const p1 = [];
  let cx, cy;
  cx = w;
  cy = ch2;
  p1.push(`M${cx},${cy}`);
  let arc = ooArcTo(cx, cy, ch2, ch2, 0, 90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x4},${ch2}`);
  arc = ooArcTo(x4, ch2, ch4, ch4, 0, 180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x3},${ch}`);
  p1.push(`L${ch2},${ch}`);
  cx = ch2;
  cy = ch;
  arc = ooArcTo(cx, cy, ch2, ch2, 270, -90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${0},${y7}`);
  cx = 0;
  cy = y7;
  arc = ooArcTo(cx, cy, ch2, ch2, 180, -180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${ch},${y6}`);
  p1.push(`L${x4},${y6}`);
  cx = x4;
  cy = y6;
  arc = ooArcTo(cx, cy, ch2, ch2, 90, -90);
  p1.push(arc.svg);
  p1.push("Z");
  cx = ch2;
  cy = y4;
  p1.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, ch2, ch2, 90, -90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  arc = ooArcTo(cx, cy, ch4, ch4, 0, -180);
  p1.push(arc.svg);
  p1.push("Z");
  const p2 = [];
  cx = ch2;
  cy = y4;
  p2.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, ch2, ch2, 90, -90);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  arc = ooArcTo(cx, cy, ch4, ch4, 0, -180);
  p2.push(arc.svg);
  p2.push("Z");
  cx = x4;
  cy = ch;
  p2.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, ch2, ch2, 90, -270);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  arc = ooArcTo(cx, cy, ch4, ch4, 180, -180);
  p2.push(arc.svg);
  p2.push("Z");
  const p3 = [];
  cx = 0;
  cy = y3;
  p3.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, ch2, ch2, 180, 90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x3},${ch}`);
  p3.push(`L${x3},${ch2}`);
  cx = x3;
  cy = ch2;
  arc = ooArcTo(cx, cy, ch2, ch2, 180, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${w},${y5}`);
  cx = w;
  cy = y5;
  arc = ooArcTo(cx, cy, ch2, ch2, 0, 90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${ch},${y6}`);
  p3.push(`L${ch},${y7}`);
  cx = ch;
  cy = y7;
  arc = ooArcTo(cx, cy, ch2, ch2, 0, 180);
  p3.push(arc.svg);
  p3.push("Z");
  p3.push(`M${x3},${ch}`);
  p3.push(`L${x4},${ch}`);
  cx = x4;
  cy = ch;
  arc = ooArcTo(cx, cy, ch2, ch2, 90, -90);
  p3.push(arc.svg);
  p3.push(`M${x4},${ch}`);
  p3.push(`L${x4},${ch2}`);
  cx = x4;
  cy = ch2;
  arc = ooArcTo(cx, cy, ch4, ch4, 0, 180);
  p3.push(arc.svg);
  p3.push(`M${ch2},${y4}`);
  p3.push(`L${ch2},${y3}`);
  cx = ch2;
  cy = y3;
  arc = ooArcTo(cx, cy, ch4, ch4, 180, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  arc = ooArcTo(cx, cy, ch2, ch2, 0, 180);
  p3.push(arc.svg);
  p3.push(`M${ch},${y3}`);
  p3.push(`L${ch},${y6}`);
  return [
    { d: p1.join(" "), fill: "norm", stroke: false },
    { d: p2.join(" "), fill: "darkenLess", stroke: false },
    { d: p3.join(" "), fill: "none", stroke: true }
  ];
});
multiPathPresets.set("verticalscroll", (w, h, adjustments) => {
  var _a;
  const adjVal = (_a = adjustments == null ? void 0 : adjustments.get("adj")) != null ? _a : 12500;
  const a = Math.min(Math.max(adjVal, 0), 25e3);
  const ss = Math.min(w, h);
  const ch = ss * a / 1e5;
  const ch2 = ch / 2;
  const ch4 = ch / 4;
  const x3 = ch + ch2;
  const x4 = ch + ch;
  const x6 = w - ch;
  const x7 = w - ch2;
  const _x5 = x6 - ch2;
  const y3 = h - ch;
  const y4 = h - ch2;
  const p1 = [];
  let cx, cy;
  cx = ch2;
  cy = h;
  p1.push(`M${cx},${cy}`);
  let arc = ooArcTo(cx, cy, ch2, ch2, 90, -90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${ch2},${y4}`);
  cx = ch2;
  cy = y4;
  arc = ooArcTo(cx, cy, ch4, ch4, 90, -180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${ch},${y3}`);
  p1.push(`L${ch},${ch2}`);
  cx = ch;
  cy = ch2;
  arc = ooArcTo(cx, cy, ch2, ch2, 180, 90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x7},${0}`);
  cx = x7;
  cy = 0;
  arc = ooArcTo(cx, cy, ch2, ch2, 270, 180);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p1.push(`L${x6},${ch}`);
  p1.push(`L${x6},${y4}`);
  cx = x6;
  cy = y4;
  arc = ooArcTo(cx, cy, ch2, ch2, 0, 90);
  p1.push(arc.svg);
  p1.push("Z");
  cx = x4;
  cy = ch2;
  p1.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, ch2, ch2, 0, 90);
  p1.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  arc = ooArcTo(cx, cy, ch4, ch4, 90, 180);
  p1.push(arc.svg);
  p1.push("Z");
  const p2 = [];
  cx = x4;
  cy = ch2;
  p2.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, ch2, ch2, 0, 90);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  arc = ooArcTo(cx, cy, ch4, ch4, 90, 180);
  p2.push(arc.svg);
  p2.push("Z");
  cx = ch;
  cy = y4;
  p2.push(`M${cx},${cy}`);
  arc = ooArcTo(cx, cy, ch2, ch2, 0, 270);
  p2.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  arc = ooArcTo(cx, cy, ch4, ch4, 270, 180);
  p2.push(arc.svg);
  p2.push("Z");
  const p3 = [];
  cx = ch;
  cy = y3;
  p3.push(`M${cx},${cy}`);
  p3.push(`L${ch},${ch2}`);
  cx = ch;
  cy = ch2;
  arc = ooArcTo(cx, cy, ch2, ch2, 180, 90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x7},${0}`);
  cx = x7;
  cy = 0;
  arc = ooArcTo(cx, cy, ch2, ch2, 270, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x6},${ch}`);
  p3.push(`L${x6},${y4}`);
  cx = x6;
  cy = y4;
  arc = ooArcTo(cx, cy, ch2, ch2, 0, 90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${ch2},${h}`);
  cx = ch2;
  cy = h;
  arc = ooArcTo(cx, cy, ch2, ch2, 90, 180);
  p3.push(arc.svg);
  p3.push("Z");
  p3.push(`M${x3},${0}`);
  cx = x3;
  cy = 0;
  arc = ooArcTo(cx, cy, ch2, ch2, 270, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  arc = ooArcTo(cx, cy, ch4, ch4, 90, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${x4},${ch2}`);
  p3.push(`M${x6},${ch}`);
  p3.push(`L${x3},${ch}`);
  p3.push(`M${ch2},${y3}`);
  cx = ch2;
  cy = y3;
  arc = ooArcTo(cx, cy, ch4, ch4, 270, 180);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${ch},${y4}`);
  p3.push(`M${ch2},${h}`);
  cx = ch2;
  cy = h;
  arc = ooArcTo(cx, cy, ch2, ch2, 90, -90);
  p3.push(arc.svg);
  cx = arc.x;
  cy = arc.y;
  p3.push(`L${ch},${y3}`);
  return [
    { d: p1.join(" "), fill: "norm", stroke: false },
    { d: p2.join(" "), fill: "darkenLess", stroke: false },
    { d: p3.join(" "), fill: "none", stroke: true }
  ];
});
function getMultiPathPreset(shapeType, w, h, adjustments) {
  var _a;
  const key = shapeType.toLowerCase();
  const gen = (_a = multiPathPresets.get(key)) != null ? _a : multiPathPresets.get(shapeType);
  return gen ? gen(w, h, adjustments) : null;
}
var _warnedUnknownPresets = /* @__PURE__ */ new Set();
function getPresetShapePath(shapeType, w, h, adjustments) {
  var _a;
  if (shapeType === "textNoShape" || shapeType.toLowerCase() === "textnoshape") return "";
  const key = shapeType.toLowerCase();
  const generator = (_a = presetShapes.get(key)) != null ? _a : presetShapes.get(shapeType);
  if (generator) {
    return generator(w, h, adjustments);
  }
  if (!_warnedUnknownPresets.has(shapeType)) {
    _warnedUnknownPresets.add(shapeType);
    console.warn(`Unknown preset shape: "${shapeType}", falling back to rectangle`);
  }
  return `M0,0 L${w},0 L${w},${h} L0,${h} Z`;
}
presetShapes.set("smileyFace", (w, h) => {
  const wd2 = w / 2;
  const hd2 = h / 2;
  const x1 = w * 4969 / 21699;
  const x2 = w * 6215 / 21600;
  const x3 = w * 13135 / 21600;
  const x4 = w * 16640 / 21600;
  const y1 = h * 7570 / 21600;
  const y3 = h * 16515 / 21600;
  const adj2 = 4653;
  const dy2 = h * adj2 / 1e5;
  const dy3 = h * adj2 / 5e4;
  const y2 = y3 - dy2;
  const y4 = y3 + dy2;
  const y5 = y4 + dy3;
  const wR = w * 1125 / 21600;
  const hR = h * 1125 / 21600;
  const cX1 = x2 + wR;
  const cX2 = x3 + wR;
  const cY1 = y1;
  return `${shapeArc(cX1, cY1, wR, hR, 180, 540, false)} ${shapeArc(cX2, cY1, wR, hR, 180, 540, false)} M${x1},${y2} Q${wd2},${y5} ${x4},${y2} Q${wd2},${y5} ${x1},${y2} M0,${hd2} ${shapeArc(wd2, hd2, wd2, hd2, 180, 540, false).replace("M", "L")} Z`;
});
function actionButtonFrame(w, h) {
  return `M0,0 L${w},0 L${w},${h} L0,${h} Z`;
}
presetShapes.set("actionButtonHome", (w, h) => {
  const hc = w / 2;
  const vc = h / 2;
  const ss = Math.min(w, h);
  const dx2 = ss * 3 / 8;
  const g9 = vc - dx2;
  const g10 = vc + dx2;
  const g11 = hc - dx2;
  const g12 = hc + dx2;
  const g13 = ss * 3 / 4;
  const g14 = g13 / 16;
  const g15 = g13 / 8;
  const g16 = g13 * 3 / 16;
  const g17 = g13 * 5 / 16;
  const g18 = g13 * 7 / 16;
  const g19 = g13 * 9 / 16;
  const g20 = g13 * 11 / 16;
  const g21 = g13 * 3 / 4;
  const g22 = g13 * 13 / 16;
  const g23 = g13 * 7 / 8;
  const g24 = g9 + g14;
  const g25 = g9 + g16;
  const g26 = g9 + g17;
  const g27 = g9 + g21;
  const g28 = g11 + g15;
  const g29 = g11 + g18;
  const g30 = g11 + g19;
  const g31 = g11 + g20;
  const g32 = g11 + g22;
  const g33 = g11 + g23;
  return `${actionButtonFrame(w, h)} M${hc},${g9} L${g11},${vc} L${g28},${vc} L${g28},${g10} L${g33},${g10} L${g33},${vc} L${g12},${vc} L${g32},${g26} L${g32},${g24} L${g31},${g24} L${g31},${g25} Z M${g29},${g27} L${g30},${g27} L${g30},${g10} L${g29},${g10} Z`;
});
presetShapes.set("actionButtonInformation", (w, h) => {
  const hc = w / 2;
  const vc = h / 2;
  const ss = Math.min(w, h);
  const dx2 = ss * 3 / 8;
  const g9 = vc - dx2;
  const g11 = hc - dx2;
  const g13 = ss * 3 / 4;
  const g14 = g13 / 32;
  const g17 = g13 * 5 / 16;
  const g18 = g13 * 3 / 8;
  const g19 = g13 * 13 / 32;
  const g20 = g13 * 19 / 32;
  const g22 = g13 * 11 / 16;
  const g23 = g13 * 13 / 16;
  const g24 = g13 * 7 / 8;
  const g25 = g9 + g14;
  const g28 = g9 + g17;
  const g29 = g9 + g18;
  const g30 = g9 + g23;
  const g31 = g9 + g24;
  const g32 = g11 + g17;
  const g34 = g11 + g19;
  const g35 = g11 + g20;
  const g37 = g11 + g22;
  const g38 = g13 * 3 / 32;
  const cY1 = g9 + dx2;
  const cY2 = g25 + g38;
  return `${actionButtonFrame(w, h)} M${hc},${g9} ${shapeArc(hc, cY1, dx2, dx2, 270, 630, false).replace("M", "L")} Z M${hc},${g25} ${shapeArc(hc, cY2, g38, g38, 270, 630, false).replace("M", "L")} Z M${g32},${g28} L${g35},${g28} L${g35},${g30} L${g37},${g30} L${g37},${g31} L${g32},${g31} L${g32},${g30} L${g34},${g30} L${g34},${g29} L${g32},${g29} Z`;
});

// ../packages/drawing-ui/src/shapes/preset/trace-path.ts
var TOKEN_RE = /[MLAQCZ]|-?\d*\.?\d+(?:e[-+]?\d+)?/g;
function tracePath(ctx, d) {
  if (!d) return;
  const tokens = d.match(TOKEN_RE);
  if (!tokens) return;
  let i = 0;
  let cx = 0;
  let cy = 0;
  while (i < tokens.length) {
    const cmd = tokens[i++];
    switch (cmd) {
      case "M": {
        cx = Number(tokens[i++]);
        cy = Number(tokens[i++]);
        ctx.moveTo(cx, cy);
        break;
      }
      case "L": {
        cx = Number(tokens[i++]);
        cy = Number(tokens[i++]);
        ctx.lineTo(cx, cy);
        break;
      }
      case "Q": {
        const cpx = Number(tokens[i++]);
        const cpy = Number(tokens[i++]);
        cx = Number(tokens[i++]);
        cy = Number(tokens[i++]);
        ctx.quadraticCurveTo(cpx, cpy, cx, cy);
        break;
      }
      case "C": {
        const c1x = Number(tokens[i++]);
        const c1y = Number(tokens[i++]);
        const c2x = Number(tokens[i++]);
        const c2y = Number(tokens[i++]);
        cx = Number(tokens[i++]);
        cy = Number(tokens[i++]);
        ctx.bezierCurveTo(c1x, c1y, c2x, c2y, cx, cy);
        break;
      }
      case "A": {
        const rx = Number(tokens[i++]);
        const ry = Number(tokens[i++]);
        const xAxisRot = Number(tokens[i++]);
        const largeArc = Number(tokens[i++]);
        const sweep = Number(tokens[i++]);
        const ex = Number(tokens[i++]);
        const ey = Number(tokens[i++]);
        drawSvgArc(ctx, cx, cy, ex, ey, rx, ry, xAxisRot, largeArc !== 0, sweep !== 0);
        cx = ex;
        cy = ey;
        break;
      }
      case "Z": {
        ctx.closePath();
        break;
      }
      default:
        throw new Error(`tracePath: unsupported SVG path command "${cmd}"`);
    }
  }
}
function drawSvgArc(ctx, x1, y1, x2, y2, rx, ry, xAxisRotDeg, largeArc, sweep) {
  if (rx === 0 || ry === 0) {
    ctx.lineTo(x2, y2);
    return;
  }
  const rxAbs = Math.abs(rx);
  const ryAbs = Math.abs(ry);
  const phi = xAxisRotDeg * Math.PI / 180;
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const eps = Math.max(rxAbs, ryAbs) * 1e-9;
  if (Math.abs(x1 - x2) < eps && Math.abs(y1 - y2) < eps) {
    const mx = x1 + 2 * rxAbs * cosPhi;
    const my = y1 + 2 * rxAbs * sinPhi;
    drawSvgArc(ctx, x1, y1, mx, my, rxAbs, ryAbs, xAxisRotDeg, false, sweep);
    drawSvgArc(ctx, mx, my, x2, y2, rxAbs, ryAbs, xAxisRotDeg, false, sweep);
    return;
  }
  const dx = (x1 - x2) / 2;
  const dy = (y1 - y2) / 2;
  const x1p = cosPhi * dx + sinPhi * dy;
  const y1p = -sinPhi * dx + cosPhi * dy;
  let rxSq = rxAbs * rxAbs;
  let rySq = ryAbs * ryAbs;
  const x1pSq = x1p * x1p;
  const y1pSq = y1p * y1p;
  const radiiCheck = x1pSq / rxSq + y1pSq / rySq;
  let rxScaled = rxAbs;
  let ryScaled = ryAbs;
  if (radiiCheck > 1) {
    const s = Math.sqrt(radiiCheck);
    rxScaled = s * rxAbs;
    ryScaled = s * ryAbs;
    rxSq = rxScaled * rxScaled;
    rySq = ryScaled * ryScaled;
  }
  const sign = largeArc === sweep ? -1 : 1;
  const denom = rxSq * y1pSq + rySq * x1pSq;
  const numer = Math.max(0, rxSq * rySq - denom);
  const coef = sign * Math.sqrt(numer / denom);
  const cxp = coef * (rxScaled * y1p) / ryScaled;
  const cyp = coef * -(ryScaled * x1p) / rxScaled;
  const ccx = cosPhi * cxp - sinPhi * cyp + (x1 + x2) / 2;
  const ccy = sinPhi * cxp + cosPhi * cyp + (y1 + y2) / 2;
  const startAngle = angleBetween(1, 0, (x1p - cxp) / rxScaled, (y1p - cyp) / ryScaled);
  let deltaAngle = angleBetween(
    (x1p - cxp) / rxScaled,
    (y1p - cyp) / ryScaled,
    (-x1p - cxp) / rxScaled,
    (-y1p - cyp) / ryScaled
  );
  if (!sweep && deltaAngle > 0) deltaAngle -= 2 * Math.PI;
  if (sweep && deltaAngle < 0) deltaAngle += 2 * Math.PI;
  ctx.ellipse(ccx, ccy, rxScaled, ryScaled, phi, startAngle, startAngle + deltaAngle, !sweep);
}
function angleBetween(ux, uy, vx, vy) {
  const dot = ux * vx + uy * vy;
  const len = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
  let cosA = dot / len;
  if (cosA < -1) cosA = -1;
  if (cosA > 1) cosA = 1;
  const sign = ux * vy - uy * vx < 0 ? -1 : 1;
  return sign * Math.acos(cosA);
}

// ../packages/drawing-ui/src/shapes/preset/preset-geometry-rect.ts
var TINT_FACTORS = {
  darken: { toward: 0, ratio: 0.4 },
  darkenLess: { toward: 0, ratio: 0.2 },
  lighten: { toward: 255, ratio: 0.6 },
  lightenLess: { toward: 255, ratio: 0.4 }
};
function tintHex(baseHex, mode) {
  if (mode === "norm") return baseHex;
  const factor = TINT_FACTORS[mode];
  if (!factor) return baseHex;
  const hex = baseHex.startsWith("#") ? baseHex.slice(1) : baseHex;
  const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
  if (full.length !== 6 || /[^0-9a-fA-F]/.test(full)) return baseHex;
  const r = Number.parseInt(full.slice(0, 2), 16);
  const g = Number.parseInt(full.slice(2, 4), 16);
  const b = Number.parseInt(full.slice(4, 6), 16);
  const blend = (c) => Math.round(c + (factor.toward - c) * factor.ratio);
  const out = [blend(r), blend(g), blend(b)].map((c) => c.toString(16).padStart(2, "0")).join("");
  return `#${out}`;
}
var PresetGeometryRect = class _PresetGeometryRect extends Rect {
  constructor(key, props) {
    super(key, { ...props, fillRule: "evenodd" });
    __publicField(this, "presetGeometry");
    this.presetGeometry = props.presetGeometry;
  }
  static drawWith(ctx, props) {
    var _a, _b;
    const width = (_a = props.width) != null ? _a : 0;
    const height = (_b = props.height) != null ? _b : 0;
    ctx.save();
    if (props.strokeDashArray) {
      ctx.setLineDash(props.strokeDashArray);
    }
    const multi = getMultiPathPreset(props.presetGeometry, width, height);
    if (multi && multi.length > 0) {
      const baseFillRaw = props.fill;
      const baseFill = typeof baseFillRaw === "string" ? baseFillRaw : void 0;
      const instance2 = props;
      const savedFill2 = instance2._fill;
      try {
        for (const p of multi) {
          if (p.fill === "none") continue;
          const tintedFill = baseFill ? tintHex(baseFill, p.fill) : void 0;
          instance2._fill = tintedFill;
          ctx.beginPath();
          tracePath(ctx, p.d);
          Rect._renderPaintInOrder(ctx, props);
        }
        const strokeOnly = multi.filter((p) => p.fill === "none" && p.stroke);
        if (strokeOnly.length > 0) {
          instance2._fill = void 0;
          ctx.beginPath();
          for (const p of strokeOnly) {
            tracePath(ctx, p.d);
          }
          Rect._renderPaintInOrder(ctx, props);
        }
      } finally {
        instance2._fill = savedFill2;
      }
      ctx.restore();
      return;
    }
    ctx.beginPath();
    const d = getPresetShapePath(props.presetGeometry, width, height);
    tracePath(ctx, d);
    const isStrokeOnly = STROKE_ONLY_PRESETS.has(props.presetGeometry);
    const instance = props;
    const savedFill = instance._fill;
    if (isStrokeOnly) instance._fill = void 0;
    try {
      Rect._renderPaintInOrder(ctx, props);
    } finally {
      if (isStrokeOnly) instance._fill = savedFill;
    }
    ctx.restore();
  }
  _draw(ctx) {
    _PresetGeometryRect.drawWith(ctx, this);
  }
};

// ../packages/drawing-ui/src/services/drawing-image-clip.service.ts
var IMAGE_CLIP_SHAPE_PICKER_COMPONENT = "sheet.image-clip.shape.picker.component";
var DrawingImageClipService = class extends Disposable {
  constructor() {
    super();
    __publicField(this, "_clipDelegate", null);
    __publicField(this, "_canUseShapeClip$", new BehaviorSubject(false));
    __publicField(this, "canUseShapeClip$", this._canUseShapeClip$.asObservable());
  }
  setCanUseShapeClip(canUse) {
    this._canUseShapeClip$.next(canUse);
  }
  /**
   * Register a clip delegate that knows how to build shape clip paths.
   * Typically called by the pro-side plugin with a ShapeModel-based implementation.
   * @returns IDisposable to unregister the delegate
   */
  registerClipDelegate(delegate) {
    this._clipDelegate = delegate;
    return toDisposable(() => {
      if (this._clipDelegate === delegate) {
        this._clipDelegate = null;
      }
    });
  }
  applyShapeClip(ctx, prstGeom, width, height, adjustValues) {
    if (this._clipDelegate) {
      return this._clipDelegate(ctx, prstGeom, width, height, adjustValues);
    }
    return false;
  }
  dispose() {
    this._clipDelegate = null;
    this._canUseShapeClip$.complete();
    super.dispose();
  }
};

// ../packages/drawing-ui/src/services/drawing-render.service.ts
var ClippedRichText = class extends RichText {
  constructor(...args) {
    var _a, _b;
    super(...args);
    /** Box bounds captured at construction; see `transformForAngle` for why. */
    __publicField(this, "clipWidth");
    __publicField(this, "clipHeight");
    const props = args[2];
    this.clipWidth = (_a = props == null ? void 0 : props.width) != null ? _a : this.width;
    this.clipHeight = (_b = props == null ? void 0 : props.height) != null ? _b : this.height;
  }
  setClipSize(width, height) {
    this.clipWidth = width;
    this.clipHeight = height;
  }
  /**
   * `BaseObject.transformForAngle` rotates about the geometric center
   * `(this.width/2, this.height/2)` — but RichText's `this.width/height`
   * track the natural skeleton content size, NOT our intended box size.
   * That makes the overlay rotate about a different center than its
   * sibling rect (which uses the box size for its own rotation),
   * producing a visible drift for any non-zero angle. Override the pivot
   * to use the box size we captured at construction so the two rotation
   * centers coincide.
   */
  transformForAngle(transform) {
    if (this.angle !== 0) {
      const cx = (this.clipWidth + this.strokeWidth) / 2;
      const cy = (this.clipHeight + this.strokeWidth) / 2;
      transform.rotate(-this.angle);
      transform.translate(cx, cy);
      transform.rotate(this.angle);
      transform.translate(-cx, -cy);
    }
    return transform;
  }
  _draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, this.clipWidth, this.clipHeight);
    ctx.clip();
    super._draw(ctx);
    ctx.restore();
  }
};
function resolveShapeFill(props) {
  if (!(props == null ? void 0 : props.fill)) return void 0;
  if ("rgb" in props.fill) return props.fill.rgb;
  return void 0;
}
function resolveShapeStroke(props) {
  if (!(props == null ? void 0 : props.stroke)) return void 0;
  return { color: props.stroke.rgb, width: Math.max(1, props.stroke.width) };
}
function rotateInsetToWorld(rectLeft, rectTop, rectW, rectH, lIns, tIns, innerW, innerH, angleDeg) {
  if (!angleDeg) return { left: rectLeft + lIns, top: rectTop + tIns };
  const rad = angleDeg * Math.PI / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const cx = rectLeft + rectW / 2;
  const cy = rectTop + rectH / 2;
  const ox = lIns + innerW / 2 - rectW / 2;
  const oy = tIns + innerH / 2 - rectH / 2;
  const innerCx = cx + ox * cos - oy * sin;
  const innerCy = cy + ox * sin + oy * cos;
  return { left: innerCx - innerW / 2, top: innerCy - innerH / 2 };
}
var SHAPE_TEXT_OVERLAY_SUFFIX = "_TEXT";
var DrawingRenderService = class {
  constructor(_drawingManagerService, _imageIoService, _galleryService, _urlImageService, _univerInstanceService, _localeService, _drawingImageClipService) {
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_imageIoService", _imageIoService);
    __publicField(this, "_galleryService", _galleryService);
    __publicField(this, "_urlImageService", _urlImageService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_localeService", _localeService);
    __publicField(this, "_drawingImageClipService", _drawingImageClipService);
  }
  // eslint-disable-next-line max-lines-per-function, complexity
  async renderImages(imageParam, scene) {
    const {
      transform: singleTransform,
      drawingType,
      source,
      imageSourceType,
      srcRect,
      prstGeom,
      groupId,
      unitId,
      subUnitId,
      drawingId,
      isMultiTransform,
      transforms: multiTransforms,
      adjustValues,
      hidden
    } = imageParam;
    if (drawingType !== 0 /* DRAWING_IMAGE */) {
      return;
    }
    if (!this._drawingManagerService.getDrawingVisible()) {
      return;
    }
    if (this._univerInstanceService.getUnitType(unitId) === 2 /* UNIVER_SHEET */ && subUnitId !== this._getActiveSheetId()) {
      return;
    }
    if (singleTransform == null) {
      return;
    }
    const transforms = isMultiTransform && multiTransforms ? multiTransforms : [singleTransform];
    const images = [];
    for (const transform of transforms) {
      const { left, top, width, height, angle, flipX, flipY, skewX, skewY } = transform;
      const index = transforms.indexOf(transform);
      const imageShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId }, isMultiTransform ? index : void 0);
      const imageShape = scene.getObject(imageShapeKey);
      if (imageShape != null) {
        imageShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
        continue;
      }
      const orders = this._drawingManagerService.getDrawingOrder(unitId, subUnitId);
      const zIndex = orders.indexOf(drawingId);
      const imageConfig = { ...transform, zIndex: zIndex === -1 ? orders.length - 1 : zIndex };
      const imageNativeCache = this._imageIoService.getImageSourceCache(source, imageSourceType);
      let shouldBeCache = false;
      if (imageNativeCache != null) {
        imageConfig.image = imageNativeCache;
      } else {
        if (imageSourceType === "UUID" /* UUID */) {
          try {
            imageConfig.url = await this._imageIoService.getImage(source);
          } catch (error) {
            console.error(error);
            continue;
          }
        } else if (imageSourceType === "URL" /* URL */) {
          try {
            imageConfig.url = await this._urlImageService.getImage(source);
          } catch (error) {
            console.error(error);
            imageConfig.url = source;
          }
          shouldBeCache = true;
        } else {
          imageConfig.url = source;
          shouldBeCache = true;
        }
      }
      if (hidden) {
        imageConfig.visible = false;
      }
      if (scene.getObject(imageShapeKey)) {
        continue;
      }
      imageConfig.printable = true;
      const image = new Image(imageShapeKey, imageConfig);
      image.setClipService(this._drawingImageClipService);
      if (shouldBeCache) {
        this._imageIoService.addImageSourceCache(source, imageSourceType, image.getNative());
      }
      scene.addObject(image, DRAWING_OBJECT_LAYER_INDEX);
      if (this._drawingManagerService.getDrawingEditable()) {
        scene.attachTransformerTo(image);
      }
      groupId && insertGroupObject({ drawingId: groupId, unitId, subUnitId }, image, scene, this._drawingManagerService);
      if (prstGeom != null) {
        image.setPrstGeom(prstGeom);
      }
      if (adjustValues != null) {
        image.setPrstGeomAdjValues(adjustValues);
      }
      if (srcRect != null) {
        image.setSrcRect(srcRect);
      }
      images.push(image);
    }
    return images;
  }
  _getActiveSheetId() {
    var _a, _b;
    return (_b = (_a = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */)) == null ? void 0 : _a.getActiveSheet()) == null ? void 0 : _b.getSheetId();
  }
  renderFloatDom(param, scene) {
    const {
      transform: singleTransform,
      drawingType,
      groupId,
      unitId,
      subUnitId,
      drawingId,
      isMultiTransform,
      transforms: multiTransforms
    } = param;
    if (drawingType !== 8 /* DRAWING_DOM */) {
      return;
    }
    if (!this._drawingManagerService.getDrawingVisible()) {
      return;
    }
    if (singleTransform == null) {
      return;
    }
    const transforms = isMultiTransform && multiTransforms ? multiTransforms : [singleTransform];
    const rects = [];
    for (const transform of transforms) {
      const { left, top, width, height, angle, flipX, flipY, skewX, skewY } = transform;
      const index = transforms.indexOf(transform);
      const imageShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId }, isMultiTransform ? index : void 0);
      const imageShape = scene.getObject(imageShapeKey);
      if (imageShape != null) {
        imageShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
        continue;
      }
      const orders = this._drawingManagerService.getDrawingOrder(unitId, subUnitId);
      const zIndex = orders.indexOf(drawingId);
      const rectConfig = { ...transform, zIndex: zIndex === -1 ? orders.length - 1 : zIndex };
      if (scene.getObject(imageShapeKey)) {
        continue;
      }
      rectConfig.printable = false;
      const rect = new Rect(imageShapeKey, rectConfig);
      if (!this._drawingManagerService.getDrawingVisible()) {
        continue;
      }
      scene.addObject(rect, DRAWING_OBJECT_LAYER_INDEX);
      if (this._drawingManagerService.getDrawingEditable() && param.allowTransform !== false) {
        scene.attachTransformerTo(rect);
      }
      groupId && insertGroupObject({ drawingId: groupId, unitId, subUnitId }, rect, scene, this._drawingManagerService);
      rects.push(rect);
    }
    return rects;
  }
  renderDrawing(param, scene) {
    const drawingParam = this._drawingManagerService.getDrawingByParam(param);
    if (drawingParam == null) {
      return;
    }
    switch (drawingParam.drawingType) {
      case 0 /* DRAWING_IMAGE */:
        return this.renderImages(drawingParam, scene);
      case 1 /* DRAWING_SHAPE */:
        return this.renderShapes(drawingParam, scene);
      default:
    }
  }
  /**
   * Render a DRAWING_SHAPE — currently scoped to OOXML text boxes
   * (preset rect / roundRect with fill / stroke + optional embedded
   * text body). Painted as a Rect on the DRAWING_OBJECT_LAYER, with
   * the embedded paragraphs overlaid via a sibling RichText object
   * when `textBoxContent` is present. RichText already wraps
   * DocumentSkeleton + Documents and handles layout against a page
   * size, so we only need to pass the inner content area (shape size
   * minus `bodyPr` insets).
   */
  renderShapes(param, scene) {
    var _a, _b, _c, _d;
    const { transform, unitId, subUnitId, drawingId, drawingType, shapeProperties, textBoxContent } = param;
    if (drawingType !== 1 /* DRAWING_SHAPE */) return;
    if (!this._drawingManagerService.getDrawingVisible()) return;
    if (transform == null) return;
    const shapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
    const existing = scene.getObject(shapeKey);
    if (existing) {
      existing.transformByState({ ...transform });
      return;
    }
    const orders = this._drawingManagerService.getDrawingOrder(unitId, subUnitId);
    const zIndex = orders.indexOf(drawingId);
    const baseZ = zIndex === -1 ? orders.length - 1 : zIndex;
    const fill = resolveShapeFill(shapeProperties);
    const stroke = resolveShapeStroke(shapeProperties);
    const rectConfig = {
      ...transform,
      zIndex: baseZ,
      fill,
      stroke: stroke == null ? void 0 : stroke.color,
      strokeWidth: stroke == null ? void 0 : stroke.width,
      printable: true
    };
    const presetGeometry = shapeProperties == null ? void 0 : shapeProperties.presetGeometry;
    const isCustomGeom = presetGeometry != null && presetGeometry !== "rect" && presetGeometry !== "roundRect";
    const rect = isCustomGeom ? new PresetGeometryRect(shapeKey, { ...rectConfig, presetGeometry }) : new Rect(shapeKey, rectConfig);
    scene.addObject(rect, DRAWING_OBJECT_LAYER_INDEX);
    if (this._drawingManagerService.getDrawingEditable()) {
      scene.attachTransformerTo(rect);
    }
    if (textBoxContent) {
      const text = this._buildShapeTextOverlay(shapeKey, transform, shapeProperties, textBoxContent, baseZ);
      if (text) {
        scene.addObject(text, DRAWING_OBJECT_LAYER_INDEX);
        const bodyPr = shapeProperties == null ? void 0 : shapeProperties.bodyPr;
        const lIns = (_a = bodyPr == null ? void 0 : bodyPr.lIns) != null ? _a : 0;
        const tIns = (_b = bodyPr == null ? void 0 : bodyPr.tIns) != null ? _b : 0;
        const rIns = (_c = bodyPr == null ? void 0 : bodyPr.rIns) != null ? _c : 0;
        const bIns = (_d = bodyPr == null ? void 0 : bodyPr.bIns) != null ? _d : 0;
        rect.onTransformChange$.subscribeEvent(() => {
          const w = Math.max(0, rect.width - lIns - rIns);
          const h = Math.max(0, rect.height - tIns - bIns);
          const { left, top } = rotateInsetToWorld(rect.left, rect.top, rect.width, rect.height, lIns, tIns, w, h, rect.angle);
          text.setClipSize(w, h);
          text.transformByState({
            left,
            top,
            width: w,
            height: h,
            angle: rect.angle
          });
        });
      }
    }
  }
  _buildShapeTextOverlay(shapeKey, transform, shapeProperties, textBoxContent, baseZ) {
    var _a, _b, _c, _d, _e;
    const body = textBoxContent.body;
    if (!body || !body.dataStream) return null;
    const bodyPr = shapeProperties == null ? void 0 : shapeProperties.bodyPr;
    const lIns = (_a = bodyPr == null ? void 0 : bodyPr.lIns) != null ? _a : 0;
    const rIns = (_b = bodyPr == null ? void 0 : bodyPr.rIns) != null ? _b : 0;
    const tIns = (_c = bodyPr == null ? void 0 : bodyPr.tIns) != null ? _c : 0;
    const bIns = (_d = bodyPr == null ? void 0 : bodyPr.bIns) != null ? _d : 0;
    const innerW = Math.max(0, transform.width - lIns - rIns);
    const innerH = Math.max(0, transform.height - tIns - bIns);
    if (innerW <= 0 || innerH <= 0) return null;
    const dataStream = body.dataStream.endsWith("\n") ? body.dataStream : `${body.dataStream}
`;
    const docData = {
      id: `${shapeKey}_DOC`,
      body: { ...body, dataStream },
      documentStyle: {
        pageSize: { width: innerW, height: Number.POSITIVE_INFINITY },
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0
      }
    };
    const { left: overlayLeft, top: overlayTop } = rotateInsetToWorld(
      transform.left,
      transform.top,
      transform.width,
      transform.height,
      lIns,
      tIns,
      innerW,
      innerH,
      (_e = transform.angle) != null ? _e : 0
    );
    const overlay = new ClippedRichText(this._localeService, `${shapeKey}${SHAPE_TEXT_OVERLAY_SUFFIX}`, {
      left: overlayLeft,
      top: overlayTop,
      width: innerW,
      height: innerH,
      angle: transform.angle,
      zIndex: baseZ + 0.5,
      richText: docData,
      forceRender: true
    });
    return overlay;
  }
  previewImage(key, src, width, height) {
    this._galleryService.open({
      images: [src],
      onOpenChange: (open) => {
        if (!open) {
          this._galleryService.close();
        }
      }
    });
  }
  _adjustImageSize(nativeWidth, nativeHeight, screenWidth, screenHeight) {
    if (nativeWidth <= screenWidth && nativeHeight <= screenHeight) {
      return {
        width: nativeWidth,
        height: nativeHeight
      };
    }
    const widthRatio = screenWidth / nativeWidth;
    const heightRatio = screenHeight / nativeHeight;
    const scale = Math.min(widthRatio, heightRatio);
    return {
      width: Math.floor(nativeWidth * scale),
      height: Math.floor(nativeHeight * scale)
    };
  }
};
DrawingRenderService = __decorateClass([
  __decorateParam(0, IDrawingManagerService),
  __decorateParam(1, IImageIoService),
  __decorateParam(2, IGalleryService),
  __decorateParam(3, IURLImageService),
  __decorateParam(4, IUniverInstanceService),
  __decorateParam(5, Inject(LocaleService)),
  __decorateParam(6, Inject(DrawingImageClipService))
], DrawingRenderService);

// ../packages/drawing-ui/src/controllers/image-update.controller.ts
var ImageUpdateController = class extends Disposable {
  constructor(_commandService, _renderManagerService, _drawingManagerService, _dialogService, _imageIoService, _currentUniverService, _drawingRenderService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_dialogService", _dialogService);
    __publicField(this, "_imageIoService", _imageIoService);
    __publicField(this, "_currentUniverService", _currentUniverService);
    __publicField(this, "_drawingRenderService", _drawingRenderService);
    this._initialize();
  }
  dispose() {
    super.dispose();
  }
  _initialize() {
    this._drawingAddListener();
    this._commandExecutedListener();
    this._imageUpdateListener();
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        if (command.id === ImageResetSizeOperation.id) {
          const params = command.params;
          if (params == null) {
            return;
          }
          this._resetImageSize(params);
        }
      })
    );
  }
  _getSceneAndTransformerByDrawingSearch(unitId) {
    if (unitId == null) {
      return;
    }
    const renderObject = this._renderManagerService.getRenderById(unitId);
    const scene = renderObject == null ? void 0 : renderObject.scene;
    if (scene == null) {
      return null;
    }
    const transformer = scene.getTransformerByCreate();
    return { scene, transformer };
  }
  _resetImageSize(params) {
    const updateParams = [];
    const sceneList = [];
    params.forEach((param) => {
      const { unitId, subUnitId, drawingId } = param;
      const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
      if (renderObject == null) {
        return;
      }
      const { scene } = renderObject;
      const imageShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
      const imageShape = scene.getObject(imageShapeKey);
      if (imageShape == null) {
        return true;
      }
      const imageData = this._drawingManagerService.getDrawingByParam(param);
      if (imageData == null) {
        return true;
      }
      if (imageData.drawingType !== 0 /* DRAWING_IMAGE */) {
        return;
      }
      imageShape.resetSize();
      const { width, height } = imageShape.getNativeSize();
      if (sceneList.includes(scene) === false) {
        sceneList.push(scene);
      }
      updateParams.push({
        ...imageData,
        transform: {
          ...imageData.transform,
          height,
          width,
          angle: 0
        },
        srcRect: null,
        prstGeom: null
      });
    });
    this._drawingManagerService.featurePluginUpdateNotification(updateParams);
    sceneList.forEach((scene) => {
      const transformer = scene.getTransformerByCreate();
      transformer.refreshControls().changeNotification();
    });
    this._commandService.syncExecuteCommand(SetDrawingSelectedOperation.id, params);
  }
  _drawingAddListener() {
    this.disposeWithMe(
      this._drawingManagerService.add$.pipe(
        bufferTime(33),
        filter((batches) => batches.length > 0),
        map((batches) => batches.flat()),
        map((items) => {
          const map2 = /* @__PURE__ */ new Map();
          for (const it of items) {
            map2.set(`${it.unitId}|${it.subUnitId}|${it.drawingId}`, it);
          }
          return [...map2.values()];
        }),
        filter((items) => items.length > 0)
      ).subscribe((uniqueParams) => {
        void this._insertImages(uniqueParams);
      })
    );
  }
  _insertImages(params) {
    params.forEach(async (param) => {
      var _a;
      const { unitId, subUnitId } = param;
      const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
      const currentSubUnitId = (_a = getCurrentUnitInfo(this._currentUniverService, unitId)) == null ? void 0 : _a.subUnitId;
      if (renderObject == null || currentSubUnitId !== subUnitId) {
        return;
      }
      const imageParam = this._drawingManagerService.getDrawingByParam(param);
      if (imageParam == null) {
        return;
      }
      const images = await this._drawingRenderService.renderImages(imageParam, renderObject.scene);
      this._drawingManagerService.refreshTransform([imageParam]);
      if (images == null || images.length === 0) {
        return;
      }
      for (const image of images) {
        this._addHoverForImage(image);
        this._addDialogForImage(image);
      }
    });
  }
  _imageUpdateListener() {
    this.disposeWithMe(
      this._drawingManagerService.update$.subscribe((params) => {
        params.forEach((param) => {
          const { unitId, subUnitId, drawingId } = param;
          const drawingParam = this._drawingManagerService.getDrawingByParam(param);
          if (drawingParam == null) {
            return;
          }
          const { transform, drawingType, srcRect, prstGeom, source, imageSourceType } = drawingParam;
          if (drawingType !== 0 /* DRAWING_IMAGE */) {
            return;
          }
          const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
          if (renderObject == null) {
            return;
          }
          const { scene, transformer } = renderObject;
          if (transform == null) {
            return true;
          }
          const drawingShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const imageShape = scene.getObject(drawingShapeKey);
          if (imageShape == null) {
            return true;
          }
          imageShape.setSrcRect(srcRect);
          imageShape.setPrstGeom(prstGeom);
          if (source != null && source.length > 0 && (imageSourceType === "BASE64" /* BASE64 */ || imageSourceType === "URL" /* URL */)) {
            imageShape.changeSource(source);
          }
        });
      })
    );
  }
  _addHoverForImage(o) {
    this.disposeWithMe(
      toDisposable(
        o.onPointerEnter$.subscribeEvent(() => {
          o.cursor = "grab" /* GRAB */;
        })
      )
    );
    this.disposeWithMe(
      toDisposable(
        o.onPointerLeave$.subscribeEvent(() => {
          o.cursor = "default" /* DEFAULT */;
        })
      )
    );
  }
  _addDialogForImage(o) {
    this.disposeWithMe(
      toDisposable(
        o.onDblclick$.subscribeEvent(() => {
          const dialogId = `${o.oKey}-viewer-dialog`;
          this._drawingRenderService.previewImage(dialogId, o.getNative().src, o.getNativeSize().width, o.getNativeSize().height);
        })
      )
    );
  }
};
ImageUpdateController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IRenderManagerService),
  __decorateParam(2, IDrawingManagerService),
  __decorateParam(3, IDialogService),
  __decorateParam(4, IImageIoService),
  __decorateParam(5, IUniverInstanceService),
  __decorateParam(6, Inject(DrawingRenderService))
], ImageUpdateController);

// ../packages/drawing-ui/src/controllers/shape-update.controller.ts
var ShapeUpdateController = class extends Disposable {
  constructor(_renderManagerService, _drawingManagerService, _currentUniverService, _drawingRenderService) {
    super();
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_currentUniverService", _currentUniverService);
    __publicField(this, "_drawingRenderService", _drawingRenderService);
    this._drawingAddListener();
    this._drawingRefreshListener();
  }
  _drawingAddListener() {
    this.disposeWithMe(
      this._drawingManagerService.add$.pipe(
        bufferTime(33),
        filter((batches) => batches.length > 0),
        map((batches) => batches.flat()),
        map((items) => {
          const map2 = /* @__PURE__ */ new Map();
          for (const it of items) {
            map2.set(`${it.unitId}|${it.subUnitId}|${it.drawingId}`, it);
          }
          return [...map2.values()];
        }),
        filter((items) => items.length > 0)
      ).subscribe((uniqueParams) => {
        this._insertShapes(uniqueParams);
      })
    );
  }
  _insertShapes(params) {
    var _a;
    for (const param of params) {
      const { unitId, subUnitId } = param;
      const renderObject = this._getScene(unitId);
      const currentSubUnitId = (_a = getCurrentUnitInfo(this._currentUniverService, unitId)) == null ? void 0 : _a.subUnitId;
      if (renderObject == null || currentSubUnitId !== subUnitId) continue;
      const drawingParam = this._drawingManagerService.getDrawingByParam(param);
      if (drawingParam == null) continue;
      if (drawingParam.drawingType !== 1 /* DRAWING_SHAPE */) continue;
      this._drawingRenderService.renderDrawing(param, renderObject.scene);
    }
  }
  _drawingRefreshListener() {
    this.disposeWithMe(
      this._drawingManagerService.refreshTransform$.subscribe((params) => {
        params.forEach((param) => {
          var _a, _b, _c, _d, _e;
          const { unitId, subUnitId, drawingId } = param;
          const renderObject = this._getScene(unitId);
          if (renderObject == null) return;
          const drawingParam = this._drawingManagerService.getDrawingByParam(param);
          if (drawingParam == null) return;
          if (drawingParam.drawingType !== 1 /* DRAWING_SHAPE */) return;
          if (drawingParam.transform == null) return;
          const shapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const overlay = renderObject.scene.getObject(`${shapeKey}${SHAPE_TEXT_OVERLAY_SUFFIX}`);
          if (!(overlay instanceof ClippedRichText)) return;
          const { left = 0, top = 0, width = 0, height = 0, angle = 0 } = drawingParam.transform;
          const bodyPr = (_a = drawingParam.shapeProperties) == null ? void 0 : _a.bodyPr;
          const lIns = (_b = bodyPr == null ? void 0 : bodyPr.lIns) != null ? _b : 0;
          const tIns = (_c = bodyPr == null ? void 0 : bodyPr.tIns) != null ? _c : 0;
          const rIns = (_d = bodyPr == null ? void 0 : bodyPr.rIns) != null ? _d : 0;
          const bIns = (_e = bodyPr == null ? void 0 : bodyPr.bIns) != null ? _e : 0;
          const innerW = Math.max(0, width - lIns - rIns);
          const innerH = Math.max(0, height - tIns - bIns);
          const { left: overlayLeft, top: overlayTop } = rotateInsetToWorld(
            left,
            top,
            width,
            height,
            lIns,
            tIns,
            innerW,
            innerH,
            angle
          );
          overlay.setClipSize(innerW, innerH);
          overlay.transformByState({
            left: overlayLeft,
            top: overlayTop,
            width: innerW,
            height: innerH,
            angle
          });
        });
      })
    );
  }
  _getScene(unitId) {
    if (unitId == null) return null;
    const renderObject = this._renderManagerService.getRenderById(unitId);
    const scene = renderObject == null ? void 0 : renderObject.scene;
    if (scene == null) return null;
    return { scene };
  }
};
ShapeUpdateController = __decorateClass([
  __decorateParam(0, IRenderManagerService),
  __decorateParam(1, IDrawingManagerService),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, Inject(DrawingRenderService))
], ShapeUpdateController);

// ../packages/drawing-ui/src/plugin.ts
var UniverDrawingUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig3, _injector, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_configService", _configService);
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig3,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(DRAWING_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    this._initDependencies();
  }
  onRendered() {
    this._injector.get(DrawingUpdateController);
    this._injector.get(DrawingUIController);
    this._injector.get(ImageCropperController);
    this._injector.get(ImageUpdateController);
    this._injector.get(ShapeUpdateController);
  }
  _initDependencies() {
    const dependencies = [
      [DrawingImageClipService],
      [DrawingRenderService],
      [DrawingUpdateController],
      [DrawingUIController],
      [ImageCropperController],
      [ImageUpdateController],
      [ShapeUpdateController]
    ];
    dependencies.forEach((dependency) => this._injector.add(dependency));
  }
};
__publicField(UniverDrawingUIPlugin, "pluginName", "UNIVER_DRAWING_UI_PLUGIN");
__publicField(UniverDrawingUIPlugin, "packageName", package_default3.name);
__publicField(UniverDrawingUIPlugin, "version", package_default3.version);
UniverDrawingUIPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverDrawingUIPlugin);

// ../packages/drawing-ui/src/views/panel/DrawingCommonPanel.tsx
var import_react7 = __toESM(require_react());

// ../packages/drawing-ui/src/views/panel/DrawingAlign.tsx
var import_react2 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var DrawingAlign = (props) => {
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const { drawings, alignShow } = props;
  const [alignValue, setAlignValue] = (0, import_react2.useState)("0" /* default */);
  const alignOptions = [
    {
      label: localeService.t("drawing-ui.image-panel.align.default"),
      value: "0" /* default */
    },
    {
      options: [
        {
          label: localeService.t("drawing-ui.image-panel.align.left"),
          value: "1" /* left */
        },
        {
          label: localeService.t("drawing-ui.image-panel.align.center"),
          value: "2" /* center */
        },
        {
          label: localeService.t("drawing-ui.image-panel.align.right"),
          value: "3" /* right */
        }
      ]
    },
    {
      options: [
        {
          label: localeService.t("drawing-ui.image-panel.align.top"),
          value: "4" /* top */
        },
        {
          label: localeService.t("drawing-ui.image-panel.align.middle"),
          value: "5" /* middle */
        },
        {
          label: localeService.t("drawing-ui.image-panel.align.bottom"),
          value: "6" /* bottom */
        }
      ]
    },
    {
      options: [
        {
          label: localeService.t("drawing-ui.image-panel.align.horizon"),
          value: "7" /* horizon */
        },
        {
          label: localeService.t("drawing-ui.image-panel.align.vertical"),
          value: "8" /* vertical */
        }
      ]
    }
  ];
  function handleAlignChange(value) {
    setAlignValue(value);
    commandService.executeCommand(SetDrawingAlignOperation.id, {
      alignType: value,
      drawings
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: clsx("univer-relative univer-w-full", {
        "univer-hidden": !alignShow
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "header",
          {
            className: `univer-text-gray-600 dark:!univer-text-gray-200`,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: localeService.t("drawing-ui.image-panel.align.title") })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "univer-relative univer-mt-2.5 univer-flex univer-h-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: `univer-w-full univer-text-gray-900 dark:!univer-text-white`,
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Select, { value: alignValue, options: alignOptions, onChange: handleAlignChange })
          }
        ) })
      ]
    }
  );
};

// ../packages/drawing-ui/src/views/panel/DrawingArrange.tsx
var import_react3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var DrawingArrange = (props) => {
  const { arrangeShow, drawings: focusDrawings } = props;
  const localeService = useDependency(LocaleService);
  const drawingManagerService = useDependency(IDrawingManagerService);
  const commandService = useDependency(ICommandService);
  const componentManager = useDependency(ComponentManager);
  const MoveUpIcon2 = componentManager.get("MoveUpIcon");
  const MoveDownIcon2 = componentManager.get("MoveDownIcon");
  const TopmostIcon2 = componentManager.get("TopmostIcon");
  const BottomIcon2 = componentManager.get("BottomIcon");
  const [drawings, setDrawings] = (0, import_react3.useState)(focusDrawings);
  (0, import_react3.useEffect)(() => {
    const focusDispose = drawingManagerService.focus$.subscribe((drawings2) => {
      setDrawings(drawings2);
    });
    return () => {
      focusDispose.unsubscribe();
    };
  }, []);
  const onArrangeBtnClick = (arrangeType) => {
    commandService.syncExecuteCommand(SetDrawingArrangeOperation.id, { arrangeType, drawings });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: clsx("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !arrangeShow
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "header",
          {
            className: `univer-text-gray-600 dark:!univer-text-gray-200`,
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: localeService.t("drawing-ui.image-panel.arrange.title") })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "univer-grid univer-grid-cols-2 univer-gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Button, { onClick: () => {
            onArrangeBtnClick(0 /* forward */);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MoveUpIcon2, {}),
            localeService.t("drawing-ui.image-panel.arrange.forward")
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Button, { onClick: () => {
            onArrangeBtnClick(1 /* backward */);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MoveDownIcon2, {}),
            localeService.t("drawing-ui.image-panel.arrange.backward")
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Button, { onClick: () => {
            onArrangeBtnClick(2 /* front */);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TopmostIcon2, {}),
            localeService.t("drawing-ui.image-panel.arrange.front")
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Button, { onClick: () => {
            onArrangeBtnClick(3 /* back */);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BottomIcon2, {}),
            localeService.t("drawing-ui.image-panel.arrange.back")
          ] })
        ] })
      ]
    }
  );
};

// ../packages/drawing-ui/src/views/panel/DrawingGroup.tsx
var import_react4 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var DrawingGroup = (props) => {
  const localeService = useDependency(LocaleService);
  const renderManagerService = useDependency(IRenderManagerService);
  const drawingManagerService = useDependency(IDrawingManagerService);
  const commandService = useDependency(ICommandService);
  const componentManager = useDependency(ComponentManager);
  const { hasGroup, drawings } = props;
  const GroupIcon2 = componentManager.get("GroupIcon");
  const UngroupIcon2 = componentManager.get("UngroupIcon");
  const [groupShow, setGroupShow] = (0, import_react4.useState)(false);
  const [groupBtnShow, setGroupBtnShow] = (0, import_react4.useState)(true);
  const [ungroupBtnShow, setUngroupBtnShow] = (0, import_react4.useState)(true);
  const onGroupBtnClick = () => {
    commandService.syncExecuteCommand(SetDrawingGroupOperation.id, { drawings });
  };
  const onUngroupBtnClick = () => {
    commandService.syncExecuteCommand(CancelDrawingGroupOperation.id, { drawings });
  };
  (0, import_react4.useEffect)(() => {
    const drawingParam = drawings[0];
    if (drawingParam == null) {
      return;
    }
    const { unitId } = drawingParam;
    const renderObject = renderManagerService.getRenderById(unitId);
    const scene = renderObject == null ? void 0 : renderObject.scene;
    if (scene == null) {
      return;
    }
    const transformer = scene.getTransformerByCreate();
    const onClearControlObserver = transformer.clearControl$.subscribe((changeSelf) => {
      if (changeSelf === true) {
        setGroupShow(false);
      }
    });
    const onChangeStartObserver = transformer.changeStart$.subscribe((state) => {
      const { objects } = state;
      const params = getUpdateParams(objects, drawingManagerService);
      const groupParams = params.filter((o) => (o == null ? void 0 : o.drawingType) === 6 /* DRAWING_GROUP */);
      let groupBtnShow2 = false;
      let ungroupBtnShow2 = false;
      if (params.length > 1) {
        groupBtnShow2 = true;
      }
      if (groupParams.length > 0) {
        ungroupBtnShow2 = true;
      }
      const groupShow2 = groupBtnShow2 || ungroupBtnShow2;
      setGroupShow(groupShow2);
      setGroupBtnShow(groupBtnShow2);
      setUngroupBtnShow(ungroupBtnShow2);
    });
    return () => {
      onChangeStartObserver.unsubscribe();
      onClearControlObserver.unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: clsx("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": hasGroup === true && groupShow === false || hasGroup === false
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "header",
          {
            className: `univer-text-gray-600 dark:!univer-text-gray-200`,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: localeService.t("drawing-ui.image-panel.group.title") })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "univer-flex univer-items-center univer-justify-center univer-gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            Button,
            {
              className: clsx({
                "univer-hidden": !groupBtnShow
              }),
              onClick: onGroupBtnClick,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GroupIcon2, {}),
                localeService.t("drawing-ui.image-panel.group.group")
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            Button,
            {
              className: clsx({
                "univer-hidden": !ungroupBtnShow
              }),
              onClick: onUngroupBtnClick,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(UngroupIcon2, {}),
                localeService.t("drawing-ui.image-panel.group.unGroup")
              ]
            }
          )
        ] })
      ]
    }
  );
};

// ../packages/drawing-ui/src/views/panel/DrawingTransform.tsx
var import_react5 = __toESM(require_react());

// ../packages/drawing-ui/src/utils/config.ts
var MIN_DRAWING_WIDTH_LIMIT = 20;
var MIN_DRAWING_HEIGHT_LIMIT = 20;
var RANGE_DRAWING_ROTATION_LIMIT = [-360, 360];

// ../packages/drawing-ui/src/views/panel/DrawingTransform.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var INPUT_DEBOUNCE_TIME = 300;
var DrawingTransform = (props) => {
  var _a;
  const localeService = useDependency(LocaleService);
  const drawingManagerService = useDependency(IDrawingManagerService);
  const renderManagerService = useDependency(IRenderManagerService);
  const { drawings, transformShow } = props;
  const drawingParam = drawings[0];
  if (drawingParam == null) {
    return;
  }
  const transform = drawingParam.transform;
  if (transform == null) {
    return;
  }
  const { unitId, subUnitId, drawingId, drawingType } = drawingParam;
  const renderObject = renderManagerService.getRenderById(unitId);
  const scene = renderObject == null ? void 0 : renderObject.scene;
  if (scene == null) {
    return;
  }
  const topScene = (_a = scene.getEngine()) == null ? void 0 : _a.activeScene;
  if (topScene == null) {
    return;
  }
  const transformer = scene.getTransformerByCreate();
  const {
    width: originWidth = 0,
    height: originHeight = 0,
    left: originX = 0,
    top: originY = 0,
    angle: originRotation = 0
  } = transform;
  const [width, setWidth] = (0, import_react5.useState)(originWidth);
  const [height, setHeight] = (0, import_react5.useState)(originHeight);
  const [xPosition, setXPosition] = (0, import_react5.useState)(originX);
  const [yPosition, setYPosition] = (0, import_react5.useState)(originY);
  const [rotation, setRotation] = (0, import_react5.useState)(originRotation);
  const [lockRatio, setLockRatio] = (0, import_react5.useState)(transformer.keepRatio);
  const checkMoveBoundary = (left, top, width2, height2) => {
    const { width: topSceneWidth, height: topSceneHeight } = topScene;
    const { ancestorLeft, ancestorTop } = scene;
    let limitLeft = left;
    let limitTop = top;
    let limitWidth = width2;
    let limitHeight = height2;
    if (left + ancestorLeft < 0) {
      limitLeft = -ancestorLeft;
    }
    if (top + ancestorTop < 0) {
      limitTop = -ancestorTop;
    }
    limitWidth = topSceneWidth - limitLeft - ancestorLeft;
    if (limitWidth < MIN_DRAWING_WIDTH_LIMIT) {
      limitWidth = MIN_DRAWING_WIDTH_LIMIT;
    }
    limitHeight = topSceneHeight - limitTop - ancestorTop;
    if (limitHeight < MIN_DRAWING_HEIGHT_LIMIT) {
      limitHeight = MIN_DRAWING_HEIGHT_LIMIT;
    }
    if (left + limitWidth + ancestorLeft > topSceneWidth) {
      limitLeft = topSceneWidth - width2 - ancestorLeft;
    }
    if (top + limitHeight + ancestorTop > topSceneHeight) {
      limitTop = topSceneHeight - height2 - ancestorTop;
    }
    return {
      limitLeft,
      limitTop,
      limitWidth,
      limitHeight
    };
  };
  const changeObs = (state) => {
    const { objects } = state;
    const params = getUpdateParams(objects, drawingManagerService);
    if (params.length !== 1) {
      return;
    }
    const drawingParam2 = params[0];
    if (drawingParam2 == null) {
      return;
    }
    const { transform: transform2 } = drawingParam2;
    if (transform2 == null) {
      return;
    }
    const {
      width: originWidth2,
      height: originHeight2,
      left: originX2,
      top: originY2,
      angle: originRotation2
    } = transform2;
    if (originWidth2 != null) {
      setWidth(originWidth2);
    }
    if (originHeight2 != null) {
      setHeight(originHeight2);
    }
    if (originX2 != null) {
      setXPosition(originX2);
    }
    if (originY2 != null) {
      setYPosition(originY2);
    }
    if (originRotation2 != null) {
      setRotation(originRotation2);
    }
  };
  (0, import_react5.useEffect)(() => {
    const subscriptions = [
      transformer.changeStart$.subscribe((state) => {
        changeObs(state);
      }),
      transformer.changing$.subscribe((state) => {
        changeObs(state);
      }),
      transformer.changeEnd$.subscribe((state) => {
        changeObs(state);
      }),
      drawingManagerService.focus$.subscribe((drawings2) => {
        if (drawings2.length !== 1) {
          return;
        }
        const drawingParam2 = drawingManagerService.getDrawingByParam(drawings2[0]);
        if (drawingParam2 == null) {
          return;
        }
        const transform2 = drawingParam2.transform;
        if (transform2 == null) {
          return;
        }
        const {
          width: originWidth2,
          height: originHeight2,
          left: originX2,
          top: originY2,
          angle: originRotation2
        } = transform2;
        if (originWidth2 != null) {
          setWidth(originWidth2);
        }
        if (originHeight2 != null) {
          setHeight(originHeight2);
        }
        if (originX2 != null) {
          setXPosition(originX2);
        }
        if (originY2 != null) {
          setYPosition(originY2);
        }
        if (originRotation2 != null) {
          setRotation(originRotation2);
        }
      })
    ];
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);
  const handleWidthChange = debounce_default((val) => {
    if (val == null) {
      return;
    }
    const { limitWidth, limitHeight } = checkMoveBoundary(xPosition, yPosition, val, height);
    val = Math.min(val, limitWidth);
    const updateParam = { unitId, subUnitId, drawingId, drawingType, transform: { width: val } };
    if (lockRatio) {
      let heightFix = val / width * height;
      heightFix = Math.max(heightFix, MIN_DRAWING_HEIGHT_LIMIT);
      if (heightFix > limitHeight) {
        return;
      }
      setHeight(heightFix);
      updateParam.transform.height = heightFix;
    }
    setWidth(val);
    drawingManagerService.featurePluginUpdateNotification([updateParam]);
    transformer.refreshControls().changeNotification();
  }, INPUT_DEBOUNCE_TIME);
  const handleHeightChange = debounce_default((val) => {
    if (val == null) {
      return;
    }
    const { limitHeight, limitWidth } = checkMoveBoundary(xPosition, yPosition, width, val);
    val = Math.min(val, limitHeight);
    const updateParam = { unitId, subUnitId, drawingId, drawingType, transform: { height: val } };
    if (lockRatio) {
      let widthFix = val / height * width;
      widthFix = Math.max(widthFix, MIN_DRAWING_WIDTH_LIMIT);
      if (widthFix > limitWidth) {
        return;
      }
      setWidth(widthFix);
      updateParam.transform.width = widthFix;
    }
    setHeight(val);
    drawingManagerService.featurePluginUpdateNotification([updateParam]);
    transformer.refreshControls().changeNotification();
  }, INPUT_DEBOUNCE_TIME);
  const handleXChange = debounce_default((val) => {
    if (val == null) {
      return;
    }
    const { limitLeft } = checkMoveBoundary(val, yPosition, width, height);
    val = limitLeft;
    const updateParam = { unitId, subUnitId, drawingId, drawingType, transform: { left: val } };
    setXPosition(val);
    drawingManagerService.featurePluginUpdateNotification([updateParam]);
    transformer.refreshControls().changeNotification();
  }, INPUT_DEBOUNCE_TIME);
  const handleYChange = debounce_default((val) => {
    if (val == null) {
      return;
    }
    const { limitTop } = checkMoveBoundary(xPosition, val, width, height);
    val = limitTop;
    const updateParam = { unitId, subUnitId, drawingId, drawingType, transform: { top: val } };
    setYPosition(val);
    drawingManagerService.featurePluginUpdateNotification([updateParam]);
    transformer.refreshControls().changeNotification();
  }, INPUT_DEBOUNCE_TIME);
  const handleRotationChange = (val) => {
    if (val == null) {
      return;
    }
    const updateParam = { unitId, subUnitId, drawingId, drawingType, transform: { angle: val } };
    setRotation(val);
    drawingManagerService.featurePluginUpdateNotification([updateParam]);
    transformer.refreshControls().changeNotification();
  };
  const handleLockRatioChange = (val) => {
    setLockRatio(val);
    transformer.keepRatio = val;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: clsx("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !transformShow
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "header",
          {
            className: `univer-text-gray-600 dark:!univer-text-gray-200`,
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: localeService.t("drawing-ui.image-panel.transform.title") })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "div",
          {
            className: `univer-grid univer-grid-cols-3 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: localeService.t("drawing-ui.image-panel.transform.width") }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  InputNumber,
                  {
                    precision: 1,
                    value: width,
                    min: MIN_DRAWING_WIDTH_LIMIT,
                    onChange: (val) => {
                      handleWidthChange(val);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: localeService.t("drawing-ui.image-panel.transform.height") }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  InputNumber,
                  {
                    precision: 1,
                    value: height,
                    min: MIN_DRAWING_HEIGHT_LIMIT,
                    onChange: (val) => {
                      handleHeightChange(val);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: localeService.t("drawing-ui.image-panel.transform.lock") }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "univer-text-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Checkbox, { checked: lockRatio, onChange: handleLockRatioChange }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "div",
          {
            className: `univer-grid univer-grid-cols-3 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: localeService.t("drawing-ui.image-panel.transform.x") }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputNumber, { precision: 1, value: xPosition, onChange: (val) => {
                  handleXChange(val);
                } })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: localeService.t("drawing-ui.image-panel.transform.y") }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputNumber, { precision: 1, value: yPosition, onChange: (val) => {
                  handleYChange(val);
                } })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: localeService.t("drawing-ui.image-panel.transform.rotate") }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  InputNumber,
                  {
                    precision: 1,
                    value: rotation,
                    min: RANGE_DRAWING_ROTATION_LIMIT[0],
                    max: RANGE_DRAWING_ROTATION_LIMIT[1],
                    onChange: handleRotationChange
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
};

// ../packages/drawing-ui/src/views/panel/ImageCropper.tsx
var import_react6 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var ImageCropper = (props) => {
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const clipService = useDependency(DrawingImageClipService);
  const componentManager = useDependency(ComponentManager);
  const canUseShapeClip = useObservable(clipService.canUseShapeClip$, false);
  const { drawings, cropperShow } = props;
  const drawingParam = drawings[0];
  if (drawingParam == null) {
    return;
  }
  const [cropValue, setCropValue] = (0, import_react6.useState)("0" /* FREE */);
  const cropStateRef = (0, import_react6.useRef)(false);
  const cropOptions = [
    {
      label: localeService.t("drawing-ui.image-panel.crop.mode"),
      value: "0" /* FREE */
    },
    {
      label: "1:1",
      value: "1" /* R1_1 */
    },
    {
      label: "16:9",
      value: "2" /* R16_9 */
    },
    {
      label: "9:16",
      value: "3" /* R9_16 */
    },
    {
      label: "5:4",
      value: "4" /* R5_4 */
    },
    {
      label: "4:5",
      value: "5" /* R4_5 */
    },
    {
      label: "4:3",
      value: "6" /* R4_3 */
    },
    {
      label: "3:4",
      value: "7" /* R3_4 */
    },
    {
      label: "3:2",
      value: "8" /* R3_2 */
    },
    {
      label: "2:3",
      value: "9" /* R2_3 */
    }
  ];
  (0, import_react6.useEffect)(() => {
    const onChangeStartObserver = commandService.onCommandExecuted((command) => {
      if (command.id === CloseImageCropOperation.id) {
        const params = command.params;
        if (!(params == null ? void 0 : params.isAuto)) {
          cropStateRef.current = false;
        }
      }
    });
    return () => {
      onChangeStartObserver == null ? void 0 : onChangeStartObserver.dispose();
    };
  }, []);
  function handleCropChange(value) {
    setCropValue(value);
    if (cropStateRef.current) {
      commandService.executeCommand(AutoImageCropOperation.id, {
        cropType: value
      });
    }
  }
  const onCropperBtnClick = (val) => {
    commandService.executeCommand(AutoImageCropOperation.id, {
      cropType: val
    });
    cropStateRef.current = true;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: clsx("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !cropperShow
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "header",
          {
            className: `univer-text-gray-600 dark:!univer-text-gray-200`,
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: localeService.t("drawing-ui.image-panel.crop.title") })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "univer-flex univer-items-center univer-justify-center univer-gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Button, { onClick: () => {
            onCropperBtnClick(cropValue);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CreateCopyIcon, {}),
            localeService.t("drawing-ui.image-panel.crop.start")
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Select, { value: cropValue, options: cropOptions, onChange: handleCropChange })
        ] }),
        canUseShapeClip && (() => {
          const ShapeClipPicker = componentManager.get(IMAGE_CLIP_SHAPE_PICKER_COMPONENT);
          return ShapeClipPicker ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ShapeClipPicker, {}) : null;
        })()
      ]
    }
  );
};

// ../packages/drawing-ui/src/views/panel/DrawingCommonPanel.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var DrawingCommonPanel = (props) => {
  const drawingManagerService = useDependency(IDrawingManagerService);
  const renderManagerService = useDependency(IRenderManagerService);
  const localeService = useDependency(LocaleService);
  const { drawings, hasArrange = true, hasTransform = true, hasAlign = true, hasCropper = true, hasGroup = true } = props;
  const drawingParam = drawings[0];
  if (drawingParam == null) {
    return;
  }
  const { unitId } = drawingParam;
  const renderObject = renderManagerService.getRenderById(unitId);
  const scene = renderObject == null ? void 0 : renderObject.scene;
  if (scene == null) {
    return;
  }
  const transformer = scene.getTransformerByCreate();
  const [arrangeShow, setArrangeShow] = (0, import_react7.useState)(true);
  const [transformShow, setTransformShow] = (0, import_react7.useState)(true);
  const [alignShow, setAlignShow] = (0, import_react7.useState)(false);
  const [cropperShow, setCropperShow] = (0, import_react7.useState)(true);
  const [nullShow, setNullShow] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    const clearControlSub = transformer.clearControl$.subscribe((changeSelf) => {
      if (changeSelf === true) {
        setArrangeShow(false);
        setTransformShow(false);
        setAlignShow(false);
        setCropperShow(false);
        setNullShow(true);
      }
    });
    const changeStartSub = transformer.changeStart$.subscribe((state) => {
      const { objects } = state;
      const params = getUpdateParams(objects, drawingManagerService);
      if (params.length === 0) {
        setArrangeShow(false);
        setTransformShow(false);
        setAlignShow(false);
        setCropperShow(false);
        setNullShow(true);
      } else if (params.length === 1) {
        setArrangeShow(true);
        setTransformShow(true);
        setAlignShow(false);
        setCropperShow(true);
        setNullShow(false);
      } else {
        setArrangeShow(true);
        setTransformShow(false);
        setAlignShow(true);
        setCropperShow(false);
        setNullShow(false);
      }
    });
    const focusSub = drawingManagerService.focus$.subscribe((drawings2) => {
      if (drawings2.length === 0) {
        setArrangeShow(false);
        setTransformShow(false);
        setAlignShow(false);
        setCropperShow(false);
        setNullShow(true);
      } else if (drawings2.length === 1) {
        setArrangeShow(true);
        setTransformShow(true);
        setAlignShow(false);
        setCropperShow(true);
        setNullShow(false);
      } else {
        setArrangeShow(true);
        setTransformShow(false);
        setAlignShow(true);
        setCropperShow(false);
        setNullShow(false);
      }
    });
    return () => {
      changeStartSub.unsubscribe();
      clearControlSub.unsubscribe();
      focusSub.unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: clsx("univer-h-full", {
          "univer-hidden": !nullShow
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "univer-flex univer-h-full univer-items-center univer-justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: localeService.t("drawing-ui.image-panel.null") }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DrawingArrange, { arrangeShow: hasArrange === true ? arrangeShow : false, drawings }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DrawingTransform, { transformShow: hasTransform === true ? transformShow : false, drawings }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DrawingAlign, { alignShow: hasAlign === true ? alignShow : false, drawings }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ImageCropper, { cropperShow: hasCropper === true ? cropperShow : false, drawings }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DrawingGroup, { hasGroup, drawings })
  ] });
};

// ../packages/sheets-drawing-ui/package.json
var package_default4 = {
  name: "@univerjs/sheets-drawing-ui",
  version: "0.25.0",
  private: false,
  description: "Drawing UI integration for Univer Sheets.",
  author: "DreamNum Co., Ltd. <developer@univer.ai>",
  license: "Apache-2.0",
  funding: {
    type: "opencollective",
    url: "https://opencollective.com/univer"
  },
  homepage: "https://univer.ai",
  repository: {
    type: "git",
    url: "https://github.com/dream-num/univer"
  },
  bugs: {
    url: "https://github.com/dream-num/univer/issues"
  },
  keywords: [
    "univer",
    "sheets",
    "drawing",
    "ui",
    "plugin"
  ],
  exports: {
    ".": "./src/index.ts",
    "./*": "./src/*",
    "./locale/*": "./src/locale/*.ts",
    "./facade": "./src/facade/index.ts"
  },
  main: "./src/index.ts",
  types: "./lib/types/index.d.ts",
  publishConfig: {
    access: "public",
    main: "./lib/es/index.js",
    module: "./lib/es/index.js",
    exports: {
      ".": {
        import: "./lib/es/index.js",
        require: "./lib/cjs/index.js",
        types: "./lib/types/index.d.ts"
      },
      "./*": {
        import: "./lib/es/*",
        require: "./lib/cjs/*",
        types: "./lib/types/index.d.ts"
      },
      "./locale/*": {
        import: "./lib/es/locale/*.js",
        require: "./lib/cjs/locale/*.js",
        types: "./lib/types/locale/*.d.ts"
      },
      "./facade": {
        import: "./lib/es/facade.js",
        require: "./lib/cjs/facade.js",
        types: "./lib/types/facade/index.d.ts"
      },
      "./lib/facade": {
        import: "./lib/es/facade.js",
        require: "./lib/cjs/facade.js",
        types: "./lib/types/facade/index.d.ts"
      },
      "./lib/*": "./lib/*"
    }
  },
  directories: {
    lib: "lib"
  },
  files: [
    "lib"
  ],
  scripts: {
    test: "vitest run",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
    typecheck: "tsc --noEmit",
    "build:bundle": "univer-cli build",
    "build:types": "tsc -p tsconfig.node.json",
    build: "pnpm run build:bundle && pnpm run build:types"
  },
  peerDependencies: {
    react: "^16.9.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc",
    rxjs: ">=7.0.0"
  },
  dependencies: {
    "@univerjs/core": "workspace:*",
    "@univerjs/design": "workspace:*",
    "@univerjs/docs-drawing": "workspace:*",
    "@univerjs/docs-ui": "workspace:*",
    "@univerjs/drawing": "workspace:*",
    "@univerjs/drawing-ui": "workspace:*",
    "@univerjs/engine-render": "workspace:*",
    "@univerjs/sheets": "workspace:*",
    "@univerjs/sheets-drawing": "workspace:*",
    "@univerjs/sheets-ui": "workspace:*",
    "@univerjs/ui": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    postcss: "^8.5.15",
    react: "18.3.1",
    rxjs: "^7.8.2",
    tailwindcss: "3.4.18",
    typescript: "^6.0.3",
    vitest: "^4.1.7"
  }
};

// ../packages/sheets-drawing-ui/src/config/config.ts
var SHEETS_DRAWING_UI_PLUGIN_CONFIG_KEY = "sheets-drawing-ui.config";
var configSymbol4 = Symbol(SHEETS_DRAWING_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig4 = {};

// ../packages/sheets-drawing-ui/src/controllers/drawing-context-menu.controller.ts
var DrawingContextMenuController = class extends RxDisposable {
  constructor(_drawingManagerService, _contextMenuService, _renderManagerService, _univerInstanceService) {
    super();
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_contextMenuService", _contextMenuService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    this._init();
  }
  _init() {
    this._univerInstanceService.getAllUnitsForType(2 /* UNIVER_SHEET */).forEach((workbook) => this._contextMenuListener(workbook));
  }
  _contextMenuListener(workbook) {
    var _a;
    if (!workbook) {
      return;
    }
    const scene = (_a = this._renderManagerService.getRenderById(workbook.getUnitId())) == null ? void 0 : _a.scene;
    if (!scene) {
      return;
    }
    const transformer = scene.getTransformerByCreate();
    if (!transformer) {
      return;
    }
    this.disposeWithMe(transformer.changeEnd$.subscribe((params) => {
      const { event } = params;
      if (event.button !== 2) return;
      const selectedObjects = transformer.getSelectedObjectMap();
      if (selectedObjects.size === 0) return;
      for (const object of selectedObjects.values()) {
        const oKey = object.oKey;
        const drawingParam = this._drawingManagerService.getDrawingOKey(oKey);
        if (!drawingParam) return;
      }
      this._contextMenuService.triggerContextMenu(event, "contextMenu.drawing" /* DRAWING */);
    }));
  }
};
DrawingContextMenuController = __decorateClass([
  __decorateParam(0, IDrawingManagerService),
  __decorateParam(1, IContextMenuService),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IUniverInstanceService)
], DrawingContextMenuController);

// ../packages/sheets-drawing-ui/src/controllers/render-controllers/sheet-celll-image-hover.render-controller.ts
var SheetCellImageHoverRenderController = class extends Disposable {
  constructor(_context, _hoverManagerService, _selectionsService, _drawingRenderService, _sheetSkeletonManagerService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_hoverManagerService", _hoverManagerService);
    __publicField(this, "_selectionsService", _selectionsService);
    __publicField(this, "_drawingRenderService", _drawingRenderService);
    __publicField(this, "_sheetSkeletonManagerService", _sheetSkeletonManagerService);
    __publicField(this, "_isSetCursor", false);
    this._initHover();
    this._initImageClick();
  }
  _initHover() {
    this.disposeWithMe(this._hoverManagerService.currentRichTextNoDistinct$.pipe(throttleTime(33)).subscribe((richText) => {
      var _a, _b;
      let currentSelections = [];
      if (richText !== null) {
        currentSelections = this._selectionsService.getWorkbookSelections(this._context.unitId).getCurrentSelections();
      }
      if (currentSelections.length > 0 && (richText == null ? void 0 : richText.unitId) === this._context.unitId && (richText == null ? void 0 : richText.drawing) && currentSelections.length === 1 && ((_a = currentSelections[0].primary) == null ? void 0 : _a.actualRow) === richText.row && ((_b = currentSelections[0].primary) == null ? void 0 : _b.actualColumn) === richText.col) {
        this._isSetCursor = true;
        this._context.scene.setCursor("zoom-in" /* ZOOM_IN */);
      } else if (this._isSetCursor) {
        this._isSetCursor = false;
        this._context.scene.resetCursor();
      }
    }));
  }
  _initImageClick() {
    this.disposeWithMe(this._hoverManagerService.currentClickedCell$.subscribe((click) => {
      var _a;
      if ((click == null ? void 0 : click.drawing) && this._isSetCursor) {
        const imageDrawing = click.drawing.drawing.drawingOrigin;
        const imageEle = (_a = this._sheetSkeletonManagerService.getCurrentSkeleton()) == null ? void 0 : _a.imageCacheMap.getImage(imageDrawing.imageSourceType, imageDrawing.source);
        if (!imageEle) return;
        this._drawingRenderService.previewImage("preview-cell-image", imageEle.src, imageEle.width, imageEle.height);
        this._context.scene.resetCursor();
        this._isSetCursor = false;
      }
    }));
  }
};
SheetCellImageHoverRenderController = __decorateClass([
  __decorateParam(1, Inject(HoverManagerService)),
  __decorateParam(2, Inject(SheetsSelectionsService)),
  __decorateParam(3, Inject(DrawingRenderService)),
  __decorateParam(4, Inject(SheetSkeletonManagerService))
], SheetCellImageHoverRenderController);

// ../packages/sheets-drawing-ui/src/controllers/render-controllers/sheet-drawing.render-controller.ts
var SheetsDrawingRenderController = class extends Disposable {
  constructor(_context, _sheetDrawingService, _drawingManagerService, _sheetSkeletonService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_sheetDrawingService", _sheetDrawingService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_sheetSkeletonService", _sheetSkeletonService);
    this._init();
  }
  _init() {
    this._drawingInitializeListener();
  }
  _drawingInitializeListener() {
    this._sheetDrawingService.initializeNotification(this._context.unitId);
    const data = this._sheetDrawingService.getDrawingDataForUnit(this._context.unitId);
    for (const subUnit in data) {
      const subUnitData = data[subUnit];
      for (const drawingId in subUnitData.data) {
        const drawingData = subUnitData.data[drawingId];
        const { unitId, subUnitId } = drawingData;
        const skeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
        if (skeletonParam && drawingData.sheetTransform) {
          drawingData.transform = drawingPositionToTransform(drawingData.sheetTransform, skeletonParam);
        }
      }
    }
    this._drawingManagerService.registerDrawingData(this._context.unitId, this._sheetDrawingService.getDrawingDataForUnit(this._context.unitId));
    this._drawingManagerService.initializeNotification(this._context.unitId);
  }
};
SheetsDrawingRenderController = __decorateClass([
  __decorateParam(1, ISheetDrawingService),
  __decorateParam(2, IDrawingManagerService),
  __decorateParam(3, Inject(SheetSkeletonService))
], SheetsDrawingRenderController);

// ../packages/sheets-drawing-ui/src/commands/commands/utils.ts
function ungroupToGroup(ungroupParams) {
  const newGroupParams = [];
  ungroupParams.forEach((ungroupParam) => {
    const { parent, children } = ungroupParam;
    const { unitId, subUnitId, drawingId: groupId } = parent;
    const groupTransform = getGroupState(0, 0, children.map((o) => o.transform || {}));
    const newChildren = children.map((drawing) => {
      const transform = drawing.transform || { left: 0, top: 0 };
      const { unitId: unitId2, subUnitId: subUnitId2, drawingId } = drawing;
      return {
        unitId: unitId2,
        subUnitId: subUnitId2,
        drawingId,
        transform: {
          ...transform,
          left: transform.left,
          top: transform.top
        },
        groupId
      };
    });
    const groupParam = {
      unitId,
      subUnitId,
      drawingId: groupId,
      drawingType: 6 /* DRAWING_GROUP */,
      groupBaseBound: { ...parent.groupBaseBound },
      transform: groupTransform
    };
    newGroupParams.push({
      parent: groupParam,
      children: newChildren
    });
  });
  return newGroupParams;
}
function groupToUngroup(groupParams) {
  const newGroupParams = [];
  groupParams.forEach((groupParam) => {
    const { parent, children } = groupParam;
    const { unitId, subUnitId, drawingId: groupId, transform: groupTransform = { width: 0, height: 0 } } = parent;
    if (groupTransform == null) {
      return;
    }
    const newChildren = children.map((object) => {
      const { transform } = object;
      const { unitId: unitId2, subUnitId: subUnitId2, drawingId } = object;
      const newTransform = transformObjectOutOfGroup(transform || {}, groupTransform, groupTransform.width || 0, groupTransform.height || 0, parent.groupBaseBound);
      return {
        unitId: unitId2,
        subUnitId: subUnitId2,
        drawingId,
        transform: newTransform,
        groupId: void 0
      };
    });
    const ungroupParam = {
      unitId,
      subUnitId,
      drawingId: groupId,
      drawingType: 6 /* DRAWING_GROUP */,
      transform: {
        left: 0,
        top: 0
      }
    };
    newGroupParams.push({
      parent: ungroupParam,
      children: newChildren
    });
  });
  return newGroupParams;
}
function cloneGroupParams(groupParams) {
  var _a, _b, _c, _d, _e, _f, _g;
  const idMap = /* @__PURE__ */ new Map();
  (_a = groupParams.flatChildren) == null ? void 0 : _a.forEach((p) => idMap.set(p.drawingId, generateRandomId(10)));
  groupParams.groups.forEach((p) => idMap.set(p.drawingId, generateRandomId(10)));
  const clonedNestedIdRecord = {};
  for (const [oldGroupId, entry] of Object.entries(groupParams.nestedIdRecord)) {
    const newGroupId = (_b = idMap.get(oldGroupId)) != null ? _b : oldGroupId;
    clonedNestedIdRecord[newGroupId] = {
      drawingId: newGroupId,
      children: (_c = entry.children) == null ? void 0 : _c.map((id) => {
        var _a2;
        return (_a2 = idMap.get(id)) != null ? _a2 : id;
      })
    };
  }
  const flatChildren = [];
  const groups = [];
  for (const group of groupParams.groups) {
    const groupDrawingId = (_d = idMap.get(group.drawingId)) != null ? _d : group.drawingId;
    const parentGroupId = group.groupId ? (_e = idMap.get(group.groupId)) != null ? _e : group.groupId : void 0;
    groups.push(cloneDrawingParam(group, groupDrawingId, parentGroupId));
  }
  for (const child of groupParams.flatChildren || []) {
    const childDrawingId = (_f = idMap.get(child.drawingId)) != null ? _f : child.drawingId;
    const parentGroupId = child.groupId ? (_g = idMap.get(child.groupId)) != null ? _g : child.groupId : void 0;
    flatChildren.push(cloneDrawingParam(child, childDrawingId, parentGroupId));
  }
  return {
    cloned: {
      nestedIdRecord: clonedNestedIdRecord,
      flatChildren,
      groups
    },
    idMap
  };
}
function cloneDrawingParam(param, newDrawingId, parentGroupId) {
  const newParam = { ...param };
  if (newDrawingId) {
    newParam.drawingId = newDrawingId;
  }
  if (parentGroupId) {
    newParam.groupId = parentGroupId;
  } else {
    delete newParam.groupId;
  }
  return JSON.parse(JSON.stringify(newParam));
}

// ../packages/sheets-drawing-ui/src/commands/commands/group-sheet-drawing.command.ts
var GroupSheetDrawingCommand = {
  id: "sheet.command.group-sheet-image",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    const commandService = accessor.get(ICommandService);
    const undoRedoService = accessor.get(IUndoRedoService);
    const sheetDrawingService = accessor.get(ISheetDrawingService);
    if (!params) return false;
    const unitIds = [];
    params.forEach(({ parent, children }) => {
      unitIds.push(parent.unitId);
      children.forEach((child) => {
        unitIds.push(child.unitId);
      });
    });
    const jsonOp = sheetDrawingService.getGroupDrawingOp(params);
    const { unitId, subUnitId, undo, redo, objects } = jsonOp;
    const result = commandService.syncExecuteCommand(SetDrawingApplyMutation.id, { op: redo, unitId, subUnitId, objects, type: 4 /* GROUP */ });
    if (result) {
      undoRedoService.pushUndoRedo({
        unitID: unitId,
        undoMutations: [
          { id: SetDrawingApplyMutation.id, params: { op: undo, unitId, subUnitId, objects: groupToUngroup(objects), type: 5 /* UNGROUP */ } },
          { id: ClearSheetDrawingTransformerOperation.id, params: unitIds }
        ],
        redoMutations: [
          { id: SetDrawingApplyMutation.id, params: { op: redo, unitId, subUnitId, objects, type: 4 /* GROUP */ } },
          { id: ClearSheetDrawingTransformerOperation.id, params: unitIds }
        ]
      });
      return true;
    }
    return false;
  }
};

// ../packages/sheets-drawing-ui/src/commands/commands/ungroup-sheet-drawing.command.ts
var UngroupSheetDrawingCommand = {
  id: "sheet.command.ungroup-sheet-image",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    const commandService = accessor.get(ICommandService);
    const undoRedoService = accessor.get(IUndoRedoService);
    const sheetDrawingService = accessor.get(ISheetDrawingService);
    if (!params) return false;
    const unitIds = [];
    params.forEach(({ parent, children }) => {
      unitIds.push(parent.unitId);
      children.forEach((child) => {
        unitIds.push(child.unitId);
      });
    });
    const jsonOp = sheetDrawingService.getUngroupDrawingOp(params);
    const { unitId, subUnitId, undo, redo, objects } = jsonOp;
    const result = commandService.syncExecuteCommand(SetDrawingApplyMutation.id, { op: redo, unitId, subUnitId, objects, type: 5 /* UNGROUP */ });
    if (result) {
      undoRedoService.pushUndoRedo({
        unitID: unitId,
        undoMutations: [
          { id: SetDrawingApplyMutation.id, params: { op: undo, unitId, subUnitId, objects: ungroupToGroup(objects), type: 4 /* GROUP */ } },
          { id: ClearSheetDrawingTransformerOperation.id, params: unitIds }
        ],
        redoMutations: [
          { id: SetDrawingApplyMutation.id, params: { op: redo, unitId, subUnitId, objects, type: 5 /* UNGROUP */ } },
          { id: ClearSheetDrawingTransformerOperation.id, params: unitIds }
        ]
      });
      return true;
    }
    return false;
  }
};

// ../packages/sheets-drawing-ui/src/controllers/sheet-drawing-update.controller.ts
function rotatedBoundingBox(width, height, angleDegrees) {
  const angle = angleDegrees * Math.PI / 180;
  const rotatedWidth = Math.abs(width * Math.cos(angle)) + Math.abs(height * Math.sin(angle));
  const rotatedHeight = Math.abs(width * Math.sin(angle)) + Math.abs(height * Math.cos(angle));
  return { rotatedWidth, rotatedHeight };
}
function getDrawingSizeByCell(accessor, location, originImageWidth, originImageHeight, angle) {
  var _a;
  const { rotatedHeight, rotatedWidth } = rotatedBoundingBox(originImageWidth, originImageHeight, angle);
  const renderManagerService = accessor.get(IRenderManagerService);
  const currentRender = renderManagerService.getRenderById(location.unitId);
  if (!currentRender) {
    return false;
  }
  const skeletonManagerService = currentRender.with(SheetSkeletonManagerService);
  const skeleton = (_a = skeletonManagerService.getSkeletonParam(location.subUnitId)) == null ? void 0 : _a.skeleton;
  if (skeleton == null) {
    return false;
  }
  const cellInfo = skeleton.getCellByIndex(location.row, location.col);
  const cellWidth = cellInfo.mergeInfo.endX - cellInfo.mergeInfo.startX - 2;
  const cellHeight = cellInfo.mergeInfo.endY - cellInfo.mergeInfo.startY - 2;
  const imageRatio = rotatedWidth / rotatedHeight;
  const imageWidth = Math.ceil(Math.min(cellWidth, cellHeight * imageRatio));
  const scale = imageWidth / rotatedWidth;
  const realScale = !scale || Number.isNaN(scale) ? 1e-3 : scale;
  return {
    width: originImageWidth * realScale,
    height: originImageHeight * realScale
  };
}
var SheetDrawingUpdateController = class extends Disposable {
  constructor(_context, _commandService, _sheetInterceptorService, _selectionRenderService, _imageIoService, _fileOpenerService, _sheetDrawingService, _drawingManagerService, _contextService, _messageService, _localeService, selectionManagerService, _sheetSkeletonService, _injector, _urlImageService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_sheetInterceptorService", _sheetInterceptorService);
    __publicField(this, "_selectionRenderService", _selectionRenderService);
    __publicField(this, "_imageIoService", _imageIoService);
    __publicField(this, "_fileOpenerService", _fileOpenerService);
    __publicField(this, "_sheetDrawingService", _sheetDrawingService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_contextService", _contextService);
    __publicField(this, "_messageService", _messageService);
    __publicField(this, "_localeService", _localeService);
    __publicField(this, "_sheetSkeletonService", _sheetSkeletonService);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_urlImageService", _urlImageService);
    __publicField(this, "_workbookSelections");
    this._workbookSelections = selectionManagerService.getWorkbookSelections(this._context.unitId);
    this._updateDrawingListener();
    this._updateOrderListener();
    this._groupDrawingListener();
    this._focusDrawingListener();
  }
  async insertFloatImage() {
    const files = await this._fileOpenerService.openFile({
      multiple: true,
      accept: DRAWING_IMAGE_ALLOW_IMAGE_LIST.map((image) => `.${image.replace("image/", "")}`).join(",")
    });
    const fileLength = files.length;
    if (fileLength > DRAWING_IMAGE_COUNT_LIMIT) {
      this._messageService.show({
        type: "error" /* Error */,
        content: this._localeService.t("sheets-drawing-ui.update-status.exceedMaxCount", String(DRAWING_IMAGE_COUNT_LIMIT))
      });
      return false;
    } else if (fileLength === 0) {
      return false;
    }
    files.forEach(async (file) => await this.insertFloatImageByFile(file));
    return true;
  }
  async insertCellImage() {
    const files = await this._fileOpenerService.openFile({
      multiple: false,
      accept: DRAWING_IMAGE_ALLOW_IMAGE_LIST.map((image) => `.${image.replace("image/", "")}`).join(",")
    });
    const file = files[0];
    if (file) {
      await this._insertCellImage(file);
      return true;
    }
    return false;
  }
  insertCellImageByFile(file, location) {
    return this._insertCellImage(file, location);
  }
  async insertFloatImageByFile(file) {
    var _a;
    let imageParam;
    try {
      imageParam = await this._imageIoService.saveImage(file);
    } catch (error) {
      const type = error.message;
      if (type === "1" /* ERROR_EXCEED_SIZE */) {
        this._messageService.show({
          type: "error" /* Error */,
          content: this._localeService.t("sheets-drawing-ui.update-status.exceedMaxSize", String(getDrawingImageAllowSize() / (1024 * 1024)))
        });
      } else if (type === "2" /* ERROR_IMAGE_TYPE */) {
        this._messageService.show({
          type: "error" /* Error */,
          content: this._localeService.t("sheets-drawing-ui.update-status.invalidImageType")
        });
      } else if (type === "4" /* ERROR_IMAGE */) {
        this._messageService.show({
          type: "error" /* Error */,
          content: this._localeService.t("sheets-drawing-ui.update-status.invalidImage")
        });
      }
    }
    if (imageParam == null) {
      return;
    }
    const info = this._getUnitInfo();
    const { unitId, subUnitId } = info;
    const { imageId, imageSourceType, source, base64Cache } = imageParam;
    const { width, height, image } = await getImageSize(base64Cache || "");
    const { width: sceneWidth, height: sceneHeight } = this._context.scene;
    this._imageIoService.addImageSourceCache(source, imageSourceType, image);
    let scale = 1;
    if (width > DRAWING_IMAGE_WIDTH_LIMIT || height > DRAWING_IMAGE_HEIGHT_LIMIT) {
      const scaleWidth = DRAWING_IMAGE_WIDTH_LIMIT / width;
      const scaleHeight = DRAWING_IMAGE_HEIGHT_LIMIT / height;
      scale = Math.max(scaleWidth, scaleHeight);
    }
    const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
    if (!sheetSkeletonParam) return;
    const { skeleton } = sheetSkeletonParam;
    const sheetTransform = this._getImagePosition(width * scale, height * scale, sceneWidth, sceneHeight, skeleton);
    if (!sheetTransform) return;
    const newTransform = drawingPositionToTransform(sheetTransform, sheetSkeletonParam);
    if (!newTransform) return;
    const sheetDrawingParam = {
      unitId,
      subUnitId,
      drawingId: imageId,
      drawingType: 0 /* DRAWING_IMAGE */,
      imageSourceType,
      source,
      transform: newTransform,
      sheetTransform,
      axisAlignSheetTransform: (_a = transformToAxisAlignPosition(newTransform, skeleton)) != null ? _a : sheetTransform
    };
    return this._commandService.executeCommand(InsertSheetDrawingCommand.id, {
      unitId,
      drawings: [sheetDrawingParam]
    });
  }
  // eslint-disable-next-line max-lines-per-function
  async _insertCellImage(file, location) {
    var _a, _b;
    let imageParam;
    try {
      imageParam = await this._imageIoService.saveImage(file);
    } catch (error) {
      const type = error.message;
      if (type === "1" /* ERROR_EXCEED_SIZE */) {
        this._messageService.show({
          type: "error" /* Error */,
          content: this._localeService.t("sheets-drawing-ui.update-status.exceedMaxSize", String(getDrawingImageAllowSize() / (1024 * 1024)))
        });
      } else if (type === "2" /* ERROR_IMAGE_TYPE */) {
        this._messageService.show({
          type: "error" /* Error */,
          content: this._localeService.t("sheets-drawing-ui.update-status.invalidImageType")
        });
      } else if (type === "4" /* ERROR_IMAGE */) {
        this._messageService.show({
          type: "error" /* Error */,
          content: this._localeService.t("sheets-drawing-ui.update-status.invalidImage")
        });
      }
    }
    if (imageParam == null) {
      return false;
    }
    const { imageId, imageSourceType, source, base64Cache } = imageParam;
    const { width, height, image } = await getImageSize(base64Cache || "");
    this._imageIoService.addImageSourceCache(source, imageSourceType, image);
    const selection = this._workbookSelections.getCurrentLastSelection();
    if (!selection) {
      return false;
    }
    let row = selection.primary.actualRow;
    let col = selection.primary.actualColumn;
    if (selection.primary.isMerged) {
      row = selection.primary.startRow;
      col = selection.primary.startColumn;
    }
    const docDataModel = createDocumentModelWithStyle("", {});
    const imageSize = getDrawingSizeByCell(
      this._injector,
      {
        unitId: this._context.unitId,
        subUnitId: this._context.unit.getActiveSheet().getSheetId(),
        row,
        col
      },
      width,
      height,
      0
    );
    if (!imageSize) {
      return false;
    }
    const docTransform = {
      size: {
        width: imageSize.width,
        height: imageSize.height
      },
      positionH: {
        relativeFrom: 0 /* PAGE */,
        posOffset: 0
      },
      positionV: {
        relativeFrom: 1 /* PARAGRAPH */,
        posOffset: 0
      },
      angle: 0
    };
    const docDrawingParam = {
      unitId: docDataModel.getUnitId(),
      subUnitId: docDataModel.getUnitId(),
      drawingId: imageId,
      drawingType: 0 /* DRAWING_IMAGE */,
      imageSourceType,
      source,
      transform: docDrawingPositionToTransform(docTransform),
      docTransform,
      behindDoc: 0 /* FALSE */,
      title: "",
      description: "",
      layoutType: 0 /* INLINE */,
      // Insert inline drawing by default.
      wrapText: 0 /* BOTH_SIDES */,
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0
    };
    const jsonXActions = BuildTextUtils.drawing.add({
      documentDataModel: docDataModel,
      drawings: [docDrawingParam],
      selection: {
        collapsed: true,
        startOffset: 0,
        endOffset: 0
      }
    });
    if (jsonXActions) {
      docDataModel.apply(jsonXActions);
      return this._commandService.syncExecuteCommand(SetRangeValuesCommand.id, {
        value: {
          [(_a = location == null ? void 0 : location.row) != null ? _a : row]: {
            [(_b = location == null ? void 0 : location.col) != null ? _b : col]: {
              p: docDataModel.getSnapshot(),
              t: 1
            }
          }
        },
        unitId: location == null ? void 0 : location.unitId,
        subUnitId: location == null ? void 0 : location.subUnitId
      });
    }
    return false;
  }
  // eslint-disable-next-line max-lines-per-function
  async insertCellImageByUrl(url, location) {
    var _a, _b;
    let src = url;
    try {
      src = await this._urlImageService.getImage(url);
    } catch (error) {
      console.error(`Failed to get image from URLImageService: ${url}`, error);
    }
    const { width, height, image } = await getImageSize(src || "");
    this._imageIoService.addImageSourceCache(url, "URL" /* URL */, image);
    const selection = this._workbookSelections.getCurrentLastSelection();
    if (!selection) {
      return false;
    }
    const docDataModel = createDocumentModelWithStyle("", {});
    const imageSize = getDrawingSizeByCell(
      this._injector,
      {
        unitId: this._context.unitId,
        subUnitId: this._context.unit.getActiveSheet().getSheetId(),
        row: selection.primary.actualRow,
        col: selection.primary.actualColumn
      },
      width,
      height,
      0
    );
    if (!imageSize) {
      return false;
    }
    const docTransform = {
      size: {
        width: imageSize.width,
        height: imageSize.height
      },
      positionH: {
        relativeFrom: 0 /* PAGE */,
        posOffset: 0
      },
      positionV: {
        relativeFrom: 1 /* PARAGRAPH */,
        posOffset: 0
      },
      angle: 0
    };
    const docDrawingParam = {
      unitId: docDataModel.getUnitId(),
      subUnitId: docDataModel.getUnitId(),
      drawingId: generateRandomId(),
      drawingType: 0 /* DRAWING_IMAGE */,
      imageSourceType: "URL" /* URL */,
      source: url,
      transform: docDrawingPositionToTransform(docTransform),
      docTransform,
      behindDoc: 0 /* FALSE */,
      title: "",
      description: "",
      layoutType: 0 /* INLINE */,
      // Insert inline drawing by default.
      wrapText: 0 /* BOTH_SIDES */,
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0
    };
    const jsonXActions = BuildTextUtils.drawing.add({
      documentDataModel: docDataModel,
      drawings: [docDrawingParam],
      selection: {
        collapsed: true,
        startOffset: 0,
        endOffset: 0
      }
    });
    if (jsonXActions) {
      docDataModel.apply(jsonXActions);
      return this._commandService.syncExecuteCommand(SetRangeValuesCommand.id, {
        value: {
          [(_a = location == null ? void 0 : location.row) != null ? _a : selection.primary.actualRow]: {
            [(_b = location == null ? void 0 : location.col) != null ? _b : selection.primary.actualColumn]: {
              p: docDataModel.getSnapshot(),
              t: 1
            }
          }
        },
        unitId: location == null ? void 0 : location.unitId,
        subUnitId: location == null ? void 0 : location.subUnitId
      });
    }
    return false;
  }
  _getUnitInfo() {
    const workbook = this._context.unit;
    const worksheet = workbook.getActiveSheet();
    const unitId = workbook.getUnitId();
    const subUnitId = worksheet.getSheetId();
    return {
      unitId,
      subUnitId
    };
  }
  _getImagePosition(imageWidth, imageHeight, sceneWidth, sceneHeight, skeleton) {
    const selections = this._workbookSelections.getCurrentSelections();
    let range = {
      startRow: 0,
      endRow: 0,
      startColumn: 0,
      endColumn: 0
    };
    if (selections && selections.length > 0) {
      range = selections[selections.length - 1].range;
    }
    const rangeWithCoord = attachRangeWithCoord(skeleton, range);
    if (rangeWithCoord == null) {
      return;
    }
    let { startColumn, startRow, startX, startY } = rangeWithCoord;
    let isChangeStart = false;
    if (startX + imageWidth > sceneWidth) {
      startX = sceneWidth - imageWidth;
      if (startX < 0) {
        startX = 0;
        imageWidth = sceneWidth;
      }
      isChangeStart = true;
    }
    if (startY + imageHeight > sceneHeight) {
      startY = sceneHeight - imageHeight;
      if (startY < 0) {
        startY = 0;
        imageHeight = sceneHeight;
      }
      isChangeStart = true;
    }
    if (isChangeStart) {
      const newCoord = this._selectionRenderService.getCellWithCoordByOffset(startX, startY);
      if (newCoord == null) {
        return;
      }
      startX = newCoord.startX;
      startY = newCoord.startY;
      startColumn = newCoord.actualColumn;
      startRow = newCoord.actualRow;
    }
    const from = {
      column: startColumn,
      columnOffset: 0,
      row: startRow,
      rowOffset: 0
    };
    const endSelectionCell = this._selectionRenderService.getCellWithCoordByOffset(startX + imageWidth, startY + imageHeight);
    if (endSelectionCell == null) {
      return;
    }
    const to = {
      column: endSelectionCell.actualColumn,
      columnOffset: startX + imageWidth - endSelectionCell.startX,
      row: endSelectionCell.actualRow,
      rowOffset: startY + imageHeight - endSelectionCell.startY
    };
    return {
      from,
      to
    };
  }
  _updateOrderListener() {
    this.disposeWithMe(this._drawingManagerService.featurePluginOrderUpdate$.subscribe((params) => {
      const { unitId, subUnitId, drawingIds, arrangeType } = params;
      this._commandService.executeCommand(SetDrawingArrangeCommand.id, {
        unitId,
        subUnitId,
        drawingIds,
        arrangeType
      });
    }));
  }
  _updateDrawingListener() {
    this.disposeWithMe(this._drawingManagerService.featurePluginUpdate$.subscribe((params) => {
      const drawings = [];
      if (params.length === 0) {
        return;
      }
      params.forEach((param) => {
        const { unitId, subUnitId, drawingId, transform } = param;
        const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
        if (!transform || !sheetSkeletonParam) {
          return;
        }
        const { skeleton } = sheetSkeletonParam;
        const sheetDrawing = this._sheetDrawingService.getDrawingByParam({ unitId, subUnitId, drawingId });
        if (sheetDrawing == null || sheetDrawing.unitId !== this._context.unitId) {
          return;
        }
        const sheetTransform = transformToDrawingPosition({ ...sheetDrawing.transform, ...transform }, skeleton);
        const axisAlignSheetTransform = transformToAxisAlignPosition({ ...sheetDrawing.transform, ...transform }, skeleton);
        if (sheetTransform == null || axisAlignSheetTransform == null) {
          return;
        }
        const newDrawing = {
          ...param,
          transform: { ...sheetDrawing.transform, ...transform, ...drawingPositionToTransform(sheetTransform, sheetSkeletonParam) },
          sheetTransform: { ...sheetTransform },
          axisAlignSheetTransform: { ...axisAlignSheetTransform }
        };
        drawings.push(newDrawing);
      });
      if (drawings.length > 0) {
        this._commandService.executeCommand(SetSheetDrawingCommand.id, {
          unitId: params[0].unitId,
          drawings
        });
      }
    }));
  }
  _getSheetTransformByParam(param, isCreate) {
    const { unitId, subUnitId, drawingId, transform } = param;
    const skeleton = this._sheetSkeletonService.getSkeleton(unitId, subUnitId);
    if (!transform || !skeleton) {
      return null;
    }
    const sheetDrawing = this._sheetDrawingService.getDrawingByParam({ unitId, subUnitId, drawingId });
    let sheetDrawingTransform = sheetDrawing == null ? void 0 : sheetDrawing.transform;
    if (isCreate) {
      sheetDrawingTransform = {};
    }
    if (!isCreate && (!sheetDrawing || sheetDrawing.unitId !== this._context.unitId)) {
      return null;
    }
    const sheetTransform = transformToDrawingPosition({ ...sheetDrawingTransform, ...transform }, skeleton);
    const axisAlignSheetTransform = transformToAxisAlignPosition({ ...sheetDrawingTransform, ...transform }, skeleton);
    if (!sheetTransform || !axisAlignSheetTransform) {
      return null;
    }
    return { sheetTransform, axisAlignSheetTransform };
  }
  _groupDrawingListener() {
    this.disposeWithMe(this._drawingManagerService.featurePluginGroupUpdate$.subscribe((params) => {
      const grpParams = [];
      for (const param of params) {
        const grpSheetTransform = this._getSheetTransformByParam(param.parent, true);
        const children = [];
        for (const child of param.children) {
          const childSheetTransformInfo = this._getSheetTransformByParam(child, false);
          if (childSheetTransformInfo != null) {
            children.push({
              ...child,
              sheetTransform: childSheetTransformInfo.sheetTransform,
              axisAlignSheetTransform: childSheetTransformInfo.axisAlignSheetTransform
            });
          }
        }
        const grpParam = {
          parent: { ...param.parent, sheetTransform: grpSheetTransform == null ? void 0 : grpSheetTransform.sheetTransform, axisAlignSheetTransform: grpSheetTransform == null ? void 0 : grpSheetTransform.axisAlignSheetTransform },
          children
        };
        grpParams.push(grpParam);
      }
      if (grpParams.length > 0) {
        this._commandService.executeCommand(GroupSheetDrawingCommand.id, grpParams);
        const { unitId, subUnitId, drawingId } = params[0].parent;
        this._commandService.syncExecuteCommand(SetDrawingSelectedOperation.id, [{ unitId, subUnitId, drawingId }]);
      }
    }));
    this.disposeWithMe(this._drawingManagerService.featurePluginUngroupUpdate$.subscribe((params) => {
      const unGroupParams = [];
      for (const param of params) {
        const { children } = param;
        const childParams = [];
        for (const child of children) {
          const childSheetTransform = this._getSheetTransformByParam(child, false);
          if (childSheetTransform != null) {
            childParams.push({
              ...child,
              sheetTransform: childSheetTransform.sheetTransform,
              axisAlignSheetTransform: childSheetTransform.axisAlignSheetTransform
            });
          }
        }
        unGroupParams.push({
          ...param,
          children: childParams
        });
      }
      this._commandService.executeCommand(UngroupSheetDrawingCommand.id, unGroupParams);
    }));
  }
  _focusDrawingListener() {
    this.disposeWithMe(
      this._drawingManagerService.focus$.subscribe((params) => {
        if (params == null || params.length === 0) {
          this._contextService.setContextValue(FOCUSING_COMMON_DRAWINGS, false);
          this._sheetDrawingService.focusDrawing([]);
        } else {
          this._contextService.setContextValue(FOCUSING_COMMON_DRAWINGS, true);
          this._sheetDrawingService.focusDrawing(params);
        }
      })
    );
  }
};
SheetDrawingUpdateController = __decorateClass([
  __decorateParam(1, ICommandService),
  __decorateParam(2, Inject(SheetInterceptorService)),
  __decorateParam(3, ISheetSelectionRenderService),
  __decorateParam(4, IImageIoService),
  __decorateParam(5, ILocalFileService),
  __decorateParam(6, ISheetDrawingService),
  __decorateParam(7, IDrawingManagerService),
  __decorateParam(8, IContextService),
  __decorateParam(9, IMessageService),
  __decorateParam(10, Inject(LocaleService)),
  __decorateParam(11, Inject(SheetsSelectionsService)),
  __decorateParam(12, Inject(SheetSkeletonService)),
  __decorateParam(13, Inject(Injector)),
  __decorateParam(14, IURLImageService)
], SheetDrawingUpdateController);

// ../packages/sheets-drawing-ui/src/controllers/sheet-cell-image.controller.ts
function resizeImageByCell(injector, location, cell) {
  var _a, _b, _c, _d;
  if (((_b = (_a = cell == null ? void 0 : cell.p) == null ? void 0 : _a.body) == null ? void 0 : _b.dataStream.length) === 3 && ((_d = (_c = cell.p) == null ? void 0 : _c.drawingsOrder) == null ? void 0 : _d.length) === 1) {
    const image = cell.p.drawings[cell.p.drawingsOrder[0]];
    const imageSize = getDrawingSizeByCell(
      injector,
      {
        unitId: location.unitId,
        subUnitId: location.subUnitId,
        row: location.row,
        col: location.col
      },
      image.docTransform.size.width,
      image.docTransform.size.height,
      image.docTransform.angle
    );
    if (imageSize) {
      image.transform.width = imageSize.width;
      image.transform.height = imageSize.height;
      image.docTransform.size.width = imageSize.width;
      image.docTransform.size.height = imageSize.height;
      image.transform.left = 0;
      image.transform.top = 0;
      image.docTransform.positionH.posOffset = 0;
      image.docTransform.positionV.posOffset = 0;
      cell.p.documentStyle.pageSize.width = Infinity;
      cell.p.documentStyle.pageSize.height = Infinity;
      return true;
    }
  }
  return false;
}
var SheetCellImageController = class extends Disposable {
  constructor(_commandService, _sheetInterceptorService, _injector, _drawingManagerService, _docDrawingController, _editorBridgeService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_sheetInterceptorService", _sheetInterceptorService);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_docDrawingController", _docDrawingController);
    __publicField(this, "_editorBridgeService", _editorBridgeService);
    this._handleInitEditor();
    this._initCellContentInterceptor();
  }
  _handleInitEditor() {
    this.disposeWithMe(this._editorBridgeService.visible$.subscribe((param) => {
      if (!param.visible) {
        this._drawingManagerService.removeDrawingDataForUnit(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
      } else if (param.visible) {
        this._drawingManagerService.removeDrawingDataForUnit(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
        this._docDrawingController.loadDrawingDataForUnit(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
        this._drawingManagerService.initializeNotification(DOCS_NORMAL_EDITOR_UNIT_ID_KEY);
      }
    }));
    this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
      if (commandInfo.id === ReplaceSnapshotCommand.id) {
        const params = commandInfo.params;
        const unitId = params.unitId;
        if (unitId === DOCS_ZEN_EDITOR_UNIT_ID_KEY) {
          this._drawingManagerService.removeDrawingDataForUnit(DOCS_ZEN_EDITOR_UNIT_ID_KEY);
          this._docDrawingController.loadDrawingDataForUnit(DOCS_ZEN_EDITOR_UNIT_ID_KEY);
          this._drawingManagerService.initializeNotification(DOCS_ZEN_EDITOR_UNIT_ID_KEY);
        }
      }
    }));
  }
  _initCellContentInterceptor() {
    this.disposeWithMe(
      this._sheetInterceptorService.intercept(
        INTERCEPTOR_POINT.CELL_CONTENT,
        {
          effect: 1 /* Style */,
          priority: 11 /* CELL_IMAGE */,
          handler: (cell, pos, next) => {
            var _a;
            if ((cell == null ? void 0 : cell.p) && ((_a = cell.p.drawingsOrder) == null ? void 0 : _a.length)) {
              if (cell === pos.rawData) {
                cell = { ...pos.rawData };
              }
              if (!cell.interceptorStyle) {
                cell.interceptorStyle = {};
              }
              cell.interceptorStyle.tr = { a: 0 };
              resizeImageByCell(this._injector, { unitId: pos.unitId, subUnitId: pos.subUnitId, row: pos.row, col: pos.col }, cell);
            }
            return next(cell);
          }
        }
      )
    );
  }
};
SheetCellImageController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(SheetInterceptorService)),
  __decorateParam(2, Inject(Injector)),
  __decorateParam(3, IDrawingManagerService),
  __decorateParam(4, Inject(DocDrawingController)),
  __decorateParam(5, Inject(IEditorBridgeService))
], SheetCellImageController);

// ../packages/sheets-drawing-ui/src/controllers/sheet-cell-image-autofill.controller.ts
var SheetCellImageAutofillController = class extends Disposable {
  constructor(_autoFillService, _injector) {
    super();
    __publicField(this, "_autoFillService", _autoFillService);
    __publicField(this, "_injector", _injector);
    this._initAutoFillHooks();
  }
  _initAutoFillHooks() {
    this.disposeWithMe(
      this._autoFillService.addHook({
        id: "sheet-cell-image-autofill",
        onBeforeSubmit: (location, direction, applyType, cellValue) => {
          new ObjectMatrix(cellValue).forValue((row, col, cell) => {
            resizeImageByCell(this._injector, { unitId: location.unitId, subUnitId: location.subUnitId, row, col }, cell);
          });
        }
      })
    );
  }
};
SheetCellImageAutofillController = __decorateClass([
  __decorateParam(0, Inject(IAutoFillService)),
  __decorateParam(1, Inject(Injector))
], SheetCellImageAutofillController);

// ../packages/sheets-drawing-ui/src/controllers/sheet-cell-image-copy-paste.controller.ts
var DISABLE_UNITS = [
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY,
  DOCS_ZEN_EDITOR_UNIT_ID_KEY
];
var SheetCellImageCopyPasteController = class extends Disposable {
  constructor(_commandService, _univerInstanceService, _dialogService, _renderManagerService, _localeService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_dialogService", _dialogService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_localeService", _localeService);
    this._initDocImageCopyPasteHooks();
  }
  _setCellImage(drwaing) {
    var _a;
    const docDataModel = createDocumentModelWithStyle("", {});
    const editingRenderController = (_a = getCurrentTypeOfRenderer(2 /* UNIVER_SHEET */, this._univerInstanceService, this._renderManagerService)) == null ? void 0 : _a.with(EditingRenderController);
    const jsonXActions = BuildTextUtils.drawing.add({
      documentDataModel: docDataModel,
      drawings: [drwaing],
      selection: {
        collapsed: true,
        startOffset: 0,
        endOffset: 0
      }
    });
    if (jsonXActions) {
      docDataModel.apply(jsonXActions);
      if (editingRenderController) {
        editingRenderController.submitCellData(docDataModel);
      }
    }
  }
  _initDocImageCopyPasteHooks() {
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((commandInfo) => {
        var _a, _b;
        if (commandInfo.id === InnerPasteCommand.id) {
          const params = commandInfo.params;
          const { doc } = params;
          const currentDoc = this._univerInstanceService.getCurrentUnitOfType(1 /* UNIVER_DOC */);
          if (currentDoc == null || !Object.keys((_a = doc.drawings) != null ? _a : {}).length) {
            return;
          }
          const docUnitId = currentDoc.getUnitId();
          if (DISABLE_UNITS.includes(docUnitId)) {
            if (docUnitId !== DOCS_ZEN_EDITOR_UNIT_ID_KEY) {
              const handleCloseDialog = () => {
                this._dialogService.close("sheet-cell-image-copy-paste");
                this._commandService.syncExecuteCommand(SetCellEditVisibleOperation.id, {
                  visible: false
                });
              };
              if (((_b = currentDoc.getBody()) == null ? void 0 : _b.dataStream) === "\r\n") {
                this._commandService.syncExecuteCommand(SetCellEditVisibleOperation.id, {
                  visible: false
                });
                this._setCellImage(Object.values(doc.drawings)[0]);
              } else {
                this._dialogService.open({
                  id: "sheet-cell-image-copy-paste",
                  title: {
                    label: this._localeService.t("sheets-drawing-ui.cell-image.pasteTitle")
                  },
                  children: {
                    label: this._localeService.t("sheets-drawing-ui.cell-image.pasteContent")
                  },
                  width: 320,
                  destroyOnClose: true,
                  onClose: handleCloseDialog,
                  showOk: true,
                  showCancel: true,
                  onOk: () => {
                    handleCloseDialog();
                    this._setCellImage(Object.values(doc.drawings)[0]);
                  },
                  onCancel: handleCloseDialog
                });
              }
            }
          }
        }
      })
    );
  }
};
SheetCellImageCopyPasteController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, IDialogService),
  __decorateParam(3, IRenderManagerService),
  __decorateParam(4, Inject(LocaleService))
], SheetCellImageCopyPasteController);

// ../packages/sheets-drawing-ui/src/commands/commands/insert-image.command.ts
var InsertFloatImageCommand = {
  id: "sheet.command.insert-float-image",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    var _a, _b;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const renderManagerService = accessor.get(IRenderManagerService);
    const sheetDrawingUpdateController = (_a = getCurrentTypeOfRenderer(
      2 /* UNIVER_SHEET */,
      univerInstanceService,
      renderManagerService
    )) == null ? void 0 : _a.with(SheetDrawingUpdateController);
    if (!sheetDrawingUpdateController) {
      return false;
    }
    const files = params == null ? void 0 : params.files;
    if (files) {
      const awaitFiles = files.map((file) => sheetDrawingUpdateController.insertFloatImageByFile(file));
      return (await Promise.all(awaitFiles)).every((result) => result);
    } else {
      return (_b = sheetDrawingUpdateController.insertFloatImage()) != null ? _b : false;
    }
  }
};
var InsertCellImageCommand = {
  id: "sheet.command.insert-cell-image",
  type: 0 /* COMMAND */,
  handler: (accessor) => {
    var _a, _b;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const renderManagerService = accessor.get(IRenderManagerService);
    return (_b = (_a = getCurrentTypeOfRenderer(
      2 /* UNIVER_SHEET */,
      univerInstanceService,
      renderManagerService
    )) == null ? void 0 : _a.with(SheetDrawingUpdateController).insertCellImage()) != null ? _b : false;
  }
};

// ../packages/sheets-drawing-ui/src/controllers/sheet-drawing-copy-paste.controller.ts
var IMAGE_PNG_MIME_TYPE = "image/png";
function base64ToBlob(base64) {
  const arr = base64.split(",");
  const binStr = atob(arr[1]);
  const len = binStr.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binStr.charCodeAt(i);
  }
  return new Blob([bytes], { type: IMAGE_PNG_MIME_TYPE });
}
function copyBase64ToClipboard(base64) {
  const item = new ClipboardItem({ [IMAGE_PNG_MIME_TYPE]: base64ToBlob(base64) });
  navigator.clipboard.write([item]).catch((err) => {
    console.error("Could not copy image using clipboard API: ", err);
  });
}
function focusDocument() {
  function createInputElement() {
    const input2 = document.createElement("input");
    input2.style.position = "absolute";
    input2.style.height = "1px";
    input2.style.width = "1px";
    input2.style.opacity = "0";
    return input2;
  }
  const activeElement = document.activeElement;
  const input = createInputElement();
  document.body.appendChild(input);
  input.focus();
  return () => {
    input.blur();
    document.body.removeChild(input);
    if (activeElement instanceof HTMLElement) {
      activeElement.focus();
    }
  };
}
var specialPastes = [
  PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_COL_WIDTH,
  PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_VALUE,
  PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_FORMAT,
  PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_FORMULA
];
var SheetsDrawingCopyPasteController = class extends Disposable {
  constructor(_sheetClipboardService, _renderManagerService, _sheetSkeletonService, _drawingService, _clipboardInterfaceService, _commandService) {
    super();
    __publicField(this, "_sheetClipboardService", _sheetClipboardService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_sheetSkeletonService", _sheetSkeletonService);
    __publicField(this, "_drawingService", _drawingService);
    __publicField(this, "_clipboardInterfaceService", _clipboardInterfaceService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_copyInfo");
    this._initCopyPaste();
  }
  get _focusedDrawings() {
    return this._drawingService.getFocusDrawings();
  }
  // eslint-disable-next-line max-lines-per-function
  _initCopyPaste() {
    this._sheetClipboardService.addClipboardHook({
      id: "SHEET_IMAGE_UI_PLUGIN",
      onBeforeCopy: (unitId, subUnitId, range, copyType) => {
        this._copyInfo = null;
        const focusDrawings = this._focusedDrawings;
        if (focusDrawings.length > 0) {
          const [drawing] = focusDrawings;
          if (drawing.drawingType !== 0 /* DRAWING_IMAGE */) {
            return;
          }
          if (copyType === "CUT" /* CUT */) {
            const params = {
              unitId,
              drawings: [drawing]
            };
            this._commandService.executeCommand(RemoveSheetDrawingCommand.id, params);
          }
          setTimeout(() => {
            const dispose = focusDocument();
            if (drawing.drawingType === 0 /* DRAWING_IMAGE */ && drawing.imageSourceType === "BASE64" /* BASE64 */) {
              copyBase64ToClipboard(drawing.source);
            } else {
              this._clipboardInterfaceService.writeText("");
            }
            dispose();
          }, 200);
          const newCopyInfo = {
            unitId: drawing.unitId,
            subUnitId: drawing.subUnitId,
            drawings: [drawing]
          };
          this._copyInfo = newCopyInfo;
        } else {
          const newCopyInfo = this._createDrawingsCopyInfoByRange(unitId, subUnitId, range);
          this._copyInfo = newCopyInfo;
        }
      },
      onPasteCells: (pasteFrom, pasteTo, data, payload) => {
        if (!this._copyInfo) {
          return { redos: [], undos: [] };
        }
        const { copyType = "COPY" /* COPY */, pasteType } = payload;
        const { range: copyRange, unitId: fromUnitId, subUnitId: fromSubUnitId } = pasteFrom || {};
        const { range: pasteRange, unitId: toUnitId, subUnitId: toSubUnitId } = pasteTo;
        const mutations = this._copyInfo.copyRange ? this._generateRangeDrawingsPasteMutations(
          { unitId: toUnitId, subUnitId: toSubUnitId, pasteRange, pasteType },
          { unitId: fromUnitId, subUnitId: fromSubUnitId, copyType, copyRange }
        ) : this._generateSingleDrawingPasteMutations({ pasteTo, pasteType }, "COPY" /* COPY */);
        return mutations;
      },
      onPastePlainText: (pasteTo, clipText) => {
        return { undos: [], redos: [] };
      },
      onPasteUnrecognized: (pasteTo) => {
        if (this._copyInfo) {
          return this._generateSingleDrawingPasteMutations({ pasteTo, pasteType: PREDEFINED_HOOK_NAME_PASTE.DEFAULT_PASTE }, "COPY" /* COPY */);
        } else {
          return { undos: [], redos: [] };
        }
      },
      onPasteFiles: (pasteTo, files) => {
        if (this._copyInfo) {
          return this._generateSingleDrawingPasteMutations({ pasteTo, pasteType: PREDEFINED_HOOK_NAME_PASTE.DEFAULT_PASTE }, "COPY" /* COPY */);
        } else {
          const images = files.filter((file) => file.type.includes("image"));
          if (images.length) {
            return {
              undos: [],
              redos: [
                {
                  id: InsertFloatImageCommand.id,
                  params: { files: images }
                }
              ]
            };
          }
        }
        return { undos: [], redos: [] };
      }
    });
  }
  _createDrawingsCopyInfoByRange(unitId, subUnitId, range) {
    const skeleton = this._sheetSkeletonService.getSkeleton(unitId, subUnitId);
    if (!skeleton) return;
    const selectionRect = attachRangeWithCoord(skeleton, range);
    if (!selectionRect) return;
    const { startX, endX, startY, endY } = selectionRect;
    const drawings = this._drawingService.getDrawingData(unitId, subUnitId);
    const containedDrawings = this._focusedDrawings.slice();
    Object.keys(drawings).forEach((drawingId) => {
      const drawing = drawings[drawingId];
      if (drawing.drawingType !== 0 /* DRAWING_IMAGE */) {
        return;
      }
      const { transform } = drawing;
      if (drawing.anchorType !== "1" /* Both */) {
        return;
      }
      if (!transform) {
        return;
      }
      const { left = 0, top = 0, width = 0, height = 0 } = transform;
      const { drawingStartX, drawingEndX, drawingStartY, drawingEndY } = {
        drawingStartX: left,
        drawingEndX: left + width,
        drawingStartY: top,
        drawingEndY: top + height
      };
      if (startX <= drawingStartX && drawingEndX <= endX && startY <= drawingStartY && drawingEndY <= endY) {
        containedDrawings.push(drawing);
      }
    });
    if (containedDrawings.length) {
      return {
        copyRange: range,
        drawings: containedDrawings,
        unitId,
        subUnitId
      };
    }
  }
  _generateSingleDrawingPasteMutations(pasteContext, copyType) {
    const { pasteType, pasteTo } = pasteContext;
    if (specialPastes.includes(pasteType)) {
      return { redos: [], undos: [] };
    }
    const { unitId, subUnitId, range } = pasteTo;
    const pasteToSkeleton = this._sheetSkeletonService.getSkeleton(unitId, subUnitId);
    if (!pasteToSkeleton) {
      return { redos: [], undos: [] };
    }
    const copyInfo = this._copyInfo;
    const { drawings } = copyInfo;
    const pasteRange = discreteRangeToRange(range);
    return this._generateMutations(drawings, {
      unitId,
      subUnitId,
      isCut: copyType === "CUT" /* CUT */,
      getTransform: (transform, sheetTransform) => {
        var _a, _b;
        const pasteRect = attachRangeWithCoord(pasteToSkeleton, {
          startRow: pasteRange.startRow,
          endRow: pasteRange.endRow,
          startColumn: pasteRange.startColumn,
          endColumn: pasteRange.endColumn
        });
        const newTransform = {
          ...transform,
          left: pasteRect == null ? void 0 : pasteRect.startX,
          top: pasteRect == null ? void 0 : pasteRect.startY
        };
        return {
          transform: newTransform,
          sheetTransform: (_a = transformToDrawingPosition(newTransform, pasteToSkeleton)) != null ? _a : sheetTransform,
          axisAlignSheetTransform: (_b = transformToAxisAlignPosition(newTransform, pasteToSkeleton)) != null ? _b : sheetTransform
        };
      }
    });
  }
  _generateMutations(drawings, payload) {
    const {
      unitId,
      subUnitId,
      getTransform,
      isCut
    } = payload;
    const redos = [];
    const undos = [];
    const { _drawingService } = this;
    drawings.forEach((drawing) => {
      const { transform, sheetTransform } = drawing;
      if (!transform) {
        return;
      }
      const transformContext = getTransform(transform, sheetTransform);
      const drawingObject = {
        ...drawing,
        unitId,
        subUnitId,
        drawingId: isCut ? drawing.drawingId : generateRandomId(),
        transform: transformContext.transform,
        sheetTransform: transformContext.sheetTransform,
        axisAlignSheetTransform: transformContext.axisAlignSheetTransform
      };
      if (isCut) {
        const { undo, redo, objects } = _drawingService.getBatchUpdateOp([drawingObject]);
        redos.push({
          id: SetDrawingApplyMutation.id,
          params: {
            unitId,
            subUnitId,
            type: 2 /* UPDATE */,
            op: redo,
            objects
          }
        });
        undos.push({
          id: SetDrawingApplyMutation.id,
          params: {
            unitId,
            subUnitId,
            type: 2 /* UPDATE */,
            op: undo,
            objects
          }
        });
      } else {
        const { undo, redo, objects } = _drawingService.getBatchAddOp([drawingObject]);
        redos.push({ id: SetDrawingApplyMutation.id, params: { op: redo, unitId, subUnitId, objects, type: 0 /* INSERT */ } });
        undos.push({ id: SetDrawingApplyMutation.id, params: { op: undo, unitId, subUnitId, objects, type: 1 /* REMOVE */ } });
      }
    });
    return { redos, undos };
  }
  // eslint-disable-next-line max-lines-per-function
  _generateRangeDrawingsPasteMutations(pasteContext, copyContext) {
    if (!this._copyInfo) {
      return { redos: [], undos: [] };
    }
    const { unitId: toUnitId, subUnitId: toSubUnitId, pasteRange, pasteType } = pasteContext;
    const { unitId: fromUnitId, subUnitId: fromSubUnitId, copyRange, copyType } = copyContext;
    if (specialPastes.includes(pasteType)) {
      return { redos: [], undos: [] };
    }
    const toSkeleton = this._sheetSkeletonService.getSkeleton(toUnitId, toSubUnitId);
    if (!toSkeleton) {
      return { redos: [], undos: [] };
    }
    const { drawings } = this._copyInfo;
    if (!copyRange) {
      return this._generateSingleDrawingPasteMutations({
        pasteTo: { unitId: toUnitId, subUnitId: toSubUnitId, range: discreteRangeToRange(pasteRange) },
        pasteType
      }, copyType);
    }
    const fromSkeleton = this._sheetSkeletonService.getSkeleton(fromUnitId, fromSubUnitId);
    if (!fromSkeleton) {
      return { redos: [], undos: [] };
    }
    const { ranges: [vCopyRange, vPastedRange], mapFunc } = virtualizeDiscreteRanges([copyRange, pasteRange]);
    const { row: copyRow, col: copyCol } = mapFunc(vCopyRange.startRow, vCopyRange.startColumn);
    const { row: pasteRow, col: pasteCol } = mapFunc(vPastedRange.startRow, vPastedRange.startColumn);
    const copyRect = attachRangeWithCoord(fromSkeleton, {
      startRow: copyRow,
      endRow: copyRow,
      startColumn: copyCol,
      endColumn: copyCol
    });
    const pasteRect = attachRangeWithCoord(toSkeleton, {
      startRow: pasteRow,
      endRow: pasteRow,
      startColumn: pasteCol,
      endColumn: pasteCol
    });
    if (!copyRect || !pasteRect) {
      return { redos: [], undos: [] };
    }
    const leftOffset = pasteRect.startX - copyRect.startX;
    const topOffset = pasteRect.startY - copyRect.startY;
    const rowOffset = pasteRow - copyRow;
    const columnOffset = pasteCol - copyCol;
    return this._generateMutations(drawings, {
      unitId: toUnitId,
      subUnitId: toSubUnitId,
      getTransform: (transform, sheetTransform) => {
        var _a, _b, _c;
        const newTransform = {
          ...transform,
          left: ((_a = transform == null ? void 0 : transform.left) != null ? _a : 0) + leftOffset,
          top: ((_b = transform == null ? void 0 : transform.top) != null ? _b : 0) + topOffset
        };
        return {
          transform: newTransform,
          sheetTransform: {
            ...sheetTransform,
            to: {
              ...sheetTransform.to,
              row: sheetTransform.to.row + rowOffset,
              column: sheetTransform.to.column + columnOffset
            },
            from: {
              ...sheetTransform.from,
              row: sheetTransform.from.row + rowOffset,
              column: sheetTransform.from.column + columnOffset
            }
          },
          axisAlignSheetTransform: (_c = transformToAxisAlignPosition(newTransform, toSkeleton)) != null ? _c : sheetTransform
        };
      },
      isCut: copyType === "CUT" /* CUT */
    });
  }
};
SheetsDrawingCopyPasteController = __decorateClass([
  __decorateParam(0, ISheetClipboardService),
  __decorateParam(1, IRenderManagerService),
  __decorateParam(2, Inject(SheetSkeletonService)),
  __decorateParam(3, IDrawingManagerService),
  __decorateParam(4, IClipboardInterfaceService),
  __decorateParam(5, ICommandService)
], SheetsDrawingCopyPasteController);

// ../packages/sheets-drawing-ui/src/controllers/sheet-drawing-group-copy-paste.controller.ts
var specialPastes2 = [
  PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_COL_WIDTH,
  PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_VALUE,
  PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_FORMAT,
  PREDEFINED_HOOK_NAME_PASTE.SPECIAL_PASTE_FORMULA
];
var SheetsDrawingGroupCopyPasteController = class extends Disposable {
  constructor(_sheetClipboardService, _renderManagerService, _sheetSkeletonService, _sheetDrawingService, _drawingManagerService) {
    super();
    __publicField(this, "_sheetClipboardService", _sheetClipboardService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_sheetSkeletonService", _sheetSkeletonService);
    __publicField(this, "_sheetDrawingService", _sheetDrawingService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_featurePasteHooks", []);
    __publicField(this, "_copyInfo");
    this._initCopyPaste();
  }
  get _focusedDrawings() {
    return this._sheetDrawingService.getFocusDrawings();
  }
  _initCopyPaste() {
    this._sheetClipboardService.addClipboardHook({
      id: "SHEET_DRAWING_GROUP",
      onBeforeCopy: (_unitId, _subUnitId) => {
        this._copyInfo = null;
        const focusDrawings = this._focusedDrawings;
        if (focusDrawings.length === 0) return;
        const groupDrawing = focusDrawings.find((d) => d.drawingType === 6 /* DRAWING_GROUP */);
        if (!groupDrawing) return;
        const groupNestedParam = this._drawingManagerService.getDrawingsByGroupNested({
          unitId: groupDrawing.unitId,
          subUnitId: groupDrawing.subUnitId,
          drawingId: groupDrawing.drawingId
        });
        if (!groupNestedParam) return;
        this._copyInfo = {
          unitId: groupDrawing.unitId,
          subUnitId: groupDrawing.subUnitId,
          groupNestedParam
        };
      },
      onPasteCells: (_pasteFrom, pasteTo, _data, payload) => {
        if (!this._copyInfo) return { redos: [], undos: [] };
        const { pasteType } = payload;
        if (specialPastes2.includes(pasteType)) return { redos: [], undos: [] };
        return this._generateGroupPasteMutations(pasteTo);
      },
      onPasteUnrecognized: (pasteTo) => {
        if (!this._copyInfo) return { redos: [], undos: [] };
        return this._generateGroupPasteMutations(pasteTo);
      }
    });
  }
  registerFeaturePasteHook(hook) {
    this._featurePasteHooks.push(hook);
  }
  _getGroupFeaturePasteMutations(params) {
    const redos = [];
    const undos = [];
    for (const hook of this._featurePasteHooks) {
      const result = hook(params);
      redos.push(...result.redos);
      undos.push(...result.undos);
    }
    return { redos, undos };
  }
  _generateGroupPasteMutations(pasteTo) {
    var _a;
    if (!this._copyInfo) {
      return { redos: [], undos: [] };
    }
    const { unitId, subUnitId, range } = pasteTo;
    const pasteToSkeleton = this._sheetSkeletonService.getSkeleton(unitId, subUnitId);
    if (!pasteToSkeleton) {
      return { redos: [], undos: [] };
    }
    const { groupNestedParam } = this._copyInfo;
    const origRootGroup = groupNestedParam.groups[groupNestedParam.groups.length - 1];
    const { cloned, idMap } = cloneGroupParams(groupNestedParam);
    const newRootGroupId = cloned.groups[cloned.groups.length - 1].drawingId;
    const pasteRange = discreteRangeToRange(range);
    const pasteRect = attachRangeWithCoord(pasteToSkeleton, {
      startRow: pasteRange.startRow,
      endRow: pasteRange.endRow,
      startColumn: pasteRange.startColumn,
      endColumn: pasteRange.endColumn
    });
    if (!pasteRect) return { redos: [], undos: [] };
    const newTransform = { ...origRootGroup.transform, left: pasteRect.startX, top: pasteRect.startY };
    const allDrawings = [
      ...((_a = cloned.flatChildren) != null ? _a : []).map((d) => ({ ...d, unitId, subUnitId })),
      ...cloned.groups.map((d) => {
        var _a2, _b;
        if (d.drawingId !== newRootGroupId) {
          return { ...d, unitId, subUnitId };
        }
        return {
          ...d,
          unitId,
          subUnitId,
          transform: newTransform,
          sheetTransform: (_a2 = transformToDrawingPosition(newTransform, pasteToSkeleton)) != null ? _a2 : origRootGroup.sheetTransform,
          axisAlignSheetTransform: (_b = transformToAxisAlignPosition(newTransform, pasteToSkeleton)) != null ? _b : origRootGroup.sheetTransform
        };
      })
    ];
    const { undo: removeOp, redo: insertOp, objects } = this._sheetDrawingService.getBatchAddOp(allDrawings);
    const redos = [{
      id: SetDrawingApplyMutation.id,
      params: { op: insertOp, unitId, subUnitId, objects, type: 0 /* INSERT */ }
    }];
    const undos = [{
      id: SetDrawingApplyMutation.id,
      params: { op: removeOp, unitId, subUnitId, objects, type: 1 /* REMOVE */ }
    }];
    const featureMutations = this._getGroupFeaturePasteMutations({
      fromUnitId: this._copyInfo.unitId,
      fromSubUnitId: this._copyInfo.subUnitId,
      toUnitId: unitId,
      toSubUnitId: subUnitId,
      idMap,
      cloned
    });
    redos.push(...featureMutations.redos);
    undos.push(...featureMutations.undos);
    return { redos, undos };
  }
  dispose() {
    this._copyInfo = null;
    this._featurePasteHooks.length = 0;
    super.dispose();
  }
};
SheetsDrawingGroupCopyPasteController = __decorateClass([
  __decorateParam(0, ISheetClipboardService),
  __decorateParam(1, IRenderManagerService),
  __decorateParam(2, Inject(SheetSkeletonService)),
  __decorateParam(3, ISheetDrawingService),
  __decorateParam(4, IDrawingManagerService)
], SheetsDrawingGroupCopyPasteController);

// ../packages/sheets-drawing-ui/src/controllers/sheet-drawing-permission.controller.ts
var drawingObjectTypes = [
  3 /* IMAGE */,
  // floating image
  2 /* SHAPE */,
  // shape
  6 /* CHART */,
  // chart rect
  7 /* DRAWING_DOM */
  // floating dom rect
];
var SheetDrawingPermissionController = class extends Disposable {
  constructor(_commandService, _localeService, _renderManagerService, _permissionService, _univerInstanceService, _userManagerService, _sheetPermissionCheckController, _sheetDrawingService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_localeService", _localeService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_permissionService", _permissionService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_userManagerService", _userManagerService);
    __publicField(this, "_sheetPermissionCheckController", _sheetPermissionCheckController);
    __publicField(this, "_sheetDrawingService", _sheetDrawingService);
    this._initDrawingVisible();
    this._initDrawingEditable();
    this._initViewPermissionChange();
    this._initEditPermissionChange();
    this._initCommandPermissionCheck();
  }
  _initDrawingVisible() {
    const workbook$ = this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */);
    const currentUser$ = this._userManagerService.currentUser$;
    const combined$ = combineLatest([workbook$, currentUser$]);
    this.disposeWithMe(
      combined$.pipe(
        switchMap(([workbook, _]) => {
          if (!workbook) {
            this._sheetDrawingService.setDrawingVisible(false);
            return EMPTY;
          }
          return workbook.activeSheet$.pipe(
            tap((sheet) => {
              if (!sheet) {
                this._sheetDrawingService.setDrawingVisible(false);
                return;
              }
              const unitId = workbook.getUnitId();
              const subUnitId = sheet.getSheetId();
              const worksheetViewPermission = this._permissionService.composePermission([
                new WorkbookViewPermission(unitId).id,
                new WorksheetViewPermission(unitId, subUnitId).id
              ]).every((permission) => permission.value);
              if (worksheetViewPermission) {
                this._sheetDrawingService.setDrawingVisible(true);
              } else {
                this._handleDrawingVisibilityFalse(workbook, sheet);
              }
            })
          );
        })
      ).subscribe()
    );
  }
  _handleDrawingVisibilityFalse(workbook, sheet) {
    this._sheetDrawingService.setDrawingVisible(false);
    const unitId = workbook.getUnitId();
    const subUnitId = sheet.getSheetId();
    const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
    const drawingDataValues = Object.values(drawingData);
    const renderObject = this._renderManagerService.getRenderById(unitId);
    const scene = renderObject == null ? void 0 : renderObject.scene;
    if (!scene) {
      return;
    }
    const objects = scene.getAllObjectsByOrder();
    objects.forEach((object) => {
      if (drawingObjectTypes.includes(object.objectType) && drawingDataValues.some((item) => object.oKey.includes(item.drawingId))) {
        scene.removeObject(object);
      }
    });
  }
  _initDrawingEditable() {
    const workbook$ = this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */);
    const currentUser$ = this._userManagerService.currentUser$;
    const combined$ = combineLatest([workbook$, currentUser$]);
    this.disposeWithMe(
      combined$.pipe(
        switchMap(([workbook, _]) => {
          if (!workbook) {
            this._sheetDrawingService.setDrawingEditable(false);
            return EMPTY;
          }
          return workbook.activeSheet$.pipe(
            tap((sheet) => {
              if (!sheet) {
                this._sheetDrawingService.setDrawingEditable(false);
                return;
              }
              const unitId = workbook.getUnitId();
              const subUnitId = sheet.getSheetId();
              const worksheetEditPermission = this._permissionService.composePermission([
                new WorkbookEditablePermission(unitId).id,
                new WorksheetEditPermission(unitId, subUnitId).id
              ]).every((permission) => permission.value);
              if (worksheetEditPermission) {
                this._sheetDrawingService.setDrawingEditable(true);
              } else {
                this._handleDrawingEditableFalse(workbook, sheet);
              }
            })
          );
        })
      ).subscribe()
    );
  }
  _handleDrawingEditableFalse(workbook, sheet) {
    this._sheetDrawingService.setDrawingEditable(false);
    const unitId = workbook.getUnitId();
    const subUnitId = sheet.getSheetId();
    const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
    const drawingDataValues = Object.values(drawingData);
    const renderObject = this._renderManagerService.getRenderById(unitId);
    const scene = renderObject == null ? void 0 : renderObject.scene;
    if (!scene) {
      return;
    }
    const objects = scene.getAllObjectsByOrder();
    objects.forEach((object) => {
      if (drawingObjectTypes.includes(object.objectType) && drawingDataValues.some((item) => object.oKey.includes(item.drawingId))) {
        scene.detachTransformerFrom(object);
      }
    });
  }
  // eslint-disable-next-line max-lines-per-function
  _initViewPermissionChange() {
    const workbook$ = this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */);
    const currentUser$ = this._userManagerService.currentUser$;
    this.disposeWithMe(
      combineLatest([workbook$, currentUser$]).pipe(
        switchMap(([workbook, _]) => {
          if (!workbook) return EMPTY;
          return workbook.activeSheet$.pipe(
            switchMap((sheet) => {
              if (!sheet) {
                return EMPTY;
              }
              const unitId = workbook.getUnitId();
              const subUnitId = sheet.getSheetId();
              const renderObject = this._renderManagerService.getRenderById(unitId);
              const scene = renderObject == null ? void 0 : renderObject.scene;
              if (!scene) {
                return EMPTY;
              }
              const transformer = scene.getTransformerByCreate();
              const worksheetViewPermission$ = this._permissionService.composePermission$([
                new WorkbookViewPermission(unitId).id,
                new WorksheetViewPermission(unitId, subUnitId).id
              ]).pipe(
                map((permissions) => permissions.every((item) => item.value)),
                distinctUntilChanged()
              );
              return worksheetViewPermission$.pipe(
                map((permission) => ({
                  permission,
                  scene,
                  transformer,
                  unitId,
                  subUnitId
                }))
              );
            })
          );
        })
      ).subscribe({
        next: ({ permission, scene, transformer, unitId, subUnitId }) => {
          this._sheetDrawingService.setDrawingVisible(permission);
          const objects = scene.getAllObjectsByOrder();
          const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
          const drawingDataValues = Object.values(drawingData);
          if (permission) {
            this._sheetDrawingService.addNotification(drawingDataValues);
          } else {
            objects.forEach((object) => {
              if (drawingObjectTypes.includes(object.objectType) && drawingDataValues.some((item) => object.oKey.includes(item.drawingId))) {
                scene.removeObject(object);
              }
            });
            transformer.clearSelectedObjects();
          }
        },
        complete: () => {
          this._sheetDrawingService.setDrawingVisible(true);
          const workbook = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
          const sheet = workbook == null ? void 0 : workbook.getActiveSheet();
          const unitId = workbook == null ? void 0 : workbook.getUnitId();
          const subUnitId = sheet == null ? void 0 : sheet.getSheetId();
          if (!unitId || !subUnitId) {
            return;
          }
          const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
          const drawingDataValues = Object.values(drawingData);
          this._sheetDrawingService.addNotification(drawingDataValues);
        }
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _initEditPermissionChange() {
    const workbook$ = this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */);
    const currentUser$ = this._userManagerService.currentUser$;
    this.disposeWithMe(
      combineLatest([workbook$, currentUser$]).pipe(
        switchMap(([workbook, _]) => {
          if (!workbook) {
            return EMPTY;
          }
          return workbook.activeSheet$.pipe(
            switchMap((sheet) => {
              if (!sheet) {
                return EMPTY;
              }
              const unitId = workbook.getUnitId();
              const subUnitId = sheet.getSheetId();
              const renderObject = this._renderManagerService.getRenderById(unitId);
              const scene = renderObject == null ? void 0 : renderObject.scene;
              if (!scene) {
                return EMPTY;
              }
              const transformer = scene.getTransformerByCreate();
              const composeWorksheetEditPermission$ = this._permissionService.composePermission$([
                new WorkbookEditablePermission(unitId).id,
                new WorksheetEditPermission(unitId, subUnitId).id
              ]).pipe(
                map((permissions) => permissions.every((item) => item.value)),
                distinctUntilChanged()
              );
              return composeWorksheetEditPermission$.pipe(
                map((permission) => ({
                  permission,
                  scene,
                  transformer,
                  unitId,
                  subUnitId
                }))
              );
            })
          );
        })
      ).subscribe({
        next: ({ permission, scene, transformer, unitId, subUnitId }) => {
          this._sheetDrawingService.setDrawingEditable(permission);
          const objects = scene.getAllObjectsByOrder();
          const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
          const drawingDataValues = Object.values(drawingData);
          if (permission) {
            objects.forEach((object) => {
              if (drawingObjectTypes.includes(object.objectType) && drawingDataValues.some((item) => object.oKey.includes(item.drawingId))) {
                scene.attachTransformerTo(object);
              }
            });
            this._sheetDrawingService.addNotification(drawingDataValues);
          } else {
            objects.forEach((object) => {
              if (drawingObjectTypes.includes(object.objectType) && drawingDataValues.some((item) => object.oKey.includes(item.drawingId))) {
                scene.detachTransformerFrom(object);
              }
            });
            transformer.clearSelectedObjects();
          }
        },
        complete: () => {
          const workbook = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
          if (!workbook) {
            return;
          }
          const unitId = workbook.getUnitId();
          const sheet = workbook.getActiveSheet();
          if (!sheet) {
            return;
          }
          const subUnitId = sheet.getSheetId();
          const renderObject = this._renderManagerService.getRenderById(unitId);
          const scene = renderObject == null ? void 0 : renderObject.scene;
          if (!scene) {
            return;
          }
          const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
          const drawingDataValues = Object.values(drawingData);
          this._sheetDrawingService.setDrawingEditable(true);
          const objects = scene.getAllObjectsByOrder();
          objects.forEach((object) => {
            if (drawingObjectTypes.includes(object.objectType) && drawingDataValues.some((item) => object.oKey.includes(item.drawingId))) {
              scene.detachTransformerFrom(object);
            }
          });
        }
      })
    );
  }
  _initCommandPermissionCheck() {
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((command) => {
        var _a, _b;
        let unitId;
        let subUnitId;
        if (command.id === InsertSheetDrawingCommand.id || command.id === RemoveSheetDrawingCommand.id || command.id === SetSheetDrawingCommand.id) {
          const params = command.params;
          const { drawings } = params;
          unitId = (_a = drawings == null ? void 0 : drawings[0]) == null ? void 0 : _a.unitId;
          subUnitId = (_b = drawings == null ? void 0 : drawings[0]) == null ? void 0 : _b.subUnitId;
        } else if (command.id === SetDrawingArrangeCommand.id) {
          const params = command.params;
          unitId = params.unitId;
          subUnitId = params.subUnitId;
        }
        if (!unitId || !subUnitId) {
          return;
        }
        const permission = this._sheetPermissionCheckController.permissionCheckWithoutRange({
          workbookTypes: [WorkbookEditablePermission],
          worksheetTypes: [WorksheetEditPermission]
        }, unitId, subUnitId);
        if (!permission) {
          this._sheetPermissionCheckController.blockExecuteWithoutPermission(this._localeService.t("sheets-drawing-ui.permission.dialog.editErr"));
        }
      })
    );
  }
};
SheetDrawingPermissionController = __decorateClass([
  __decorateParam(0, Inject(ICommandService)),
  __decorateParam(1, Inject(LocaleService)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IPermissionService),
  __decorateParam(4, IUniverInstanceService),
  __decorateParam(5, Inject(UserManagerService)),
  __decorateParam(6, Inject(SheetPermissionCheckController)),
  __decorateParam(7, Inject(ISheetDrawingService))
], SheetDrawingPermissionController);

// ../packages/sheets-drawing-ui/src/services/canvas-float-dom-manager.service.ts
var SHEET_FLOAT_DOM_PREFIX = "univer-sheet-float-dom-";
function transformBound2DOMBound(posOfFloatObject, scene, skeleton, worksheet, floatDomInfo, skipBoundsOfViewArea = false) {
  const { scaleX, scaleY } = scene.getAncestorScale();
  const viewMain = scene.getViewport("viewMain" /* VIEW_MAIN */);
  const freeze = worksheet.getFreeze();
  const { startColumn: viewMainStartColumn, startRow: viewMainStartRow, xSplit: freezedCol, ySplit: freezedRow } = freeze;
  const absolute = {
    left: true,
    // left means the left of pic is in a viewMainLeft
    top: true
  };
  if (!viewMain) {
    return {
      ...posOfFloatObject,
      absolute
    };
  }
  const { left, right, top, bottom } = posOfFloatObject;
  let { top: viewBoundsTop, left: viewBoundsLeft, viewportScrollX, viewportScrollY } = viewMain;
  const { boundsOfViewArea: specBoundsOfViewArea, scrollDirectionResponse } = floatDomInfo || {};
  const { rowHeaderWidth, columnHeaderHeight } = skeleton;
  const boundsOfViewArea = {
    top: skipBoundsOfViewArea ? 0 : columnHeaderHeight,
    left: skipBoundsOfViewArea ? 0 : rowHeaderWidth
  };
  if (specBoundsOfViewArea) {
    if (Tools.isDefine(boundsOfViewArea.top)) {
      boundsOfViewArea.top = specBoundsOfViewArea.top;
    }
    if (Tools.isDefine(boundsOfViewArea.left)) {
      boundsOfViewArea.left = specBoundsOfViewArea.left;
    }
  }
  if (scrollDirectionResponse === "HORIZONTAL" /* HORIZONTAL */) {
    viewportScrollY = 0;
  }
  if (scrollDirectionResponse === "VERTICAL" /* VERTICAL */) {
    viewportScrollX = 0;
  }
  let offsetLeft = 0;
  let offsetRight = 0;
  const freezeStartY = skeleton.rowStartY(viewMainStartRow - freezedRow) + columnHeaderHeight;
  const freezeStartX = skeleton.colStartX(viewMainStartColumn - freezedCol) + rowHeaderWidth;
  const freezeEndY = skeleton.rowStartY(viewMainStartRow) + columnHeaderHeight;
  const freezeEndX = skeleton.colStartX(viewMainStartColumn) + rowHeaderWidth;
  if (freezedCol === 0) {
    absolute.left = false;
    offsetLeft = (left - viewportScrollX) * scaleX;
    offsetRight = (right - viewportScrollX) * scaleX;
  } else {
    const leftToCanvas = left - (freezeStartX - rowHeaderWidth);
    const rightToCanvas = right - (freezeStartX - rowHeaderWidth);
    if (right < freezeEndX) {
      offsetLeft = leftToCanvas * scaleX;
      offsetRight = rightToCanvas * scaleX;
    } else if (left <= freezeEndX && right >= freezeEndX) {
      offsetLeft = leftToCanvas * scaleX;
      offsetRight = Math.max(viewBoundsLeft, (right - viewportScrollX) * scaleX);
    } else if (left > freezeEndX) {
      absolute.left = false;
      offsetLeft = Math.max((left - viewportScrollX) * scaleX, viewBoundsLeft);
      offsetRight = Math.max((right - viewportScrollX) * scaleX, viewBoundsLeft);
    }
  }
  let offsetTop = 0;
  let offsetBottom = 0;
  if (freezedRow === 0) {
    absolute.top = false;
    offsetTop = (top - viewportScrollY) * scaleY;
    offsetBottom = (bottom - viewportScrollY) * scaleY;
  } else {
    const topToCanvas = top - (freezeStartY - columnHeaderHeight);
    const bottomToCanvas = bottom - (freezeStartY - columnHeaderHeight);
    if (bottom < freezeEndY) {
      offsetTop = topToCanvas * scaleY;
      offsetBottom = bottomToCanvas * scaleY;
    } else if (top <= freezeEndY && bottom >= freezeEndY) {
      offsetTop = topToCanvas * scaleY;
      offsetBottom = Math.max(viewBoundsTop, (bottom - viewportScrollY) * scaleY);
    } else if (top > freezeEndY) {
      absolute.top = false;
      offsetTop = Math.max((top - viewportScrollY) * scaleY, viewBoundsTop);
      offsetBottom = Math.max((bottom - viewportScrollY) * scaleY, viewBoundsTop);
    }
  }
  offsetLeft = Math.max(offsetLeft, boundsOfViewArea.left);
  offsetTop = Math.max(offsetTop, boundsOfViewArea.top);
  offsetRight = Math.max(offsetRight, boundsOfViewArea.left);
  offsetBottom = Math.max(offsetBottom, boundsOfViewArea.top);
  const rs = {
    left: offsetLeft,
    right: offsetRight,
    top: offsetTop,
    bottom: offsetBottom,
    absolute
  };
  return rs;
}
var calcSheetFloatDomPosition = (floatObject, scene, skeleton, worksheet, floatDomInfo) => {
  const { left, top, width, height, angle } = floatObject;
  const boundOfFloatObject = {
    left,
    right: left + width,
    top,
    bottom: top + height
  };
  const offsetBound = transformBound2DOMBound(boundOfFloatObject, scene, skeleton, worksheet, floatDomInfo);
  const { scaleX, scaleY } = scene.getAncestorScale();
  const domPos = {
    startX: offsetBound.left,
    endX: offsetBound.right,
    startY: offsetBound.top,
    endY: offsetBound.bottom,
    rotate: angle,
    width: width * scaleX,
    height: height * scaleY,
    absolute: offsetBound.absolute
  };
  return domPos;
};
var SheetCanvasFloatDomManagerService = class extends Disposable {
  constructor(_renderManagerService, _univerInstanceService, _commandService, _drawingManagerService, _canvasFloatDomService, _sheetDrawingService, _lifecycleService) {
    super();
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_canvasFloatDomService", _canvasFloatDomService);
    __publicField(this, "_sheetDrawingService", _sheetDrawingService);
    __publicField(this, "_lifecycleService", _lifecycleService);
    /**
     * for update dom container position when scrolling and zoom
     */
    __publicField(this, "_domLayerInfoMap", /* @__PURE__ */ new Map());
    __publicField(this, "_transformChange$", new Subject());
    __publicField(this, "transformChange$", this._transformChange$.asObservable());
    __publicField(this, "_add$", new Subject());
    __publicField(this, "add$", this._add$.asObservable());
    __publicField(this, "_remove$", new Subject());
    __publicField(this, "remove$", this._remove$.asObservable());
    this._drawingAddListener();
    this._featureUpdateListener();
    this._deleteListener();
    this._bindScrollEvent();
  }
  _bindScrollEvent() {
    this._lifecycleService.lifecycle$.pipe(filter((s) => s === 2 /* Rendered */), take(1)).subscribe(() => {
      this._scrollUpdateListener();
    });
  }
  getFloatDomInfo(id) {
    return this._domLayerInfoMap.get(id);
  }
  getFloatDomsBySubUnitId(unitId, subUnitId) {
    return Array.from(this._domLayerInfoMap.values()).filter((info) => info.subUnitId === subUnitId && info.unitId === unitId);
  }
  _getSceneAndTransformerByDrawingSearch(unitId) {
    if (unitId == null) {
      return;
    }
    const renderUnit = this._renderManagerService.getRenderById(unitId);
    const scene = renderUnit == null ? void 0 : renderUnit.scene;
    if (renderUnit == null || scene == null) {
      return null;
    }
    const transformer = scene.getTransformerByCreate();
    const canvas = renderUnit.engine.getCanvasElement();
    return { scene, transformer, renderUnit, canvas };
  }
  // eslint-disable-next-line max-lines-per-function
  _drawingAddListener() {
    this.disposeWithMe(
      // eslint-disable-next-line max-lines-per-function
      this._drawingManagerService.add$.subscribe((params) => {
        params.forEach((param) => {
          var _a;
          const { unitId, subUnitId, drawingId } = param;
          const target = getSheetCommandTarget(this._univerInstanceService, { unitId, subUnitId });
          const floatDomParam = this._drawingManagerService.getDrawingByParam(param);
          const workbook = this._univerInstanceService.getUnit(unitId, 2 /* UNIVER_SHEET */);
          if (!workbook) {
            return;
          }
          const activeSheetId = workbook.getActiveSheet().getSheetId();
          if (!floatDomParam || !target) {
            return;
          }
          const skeleton = (_a = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId);
          if (!skeleton) {
            return;
          }
          const { transform, drawingType, data, hidden } = floatDomParam;
          if (drawingType !== 8 /* DRAWING_DOM */ && drawingType !== 2 /* DRAWING_CHART */) {
            return;
          }
          const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
          if (renderObject == null) {
            return;
          }
          if (hidden) {
            return;
          }
          const { scene, canvas } = renderObject;
          if (transform == null) {
            return true;
          }
          if (activeSheetId !== subUnitId) {
            return;
          }
          const { left, top, width, height, angle, flipX, flipY, skewX, skewY } = transform;
          const rectShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const rectShape = scene.getObject(rectShapeKey);
          if (rectShape != null) {
            rectShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
            return;
          }
          const imageConfig = {
            left,
            top,
            width,
            height,
            zIndex: this._drawingManagerService.getDrawingOrder(unitId, subUnitId).length - 1
          };
          const isChart = drawingType === 2 /* DRAWING_CHART */;
          imageConfig.rotateEnabled = false;
          if (isChart) {
            const backgroundColor = data ? data.backgroundColor : "white";
            imageConfig.fill = backgroundColor;
            if (data && data.border) {
              imageConfig.stroke = data.border;
            }
            imageConfig.paintFirst = "stroke";
            imageConfig.strokeWidth = 1;
            imageConfig.borderEnabled = false;
            imageConfig.radius = 8;
          }
          const rect = new Rect(rectShapeKey, imageConfig);
          if (isChart) {
            rect.setObjectType(6 /* CHART */);
          } else if (drawingType === 8 /* DRAWING_DOM */) {
            rect.setObjectType(7 /* DRAWING_DOM */);
          }
          scene.addObject(rect, DRAWING_OBJECT_LAYER_INDEX);
          if (floatDomParam.allowTransform !== false) {
            scene.attachTransformerTo(rect);
          }
          const disposableCollection = new DisposableCollection();
          const initPosition = calcSheetFloatDomPosition(rect, renderObject.renderUnit.scene, skeleton.skeleton, target.worksheet);
          const position$ = new BehaviorSubject(initPosition);
          const domId = `${SHEET_FLOAT_DOM_PREFIX}${generateRandomId(6)}`;
          const info = {
            dispose: disposableCollection,
            rect,
            position$,
            unitId,
            subUnitId,
            id: drawingId,
            domId
          };
          this._canvasFloatDomService.addFloatDom({
            position$,
            id: drawingId,
            domId,
            componentKey: floatDomParam.componentKey,
            onPointerDown: (evt) => {
              canvas.dispatchEvent(new PointerEvent(evt.type, evt));
            },
            onPointerMove: (evt) => {
              canvas.dispatchEvent(new PointerEvent(evt.type, evt));
            },
            onPointerUp: (evt) => {
              canvas.dispatchEvent(new PointerEvent(evt.type, evt));
            },
            onWheel: (evt) => {
              canvas.dispatchEvent(new WheelEvent(evt.type, evt));
            },
            data,
            unitId
          });
          const listener = rect.onTransformChange$.subscribeEvent(() => {
            const newPosition = calcSheetFloatDomPosition(rect, renderObject.renderUnit.scene, skeleton.skeleton, target.worksheet);
            position$.next(
              newPosition
            );
          });
          disposableCollection.add(() => {
            this._canvasFloatDomService.removeFloatDom(drawingId);
          });
          listener && disposableCollection.add(listener);
          this._domLayerInfoMap.set(drawingId, info);
        });
      })
    );
    this.disposeWithMe(
      this._drawingManagerService.remove$.subscribe((params) => {
        params.forEach((param) => {
          var _a;
          const { unitId, subUnitId, drawingId } = param;
          const rectShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
          if (renderObject == null) {
            return;
          }
          const { transformer, scene } = renderObject;
          const rectShape = scene.getObject(rectShapeKey);
          if (rectShape == null ? void 0 : rectShape.oKey) {
            transformer.clearControlByIds([rectShape == null ? void 0 : rectShape.oKey]);
            (_a = scene.getTransformer()) == null ? void 0 : _a.clearSelectedObjects();
          }
        });
      })
    );
  }
  _scrollUpdateListener() {
    const updateSheet = (unitId, subUnitId) => {
      var _a;
      const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
      const ids = Array.from(this._domLayerInfoMap.keys()).map((id) => ({ id, ...this._domLayerInfoMap.get(id) })).filter((info) => info.subUnitId === subUnitId && info.unitId === unitId).map((info) => info.id);
      const target = getSheetCommandTarget(this._univerInstanceService, { unitId, subUnitId });
      const skeleton = (_a = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId);
      if (!renderObject || !target || !skeleton) {
        return;
      }
      ids.forEach((id) => {
        const floatDomInfo = this._domLayerInfoMap.get(id);
        if (floatDomInfo) {
          const position = calcSheetFloatDomPosition(floatDomInfo.rect, renderObject.renderUnit.scene, skeleton.skeleton, target.worksheet, floatDomInfo);
          floatDomInfo.position$.next(position);
        }
      });
    };
    this.disposeWithMe(
      this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */).pipe(
        switchMap((workbook) => workbook ? workbook.activeSheet$ : of(null)),
        map((worksheet) => {
          if (!worksheet) return null;
          const unitId = worksheet.getUnitId();
          const render2 = this._renderManagerService.getRenderById(unitId);
          return render2 ? { render: render2, unitId, subUnitId: worksheet.getSheetId() } : null;
        }),
        switchMap(
          (render2) => render2 ? fromEventSubject(render2.render.scene.getViewport("viewMain" /* VIEW_MAIN */).onScrollAfter$).pipe(map(() => ({ unitId: render2.unitId, subUnitId: render2.subUnitId }))) : of(null)
        )
      ).subscribe((value) => {
        if (!value) return;
        const { unitId, subUnitId } = value;
        updateSheet(unitId, subUnitId);
      })
    );
    this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
      if (commandInfo.id === SetZoomRatioOperation.id) {
        const params = commandInfo.params;
        const { unitId } = params;
        const subUnitIds = Array.from(this._domLayerInfoMap.values()).filter((info) => info.unitId === unitId).map((info) => info.subUnitId);
        subUnitIds.forEach((subUnitId) => {
          updateSheet(unitId, subUnitId);
        });
      } else if (commandInfo.id === SetFrozenMutation.id) {
        const { unitId, subUnitId } = commandInfo.params;
        updateSheet(unitId, subUnitId);
      } else if (commandInfo.id === SetSelectionsOperation.id) {
        const { unitId, subUnitId } = commandInfo.params;
        updateSheet(unitId, subUnitId);
      }
    }));
  }
  updateFloatDomProps(unitId, subUnitId, id, props) {
    const info = this._domLayerInfoMap.get(id);
    const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
    if (info && renderObject) {
      const { scene } = renderObject;
      const rectShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId: id });
      const rectShape = scene.getObject(rectShapeKey);
      if (rectShape && rectShape instanceof Rect) {
        rectShape.setProps(props);
      }
    }
  }
  _getPosition(position, unitId) {
    var _a;
    const { startX, endX, startY, endY } = position;
    const selectionRenderService = (_a = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.with(ISheetSelectionRenderService);
    if (selectionRenderService == null) {
      return;
    }
    const start = selectionRenderService.getCellWithCoordByOffset(startX, startY);
    if (start == null) {
      return;
    }
    const from = {
      column: start.actualColumn,
      columnOffset: startX - start.startX,
      row: start.actualRow,
      rowOffset: startY - start.startY
    };
    const end = selectionRenderService.getCellWithCoordByOffset(endX, endY);
    if (end == null) {
      return;
    }
    const to = {
      column: end.actualColumn,
      columnOffset: endX - end.startX,
      row: end.actualRow,
      rowOffset: endY - end.startY
    };
    return {
      from,
      to
    };
  }
  _featureUpdateListener() {
    this.disposeWithMe(
      this._drawingManagerService.update$.subscribe((params) => {
        params.forEach((data) => {
          const sheetDrawing = this._drawingManagerService.getDrawingByParam(data);
          if (!sheetDrawing) {
            return;
          }
          if (sheetDrawing.drawingType !== 8 /* DRAWING_DOM */ && sheetDrawing.drawingType !== 2 /* DRAWING_CHART */) {
            return;
          }
          const newValue = {
            ...sheetDrawing.transform
          };
          this._transformChange$.next({ id: data.drawingId, value: newValue });
          this._canvasFloatDomService.updateFloatDom(data.drawingId, {
            ...sheetDrawing
          });
          const renderObject = this._getSceneAndTransformerByDrawingSearch(data.unitId);
          if (renderObject && sheetDrawing.drawingType !== 2 /* DRAWING_CHART */) {
            const { scene } = renderObject;
            const floatDomInfo = this._domLayerInfoMap.get(data.drawingId);
            if (floatDomInfo == null ? void 0 : floatDomInfo.rect) {
              if (sheetDrawing.allowTransform === false) {
                scene.detachTransformerFrom(floatDomInfo.rect);
              } else {
                scene.attachTransformerTo(floatDomInfo.rect);
              }
            }
          }
        });
      })
    );
  }
  _deleteListener() {
    this.disposeWithMe(
      this._drawingManagerService.remove$.subscribe((params) => {
        params.forEach((param) => {
          this._removeDom(param.drawingId);
        });
      })
    );
  }
  // CreateFloatDomCommand --> floatDomService.addFloatDomToPosition
  addFloatDomToPosition(layer, propId) {
    const target = getSheetCommandTarget(this._univerInstanceService, {
      unitId: layer.unitId,
      subUnitId: layer.subUnitId
    });
    if (!target) {
      throw new Error("cannot find current target!");
    }
    const { unitId, subUnitId } = target;
    const { initPosition, componentKey, data, allowTransform = true } = layer;
    const id = propId != null ? propId : generateRandomId();
    const sheetTransform = this._getPosition(initPosition, unitId);
    if (sheetTransform == null) {
      return;
    }
    const sheetDrawingParam = {
      unitId,
      subUnitId,
      drawingId: id,
      drawingType: layer.type || 8 /* DRAWING_DOM */,
      componentKey,
      sheetTransform,
      transform: {
        left: initPosition.startX,
        top: initPosition.startY,
        width: initPosition.endX - initPosition.startX,
        height: initPosition.endY - initPosition.startY
      },
      axisAlignSheetTransform: sheetTransform,
      data,
      allowTransform
    };
    this._commandService.executeCommand(InsertSheetDrawingCommand.id, {
      unitId,
      drawings: [sheetDrawingParam]
    });
    this._add$.next({ unitId, subUnitId, id });
    return {
      id,
      dispose: () => {
        this._removeDom(id, true);
      }
    };
  }
  _removeDom(id, removeDrawing = false) {
    const info = this._domLayerInfoMap.get(id);
    if (!info) {
      return;
    }
    const { unitId, subUnitId } = info;
    this._domLayerInfoMap.delete(id);
    info.dispose.dispose();
    const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
    if (renderObject) {
      renderObject.scene.removeObject(info.rect);
    }
    if (removeDrawing) {
      const param = this._drawingManagerService.getDrawingByParam({ unitId, subUnitId, drawingId: id });
      if (!param) {
        return;
      }
      const jsonOp = this._sheetDrawingService.getBatchRemoveOp([param]);
      const { redo, objects } = jsonOp;
      this._commandService.syncExecuteCommand(SetDrawingApplyMutation.id, { unitId, subUnitId, op: redo, objects, type: 1 /* REMOVE */ });
    }
  }
  removeFloatDom(id, removeDrawing = true) {
    this._removeDom(id, removeDrawing);
  }
  // eslint-disable-next-line max-lines-per-function, complexity
  addFloatDomToRange(range, config, domAnchor, propId) {
    var _a, _b, _c;
    const target = getSheetCommandTarget(this._univerInstanceService, {
      unitId: config.unitId,
      subUnitId: config.subUnitId
    });
    if (!target) {
      throw new Error("cannot find current target!");
    }
    const { unitId, subUnitId } = target;
    const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
    if (!renderObject) return;
    const currentRender = this._renderManagerService.getRenderById(unitId);
    if (!currentRender) return;
    const skeletonParam = (_a = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId);
    if (!skeletonParam) return;
    const { componentKey, data, allowTransform = true } = config;
    const id = propId != null ? propId : generateRandomId();
    const { position: rangePosition, position$: rangePos$ } = this._createRangePositionObserver(range, currentRender, skeletonParam.skeleton);
    const sheetTransform = this._getPosition(rangePosition, unitId);
    if (sheetTransform == null) {
      return;
    }
    const scene = renderObject.scene;
    const { scaleX } = scene.getAncestorScale();
    const domPosFromRange = calcDomPositionByAnchor(rangePosition, domAnchor, scaleX);
    const sheetDrawingParam = {
      unitId,
      subUnitId,
      drawingId: id,
      drawingType: config.type || 8 /* DRAWING_DOM */,
      componentKey,
      sheetTransform,
      axisAlignSheetTransform: sheetTransform,
      transform: {
        left: domPosFromRange.startX,
        top: domPosFromRange.startY,
        width: domPosFromRange.width,
        height: domPosFromRange.height
      },
      data,
      allowTransform
    };
    {
      const { unitId: unitId2, subUnitId: subUnitId2, drawingId } = sheetDrawingParam;
      const target2 = getSheetCommandTarget(this._univerInstanceService, { unitId: unitId2, subUnitId: subUnitId2 });
      const floatDomParam = sheetDrawingParam;
      const workbook = this._univerInstanceService.getUnit(unitId2, 2 /* UNIVER_SHEET */);
      if (!workbook) {
        return;
      }
      const activeSheetId = workbook.getActiveSheet().getSheetId();
      if (!floatDomParam || !target2) {
        return;
      }
      const skMangerService = (_b = this._renderManagerService.getRenderById(unitId2)) == null ? void 0 : _b.with(SheetSkeletonManagerService);
      if (!skMangerService) {
        return;
      }
      const skeletonParam2 = skMangerService.getSkeletonParam(subUnitId2);
      if (!skeletonParam2) {
        return;
      }
      const { transform, drawingType, data: data2 } = floatDomParam;
      if (drawingType !== 8 /* DRAWING_DOM */ && drawingType !== 2 /* DRAWING_CHART */) {
        return;
      }
      const renderObject2 = this._getSceneAndTransformerByDrawingSearch(unitId2);
      if (renderObject2 == null) {
        return;
      }
      const { scene: scene2, canvas } = renderObject2;
      if (transform == null) {
        return;
      }
      if (activeSheetId !== subUnitId2) {
        return;
      }
      const { left, top, width, height, angle, flipX, flipY, skewX, skewY } = transform;
      const rectShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId: unitId2, subUnitId: subUnitId2, drawingId });
      const rectShape = scene2.getObject(rectShapeKey);
      if (rectShape != null) {
        rectShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
        return;
      }
      const domConfig = {
        left,
        // from floatDomParam.transform
        top,
        width,
        height,
        zIndex: this._drawingManagerService.getDrawingOrder(unitId2, subUnitId2).length - 1
      };
      const isChart = drawingType === 2 /* DRAWING_CHART */;
      if (isChart) {
        const backgroundColor = data2 ? data2.backgroundColor : "white";
        domConfig.fill = backgroundColor;
        domConfig.rotateEnabled = false;
        if (data2 && data2.border) {
          domConfig.stroke = data2.border;
        }
        domConfig.paintFirst = "stroke";
        domConfig.strokeWidth = 1;
        domConfig.borderEnabled = false;
        domConfig.radius = 8;
      }
      const domRect = new Rect(rectShapeKey, domConfig);
      if (isChart) {
        domRect.setObjectType(6 /* CHART */);
      }
      scene2.addObject(domRect, DRAWING_OBJECT_LAYER_INDEX);
      if (floatDomParam.allowTransform !== false) {
        scene2.attachTransformerTo(domRect);
      }
      const disposableCollection = new DisposableCollection();
      const viewMain = scene2.getMainViewport();
      const { rowHeaderWidth, columnHeaderHeight } = skeletonParam2.skeleton;
      const boundsOfViewArea = {
        top: columnHeaderHeight,
        left: rowHeaderWidth,
        bottom: viewMain.bottom,
        right: viewMain.right
      };
      const floatDomInfo = {
        dispose: disposableCollection,
        rect: domRect,
        boundsOfViewArea,
        domAnchor,
        unitId: unitId2,
        subUnitId: subUnitId2,
        id: drawingId
      };
      const initedPosition = calcSheetFloatDomPosition(domRect, renderObject2.renderUnit.scene, skeletonParam2.skeleton, target2.worksheet, floatDomInfo);
      const position$ = new BehaviorSubject(initedPosition);
      floatDomInfo.position$ = position$;
      let floatDomCfg = {
        position$,
        id: drawingId,
        componentKey: floatDomParam.componentKey,
        onPointerDown: () => {
        },
        onPointerMove: () => {
        },
        onPointerUp: () => {
        },
        onWheel: (evt) => {
          canvas.dispatchEvent(new WheelEvent(evt.type, evt));
        },
        data: data2,
        unitId: unitId2
      };
      if (config.eventPassThrough) {
        floatDomCfg = {
          ...floatDomCfg,
          onPointerDown: (evt) => {
            canvas.dispatchEvent(new PointerEvent(evt.type, evt));
          },
          onPointerMove: (evt) => {
            canvas.dispatchEvent(new PointerEvent(evt.type, evt));
          },
          onPointerUp: (evt) => {
            canvas.dispatchEvent(new PointerEvent(evt.type, evt));
          }
        };
      }
      this._canvasFloatDomService.addFloatDom(floatDomCfg);
      this.disposeWithMe(rangePos$.subscribe((newRangePos) => {
        var _a2, _b2, _c2, _d;
        const calcOffsetPos = calcDomPositionByAnchor({
          rotate: 0,
          startX: newRangePos.startX,
          startY: newRangePos.startY,
          endX: newRangePos.endX,
          endY: newRangePos.endY,
          width: (_a2 = domAnchor.width) != null ? _a2 : newRangePos.width,
          height: (_b2 = domAnchor.height) != null ? _b2 : newRangePos.height,
          absolute: {
            left: rangePosition.absolute.left,
            top: rangePosition.absolute.top
          }
        }, domAnchor);
        const rectShapeKey2 = getDrawingShapeKeyByDrawingSearch({ unitId: unitId2, subUnitId: subUnitId2, drawingId });
        const newRect = new Rect(rectShapeKey2, {
          left: calcOffsetPos.startX,
          top: calcOffsetPos.startY,
          width: (_c2 = domAnchor.width) != null ? _c2 : newRangePos.width,
          height: (_d = domAnchor.height) != null ? _d : newRangePos.height,
          zIndex: this._drawingManagerService.getDrawingOrder(unitId2, subUnitId2).length - 1
        });
        const newPos = calcSheetFloatDomPosition(newRect, renderObject2.renderUnit.scene, skeletonParam2.skeleton, target2.worksheet, floatDomInfo);
        position$.next(newPos);
      }));
      const skm = (_c = this._renderManagerService.getRenderById(unitId2)) == null ? void 0 : _c.with(SheetSkeletonManagerService);
      const skeletonSubscription = skm == null ? void 0 : skm.currentSkeleton$.subscribe((skeleton) => {
        if (!skeleton) return;
        if (skeletonParam2.sheetId !== skeleton.sheetId) {
          this._removeDom(id, true);
        }
      });
      skeletonSubscription && disposableCollection.add(skeletonSubscription);
      const listener = domRect.onTransformChange$.subscribeEvent(() => {
        const newPosition = calcSheetFloatDomPosition(domRect, renderObject2.renderUnit.scene, skeletonParam2.skeleton, target2.worksheet, floatDomInfo);
        position$.next(
          newPosition
        );
      });
      disposableCollection.add(() => {
        this._canvasFloatDomService.removeFloatDom(drawingId);
      });
      listener && disposableCollection.add(listener);
      this._domLayerInfoMap.set(drawingId, floatDomInfo);
    }
    return {
      id,
      dispose: () => {
        this._removeDom(id, true);
      }
    };
  }
  // eslint-disable-next-line max-lines-per-function, complexity
  addFloatDomToColumnHeader(column, config, domLayoutParam, propId) {
    var _a, _b, _c;
    const target = getSheetCommandTarget(this._univerInstanceService, {
      unitId: config.unitId,
      subUnitId: config.subUnitId
    });
    if (!target) {
      throw new Error("cannot find current target!");
    }
    const { unitId, subUnitId } = target;
    const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
    if (!renderObject) return;
    const currentRender = this._renderManagerService.getRenderById(unitId);
    if (!currentRender) return;
    const skeletonParam = (_a = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId);
    if (!skeletonParam) return;
    const { componentKey, data, allowTransform = true } = config;
    const id = propId != null ? propId : generateRandomId();
    const { position: rangePosition, position$: rangePos$ } = this._createRangePositionObserver({
      startRow: 0,
      endRow: 0,
      startColumn: column,
      endColumn: column
    }, currentRender, skeletonParam.skeleton);
    const headerCellPosition = rangePosition;
    headerCellPosition.startY = 0;
    const sheetTransform = this._getPosition(rangePosition, unitId);
    if (sheetTransform == null) {
      return;
    }
    const sheetDrawingParam = {
      unitId,
      subUnitId,
      drawingId: id,
      drawingType: config.type || 8 /* DRAWING_DOM */,
      componentKey,
      sheetTransform,
      axisAlignSheetTransform: sheetTransform,
      transform: {
        left: headerCellPosition.startX,
        top: headerCellPosition.startY,
        width: headerCellPosition.width,
        height: headerCellPosition.height
      },
      data,
      allowTransform
    };
    {
      const { unitId: unitId2, subUnitId: subUnitId2, drawingId } = sheetDrawingParam;
      const target2 = getSheetCommandTarget(this._univerInstanceService, { unitId: unitId2, subUnitId: subUnitId2 });
      const floatDomParam = sheetDrawingParam;
      const workbook = this._univerInstanceService.getUnit(unitId2, 2 /* UNIVER_SHEET */);
      if (!workbook) {
        return;
      }
      const activeSheetId = workbook.getActiveSheet().getSheetId();
      if (!floatDomParam || !target2) {
        return;
      }
      const skMangerService = (_b = this._renderManagerService.getRenderById(unitId2)) == null ? void 0 : _b.with(SheetSkeletonManagerService);
      if (!skMangerService) {
        return;
      }
      const skeleton = skMangerService.getSkeletonParam(subUnitId2);
      if (!skeleton) {
        return;
      }
      const { transform, data: data2 } = floatDomParam;
      const renderObject2 = this._getSceneAndTransformerByDrawingSearch(unitId2);
      if (renderObject2 == null) {
        return;
      }
      const { scene, canvas } = renderObject2;
      if (transform == null) {
        return;
      }
      if (activeSheetId !== subUnitId2) {
        return;
      }
      const { left, top, width, height, angle, flipX, flipY, skewX, skewY } = transform;
      const rectShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId: unitId2, subUnitId: subUnitId2, drawingId });
      const rectShape = scene.getObject(rectShapeKey);
      if (rectShape != null) {
        rectShape.transformByState({ left, top, width, height, angle, flipX, flipY, skewX, skewY });
        return;
      }
      const calcOffsetPos = calcDomPositionByAnchor({
        rotate: 0,
        startX: headerCellPosition.startX,
        startY: 0,
        endX: rangePosition.endX,
        endY: rangePosition.endY,
        width: domLayoutParam.width,
        height: domLayoutParam.height,
        absolute: {
          left: rangePosition.absolute.left,
          top: rangePosition.absolute.top
        }
      }, domLayoutParam);
      const headerRectConfig = {
        left: calcOffsetPos.startX,
        top: calcOffsetPos.startY,
        width: calcOffsetPos.width,
        height: calcOffsetPos.height,
        zIndex: this._drawingManagerService.getDrawingOrder(unitId2, subUnitId2).length - 1
      };
      const domRect = new Rect(rectShapeKey, headerRectConfig);
      scene.addObject(domRect, DRAWING_OBJECT_LAYER_INDEX);
      if (floatDomParam.allowTransform !== false) {
        scene.attachTransformerTo(domRect);
      }
      const disposableCollection = new DisposableCollection();
      const viewMain = scene.getMainViewport();
      const boundsOfViewArea = {
        top: 0,
        //viewMain.top,
        left: viewMain.left,
        bottom: viewMain.bottom,
        right: viewMain.right
      };
      const floatDomInfo = {
        dispose: disposableCollection,
        rect: domRect,
        // position$,
        unitId: unitId2,
        subUnitId: subUnitId2,
        id: drawingId,
        boundsOfViewArea,
        domAnchor: domLayoutParam,
        scrollDirectionResponse: "HORIZONTAL" /* HORIZONTAL */
      };
      const initedPosition = calcSheetFloatDomPosition(domRect, renderObject2.renderUnit.scene, skeleton.skeleton, target2.worksheet, floatDomInfo);
      const position$ = new BehaviorSubject(initedPosition);
      floatDomInfo.position$ = position$;
      let floatDomCfg = {
        position$,
        id: drawingId,
        componentKey: floatDomParam.componentKey,
        onPointerDown: () => {
        },
        onPointerMove: () => {
        },
        onPointerUp: () => {
        },
        onWheel: (evt) => {
          canvas.dispatchEvent(new WheelEvent(evt.type, evt));
        },
        data: data2,
        unitId: unitId2
      };
      if (config.eventPassThrough) {
        floatDomCfg = {
          ...floatDomCfg,
          onPointerDown: (evt) => {
            canvas.dispatchEvent(new PointerEvent(evt.type, evt));
          },
          onPointerMove: (evt) => {
            canvas.dispatchEvent(new PointerEvent(evt.type, evt));
          },
          onPointerUp: (evt) => {
            canvas.dispatchEvent(new PointerEvent(evt.type, evt));
          }
        };
      }
      this._canvasFloatDomService.addFloatDom(floatDomCfg);
      const listener = domRect.onTransformChange$.subscribeEvent(() => {
        const newPosition = calcSheetFloatDomPosition(domRect, renderObject2.renderUnit.scene, skeleton.skeleton, target2.worksheet, floatDomInfo);
        position$.next(
          newPosition
        );
      });
      this.disposeWithMe(rangePos$.subscribe((newHeaderPos) => {
        const calcOffsetPos2 = calcDomPositionByAnchor({
          rotate: 0,
          startX: newHeaderPos.startX,
          startY: 0,
          endX: newHeaderPos.endX,
          endY: newHeaderPos.endY,
          width: domLayoutParam.width,
          height: domLayoutParam.height,
          absolute: {
            left: rangePosition.absolute.left,
            top: rangePosition.absolute.top
          }
        }, domLayoutParam);
        const rectShapeKey2 = getDrawingShapeKeyByDrawingSearch({ unitId: unitId2, subUnitId: subUnitId2, drawingId });
        const newRect = new Rect(rectShapeKey2, {
          left: calcOffsetPos2.startX,
          top: 0,
          width: domLayoutParam.width,
          height: domLayoutParam.height,
          zIndex: this._drawingManagerService.getDrawingOrder(unitId2, subUnitId2).length - 1
        });
        const newPos = calcSheetFloatDomPosition(newRect, renderObject2.renderUnit.scene, skeleton.skeleton, target2.worksheet, floatDomInfo);
        position$.next(newPos);
      }));
      const skm = (_c = this._renderManagerService.getRenderById(unitId2)) == null ? void 0 : _c.with(SheetSkeletonManagerService);
      skm == null ? void 0 : skm.currentSkeleton$.subscribe((skeleton2) => {
        if (!skeleton2) return;
        if (skeletonParam.sheetId !== skeleton2.sheetId) {
          this._removeDom(id, true);
        }
      });
      disposableCollection.add(() => {
        this._canvasFloatDomService.removeFloatDom(drawingId);
      });
      listener && disposableCollection.add(listener);
      this._domLayerInfoMap.set(drawingId, floatDomInfo);
    }
    return {
      id,
      dispose: () => {
        this._removeDom(id, true);
      }
    };
  }
  /**
   * Unlike _createCellPositionObserver, this accept a range not a single cell.
   *
   * @param initialRow
   * @param initialCol
   * @param currentRender
   * @param skeleton
   * @param activeViewport
   * @returns position of cell to canvas.
   */
  // eslint-disable-next-line max-lines-per-function
  _createRangePositionObserver(range, currentRender, skeleton) {
    let { startRow, startColumn } = range;
    const topLeftCoord = calcCellPositionByCell(startRow, startColumn, skeleton);
    const topLeftPos$ = new BehaviorSubject(topLeftCoord);
    const rightBottomCoord = calcCellPositionByCell(range.endRow, range.endColumn, skeleton);
    const rightBottomPos$ = new BehaviorSubject(rightBottomCoord);
    const updatePosition = () => {
      const topLeftCoord2 = calcCellPositionByCell(startRow, startColumn, skeleton);
      const rightBottomCoord2 = calcCellPositionByCell(range.endRow, range.endColumn, skeleton);
      topLeftPos$.next(topLeftCoord2);
      rightBottomPos$.next(rightBottomCoord2);
    };
    const disposable = new DisposableCollection();
    disposable.add(currentRender.engine.clientRect$.subscribe(() => updatePosition()));
    disposable.add(this._commandService.onCommandExecuted((commandInfo) => {
      if (commandInfo.id === SetWorksheetRowAutoHeightMutation.id) {
        const params = commandInfo.params;
        if (params.rowsAutoHeightInfo.findIndex((item) => item.row === startRow) > -1) {
          updatePosition();
          return;
        }
      }
      if (COMMAND_LISTENER_SKELETON_CHANGE.indexOf(commandInfo.id) > -1 || commandInfo.id === SetScrollOperation.id || commandInfo.id === SetZoomRatioOperation.id) {
        updatePosition();
      }
    }));
    const updateRowCol = (newRow, newCol) => {
      startRow = newRow;
      startColumn = newCol;
      updatePosition();
    };
    const genPosition = () => {
      return {
        rotate: 0,
        width: rightBottomCoord.right - topLeftCoord.left,
        height: rightBottomCoord.bottom - topLeftCoord.top,
        absolute: {
          left: true,
          top: true
        },
        startX: topLeftCoord.left,
        startY: topLeftCoord.top,
        endX: rightBottomCoord.right,
        endY: rightBottomCoord.bottom
      };
    };
    const position$ = topLeftPos$.pipe(
      map((topLeft) => {
        const rightBottomCoord2 = calcCellPositionByCell(range.endRow, range.endColumn, skeleton);
        return {
          rotate: 0,
          width: rightBottomCoord2.right - topLeft.left,
          height: rightBottomCoord2.bottom - topLeft.top,
          absolute: {
            left: true,
            top: true
          },
          startX: topLeft.left,
          startY: topLeft.top,
          endX: rightBottomCoord2.right,
          endY: rightBottomCoord2.bottom
        };
      })
    );
    const position = genPosition();
    return {
      position$,
      position,
      updateRowCol,
      topLeftPos$,
      rightBottomPos$,
      disposable
    };
  }
};
SheetCanvasFloatDomManagerService = __decorateClass([
  __decorateParam(0, Inject(IRenderManagerService)),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, Inject(ICommandService)),
  __decorateParam(3, IDrawingManagerService),
  __decorateParam(4, Inject(CanvasFloatDomService)),
  __decorateParam(5, ISheetDrawingService),
  __decorateParam(6, Inject(LifecycleService))
], SheetCanvasFloatDomManagerService);
function calcCellPositionByCell(row, col, skeleton) {
  const primaryWithCoord = skeleton.getCellWithCoordByIndex(row, col);
  const cellInfo = primaryWithCoord.isMergedMainCell ? primaryWithCoord.mergeInfo : primaryWithCoord;
  return {
    left: cellInfo.startX,
    right: cellInfo.endX,
    top: cellInfo.startY,
    bottom: cellInfo.endY
  };
}
function calcDomPositionByAnchor(rangePosition, domAnchor, scale) {
  var _a, _b;
  scale = scale != null ? scale : 1;
  const rangeWidth = rangePosition.endX - rangePosition.startX;
  const rangeHeight = rangePosition.endY - rangePosition.startY;
  const domWidth = (_a = domAnchor == null ? void 0 : domAnchor.width) != null ? _a : rangeWidth;
  const domHeight = (_b = domAnchor == null ? void 0 : domAnchor.height) != null ? _b : rangeHeight;
  let domLeft = 0;
  let domTop = 0;
  if (domAnchor) {
    if (domAnchor.horizonOffsetAlign === "right") {
      const offsetX = calculateOffset(domAnchor.marginX, rangeWidth * scale);
      domLeft = rangePosition.endX - offsetX - domWidth;
    } else {
      domLeft = rangePosition.startX + calculateOffset(domAnchor.marginX, rangeWidth);
    }
    if (domAnchor.verticalOffsetAlign === "bottom") {
      const offsetY = calculateOffset(domAnchor.marginY, rangeHeight * scale);
      domTop = rangePosition.endY - offsetY - domHeight;
    } else {
      domTop = rangePosition.startY + calculateOffset(domAnchor.marginY, rangeHeight);
    }
  }
  return {
    rotate: 0,
    startX: domLeft,
    startY: domTop,
    endX: rangePosition.endX,
    endY: rangePosition.endY,
    width: domWidth,
    height: domHeight,
    absolute: {
      left: rangePosition.absolute.left,
      top: rangePosition.absolute.top
    }
  };
}
function calculateOffset(value, rangeWidth) {
  if (value === void 0) return 0;
  if (typeof value === "number") return value;
  const percentage = Number.parseFloat(value);
  return rangeWidth * percentage / 100;
}

// ../packages/sheets-drawing-ui/src/views/printing-float-dom/index.tsx
var import_react8 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var PrintingFloatDom = (props) => {
  const { floatDomInfos, scene, skeleton, worksheet } = props;
  const floatDomParams = (0, import_react8.useMemo)(() => floatDomInfos.map((info) => {
    const { width, height, angle, left, top } = info.transform;
    const offsetBound = transformBound2DOMBound(
      {
        left: left != null ? left : 0,
        right: (left != null ? left : 0) + (width != null ? width : 0),
        top: top != null ? top : 0,
        bottom: (top != null ? top : 0) + (height != null ? height : 0)
      },
      scene,
      skeleton,
      worksheet,
      void 0,
      true
    );
    const { scaleX, scaleY } = scene.getAncestorScale();
    const domPos = {
      startX: offsetBound.left,
      endX: offsetBound.right,
      startY: offsetBound.top,
      endY: offsetBound.bottom,
      rotate: angle,
      width: width * scaleX,
      height: height * scaleY,
      absolute: offsetBound.absolute
    };
    const floatDom = {
      position$: new BehaviorSubject(domPos),
      position: domPos,
      id: info.drawingId,
      componentKey: info.componentKey,
      onPointerMove: () => {
      },
      onPointerDown: () => {
      },
      onPointerUp: () => {
      },
      onWheel: () => {
      },
      unitId: info.unitId,
      data: info.data
    };
    return [info.drawingId, floatDom];
  }), [floatDomInfos, scene, skeleton, worksheet]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { position: "absolute", top: 0, left: 0 }, children: floatDomParams.map(([id, floatDom]) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PrintFloatDomSingle, { layer: floatDom, id, position: floatDom.position }, id)) });
};

// ../packages/sheets-drawing-ui/src/controllers/sheet-drawing-printing.controller.tsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var SheetDrawingPrintingController = class extends Disposable {
  constructor(_sheetPrintInterceptorService, _drawingRenderService, _drawingManagerService, _renderManagerService, _canvasFloatDomManagerService, _componetManager, _injector) {
    super();
    __publicField(this, "_sheetPrintInterceptorService", _sheetPrintInterceptorService);
    __publicField(this, "_drawingRenderService", _drawingRenderService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_canvasFloatDomManagerService", _canvasFloatDomManagerService);
    __publicField(this, "_componetManager", _componetManager);
    __publicField(this, "_injector", _injector);
    this._initPrinting();
    this._initPrintingDom();
  }
  _initPrinting() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService.interceptor.intercept(
        this._sheetPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_COMPONENT_COLLECT,
        {
          handler: (_param, pos, next) => {
            const { unitId, scene, subUnitId } = pos;
            const unitData = this._drawingManagerService.getDrawingDataForUnit(unitId);
            const subUnitData = unitData == null ? void 0 : unitData[subUnitId];
            if (subUnitData) {
              subUnitData.order.forEach((id) => {
                const drawing = subUnitData.data[id];
                if (drawing.drawingType !== 2 /* DRAWING_CHART */ && drawing.drawingType !== 8 /* DRAWING_DOM */) {
                  this._drawingRenderService.renderDrawing(drawing, scene);
                }
              });
            }
            return next();
          }
        }
      )
    );
    this.disposeWithMe(
      this._sheetPrintInterceptorService.interceptor.intercept(
        this._sheetPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_RANGE,
        {
          handler: (range, pos, next) => {
            const { unitId, subUnitId } = pos;
            const renderer = this._renderManagerService.getRenderById(unitId);
            if (!renderer) {
              return next(range);
            }
            const skeleton = renderer.with(SheetSkeletonManagerService).getSkeletonParam(subUnitId);
            if (!skeleton) {
              return next(range);
            }
            const unitData = this._drawingManagerService.getDrawingDataForUnit(unitId);
            const subUnitData = unitData == null ? void 0 : unitData[pos.subUnitId];
            if (!subUnitData) {
              return next(range);
            }
            const { scaleX, scaleY } = renderer.scene;
            const newRange = range ? { ...range } : { startColumn: 0, endColumn: 0, endRow: 0, startRow: 0 };
            const data = subUnitData.order.map((key) => subUnitData.data[key]);
            if (data.length) {
              data.forEach((param) => {
                if (!param.groupId && param.transform && Tools.isDefine(param.transform.left) && Tools.isDefine(param.transform.top) && Tools.isDefine(param.transform.width) && Tools.isDefine(param.transform.height)) {
                  const start = skeleton.skeleton.getCellIndexByOffset(param.transform.left, param.transform.top, scaleX, scaleY, { x: 0, y: 0 });
                  const end = skeleton.skeleton.getCellIndexByOffset(param.transform.left + param.transform.width, param.transform.top + param.transform.height, scaleX, scaleY, { x: 0, y: 0 });
                  if (start.column < newRange.startColumn) {
                    newRange.startColumn = start.column;
                  }
                  if (start.row < newRange.startRow) {
                    newRange.startRow = start.row;
                  }
                  if (newRange.endRow < end.row) {
                    newRange.endRow = end.row;
                  }
                  if (newRange.endColumn < end.column) {
                    newRange.endColumn = end.column;
                  }
                }
              });
              return next(newRange);
            }
            return next(range);
          }
        }
      )
    );
  }
  _initPrintingDom() {
    this.disposeWithMe(
      this._sheetPrintInterceptorService.interceptor.intercept(
        this._sheetPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_DOM_COLLECT,
        {
          handler: (disposableCollection, pos, next) => {
            const { unitId, subUnitId } = pos;
            const unitData = this._drawingManagerService.getDrawingDataForUnit(unitId);
            const subUnitData = unitData == null ? void 0 : unitData[subUnitId];
            if (subUnitData) {
              const floatDomInfos = subUnitData.order.map((id) => {
                const drawing = subUnitData.data[id];
                if (drawing.drawingType === 2 /* DRAWING_CHART */) {
                  return {
                    ...drawing,
                    componentKey: this._componetManager.get(PRINT_CHART_COMPONENT_KEY)
                  };
                }
                if (drawing.drawingType === 8 /* DRAWING_DOM */) {
                  const printingComponentKey = this._sheetPrintInterceptorService.getPrintComponent(drawing.componentKey);
                  return {
                    ...drawing,
                    componentKey: this._componetManager.get(printingComponentKey || drawing.componentKey)
                  };
                }
                return null;
              }).filter(Boolean);
              const PrintingFloatDomInjector = connectInjector(PrintingFloatDom, this._injector);
              render(
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PrintingFloatDomInjector, { floatDomInfos, scene: pos.scene, skeleton: pos.skeleton, worksheet: pos.worksheet }),
                pos.root
              );
              disposableCollection == null ? void 0 : disposableCollection.add(() => {
                unmount(pos.root);
              });
              return next(disposableCollection);
            }
          }
        }
      )
    );
  }
};
SheetDrawingPrintingController = __decorateClass([
  __decorateParam(0, Inject(SheetPrintInterceptorService)),
  __decorateParam(1, Inject(DrawingRenderService)),
  __decorateParam(2, IDrawingManagerService),
  __decorateParam(3, IRenderManagerService),
  __decorateParam(4, Inject(SheetCanvasFloatDomManagerService)),
  __decorateParam(5, Inject(ComponentManager)),
  __decorateParam(6, Inject(Injector))
], SheetDrawingPrintingController);

// ../packages/sheets-drawing-ui/src/controllers/sheet-drawing-transform-affected.controller.ts
var UPDATE_COMMANDS = [
  InsertRowCommand.id,
  InsertColCommand.id,
  RemoveRowCommand.id,
  RemoveColCommand.id,
  DeleteRangeMoveLeftCommand.id,
  DeleteRangeMoveUpCommand.id,
  InsertRangeMoveDownCommand.id,
  InsertRangeMoveRightCommand.id,
  DeltaRowHeightCommand.id,
  SetRowHeightCommand.id,
  DeltaColumnWidthCommand.id,
  SetColWidthCommand.id,
  SetRowHiddenCommand.id,
  SetSpecificRowsVisibleCommand.id,
  SetSpecificColsVisibleCommand.id,
  SetColHiddenCommand.id,
  MoveColsCommand.id,
  MoveRowsCommand.id,
  MoveRangeCommand.id
];
var REFRESH_MUTATIONS = [
  SetRowVisibleMutation.id,
  SetRowHiddenMutation.id,
  SetColVisibleMutation.id,
  SetColHiddenMutation.id,
  SetWorksheetRowHeightMutation.id,
  SetWorksheetRowAutoHeightMutation.id,
  SetWorksheetRowIsAutoHeightMutation.id,
  SetWorksheetColWidthMutation.id
];
var SheetDrawingTransformAffectedController = class extends Disposable {
  constructor(_context, _commandService, _sheetSkeletonService, _selectionRenderService, _sheetInterceptorService, _selectionManagerService, _sheetDrawingService, _drawingManagerService, _univerInstanceService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_sheetSkeletonService", _sheetSkeletonService);
    __publicField(this, "_selectionRenderService", _selectionRenderService);
    __publicField(this, "_sheetInterceptorService", _sheetInterceptorService);
    __publicField(this, "_selectionManagerService", _selectionManagerService);
    __publicField(this, "_sheetDrawingService", _sheetDrawingService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    this._sheetInterceptorListener();
    this._commandListener();
    this._sheetRefreshListener();
  }
  // eslint-disable-next-line max-lines-per-function
  _sheetInterceptorListener() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptAfterCommand({
        // eslint-disable-next-line max-lines-per-function,complexity
        getMutations: (commandInfo) => {
          var _a, _b, _c;
          const { id, params } = commandInfo;
          if (!UPDATE_COMMANDS.includes(id) || !params) {
            return { redos: [], undos: [] };
          }
          if (id === InsertRowCommand.id) {
            return this._moveRowInterceptor(params, "insert");
          } else if ([MoveColsCommand.id, MoveRowsCommand.id, MoveRangeCommand.id].includes(id)) {
            let target;
            if (id === MoveRangeCommand.id) {
              const _params = params;
              if (_params.toUnitId && _params.fromUnitId && _params.toUnitId !== _params.fromUnitId || _params.toSubUnitId && _params.fromSubUnitId && _params.toSubUnitId !== _params.fromSubUnitId) {
                return { redos: [], undos: [] };
              }
              target = getSheetCommandTarget(this._univerInstanceService, { unitId: _params.toUnitId, subUnitId: _params.toSubUnitId });
            } else {
              target = getSheetCommandTarget(this._univerInstanceService, params);
            }
            if (!target) {
              return { redos: [], undos: [] };
            }
            const { unitId, subUnitId } = target;
            const { fromRange, toRange } = params;
            return this._moveRangeInterceptor(unitId, subUnitId, fromRange, toRange);
          } else if (id === InsertColCommand.id) {
            return this._moveColInterceptor(params, "insert");
          } else if (id === RemoveRowCommand.id) {
            return this._moveRowInterceptor(params, "remove");
          } else if (id === RemoveColCommand.id) {
            return this._moveColInterceptor(params, "remove");
          } else if (id === DeleteRangeMoveLeftCommand.id) {
            const { range } = params;
            return this._getRangeMoveUndo(range, 0 /* deleteLeft */);
          } else if (id === DeleteRangeMoveUpCommand.id) {
            const { range } = params;
            return this._getRangeMoveUndo(range, 1 /* deleteUp */);
          } else if (id === InsertRangeMoveDownCommand.id) {
            const { range } = params;
            return this._getRangeMoveUndo(range, 2 /* insertDown */);
          } else if (id === InsertRangeMoveRightCommand.id) {
            const { range } = params;
            return this._getRangeMoveUndo(range, 3 /* insertRight */);
          } else if (id === SetRowHiddenCommand.id || id === SetSpecificRowsVisibleCommand.id) {
            const _params = params;
            const target = getSheetCommandTarget(this._univerInstanceService, _params);
            if (!target) {
              return { redos: [], undos: [] };
            }
            const { unitId, subUnitId } = target;
            const ranges = _params.ranges || ((_a = this._selectionManagerService.getCurrentSelections()) == null ? void 0 : _a.map((s) => s.range).filter((r) => r.rangeType === 1 /* ROW */));
            if (!ranges || ranges.length === 0) {
              return { redos: [], undos: [] };
            }
            return this._getDrawingUndoForRowVisible(unitId, subUnitId, ranges);
          } else if (id === SetColHiddenCommand.id || id === SetSpecificColsVisibleCommand.id) {
            const _params = params;
            const target = getSheetCommandTarget(this._univerInstanceService, _params);
            if (!target) {
              return { redos: [], undos: [] };
            }
            const { unitId, subUnitId } = target;
            const ranges = _params.ranges || ((_b = this._selectionManagerService.getCurrentSelections()) == null ? void 0 : _b.map((s) => s.range).filter((r) => r.rangeType === 2 /* COLUMN */));
            if (!ranges || ranges.length === 0) {
              return { redos: [], undos: [] };
            }
            return this._getDrawingUndoForColVisible(unitId, subUnitId, ranges);
          } else if (id === DeltaRowHeightCommand.id || id === DeltaColumnWidthCommand.id) {
            const target = getSheetCommandTarget(this._univerInstanceService);
            if (!target) {
              return { redos: [], undos: [] };
            }
            const { unitId, subUnitId, worksheet } = target;
            const ranges = [];
            if (id === DeltaRowHeightCommand.id) {
              ranges.push({
                startRow: params.anchorRow,
                endRow: params.anchorRow,
                startColumn: 0,
                endColumn: worksheet.getColumnCount() - 1
              });
            } else {
              ranges.push({
                startRow: 0,
                endRow: worksheet.getRowCount() - 1,
                startColumn: params.anchorCol,
                endColumn: params.anchorCol
              });
            }
            return this._getDrawingUndoForRowAndColSize(unitId, subUnitId, ranges);
          } else if (id === SetRowHeightCommand.id || id === SetColWidthCommand.id) {
            const _params = params;
            const target = getSheetCommandTarget(this._univerInstanceService, _params);
            if (!target) {
              return { redos: [], undos: [] };
            }
            const { unitId, subUnitId } = target;
            const ranges = _params.ranges || ((_c = this._selectionManagerService.getCurrentSelections()) == null ? void 0 : _c.map((s) => s.range));
            if (!ranges || ranges.length === 0) {
              return { redos: [], undos: [] };
            }
            return this._getDrawingUndoForRowAndColSize(unitId, subUnitId, ranges);
          }
          return { redos: [], undos: [] };
        }
      })
    );
  }
  _getRangeMoveUndo(range, type) {
    const target = getSheetCommandTarget(this._univerInstanceService);
    if (!target) {
      return { redos: [], undos: [] };
    }
    const { unitId, subUnitId } = target;
    const drawingData = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
    const redos = [];
    const undos = [];
    const updateDrawings = [];
    const deleteDrawings = [];
    Object.keys(drawingData).forEach((drawingId) => {
      const drawing = drawingData[drawingId];
      const { updateDrawings: updateDrawingsPart, deleteDrawings: deleteDrawingsPart } = this._getUpdateOrDeleteDrawings(range, type, drawing);
      updateDrawings.push(...updateDrawingsPart);
      deleteDrawings.push(...deleteDrawingsPart);
    });
    if (updateDrawings.length === 0 && deleteDrawings.length === 0) {
      return { redos: [], undos: [] };
    }
    if (updateDrawings.length > 0) {
      const updateJsonOp = this._sheetDrawingService.getBatchUpdateOp(updateDrawings);
      const { undo, redo, objects } = updateJsonOp;
      redos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: redo, objects, type: 2 /* UPDATE */ } });
      undos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: undo, objects, type: 2 /* UPDATE */ } });
    }
    if (deleteDrawings.length > 0) {
      const deleteJsonOp = this._sheetDrawingService.getBatchRemoveOp(deleteDrawings);
      const deleteUndo = deleteJsonOp.undo;
      const deleteRedo = deleteJsonOp.redo;
      const deleteObjects = deleteJsonOp.objects;
      redos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: deleteRedo, objects: deleteObjects, type: 1 /* REMOVE */ } });
      undos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: deleteUndo, objects: deleteObjects, type: 0 /* INSERT */ } });
    }
    redos.push({ id: ClearSheetDrawingTransformerOperation.id, params: [unitId] });
    undos.push({ id: ClearSheetDrawingTransformerOperation.id, params: [unitId] });
    return {
      redos,
      undos
    };
  }
  // eslint-disable-next-line max-lines-per-function,complexity
  _getUpdateOrDeleteDrawings(range, type, drawing) {
    var _a, _b, _c, _d;
    const updateDrawings = [];
    const deleteDrawings = [];
    const { sheetTransform, anchorType = "0" /* Position */, transform, unitId, subUnitId, drawingId } = drawing;
    const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
    if (!sheetTransform || !transform || !sheetSkeletonParam) {
      return {
        updateDrawings,
        deleteDrawings
      };
    }
    const { from, to } = sheetTransform;
    const { row: fromRow, column: fromColumn } = from;
    const { row: toRow, column: toColumn } = to;
    const { startRow, endRow, startColumn, endColumn } = range;
    let newSheetTransform = null;
    let newTransform = null;
    let axisAlignSheetTransform;
    if (type === 0 /* deleteLeft */ && fromRow >= startRow && toRow <= endRow) {
      if (fromColumn >= startColumn && toColumn <= endColumn) {
        deleteDrawings.push({ unitId, subUnitId, drawingId });
      } else {
        const param = this._shrinkCol(startColumn, endColumn, {
          sheetSkeletonParam,
          sheetTransform,
          transform,
          anchorType
        });
        newSheetTransform = param == null ? void 0 : param.newSheetTransform;
        newTransform = param == null ? void 0 : param.newTransform;
        axisAlignSheetTransform = (_a = param == null ? void 0 : param.axisAlignSheetTransform) != null ? _a : void 0;
      }
    } else if (type === 1 /* deleteUp */ && fromColumn >= startColumn && toColumn <= endColumn) {
      if (fromRow >= startRow && toRow <= endRow) {
        deleteDrawings.push({ unitId, subUnitId, drawingId });
      } else {
        const param = this._shrinkRow(startRow, endRow, {
          sheetSkeletonParam,
          sheetTransform,
          transform,
          anchorType
        });
        newSheetTransform = param == null ? void 0 : param.newSheetTransform;
        newTransform = param == null ? void 0 : param.newTransform;
        axisAlignSheetTransform = (_b = param == null ? void 0 : param.axisAlignSheetTransform) != null ? _b : void 0;
      }
    } else if (type === 2 /* insertDown */) {
      const param = this._expandRow(startRow, endRow, {
        sheetSkeletonParam,
        sheetTransform,
        transform,
        anchorType
      });
      newSheetTransform = param == null ? void 0 : param.newSheetTransform;
      newTransform = param == null ? void 0 : param.newTransform;
      axisAlignSheetTransform = (_c = param == null ? void 0 : param.axisAlignSheetTransform) != null ? _c : void 0;
    } else if (type === 3 /* insertRight */) {
      const param = this._expandCol(startColumn, endColumn, {
        sheetSkeletonParam,
        sheetTransform,
        transform,
        anchorType
      });
      newSheetTransform = param == null ? void 0 : param.newSheetTransform;
      newTransform = param == null ? void 0 : param.newTransform;
      axisAlignSheetTransform = (_d = param == null ? void 0 : param.axisAlignSheetTransform) != null ? _d : void 0;
    }
    if (newSheetTransform && newTransform) {
      const newTransform2 = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
      updateDrawings.push({ ...drawing, sheetTransform: newSheetTransform, transform: newTransform2, axisAlignSheetTransform });
    }
    return { updateDrawings, deleteDrawings };
  }
  _remainDrawingSize(transform, updateDrawings, drawing, skeleton) {
    const newSheetTransform = transformToDrawingPosition({ ...transform }, skeleton);
    if (newSheetTransform) {
      const axisAlignSheetTransform = transformToAxisAlignPosition({ ...transform }, skeleton);
      updateDrawings.push({
        ...drawing,
        sheetTransform: newSheetTransform,
        axisAlignSheetTransform
      });
    }
  }
  // eslint-disable-next-line max-lines-per-function
  _getDrawingUndoForColVisible(unitId, subUnitId, ranges) {
    const skeleton = this._sheetSkeletonService.getSkeleton(unitId, subUnitId);
    if (!skeleton) {
      return { redos: [], undos: [] };
    }
    const drawingData = this._drawingManagerService.getDrawingData(unitId, subUnitId);
    const updateDrawings = [];
    const preUpdateDrawings = [];
    Object.keys(drawingData).forEach((drawingId) => {
      const drawing = drawingData[drawingId];
      const { sheetTransform, transform, anchorType = "0" /* Position */ } = drawing;
      if (anchorType === "2" /* None */) {
        this._remainDrawingSize(transform, updateDrawings, drawing, skeleton);
      } else {
        const { from, to } = sheetTransform;
        const { row: fromRow, column: fromColumn } = from;
        const { row: toRow, column: toColumn } = to;
        for (let i = 0; i < ranges.length; i++) {
          const range = ranges[i];
          const { startColumn, endColumn } = range;
          if (toColumn < startColumn) {
            continue;
          }
          if (anchorType === "0" /* Position */) {
            let newSheetTransform2 = null;
            let newTransform2 = null;
            if (fromColumn >= startColumn && fromColumn <= endColumn) {
              const selectionCell = attachRangeWithCoord(skeleton, {
                startColumn: fromColumn,
                endColumn,
                startRow: fromRow,
                endRow: toRow
              });
              newTransform2 = { ...transform, left: selectionCell.startX };
            }
            if (newTransform2) {
              newSheetTransform2 = transformToDrawingPosition(newTransform2, skeleton);
              const axisAlignSheetTransform = transformToAxisAlignPosition(newTransform2, skeleton);
              if (newSheetTransform2 && newTransform2) {
                updateDrawings.push({ ...drawing, sheetTransform: newSheetTransform2, transform: newTransform2, axisAlignSheetTransform });
                break;
              }
            }
            continue;
          }
          if (fromColumn >= startColumn && toColumn <= endColumn) {
            continue;
          }
          let newSheetTransform = null;
          let newTransform = null;
          if (fromColumn >= startColumn && fromColumn <= endColumn) {
            const selectionCell = attachRangeWithCoord(skeleton, {
              startColumn: fromColumn,
              endColumn,
              startRow: fromRow,
              endRow: toRow
            });
            newTransform = {
              ...transform,
              left: (selectionCell == null ? void 0 : selectionCell.startX) || 0,
              width: ((transform == null ? void 0 : transform.width) || 0) - selectionCell.endX + selectionCell.startX
            };
          } else if (toColumn >= startColumn && toColumn <= endColumn) {
            const selectionCell = attachRangeWithCoord(skeleton, {
              startColumn,
              endColumn: toColumn,
              startRow: fromRow,
              endRow: toRow
            });
            newTransform = {
              ...transform,
              left: selectionCell.startX - ((transform == null ? void 0 : transform.width) || 0)
            };
          } else {
            const selectionCell = attachRangeWithCoord(skeleton, {
              startColumn,
              endColumn,
              startRow: fromRow,
              endRow: toRow
            });
            newTransform = {
              ...transform,
              width: ((transform == null ? void 0 : transform.width) || 0) - selectionCell.endX + selectionCell.startX
            };
            newSheetTransform = transformToDrawingPosition(newTransform, skeleton);
            if (newSheetTransform && newTransform) {
              const axisAlignSheetTransform = transformToAxisAlignPosition(newTransform, skeleton);
              preUpdateDrawings.push({ ...drawing, sheetTransform: newSheetTransform, transform: newTransform, axisAlignSheetTransform });
              break;
            }
          }
          if (newTransform) {
            newSheetTransform = transformToDrawingPosition(newTransform, skeleton);
          }
          if (newTransform && newSheetTransform) {
            const axisAlignSheetTransform = transformToAxisAlignPosition(newTransform, skeleton);
            updateDrawings.push({ ...drawing, sheetTransform: newSheetTransform, transform: newTransform, axisAlignSheetTransform });
            break;
          } else {
            this._remainDrawingSize(transform, updateDrawings, drawing, skeleton);
          }
        }
      }
    });
    if (updateDrawings.length === 0 && preUpdateDrawings.length === 0) {
      return { redos: [], undos: [] };
    }
    const { redos, undos } = this._createUndoAndRedoMutation(unitId, subUnitId, updateDrawings);
    const preRedos = [];
    const preUndos = [];
    if (preUpdateDrawings.length > 0) {
      const { redos: redos2, undos: undos2 } = this._createUndoAndRedoMutation(unitId, subUnitId, preUpdateDrawings);
      preRedos.push(...redos2);
      preUndos.push(...undos2);
    }
    return {
      redos,
      undos,
      preRedos,
      preUndos
    };
  }
  _createUndoAndRedoMutation(unitId, subUnitId, updateDrawings) {
    const updateJsonOp = this._sheetDrawingService.getBatchUpdateOp(updateDrawings);
    const { undo, redo, objects } = updateJsonOp;
    const redos = [
      { id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: redo, objects, type: 2 /* UPDATE */ } },
      { id: ClearSheetDrawingTransformerOperation.id, params: [unitId] }
    ];
    const undos = [
      { id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: undo, objects, type: 2 /* UPDATE */ } },
      { id: ClearSheetDrawingTransformerOperation.id, params: [unitId] }
    ];
    return {
      redos,
      undos
    };
  }
  // eslint-disable-next-line max-lines-per-function
  _getDrawingUndoForRowVisible(unitId, subUnitId, ranges) {
    const skeleton = this._sheetSkeletonService.getSkeleton(unitId, subUnitId);
    if (!skeleton) {
      return { redos: [], undos: [] };
    }
    const drawingData = this._drawingManagerService.getDrawingData(unitId, subUnitId);
    const updateDrawings = [];
    const preUpdateDrawings = [];
    Object.keys(drawingData).forEach((drawingId) => {
      const drawing = drawingData[drawingId];
      const { sheetTransform, transform, anchorType = "0" /* Position */ } = drawing;
      if (anchorType === "2" /* None */) {
        this._remainDrawingSize(transform, updateDrawings, drawing, skeleton);
      } else {
        const { from, to } = sheetTransform;
        const { row: fromRow, column: fromColumn } = from;
        const { row: toRow, column: toColumn } = to;
        for (let i = 0; i < ranges.length; i++) {
          const range = ranges[i];
          const { startRow, endRow } = range;
          if (toRow < startRow) {
            continue;
          }
          if (anchorType === "0" /* Position */) {
            let newSheetTransform2 = null;
            let newTransform2 = null;
            if (fromRow >= startRow && fromRow <= endRow) {
              const selectionCell = attachRangeWithCoord(skeleton, {
                startColumn: fromColumn,
                endColumn: toColumn,
                startRow: fromRow,
                endRow
              });
              newTransform2 = { ...transform, top: selectionCell.startY };
            }
            if (newTransform2) {
              newSheetTransform2 = transformToDrawingPosition(newTransform2, skeleton);
              const axisAlignSheetTransform = transformToAxisAlignPosition(newTransform2, skeleton);
              if (newSheetTransform2 && newTransform2) {
                updateDrawings.push({ ...drawing, sheetTransform: newSheetTransform2, transform: newTransform2, axisAlignSheetTransform });
                break;
              }
            }
            continue;
          }
          if (fromRow >= startRow && toRow <= endRow) {
            continue;
          }
          let newSheetTransform = null;
          let newTransform = null;
          if (fromRow >= startRow && fromRow <= endRow) {
            const selectionCell = attachRangeWithCoord(skeleton, {
              startColumn: fromColumn,
              endColumn: toColumn,
              startRow: fromRow,
              endRow
            });
            newTransform = {
              ...transform,
              top: (selectionCell == null ? void 0 : selectionCell.startY) || 0,
              height: ((transform == null ? void 0 : transform.height) || 0) - selectionCell.endY + selectionCell.startY
            };
          } else if (toRow >= startRow && toRow <= endRow) {
            const selectionCell = attachRangeWithCoord(skeleton, {
              startColumn: fromColumn,
              endColumn: toColumn,
              startRow,
              endRow: toRow
            });
            newTransform = {
              ...transform,
              top: selectionCell.startY - ((transform == null ? void 0 : transform.height) || 0)
            };
          } else {
            const selectionCell = attachRangeWithCoord(skeleton, {
              startColumn: fromColumn,
              endColumn: toColumn,
              startRow,
              endRow
            });
            newTransform = {
              ...transform,
              height: ((transform == null ? void 0 : transform.height) || 0) - selectionCell.endY + selectionCell.startY
            };
            newSheetTransform = transformToDrawingPosition(newTransform, skeleton);
            if (newSheetTransform && newTransform) {
              const axisAlignSheetTransform = transformToAxisAlignPosition(newTransform, skeleton);
              preUpdateDrawings.push({ ...drawing, sheetTransform: newSheetTransform, transform: newTransform, axisAlignSheetTransform });
              break;
            }
          }
          if (newTransform) {
            newSheetTransform = transformToDrawingPosition(newTransform, skeleton);
          }
          if (newTransform && newSheetTransform) {
            const axisAlignSheetTransform = transformToAxisAlignPosition(newTransform, skeleton);
            updateDrawings.push({ ...drawing, sheetTransform: newSheetTransform, transform: newTransform, axisAlignSheetTransform });
            break;
          } else {
            this._remainDrawingSize(transform, updateDrawings, drawing, skeleton);
          }
        }
      }
    });
    if (updateDrawings.length === 0 && preUpdateDrawings.length === 0) {
      return { redos: [], undos: [] };
    }
    const { redos, undos } = this._createUndoAndRedoMutation(unitId, subUnitId, updateDrawings);
    const preRedos = [];
    const preUndos = [];
    if (preUpdateDrawings.length > 0) {
      const { redos: redos2, undos: undos2 } = this._createUndoAndRedoMutation(unitId, subUnitId, preUpdateDrawings);
      preRedos.push(...redos2);
      preUndos.push(...undos2);
    }
    return {
      redos,
      undos,
      preRedos,
      preUndos
    };
  }
  _getDrawingUndoForRowAndColSize(unitId, subUnitId, ranges) {
    const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
    if (!sheetSkeletonParam) {
      return { redos: [], undos: [] };
    }
    const { skeleton } = sheetSkeletonParam;
    const drawingData = this._drawingManagerService.getDrawingData(unitId, subUnitId);
    const updateDrawings = [];
    Object.keys(drawingData).forEach((drawingId) => {
      const drawing = drawingData[drawingId];
      const { sheetTransform, transform, anchorType = "0" /* Position */ } = drawing;
      if (anchorType === "2" /* None */) {
        this._remainDrawingSize(transform, updateDrawings, drawing, skeleton);
      } else {
        const { from, to } = sheetTransform;
        const { row: fromRow, column: fromColumn } = from;
        const { row: toRow, column: toColumn } = to;
        for (let i = 0; i < ranges.length; i++) {
          const range = ranges[i];
          const { startRow, endRow, startColumn, endColumn } = range;
          if (toRow < startRow || toColumn < startColumn) {
            continue;
          }
          if (anchorType === "0" /* Position */) {
            if (fromRow <= startRow && toRow >= endRow || fromColumn <= startColumn && toColumn >= endColumn) {
              this._remainDrawingSize(transform, updateDrawings, drawing, skeleton);
              continue;
            }
          }
          const newTransform = drawingPositionToTransform({ ...sheetTransform }, sheetSkeletonParam);
          if (newTransform) {
            updateDrawings.push({
              ...drawing,
              transform: newTransform
            });
            break;
          }
        }
      }
    });
    if (updateDrawings.length === 0) {
      return { redos: [], undos: [] };
    }
    return this._createUndoAndRedoMutation(unitId, subUnitId, updateDrawings);
  }
  _getUnitIdAndSubUnitId(params, type) {
    let target;
    if (type === "insert") {
      target = getSheetCommandTarget(this._univerInstanceService, params);
    } else {
      target = getSheetCommandTarget(this._univerInstanceService);
    }
    if (!target) return;
    const { unitId, subUnitId } = target;
    return { unitId, subUnitId };
  }
  _moveRangeInterceptor(unitId, subUnitId, fromRange, toRange) {
    const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
    if (!sheetSkeletonParam) {
      return { redos: [], undos: [] };
    }
    const { skeleton } = sheetSkeletonParam;
    const selectionRect = attachRangeWithCoord(skeleton, fromRange);
    if (!selectionRect) {
      return { redos: [], undos: [] };
    }
    const { startX, endX, startY, endY } = selectionRect;
    const drawings = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
    const containedDrawings = [];
    Object.keys(drawings).forEach((drawingId) => {
      const drawing = drawings[drawingId];
      if (drawing.anchorType !== "1" /* Both */) {
        return;
      }
      const { transform } = drawing;
      if (!transform) {
        return;
      }
      const { left = 0, top = 0, width = 0, height = 0 } = transform;
      const { drawingStartX, drawingEndX, drawingStartY, drawingEndY } = {
        drawingStartX: left,
        drawingEndX: left + width,
        drawingStartY: top,
        drawingEndY: top + height
      };
      if (startX <= drawingStartX && drawingEndX <= endX && startY <= drawingStartY && drawingEndY <= endY) {
        containedDrawings.push(drawing);
      }
    });
    const redos = [];
    const undos = [];
    const rowOffset = toRange.startRow - fromRange.startRow;
    const colOffset = toRange.startColumn - fromRange.startColumn;
    const updateDrawings = containedDrawings.map((drawing) => {
      const oldSheetTransform = drawing.sheetTransform;
      const sheetTransform = {
        to: { ...oldSheetTransform.to, row: oldSheetTransform.to.row + rowOffset, column: oldSheetTransform.to.column + colOffset },
        from: { ...oldSheetTransform.from, row: oldSheetTransform.from.row + rowOffset, column: oldSheetTransform.from.column + colOffset }
      };
      const transform = drawingPositionToTransform(sheetTransform, sheetSkeletonParam);
      const params = {
        unitId,
        subUnitId,
        drawingId: drawing.drawingId,
        transform,
        sheetTransform
      };
      return params;
    });
    if (updateDrawings.length) {
      const updateJsonOp = this._sheetDrawingService.getBatchUpdateOp(updateDrawings);
      const { undo, redo, objects } = updateJsonOp;
      redos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: redo, objects, type: 2 /* UPDATE */ } });
      undos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: undo, objects, type: 2 /* UPDATE */ } });
    }
    return { redos, undos };
  }
  // eslint-disable-next-line max-lines-per-function
  _moveRowInterceptor(params, type) {
    const target = this._getUnitIdAndSubUnitId(params, type);
    if (!target) {
      return { redos: [], undos: [] };
    }
    const { unitId, subUnitId } = target;
    const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
    if (!sheetSkeletonParam) {
      return { redos: [], undos: [] };
    }
    const { range } = params;
    const rowStartIndex = range.startRow;
    const rowEndIndex = range.endRow;
    const redos = [];
    const undos = [];
    const data = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
    const updateDrawings = [];
    const deleteDrawings = [];
    Object.keys(data).forEach((drawingId) => {
      var _a, _b;
      const drawing = data[drawingId];
      const { sheetTransform, transform, anchorType = "0" /* Position */ } = drawing;
      if (!sheetTransform || !transform) {
        return;
      }
      let newSheetTransform;
      let newTransform;
      let axisAlignSheetTransform;
      if (type === "insert") {
        const param = this._expandRow(rowStartIndex, rowEndIndex, {
          sheetSkeletonParam,
          sheetTransform,
          transform,
          anchorType
        });
        newSheetTransform = param == null ? void 0 : param.newSheetTransform;
        newTransform = param == null ? void 0 : param.newTransform;
        axisAlignSheetTransform = (_a = param == null ? void 0 : param.axisAlignSheetTransform) != null ? _a : void 0;
      } else {
        const { from, to } = sheetTransform;
        const { row: fromRow } = from;
        const { row: toRow } = to;
        if (anchorType === "1" /* Both */ && fromRow >= rowStartIndex && toRow <= rowEndIndex) {
          deleteDrawings.push({ unitId, subUnitId, drawingId });
        } else {
          const param = this._shrinkRow(rowStartIndex, rowEndIndex, {
            sheetSkeletonParam,
            sheetTransform,
            transform,
            anchorType
          });
          newSheetTransform = param == null ? void 0 : param.newSheetTransform;
          newTransform = param == null ? void 0 : param.newTransform;
          axisAlignSheetTransform = (_b = param == null ? void 0 : param.axisAlignSheetTransform) != null ? _b : void 0;
        }
      }
      if (!newSheetTransform || !newTransform) {
        return;
      }
      const params2 = { unitId, subUnitId, drawingId, transform: newTransform, sheetTransform: newSheetTransform, axisAlignSheetTransform };
      updateDrawings.push(params2);
    });
    if (updateDrawings.length === 0 && deleteDrawings.length === 0) {
      return { redos: [], undos: [] };
    }
    if (updateDrawings.length > 0) {
      const updateJsonOp = this._sheetDrawingService.getBatchUpdateOp(updateDrawings);
      const { undo, redo, objects } = updateJsonOp;
      redos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: redo, objects, type: 2 /* UPDATE */ } });
      undos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: undo, objects, type: 2 /* UPDATE */ } });
    }
    if (deleteDrawings.length > 0) {
      const deleteJsonOp = this._sheetDrawingService.getBatchRemoveOp(deleteDrawings);
      const deleteUndo = deleteJsonOp.undo;
      const deleteRedo = deleteJsonOp.redo;
      const deleteObjects = deleteJsonOp.objects;
      redos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: deleteRedo, objects: deleteObjects, type: 1 /* REMOVE */ } });
      undos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: deleteUndo, objects: deleteObjects, type: 0 /* INSERT */ } });
    }
    redos.push({ id: ClearSheetDrawingTransformerOperation.id, params: [unitId] });
    undos.push({ id: ClearSheetDrawingTransformerOperation.id, params: [unitId] });
    return {
      redos,
      undos
    };
  }
  // eslint-disable-next-line max-lines-per-function
  _moveColInterceptor(params, type) {
    const target = this._getUnitIdAndSubUnitId(params, type);
    if (!target) {
      return { redos: [], undos: [] };
    }
    const { unitId, subUnitId } = target;
    const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
    if (!sheetSkeletonParam) {
      return { redos: [], undos: [] };
    }
    const { range } = params;
    const colStartIndex = range.startColumn;
    const colEndIndex = range.endColumn;
    const redos = [];
    const undos = [];
    const data = this._sheetDrawingService.getDrawingData(unitId, subUnitId);
    const updateDrawings = [];
    const deleteDrawings = [];
    Object.keys(data).forEach((drawingId) => {
      var _a, _b;
      const drawing = data[drawingId];
      const { sheetTransform, transform, anchorType = "0" /* Position */ } = drawing;
      if (!sheetTransform || !transform) {
        return;
      }
      let newSheetTransform;
      let newTransform;
      let axisAlignSheetTransform;
      if (type === "insert") {
        const param = this._expandCol(colStartIndex, colEndIndex, {
          sheetSkeletonParam,
          sheetTransform,
          transform,
          anchorType
        });
        newSheetTransform = param == null ? void 0 : param.newSheetTransform;
        newTransform = param == null ? void 0 : param.newTransform;
        axisAlignSheetTransform = (_a = param == null ? void 0 : param.axisAlignSheetTransform) != null ? _a : void 0;
      } else {
        const { from, to } = sheetTransform;
        const { column: fromColumn } = from;
        const { column: toColumn } = to;
        if (anchorType === "1" /* Both */ && fromColumn >= colStartIndex && toColumn <= colEndIndex) {
          deleteDrawings.push({ unitId, subUnitId, drawingId });
        } else {
          const param = this._shrinkCol(colStartIndex, colEndIndex, {
            sheetSkeletonParam,
            sheetTransform,
            transform,
            anchorType
          });
          newSheetTransform = param == null ? void 0 : param.newSheetTransform;
          newTransform = param == null ? void 0 : param.newTransform;
          axisAlignSheetTransform = (_b = param == null ? void 0 : param.axisAlignSheetTransform) != null ? _b : void 0;
        }
      }
      if (!newSheetTransform || !newTransform) {
        return;
      }
      const params2 = { unitId, subUnitId, drawingId, transform: newTransform, sheetTransform: newSheetTransform, axisAlignSheetTransform };
      updateDrawings.push(params2);
    });
    if (updateDrawings.length === 0 && deleteDrawings.length === 0) {
      return { redos: [], undos: [] };
    }
    if (updateDrawings.length > 0) {
      const updateJsonOp = this._sheetDrawingService.getBatchUpdateOp(updateDrawings);
      const { undo, redo, objects } = updateJsonOp;
      redos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: redo, objects, type: 2 /* UPDATE */ } });
      undos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: undo, objects, type: 2 /* UPDATE */ } });
    }
    if (deleteDrawings.length > 0) {
      const deleteJsonOp = this._sheetDrawingService.getBatchRemoveOp(deleteDrawings);
      const deleteUndo = deleteJsonOp.undo;
      const deleteRedo = deleteJsonOp.redo;
      const deleteObjects = deleteJsonOp.objects;
      redos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: deleteRedo, objects: deleteObjects, type: 1 /* REMOVE */ } });
      undos.push({ id: SetDrawingApplyMutation.id, params: { unitId, subUnitId, op: deleteUndo, objects: deleteObjects, type: 0 /* INSERT */ } });
    }
    redos.push({ id: ClearSheetDrawingTransformerOperation.id, params: [unitId] });
    undos.push({ id: ClearSheetDrawingTransformerOperation.id, params: [unitId] });
    return { redos, undos };
  }
  _expandCol(colStartIndex, colEndIndex, options) {
    const { sheetSkeletonParam, sheetTransform, transform, anchorType = "0" /* Position */ } = options;
    const { skeleton } = sheetSkeletonParam;
    const colCount = colEndIndex - colStartIndex + 1;
    const { from, to } = sheetTransform;
    const { column: fromColumn } = from;
    const { column: toColumn } = to;
    if (anchorType === "2" /* None */) {
      return {
        newSheetTransform: transformToDrawingPosition({ ...transform }, skeleton),
        newTransform: transform,
        axisAlignSheetTransform: transformToAxisAlignPosition({ ...transform }, skeleton)
      };
    }
    let newSheetTransform = null;
    let newTransform = null;
    let axisAlignSheetTransform = null;
    if (fromColumn >= colStartIndex) {
      const selectionCell = attachRangeWithCoord(skeleton, {
        startColumn: colStartIndex,
        endColumn: colEndIndex,
        startRow: from.row,
        endRow: to.row
      });
      newTransform = { ...transform, left: (transform.left || 0) + selectionCell.endX - selectionCell.startX };
      newSheetTransform = transformToDrawingPosition(newTransform, skeleton);
      axisAlignSheetTransform = transformToAxisAlignPosition(newTransform, skeleton);
    } else if (toColumn >= colEndIndex) {
      if (anchorType === "1" /* Both */) {
        newSheetTransform = {
          from: { ...from },
          to: { ...to, column: toColumn + colCount }
        };
        newTransform = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
      } else {
        return {
          newSheetTransform: transformToDrawingPosition({ ...transform }, skeleton),
          newTransform: transform,
          axisAlignSheetTransform: transformToAxisAlignPosition({ ...transform }, skeleton)
        };
      }
    }
    if (newSheetTransform && newTransform) {
      return {
        newSheetTransform,
        newTransform,
        axisAlignSheetTransform
      };
    }
    return null;
  }
  // eslint-disable-next-line max-lines-per-function
  _shrinkCol(colStartIndex, colEndIndex, options) {
    const { sheetSkeletonParam, sheetTransform, transform, anchorType = "0" /* Position */ } = options;
    const { skeleton } = sheetSkeletonParam;
    const colCount = colEndIndex - colStartIndex + 1;
    const { from, to } = sheetTransform;
    const { column: fromColumn } = from;
    const { column: toColumn } = to;
    if (anchorType === "2" /* None */) {
      return {
        newSheetTransform: transformToDrawingPosition({ ...transform }, skeleton),
        newTransform: transform,
        axisAlignSheetTransform: transformToAxisAlignPosition({ ...transform }, skeleton)
      };
    }
    let newSheetTransform = null;
    let newTransform = null;
    let axisAlignSheetTransform = null;
    if (fromColumn > colEndIndex) {
      newSheetTransform = {
        from: { ...from, column: fromColumn - colCount },
        to: { ...to, column: toColumn - colCount }
      };
      newTransform = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
    } else if (fromColumn >= colStartIndex && toColumn <= colEndIndex) {
      return null;
    } else if (fromColumn < colStartIndex && toColumn > colEndIndex) {
      if (anchorType === "1" /* Both */) {
        newSheetTransform = {
          from: { ...from },
          to: { ...to, column: toColumn - colCount }
        };
        newTransform = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
      } else {
        return {
          newSheetTransform: transformToDrawingPosition({ ...transform }, skeleton),
          newTransform: transform,
          axisAlignSheetTransform: transformToAxisAlignPosition({ ...transform }, skeleton)
        };
      }
    } else if (fromColumn >= colStartIndex && fromColumn <= colEndIndex) {
      if (fromColumn === colStartIndex) {
        newTransform = { ...transform, left: (transform.left || 0) - sheetTransform.from.columnOffset };
      } else {
        const selectionCell = attachRangeWithCoord(skeleton, {
          startColumn: colStartIndex,
          endColumn: fromColumn - 1,
          startRow: from.row,
          endRow: to.row
        });
        newTransform = { ...transform, left: (transform.left || 0) - selectionCell.endX + selectionCell.startX - sheetTransform.from.columnOffset };
      }
      newSheetTransform = transformToDrawingPosition(newTransform, skeleton);
      axisAlignSheetTransform = transformToAxisAlignPosition(newTransform, skeleton);
    } else if (toColumn >= colStartIndex && toColumn <= colEndIndex && anchorType === "1" /* Both */) {
      const selectionCell = attachRangeWithCoord(skeleton, {
        startColumn: colStartIndex - 1,
        endColumn: colStartIndex - 1,
        startRow: from.row,
        endRow: to.row
      });
      newSheetTransform = {
        from: { ...from },
        to: { ...to, column: colStartIndex - 1, columnOffset: selectionCell.endX - selectionCell.startX }
      };
      newTransform = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
    }
    if (newSheetTransform && newTransform) {
      return {
        newSheetTransform,
        newTransform,
        axisAlignSheetTransform
      };
    }
    return null;
  }
  _expandRow(rowStartIndex, rowEndIndex, options) {
    const { sheetSkeletonParam, sheetTransform, transform, anchorType = "0" /* Position */ } = options;
    const { skeleton } = sheetSkeletonParam;
    const rowCount = rowEndIndex - rowStartIndex + 1;
    const { from, to } = sheetTransform;
    const { row: fromRow } = from;
    const { row: toRow } = to;
    if (anchorType === "2" /* None */) {
      return {
        newSheetTransform: transformToDrawingPosition({ ...transform }, skeleton),
        newTransform: transform,
        axisAlignSheetTransform: transformToAxisAlignPosition({ ...transform }, skeleton)
      };
    }
    let newSheetTransform = null;
    let newTransform = null;
    let axisAlignSheetTransform = null;
    if (fromRow >= rowStartIndex) {
      const selectionCell = attachRangeWithCoord(skeleton, {
        startRow: rowStartIndex,
        endRow: rowEndIndex,
        startColumn: from.column,
        endColumn: to.column
      });
      newTransform = { ...transform, top: (transform.top || 0) + selectionCell.endY - selectionCell.startY };
      newSheetTransform = transformToDrawingPosition(newTransform, skeleton);
      axisAlignSheetTransform = transformToAxisAlignPosition(newTransform, skeleton);
    } else if (toRow >= rowEndIndex) {
      if (anchorType === "1" /* Both */) {
        newSheetTransform = {
          from: { ...from },
          to: {
            ...to,
            row: toRow + rowCount
          }
        };
        newTransform = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
      } else {
        return {
          newSheetTransform: transformToDrawingPosition({ ...transform }, skeleton),
          newTransform: transform,
          axisAlignSheetTransform: transformToAxisAlignPosition({ ...transform }, skeleton)
        };
      }
    }
    if (newSheetTransform && newTransform) {
      return {
        newSheetTransform,
        newTransform,
        axisAlignSheetTransform
      };
    }
    return null;
  }
  // eslint-disable-next-line max-lines-per-function
  _shrinkRow(rowStartIndex, rowEndIndex, options) {
    const { sheetSkeletonParam, sheetTransform, transform, anchorType = "0" /* Position */ } = options;
    const { skeleton } = sheetSkeletonParam;
    const rowCount = rowEndIndex - rowStartIndex + 1;
    const { from, to } = sheetTransform;
    const { row: fromRow } = from;
    const { row: toRow } = to;
    if (anchorType === "2" /* None */) {
      return {
        newSheetTransform: transformToDrawingPosition({ ...transform }, skeleton),
        newTransform: transform,
        axisAlignSheetTransform: transformToAxisAlignPosition({ ...transform }, skeleton)
      };
    }
    let newSheetTransform = null;
    let newTransform = null;
    let axisAlignSheetTransform = null;
    if (fromRow > rowEndIndex) {
      newSheetTransform = {
        from: { ...from, row: fromRow - rowCount },
        to: { ...to, row: toRow - rowCount }
      };
      newTransform = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
    } else if (fromRow >= rowStartIndex && toRow <= rowEndIndex) {
      return null;
    } else if (fromRow < rowStartIndex && toRow > rowEndIndex) {
      if (anchorType === "1" /* Both */) {
        newSheetTransform = {
          from: { ...from },
          to: { ...to, row: toRow - rowCount }
        };
        newTransform = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
      } else {
        return {
          newSheetTransform: transformToDrawingPosition({ ...transform }, skeleton),
          newTransform: transform,
          axisAlignSheetTransform: transformToAxisAlignPosition({ ...transform }, skeleton)
        };
      }
    } else if (fromRow >= rowStartIndex && fromRow <= rowEndIndex) {
      if (fromRow === rowStartIndex) {
        newTransform = { ...transform, top: (transform.top || 0) - sheetTransform.from.rowOffset };
      } else {
        const selectionCell = attachRangeWithCoord(skeleton, {
          startRow: rowStartIndex,
          endRow: fromRow - 1,
          startColumn: from.column,
          endColumn: to.column
        });
        newTransform = { ...transform, top: (transform.top || 0) - selectionCell.endY + selectionCell.startY - sheetTransform.from.rowOffset };
      }
      newSheetTransform = transformToDrawingPosition(newTransform, skeleton);
      axisAlignSheetTransform = transformToAxisAlignPosition(newTransform, skeleton);
    } else if (toRow >= rowStartIndex && toRow <= rowEndIndex && anchorType === "1" /* Both */) {
      const selectionCell = attachRangeWithCoord(skeleton, {
        startColumn: from.column,
        endColumn: from.column,
        startRow: rowStartIndex - 1,
        endRow: rowStartIndex - 1
      });
      newSheetTransform = {
        from: { ...from },
        to: { ...to, row: rowStartIndex - 1, rowOffset: selectionCell.endY - selectionCell.startY }
      };
      newTransform = drawingPositionToTransform(newSheetTransform, sheetSkeletonParam);
    }
    if (newSheetTransform && newTransform) {
      return {
        newSheetTransform,
        newTransform,
        axisAlignSheetTransform
      };
    }
    return null;
  }
  _commandListener() {
    this.disposeWithMe(
      // TODO@weird94: this should subscribe to the command service
      // but the skeleton changes like other render modules. These two signals are not equivalent.
      // As a temp solution, I subscribed to activate$ here.
      this._commandService.onCommandExecuted((command) => {
        if (command.id === SetWorksheetActiveOperation.id) {
          const { unitId, subUnitId } = command.params;
          this._updateDrawings(unitId, subUnitId);
        }
      })
    );
    this.disposeWithMe(
      this._context.activated$.subscribe((activated) => {
        const { unit, unitId } = this._context;
        if (activated) {
          const subUnitId = unit.getActiveSheet().getSheetId();
          this._updateDrawings(unitId, subUnitId);
        } else {
          this._clearDrawings(unitId);
        }
      })
    );
  }
  _clearDrawings(selfUnitId) {
    setTimeout(() => {
      const drawingMap = this._drawingManagerService.drawingManagerData;
      const removeDrawings = [];
      Object.keys(drawingMap).forEach((unitId) => {
        const subUnitMap = drawingMap[unitId];
        Object.keys(subUnitMap).forEach((subUnitId) => {
          const drawingData = subUnitMap[subUnitId].data;
          Object.keys(drawingData).forEach((drawingId) => {
            if (unitId === selfUnitId) {
              removeDrawings.push(drawingData[drawingId]);
            }
          });
        });
      });
      this._sheetDrawingService.removeNotification(removeDrawings);
      this._drawingManagerService.removeNotification(removeDrawings);
    });
  }
  _updateDrawings(showUnitId, showSubunitId) {
    setTimeout(() => {
      const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(showUnitId, showSubunitId);
      const drawingMap = this._drawingManagerService.drawingManagerData;
      const insertDrawings = [];
      const removeDrawings = [];
      Object.keys(drawingMap).forEach((unitId) => {
        const subUnitMap = drawingMap[unitId];
        Object.keys(subUnitMap).forEach((subUnitId) => {
          const drawingData = subUnitMap[subUnitId].data;
          Object.keys(drawingData).forEach((drawingId) => {
            if (unitId === showUnitId && subUnitId === showSubunitId) {
              const drawing = drawingData[drawingId];
              if (drawing.sheetTransform) {
                drawing.transform = drawingPositionToTransform(drawing.sheetTransform, sheetSkeletonParam);
              }
              insertDrawings.push(drawingData[drawingId]);
            } else {
              removeDrawings.push(drawingData[drawingId]);
            }
          });
        });
      });
      this._sheetDrawingService.removeNotification(removeDrawings);
      this._sheetDrawingService.addNotification(insertDrawings);
      this._drawingManagerService.removeNotification(removeDrawings);
      this._drawingManagerService.addNotification(insertDrawings);
    }, 0);
  }
  _sheetRefreshListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        if (!REFRESH_MUTATIONS.includes(command.id)) {
          return;
        }
        requestIdleCallback(() => {
          const params = command.params;
          const target = getSheetCommandTarget(this._univerInstanceService, params);
          if (!target) return;
          const { unitId, subUnitId, worksheet } = target;
          let ranges = [];
          if ("ranges" in params) {
            ranges = params.ranges;
          } else if ("rowsAutoHeightInfo" in params) {
            ranges = params.rowsAutoHeightInfo.map((info) => ({
              startRow: info.row,
              endRow: info.row,
              startColumn: 0,
              endColumn: worksheet.getColumnCount() - 1
            }));
          }
          this._refreshDrawingTransform(unitId, subUnitId, ranges);
        });
      })
    );
  }
  _refreshDrawingTransform(unitId, subUnitId, ranges) {
    const sheetSkeletonParam = this._sheetSkeletonService.getSkeletonParam(unitId, subUnitId);
    const drawingData = this._drawingManagerService.getDrawingData(unitId, subUnitId);
    const updateDrawings = [];
    Object.keys(drawingData).forEach((drawingId) => {
      const drawing = drawingData[drawingId];
      const { sheetTransform, transform, anchorType = "0" /* Position */ } = drawing;
      if (anchorType === "2" /* None */) {
        return true;
      }
      const { from, to } = sheetTransform;
      const { row: fromRow, column: fromColumn } = from;
      const { row: toRow, column: toColumn } = to;
      for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];
        const { startRow, endRow, startColumn, endColumn } = range;
        if (Rectangle.intersects(
          {
            startRow,
            endRow,
            startColumn,
            endColumn
          },
          {
            startRow: fromRow,
            endRow: toRow,
            startColumn: fromColumn,
            endColumn: toColumn
          }
        ) || fromRow > endRow || fromColumn > endColumn) {
          const isPositionAnchor = anchorType === "0" /* Position */;
          const newTransform = drawingPositionToTransform(sheetTransform, sheetSkeletonParam);
          updateDrawings.push({
            ...drawing,
            transform: {
              ...newTransform,
              width: isPositionAnchor ? transform == null ? void 0 : transform.width : newTransform == null ? void 0 : newTransform.width,
              height: isPositionAnchor ? transform == null ? void 0 : transform.height : newTransform == null ? void 0 : newTransform.height
            }
          });
          break;
        }
      }
    });
    if (updateDrawings.length === 0) {
      return;
    }
    this._sheetDrawingService.refreshTransform(updateDrawings);
    this._drawingManagerService.refreshTransform(updateDrawings);
    this._commandService.syncExecuteCommand(ClearSheetDrawingTransformerOperation.id, [unitId]);
  }
};
SheetDrawingTransformAffectedController = __decorateClass([
  __decorateParam(1, ICommandService),
  __decorateParam(2, Inject(SheetSkeletonService)),
  __decorateParam(3, ISheetSelectionRenderService),
  __decorateParam(4, Inject(SheetInterceptorService)),
  __decorateParam(5, Inject(SheetsSelectionsService)),
  __decorateParam(6, ISheetDrawingService),
  __decorateParam(7, IDrawingManagerService),
  __decorateParam(8, IUniverInstanceService)
], SheetDrawingTransformAffectedController);

// ../packages/sheets-drawing-ui/src/commands/commands/delete-drawings.command.ts
var DeleteDrawingsCommand = {
  id: "sheet.command.delete-drawing",
  type: 0 /* COMMAND */,
  handler: (accessor) => {
    const commandService = accessor.get(ICommandService);
    const drawingManagerService = accessor.get(ISheetDrawingService);
    const drawings = drawingManagerService.getFocusDrawings();
    if (drawings.length === 0) {
      return false;
    }
    const unitId = drawings[0].unitId;
    const newDrawings = drawings.map((drawing) => {
      const { unitId: unitId2, subUnitId, drawingId, drawingType } = drawing;
      return {
        unitId: unitId2,
        subUnitId,
        drawingId,
        drawingType
      };
    });
    return commandService.executeCommand(RemoveSheetDrawingCommand.id, {
      unitId,
      drawings: newDrawings
    });
  }
};

// ../packages/sheets-drawing-ui/src/commands/commands/flip-drawings.command.ts
var FlipSheetDrawingCommand = {
  id: "sheet.command.toggle-flip-drawings",
  type: 0 /* COMMAND */,
  // eslint-disable-next-line max-lines-per-function, complexity
  handler: (accessor, params) => {
    if (!params) return false;
    const commandService = accessor.get(ICommandService);
    const undoRedoService = accessor.get(IUndoRedoService);
    const sheetDrawingService = accessor.get(ISheetDrawingService);
    const sheetSkeletonService = accessor.get(SheetSkeletonService);
    const { drawings } = params;
    const flipH = params.flipH;
    const flipV = params.flipV;
    const unitIds = [];
    const updateParams = [];
    for (const param of drawings) {
      const { unitId, subUnitId, drawingId } = param;
      unitIds.push(unitId);
      const drawingData = sheetDrawingService.getDrawingData(unitId, subUnitId);
      const existing = drawingData == null ? void 0 : drawingData[drawingId];
      if (!existing) {
        continue;
      }
      const skeleton = sheetSkeletonService.getSkeleton(unitId, subUnitId);
      if (!skeleton) {
        continue;
      }
      const transform = { ...existing.transform };
      if (flipH) {
        transform.flipX = !transform.flipX;
      }
      if (flipV) {
        transform.flipY = !transform.flipY;
      }
      const sheetTransform = transformToDrawingPosition(transform, skeleton);
      const axisAlignSheetTransform = transformToAxisAlignPosition(transform, skeleton);
      const updateParamItem = {
        unitId,
        subUnitId,
        drawingType: existing.drawingType,
        drawingId,
        transform,
        sheetTransform,
        axisAlignSheetTransform
      };
      const drawingType = existing.drawingType;
      if (drawingType === 0 /* DRAWING_IMAGE */) {
        const scene = getSceneByDrawingSearch(accessor, unitId);
        if (scene) {
          const drawingShapeKey = getDrawingShapeKeyByDrawingSearch({ unitId, subUnitId, drawingId });
          const imageShape = scene.getObject(drawingShapeKey);
          if (imageShape) {
            const srcRect = imageShape.srcRect;
            if (srcRect) {
              let newSrcRect;
              const { left = 0, top = 0, right = 0, bottom = 0 } = srcRect;
              if (flipH) {
                const centerX = left + (right - left) / 2;
                const newLeft = centerX - (right - left) / 2;
                const newRight = centerX + (right - left) / 2;
                newSrcRect = {
                  left: newLeft,
                  top,
                  right: newRight,
                  bottom
                };
              }
              if (flipV) {
                const centerY = top + (bottom - top) / 2;
                const newTop = centerY - (bottom - top) / 2;
                const newBottom = centerY + (bottom - top) / 2;
                newSrcRect = {
                  left,
                  top: newTop,
                  right,
                  bottom: newBottom
                };
              }
              if (newSrcRect) {
                updateParamItem.srcRect = newSrcRect;
              }
            }
          }
        }
      }
      updateParams.push(updateParamItem);
    }
    if (updateParams.length === 0) return false;
    const jsonOp = sheetDrawingService.getBatchUpdateOp(updateParams);
    const { unitId: opUnitId, subUnitId: opSubUnitId, undo, redo, objects } = jsonOp;
    const updateMutation = { id: SetDrawingApplyMutation.id, params: { unitId: opUnitId, subUnitId: opSubUnitId, op: redo, objects, type: 2 /* UPDATE */ } };
    const undoUpdateMutation = { id: SetDrawingApplyMutation.id, params: { unitId: opUnitId, subUnitId: opSubUnitId, op: undo, objects, type: 2 /* UPDATE */ } };
    const result = sequenceExecute([updateMutation], commandService);
    if (result.result) {
      undoRedoService.pushUndoRedo({
        unitID: opUnitId,
        undoMutations: [undoUpdateMutation, { id: ClearSheetDrawingTransformerOperation.id, params: unitIds }],
        redoMutations: [updateMutation, { id: ClearSheetDrawingTransformerOperation.id, params: unitIds }]
      });
      return true;
    }
    return false;
  }
};
function getSceneByDrawingSearch(accessor, unitId) {
  const renderManagerService = accessor.get(IRenderManagerService);
  const render2 = renderManagerService.getRenderById(unitId);
  if (!render2) {
    return null;
  }
  return render2.scene;
}

// ../packages/sheets-drawing-ui/src/commands/commands/move-drawings.command.ts
var MoveDrawingsCommand = {
  id: "sheet.command.move-drawing",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    const commandService = accessor.get(ICommandService);
    const drawingManagerService = accessor.get(ISheetDrawingService);
    const sheetSkeletonService = accessor.get(SheetSkeletonService);
    const { direction } = params;
    const drawings = drawingManagerService.getFocusDrawings();
    if (drawings.length === 0) {
      return false;
    }
    const unitId = drawings[0].unitId;
    const newDrawings = drawings.map((drawing) => {
      const { transform, unitId: unitId2, subUnitId } = drawing;
      const skeleton = sheetSkeletonService.getSkeleton(unitId2, subUnitId);
      if (!transform || !skeleton) {
        return null;
      }
      const newTransform = { ...transform };
      const { left = 0, top = 0 } = transform;
      if (direction === 0 /* UP */) {
        newTransform.top = top - 1;
      } else if (direction === 2 /* DOWN */) {
        newTransform.top = top + 1;
      } else if (direction === 3 /* LEFT */) {
        newTransform.left = left - 1;
      } else if (direction === 1 /* RIGHT */) {
        newTransform.left = left + 1;
      }
      return {
        ...drawing,
        transform: newTransform,
        sheetTransform: transformToDrawingPosition(newTransform, skeleton),
        axisAlignSheetTransform: transformToAxisAlignPosition(newTransform, skeleton)
      };
    }).filter((drawing) => drawing != null);
    const result = commandService.syncExecuteCommand(SetSheetDrawingCommand.id, {
      unitId,
      drawings: newDrawings
    });
    if (result) {
      commandService.syncExecuteCommand(ClearSheetDrawingTransformerOperation.id, [unitId]);
      return true;
    }
    return false;
  }
};

// ../packages/sheets-drawing-ui/src/services/batch-save-images.service.ts
var IBatchSaveImagesService = createIdentifier("sheets-drawing-ui.batch-save-images.service");
function columnIndexToLetter(index) {
  let letter = "";
  let temp = index;
  while (temp >= 0) {
    letter = String.fromCharCode(temp % 26 + 65) + letter;
    temp = Math.floor(temp / 26) - 1;
  }
  return letter;
}
function toA1Notation(row, col) {
  return `${columnIndexToLetter(col)}${row + 1}`;
}
function rangeToA1Notation(range) {
  const start = toA1Notation(range.startRow, range.startColumn);
  const end = toA1Notation(range.endRow, range.endColumn);
  return start === end ? start : `${start}:${end}`;
}
function cellHasImage(cell) {
  var _a, _b, _c, _d;
  return !!(((_b = (_a = cell == null ? void 0 : cell.p) == null ? void 0 : _a.drawingsOrder) == null ? void 0 : _b.length) && ((_d = (_c = cell == null ? void 0 : cell.p) == null ? void 0 : _c.drawingsOrder) == null ? void 0 : _d.length) > 0);
}
function getCellImageData(cell) {
  var _a, _b, _c;
  if (!((_b = (_a = cell.p) == null ? void 0 : _a.drawingsOrder) == null ? void 0 : _b.length) || !((_c = cell.p) == null ? void 0 : _c.drawings)) {
    return null;
  }
  const drawingId = cell.p.drawingsOrder[0];
  const drawing = cell.p.drawings[drawingId];
  if (!drawing || !("source" in drawing) || !("imageSourceType" in drawing)) {
    return null;
  }
  return drawing;
}
function getFileExtension(source, imageSourceType) {
  if (imageSourceType === "BASE64" /* BASE64 */) {
    const match = source.match(/^data:image\/(\w+);/);
    if (match) {
      return match[1] === "jpeg" ? "jpg" : match[1];
    }
  }
  if (imageSourceType === "URL" /* URL */) {
    const urlMatch = source.match(/\.(\w+)(?:\?|$)/);
    if (urlMatch) {
      return urlMatch[1].toLowerCase();
    }
  }
  return "png";
}
async function imageSourceToBlob(source, imageSourceType) {
  if (imageSourceType === "BASE64" /* BASE64 */) {
    const response = await fetch(source);
    return response.blob();
  }
  if (imageSourceType === "URL" /* URL */) {
    const response = await fetch(source);
    return response.blob();
  }
  throw new Error("UUID image type requires additional handling");
}
var BatchSaveImagesService = class extends Disposable {
  constructor(_univerInstanceService, _selectionService, _imageIoService, _urlImageService) {
    super();
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_selectionService", _selectionService);
    __publicField(this, "_imageIoService", _imageIoService);
    __publicField(this, "_urlImageService", _urlImageService);
  }
  /**
   * @deprecated Use IURLImageService directly
   */
  registerURLImageDownloader(downloader) {
    return this._urlImageService.registerURLImageDownloader(downloader);
  }
  getCellImagesInSelection() {
    const workbook = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
    if (!workbook) return [];
    const worksheet = workbook.getActiveSheet();
    if (!worksheet) return [];
    const selections = this._selectionService.getCurrentSelections();
    if (!selections || selections.length === 0) return [];
    const cellMatrix = worksheet.getCellMatrix();
    const images = [];
    for (const selection of selections) {
      const { startRow, endRow, startColumn, endColumn } = selection.range;
      for (let row = startRow; row <= endRow; row++) {
        for (let col = startColumn; col <= endColumn; col++) {
          const cell = cellMatrix.getValue(row, col);
          if (cellHasImage(cell)) {
            const imageData = getCellImageData(cell);
            if (imageData) {
              images.push({
                row,
                col,
                cellAddress: toA1Notation(row, col),
                source: imageData.source,
                imageSourceType: imageData.imageSourceType,
                imageId: imageData.drawingId
              });
            }
          }
        }
      }
    }
    return images;
  }
  getCellImagesFromRanges(unitId, subUnitId, ranges) {
    const workbook = this._univerInstanceService.getUnit(unitId, 2 /* UNIVER_SHEET */);
    if (!workbook) return [];
    const worksheet = workbook.getSheetBySheetId(subUnitId);
    if (!worksheet) return [];
    const cellMatrix = worksheet.getCellMatrix();
    const images = [];
    for (const range of ranges) {
      const { startRow, endRow, startColumn, endColumn } = range;
      for (let row = startRow; row <= endRow; row++) {
        for (let col = startColumn; col <= endColumn; col++) {
          const cell = cellMatrix.getValue(row, col);
          if (cellHasImage(cell)) {
            const imageData = getCellImageData(cell);
            if (imageData) {
              images.push({
                row,
                col,
                cellAddress: toA1Notation(row, col),
                source: imageData.source,
                imageSourceType: imageData.imageSourceType,
                imageId: imageData.drawingId
              });
            }
          }
        }
      }
    }
    return images;
  }
  getDataColumns() {
    var _a, _b, _c, _d;
    const workbook = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
    if (!workbook) return [];
    const worksheet = workbook.getActiveSheet();
    if (!worksheet) return [];
    const selections = this._selectionService.getCurrentSelections();
    if (!selections || selections.length === 0) return [];
    const cellMatrix = worksheet.getCellMatrix();
    const dataRange = cellMatrix.getDataRange();
    let minRow = Infinity;
    let maxRow = -Infinity;
    const selectionColumnIndices = /* @__PURE__ */ new Set();
    for (const selection of selections) {
      minRow = Math.min(minRow, selection.range.startRow);
      maxRow = Math.max(maxRow, selection.range.endRow);
      for (let col = selection.range.startColumn; col <= selection.range.endColumn; col++) {
        selectionColumnIndices.add(col);
      }
    }
    const columnsWithData = /* @__PURE__ */ new Set();
    for (let col = dataRange.startColumn; col <= dataRange.endColumn; col++) {
      if (selectionColumnIndices.has(col)) {
        continue;
      }
      for (let row = minRow; row <= maxRow; row++) {
        const cell = cellMatrix.getValue(row, col);
        if (cell) {
          const value = ((_a = cell.v) == null ? void 0 : _a.toString()) || ((_d = (_c = (_b = cell.p) == null ? void 0 : _b.body) == null ? void 0 : _c.dataStream) == null ? void 0 : _d.trim()) || "";
          if (value) {
            columnsWithData.add(col);
            break;
          }
        }
      }
    }
    const columns = [];
    const sortedCols = Array.from(columnsWithData).sort((a, b) => a - b);
    for (const col of sortedCols) {
      columns.push({
        index: col,
        label: columnIndexToLetter(col)
      });
    }
    return columns;
  }
  getDataColumnsForRanges(unitId, subUnitId, ranges) {
    var _a, _b, _c, _d;
    const workbook = this._univerInstanceService.getUnit(unitId, 2 /* UNIVER_SHEET */);
    if (!workbook) return [];
    const worksheet = workbook.getSheetBySheetId(subUnitId);
    if (!worksheet) return [];
    const cellMatrix = worksheet.getCellMatrix();
    const dataRange = cellMatrix.getDataRange();
    let minRow = Infinity;
    let maxRow = -Infinity;
    const rangeColumnIndices = /* @__PURE__ */ new Set();
    for (const range of ranges) {
      minRow = Math.min(minRow, range.startRow);
      maxRow = Math.max(maxRow, range.endRow);
      for (let col = range.startColumn; col <= range.endColumn; col++) {
        rangeColumnIndices.add(col);
      }
    }
    const columnsWithData = /* @__PURE__ */ new Set();
    for (let col = dataRange.startColumn; col <= dataRange.endColumn; col++) {
      if (rangeColumnIndices.has(col)) {
        continue;
      }
      for (let row = minRow; row <= maxRow; row++) {
        const cell = cellMatrix.getValue(row, col);
        if (cell) {
          const value = ((_a = cell.v) == null ? void 0 : _a.toString()) || ((_d = (_c = (_b = cell.p) == null ? void 0 : _b.body) == null ? void 0 : _c.dataStream) == null ? void 0 : _d.trim()) || "";
          if (value) {
            columnsWithData.add(col);
            break;
          }
        }
      }
    }
    const columns = [];
    const sortedCols = Array.from(columnsWithData).sort((a, b) => a - b);
    for (const col of sortedCols) {
      columns.push({
        index: col,
        label: columnIndexToLetter(col)
      });
    }
    return columns;
  }
  getSelectionRangeNotation() {
    const selections = this._selectionService.getCurrentSelections();
    if (!selections || selections.length === 0) return "";
    return selections.map((s) => rangeToA1Notation(s.range)).join(", ");
  }
  getSelectionRowRange() {
    const selections = this._selectionService.getCurrentSelections();
    if (!selections || selections.length === 0) return null;
    let minRow = Infinity;
    let maxRow = -Infinity;
    for (const selection of selections) {
      minRow = Math.min(minRow, selection.range.startRow);
      maxRow = Math.max(maxRow, selection.range.endRow);
    }
    return { startRow: minRow, endRow: maxRow };
  }
  getSelectionColumnIndices() {
    const selections = this._selectionService.getCurrentSelections();
    if (!selections || selections.length === 0) return /* @__PURE__ */ new Set();
    const columnIndices = /* @__PURE__ */ new Set();
    for (const selection of selections) {
      for (let col = selection.range.startColumn; col <= selection.range.endColumn; col++) {
        columnIndices.add(col);
      }
    }
    return columnIndices;
  }
  generateFileName(imageInfo, config) {
    var _a, _b, _c, _d;
    const workbook = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
    const extension = getFileExtension(imageInfo.source, imageInfo.imageSourceType);
    const parts = [];
    for (const part of config.fileNameParts) {
      if (part === "cellAddress" /* CELL_ADDRESS */) {
        parts.push(imageInfo.cellAddress);
      } else if (part === "columnValue" /* COLUMN_VALUE */ && config.columnIndex !== void 0) {
        const worksheet = workbook == null ? void 0 : workbook.getActiveSheet();
        if (worksheet) {
          const cellMatrix = worksheet.getCellMatrix();
          const cell = cellMatrix.getValue(imageInfo.row, config.columnIndex);
          if (cell) {
            const value = ((_a = cell.v) == null ? void 0 : _a.toString()) || ((_d = (_c = (_b = cell.p) == null ? void 0 : _b.body) == null ? void 0 : _c.dataStream) == null ? void 0 : _d.trim()) || "";
            if (value) {
              const sanitized = value.replace(/[<>:"/\\|?*]/g, "_").trim();
              if (sanitized) {
                parts.push(sanitized);
              }
            }
          }
        }
      }
    }
    if (parts.length === 0) {
      return `${imageInfo.cellAddress}.${extension}`;
    }
    return `${parts.join("_")}.${extension}`;
  }
  generateFileNameWithContext(imageInfo, config, unitId, subUnitId) {
    var _a, _b, _c, _d;
    const workbook = this._univerInstanceService.getUnit(unitId, 2 /* UNIVER_SHEET */);
    const extension = getFileExtension(imageInfo.source, imageInfo.imageSourceType);
    const parts = [];
    for (const part of config.fileNameParts) {
      if (part === "cellAddress" /* CELL_ADDRESS */) {
        parts.push(imageInfo.cellAddress);
      } else if (part === "columnValue" /* COLUMN_VALUE */ && config.columnIndex !== void 0) {
        const worksheet = workbook == null ? void 0 : workbook.getSheetBySheetId(subUnitId);
        if (worksheet) {
          const cellMatrix = worksheet.getCellMatrix();
          const cell = cellMatrix.getValue(imageInfo.row, config.columnIndex);
          if (cell) {
            const value = ((_a = cell.v) == null ? void 0 : _a.toString()) || ((_d = (_c = (_b = cell.p) == null ? void 0 : _b.body) == null ? void 0 : _c.dataStream) == null ? void 0 : _d.trim()) || "";
            if (value) {
              const sanitized = value.replace(/[<>:"/\\|?*]/g, "_").trim();
              if (sanitized) {
                parts.push(sanitized);
              }
            }
          }
        }
      }
    }
    if (parts.length === 0) {
      return `${imageInfo.cellAddress}.${extension}`;
    }
    return `${parts.join("_")}.${extension}`;
  }
  async saveImages(images, config) {
    var _a;
    const dirHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    const fileNameCounts = /* @__PURE__ */ new Map();
    for (const imageInfo of images) {
      let fileName = this.generateFileName(imageInfo, config);
      const baseName = fileName.replace(/\.\w+$/, "");
      const ext = ((_a = fileName.match(/\.\w+$/)) == null ? void 0 : _a[0]) || ".png";
      const count = fileNameCounts.get(baseName) || 0;
      if (count > 0) {
        fileName = `${baseName}_${count}${ext}`;
      }
      fileNameCounts.set(baseName, count + 1);
      try {
        const blob = await this._getImageBlob(imageInfo);
        const fileHandle = await dirHandle.getFileHandle(fileName, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(blob);
        await writable.close();
      } catch (error) {
        console.error(`Failed to save image ${fileName}:`, error);
        throw error;
      }
    }
  }
  async saveImagesWithContext(images, config, unitId, subUnitId) {
    var _a;
    const dirHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    const fileNameCounts = /* @__PURE__ */ new Map();
    for (const imageInfo of images) {
      let fileName = this.generateFileNameWithContext(imageInfo, config, unitId, subUnitId);
      const baseName = fileName.replace(/\.\w+$/, "");
      const ext = ((_a = fileName.match(/\.\w+$/)) == null ? void 0 : _a[0]) || ".png";
      const count = fileNameCounts.get(baseName) || 0;
      if (count > 0) {
        fileName = `${baseName}_${count}${ext}`;
      }
      fileNameCounts.set(baseName, count + 1);
      try {
        const blob = await this._getImageBlob(imageInfo);
        const fileHandle = await dirHandle.getFileHandle(fileName, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(blob);
        await writable.close();
      } catch (error) {
        console.error(`Failed to save image ${fileName}:`, error);
        throw error;
      }
    }
  }
  async downloadSingleImage(imageInfo) {
    const extension = getFileExtension(imageInfo.source, imageInfo.imageSourceType);
    const fileName = `${imageInfo.cellAddress}.${extension}`;
    try {
      const blob = await this._getImageBlob(imageInfo);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`Failed to download image ${fileName}:`, error);
      throw error;
    }
  }
  async _getImageBlob(imageInfo) {
    if (imageInfo.imageSourceType === "UUID" /* UUID */) {
      const imageUrl = await this._imageIoService.getImage(imageInfo.source);
      return imageSourceToBlob(imageUrl, "URL" /* URL */);
    }
    if (imageInfo.imageSourceType === "URL" /* URL */) {
      return this._urlImageService.downloadImage(imageInfo.source);
    }
    return imageSourceToBlob(imageInfo.source, imageInfo.imageSourceType);
  }
};
BatchSaveImagesService = __decorateClass([
  __decorateParam(0, IUniverInstanceService),
  __decorateParam(1, Inject(SheetsSelectionsService)),
  __decorateParam(2, IImageIoService),
  __decorateParam(3, IURLImageService)
], BatchSaveImagesService);

// ../packages/sheets-drawing-ui/src/views/batch-save-images/component-name.ts
var BATCH_SAVE_IMAGES_DIALOG_ID = "sheet.dialog.batch-save-images";

// ../packages/sheets-drawing-ui/src/commands/commands/save-cell-images.command.ts
var SaveCellImagesCommand = {
  id: "sheet.command.save-cell-images",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const dialogService = accessor.get(IDialogService);
    const batchSaveService = accessor.get(IBatchSaveImagesService);
    const images = batchSaveService.getCellImagesInSelection();
    if (images.length === 1) {
      try {
        await batchSaveService.downloadSingleImage(images[0]);
        return true;
      } catch (error) {
        console.error("Failed to download image:", error);
        return false;
      }
    }
    const localeService = accessor.get(LocaleService);
    const selectionRange = batchSaveService.getSelectionRangeNotation();
    const titleText = `${localeService.t("sheets-drawing-ui.save.title")} (${selectionRange})`;
    dialogService.open({
      id: BATCH_SAVE_IMAGES_DIALOG_ID,
      draggable: true,
      width: 360,
      title: { title: titleText },
      children: {
        label: BATCH_SAVE_IMAGES_DIALOG_ID
      },
      destroyOnClose: true,
      preservePositionOnDestroy: true,
      onClose: () => dialogService.close(BATCH_SAVE_IMAGES_DIALOG_ID)
    });
    return true;
  }
};

// ../packages/sheets-drawing-ui/src/views/sheet-image-panel/component-name.ts
var COMPONENT_SHEET_DRAWING_PANEL = "COMPONENT_SHEET_DRAWING_PANEL";

// ../packages/sheets-drawing-ui/src/commands/operations/open-drawing-panel.operation.ts
var SidebarSheetDrawingOperation = {
  id: "sidebar.operation.sheet-image",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const sidebarService = accessor.get(ISidebarService);
    const localeService = accessor.get(LocaleService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const commandService = accessor.get(ICommandService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    switch (params.value) {
      case "open":
        sidebarService.open({
          header: { title: localeService.t("sheets-drawing-ui.panel.title") },
          children: { label: COMPONENT_SHEET_DRAWING_PANEL },
          onClose: () => {
            commandService.syncExecuteCommand(SetDrawingSelectedOperation.id, []);
          },
          width: 360
        });
        break;
      case "close":
      default:
        sidebarService.close();
        break;
    }
    return true;
  }
};

// ../packages/sheets-drawing-ui/src/commands/operations/edit-sheet-drawing.operation.ts
var EditSheetDrawingOperation = {
  id: "sheet.operation.edit-sheet-image",
  type: 1 /* OPERATION */,
  handler: (accessor, params) => {
    const commandService = accessor.get(ICommandService);
    if (params == null) {
      return false;
    }
    commandService.syncExecuteCommand(SetDrawingSelectedOperation.id, [params]);
    commandService.executeCommand(SidebarSheetDrawingOperation.id, { value: "open" });
    return true;
  }
};

// ../packages/sheets-drawing-ui/src/menu/image.menu.ts
var SHEETS_IMAGE_MENU_ID = "sheet.menu.image";
function ImageMenuFactory(accessor) {
  return {
    id: SHEETS_IMAGE_MENU_ID,
    type: 3 /* SUBITEMS */,
    icon: "AddImageIcon",
    tooltip: "sheets-drawing-ui.title",
    hidden$: getMenuHiddenObservable(accessor, 2 /* UNIVER_SHEET */),
    disabled$: getCurrentRangeDisable$(accessor, { workbookTypes: [WorkbookEditablePermission], worksheetTypes: [WorksheetEditPermission], rangeTypes: [RangeProtectionPermissionEditPoint] })
  };
}
function UploadFloatImageMenuFactory(_accessor) {
  return {
    id: InsertFloatImageCommand.id,
    title: "sheets-drawing-ui.upload.float",
    type: 0 /* BUTTON */,
    hidden$: getMenuHiddenObservable(_accessor, 2 /* UNIVER_SHEET */)
  };
}
function UploadCellImageMenuFactory(_accessor) {
  return {
    id: InsertCellImageCommand.id,
    title: "sheets-drawing-ui.upload.cell",
    type: 0 /* BUTTON */,
    hidden$: getMenuHiddenObservable(_accessor, 2 /* UNIVER_SHEET */)
  };
}

// ../packages/sheets-drawing-ui/src/menu/save-images.menu.ts
function cellHasImage2(cell) {
  var _a, _b, _c, _d;
  return !!(((_b = (_a = cell == null ? void 0 : cell.p) == null ? void 0 : _a.drawingsOrder) == null ? void 0 : _b.length) && ((_d = (_c = cell == null ? void 0 : cell.p) == null ? void 0 : _c.drawingsOrder) == null ? void 0 : _d.length) > 0);
}
function selectionHasImages(workbook, selection) {
  const worksheet = workbook.getActiveSheet();
  if (!worksheet) return false;
  const cellMatrix = worksheet.getCellMatrix();
  const { startRow, endRow, startColumn, endColumn } = selection;
  for (let row = startRow; row <= endRow; row++) {
    for (let col = startColumn; col <= endColumn; col++) {
      const cell = cellMatrix.getValue(row, col);
      if (cellHasImage2(cell)) {
        return true;
      }
    }
  }
  return false;
}
function isFileSystemAccessSupported() {
  return "showDirectoryPicker" in window;
}
function SaveCellImagesMenuFactory(accessor) {
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const selectionService = accessor.get(SheetsSelectionsService);
  const hidden$ = combineLatest([
    getMenuHiddenObservable(accessor, 2 /* UNIVER_SHEET */),
    univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */).pipe(
      switchMap((workbook) => {
        if (!workbook) return of(true);
        return selectionService.selectionMoveEnd$.pipe(
          map(() => {
            if (!isFileSystemAccessSupported()) {
              return true;
            }
            const selections = selectionService.getCurrentSelections();
            if (!selections || selections.length === 0) {
              return true;
            }
            for (const selection of selections) {
              if (selectionHasImages(workbook, selection.range)) {
                return false;
              }
            }
            return true;
          })
        );
      })
    )
  ]).pipe(
    map(([hidden, noImages]) => hidden || noImages)
  );
  return {
    id: SaveCellImagesCommand.id,
    type: 0 /* BUTTON */,
    icon: "DownloadImageIcon",
    title: "sheets-drawing-ui.save.menuLabel",
    hidden$
  };
}

// ../packages/sheets-drawing-ui/src/menu/schema.ts
var menuSchema2 = {
  ["ribbon.insert.media" /* MEDIA */]: {
    [SHEETS_IMAGE_MENU_ID]: {
      order: 0,
      menuItemFactory: ImageMenuFactory,
      [InsertFloatImageCommand.id]: {
        order: 0,
        menuItemFactory: UploadFloatImageMenuFactory
      },
      [InsertCellImageCommand.id]: {
        order: 1,
        menuItemFactory: UploadCellImageMenuFactory
      }
    }
  },
  ["contextMenu.mainArea" /* MAIN_AREA */]: {
    ["contextMenu.others" /* OTHERS */]: {
      [SaveCellImagesCommand.id]: {
        order: 10,
        menuItemFactory: SaveCellImagesMenuFactory
      }
    }
  },
  ["contextMenu.colHeader" /* COL_HEADER */]: {
    ["contextMenu.others" /* OTHERS */]: {
      [SaveCellImagesCommand.id]: {
        order: 10,
        menuItemFactory: SaveCellImagesMenuFactory
      }
    }
  },
  ["contextMenu.rowHeader" /* ROW_HEADER */]: {
    ["contextMenu.others" /* OTHERS */]: {
      [SaveCellImagesCommand.id]: {
        order: 10,
        menuItemFactory: SaveCellImagesMenuFactory
      }
    }
  }
};

// ../packages/sheets-drawing-ui/src/views/batch-save-images/BatchSaveImagesDialog.tsx
var import_react9 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
function BatchSaveImagesDialog() {
  const localeService = useDependency(LocaleService);
  const dialogService = useDependency(IDialogService);
  const batchSaveService = useDependency(IBatchSaveImagesService);
  const [fileNameParts, setFileNameParts] = (0, import_react9.useState)(["cellAddress" /* CELL_ADDRESS */]);
  const [saving, setSaving] = (0, import_react9.useState)(false);
  const [error, setError] = (0, import_react9.useState)(null);
  const images = (0, import_react9.useMemo)(() => batchSaveService.getCellImagesInSelection(), [batchSaveService]);
  const dataColumns = (0, import_react9.useMemo)(() => batchSaveService.getDataColumns(), [batchSaveService]);
  const rowRange = (0, import_react9.useMemo)(() => batchSaveService.getSelectionRowRange(), [batchSaveService]);
  const hasAvailableColumns = dataColumns.length > 0;
  const columnOptions = (0, import_react9.useMemo)(() => {
    return dataColumns.map((col) => ({
      label: col.label,
      value: String(col.index)
    }));
  }, [dataColumns]);
  const [selectedColumn, setSelectedColumn] = (0, import_react9.useState)(
    () => columnOptions.length > 0 ? columnOptions[0].value : "0"
  );
  const highlightRanges = (0, import_react9.useMemo)(() => {
    const showColumnSelect2 = fileNameParts.includes("columnValue" /* COLUMN_VALUE */);
    if (!showColumnSelect2 || !rowRange) {
      return [];
    }
    const colIndex = Number(selectedColumn);
    return [{
      startRow: rowRange.startRow,
      endRow: rowRange.endRow,
      startColumn: colIndex,
      endColumn: colIndex
    }];
  }, [fileNameParts, selectedColumn, rowRange]);
  useHighlightRange(highlightRanges);
  const handleFileNamePartsChange = (0, import_react9.useCallback)((value) => {
    if (value.length === 0) {
      return;
    }
    setFileNameParts(value);
  }, []);
  const handleColumnChange = (0, import_react9.useCallback)((value) => {
    setSelectedColumn(String(value));
  }, []);
  const handleCancel = (0, import_react9.useCallback)(() => {
    dialogService.close(BATCH_SAVE_IMAGES_DIALOG_ID);
  }, [dialogService]);
  const handleConfirm = (0, import_react9.useCallback)(async () => {
    if (images.length === 0) {
      return;
    }
    setSaving(true);
    setError(null);
    try {
      await batchSaveService.saveImages(images, {
        fileNameParts,
        columnIndex: fileNameParts.includes("columnValue" /* COLUMN_VALUE */) ? Number(selectedColumn) : void 0
      });
      dialogService.close(BATCH_SAVE_IMAGES_DIALOG_ID);
    } catch (err) {
      console.error("Failed to save images:", err);
      setError(localeService.t("sheets-drawing-ui.save.error"));
    } finally {
      setSaving(false);
    }
  }, [batchSaveService, images, fileNameParts, selectedColumn, dialogService, localeService]);
  const showColumnSelect = fileNameParts.includes("columnValue" /* COLUMN_VALUE */);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "univer-flex univer-flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FormLayout, { label: localeService.t("sheets-drawing-ui.save.imageCount"), children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "univer-text-sm univer-text-gray-600", children: images.length }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FormLayout, { label: localeService.t("sheets-drawing-ui.save.fileNameConfig"), children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(CheckboxGroup, { value: fileNameParts, onChange: handleFileNamePartsChange, direction: "vertical", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Checkbox, { value: "cellAddress" /* CELL_ADDRESS */, disabled: !hasAvailableColumns, children: localeService.t("sheets-drawing-ui.save.useRowCol") }),
      hasAvailableColumns && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Checkbox, { value: "columnValue" /* COLUMN_VALUE */, children: localeService.t("sheets-drawing-ui.save.useColumnValue") })
    ] }) }),
    showColumnSelect && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FormLayout, { label: localeService.t("sheets-drawing-ui.save.selectColumn"), children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Select,
      {
        value: selectedColumn,
        options: columnOptions,
        onChange: handleColumnChange
      }
    ) }),
    error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "univer-text-xs univer-text-red-500", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        className: `univer-flex univer-justify-end univer-gap-2 univer-border-t univer-border-gray-200 univer-pt-3`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, { onClick: handleCancel, disabled: saving, children: localeService.t("sheets-drawing-ui.save.cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Button,
            {
              variant: "primary",
              onClick: handleConfirm,
              disabled: saving || images.length === 0,
              children: saving ? localeService.t("sheets-drawing-ui.save.saving") : localeService.t("sheets-drawing-ui.save.confirm")
            }
          )
        ]
      }
    )
  ] });
}

// ../packages/sheets-drawing-ui/src/views/sheet-image-panel/SheetDrawingPanel.tsx
var import_react11 = __toESM(require_react());

// ../packages/sheets-drawing-ui/src/views/sheet-image-panel/SheetDrawingAnchor.tsx
var import_react10 = __toESM(require_react());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var SheetDrawingAnchor = (props) => {
  var _a;
  const commandService = useDependency(ICommandService);
  const localeService = useDependency(LocaleService);
  const drawingManagerService = useDependency(IDrawingManagerService);
  const renderManagerService = useDependency(IRenderManagerService);
  const { drawings } = props;
  const drawingParam = drawings[0];
  if (drawingParam == null) {
    return;
  }
  const { unitId } = drawingParam;
  const renderObject = renderManagerService.getRenderById(unitId);
  const scene = renderObject == null ? void 0 : renderObject.scene;
  if (scene == null) {
    return;
  }
  const transformer = scene.getTransformerByCreate();
  const [anchorShow, setAnchorShow] = (0, import_react10.useState)(true);
  const type = (_a = drawingParam.anchorType) != null ? _a : "0" /* Position */;
  const [value, setValue] = (0, import_react10.useState)(type);
  function getUpdateParams2(objects, drawingManagerService2) {
    const params = [];
    objects.forEach((object) => {
      const { oKey } = object;
      const searchParam = drawingManagerService2.getDrawingOKey(oKey);
      if (searchParam == null) {
        params.push(null);
        return true;
      }
      const { unitId: unitId2, subUnitId, drawingId, drawingType, anchorType, sheetTransform, axisAlignSheetTransform } = searchParam;
      params.push({
        unitId: unitId2,
        subUnitId,
        drawingId,
        anchorType,
        sheetTransform,
        drawingType,
        axisAlignSheetTransform
      });
    });
    return params;
  }
  (0, import_react10.useEffect)(() => {
    const onClearControlObserver = transformer.clearControl$.subscribe((changeSelf) => {
      if (changeSelf === true) {
        setAnchorShow(false);
      }
    });
    const onChangeStartObserver = transformer.changeStart$.subscribe((state) => {
      var _a2;
      const { objects } = state;
      const params = getUpdateParams2(objects, drawingManagerService);
      if (params.length === 0) {
        setAnchorShow(false);
      } else if (params.length >= 1) {
        setAnchorShow(true);
        const anchorType = ((_a2 = params[0]) == null ? void 0 : _a2.anchorType) || "0" /* Position */;
        setValue(anchorType);
      }
    });
    return () => {
      onChangeStartObserver.unsubscribe();
      onClearControlObserver.unsubscribe();
    };
  }, []);
  function handleChange(value2) {
    setValue(value2);
    const focusDrawings = drawingManagerService.getFocusDrawings();
    if (focusDrawings.length === 0) {
      return;
    }
    const updateParams = focusDrawings.map((drawing) => {
      return {
        unitId: drawing.unitId,
        subUnitId: drawing.subUnitId,
        drawingId: drawing.drawingId,
        anchorType: value2
      };
    });
    commandService.executeCommand(SetSheetDrawingCommand.id, {
      unitId: focusDrawings[0].unitId,
      drawings: updateParams
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: clsx("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !anchorShow
      }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "header",
          {
            className: `univer-text-gray-600 dark:!univer-text-gray-200`,
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: localeService.t("sheets-drawing-ui.drawing-anchor.title") })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(RadioGroup, { value, onChange: handleChange, direction: "vertical", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Radio, { value: "1" /* Both */, children: localeService.t("sheets-drawing-ui.drawing-anchor.both") }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Radio, { value: "0" /* Position */, children: localeService.t("sheets-drawing-ui.drawing-anchor.position") }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Radio, { value: "2" /* None */, children: localeService.t("sheets-drawing-ui.drawing-anchor.none") })
        ] }) })
      ]
    }
  );
};

// ../packages/sheets-drawing-ui/src/views/sheet-image-panel/SheetDrawingPanel.tsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var SheetDrawingPanel = () => {
  const drawingManagerService = useDependency(IDrawingManagerService);
  const focusDrawings = drawingManagerService.getFocusDrawings();
  const [drawings, setDrawings] = (0, import_react11.useState)(focusDrawings);
  (0, import_react11.useEffect)(() => {
    const focusDispose = drawingManagerService.focus$.subscribe((drawings2) => {
      setDrawings(drawings2);
    });
    return () => {
      focusDispose.unsubscribe();
    };
  }, []);
  return !!(drawings == null ? void 0 : drawings.length) && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "univer-text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DrawingCommonPanel, { drawings }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetDrawingAnchor, { drawings })
  ] });
};

// ../packages/sheets-drawing-ui/src/controllers/shortcuts/drawing.shortcut.ts
function whenSheetDrawingFocused(contextService) {
  return contextService.getContextValue(FOCUSING_SHEET) && !contextService.getContextValue(FOCUSING_FX_BAR_EDITOR) && !contextService.getContextValue(FOCUSING_PANEL_EDITOR) && contextService.getContextValue(FOCUSING_COMMON_DRAWINGS) && !contextService.getContextValue(FOCUSING_SHAPE_TEXT_EDITOR);
}
var MoveDrawingDownShortcutItem = {
  id: MoveDrawingsCommand.id,
  description: "sheets-drawing-ui.shortcut.drawing-move-down",
  group: "4_drawing-view",
  groupTitle: "sheets-drawing-ui.shortcut.drawing-view",
  binding: 40 /* ARROW_DOWN */,
  priority: 100,
  preconditions: whenSheetDrawingFocused,
  staticParameters: {
    direction: 2 /* DOWN */
  }
};
var MoveDrawingUpShortcutItem = {
  id: MoveDrawingsCommand.id,
  description: "sheets-drawing-ui.shortcut.drawing-move-up",
  group: "4_drawing-view",
  groupTitle: "sheets-drawing-ui.shortcut.drawing-view",
  binding: 38 /* ARROW_UP */,
  priority: 100,
  preconditions: whenSheetDrawingFocused,
  staticParameters: {
    direction: 0 /* UP */
  }
};
var MoveDrawingLeftShortcutItem = {
  id: MoveDrawingsCommand.id,
  description: "sheets-drawing-ui.shortcut.drawing-move-left",
  group: "4_drawing-view",
  groupTitle: "sheets-drawing-ui.shortcut.drawing-view",
  binding: 37 /* ARROW_LEFT */,
  priority: 100,
  preconditions: whenSheetDrawingFocused,
  staticParameters: {
    direction: 3 /* LEFT */
  }
};
var MoveDrawingRightShortcutItem = {
  id: MoveDrawingsCommand.id,
  description: "sheets-drawing-ui.shortcut.drawing-move-right",
  group: "4_drawing-view",
  groupTitle: "sheets-drawing-ui.shortcut.drawing-view",
  binding: 39 /* ARROW_RIGHT */,
  priority: 100,
  preconditions: whenSheetDrawingFocused,
  staticParameters: {
    direction: 1 /* RIGHT */
  }
};
var DeleteDrawingsShortcutItem = {
  id: DeleteDrawingsCommand.id,
  description: "sheets-drawing-ui.shortcut.drawing-delete",
  group: "4_drawing-view",
  groupTitle: "sheets-drawing-ui.shortcut.drawing-view",
  priority: 100,
  // when focusing on any other input tag do not trigger this shortcut
  preconditions: whenSheetDrawingFocused,
  binding: 46 /* DELETE */,
  mac: 8 /* BACKSPACE */
};

// ../packages/sheets-drawing-ui/src/controllers/sheet-drawing.controller.ts
var SheetDrawingUIController = class extends Disposable {
  constructor(_componentManager, _menuManagerService, _commandService, _shortcutService) {
    super();
    __publicField(this, "_componentManager", _componentManager);
    __publicField(this, "_menuManagerService", _menuManagerService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_shortcutService", _shortcutService);
    this._init();
  }
  _initCustomComponents() {
    const componentManager = this._componentManager;
    this.disposeWithMe(componentManager.register(COMPONENT_SHEET_DRAWING_PANEL, SheetDrawingPanel));
    this.disposeWithMe(componentManager.register(BATCH_SAVE_IMAGES_DIALOG_ID, BatchSaveImagesDialog));
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema2);
  }
  _initCommands() {
    [
      InsertFloatImageCommand,
      InsertCellImageCommand,
      SidebarSheetDrawingOperation,
      EditSheetDrawingOperation,
      GroupSheetDrawingCommand,
      UngroupSheetDrawingCommand,
      MoveDrawingsCommand,
      DeleteDrawingsCommand,
      SaveCellImagesCommand,
      FlipSheetDrawingCommand
    ].forEach((command) => this.disposeWithMe(this._commandService.registerCommand(command)));
  }
  _initShortcuts() {
    [
      // sheet drawing shortcuts
      MoveDrawingDownShortcutItem,
      MoveDrawingUpShortcutItem,
      MoveDrawingLeftShortcutItem,
      MoveDrawingRightShortcutItem,
      DeleteDrawingsShortcutItem
    ].forEach((item) => {
      this.disposeWithMe(this._shortcutService.registerShortcut(item));
    });
  }
  _init() {
    this._initCommands();
    this._initCustomComponents();
    this._initMenus();
    this._initShortcuts();
  }
};
SheetDrawingUIController = __decorateClass([
  __decorateParam(0, Inject(ComponentManager)),
  __decorateParam(1, IMenuManagerService),
  __decorateParam(2, ICommandService),
  __decorateParam(3, IShortcutService)
], SheetDrawingUIController);

// ../packages/sheets-drawing-ui/src/menu/drawing-popup-menu.controller.ts
var DrawingPopupMenuController = class extends RxDisposable {
  constructor(_injector, _localeService, _drawingManagerService, _canvasPopManagerService, _renderManagerService, _univerInstanceService, _messageService, _contextService, _ioService, _commandService) {
    super();
    __publicField(this, "_injector", _injector);
    __publicField(this, "_localeService", _localeService);
    __publicField(this, "_drawingManagerService", _drawingManagerService);
    __publicField(this, "_canvasPopManagerService", _canvasPopManagerService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_messageService", _messageService);
    __publicField(this, "_contextService", _contextService);
    __publicField(this, "_ioService", _ioService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_initImagePopupMenu", /* @__PURE__ */ new Set());
    this._init();
  }
  _init() {
    this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */).subscribe((workbook) => this._create(workbook));
    this._univerInstanceService.getTypeOfUnitDisposed$(2 /* UNIVER_SHEET */).subscribe((workbook) => this._dispose(workbook));
    this._univerInstanceService.getAllUnitsForType(2 /* UNIVER_SHEET */).forEach((workbook) => this._create(workbook));
    this._setupLoadingStatus();
  }
  _setupLoadingStatus() {
    const MESSAGE_ID = "image-upload-loading";
    let messageDisposable;
    this.disposeWithMe(this._ioService.change$.subscribe((status) => {
      if (status > 0 && !messageDisposable) {
        messageDisposable = this._messageService.show({
          id: MESSAGE_ID,
          type: "loading" /* Loading */,
          content: `${this._localeService.t("sheets-ui.uploadLoading.loading")}: ${status}`,
          duration: 0
        });
      } else if (status === 0) {
        messageDisposable == null ? void 0 : messageDisposable.dispose();
        messageDisposable = void 0;
      }
    }));
  }
  _dispose(workbook) {
    super.dispose();
    const unitId = workbook.getUnitId();
    this._renderManagerService.removeRender(unitId);
    this._initImagePopupMenu.delete(unitId);
  }
  _create(workbook) {
    if (!workbook) {
      return;
    }
    const unitId = workbook.getUnitId();
    if (this._renderManagerService.has(unitId) && !this._initImagePopupMenu.has(unitId)) {
      this._popupMenuListener(unitId);
      this._initImagePopupMenu.add(unitId);
    }
  }
  _hasCropObject(scene) {
    const objects = scene.getAllObjectsByOrder();
    for (const object of objects) {
      if (object instanceof ImageCropperObject) {
        return true;
      }
    }
    return false;
  }
  _popupMenuListener(unitId) {
    var _a;
    const scene = (_a = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.scene;
    if (!scene) {
      return;
    }
    const transformer = scene.getTransformerByCreate();
    if (!transformer) {
      return;
    }
    let singletonPopupDisposer;
    this.disposeWithMe(
      transformer.createControl$.subscribe(() => {
        this._contextService.setContextValue(FOCUSING_COMMON_DRAWINGS, true);
        if (this._hasCropObject(scene)) {
          return;
        }
        const selectedObjects = transformer.getSelectedObjectMap();
        if (selectedObjects.size > 1) {
          singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
          return;
        }
        const object = selectedObjects.values().next().value;
        if (!object) {
          return;
        }
        const oKey = object.oKey;
        const drawingParam = this._drawingManagerService.getDrawingOKey(oKey);
        if (!drawingParam || drawingParam.drawingType === 1 /* DRAWING_SHAPE */) {
          return;
        }
        const { unitId: unitId2, subUnitId, drawingId, drawingType } = drawingParam;
        const data = drawingParam.data;
        if (data && data.disablePopup) {
          return;
        }
        singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
        const menus = this._canvasPopManagerService.getFeatureMenu(unitId2, subUnitId, drawingId, drawingType);
        singletonPopupDisposer = this.disposeWithMe(this._canvasPopManagerService.attachPopupToObject(object, {
          componentKey: COMPONENT_IMAGE_POPUP_MENU,
          direction: "horizontal",
          offset: [2, 0],
          extraProps: {
            menuItems: menus || this._getImageMenuItems(unitId2, subUnitId, drawingId, drawingType)
          }
        }));
      })
    );
    this.disposeWithMe(
      transformer.clearControl$.subscribe(() => {
        singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
        this._contextService.setContextValue(FOCUSING_COMMON_DRAWINGS, false);
        this._commandService.syncExecuteCommand(SetDrawingSelectedOperation.id, []);
      })
    );
    this.disposeWithMe(
      this._contextService.contextChanged$.subscribe((event) => {
        if (event[FOCUSING_COMMON_DRAWINGS] === false) {
          singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
        }
      })
    );
    this.disposeWithMe(
      transformer.changing$.subscribe(() => {
        singletonPopupDisposer == null ? void 0 : singletonPopupDisposer.dispose();
      })
    );
  }
  _getImageMenuItems(unitId, subUnitId, drawingId, drawingType) {
    return [
      {
        label: "sheets-drawing-ui.image-popup.edit",
        index: 0,
        commandId: EditSheetDrawingOperation.id,
        commandParams: { unitId, subUnitId, drawingId },
        disable: drawingType === 8 /* DRAWING_DOM */
      },
      {
        label: "sheets-drawing-ui.image-popup.delete",
        index: 1,
        commandId: RemoveSheetDrawingCommand.id,
        commandParams: { unitId, drawings: [{ unitId, subUnitId, drawingId }] },
        disable: false
      },
      {
        label: "sheets-drawing-ui.image-popup.crop",
        index: 2,
        commandId: OpenImageCropOperation.id,
        commandParams: { unitId, subUnitId, drawingId },
        disable: drawingType === 8 /* DRAWING_DOM */
      },
      {
        label: "sheets-drawing-ui.image-popup.flipH",
        index: 2,
        commandId: FlipSheetDrawingCommand.id,
        commandParams: { unitId, flipH: true, drawings: [{ unitId, subUnitId, drawingId }] },
        disable: drawingType === 8 /* DRAWING_DOM */
      },
      {
        label: "sheets-drawing-ui.image-popup.flipV",
        index: 2,
        commandId: FlipSheetDrawingCommand.id,
        commandParams: { unitId, flipV: true, drawings: [{ unitId, subUnitId, drawingId }] },
        disable: drawingType === 8 /* DRAWING_DOM */
      },
      {
        label: "sheets-drawing-ui.image-popup.reset",
        index: 3,
        commandId: ImageResetSizeOperation.id,
        commandParams: [{ unitId, subUnitId, drawingId }],
        disable: drawingType === 8 /* DRAWING_DOM */
      }
    ];
  }
};
DrawingPopupMenuController = __decorateClass([
  __decorateParam(0, Inject(Injector)),
  __decorateParam(1, Inject(LocaleService)),
  __decorateParam(2, IDrawingManagerService),
  __decorateParam(3, Inject(SheetCanvasPopManagerService)),
  __decorateParam(4, IRenderManagerService),
  __decorateParam(5, IUniverInstanceService),
  __decorateParam(6, IMessageService),
  __decorateParam(7, IContextService),
  __decorateParam(8, IImageIoService),
  __decorateParam(9, ICommandService)
], DrawingPopupMenuController);

// ../packages/sheets-drawing-ui/src/plugin.ts
var UniverSheetsDrawingUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig4, _injector, _renderManagerService, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_configService", _configService);
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig4,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(SHEETS_DRAWING_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    registerDependencies(this._injector, [
      [SheetCanvasFloatDomManagerService],
      [SheetDrawingUIController],
      [DrawingPopupMenuController],
      [SheetDrawingPrintingController],
      [SheetDrawingPermissionController],
      [SheetsDrawingCopyPasteController],
      [SheetsDrawingGroupCopyPasteController],
      [SheetCellImageController],
      [SheetCellImageAutofillController],
      [SheetCellImageCopyPasteController],
      [IBatchSaveImagesService, { useClass: BatchSaveImagesService }],
      [DrawingContextMenuController]
    ]);
    touchDependencies(this._injector, [
      [SheetCanvasFloatDomManagerService]
    ]);
  }
  onReady() {
    touchDependencies(this._injector, [
      [SheetsDrawingCopyPasteController],
      [SheetCellImageCopyPasteController],
      [SheetsDrawingGroupCopyPasteController]
    ]);
  }
  onRendered() {
    this._registerRenderModules();
    touchDependencies(this._injector, [
      [SheetDrawingPermissionController],
      [SheetDrawingPrintingController],
      [SheetDrawingUIController],
      [SheetCellImageController],
      [SheetCellImageAutofillController]
    ]);
  }
  onSteady() {
    this._injector.get(DrawingPopupMenuController);
    this._injector.get(DrawingContextMenuController);
  }
  _registerRenderModules() {
    [
      [SheetDrawingUpdateController],
      [SheetDrawingTransformAffectedController],
      [SheetsDrawingRenderController],
      [SheetCellImageHoverRenderController]
    ].forEach((m) => {
      this.disposeWithMe(this._renderManagerService.registerRenderModule(2 /* UNIVER_SHEET */, m));
    });
  }
};
__publicField(UniverSheetsDrawingUIPlugin, "type", 2 /* UNIVER_SHEET */);
__publicField(UniverSheetsDrawingUIPlugin, "pluginName", "SHEET_IMAGE_UI_PLUGIN");
__publicField(UniverSheetsDrawingUIPlugin, "packageName", package_default4.name);
__publicField(UniverSheetsDrawingUIPlugin, "version", package_default4.version);
UniverSheetsDrawingUIPlugin = __decorateClass([
  DependentOn(UniverDrawingPlugin, UniverDocsDrawingPlugin, UniverDrawingUIPlugin, UniverSheetsDrawingPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IConfigService)
], UniverSheetsDrawingUIPlugin);

export {
  IDocDrawingService,
  UniverDocsDrawingPlugin,
  OpenImageCropOperation,
  ImageResetSizeOperation,
  COMPONENT_IMAGE_POPUP_MENU,
  ImageCropperObject,
  DrawingRenderService,
  UniverDrawingUIPlugin,
  DrawingCommonPanel,
  transformToDrawingPosition,
  transformToAxisAlignPosition,
  SheetDrawingAnchorType,
  ISheetDrawingService,
  InsertSheetDrawingCommand,
  RemoveSheetDrawingCommand,
  SetDrawingArrangeCommand,
  SetSheetDrawingCommand,
  UniverSheetsDrawingPlugin,
  SheetDrawingUpdateController,
  IBatchSaveImagesService,
  SheetCanvasFloatDomManagerService,
  UniverSheetsDrawingUIPlugin
};
