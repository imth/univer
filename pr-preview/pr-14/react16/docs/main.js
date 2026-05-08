import {
  UniverDocsMentionUIPlugin
} from "../chunk-WSHYDUY4.js";
import {
  SetActiveCommentOperation,
  ThreadCommentPanel,
  ThreadCommentPanelService,
  UniverThreadCommentUIPlugin
} from "../chunk-PELNZATT.js";
import "../chunk-NFIBSJAD.js";
import {
  UniverDebuggerPlugin
} from "../chunk-AO4K2S34.js";
import {
  InsertDocImageCommand,
  UniverDocsDrawingUIPlugin
} from "../chunk-APHEZZDH.js";
import {
  AddCommentMutation,
  IThreadCommentDataSourceService,
  ThreadCommentModel,
  getDT
} from "../chunk-CB7V3IIA.js";
import "../chunk-75BPAYSL.js";
import {
  UniverDocsDrawingPlugin,
  UniverDrawingUIPlugin
} from "../chunk-OP4JPT24.js";
import {
  FUniver
} from "../chunk-GLLJOGIP.js";
import "../chunk-RHAV7LHU.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-W5OPKFXQ.js";
import {
  BulletListCommand,
  CutContentCommand,
  DOC_INTERCEPTOR_POINT,
  DeleteCommand,
  DeleteLeftCommand,
  DocBackScrollRenderController,
  DocCanvasPopManagerService,
  DocCreateTableOperation,
  DocEventManagerService,
  DocInterceptorService,
  DocRenderController,
  DocSelectionManagerService,
  DocSelectionRenderService,
  DocSkeletonManagerService,
  HorizontalLineCommand,
  IMEInputCommand,
  InsertCommand,
  MoveCursorOperation,
  NodePositionConvertToCursor,
  OrderListCommand,
  RichTextEditingMutation,
  SetTextSelectionsOperation,
  UniverDocsPlugin,
  UniverDocsUIPlugin,
  UniverDrawingPlugin,
  addCustomDecorationBySelectionFactory,
  addCustomRangeBySelectionFactory,
  deleteCustomDecorationFactory,
  deleteCustomRangeFactory,
  getAnchorBounding,
  replaceSelectionFactory,
  whenDocAndEditorFocused
} from "../chunk-H7LC445H.js";
import "../chunk-LI6UXASZ.js";
import {
  Button,
  CommentIcon,
  ComponentManager,
  CopyIcon,
  DividerIcon,
  DownloadIcon,
  FormLayout,
  ILayoutService,
  IMenuManagerService,
  IMessageService,
  IShortcutService,
  ISidebarService,
  IncreaseIcon,
  Input,
  LinkIcon,
  TextIcon,
  Tooltip,
  UniverUIPlugin,
  UnlinkIcon,
  WriteIcon,
  borderBottomClassName,
  borderClassName,
  clsx,
  getMenuHiddenObservable,
  require_jsx_runtime,
  require_react,
  scrollbarClassName,
  useDependency,
  useEvent,
  useObservable
} from "../chunk-W7B5HECI.js";
import {
  zh_CN_default
} from "../chunk-CDZYV7BA.js";
import "../chunk-PVJZH4UA.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-ZCFMLIOH.js";
import {
  IRenderManagerService,
  UniverRenderEnginePlugin,
  ptToPixel,
  withCurrentTypeOfRenderer
} from "../chunk-NCYBCTVB.js";
import {
  BehaviorSubject,
  BuildTextUtils,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DOCS_ZEN_EDITOR_UNIT_ID_KEY,
  DataStreamTreeTokenType,
  DependentOn,
  Disposable,
  DisposableCollection,
  ICommandService,
  IConfigService,
  ILogService,
  IResourceManagerService,
  IUniverInstanceService,
  Inject,
  Injector,
  LocaleService,
  Observable,
  Plugin,
  SHEET_EDITOR_UNITS,
  Tools,
  Univer,
  UserManagerService,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  generateRandomId,
  getBodySlice,
  isInternalEditorID,
  map,
  merge_default,
  of,
  pairwise,
  sequenceExecute,
  tap,
  toDisposable
} from "../chunk-RXFCYNLY.js";
import "../chunk-EQ2B2W73.js";
import {
  __commonJS,
  __decorateClass,
  __decorateParam,
  __publicField,
  __require,
  __toESM
} from "../chunk-24OICD5T.js";

// ../node_modules/.pnpm/jszip@3.10.1/node_modules/jszip/dist/jszip.min.js
var require_jszip_min = __commonJS({
  "../node_modules/.pnpm/jszip@3.10.1/node_modules/jszip/dist/jszip.min.js"(exports2, module) {
    !(function(e) {
      if ("object" == typeof exports2 && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
      }
    })(function() {
      return (function s(a, o, h) {
        function u(r, e2) {
          if (!o[r]) {
            if (!a[r]) {
              var t = "function" == typeof __require && __require;
              if (!e2 && t) return t(r, true);
              if (l) return l(r, true);
              var n = new Error("Cannot find module '" + r + "'");
              throw n.code = "MODULE_NOT_FOUND", n;
            }
            var i = o[r] = { exports: {} };
            a[r][0].call(i.exports, function(e3) {
              var t2 = a[r][1][e3];
              return u(t2 || e3);
            }, i, i.exports, s, a, o, h);
          }
          return o[r].exports;
        }
        for (var l = "function" == typeof __require && __require, e = 0; e < h.length; e++) u(h[e]);
        return u;
      })({ 1: [function(e, t, r) {
        "use strict";
        var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function(e2) {
          for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
          return h.join("");
        }, r.decode = function(e2) {
          var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
          if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
          var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
          return l;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
        "use strict";
        var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
        function o(e2, t2, r2, n2, i2) {
          this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
        }
        o.prototype = { getContentWorker: function() {
          var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
          return e2.on("end", function() {
            if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e2;
        }, getCompressedWorker: function() {
          return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, o.createWorkerFrom = function(e2, t2, r2) {
          return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
        }, t.exports = o;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
        "use strict";
        var n = e("./stream/GenericWorker");
        r.STORE = { magic: "\0\0", compressWorker: function() {
          return new n("STORE compression");
        }, uncompressWorker: function() {
          return new n("STORE decompression");
        } }, r.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
        "use strict";
        var n = e("./utils");
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2) {
          return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, t, r) {
        "use strict";
        r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
      }, {}], 6: [function(e, t, r) {
        "use strict";
        var n = null;
        n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
      }, { lie: 37 }], 7: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
        function h(e2, t2) {
          a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
        }
        r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
          this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
        }, h.prototype.flush = function() {
          a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
        }, h.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this._pako = null;
        }, h.prototype._createPako = function() {
          this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
          var t2 = this;
          this._pako.onData = function(e2) {
            t2.push({ data: e2, meta: t2.meta });
          };
        }, r.compressWorker = function(e2) {
          return new h("Deflate", e2);
        }, r.uncompressWorker = function() {
          return new h("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
        "use strict";
        function A(e2, t2) {
          var r2, n2 = "";
          for (r2 = 0; r2 < t2; r2++) n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
          return n2;
        }
        function n(e2, t2, r2, n2, i2, s2) {
          var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
          var S = 0;
          t2 && (S |= 8), l || !_ && !g || (S |= 2048);
          var z = 0, C = 0;
          w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= (function(e3, t3) {
            var r3 = e3;
            return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
          })(h.unixPermissions, w)) : (C = 20, z |= (function(e3) {
            return 63 & (e3 || 0);
          })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
          var E = "";
          return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n2, 4) + f + b + p };
        }
        var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
        function s(e2, t2, r2, n2) {
          i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        I.inherits(s, i), s.prototype.push = function(e2) {
          var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
          this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
        }, s.prototype.openedSource = function(e2) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
          var t2 = this.streamFiles && !e2.file.dir;
          if (t2) {
            var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: r2.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = true;
        }, s.prototype.closedSource = function(e2) {
          this.accumulate = false;
          var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
            return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
          })(e2), meta: { percent: 100 } });
          else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, s.prototype.flush = function() {
          for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
          var r2 = this.bytesWritten - e2, n2 = (function(e3, t3, r3, n3, i2) {
            var s2 = I.transformTo("string", i2(n3));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
          })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
          this.push({ data: n2, meta: { percent: 100 } });
        }, s.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, s.prototype.registerPrevious = function(e2) {
          this._sources.push(e2);
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
        }, s.prototype.error = function(e2) {
          var t2 = this._sources;
          if (!i.prototype.error.call(this, e2)) return false;
          for (var r2 = 0; r2 < t2.length; r2++) try {
            t2[r2].error(e2);
          } catch (e3) {
          }
          return true;
        }, s.prototype.lock = function() {
          i.prototype.lock.call(this);
          for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
        }, t.exports = s;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
        "use strict";
        var u = e("../compressions"), n = e("./ZipFileWorker");
        r.generateWorker = function(e2, a, t2) {
          var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
          try {
            e2.forEach(function(e3, t3) {
              h++;
              var r2 = (function(e4, t4) {
                var r3 = e4 || t4, n3 = u[r3];
                if (!n3) throw new Error(r3 + " is not a valid compression method !");
                return n3;
              })(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
              t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
            }), o.entriesCount = h;
          } catch (e3) {
            o.error(e3);
          }
          return o;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
        "use strict";
        function n() {
          if (!(this instanceof n)) return new n();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var e2 = new n();
            for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
            return e2;
          };
        }
        (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
          return new n().loadAsync(e2, t2);
        }, n.external = e("./external"), t.exports = n;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
        "use strict";
        var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
        function f(n2) {
          return new i.Promise(function(e2, t2) {
            var r2 = n2.decompressed.getContentWorker().pipe(new a());
            r2.on("error", function(e3) {
              t2(e3);
            }).on("end", function() {
              r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
            }).resume();
          });
        }
        t.exports = function(e2, o) {
          var h = this;
          return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
            var t2 = new s(o);
            return t2.load(e3), t2;
          }).then(function(e3) {
            var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
            if (o.checkCRC32) for (var n2 = 0; n2 < r2.length; n2++) t2.push(f(r2[n2]));
            return i.Promise.all(t2);
          }).then(function(e3) {
            for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
              h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
            }
            return t2.zipComment.length && (h.comment = t2.zipComment), h;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../stream/GenericWorker");
        function s(e2, t2) {
          i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
        }
        n.inherits(s, i), s.prototype._bindStream = function(e2) {
          var t2 = this;
          (this._stream = e2).pause(), e2.on("data", function(e3) {
            t2.push({ data: e3, meta: { percent: 0 } });
          }).on("error", function(e3) {
            t2.isPaused ? this.generatedError = e3 : t2.error(e3);
          }).on("end", function() {
            t2.isPaused ? t2._upstreamEnded = true : t2.end();
          });
        }, s.prototype.pause = function() {
          return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        }, t.exports = s;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
        "use strict";
        var i = e("readable-stream").Readable;
        function n(e2, t2, r2) {
          i.call(this, t2), this._helper = e2;
          var n2 = this;
          e2.on("data", function(e3, t3) {
            n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
          }).on("error", function(e3) {
            n2.emit("error", e3);
          }).on("end", function() {
            n2.push(null);
          });
        }
        e("../utils").inherits(n, i), n.prototype._read = function() {
          this._helper.resume();
        }, t.exports = n;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
        "use strict";
        t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
          if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
          return new Buffer(e2, t2);
        }, allocBuffer: function(e2) {
          if (Buffer.alloc) return Buffer.alloc(e2);
          var t2 = new Buffer(e2);
          return t2.fill(0), t2;
        }, isBuffer: function(e2) {
          return Buffer.isBuffer(e2);
        }, isStream: function(e2) {
          return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
        } };
      }, {}], 15: [function(e, t, r) {
        "use strict";
        function s(e2, t2, r2) {
          var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
          s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true);
          var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
          r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
          var o2 = null;
          o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
          var h2 = new d(e2, o2, s2);
          this.files[e2] = h2;
        }
        var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
          "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
          var t2 = e2.lastIndexOf("/");
          return 0 < t2 ? e2.substring(0, t2) : "";
        }, g = function(e2) {
          return "/" !== e2.slice(-1) && (e2 += "/"), e2;
        }, b = function(e2, t2) {
          return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
        };
        function h(e2) {
          return "[object RegExp]" === Object.prototype.toString.call(e2);
        }
        var n = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(e2) {
          var t2, r2, n2;
          for (t2 in this.files) n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
        }, filter: function(r2) {
          var n2 = [];
          return this.forEach(function(e2, t2) {
            r2(e2, t2) && n2.push(t2);
          }), n2;
        }, file: function(e2, t2, r2) {
          if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
          if (h(e2)) {
            var n2 = e2;
            return this.filter(function(e3, t3) {
              return !t3.dir && n2.test(e3);
            });
          }
          var i2 = this.files[this.root + e2];
          return i2 && !i2.dir ? i2 : null;
        }, folder: function(r2) {
          if (!r2) return this;
          if (h(r2)) return this.filter(function(e3, t3) {
            return t3.dir && r2.test(e3);
          });
          var e2 = this.root + r2, t2 = b.call(this, e2), n2 = this.clone();
          return n2.root = t2.name, n2;
        }, remove: function(r2) {
          r2 = this.root + r2;
          var e2 = this.files[r2];
          if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
          else for (var t2 = this.filter(function(e3, t3) {
            return t3.name.slice(0, r2.length) === r2;
          }), n2 = 0; n2 < t2.length; n2++) delete this.files[t2[n2].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(e2) {
          var t2, r2 = {};
          try {
            if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
            u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
            var n2 = r2.comment || this.comment || "";
            t2 = o.generateWorker(this, r2, n2);
          } catch (e3) {
            (t2 = new l("error")).error(e3);
          }
          return new a(t2, r2.type || "string", r2.mimeType);
        }, generateAsync: function(e2, t2) {
          return this.generateInternalStream(e2).accumulate(t2);
        }, generateNodeStream: function(e2, t2) {
          return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
        } };
        t.exports = n;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
        "use strict";
        t.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
          for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data[this.zero + e2];
        }, i.prototype.lastIndexOfSignature = function(e2) {
          for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2) return s - this.zero;
          return -1;
        }, i.prototype.readAndCheckSignature = function(e2) {
          var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
          return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
        }, i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return [];
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
        "use strict";
        var n = e("../utils");
        function i(e2) {
          this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
        }
        i.prototype = { checkOffset: function(e2) {
          this.checkIndex(this.index + e2);
        }, checkIndex: function(e2) {
          if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
        }, setIndex: function(e2) {
          this.checkIndex(e2), this.index = e2;
        }, skip: function(e2) {
          this.setIndex(this.index + e2);
        }, byteAt: function() {
        }, readInt: function(e2) {
          var t2, r2 = 0;
          for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
          return this.index += e2, r2;
        }, readString: function(e2) {
          return n.transformTo("string", this.readData(e2));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var e2 = this.readInt(4);
          return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
        } }, t.exports = i;
      }, { "../utils": 32 }], 19: [function(e, t, r) {
        "use strict";
        var n = e("./Uint8ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data.charCodeAt(this.zero + e2);
        }, i.prototype.lastIndexOfSignature = function(e2) {
          return this.data.lastIndexOf(e2) - this.zero;
        }, i.prototype.readAndCheckSignature = function(e2) {
          return e2 === this.readData(4);
        }, i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
        "use strict";
        var n = e("./ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
          var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
        t.exports = function(e2) {
          var t2 = n.getTypeOf(e2);
          return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
        "use strict";
        r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../utils");
        function s(e2) {
          n.call(this, "ConvertWorker to " + e2), this.destType = e2;
        }
        i.inherits(s, n), s.prototype.processChunk = function(e2) {
          this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../crc32");
        function s() {
          n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
          this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
        }, t.exports = s;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
        }
        n.inherits(s, i), s.prototype.processChunk = function(e2) {
          if (e2) {
            var t2 = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t2 + e2.data.length;
          }
          i.prototype.processChunk.call(this, e2);
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataWorker");
          var t2 = this;
          this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
            t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
          }, function(e3) {
            t2.error(e3);
          });
        }
        n.inherits(s, i), s.prototype.cleanUp = function() {
          i.prototype.cleanUp.call(this), this.data = null;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
        }, s.prototype._tickAndRepeat = function() {
          this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
        }, s.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return false;
          var e2 = null, t2 = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              e2 = this.data.substring(this.index, t2);
              break;
            case "uint8array":
              e2 = this.data.subarray(this.index, t2);
              break;
            case "array":
            case "nodebuffer":
              e2 = this.data.slice(this.index, t2);
          }
          return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
        "use strict";
        function n(e2) {
          this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n.prototype = { push: function(e2) {
          this.emit("data", e2);
        }, end: function() {
          if (this.isFinished) return false;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = true;
          } catch (e2) {
            this.emit("error", e2);
          }
          return true;
        }, error: function(e2) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
        }, on: function(e2, t2) {
          return this._listeners[e2].push(t2), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(e2, t2) {
          if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
        }, pipe: function(e2) {
          return e2.registerPrevious(this);
        }, registerPrevious: function(e2) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return false;
          var e2 = this.isPaused = false;
          return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
        }, flush: function() {
        }, processChunk: function(e2) {
          this.push(e2);
        }, withStreamInfo: function(e2, t2) {
          return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = true, this.previous && this.previous.lock();
        }, toString: function() {
          var e2 = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e2 : e2;
        } }, t.exports = n;
      }, {}], 29: [function(e, t, r) {
        "use strict";
        var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
        if (n.nodestream) try {
          o = e("../nodejs/NodejsStreamOutputAdapter");
        } catch (e2) {
        }
        function l(e2, o2) {
          return new a.Promise(function(t2, r2) {
            var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
            e2.on("data", function(e3, t3) {
              n2.push(e3), o2 && o2(t3);
            }).on("error", function(e3) {
              n2 = [], r2(e3);
            }).on("end", function() {
              try {
                var e3 = (function(e4, t3, r3) {
                  switch (e4) {
                    case "blob":
                      return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                    case "base64":
                      return u.encode(t3);
                    default:
                      return h.transformTo(e4, t3);
                  }
                })(s2, (function(e4, t3) {
                  var r3, n3 = 0, i3 = null, s3 = 0;
                  for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                  switch (e4) {
                    case "string":
                      return t3.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t3);
                    case "uint8array":
                      for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].length;
                      return i3;
                    case "nodebuffer":
                      return Buffer.concat(t3);
                    default:
                      throw new Error("concat : unsupported type '" + e4 + "'");
                  }
                })(i2, n2), a2);
                t2(e3);
              } catch (e4) {
                r2(e4);
              }
              n2 = [];
            }).resume();
          });
        }
        function f(e2, t2, r2) {
          var n2 = t2;
          switch (t2) {
            case "blob":
            case "arraybuffer":
              n2 = "uint8array";
              break;
            case "base64":
              n2 = "string";
          }
          try {
            this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
          } catch (e3) {
            this._worker = new s("error"), this._worker.error(e3);
          }
        }
        f.prototype = { accumulate: function(e2) {
          return l(this, e2);
        }, on: function(e2, t2) {
          var r2 = this;
          return "data" === e2 ? this._worker.on(e2, function(e3) {
            t2.call(r2, e3.data, e3.meta);
          }) : this._worker.on(e2, function() {
            h.delay(t2, arguments, r2);
          }), this;
        }, resume: function() {
          return h.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(e2) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
        } }, t.exports = f;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
        "use strict";
        if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
        else {
          var n = new ArrayBuffer(0);
          try {
            r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
          } catch (e2) {
            try {
              var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
            } catch (e3) {
              r.blob = false;
            }
          }
        }
        try {
          r.nodestream = !!e("readable-stream").Readable;
        } catch (e2) {
          r.nodestream = false;
        }
      }, { "readable-stream": 16 }], 31: [function(e, t, s) {
        "use strict";
        for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
        u[254] = u[254] = 1;
        function a() {
          n.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function l() {
          n.call(this, "utf-8 encode");
        }
        s.utf8encode = function(e2) {
          return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
            for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          })(e2);
        }, s.utf8decode = function(e2) {
          return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
            for (t2 = r2 = 0; t2 < s2; ) if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
            else if (4 < (i2 = u[n2])) a2[r2++] = 65533, t2 += i2 - 1;
            else {
              for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n2 = n2 << 6 | 63 & e3[t2++], i2--;
              1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
            }
            return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
          })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
        }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
          var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
          if (this.leftOver && this.leftOver.length) {
            if (h.uint8array) {
              var r2 = t2;
              (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
            } else t2 = this.leftOver.concat(t2);
            this.leftOver = null;
          }
          var n2 = (function(e3, t3) {
            var r3;
            for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
            return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
          })(t2), i2 = t2;
          n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
        }, a.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
          this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
        }, s.Utf8EncodeWorker = l;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
        "use strict";
        var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
        function n(e2) {
          return e2;
        }
        function l(e2, t2) {
          for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
          return t2;
        }
        e("setimmediate"), a.newBlob = function(t2, r2) {
          a.checkSupport("blob");
          try {
            return new Blob([t2], { type: r2 });
          } catch (e2) {
            try {
              var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return n2.append(t2), n2.getBlob(r2);
            } catch (e3) {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var i = { stringifyByChunk: function(e2, t2, r2) {
          var n2 = [], i2 = 0, s2 = e2.length;
          if (s2 <= r2) return String.fromCharCode.apply(null, e2);
          for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
          return n2.join("");
        }, stringifyByChar: function(e2) {
          for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
          return t2;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e2) {
            return false;
          }
        })(), nodebuffer: (function() {
          try {
            return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
          } catch (e2) {
            return false;
          }
        })() } };
        function s(e2) {
          var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
          if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2) for (; 1 < t2; ) try {
            return i.stringifyByChunk(e2, r2, t2);
          } catch (e3) {
            t2 = Math.floor(t2 / 2);
          }
          return i.stringifyByChar(e2);
        }
        function f(e2, t2) {
          for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
          return t2;
        }
        a.applyFromCharCode = s;
        var c = {};
        c.string = { string: n, array: function(e2) {
          return l(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.string.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return l(e2, new Uint8Array(e2.length));
        }, nodebuffer: function(e2) {
          return l(e2, r.allocBuffer(e2.length));
        } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
          return new Uint8Array(e2).buffer;
        }, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.arraybuffer = { string: function(e2) {
          return s(new Uint8Array(e2));
        }, array: function(e2) {
          return f(new Uint8Array(e2), new Array(e2.byteLength));
        }, arraybuffer: n, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(new Uint8Array(e2));
        } }, c.uint8array = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return e2.buffer;
        }, uint8array: n, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.nodebuffer = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.nodebuffer.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return f(e2, new Uint8Array(e2.length));
        }, nodebuffer: n }, a.transformTo = function(e2, t2) {
          if (t2 = t2 || "", !e2) return t2;
          a.checkSupport(e2);
          var r2 = a.getTypeOf(t2);
          return c[r2][e2](t2);
        }, a.resolve = function(e2) {
          for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2];
            "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
          }
          return r2.join("/");
        }, a.getTypeOf = function(e2) {
          return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a.checkSupport = function(e2) {
          if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
        }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
          var t2, r2, n2 = "";
          for (r2 = 0; r2 < (e2 || "").length; r2++) n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
          return n2;
        }, a.delay = function(e2, t2, r2) {
          setImmediate(function() {
            e2.apply(r2 || null, t2 || []);
          });
        }, a.inherits = function(e2, t2) {
          function r2() {
          }
          r2.prototype = t2.prototype, e2.prototype = new r2();
        }, a.extend = function() {
          var e2, t2, r2 = {};
          for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
          return r2;
        }, a.prepareContent = function(r2, e2, n2, i2, s2) {
          return u.Promise.resolve(e2).then(function(n3) {
            return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
              var e3 = new FileReader();
              e3.onload = function(e4) {
                t2(e4.target.result);
              }, e3.onerror = function(e4) {
                r3(e4.target.error);
              }, e3.readAsArrayBuffer(n3);
            }) : n3;
          }).then(function(e3) {
            var t2 = a.getTypeOf(e3);
            return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = (function(e4) {
              return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
            })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
        function h(e2) {
          this.files = [], this.loadOptions = e2;
        }
        h.prototype = { checkSignature: function(e2) {
          if (!this.reader.readAndCheckSignature(e2)) {
            this.reader.index -= 4;
            var t2 = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
          }
        }, isSignature: function(e2, t2) {
          var r2 = this.reader.index;
          this.reader.setIndex(e2);
          var n2 = this.reader.readString(4) === t2;
          return this.reader.setIndex(r2), n2;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
          this.zipComment = this.loadOptions.decodeFileName(r2);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var e2, t2;
          for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
        }, readCentralDir: function() {
          var e2;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e2);
          var t2 = e2;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r2 = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
          var n2 = t2 - r2;
          if (0 < n2) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
          else if (n2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
        }, prepareReader: function(e2) {
          this.reader = n(e2);
        }, load: function(e2) {
          this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, t.exports = h;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
        function l(e2, t2) {
          this.options = e2, this.loadOptions = t2;
        }
        l.prototype = { isEncrypted: function() {
          return 1 == (1 & this.bitFlag);
        }, useUTF8: function() {
          return 2048 == (2048 & this.bitFlag);
        }, readLocalPart: function(e2) {
          var t2, r2;
          if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t2 = (function(e3) {
            for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
            return null;
          })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
        }, readCentralPart: function(e2) {
          this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
          var t2 = e2.readInt(2);
          if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e2 = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var e2 = n(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
          }
        }, readExtraFields: function(e2) {
          var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
          e2.setIndex(i2);
        }, handleUTF8: function() {
          var e2 = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
          else {
            var t2 = this.findExtraFieldUnicodePath();
            if (null !== t2) this.fileNameStr = t2;
            else {
              var r2 = s.transformTo(e2, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r2);
            }
            var n2 = this.findExtraFieldUnicodeComment();
            if (null !== n2) this.fileCommentStr = n2;
            else {
              var i2 = s.transformTo(e2, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i2);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var e2 = this.extraFields[28789];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var e2 = this.extraFields[25461];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        } }, t.exports = l;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
        "use strict";
        function n(e2, t2, r2) {
          this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
        }
        var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
        n.prototype = { internalStream: function(e2) {
          var t2 = null, r2 = "string";
          try {
            if (!e2) throw new Error("No output type specified.");
            var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
            "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
            var i2 = !this._dataBinary;
            i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
          } catch (e3) {
            (t2 = new h("error")).error(e3);
          }
          return new s(t2, r2, "");
        }, async: function(e2, t2) {
          return this.internalStream(e2).accumulate(t2);
        }, nodeStream: function(e2, t2) {
          return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
        }, _compressWorker: function(e2, t2) {
          if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
          var r2 = this._decompressWorker();
          return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
        }, _decompressWorker: function() {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        } };
        for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
        t.exports = n;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
        (function(t2) {
          "use strict";
          var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
          if (e2) {
            var i = 0, s = new e2(u), a = t2.document.createTextNode("");
            s.observe(a, { characterData: true }), r = function() {
              a.data = i = ++i % 2;
            };
          } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
            var e3 = t2.document.createElement("script");
            e3.onreadystatechange = function() {
              u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
            }, t2.document.documentElement.appendChild(e3);
          } : function() {
            setTimeout(u, 0);
          };
          else {
            var o = new t2.MessageChannel();
            o.port1.onmessage = u, r = function() {
              o.port2.postMessage(0);
            };
          }
          var h = [];
          function u() {
            var e3, t3;
            n = true;
            for (var r2 = h.length; r2; ) {
              for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
              r2 = h.length;
            }
            n = false;
          }
          l.exports = function(e3) {
            1 !== h.push(e3) || n || r();
          };
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}], 37: [function(e, t, r) {
        "use strict";
        var i = e("immediate");
        function u() {
        }
        var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
        function o(e2) {
          if ("function" != typeof e2) throw new TypeError("resolver must be a function");
          this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
        }
        function h(e2, t2, r2) {
          this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
        }
        function f(t2, r2, n2) {
          i(function() {
            var e2;
            try {
              e2 = r2(n2);
            } catch (e3) {
              return l.reject(t2, e3);
            }
            e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
          });
        }
        function c(e2) {
          var t2 = e2 && e2.then;
          if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
            t2.apply(e2, arguments);
          };
        }
        function d(t2, e2) {
          var r2 = false;
          function n2(e3) {
            r2 || (r2 = true, l.reject(t2, e3));
          }
          function i2(e3) {
            r2 || (r2 = true, l.resolve(t2, e3));
          }
          var s2 = p(function() {
            e2(i2, n2);
          });
          "error" === s2.status && n2(s2.value);
        }
        function p(e2, t2) {
          var r2 = {};
          try {
            r2.value = e2(t2), r2.status = "success";
          } catch (e3) {
            r2.status = "error", r2.value = e3;
          }
          return r2;
        }
        (t.exports = o).prototype.finally = function(t2) {
          if ("function" != typeof t2) return this;
          var r2 = this.constructor;
          return this.then(function(e2) {
            return r2.resolve(t2()).then(function() {
              return e2;
            });
          }, function(e2) {
            return r2.resolve(t2()).then(function() {
              throw e2;
            });
          });
        }, o.prototype.catch = function(e2) {
          return this.then(null, e2);
        }, o.prototype.then = function(e2, t2) {
          if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
          var r2 = new this.constructor(u);
          this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
          return r2;
        }, h.prototype.callFulfilled = function(e2) {
          l.resolve(this.promise, e2);
        }, h.prototype.otherCallFulfilled = function(e2) {
          f(this.promise, this.onFulfilled, e2);
        }, h.prototype.callRejected = function(e2) {
          l.reject(this.promise, e2);
        }, h.prototype.otherCallRejected = function(e2) {
          f(this.promise, this.onRejected, e2);
        }, l.resolve = function(e2, t2) {
          var r2 = p(c, t2);
          if ("error" === r2.status) return l.reject(e2, r2.value);
          var n2 = r2.value;
          if (n2) d(e2, n2);
          else {
            e2.state = a, e2.outcome = t2;
            for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
          }
          return e2;
        }, l.reject = function(e2, t2) {
          e2.state = s, e2.outcome = t2;
          for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; ) e2.queue[r2].callRejected(t2);
          return e2;
        }, o.resolve = function(e2) {
          if (e2 instanceof this) return e2;
          return l.resolve(new this(u), e2);
        }, o.reject = function(e2) {
          var t2 = new this(u);
          return l.reject(t2, e2);
        }, o.all = function(e2) {
          var r2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var n2 = e2.length, i2 = false;
          if (!n2) return this.resolve([]);
          var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
          for (; ++t2 < n2; ) h2(e2[t2], t2);
          return o2;
          function h2(e3, t3) {
            r2.resolve(e3).then(function(e4) {
              s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
            }, function(e4) {
              i2 || (i2 = true, l.reject(o2, e4));
            });
          }
        }, o.race = function(e2) {
          var t2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var r2 = e2.length, n2 = false;
          if (!r2) return this.resolve([]);
          var i2 = -1, s2 = new this(u);
          for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
            n2 || (n2 = true, l.resolve(s2, e3));
          }, function(e3) {
            n2 || (n2 = true, l.reject(s2, e3));
          });
          var a2;
          return s2;
        };
      }, { immediate: 36 }], 38: [function(e, t, r) {
        "use strict";
        var n = {};
        (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
        "use strict";
        var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
        function p(e2) {
          if (!(this instanceof p)) return new p(e2);
          this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
          var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
          if (r2 !== l) throw new Error(i[r2]);
          if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
            var n2;
            if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l) throw new Error(i[r2]);
            this._dict_set = true;
          }
        }
        function n(e2, t2) {
          var r2 = new p(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
          return r2.result;
        }
        p.prototype.push = function(e2, t2) {
          var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
          do {
            if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l) return this.onEnd(r2), !(this.ended = true);
            0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
          } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
          return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
        }, p.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, p.prototype.onEnd = function(e2) {
          e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, n(e2, t2);
        }, r.gzip = function(e2, t2) {
          return (t2 = t2 || {}).gzip = true, n(e2, t2);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
        "use strict";
        var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
        function a(e2) {
          if (!(this instanceof a)) return new a(e2);
          this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
          var r2 = c.inflateInit2(this.strm, t2.windowBits);
          if (r2 !== m.Z_OK) throw new Error(n[r2]);
          this.header = new s(), c.inflateGetHeader(this.strm, this.header);
        }
        function o(e2, t2) {
          var r2 = new a(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || n[r2.err];
          return r2.result;
        }
        a.prototype.push = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
          do {
            if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK) return this.onEnd(r2), !(this.ended = true);
            h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
          } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
          return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
        }, a.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, a.prototype.onEnd = function(e2) {
          e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, o(e2, t2);
        }, r.ungzip = o;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        r.assign = function(e2) {
          for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
            var r2 = t2.shift();
            if (r2) {
              if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
              for (var n2 in r2) r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
            }
          }
          return e2;
        }, r.shrinkBuf = function(e2, t2) {
          return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
        };
        var i = { arraySet: function(e2, t2, r2, n2, i2) {
          if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), i2);
          else for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          var t2, r2, n2, i2, s2, a;
          for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
          for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
          return a;
        } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
          for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          return [].concat.apply([], e2);
        } };
        r.setTyped = function(e2) {
          e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
        }, r.setTyped(n);
      }, {}], 42: [function(e, t, r) {
        "use strict";
        var h = e("./common"), i = true, s = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e2) {
          i = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e2) {
          s = false;
        }
        for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
        function l(e2, t2) {
          if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
          for (var r2 = "", n2 = 0; n2 < t2; n2++) r2 += String.fromCharCode(e2[n2]);
          return r2;
        }
        u[254] = u[254] = 1, r.string2buf = function(e2) {
          var t2, r2, n2, i2, s2, a = e2.length, o = 0;
          for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
          for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
          return t2;
        }, r.buf2binstring = function(e2) {
          return l(e2, e2.length);
        }, r.binstring2buf = function(e2) {
          for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++) t2[r2] = e2.charCodeAt(r2);
          return t2;
        }, r.buf2string = function(e2, t2) {
          var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
          for (r2 = n2 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
          else if (4 < (s2 = u[i2])) o[n2++] = 65533, r2 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
            1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
          }
          return l(o, n2);
        }, r.utf8border = function(e2, t2) {
          var r2;
          for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
          return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
        };
      }, { "./common": 41 }], 43: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2, r2, n) {
          for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
            for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; ) ;
            i %= 65521, s %= 65521;
          }
          return i | s << 16 | 0;
        };
      }, {}], 44: [function(e, t, r) {
        "use strict";
        t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, t, r) {
        "use strict";
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2, r2, n) {
          var i = o, s = n + r2;
          e2 ^= -1;
          for (var a = n; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
          return -1 ^ e2;
        };
      }, {}], 46: [function(e, t, r) {
        "use strict";
        var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
        function R(e2, t2) {
          return e2.msg = n[t2], t2;
        }
        function T(e2) {
          return (e2 << 1) - (4 < e2 ? 9 : 0);
        }
        function D(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        function F(e2) {
          var t2 = e2.state, r2 = t2.pending;
          r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
        }
        function N(e2, t2) {
          u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = t2;
        }
        function P(e2, t2) {
          e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
        }
        function L(e2, t2) {
          var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
          e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
          do {
            if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
              s2 += 2, r2++;
              do {
              } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
              if (n2 = S - (c2 - s2), s2 = c2 - S, a2 < n2) {
                if (e2.match_start = t2, o2 <= (a2 = n2)) break;
                d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
              }
            }
          } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
          return a2 <= e2.lookahead ? a2 : e2.lookahead;
        }
        function j(e2) {
          var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
          do {
            if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
              for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              i2 += f2;
            }
            if (0 === e2.strm.avail_in) break;
            if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); ) ;
          } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
        }
        function Z(e2, t2) {
          for (var r2, n2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x) if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
              for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
              e2.strstart++;
            } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
            else n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
            if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function W(e2, t2) {
          for (var r2, n2, i2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
              for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
              if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            } else if (e2.match_available) {
              if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A;
            } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
          }
          return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function M(e2, t2, r2, n2, i2) {
          this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
        }
        function H() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function G(e2) {
          var t2;
          return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
        }
        function K(e2) {
          var t2 = G(e2);
          return t2 === m && (function(e3) {
            e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
          })(e2.state), t2;
        }
        function Y(e2, t2, r2, n2, i2, s2) {
          if (!e2) return _;
          var a2 = 1;
          if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2) return R(e2, _);
          8 === n2 && (n2 = 9);
          var o2 = new H();
          return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
        }
        h = [new M(0, 0, 0, 0, function(e2, t2) {
          var r2 = 65535;
          for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
            if (e2.lookahead <= 1) {
              if (j(e2), 0 === e2.lookahead && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            e2.strstart += e2.lookahead, e2.lookahead = 0;
            var n2 = e2.block_start + r2;
            if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out)) return A;
            if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
        }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
          return Y(e2, t2, v, 15, 8, 0);
        }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
          return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
        }, r.deflate = function(e2, t2) {
          var r2, n2, i2, s2;
          if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R(e2, _) : _;
          if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f) return R(e2, 0 === e2.avail_out ? -5 : _);
          if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C) if (2 === n2.wrap) e2.adler = 0, U(n2, 31), U(n2, 139), U(n2, 8), n2.gzhead ? (U(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U(n2, 255 & n2.gzhead.time), U(n2, n2.gzhead.time >> 8 & 255), U(n2, n2.gzhead.time >> 16 & 255), U(n2, n2.gzhead.time >> 24 & 255), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U(n2, 255 & n2.gzhead.extra.length), U(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 3), n2.status = E);
          else {
            var a2 = v + (n2.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P(n2, a2), 0 !== n2.strstart && (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), e2.adler = 1;
          }
          if (69 === n2.status) if (n2.gzhead.extra) {
            for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); ) U(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
          } else n2.status = 73;
          if (73 === n2.status) if (n2.gzhead.name) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
          } else n2.status = 91;
          if (91 === n2.status) if (n2.gzhead.comment) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
          } else n2.status = 103;
          if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F(e2), n2.pending + 2 <= n2.pending_buf_size && (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
            if (F(e2), 0 === e2.avail_out) return n2.last_flush = -1, m;
          } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f) return R(e2, -5);
          if (666 === n2.status && 0 !== e2.avail_in) return R(e2, -5);
          if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
            var o2 = 2 === n2.strategy ? (function(e3, t3) {
              for (var r3; ; ) {
                if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                  if (t3 === l) return A;
                  break;
                }
                if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n2, t2) : 3 === n2.strategy ? (function(e3, t3) {
              for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                if (e3.lookahead <= S) {
                  if (j(e3), e3.lookahead <= S && t3 === l) return A;
                  if (0 === e3.lookahead) break;
                }
                if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                  s3 = e3.strstart + S;
                  do {
                  } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                  e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                }
                if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n2, t2) : h[n2.level].func(n2, t2);
            if (o2 !== O && o2 !== B || (n2.status = 666), o2 === A || o2 === O) return 0 === e2.avail_out && (n2.last_flush = -1), m;
            if (o2 === I && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F(e2), 0 === e2.avail_out)) return n2.last_flush = -1, m;
          }
          return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), U(n2, e2.adler >> 16 & 255), U(n2, e2.adler >> 24 & 255), U(n2, 255 & e2.total_in), U(n2, e2.total_in >> 8 & 255), U(n2, e2.total_in >> 16 & 255), U(n2, e2.total_in >> 24 & 255)) : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), F(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
        }, r.deflateEnd = function(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
        }, r.deflateSetDictionary = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
          if (!e2 || !e2.state) return _;
          if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead) return _;
          for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
            for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; ) ;
            r2.strstart = n2, r2.lookahead = x - 1, j(r2);
          }
          return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
        }, r.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, {}], 48: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2) {
          var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
          r2 = e2.state, n = e2.next_in, z = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
          e: do {
            p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
            t: for (; ; ) {
              if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
              else {
                if (!(16 & y)) {
                  if (0 == (64 & y)) {
                    v = m[(65535 & v) + (d & (1 << y) - 1)];
                    continue t;
                  }
                  if (32 & y) {
                    r2.mode = 12;
                    break e;
                  }
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break e;
                }
                w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                r: for (; ; ) {
                  if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                    if (0 == (64 & y)) {
                      v = _[(65535 & v) + (d & (1 << y) - 1)];
                      continue r;
                    }
                    e2.msg = "invalid distance code", r2.mode = 30;
                    break e;
                  }
                  if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break e;
                  }
                  if (d >>>= y, p -= y, (y = s - a) < k) {
                    if (l < (y = k - y) && r2.sane) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (S = c, (x = 0) === f) {
                      if (x += u - y, y < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        x = s - k, S = C;
                      }
                    } else if (f < y) {
                      if (x += u + f - y, (y -= f) < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        if (x = 0, f < w) {
                          for (w -= y = f; C[s++] = c[x++], --y; ) ;
                          x = s - k, S = C;
                        }
                      }
                    } else if (x += f - y, y < w) {
                      for (w -= y; C[s++] = c[x++], --y; ) ;
                      x = s - k, S = C;
                    }
                    for (; 2 < w; ) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                    w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                  } else {
                    for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) ;
                    w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (n < i && s < o);
          n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
        };
      }, {}], 49: [function(e, t, r) {
        "use strict";
        var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
        function L(e2) {
          return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
        }
        function s() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function a(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
        }
        function o(e2) {
          var t2;
          return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
        }
        function h(e2, t2) {
          var r2, n2;
          return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U;
        }
        function u(e2, t2) {
          var r2, n2;
          return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
        }
        var l, f, c = true;
        function j(e2) {
          if (c) {
            var t2;
            for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
            for (; t2 < 256; ) e2.lens[t2++] = 9;
            for (; t2 < 280; ) e2.lens[t2++] = 7;
            for (; t2 < 288; ) e2.lens[t2++] = 8;
            for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
            T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
          }
          e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
        }
        function Z(e2, t2, r2, n2) {
          var i2, s2 = e2.state;
          return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n2 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
        }
        r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
          return u(e2, 15);
        }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U;
          12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
          e: for (; ; ) switch (r2.mode) {
            case P:
              if (0 === r2.wrap) {
                r2.mode = 13;
                break;
              }
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (2 & r2.wrap && 35615 === u2) {
                E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                break;
              }
              if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                e2.msg = "incorrect header check", r2.mode = 30;
                break;
              }
              if (8 != (15 & u2)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k;
              else if (k > r2.wbits) {
                e2.msg = "invalid window size", r2.mode = 30;
                break;
              }
              r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
              break;
            case 2:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.flags = u2, 8 != (255 & r2.flags)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (57344 & r2.flags) {
                e2.msg = "unknown header flags set", r2.mode = 30;
                break;
              }
              r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
            case 3:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
            case 4:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
            case 5:
              if (1024 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
              } else r2.head && (r2.head.extra = null);
              r2.mode = 6;
            case 6:
              if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n2, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
              r2.length = 0, r2.mode = 7;
            case 7:
              if (2048 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.name = null);
              r2.length = 0, r2.mode = 8;
            case 8:
              if (4096 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.comment = null);
              r2.mode = 9;
            case 9:
              if (512 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (65535 & r2.check)) {
                  e2.msg = "header crc mismatch", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
              break;
            case 10:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
            case 11:
              if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
              e2.adler = r2.check = 1, r2.mode = 12;
            case 12:
              if (5 === t2 || 6 === t2) break e;
            case 13:
              if (r2.last) {
                u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                break;
              }
              for (; l2 < 3; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                case 0:
                  r2.mode = 14;
                  break;
                case 1:
                  if (j(r2), r2.mode = 20, 6 !== t2) break;
                  u2 >>>= 2, l2 -= 2;
                  break e;
                case 2:
                  r2.mode = 17;
                  break;
                case 3:
                  e2.msg = "invalid block type", r2.mode = 30;
              }
              u2 >>>= 2, l2 -= 2;
              break;
            case 14:
              for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                e2.msg = "invalid stored block lengths", r2.mode = 30;
                break;
              }
              if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2) break e;
            case 15:
              r2.mode = 16;
            case 16:
              if (d = r2.length) {
                if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                I.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                break;
              }
              r2.mode = 12;
              break;
            case 17:
              for (; l2 < 14; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                e2.msg = "too many length or distance symbols", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 18;
            case 18:
              for (; r2.have < r2.ncode; ) {
                for (; l2 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
              }
              for (; r2.have < 19; ) r2.lens[A[r2.have++]] = 0;
              if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid code lengths set", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 19;
            case 19:
              for (; r2.have < r2.nlen + r2.ndist; ) {
                for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (b < 16) u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                else {
                  if (16 === b) {
                    for (z = _ + 2; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                  } else if (17 === b) {
                    for (z = _ + 3; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                  } else {
                    for (z = _ + 7; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                  }
                  if (r2.have + d > r2.nlen + r2.ndist) {
                    e2.msg = "invalid bit length repeat", r2.mode = 30;
                    break;
                  }
                  for (; d--; ) r2.lens[r2.have++] = k;
                }
              }
              if (30 === r2.mode) break;
              if (0 === r2.lens[256]) {
                e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                break;
              }
              if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid literal/lengths set", r2.mode = 30;
                break;
              }
              if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                e2.msg = "invalid distances set", r2.mode = 30;
                break;
              }
              if (r2.mode = 20, 6 === t2) break e;
            case 20:
              r2.mode = 21;
            case 21:
              if (6 <= o2 && 258 <= h2) {
                e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                break;
              }
              for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (g && 0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                r2.mode = 26;
                break;
              }
              if (32 & g) {
                r2.back = -1, r2.mode = 12;
                break;
              }
              if (64 & g) {
                e2.msg = "invalid literal/length code", r2.mode = 30;
                break;
              }
              r2.extra = 15 & g, r2.mode = 22;
            case 22:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              r2.was = r2.length, r2.mode = 23;
            case 23:
              for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                e2.msg = "invalid distance code", r2.mode = 30;
                break;
              }
              r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
            case 24:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              if (r2.offset > r2.dmax) {
                e2.msg = "invalid distance too far back", r2.mode = 30;
                break;
              }
              r2.mode = 25;
            case 25:
              if (0 === h2) break e;
              if (d = c2 - h2, r2.offset > d) {
                if ((d = r2.offset - d) > r2.whave && r2.sane) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
              } else m = i2, p = a2 - r2.offset, d = r2.length;
              for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; ) ;
              0 === r2.length && (r2.mode = 21);
              break;
            case 26:
              if (0 === h2) break e;
              i2[a2++] = r2.length, h2--, r2.mode = 21;
              break;
            case 27:
              if (r2.wrap) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 |= n2[s2++] << l2, l2 += 8;
                }
                if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                  e2.msg = "incorrect data check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 28;
            case 28:
              if (r2.wrap && r2.flags) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (4294967295 & r2.total)) {
                  e2.msg = "incorrect length check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 29;
            case 29:
              x = 1;
              break e;
            case 30:
              x = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return U;
          }
          return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
        }, r.inflateEnd = function(e2) {
          if (!e2 || !e2.state) return U;
          var t2 = e2.state;
          return t2.window && (t2.window = null), e2.state = null, N;
        }, r.inflateGetHeader = function(e2, t2) {
          var r2;
          return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
        }, r.inflateSetDictionary = function(e2, t2) {
          var r2, n2 = t2.length;
          return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check ? -3 : Z(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
        }, r.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
        "use strict";
        var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function(e2, t2, r2, n, i, s, a, o) {
          var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
          for (b = 0; b <= 15; b++) O[b] = 0;
          for (v = 0; v < n; v++) O[t2[r2 + v]]++;
          for (k = g, w = 15; 1 <= w && 0 === O[w]; w--) ;
          if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
          for (y = 1; y < w && 0 === O[y]; y++) ;
          for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
          if (0 < z && (0 === e2 || 1 !== w)) return -1;
          for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
          for (v = 0; v < n; v++) 0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
          if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
          for (; ; ) {
            for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; ) ;
            for (h = 1 << b - 1; E & h; ) h >>= 1;
            if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
              if (b === w) break;
              b = t2[r2 + a[v]];
            }
            if (k < b && (E & f) !== l) {
              for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); ) x++, z <<= 1;
              if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
              i[l = E & f] = k << 24 | x << 16 | c - s | 0;
            }
          }
          return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, t, r) {
        "use strict";
        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, t, r) {
        "use strict";
        var i = e("../utils/common"), o = 0, h = 1;
        function n(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
        n(z);
        var C = new Array(2 * f);
        n(C);
        var E = new Array(512);
        n(E);
        var A = new Array(256);
        n(A);
        var I = new Array(a);
        n(I);
        var O, B, R, T = new Array(f);
        function D(e2, t2, r2, n2, i2) {
          this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
        }
        function F(e2, t2) {
          this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
        }
        function N(e2) {
          return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
        }
        function P(e2, t2, r2) {
          e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
        }
        function L(e2, t2, r2) {
          P(e2, r2[2 * t2], r2[2 * t2 + 1]);
        }
        function j(e2, t2) {
          for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
          return r2 >>> 1;
        }
        function Z(e2, t2, r2) {
          var n2, i2, s2 = new Array(g + 1), a2 = 0;
          for (n2 = 1; n2 <= g; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
          for (i2 = 0; i2 <= t2; i2++) {
            var o2 = e2[2 * i2 + 1];
            0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
          }
        }
        function W(e2) {
          var t2;
          for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
          for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
          for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
          e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
        }
        function M(e2) {
          8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
        }
        function H(e2, t2, r2, n2) {
          var i2 = 2 * t2, s2 = 2 * r2;
          return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
        }
        function G(e2, t2, r2) {
          for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n2, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
          e2.heap[r2] = n2;
        }
        function K(e2, t2, r2) {
          var n2, i2, s2, a2, o2 = 0;
          if (0 !== e2.last_lit) for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n2), r2), 0 !== (a2 = k[s2]) && P(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; ) ;
          L(e2, m, t2);
        }
        function Y(e2, t2) {
          var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
          for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
          for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
          for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G(e2, s2, r2);
          for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; ) ;
          e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
            for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
            for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++) p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
            if (0 !== m2) {
              do {
                for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
              } while (0 < m2);
              for (s3 = p2; 0 !== s3; s3--) for (n3 = e3.bl_count[s3]; 0 !== n3; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
            }
          })(e2, t2), Z(s2, u2, e2.bl_count);
        }
        function X(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
        }
        function V(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
            if (o2 < u2) for (; L(e2, i2, e2.bl_tree), 0 != --o2; ) ;
            else 0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
            s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
        }
        n(T);
        var q = false;
        function J(e2, t2, r2, n2) {
          P(e2, (s << 1) + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            M(e3), n3 && (U(e3, r3), U(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
          })(e2, t2, r2, true);
        }
        r._tr_init = function(e2) {
          q || ((function() {
            var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
            for (n2 = r2 = 0; n2 < a - 1; n2++) for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++) A[r2++] = n2;
            for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++) for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++) E[i2++] = n2;
            for (i2 >>= 7; n2 < f; n2++) for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k[n2] - 7; e3++) E[256 + i2++] = n2;
            for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
            for (e3 = 0; e3 <= 143; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (; e3 <= 255; ) z[2 * e3 + 1] = 9, e3++, s2[9]++;
            for (; e3 <= 279; ) z[2 * e3 + 1] = 7, e3++, s2[7]++;
            for (; e3 <= 287; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++) C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
            O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
          })(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
        }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n2) {
          var i2, s2, a2 = 0;
          0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
            var t3, r3 = 4093624447;
            for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
            if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
            for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
            return o;
          })(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = (function(e3) {
            var t3;
            for (X(e3, e3.dyn_ltree, e3.l_desc.max_code), X(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--) ;
            return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
          })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            var i3;
            for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
            V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
          })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n2 && M(e2);
        }, r._tr_tally = function(e2, t2, r2) {
          return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
        }, r._tr_align = function(e2) {
          P(e2, 2, 3), L(e2, m, z), (function(e3) {
            16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
          })(e2);
        };
      }, { "../utils/common": 41 }], 53: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, t, r) {
        (function(e2) {
          !(function(r2, n) {
            "use strict";
            if (!r2.setImmediate) {
              var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
              e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                process.nextTick(function() {
                  c(e4);
                });
              } : (function() {
                if (r2.postMessage && !r2.importScripts) {
                  var e4 = true, t3 = r2.onmessage;
                  return r2.onmessage = function() {
                    e4 = false;
                  }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                }
              })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                r2.postMessage(a + e4, "*");
              }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                c(e4.data);
              }, function(e4) {
                t2.port2.postMessage(e4);
              }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                var t3 = l.createElement("script");
                t3.onreadystatechange = function() {
                  c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                }, s.appendChild(t3);
              }) : function(e4) {
                setTimeout(c, 0, e4);
              }, e3.setImmediate = function(e4) {
                "function" != typeof e4 && (e4 = new Function("" + e4));
                for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                var n2 = { callback: e4, args: t3 };
                return h[o] = n2, i(o), o++;
              }, e3.clearImmediate = f;
            }
            function f(e4) {
              delete h[e4];
            }
            function c(e4) {
              if (u) setTimeout(c, 0, e4);
              else {
                var t3 = h[e4];
                if (t3) {
                  u = true;
                  try {
                    !(function(e5) {
                      var t4 = e5.callback, r3 = e5.args;
                      switch (r3.length) {
                        case 0:
                          t4();
                          break;
                        case 1:
                          t4(r3[0]);
                          break;
                        case 2:
                          t4(r3[0], r3[1]);
                          break;
                        case 3:
                          t4(r3[0], r3[1], r3[2]);
                          break;
                        default:
                          t4.apply(n, r3);
                      }
                    })(t3);
                  } finally {
                    f(e4), u = false;
                  }
                }
              }
            }
            function d(e4) {
              e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
            }
          })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }
});

// ../packages/docs-exchange/src/utils/parse/border-dash.ts
var DOCX_BORDER_TO_UNIVER_DASH = {
  single: 1,
  thick: 1,
  double: 1,
  triple: 1,
  thinThickSmallGap: 1,
  thickThinSmallGap: 1,
  thinThickThinSmallGap: 1,
  thinThickMediumGap: 1,
  thickThinMediumGap: 1,
  thinThickThinMediumGap: 1,
  thinThickLargeGap: 1,
  thickThinLargeGap: 1,
  thinThickThinLargeGap: 1,
  wave: 1,
  doubleWave: 1,
  dashSmallGap: 3,
  dashed: 3,
  dotDash: 4,
  dotDotDash: 5,
  dotted: 2
};

// ../packages/docs-exchange/src/utils/parse/bytes.ts
function bytesToBase64(bytes) {
  let binary = "";
  const chunk = 32768;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/util.js
var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
var regexName = new RegExp("^" + nameRegexp + "$");
function getAllMatches(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}
var isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === "undefined");
};
function isExist(v) {
  return typeof v !== "undefined";
}
var DANGEROUS_PROPERTY_NAMES = [
  // '__proto__',
  // 'constructor',
  // 'prototype',
  "hasOwnProperty",
  "toString",
  "valueOf",
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__"
];
var criticalProperties = ["__proto__", "constructor", "prototype"];

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/validator.js
var defaultOptions = {
  allowBooleanAttributes: false,
  //A tag can have attributes without any value
  unpairedTags: []
};
function validate(xmlData, options) {
  options = Object.assign({}, defaultOptions, options);
  const tags = [];
  let tagFound = false;
  let reachedRoot = false;
  if (xmlData[0] === "\uFEFF") {
    xmlData = xmlData.substr(1);
  }
  for (let i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
      i += 2;
      i = readPI(xmlData, i);
      if (i.err) return i;
    } else if (xmlData[i] === "<") {
      let tagStartPos = i;
      i++;
      if (xmlData[i] === "!") {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === "/") {
          closingTag = true;
          i++;
        }
        let tagName = "";
        for (; i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "	" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        if (tagName[tagName.length - 1] === "/") {
          tagName = tagName.substring(0, tagName.length - 1);
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName + "' is an invalid name.";
          }
          return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
        }
        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;
        if (attrStr[attrStr.length - 1] === "/") {
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
          } else {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else if (tags.length === 0) {
            return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject(
                "InvalidTag",
                "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                getLineNumberForPosition(xmlData, tagStartPos)
              );
            }
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }
          if (reachedRoot === true) {
            return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
          } else if (options.unpairedTags.indexOf(tagName) !== -1) {
          } else {
            tags.push({ tagName, tagStartPos });
          }
          tagFound = true;
        }
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === "<") {
            if (xmlData[i + 1] === "!") {
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i + 1] === "?") {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === "&") {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        }
        if (xmlData[i] === "<") {
          i--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }
  if (!tagFound) {
    return getErrorObject("InvalidXml", "Start tag expected.", 1);
  } else if (tags.length == 1) {
    return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  } else if (tags.length > 0) {
    return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  }
  return true;
}
function isWhiteSpace(char) {
  return char === " " || char === "	" || char === "\n" || char === "\r";
}
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == "?" || xmlData[i] == " ") {
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === "xml") {
        return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}
function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "<") {
        angleBracketsCount++;
      } else if (xmlData[i] === ">") {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
        i += 2;
        break;
      }
    }
  }
  return i;
}
var doubleQuote = '"';
var singleQuote = "'";
function readAttributeStr(xmlData, i) {
  let attrStr = "";
  let startChar = "";
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === "") {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
      } else {
        startChar = "";
      }
    } else if (xmlData[i] === ">") {
      if (startChar === "") {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== "") {
    return false;
  }
  return {
    value: attrStr,
    index: i,
    tagClosed
  };
}
var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function validateAttributeString(attrStr, options) {
  const matches = getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};
  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] !== void 0 && matches[i][4] === void 0) {
      return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === void 0 && !options.allowBooleanAttributes) {
      return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
    }
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!Object.prototype.hasOwnProperty.call(attrNames, attrName)) {
      attrNames[attrName] = 1;
    } else {
      return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
    }
  }
  return true;
}
function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === "x") {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ";")
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}
function validateAmpersand(xmlData, i) {
  i++;
  if (xmlData[i] === ";")
    return -1;
  if (xmlData[i] === "#") {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ";")
      break;
    return -1;
  }
  return i;
}
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col
    }
  };
}
function validateAttrName(attrName) {
  return isName(attrName);
}
function validateTagName(tagname) {
  return isName(tagname);
}
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}

// ../node_modules/.pnpm/@nodable+entities@2.1.0/node_modules/@nodable/entities/src/entities.js
var BASIC_LATIN = {
  amp: "&",
  AMP: "&",
  lt: "<",
  LT: "<",
  gt: ">",
  GT: ">",
  quot: '"',
  QUOT: '"',
  apos: "'",
  lsquo: "\u2018",
  rsquo: "\u2019",
  ldquo: "\u201C",
  rdquo: "\u201D",
  lsquor: "\u201A",
  rsquor: "\u2019",
  ldquor: "\u201E",
  bdquo: "\u201E",
  comma: ",",
  period: ".",
  colon: ":",
  semi: ";",
  excl: "!",
  quest: "?",
  num: "#",
  dollar: "$",
  percent: "%",
  amp: "&",
  ast: "*",
  commat: "@",
  lowbar: "_",
  verbar: "|",
  vert: "|",
  sol: "/",
  bsol: "\\",
  lbrace: "{",
  rbrace: "}",
  lbrack: "[",
  rbrack: "]",
  lpar: "(",
  rpar: ")",
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  COPY: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  REG: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  half: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  times: "\xD7",
  div: "\xF7",
  divide: "\xF7"
};
var LATIN_ACCENTS = {
  Agrave: "\xC0",
  agrave: "\xE0",
  Aacute: "\xC1",
  aacute: "\xE1",
  Acirc: "\xC2",
  acirc: "\xE2",
  Atilde: "\xC3",
  atilde: "\xE3",
  Auml: "\xC4",
  auml: "\xE4",
  Aring: "\xC5",
  aring: "\xE5",
  AElig: "\xC6",
  aelig: "\xE6",
  Ccedil: "\xC7",
  ccedil: "\xE7",
  Egrave: "\xC8",
  egrave: "\xE8",
  Eacute: "\xC9",
  eacute: "\xE9",
  Ecirc: "\xCA",
  ecirc: "\xEA",
  Euml: "\xCB",
  euml: "\xEB",
  Igrave: "\xCC",
  igrave: "\xEC",
  Iacute: "\xCD",
  iacute: "\xED",
  Icirc: "\xCE",
  icirc: "\xEE",
  Iuml: "\xCF",
  iuml: "\xEF",
  ETH: "\xD0",
  eth: "\xF0",
  Ntilde: "\xD1",
  ntilde: "\xF1",
  Ograve: "\xD2",
  ograve: "\xF2",
  Oacute: "\xD3",
  oacute: "\xF3",
  Ocirc: "\xD4",
  ocirc: "\xF4",
  Otilde: "\xD5",
  otilde: "\xF5",
  Ouml: "\xD6",
  ouml: "\xF6",
  Oslash: "\xD8",
  oslash: "\xF8",
  Ugrave: "\xD9",
  ugrave: "\xF9",
  Uacute: "\xDA",
  uacute: "\xFA",
  Ucirc: "\xDB",
  ucirc: "\xFB",
  Uuml: "\xDC",
  uuml: "\xFC",
  Yacute: "\xDD",
  yacute: "\xFD",
  THORN: "\xDE",
  thorn: "\xFE",
  szlig: "\xDF",
  yuml: "\xFF",
  Yuml: "\u0178"
};
var LATIN_EXTENDED = {
  Amacr: "\u0100",
  amacr: "\u0101",
  Abreve: "\u0102",
  abreve: "\u0103",
  Aogon: "\u0104",
  aogon: "\u0105",
  Cacute: "\u0106",
  cacute: "\u0107",
  Ccirc: "\u0108",
  ccirc: "\u0109",
  Cdot: "\u010A",
  cdot: "\u010B",
  Ccaron: "\u010C",
  ccaron: "\u010D",
  Dcaron: "\u010E",
  dcaron: "\u010F",
  Dstrok: "\u0110",
  dstrok: "\u0111",
  Emacr: "\u0112",
  emacr: "\u0113",
  Ecaron: "\u011A",
  ecaron: "\u011B",
  Edot: "\u0116",
  edot: "\u0117",
  Eogon: "\u0118",
  eogon: "\u0119",
  Gcirc: "\u011C",
  gcirc: "\u011D",
  Gbreve: "\u011E",
  gbreve: "\u011F",
  Gdot: "\u0120",
  gdot: "\u0121",
  Gcedil: "\u0122",
  Hcirc: "\u0124",
  hcirc: "\u0125",
  Hstrok: "\u0126",
  hstrok: "\u0127",
  Itilde: "\u0128",
  itilde: "\u0129",
  Imacr: "\u012A",
  imacr: "\u012B",
  Iogon: "\u012E",
  iogon: "\u012F",
  Idot: "\u0130",
  IJlig: "\u0132",
  ijlig: "\u0133",
  Jcirc: "\u0134",
  jcirc: "\u0135",
  Kcedil: "\u0136",
  kcedil: "\u0137",
  kgreen: "\u0138",
  Lacute: "\u0139",
  lacute: "\u013A",
  Lcedil: "\u013B",
  lcedil: "\u013C",
  Lcaron: "\u013D",
  lcaron: "\u013E",
  Lmidot: "\u013F",
  lmidot: "\u0140",
  Lstrok: "\u0141",
  lstrok: "\u0142",
  Nacute: "\u0143",
  nacute: "\u0144",
  Ncaron: "\u0147",
  ncaron: "\u0148",
  Ncedil: "\u0145",
  ncedil: "\u0146",
  ENG: "\u014A",
  eng: "\u014B",
  Omacr: "\u014C",
  omacr: "\u014D",
  Odblac: "\u0150",
  odblac: "\u0151",
  OElig: "\u0152",
  oelig: "\u0153",
  Racute: "\u0154",
  racute: "\u0155",
  Rcaron: "\u0158",
  rcaron: "\u0159",
  Rcedil: "\u0156",
  rcedil: "\u0157",
  Sacute: "\u015A",
  sacute: "\u015B",
  Scirc: "\u015C",
  scirc: "\u015D",
  Scedil: "\u015E",
  scedil: "\u015F",
  Scaron: "\u0160",
  scaron: "\u0161",
  Tcedil: "\u0162",
  tcedil: "\u0163",
  Tcaron: "\u0164",
  tcaron: "\u0165",
  Tstrok: "\u0166",
  tstrok: "\u0167",
  Utilde: "\u0168",
  utilde: "\u0169",
  Umacr: "\u016A",
  umacr: "\u016B",
  Ubreve: "\u016C",
  ubreve: "\u016D",
  Uring: "\u016E",
  uring: "\u016F",
  Udblac: "\u0170",
  udblac: "\u0171",
  Uogon: "\u0172",
  uogon: "\u0173",
  Wcirc: "\u0174",
  wcirc: "\u0175",
  Ycirc: "\u0176",
  ycirc: "\u0177",
  Zacute: "\u0179",
  zacute: "\u017A",
  Zdot: "\u017B",
  zdot: "\u017C",
  Zcaron: "\u017D",
  zcaron: "\u017E"
};
var GREEK = {
  Alpha: "\u0391",
  alpha: "\u03B1",
  Beta: "\u0392",
  beta: "\u03B2",
  Gamma: "\u0393",
  gamma: "\u03B3",
  Delta: "\u0394",
  delta: "\u03B4",
  Epsilon: "\u0395",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  varepsilon: "\u03F5",
  Zeta: "\u0396",
  zeta: "\u03B6",
  Eta: "\u0397",
  eta: "\u03B7",
  Theta: "\u0398",
  theta: "\u03B8",
  thetasym: "\u03D1",
  vartheta: "\u03D1",
  Iota: "\u0399",
  iota: "\u03B9",
  Kappa: "\u039A",
  kappa: "\u03BA",
  kappav: "\u03F0",
  varkappa: "\u03F0",
  Lambda: "\u039B",
  lambda: "\u03BB",
  Mu: "\u039C",
  mu: "\u03BC",
  Nu: "\u039D",
  nu: "\u03BD",
  Xi: "\u039E",
  xi: "\u03BE",
  Omicron: "\u039F",
  omicron: "\u03BF",
  Pi: "\u03A0",
  pi: "\u03C0",
  piv: "\u03D6",
  varpi: "\u03D6",
  Rho: "\u03A1",
  rho: "\u03C1",
  rhov: "\u03F1",
  varrho: "\u03F1",
  Sigma: "\u03A3",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  varsigma: "\u03C2",
  Tau: "\u03A4",
  tau: "\u03C4",
  Upsilon: "\u03A5",
  upsilon: "\u03C5",
  upsi: "\u03C5",
  Upsi: "\u03D2",
  upsih: "\u03D2",
  Phi: "\u03A6",
  phi: "\u03C6",
  phiv: "\u03D5",
  varphi: "\u03D5",
  Chi: "\u03A7",
  chi: "\u03C7",
  Psi: "\u03A8",
  psi: "\u03C8",
  Omega: "\u03A9",
  omega: "\u03C9",
  ohm: "\u03A9",
  Gammad: "\u03DC",
  gammad: "\u03DD",
  digamma: "\u03DD"
};
var CYRILLIC = {
  Afr: "\u{1D504}",
  afr: "\u{1D51E}",
  Acy: "\u0410",
  acy: "\u0430",
  Bcy: "\u0411",
  bcy: "\u0431",
  Vcy: "\u0412",
  vcy: "\u0432",
  Gcy: "\u0413",
  gcy: "\u0433",
  Dcy: "\u0414",
  dcy: "\u0434",
  IEcy: "\u0415",
  iecy: "\u0435",
  IOcy: "\u0401",
  iocy: "\u0451",
  ZHcy: "\u0416",
  zhcy: "\u0436",
  Zcy: "\u0417",
  zcy: "\u0437",
  Icy: "\u0418",
  icy: "\u0438",
  Jcy: "\u0419",
  jcy: "\u0439",
  Kcy: "\u041A",
  kcy: "\u043A",
  Lcy: "\u041B",
  lcy: "\u043B",
  Mcy: "\u041C",
  mcy: "\u043C",
  Ncy: "\u041D",
  ncy: "\u043D",
  Ocy: "\u041E",
  ocy: "\u043E",
  Pcy: "\u041F",
  pcy: "\u043F",
  Rcy: "\u0420",
  rcy: "\u0440",
  Scy: "\u0421",
  scy: "\u0441",
  Tcy: "\u0422",
  tcy: "\u0442",
  Ucy: "\u0423",
  ucy: "\u0443",
  Fcy: "\u0424",
  fcy: "\u0444",
  KHcy: "\u0425",
  khcy: "\u0445",
  TScy: "\u0426",
  tscy: "\u0446",
  CHcy: "\u0427",
  chcy: "\u0447",
  SHcy: "\u0428",
  shcy: "\u0448",
  SHCHcy: "\u0429",
  shchcy: "\u0449",
  HARDcy: "\u042A",
  hardcy: "\u044A",
  Ycy: "\u042B",
  ycy: "\u044B",
  SOFTcy: "\u042C",
  softcy: "\u044C",
  Ecy: "\u042D",
  ecy: "\u044D",
  YUcy: "\u042E",
  yucy: "\u044E",
  YAcy: "\u042F",
  yacy: "\u044F",
  DJcy: "\u0402",
  djcy: "\u0452",
  GJcy: "\u0403",
  gjcy: "\u0453",
  Jukcy: "\u0404",
  jukcy: "\u0454",
  DScy: "\u0405",
  dscy: "\u0455",
  Iukcy: "\u0406",
  iukcy: "\u0456",
  YIcy: "\u0407",
  yicy: "\u0457",
  Jsercy: "\u0408",
  jsercy: "\u0458",
  LJcy: "\u0409",
  ljcy: "\u0459",
  NJcy: "\u040A",
  njcy: "\u045A",
  TSHcy: "\u040B",
  tshcy: "\u045B",
  KJcy: "\u040C",
  kjcy: "\u045C",
  Ubrcy: "\u040E",
  ubrcy: "\u045E",
  DZcy: "\u040F",
  dzcy: "\u045F"
};
var MATH = {
  plus: "+",
  minus: "\u2212",
  mnplus: "\u2213",
  mp: "\u2213",
  pm: "\xB1",
  times: "\xD7",
  div: "\xF7",
  divide: "\xF7",
  sdot: "\u22C5",
  star: "\u2606",
  starf: "\u2605",
  bigstar: "\u2605",
  lowast: "\u2217",
  ast: "*",
  midast: "*",
  compfn: "\u2218",
  smallcircle: "\u2218",
  bullet: "\u2022",
  bull: "\u2022",
  nbsp: "\xA0",
  hellip: "\u2026",
  mldr: "\u2026",
  prime: "\u2032",
  Prime: "\u2033",
  tprime: "\u2034",
  bprime: "\u2035",
  backprime: "\u2035",
  minus: "\u2212",
  minusd: "\u2238",
  dotminus: "\u2238",
  plusdo: "\u2214",
  dotplus: "\u2214",
  plusmn: "\xB1",
  minusplus: "\u2213",
  mnplus: "\u2213",
  mp: "\u2213",
  setminus: "\u2216",
  smallsetminus: "\u2216",
  Backslash: "\u2216",
  setmn: "\u2216",
  ssetmn: "\u2216",
  lowbar: "_",
  verbar: "|",
  vert: "|",
  VerticalLine: "|",
  colon: ":",
  Colon: "\u2237",
  Proportion: "\u2237",
  ratio: "\u2236",
  equals: "=",
  ne: "\u2260",
  nequiv: "\u2262",
  equiv: "\u2261",
  Congruent: "\u2261",
  sim: "\u223C",
  thicksim: "\u223C",
  thksim: "\u223C",
  sime: "\u2243",
  simeq: "\u2243",
  TildeEqual: "\u2243",
  asymp: "\u2248",
  approx: "\u2248",
  thickapprox: "\u2248",
  thkap: "\u2248",
  TildeTilde: "\u2248",
  ncong: "\u2247",
  cong: "\u2245",
  TildeFullEqual: "\u2245",
  asympeq: "\u224D",
  CupCap: "\u224D",
  bump: "\u224E",
  Bumpeq: "\u224E",
  HumpDownHump: "\u224E",
  bumpe: "\u224F",
  bumpeq: "\u224F",
  HumpEqual: "\u224F",
  dotminus: "\u2238",
  minusd: "\u2238",
  plusdo: "\u2214",
  dotplus: "\u2214",
  le: "\u2264",
  LessEqual: "\u2264",
  ge: "\u2265",
  GreaterEqual: "\u2265",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  greater: ">",
  less: "<"
};
var MATH_ADVANCED = {
  alefsym: "\u2135",
  aleph: "\u2135",
  beth: "\u2136",
  gimel: "\u2137",
  daleth: "\u2138",
  forall: "\u2200",
  ForAll: "\u2200",
  part: "\u2202",
  PartialD: "\u2202",
  exist: "\u2203",
  Exists: "\u2203",
  nexist: "\u2204",
  nexists: "\u2204",
  empty: "\u2205",
  emptyset: "\u2205",
  emptyv: "\u2205",
  varnothing: "\u2205",
  nabla: "\u2207",
  Del: "\u2207",
  isin: "\u2208",
  isinv: "\u2208",
  in: "\u2208",
  Element: "\u2208",
  notin: "\u2209",
  notinva: "\u2209",
  ni: "\u220B",
  niv: "\u220B",
  SuchThat: "\u220B",
  ReverseElement: "\u220B",
  notni: "\u220C",
  notniva: "\u220C",
  prod: "\u220F",
  Product: "\u220F",
  coprod: "\u2210",
  Coproduct: "\u2210",
  sum: "\u2211",
  Sum: "\u2211",
  minus: "\u2212",
  mp: "\u2213",
  plusdo: "\u2214",
  dotplus: "\u2214",
  setminus: "\u2216",
  lowast: "\u2217",
  radic: "\u221A",
  Sqrt: "\u221A",
  prop: "\u221D",
  propto: "\u221D",
  Proportional: "\u221D",
  varpropto: "\u221D",
  infin: "\u221E",
  infintie: "\u29DD",
  ang: "\u2220",
  angle: "\u2220",
  angmsd: "\u2221",
  measuredangle: "\u2221",
  angsph: "\u2222",
  mid: "\u2223",
  VerticalBar: "\u2223",
  nmid: "\u2224",
  nsmid: "\u2224",
  npar: "\u2226",
  parallel: "\u2225",
  spar: "\u2225",
  nparallel: "\u2226",
  nspar: "\u2226",
  and: "\u2227",
  wedge: "\u2227",
  or: "\u2228",
  vee: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  Integral: "\u222B",
  conint: "\u222E",
  ContourIntegral: "\u222E",
  Conint: "\u222F",
  DoubleContourIntegral: "\u222F",
  Cconint: "\u2230",
  there4: "\u2234",
  therefore: "\u2234",
  Therefore: "\u2234",
  becaus: "\u2235",
  because: "\u2235",
  Because: "\u2235",
  ratio: "\u2236",
  Proportion: "\u2237",
  minusd: "\u2238",
  dotminus: "\u2238",
  mDDot: "\u223A",
  homtht: "\u223B",
  sim: "\u223C",
  bsimg: "\u223D",
  backsim: "\u223D",
  ac: "\u223E",
  mstpos: "\u223E",
  acd: "\u223F",
  VerticalTilde: "\u2240",
  wr: "\u2240",
  wreath: "\u2240",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsimeq: "\u2244",
  ncong: "\u2247",
  simne: "\u2246",
  ncongdot: "\u2A6D\u0338",
  ngsim: "\u2275",
  nsim: "\u2241",
  napprox: "\u2249",
  nap: "\u2249",
  ngeq: "\u2271",
  nge: "\u2271",
  nleq: "\u2270",
  nle: "\u2270",
  ngtr: "\u226F",
  ngt: "\u226F",
  nless: "\u226E",
  nlt: "\u226E",
  nprec: "\u2280",
  npr: "\u2280",
  nsucc: "\u2281",
  nsc: "\u2281"
};
var ARROWS = {
  larr: "\u2190",
  leftarrow: "\u2190",
  LeftArrow: "\u2190",
  uarr: "\u2191",
  uparrow: "\u2191",
  UpArrow: "\u2191",
  rarr: "\u2192",
  rightarrow: "\u2192",
  RightArrow: "\u2192",
  darr: "\u2193",
  downarrow: "\u2193",
  DownArrow: "\u2193",
  harr: "\u2194",
  leftrightarrow: "\u2194",
  LeftRightArrow: "\u2194",
  varr: "\u2195",
  updownarrow: "\u2195",
  UpDownArrow: "\u2195",
  nwarr: "\u2196",
  nwarrow: "\u2196",
  UpperLeftArrow: "\u2196",
  nearr: "\u2197",
  nearrow: "\u2197",
  UpperRightArrow: "\u2197",
  searr: "\u2198",
  searrow: "\u2198",
  LowerRightArrow: "\u2198",
  swarr: "\u2199",
  swarrow: "\u2199",
  LowerLeftArrow: "\u2199",
  lArr: "\u21D0",
  Leftarrow: "\u21D0",
  uArr: "\u21D1",
  Uparrow: "\u21D1",
  rArr: "\u21D2",
  Rightarrow: "\u21D2",
  dArr: "\u21D3",
  Downarrow: "\u21D3",
  hArr: "\u21D4",
  Leftrightarrow: "\u21D4",
  iff: "\u21D4",
  vArr: "\u21D5",
  Updownarrow: "\u21D5",
  lAarr: "\u21DA",
  Lleftarrow: "\u21DA",
  rAarr: "\u21DB",
  Rrightarrow: "\u21DB",
  lrarr: "\u21C6",
  leftrightarrows: "\u21C6",
  rlarr: "\u21C4",
  rightleftarrows: "\u21C4",
  lrhar: "\u21CB",
  leftrightharpoons: "\u21CB",
  ReverseEquilibrium: "\u21CB",
  rlhar: "\u21CC",
  rightleftharpoons: "\u21CC",
  Equilibrium: "\u21CC",
  udarr: "\u21C5",
  UpArrowDownArrow: "\u21C5",
  duarr: "\u21F5",
  DownArrowUpArrow: "\u21F5",
  llarr: "\u21C7",
  leftleftarrows: "\u21C7",
  rrarr: "\u21C9",
  rightrightarrows: "\u21C9",
  ddarr: "\u21CA",
  downdownarrows: "\u21CA",
  har: "\u21BD",
  lhard: "\u21BD",
  leftharpoondown: "\u21BD",
  lharu: "\u21BC",
  leftharpoonup: "\u21BC",
  rhard: "\u21C1",
  rightharpoondown: "\u21C1",
  rharu: "\u21C0",
  rightharpoonup: "\u21C0",
  lsh: "\u21B0",
  Lsh: "\u21B0",
  rsh: "\u21B1",
  Rsh: "\u21B1",
  ldsh: "\u21B2",
  rdsh: "\u21B3",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  crarr: "\u21B5",
  nwarrow: "\u2196",
  nearrow: "\u2197",
  searrow: "\u2198",
  swarrow: "\u2199",
  nleftarrow: "\u219A",
  nleftrightarrow: "\u21AE",
  nrightarrow: "\u219B",
  nrarr: "\u219B",
  larrtl: "\u21A2",
  rarrtl: "\u21A3",
  leftarrowtail: "\u21A2",
  rightarrowtail: "\u21A3",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  Larr: "\u219E",
  Rarr: "\u21A0",
  larrhk: "\u21A9",
  rarrhk: "\u21AA",
  larrlp: "\u21AB",
  looparrowleft: "\u21AB",
  rarrlp: "\u21AC",
  looparrowright: "\u21AC",
  harrw: "\u21AD",
  leftrightsquigarrow: "\u21AD",
  nrarrw: "\u219D\u0338",
  rarrw: "\u219D",
  rightsquigarrow: "\u219D",
  larrbfs: "\u291F",
  rarrbfs: "\u2920",
  nvHarr: "\u2904",
  nvlArr: "\u2902",
  nvrArr: "\u2903",
  larrfs: "\u291D",
  rarrfs: "\u291E",
  Map: "\u2905",
  larrsim: "\u2973",
  rarrsim: "\u2974",
  harrcir: "\u2948",
  Uarrocir: "\u2949",
  lurdshar: "\u294A",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  rdldhar: "\u2969",
  lrhard: "\u296D",
  rlhar: "\u21CC",
  uharr: "\u21BE",
  uharl: "\u21BF",
  dharr: "\u21C2",
  dharl: "\u21C3",
  Uarr: "\u219F",
  Darr: "\u21A1",
  zigrarr: "\u21DD",
  nwArr: "\u21D6",
  neArr: "\u21D7",
  seArr: "\u21D8",
  swArr: "\u21D9",
  nharr: "\u21AE",
  nhArr: "\u21CE",
  nlarr: "\u219A",
  nlArr: "\u21CD",
  nrarr: "\u219B",
  nrArr: "\u21CF",
  larrb: "\u21E4",
  LeftArrowBar: "\u21E4",
  rarrb: "\u21E5",
  RightArrowBar: "\u21E5"
};
var SHAPES = {
  square: "\u25A1",
  Square: "\u25A1",
  squ: "\u25A1",
  squf: "\u25AA",
  squarf: "\u25AA",
  blacksquar: "\u25AA",
  blacksquare: "\u25AA",
  FilledVerySmallSquare: "\u25AA",
  blk34: "\u2593",
  blk12: "\u2592",
  blk14: "\u2591",
  block: "\u2588",
  srect: "\u25AD",
  rect: "\u25AD",
  sdot: "\u22C5",
  sdotb: "\u22A1",
  dotsquare: "\u22A1",
  triangle: "\u25B5",
  tri: "\u25B5",
  trine: "\u25B5",
  utri: "\u25B5",
  triangledown: "\u25BF",
  dtri: "\u25BF",
  tridown: "\u25BF",
  triangleleft: "\u25C3",
  ltri: "\u25C3",
  triangleright: "\u25B9",
  rtri: "\u25B9",
  blacktriangle: "\u25B4",
  utrif: "\u25B4",
  blacktriangledown: "\u25BE",
  dtrif: "\u25BE",
  blacktriangleleft: "\u25C2",
  ltrif: "\u25C2",
  blacktriangleright: "\u25B8",
  rtrif: "\u25B8",
  loz: "\u25CA",
  lozenge: "\u25CA",
  blacklozenge: "\u29EB",
  lozf: "\u29EB",
  bigcirc: "\u25EF",
  xcirc: "\u25EF",
  circ: "\u02C6",
  Circle: "\u25CB",
  cir: "\u25CB",
  o: "\u25CB",
  bullet: "\u2022",
  bull: "\u2022",
  hellip: "\u2026",
  mldr: "\u2026",
  nldr: "\u2025",
  boxh: "\u2500",
  HorizontalLine: "\u2500",
  boxv: "\u2502",
  boxdr: "\u250C",
  boxdl: "\u2510",
  boxur: "\u2514",
  boxul: "\u2518",
  boxvr: "\u251C",
  boxvl: "\u2524",
  boxhd: "\u252C",
  boxhu: "\u2534",
  boxvh: "\u253C",
  boxH: "\u2550",
  boxV: "\u2551",
  boxdR: "\u2552",
  boxDr: "\u2553",
  boxDR: "\u2554",
  boxDl: "\u2555",
  boxdL: "\u2556",
  boxDL: "\u2557",
  boxuR: "\u2558",
  boxUr: "\u2559",
  boxUR: "\u255A",
  boxUl: "\u255C",
  boxuL: "\u255B",
  boxUL: "\u255D",
  boxvR: "\u255E",
  boxVr: "\u255F",
  boxVR: "\u2560",
  boxVl: "\u2562",
  boxvL: "\u2561",
  boxVL: "\u2563",
  boxHd: "\u2564",
  boxhD: "\u2565",
  boxHD: "\u2566",
  boxHu: "\u2567",
  boxhU: "\u2568",
  boxHU: "\u2569",
  boxvH: "\u256A",
  boxVh: "\u256B",
  boxVH: "\u256C"
};
var PUNCTUATION = {
  excl: "!",
  iexcl: "\xA1",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  nbsp: "\xA0",
  comma: ",",
  period: ".",
  colon: ":",
  semi: ";",
  vert: "|",
  Verbar: "\u2016",
  verbar: "|",
  dblac: "\u02DD",
  circ: "\u02C6",
  caron: "\u02C7",
  breve: "\u02D8",
  dot: "\u02D9",
  ring: "\u02DA",
  ogon: "\u02DB",
  tilde: "\u02DC",
  DiacriticalGrave: "`",
  DiacriticalAcute: "\xB4",
  DiacriticalTilde: "\u02DC",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  grave: "`",
  acute: "\xB4"
};
var CURRENCY = {
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  euro: "\u20AC",
  dollar: "$",
  euro: "\u20AC",
  fnof: "\u0192",
  inr: "\u20B9",
  af: "\u060B",
  birr: "\u1265\u122D",
  peso: "\u20B1",
  rub: "\u20BD",
  won: "\u20A9",
  yuan: "\xA5",
  cedil: "\xB8"
};
var FRACTIONS = {
  frac12: "\xBD",
  half: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044"
};
var MISC_SYMBOLS = {
  trade: "\u2122",
  TRADE: "\u2122",
  telrec: "\u2315",
  target: "\u2316",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  urcorn: "\u231D",
  urcorner: "\u231D",
  dlcorn: "\u231E",
  llcorner: "\u231E",
  drcorn: "\u231F",
  lrcorner: "\u231F",
  intercal: "\u22BA",
  intcal: "\u22BA",
  oplus: "\u2295",
  CirclePlus: "\u2295",
  ominus: "\u2296",
  CircleMinus: "\u2296",
  otimes: "\u2297",
  CircleTimes: "\u2297",
  osol: "\u2298",
  odot: "\u2299",
  CircleDot: "\u2299",
  oast: "\u229B",
  circledast: "\u229B",
  odash: "\u229D",
  circleddash: "\u229D",
  ocirc: "\u229A",
  circledcirc: "\u229A",
  boxplus: "\u229E",
  plusb: "\u229E",
  boxminus: "\u229F",
  minusb: "\u229F",
  boxtimes: "\u22A0",
  timesb: "\u22A0",
  boxdot: "\u22A1",
  sdotb: "\u22A1",
  veebar: "\u22BB",
  vee: "\u2228",
  barvee: "\u22BD",
  and: "\u2227",
  wedge: "\u2227",
  Cap: "\u22D2",
  Cup: "\u22D3",
  Fork: "\u22D4",
  pitchfork: "\u22D4",
  epar: "\u22D5",
  ltlarr: "\u2976",
  nvap: "\u224D\u20D2",
  nvsim: "\u223C\u20D2",
  nvge: "\u2265\u20D2",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvgt: ">\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrtrie: "\u22B5\u20D2",
  Vdash: "\u22A9",
  dashv: "\u22A3",
  vDash: "\u22A8",
  Vdash: "\u22A9",
  Vvdash: "\u22AA",
  nvdash: "\u22AC",
  nvDash: "\u22AD",
  nVdash: "\u22AE",
  nVDash: "\u22AF"
};
var ALL_ENTITIES = {
  ...BASIC_LATIN,
  ...LATIN_ACCENTS,
  ...LATIN_EXTENDED,
  ...GREEK,
  ...CYRILLIC,
  ...MATH,
  ...MATH_ADVANCED,
  ...ARROWS,
  ...SHAPES,
  ...PUNCTUATION,
  ...CURRENCY,
  ...FRACTIONS,
  ...MISC_SYMBOLS
};
var XML = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"'
};
var COMMON_HTML = {
  nbsp: "\xA0",
  copy: "\xA9",
  reg: "\xAE",
  trade: "\u2122",
  mdash: "\u2014",
  ndash: "\u2013",
  hellip: "\u2026",
  laquo: "\xAB",
  raquo: "\xBB",
  lsquo: "\u2018",
  rsquo: "\u2019",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bull: "\u2022",
  para: "\xB6",
  sect: "\xA7",
  deg: "\xB0",
  frac12: "\xBD",
  frac14: "\xBC",
  frac34: "\xBE"
};

// ../node_modules/.pnpm/@nodable+entities@2.1.0/node_modules/@nodable/entities/src/EntityDecoder.js
var SPECIAL_CHARS = new Set("!?\\\\/[]$%{}^&*()<>|+");
function validateEntityName(name) {
  if (name[0] === "#") {
    throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${name}"`);
  }
  for (const ch of name) {
    if (SPECIAL_CHARS.has(ch)) {
      throw new Error(`[EntityReplacer] Invalid character '${ch}' in entity name: "${name}"`);
    }
  }
  return name;
}
function mergeEntityMaps(...maps) {
  const out = /* @__PURE__ */ Object.create(null);
  for (const map2 of maps) {
    if (!map2) continue;
    for (const key of Object.keys(map2)) {
      const raw = map2[key];
      if (typeof raw === "string") {
        out[key] = raw;
      } else if (raw && typeof raw === "object" && raw.val !== void 0) {
        const val = raw.val;
        if (typeof val === "string") {
          out[key] = val;
        }
      }
    }
  }
  return out;
}
var LIMIT_TIER_EXTERNAL = "external";
var LIMIT_TIER_BASE = "base";
var LIMIT_TIER_ALL = "all";
function parseLimitTiers(raw) {
  if (!raw || raw === LIMIT_TIER_EXTERNAL) return /* @__PURE__ */ new Set([LIMIT_TIER_EXTERNAL]);
  if (raw === LIMIT_TIER_ALL) return /* @__PURE__ */ new Set([LIMIT_TIER_ALL]);
  if (raw === LIMIT_TIER_BASE) return /* @__PURE__ */ new Set([LIMIT_TIER_BASE]);
  if (Array.isArray(raw)) return new Set(raw);
  return /* @__PURE__ */ new Set([LIMIT_TIER_EXTERNAL]);
}
var NCR_LEVEL = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 });
var XML10_ALLOWED_C0 = /* @__PURE__ */ new Set([9, 10, 13]);
function parseNCRConfig(ncr) {
  var _a, _b;
  if (!ncr) {
    return { xmlVersion: 1, onLevel: NCR_LEVEL.allow, nullLevel: NCR_LEVEL.remove };
  }
  const xmlVersion = ncr.xmlVersion === 1.1 ? 1.1 : 1;
  const onLevel = (_a = NCR_LEVEL[ncr.onNCR]) != null ? _a : NCR_LEVEL.allow;
  const nullLevel = (_b = NCR_LEVEL[ncr.nullNCR]) != null ? _b : NCR_LEVEL.remove;
  const clampedNull = Math.max(nullLevel, NCR_LEVEL.remove);
  return { xmlVersion, onLevel, nullLevel: clampedNull };
}
var EntityDecoder = class {
  /**
   * @param {object} [options]
   * @param {object|null}  [options.namedEntities]        — extra named entities merged into base map
   * @param {object}  [options.limit]                 — security limits
   * @param {number}       [options.limit.maxTotalExpansions=0]  — 0 = unlimited
   * @param {number}       [options.limit.maxExpandedLength=0]   — 0 = unlimited
   * @param {'external'|'base'|'all'|string[]} [options.limit.applyLimitsTo='external']
   *   Which entity tiers count against the security limits:
   *   - 'external' (default) — only input/runtime + persistent external entities
   *   - 'base'               — only DEFAULT_XML_ENTITIES + namedEntities
   *   - 'all'                — every entity regardless of tier
   *   - string[]             — explicit combination, e.g. ['external', 'base']
   * @param {((resolved: string, original: string) => string)|null} [options.postCheck=null]
   * @param {string[]} [options.remove=[]] — entity names (e.g. ['nbsp', '#13']) to delete (replace with empty string)
   * @param {string[]} [options.leave=[]]  — entity names to keep as literal (unchanged in output)
   * @param {object}   [options.ncr]       — Numeric Character Reference controls
   * @param {1.0|1.1}  [options.ncr.xmlVersion=1.0]
   *   XML version governing which codepoint ranges are restricted:
   *   - 1.0 — C0 controls U+0001–U+001F (except U+0009/000A/000D) are prohibited
   *   - 1.1 — C0 controls are allowed when written as NCRs; C1 (U+007F–U+009F) decoded as-is
   * @param {'allow'|'leave'|'remove'|'throw'} [options.ncr.onNCR='allow']
   *   Base action for numeric references. Severity order: allow < leave < remove < throw.
   *   For codepoint ranges that carry a minimum level (surrogates → remove, XML 1.0 C0 → remove),
   *   the effective action is max(onNCR, rangeMinimum).
   * @param {'remove'|'throw'} [options.ncr.nullNCR='remove']
   *   Action for U+0000 (null). 'allow' and 'leave' are clamped to 'remove' since null is never safe.
   */
  constructor(options = {}) {
    var _a, _b;
    this._limit = options.limit || {};
    this._maxTotalExpansions = this._limit.maxTotalExpansions || 0;
    this._maxExpandedLength = this._limit.maxExpandedLength || 0;
    this._postCheck = typeof options.postCheck === "function" ? options.postCheck : (r) => r;
    this._limitTiers = parseLimitTiers((_a = this._limit.applyLimitsTo) != null ? _a : LIMIT_TIER_EXTERNAL);
    this._numericAllowed = (_b = options.numericAllowed) != null ? _b : true;
    this._baseMap = mergeEntityMaps(XML, options.namedEntities || null);
    this._externalMap = /* @__PURE__ */ Object.create(null);
    this._inputMap = /* @__PURE__ */ Object.create(null);
    this._totalExpansions = 0;
    this._expandedLength = 0;
    this._removeSet = new Set(options.remove && Array.isArray(options.remove) ? options.remove : []);
    this._leaveSet = new Set(options.leave && Array.isArray(options.leave) ? options.leave : []);
    const ncrCfg = parseNCRConfig(options.ncr);
    this._ncrXmlVersion = ncrCfg.xmlVersion;
    this._ncrOnLevel = ncrCfg.onLevel;
    this._ncrNullLevel = ncrCfg.nullLevel;
  }
  // -------------------------------------------------------------------------
  // Persistent external entity registration
  // -------------------------------------------------------------------------
  /**
   * Replace the full set of persistent external entities.
   * All keys are validated — throws on invalid characters.
   * @param {Record<string, string | { regex?: RegExp, val: string }>} map
   */
  setExternalEntities(map2) {
    if (map2) {
      for (const key of Object.keys(map2)) {
        validateEntityName(key);
      }
    }
    this._externalMap = mergeEntityMaps(map2);
  }
  /**
   * Add a single persistent external entity.
   * @param {string} key
   * @param {string} value
   */
  addExternalEntity(key, value) {
    validateEntityName(key);
    if (typeof value === "string" && value.indexOf("&") === -1) {
      this._externalMap[key] = value;
    }
  }
  // -------------------------------------------------------------------------
  // Input / runtime entity registration (per document)
  // -------------------------------------------------------------------------
  /**
   * Inject DOCTYPE entities for the current document.
   * Also resets per-document expansion counters.
   * @param {Record<string, string | { regx?: RegExp, regex?: RegExp, val: string }>} map
   */
  addInputEntities(map2) {
    this._totalExpansions = 0;
    this._expandedLength = 0;
    this._inputMap = mergeEntityMaps(map2);
  }
  // -------------------------------------------------------------------------
  // Per-document reset
  // -------------------------------------------------------------------------
  /**
   * Wipe input/runtime entities and reset counters.
   * Call this before processing each new document.
   * @returns {this}
   */
  reset() {
    this._inputMap = /* @__PURE__ */ Object.create(null);
    this._totalExpansions = 0;
    this._expandedLength = 0;
    return this;
  }
  // -------------------------------------------------------------------------
  // XML version (can be set after construction, e.g. once parser reads <?xml?>)
  // -------------------------------------------------------------------------
  /**
   * Update the XML version used for NCR classification.
   * Call this as soon as the document's `<?xml version="...">` declaration is parsed.
   * @param {1.0|1.1|number} version
   */
  setXmlVersion(version) {
    this._ncrXmlVersion = version === 1.1 ? 1.1 : 1;
  }
  // -------------------------------------------------------------------------
  // Primary API
  // -------------------------------------------------------------------------
  /**
   * Replace all entity references in `str` in a single pass.
   *
   * @param {string} str
   * @returns {string}
   */
  decode(str) {
    if (typeof str !== "string" || str.length === 0) return str;
    const original = str;
    const chunks = [];
    const len = str.length;
    let last = 0;
    let i = 0;
    const limitExpansions = this._maxTotalExpansions > 0;
    const limitLength = this._maxExpandedLength > 0;
    const checkLimits = limitExpansions || limitLength;
    while (i < len) {
      if (str.charCodeAt(i) !== 38) {
        i++;
        continue;
      }
      let j = i + 1;
      while (j < len && str.charCodeAt(j) !== 59 && j - i <= 32) j++;
      if (j >= len || str.charCodeAt(j) !== 59) {
        i++;
        continue;
      }
      const token = str.slice(i + 1, j);
      if (token.length === 0) {
        i++;
        continue;
      }
      let replacement;
      let tier;
      if (this._removeSet.has(token)) {
        replacement = "";
        if (tier === void 0) {
          tier = LIMIT_TIER_EXTERNAL;
        }
      } else if (this._leaveSet.has(token)) {
        i++;
        continue;
      } else if (token.charCodeAt(0) === 35) {
        const ncrResult = this._resolveNCR(token);
        if (ncrResult === void 0) {
          i++;
          continue;
        }
        replacement = ncrResult;
        tier = LIMIT_TIER_BASE;
      } else {
        const resolved = this._resolveName(token);
        replacement = resolved == null ? void 0 : resolved.value;
        tier = resolved == null ? void 0 : resolved.tier;
      }
      if (replacement === void 0) {
        i++;
        continue;
      }
      if (i > last) chunks.push(str.slice(last, i));
      chunks.push(replacement);
      last = j + 1;
      i = last;
      if (checkLimits && this._tierCounts(tier)) {
        if (limitExpansions) {
          this._totalExpansions++;
          if (this._totalExpansions > this._maxTotalExpansions) {
            throw new Error(
              `[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`
            );
          }
        }
        if (limitLength) {
          const delta = replacement.length - (token.length + 2);
          if (delta > 0) {
            this._expandedLength += delta;
            if (this._expandedLength > this._maxExpandedLength) {
              throw new Error(
                `[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`
              );
            }
          }
        }
      }
    }
    if (last < len) chunks.push(str.slice(last));
    const result = chunks.length === 0 ? str : chunks.join("");
    return this._postCheck(result, original);
  }
  // -------------------------------------------------------------------------
  // Private: limit tier check
  // -------------------------------------------------------------------------
  /**
   * Returns true if a resolved entity of the given tier should count
   * against the expansion/length limits.
   * @param {string} tier  — LIMIT_TIER_EXTERNAL | LIMIT_TIER_BASE
   * @returns {boolean}
   */
  _tierCounts(tier) {
    if (this._limitTiers.has(LIMIT_TIER_ALL)) return true;
    return this._limitTiers.has(tier);
  }
  // -------------------------------------------------------------------------
  // Private: entity resolution
  // -------------------------------------------------------------------------
  /**
   * Resolve a named entity token (without & and ;).
   * Priority: inputMap > externalMap > baseMap
   * Returns the resolved value tagged with its limit tier.
   *
   * @param {string} name
   * @returns {{ value: string, tier: string }|undefined}
   */
  _resolveName(name) {
    if (name in this._inputMap) return { value: this._inputMap[name], tier: LIMIT_TIER_EXTERNAL };
    if (name in this._externalMap) return { value: this._externalMap[name], tier: LIMIT_TIER_EXTERNAL };
    if (name in this._baseMap) return { value: this._baseMap[name], tier: LIMIT_TIER_BASE };
    return void 0;
  }
  /**
   * Classify a codepoint and return the minimum action level that must be applied.
   * Returns -1 when no minimum is imposed (normal allow path).
   *
   * Ranges checked (in priority order):
   *   1. U+0000            — null, governed by nullNCR (always ≥ remove)
   *   2. U+D800–U+DFFF     — surrogates, always prohibited (min: remove)
   *   3. U+0001–U+001F \ {0x09,0x0A,0x0D}  — XML 1.0 restricted C0 (min: remove)
   *      (skipped in XML 1.1 — C0 controls are allowed when written as NCRs)
   *
   * @param {number} cp  — codepoint
   * @returns {number}   — minimum NCR_LEVEL value, or -1 for no restriction
   */
  _classifyNCR(cp) {
    if (cp === 0) return this._ncrNullLevel;
    if (cp >= 55296 && cp <= 57343) return NCR_LEVEL.remove;
    if (this._ncrXmlVersion === 1) {
      if (cp >= 1 && cp <= 31 && !XML10_ALLOWED_C0.has(cp)) return NCR_LEVEL.remove;
    }
    return -1;
  }
  /**
   * Execute a resolved NCR action.
   *
   * @param {number} action   — NCR_LEVEL value
   * @param {string} token    — raw token (e.g. '#38') for error messages
   * @param {number} cp       — codepoint, used only for error messages
   * @returns {string|undefined}
   *   - decoded character string  → 'allow'
   *   - ''                        → 'remove'
   *   - undefined                 → 'leave' (caller must skip past '&' only)
   *   - throws Error              → 'throw'
   */
  _applyNCRAction(action, token, cp) {
    switch (action) {
      case NCR_LEVEL.allow:
        return String.fromCodePoint(cp);
      case NCR_LEVEL.remove:
        return "";
      case NCR_LEVEL.leave:
        return void 0;
      // signal: keep literal
      case NCR_LEVEL.throw:
        throw new Error(
          `[EntityDecoder] Prohibited numeric character reference &${token}; (U+${cp.toString(16).toUpperCase().padStart(4, "0")})`
        );
      default:
        return String.fromCodePoint(cp);
    }
  }
  /**
   * Full NCR resolution pipeline for a numeric token.
   *
   * Steps:
   *   1. Parse the codepoint (decimal or hex).
   *   2. Validate the raw codepoint range (NaN, <0, >0x10FFFF).
   *   3. If numericAllowed is false and no minimum restriction applies → leave as-is.
   *   4. Classify the codepoint to find the minimum required action level.
   *   5. Resolve effective action = max(onNCR, minimum).
   *   6. Apply and return.
   *
   * @param {string} token  — e.g. '#38', '#x26', '#X26'
   * @returns {string|undefined}
   *   - string (incl. '')  — replacement ('' = remove)
   *   - undefined          — leave original &token; as-is
   */
  _resolveNCR(token) {
    const second = token.charCodeAt(1);
    let cp;
    if (second === 120 || second === 88) {
      cp = parseInt(token.slice(2), 16);
    } else {
      cp = parseInt(token.slice(1), 10);
    }
    if (Number.isNaN(cp) || cp < 0 || cp > 1114111) return void 0;
    const minimum = this._classifyNCR(cp);
    if (!this._numericAllowed && minimum < NCR_LEVEL.remove) return void 0;
    const effective = minimum === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, minimum);
    return this._applyNCRAction(effective, token, cp);
  }
};

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var defaultOnDangerousProperty = (name) => {
  if (DANGEROUS_PROPERTY_NAMES.includes(name)) {
    return "__" + name;
  }
  return name;
};
var defaultOptions2 = {
  preserveOrder: false,
  attributeNamePrefix: "@_",
  attributesGroupName: false,
  textNodeName: "#text",
  ignoreAttributes: true,
  removeNSPrefix: false,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: false,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
  //Trim string values of tag and attributes
  cdataPropName: false,
  numberParseOptions: {
    hex: true,
    leadingZeros: true,
    eNotation: true
  },
  tagValueProcessor: function(tagName, val) {
    return val;
  },
  attributeValueProcessor: function(attrName, val) {
    return val;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: false,
  isArray: () => false,
  commentPropName: false,
  unpairedTags: [],
  processEntities: true,
  htmlEntities: false,
  entityDecoder: null,
  ignoreDeclaration: false,
  ignorePiTags: false,
  transformTagName: false,
  transformAttributeName: false,
  updateTag: function(tagName, jPath, attrs) {
    return tagName;
  },
  // skipEmptyListItem: false
  captureMetaData: false,
  maxNestedTags: 100,
  strictReservedNames: true,
  jPath: true,
  // if true, pass jPath string to callbacks; if false, pass matcher instance
  onDangerousProperty: defaultOnDangerousProperty
};
function validatePropertyName(propertyName, optionName) {
  if (typeof propertyName !== "string") {
    return;
  }
  const normalized = propertyName.toLowerCase();
  if (DANGEROUS_PROPERTY_NAMES.some((dangerous) => normalized === dangerous.toLowerCase())) {
    throw new Error(
      `[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`
    );
  }
  if (criticalProperties.some((dangerous) => normalized === dangerous.toLowerCase())) {
    throw new Error(
      `[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`
    );
  }
}
function normalizeProcessEntities(value, htmlEntities) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (typeof value === "boolean") {
    return {
      enabled: value,
      // true or false
      maxEntitySize: 1e4,
      maxExpansionDepth: 1e4,
      maxTotalExpansions: Infinity,
      maxExpandedLength: 1e5,
      maxEntityCount: 1e3,
      allowedTags: null,
      tagFilter: null,
      appliesTo: "all"
    };
  }
  if (typeof value === "object" && value !== null) {
    return {
      enabled: value.enabled !== false,
      maxEntitySize: Math.max(1, (_a = value.maxEntitySize) != null ? _a : 1e4),
      maxExpansionDepth: Math.max(1, (_b = value.maxExpansionDepth) != null ? _b : 1e4),
      maxTotalExpansions: Math.max(1, (_c = value.maxTotalExpansions) != null ? _c : Infinity),
      maxExpandedLength: Math.max(1, (_d = value.maxExpandedLength) != null ? _d : 1e5),
      maxEntityCount: Math.max(1, (_e = value.maxEntityCount) != null ? _e : 1e3),
      allowedTags: (_f = value.allowedTags) != null ? _f : null,
      tagFilter: (_g = value.tagFilter) != null ? _g : null,
      appliesTo: (_h = value.appliesTo) != null ? _h : "all"
    };
  }
  return normalizeProcessEntities(true);
}
var buildOptions = function(options) {
  const built = Object.assign({}, defaultOptions2, options);
  const propertyNameOptions = [
    { value: built.attributeNamePrefix, name: "attributeNamePrefix" },
    { value: built.attributesGroupName, name: "attributesGroupName" },
    { value: built.textNodeName, name: "textNodeName" },
    { value: built.cdataPropName, name: "cdataPropName" },
    { value: built.commentPropName, name: "commentPropName" }
  ];
  for (const { value, name } of propertyNameOptions) {
    if (value) {
      validatePropertyName(value, name);
    }
  }
  if (built.onDangerousProperty === null) {
    built.onDangerousProperty = defaultOnDangerousProperty;
  }
  built.processEntities = normalizeProcessEntities(built.processEntities, built.htmlEntities);
  built.unpairedTagsSet = new Set(built.unpairedTags);
  if (built.stopNodes && Array.isArray(built.stopNodes)) {
    built.stopNodes = built.stopNodes.map((node) => {
      if (typeof node === "string" && node.startsWith("*.")) {
        return ".." + node.substring(2);
      }
      return node;
    });
  }
  return built;
};

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var METADATA_SYMBOL;
if (typeof Symbol !== "function") {
  METADATA_SYMBOL = "@@xmlMetadata";
} else {
  METADATA_SYMBOL = /* @__PURE__ */ Symbol("XML Node Metadata");
}
var XmlNode = class {
  constructor(tagname) {
    this.tagname = tagname;
    this.child = [];
    this[":@"] = /* @__PURE__ */ Object.create(null);
  }
  add(key, val) {
    if (key === "__proto__") key = "#__proto__";
    this.child.push({ [key]: val });
  }
  addChild(node, startIndex) {
    if (node.tagname === "__proto__") node.tagname = "#__proto__";
    if (node[":@"] && Object.keys(node[":@"]).length > 0) {
      this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
    } else {
      this.child.push({ [node.tagname]: node.child });
    }
    if (startIndex !== void 0) {
      this.child[this.child.length - 1][METADATA_SYMBOL] = { startIndex };
    }
  }
  /** symbol used for metadata */
  static getMetaDataSymbol() {
    return METADATA_SYMBOL;
  }
};

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var DocTypeReader = class {
  constructor(options) {
    this.suppressValidationErr = !options;
    this.options = options;
  }
  readDocType(xmlData, i) {
    const entities = /* @__PURE__ */ Object.create(null);
    let entityCount = 0;
    if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
      i = i + 9;
      let angleBracketsCount = 1;
      let hasBody = false, comment = false;
      let exp = "";
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === "<" && !comment) {
          if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
            i += 7;
            let entityName, val;
            [entityName, val, i] = this.readEntityExp(xmlData, i + 1, this.suppressValidationErr);
            if (val.indexOf("&") === -1) {
              if (this.options.enabled !== false && this.options.maxEntityCount != null && entityCount >= this.options.maxEntityCount) {
                throw new Error(
                  `Entity count (${entityCount + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`
                );
              }
              entities[entityName] = val;
              entityCount++;
            }
          } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
            i += 8;
            const { index } = this.readElementExp(xmlData, i + 1);
            i = index;
          } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
            i += 8;
          } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
            i += 9;
            const { index } = this.readNotationExp(xmlData, i + 1, this.suppressValidationErr);
            i = index;
          } else if (hasSeq(xmlData, "!--", i)) comment = true;
          else throw new Error(`Invalid DOCTYPE`);
          angleBracketsCount++;
          exp = "";
        } else if (xmlData[i] === ">") {
          if (comment) {
            if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
              comment = false;
              angleBracketsCount--;
            }
          } else {
            angleBracketsCount--;
          }
          if (angleBracketsCount === 0) {
            break;
          }
        } else if (xmlData[i] === "[") {
          hasBody = true;
        } else {
          exp += xmlData[i];
        }
      }
      if (angleBracketsCount !== 0) {
        throw new Error(`Unclosed DOCTYPE`);
      }
    } else {
      throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return { entities, i };
  }
  readEntityExp(xmlData, i) {
    i = skipWhitespace(xmlData, i);
    const startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'") {
      i++;
    }
    let entityName = xmlData.substring(startIndex, i);
    validateEntityName2(entityName);
    i = skipWhitespace(xmlData, i);
    if (!this.suppressValidationErr) {
      if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
        throw new Error("External entities are not supported");
      } else if (xmlData[i] === "%") {
        throw new Error("Parameter entities are not supported");
      }
    }
    let entityValue = "";
    [i, entityValue] = this.readIdentifierVal(xmlData, i, "entity");
    if (this.options.enabled !== false && this.options.maxEntitySize != null && entityValue.length > this.options.maxEntitySize) {
      throw new Error(
        `Entity "${entityName}" size (${entityValue.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`
      );
    }
    i--;
    return [entityName, entityValue, i];
  }
  readNotationExp(xmlData, i) {
    i = skipWhitespace(xmlData, i);
    const startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i])) {
      i++;
    }
    let notationName = xmlData.substring(startIndex, i);
    !this.suppressValidationErr && validateEntityName2(notationName);
    i = skipWhitespace(xmlData, i);
    const identifierType = xmlData.substring(i, i + 6).toUpperCase();
    if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
      throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
    }
    i += identifierType.length;
    i = skipWhitespace(xmlData, i);
    let publicIdentifier = null;
    let systemIdentifier = null;
    if (identifierType === "PUBLIC") {
      [i, publicIdentifier] = this.readIdentifierVal(xmlData, i, "publicIdentifier");
      i = skipWhitespace(xmlData, i);
      if (xmlData[i] === '"' || xmlData[i] === "'") {
        [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
      }
    } else if (identifierType === "SYSTEM") {
      [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
      if (!this.suppressValidationErr && !systemIdentifier) {
        throw new Error("Missing mandatory system identifier for SYSTEM notation");
      }
    }
    return { notationName, publicIdentifier, systemIdentifier, index: --i };
  }
  readIdentifierVal(xmlData, i, type) {
    let identifierVal = "";
    const startChar = xmlData[i];
    if (startChar !== '"' && startChar !== "'") {
      throw new Error(`Expected quoted string, found "${startChar}"`);
    }
    i++;
    const startIndex = i;
    while (i < xmlData.length && xmlData[i] !== startChar) {
      i++;
    }
    identifierVal = xmlData.substring(startIndex, i);
    if (xmlData[i] !== startChar) {
      throw new Error(`Unterminated ${type} value`);
    }
    i++;
    return [i, identifierVal];
  }
  readElementExp(xmlData, i) {
    i = skipWhitespace(xmlData, i);
    const startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i])) {
      i++;
    }
    let elementName = xmlData.substring(startIndex, i);
    if (!this.suppressValidationErr && !isName(elementName)) {
      throw new Error(`Invalid element name: "${elementName}"`);
    }
    i = skipWhitespace(xmlData, i);
    let contentModel = "";
    if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) i += 4;
    else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) i += 2;
    else if (xmlData[i] === "(") {
      i++;
      const startIndex2 = i;
      while (i < xmlData.length && xmlData[i] !== ")") {
        i++;
      }
      contentModel = xmlData.substring(startIndex2, i);
      if (xmlData[i] !== ")") {
        throw new Error("Unterminated content model");
      }
    } else if (!this.suppressValidationErr) {
      throw new Error(`Invalid Element Expression, found "${xmlData[i]}"`);
    }
    return {
      elementName,
      contentModel: contentModel.trim(),
      index: i
    };
  }
  readAttlistExp(xmlData, i) {
    i = skipWhitespace(xmlData, i);
    let startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i])) {
      i++;
    }
    let elementName = xmlData.substring(startIndex, i);
    validateEntityName2(elementName);
    i = skipWhitespace(xmlData, i);
    startIndex = i;
    while (i < xmlData.length && !/\s/.test(xmlData[i])) {
      i++;
    }
    let attributeName = xmlData.substring(startIndex, i);
    if (!validateEntityName2(attributeName)) {
      throw new Error(`Invalid attribute name: "${attributeName}"`);
    }
    i = skipWhitespace(xmlData, i);
    let attributeType = "";
    if (xmlData.substring(i, i + 8).toUpperCase() === "NOTATION") {
      attributeType = "NOTATION";
      i += 8;
      i = skipWhitespace(xmlData, i);
      if (xmlData[i] !== "(") {
        throw new Error(`Expected '(', found "${xmlData[i]}"`);
      }
      i++;
      let allowedNotations = [];
      while (i < xmlData.length && xmlData[i] !== ")") {
        const startIndex2 = i;
        while (i < xmlData.length && xmlData[i] !== "|" && xmlData[i] !== ")") {
          i++;
        }
        let notation = xmlData.substring(startIndex2, i);
        notation = notation.trim();
        if (!validateEntityName2(notation)) {
          throw new Error(`Invalid notation name: "${notation}"`);
        }
        allowedNotations.push(notation);
        if (xmlData[i] === "|") {
          i++;
          i = skipWhitespace(xmlData, i);
        }
      }
      if (xmlData[i] !== ")") {
        throw new Error("Unterminated list of notations");
      }
      i++;
      attributeType += " (" + allowedNotations.join("|") + ")";
    } else {
      const startIndex2 = i;
      while (i < xmlData.length && !/\s/.test(xmlData[i])) {
        i++;
      }
      attributeType += xmlData.substring(startIndex2, i);
      const validTypes = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
      if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
        throw new Error(`Invalid attribute type: "${attributeType}"`);
      }
    }
    i = skipWhitespace(xmlData, i);
    let defaultValue = "";
    if (xmlData.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
      defaultValue = "#REQUIRED";
      i += 8;
    } else if (xmlData.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
      defaultValue = "#IMPLIED";
      i += 7;
    } else {
      [i, defaultValue] = this.readIdentifierVal(xmlData, i, "ATTLIST");
    }
    return {
      elementName,
      attributeName,
      attributeType,
      defaultValue,
      index: i
    };
  }
};
var skipWhitespace = (data, index) => {
  while (index < data.length && /\s/.test(data[index])) {
    index++;
  }
  return index;
};
function hasSeq(data, seq, i) {
  for (let j = 0; j < seq.length; j++) {
    if (seq[j] !== data[i + j + 1]) return false;
  }
  return true;
}
function validateEntityName2(name) {
  if (isName(name))
    return name;
  else
    throw new Error(`Invalid entity name ${name}`);
}

// ../node_modules/.pnpm/strnum@2.2.3/node_modules/strnum/strnum.js
var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
var consider = {
  hex: true,
  // oct: false,
  leadingZeros: true,
  decimalPoint: ".",
  eNotation: true,
  //skipLike: /regex/,
  infinity: "original"
  // "null", "infinity" (Infinity type), "string" ("Infinity" (the string literal))
};
function toNumber(str, options = {}) {
  options = Object.assign({}, consider, options);
  if (!str || typeof str !== "string") return str;
  let trimmedStr = str.trim();
  if (trimmedStr.length === 0) return str;
  else if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
  else if (trimmedStr === "0") return 0;
  else if (options.hex && hexRegex.test(trimmedStr)) {
    return parse_int(trimmedStr, 16);
  } else if (!isFinite(trimmedStr)) {
    return handleInfinity(str, Number(trimmedStr), options);
  } else if (trimmedStr.includes("e") || trimmedStr.includes("E")) {
    return resolveEnotation(str, trimmedStr, options);
  } else {
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign = match[1] || "";
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]);
      const decimalAdjacentToLeadingZeros = sign ? (
        // 0., -00., 000.
        str[leadingZeros.length + 1] === "."
      ) : str[leadingZeros.length] === ".";
      if (!options.leadingZeros && (leadingZeros.length > 1 || leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros)) {
        return str;
      } else {
        const num = Number(trimmedStr);
        const parsedStr = String(num);
        if (num === 0) return num;
        if (parsedStr.search(/[eE]/) !== -1) {
          if (options.eNotation) return num;
          else return str;
        } else if (trimmedStr.indexOf(".") !== -1) {
          if (parsedStr === "0") return num;
          else if (parsedStr === numTrimmedByZeros) return num;
          else if (parsedStr === `${sign}${numTrimmedByZeros}`) return num;
          else return str;
        }
        let n = leadingZeros ? numTrimmedByZeros : trimmedStr;
        if (leadingZeros) {
          return n === parsedStr || sign + n === parsedStr ? num : str;
        } else {
          return n === parsedStr || n === sign + parsedStr ? num : str;
        }
      }
    } else {
      return str;
    }
  }
}
var eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function resolveEnotation(str, trimmedStr, options) {
  if (!options.eNotation) return str;
  const notation = trimmedStr.match(eNotationRegx);
  if (notation) {
    let sign = notation[1] || "";
    const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
    const leadingZeros = notation[2];
    const eAdjacentToLeadingZeros = sign ? (
      // 0E.
      str[leadingZeros.length + 1] === eChar
    ) : str[leadingZeros.length] === eChar;
    if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
    else if (leadingZeros.length === 1 && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
      return Number(trimmedStr);
    } else if (leadingZeros.length > 0) {
      if (options.leadingZeros && !eAdjacentToLeadingZeros) {
        trimmedStr = (notation[1] || "") + notation[3];
        return Number(trimmedStr);
      } else return str;
    } else {
      return Number(trimmedStr);
    }
  } else {
    return str;
  }
}
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    numStr = numStr.replace(/0+$/, "");
    if (numStr === ".") numStr = "0";
    else if (numStr[0] === ".") numStr = "0" + numStr;
    else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
function parse_int(numStr, base) {
  if (parseInt) return parseInt(numStr, base);
  else if (Number.parseInt) return Number.parseInt(numStr, base);
  else if (window && window.parseInt) return window.parseInt(numStr, base);
  else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function handleInfinity(str, num, options) {
  const isPositive = num === Infinity;
  switch (options.infinity.toLowerCase()) {
    case "null":
      return null;
    case "infinity":
      return num;
    // Return Infinity or -Infinity
    case "string":
      return isPositive ? "Infinity" : "-Infinity";
    case "original":
    default:
      return str;
  }
}

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/ignoreAttributes.js
function getIgnoreAttributesFn(ignoreAttributes) {
  if (typeof ignoreAttributes === "function") {
    return ignoreAttributes;
  }
  if (Array.isArray(ignoreAttributes)) {
    return (attrName) => {
      for (const pattern of ignoreAttributes) {
        if (typeof pattern === "string" && attrName === pattern) {
          return true;
        }
        if (pattern instanceof RegExp && pattern.test(attrName)) {
          return true;
        }
      }
    };
  }
  return () => false;
}

// ../node_modules/.pnpm/path-expression-matcher@1.5.0/node_modules/path-expression-matcher/src/Expression.js
var Expression = class {
  /**
   * Create a new Expression
   * @param {string} pattern - Pattern string (e.g., "root.users.user", "..user[id]")
   * @param {Object} options - Configuration options
   * @param {string} options.separator - Path separator (default: '.')
   */
  constructor(pattern, options = {}, data) {
    this.pattern = pattern;
    this.separator = options.separator || ".";
    this.segments = this._parse(pattern);
    this.data = data;
    this._hasDeepWildcard = this.segments.some((seg) => seg.type === "deep-wildcard");
    this._hasAttributeCondition = this.segments.some((seg) => seg.attrName !== void 0);
    this._hasPositionSelector = this.segments.some((seg) => seg.position !== void 0);
  }
  /**
   * Parse pattern string into segments
   * @private
   * @param {string} pattern - Pattern to parse
   * @returns {Array} Array of segment objects
   */
  _parse(pattern) {
    const segments = [];
    let i = 0;
    let currentPart = "";
    while (i < pattern.length) {
      if (pattern[i] === this.separator) {
        if (i + 1 < pattern.length && pattern[i + 1] === this.separator) {
          if (currentPart.trim()) {
            segments.push(this._parseSegment(currentPart.trim()));
            currentPart = "";
          }
          segments.push({ type: "deep-wildcard" });
          i += 2;
        } else {
          if (currentPart.trim()) {
            segments.push(this._parseSegment(currentPart.trim()));
          }
          currentPart = "";
          i++;
        }
      } else {
        currentPart += pattern[i];
        i++;
      }
    }
    if (currentPart.trim()) {
      segments.push(this._parseSegment(currentPart.trim()));
    }
    return segments;
  }
  /**
   * Parse a single segment
   * @private
   * @param {string} part - Segment string (e.g., "user", "ns::user", "user[id]", "ns::user:first")
   * @returns {Object} Segment object
   */
  _parseSegment(part) {
    const segment = { type: "tag" };
    let bracketContent = null;
    let withoutBrackets = part;
    const bracketMatch = part.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
    if (bracketMatch) {
      withoutBrackets = bracketMatch[1] + bracketMatch[3];
      if (bracketMatch[2]) {
        const content = bracketMatch[2].slice(1, -1);
        if (content) {
          bracketContent = content;
        }
      }
    }
    let namespace = void 0;
    let tagAndPosition = withoutBrackets;
    if (withoutBrackets.includes("::")) {
      const nsIndex = withoutBrackets.indexOf("::");
      namespace = withoutBrackets.substring(0, nsIndex).trim();
      tagAndPosition = withoutBrackets.substring(nsIndex + 2).trim();
      if (!namespace) {
        throw new Error(`Invalid namespace in pattern: ${part}`);
      }
    }
    let tag = void 0;
    let positionMatch = null;
    if (tagAndPosition.includes(":")) {
      const colonIndex = tagAndPosition.lastIndexOf(":");
      const tagPart = tagAndPosition.substring(0, colonIndex).trim();
      const posPart = tagAndPosition.substring(colonIndex + 1).trim();
      const isPositionKeyword = ["first", "last", "odd", "even"].includes(posPart) || /^nth\(\d+\)$/.test(posPart);
      if (isPositionKeyword) {
        tag = tagPart;
        positionMatch = posPart;
      } else {
        tag = tagAndPosition;
      }
    } else {
      tag = tagAndPosition;
    }
    if (!tag) {
      throw new Error(`Invalid segment pattern: ${part}`);
    }
    segment.tag = tag;
    if (namespace) {
      segment.namespace = namespace;
    }
    if (bracketContent) {
      if (bracketContent.includes("=")) {
        const eqIndex = bracketContent.indexOf("=");
        segment.attrName = bracketContent.substring(0, eqIndex).trim();
        segment.attrValue = bracketContent.substring(eqIndex + 1).trim();
      } else {
        segment.attrName = bracketContent.trim();
      }
    }
    if (positionMatch) {
      const nthMatch = positionMatch.match(/^nth\((\d+)\)$/);
      if (nthMatch) {
        segment.position = "nth";
        segment.positionValue = parseInt(nthMatch[1], 10);
      } else {
        segment.position = positionMatch;
      }
    }
    return segment;
  }
  /**
   * Get the number of segments
   * @returns {number}
   */
  get length() {
    return this.segments.length;
  }
  /**
   * Check if expression contains deep wildcard
   * @returns {boolean}
   */
  hasDeepWildcard() {
    return this._hasDeepWildcard;
  }
  /**
   * Check if expression has attribute conditions
   * @returns {boolean}
   */
  hasAttributeCondition() {
    return this._hasAttributeCondition;
  }
  /**
   * Check if expression has position selectors
   * @returns {boolean}
   */
  hasPositionSelector() {
    return this._hasPositionSelector;
  }
  /**
   * Get string representation
   * @returns {string}
   */
  toString() {
    return this.pattern;
  }
};

// ../node_modules/.pnpm/path-expression-matcher@1.5.0/node_modules/path-expression-matcher/src/ExpressionSet.js
var ExpressionSet = class {
  constructor() {
    this._byDepthAndTag = /* @__PURE__ */ new Map();
    this._wildcardByDepth = /* @__PURE__ */ new Map();
    this._deepWildcards = [];
    this._patterns = /* @__PURE__ */ new Set();
    this._sealed = false;
  }
  /**
   * Add an Expression to the set.
   * Duplicate patterns (same pattern string) are silently ignored.
   *
   * @param {import('./Expression.js').default} expression - A pre-constructed Expression instance
   * @returns {this} for chaining
   * @throws {TypeError} if called after seal()
   *
   * @example
   * set.add(new Expression('root.users.user'));
   * set.add(new Expression('..script'));
   */
  add(expression) {
    if (this._sealed) {
      throw new TypeError(
        "ExpressionSet is sealed. Create a new ExpressionSet to add more expressions."
      );
    }
    if (this._patterns.has(expression.pattern)) return this;
    this._patterns.add(expression.pattern);
    if (expression.hasDeepWildcard()) {
      this._deepWildcards.push(expression);
      return this;
    }
    const depth = expression.length;
    const lastSeg = expression.segments[expression.segments.length - 1];
    const tag = lastSeg == null ? void 0 : lastSeg.tag;
    if (!tag || tag === "*") {
      if (!this._wildcardByDepth.has(depth)) this._wildcardByDepth.set(depth, []);
      this._wildcardByDepth.get(depth).push(expression);
    } else {
      const key = `${depth}:${tag}`;
      if (!this._byDepthAndTag.has(key)) this._byDepthAndTag.set(key, []);
      this._byDepthAndTag.get(key).push(expression);
    }
    return this;
  }
  /**
   * Add multiple expressions at once.
   *
   * @param {import('./Expression.js').default[]} expressions - Array of Expression instances
   * @returns {this} for chaining
   *
   * @example
   * set.addAll([
   *   new Expression('root.users.user'),
   *   new Expression('root.config.setting'),
   * ]);
   */
  addAll(expressions) {
    for (const expr of expressions) this.add(expr);
    return this;
  }
  /**
   * Check whether a pattern string is already present in the set.
   *
   * @param {import('./Expression.js').default} expression
   * @returns {boolean}
   */
  has(expression) {
    return this._patterns.has(expression.pattern);
  }
  /**
   * Number of expressions in the set.
   * @type {number}
   */
  get size() {
    return this._patterns.size;
  }
  /**
   * Seal the set against further modifications.
   * Useful to prevent accidental mutations after config is built.
   * Calling add() or addAll() on a sealed set throws a TypeError.
   *
   * @returns {this}
   */
  seal() {
    this._sealed = true;
    return this;
  }
  /**
   * Whether the set has been sealed.
   * @type {boolean}
   */
  get isSealed() {
    return this._sealed;
  }
  /**
   * Test whether the matcher's current path matches any expression in the set.
   *
   * Evaluation order (cheapest → most expensive):
   *  1. Exact depth + tag bucket  — O(1) lookup, typically 0–2 expressions
   *  2. Depth-only wildcard bucket — O(1) lookup, rare
   *  3. Deep-wildcard list         — always checked, but usually small
   *
   * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
   * @returns {boolean} true if any expression matches the current path
   *
   * @example
   * if (stopNodes.matchesAny(matcher)) {
   *   // handle stop node
   * }
   */
  matchesAny(matcher) {
    return this.findMatch(matcher) !== null;
  }
  /**
  * Find and return the first Expression that matches the matcher's current path.
  *
  * Uses the same evaluation order as matchesAny (cheapest → most expensive):
  *  1. Exact depth + tag bucket
  *  2. Depth-only wildcard bucket
  *  3. Deep-wildcard list
  *
  * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
  * @returns {import('./Expression.js').default | null} the first matching Expression, or null
  *
  * @example
  * const expr = stopNodes.findMatch(matcher);
  * if (expr) {
  *   // access expr.config, expr.pattern, etc.
  * }
  */
  findMatch(matcher) {
    const depth = matcher.getDepth();
    const tag = matcher.getCurrentTag();
    const exactKey = `${depth}:${tag}`;
    const exactBucket = this._byDepthAndTag.get(exactKey);
    if (exactBucket) {
      for (let i = 0; i < exactBucket.length; i++) {
        if (matcher.matches(exactBucket[i])) return exactBucket[i];
      }
    }
    const wildcardBucket = this._wildcardByDepth.get(depth);
    if (wildcardBucket) {
      for (let i = 0; i < wildcardBucket.length; i++) {
        if (matcher.matches(wildcardBucket[i])) return wildcardBucket[i];
      }
    }
    for (let i = 0; i < this._deepWildcards.length; i++) {
      if (matcher.matches(this._deepWildcards[i])) return this._deepWildcards[i];
    }
    return null;
  }
};

// ../node_modules/.pnpm/path-expression-matcher@1.5.0/node_modules/path-expression-matcher/src/Matcher.js
var MatcherView = class {
  /**
   * @param {Matcher} matcher - The parent Matcher instance to read from.
   */
  constructor(matcher) {
    this._matcher = matcher;
  }
  /**
   * Get the path separator used by the parent matcher.
   * @returns {string}
   */
  get separator() {
    return this._matcher.separator;
  }
  /**
   * Get current tag name.
   * @returns {string|undefined}
   */
  getCurrentTag() {
    const path = this._matcher.path;
    return path.length > 0 ? path[path.length - 1].tag : void 0;
  }
  /**
   * Get current namespace.
   * @returns {string|undefined}
   */
  getCurrentNamespace() {
    const path = this._matcher.path;
    return path.length > 0 ? path[path.length - 1].namespace : void 0;
  }
  /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */
  getAttrValue(attrName) {
    var _a;
    const path = this._matcher.path;
    if (path.length === 0) return void 0;
    return (_a = path[path.length - 1].values) == null ? void 0 : _a[attrName];
  }
  /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAttr(attrName) {
    const path = this._matcher.path;
    if (path.length === 0) return false;
    const current = path[path.length - 1];
    return current.values !== void 0 && attrName in current.values;
  }
  /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */
  getPosition() {
    var _a;
    const path = this._matcher.path;
    if (path.length === 0) return -1;
    return (_a = path[path.length - 1].position) != null ? _a : 0;
  }
  /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */
  getCounter() {
    var _a;
    const path = this._matcher.path;
    if (path.length === 0) return -1;
    return (_a = path[path.length - 1].counter) != null ? _a : 0;
  }
  /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */
  getIndex() {
    return this.getPosition();
  }
  /**
   * Get current path depth.
   * @returns {number}
   */
  getDepth() {
    return this._matcher.path.length;
  }
  /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */
  toString(separator, includeNamespace = true) {
    return this._matcher.toString(separator, includeNamespace);
  }
  /**
   * Get path as array of tag names.
   * @returns {string[]}
   */
  toArray() {
    return this._matcher.path.map((n) => n.tag);
  }
  /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */
  matches(expression) {
    return this._matcher.matches(expression);
  }
  /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */
  matchesAny(exprSet) {
    return exprSet.matchesAny(this._matcher);
  }
};
var Matcher = class {
  /**
   * Create a new Matcher.
   * @param {Object} [options={}]
   * @param {string} [options.separator='.'] - Default path separator
   */
  constructor(options = {}) {
    this.separator = options.separator || ".";
    this.path = [];
    this.siblingStacks = [];
    this._pathStringCache = null;
    this._view = new MatcherView(this);
  }
  /**
   * Push a new tag onto the path.
   * @param {string} tagName
   * @param {Object|null} [attrValues=null]
   * @param {string|null} [namespace=null]
   */
  push(tagName, attrValues = null, namespace = null) {
    this._pathStringCache = null;
    if (this.path.length > 0) {
      this.path[this.path.length - 1].values = void 0;
    }
    const currentLevel = this.path.length;
    if (!this.siblingStacks[currentLevel]) {
      this.siblingStacks[currentLevel] = /* @__PURE__ */ new Map();
    }
    const siblings = this.siblingStacks[currentLevel];
    const siblingKey = namespace ? `${namespace}:${tagName}` : tagName;
    const counter = siblings.get(siblingKey) || 0;
    let position = 0;
    for (const count of siblings.values()) {
      position += count;
    }
    siblings.set(siblingKey, counter + 1);
    const node = {
      tag: tagName,
      position,
      counter
    };
    if (namespace !== null && namespace !== void 0) {
      node.namespace = namespace;
    }
    if (attrValues !== null && attrValues !== void 0) {
      node.values = attrValues;
    }
    this.path.push(node);
  }
  /**
   * Pop the last tag from the path.
   * @returns {Object|undefined} The popped node
   */
  pop() {
    if (this.path.length === 0) return void 0;
    this._pathStringCache = null;
    const node = this.path.pop();
    if (this.siblingStacks.length > this.path.length + 1) {
      this.siblingStacks.length = this.path.length + 1;
    }
    return node;
  }
  /**
   * Update current node's attribute values.
   * Useful when attributes are parsed after push.
   * @param {Object} attrValues
   */
  updateCurrent(attrValues) {
    if (this.path.length > 0) {
      const current = this.path[this.path.length - 1];
      if (attrValues !== null && attrValues !== void 0) {
        current.values = attrValues;
      }
    }
  }
  /**
   * Get current tag name.
   * @returns {string|undefined}
   */
  getCurrentTag() {
    return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
  }
  /**
   * Get current namespace.
   * @returns {string|undefined}
   */
  getCurrentNamespace() {
    return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
  }
  /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */
  getAttrValue(attrName) {
    var _a;
    if (this.path.length === 0) return void 0;
    return (_a = this.path[this.path.length - 1].values) == null ? void 0 : _a[attrName];
  }
  /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */
  hasAttr(attrName) {
    if (this.path.length === 0) return false;
    const current = this.path[this.path.length - 1];
    return current.values !== void 0 && attrName in current.values;
  }
  /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */
  getPosition() {
    var _a;
    if (this.path.length === 0) return -1;
    return (_a = this.path[this.path.length - 1].position) != null ? _a : 0;
  }
  /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */
  getCounter() {
    var _a;
    if (this.path.length === 0) return -1;
    return (_a = this.path[this.path.length - 1].counter) != null ? _a : 0;
  }
  /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */
  getIndex() {
    return this.getPosition();
  }
  /**
   * Get current path depth.
   * @returns {number}
   */
  getDepth() {
    return this.path.length;
  }
  /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */
  toString(separator, includeNamespace = true) {
    const sep = separator || this.separator;
    const isDefault = sep === this.separator && includeNamespace === true;
    if (isDefault) {
      if (this._pathStringCache !== null) {
        return this._pathStringCache;
      }
      const result = this.path.map(
        (n) => n.namespace ? `${n.namespace}:${n.tag}` : n.tag
      ).join(sep);
      this._pathStringCache = result;
      return result;
    }
    return this.path.map(
      (n) => includeNamespace && n.namespace ? `${n.namespace}:${n.tag}` : n.tag
    ).join(sep);
  }
  /**
   * Get path as array of tag names.
   * @returns {string[]}
   */
  toArray() {
    return this.path.map((n) => n.tag);
  }
  /**
   * Reset the path to empty.
   */
  reset() {
    this._pathStringCache = null;
    this.path = [];
    this.siblingStacks = [];
  }
  /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */
  matches(expression) {
    const segments = expression.segments;
    if (segments.length === 0) {
      return false;
    }
    if (expression.hasDeepWildcard()) {
      return this._matchWithDeepWildcard(segments);
    }
    return this._matchSimple(segments);
  }
  /**
   * @private
   */
  _matchSimple(segments) {
    if (this.path.length !== segments.length) {
      return false;
    }
    for (let i = 0; i < segments.length; i++) {
      if (!this._matchSegment(segments[i], this.path[i], i === this.path.length - 1)) {
        return false;
      }
    }
    return true;
  }
  /**
   * @private
   */
  _matchWithDeepWildcard(segments) {
    let pathIdx = this.path.length - 1;
    let segIdx = segments.length - 1;
    while (segIdx >= 0 && pathIdx >= 0) {
      const segment = segments[segIdx];
      if (segment.type === "deep-wildcard") {
        segIdx--;
        if (segIdx < 0) {
          return true;
        }
        const nextSeg = segments[segIdx];
        let found = false;
        for (let i = pathIdx; i >= 0; i--) {
          if (this._matchSegment(nextSeg, this.path[i], i === this.path.length - 1)) {
            pathIdx = i - 1;
            segIdx--;
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      } else {
        if (!this._matchSegment(segment, this.path[pathIdx], pathIdx === this.path.length - 1)) {
          return false;
        }
        pathIdx--;
        segIdx--;
      }
    }
    return segIdx < 0;
  }
  /**
   * @private
   */
  _matchSegment(segment, node, isCurrentNode) {
    var _a;
    if (segment.tag !== "*" && segment.tag !== node.tag) {
      return false;
    }
    if (segment.namespace !== void 0) {
      if (segment.namespace !== "*" && segment.namespace !== node.namespace) {
        return false;
      }
    }
    if (segment.attrName !== void 0) {
      if (!isCurrentNode) {
        return false;
      }
      if (!node.values || !(segment.attrName in node.values)) {
        return false;
      }
      if (segment.attrValue !== void 0) {
        if (String(node.values[segment.attrName]) !== String(segment.attrValue)) {
          return false;
        }
      }
    }
    if (segment.position !== void 0) {
      if (!isCurrentNode) {
        return false;
      }
      const counter = (_a = node.counter) != null ? _a : 0;
      if (segment.position === "first" && counter !== 0) {
        return false;
      } else if (segment.position === "odd" && counter % 2 !== 1) {
        return false;
      } else if (segment.position === "even" && counter % 2 !== 0) {
        return false;
      } else if (segment.position === "nth" && counter !== segment.positionValue) {
        return false;
      }
    }
    return true;
  }
  /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */
  matchesAny(exprSet) {
    return exprSet.matchesAny(this);
  }
  /**
   * Create a snapshot of current state.
   * @returns {Object}
   */
  snapshot() {
    return {
      path: this.path.map((node) => ({ ...node })),
      siblingStacks: this.siblingStacks.map((map2) => new Map(map2))
    };
  }
  /**
   * Restore state from snapshot.
   * @param {Object} snapshot
   */
  restore(snapshot) {
    this._pathStringCache = null;
    this.path = snapshot.path.map((node) => ({ ...node }));
    this.siblingStacks = snapshot.siblingStacks.map((map2) => new Map(map2));
  }
  /**
   * Return the read-only {@link MatcherView} for this matcher.
   *
   * The same instance is returned on every call — no allocation occurs.
   * It always reflects the current parser state and is safe to pass to
   * user callbacks without risk of accidental mutation.
   *
   * @returns {MatcherView}
   *
   * @example
   * const view = matcher.readOnly();
   * // pass view to callbacks — it stays in sync automatically
   * view.matches(expr);       // ✓
   * view.getCurrentTag();     // ✓
   * // view.push(...)         // ✗ method does not exist — caught by TypeScript
   */
  readOnly() {
    return this._view;
  }
};

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
function extractRawAttributes(prefixedAttrs, options) {
  if (!prefixedAttrs) return {};
  const attrs = options.attributesGroupName ? prefixedAttrs[options.attributesGroupName] : prefixedAttrs;
  if (!attrs) return {};
  const rawAttrs = {};
  for (const key in attrs) {
    if (key.startsWith(options.attributeNamePrefix)) {
      const rawName = key.substring(options.attributeNamePrefix.length);
      rawAttrs[rawName] = attrs[key];
    } else {
      rawAttrs[key] = attrs[key];
    }
  }
  return rawAttrs;
}
function extractNamespace(rawTagName) {
  if (!rawTagName || typeof rawTagName !== "string") return void 0;
  const colonIndex = rawTagName.indexOf(":");
  if (colonIndex !== -1 && colonIndex > 0) {
    const ns = rawTagName.substring(0, colonIndex);
    if (ns !== "xmlns") {
      return ns;
    }
  }
  return void 0;
}
var OrderedObjParser = class {
  constructor(options, externalEntities) {
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
    this.ignoreAttributesFn = getIgnoreAttributesFn(this.options.ignoreAttributes);
    this.entityExpansionCount = 0;
    this.currentExpandedLength = 0;
    let namedEntities = { ...XML };
    if (this.options.entityDecoder) {
      this.entityDecoder = this.options.entityDecoder;
    } else {
      if (typeof this.options.htmlEntities === "object") namedEntities = this.options.htmlEntities;
      else if (this.options.htmlEntities === true) namedEntities = { ...COMMON_HTML, ...CURRENCY };
      this.entityDecoder = new EntityDecoder({
        namedEntities: { ...namedEntities, ...externalEntities },
        numericAllowed: this.options.htmlEntities,
        limit: {
          maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
          maxExpandedLength: this.options.processEntities.maxExpandedLength,
          applyLimitsTo: this.options.processEntities.appliesTo
        }
        //postCheck: resolved => resolved
      });
    }
    this.matcher = new Matcher();
    this.readonlyMatcher = this.matcher.readOnly();
    this.isCurrentNodeStopNode = false;
    this.stopNodeExpressionsSet = new ExpressionSet();
    const stopNodesOpts = this.options.stopNodes;
    if (stopNodesOpts && stopNodesOpts.length > 0) {
      for (let i = 0; i < stopNodesOpts.length; i++) {
        const stopNodeExp = stopNodesOpts[i];
        if (typeof stopNodeExp === "string") {
          this.stopNodeExpressionsSet.add(new Expression(stopNodeExp));
        } else if (stopNodeExp instanceof Expression) {
          this.stopNodeExpressionsSet.add(stopNodeExp);
        }
      }
      this.stopNodeExpressionsSet.seal();
    }
  }
};
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  const options = this.options;
  if (val !== void 0) {
    if (options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName, jPath);
      const jPathOrMatcher = options.jPath ? jPath.toString() : jPath;
      const newval = options.tagValueProcessor(tagName, val, jPathOrMatcher, hasAttributes, isLeafNode);
      if (newval === null || newval === void 0) {
        return val;
      } else if (typeof newval !== typeof val || newval !== val) {
        return newval;
      } else if (options.trimValues) {
        return parseValue(val, options.parseTagValue, options.numberParseOptions);
      } else {
        const trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, options.parseTagValue, options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(":");
    const prefix = tagname.charAt(0) === "/" ? "/" : "";
    if (tags[0] === "xmlns") {
      return "";
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}
var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function buildAttributesMap(attrStr, jPath, tagName, force = false) {
  const options = this.options;
  if (force === true || options.ignoreAttributes !== true && typeof attrStr === "string") {
    const matches = getAllMatches(attrStr, attrsRegx);
    const len = matches.length;
    const attrs = {};
    const processedVals = new Array(len);
    let hasRawAttrs = false;
    const rawAttrsForMatcher = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      const oldVal = matches[i][4];
      if (attrName.length && oldVal !== void 0) {
        let val = oldVal;
        if (options.trimValues) val = val.trim();
        val = this.replaceEntitiesValue(val, tagName, this.readonlyMatcher);
        processedVals[i] = val;
        rawAttrsForMatcher[attrName] = val;
        hasRawAttrs = true;
      }
    }
    if (hasRawAttrs && typeof jPath === "object" && jPath.updateCurrent) {
      jPath.updateCurrent(rawAttrsForMatcher);
    }
    const jPathStr = options.jPath ? jPath.toString() : this.readonlyMatcher;
    let hasAttrs = false;
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      if (this.ignoreAttributesFn(attrName, jPathStr)) continue;
      let aName = options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (options.transformAttributeName) {
          aName = options.transformAttributeName(aName);
        }
        aName = sanitizeName(aName, options);
        if (matches[i][4] !== void 0) {
          const oldVal = processedVals[i];
          const newVal = options.attributeValueProcessor(attrName, oldVal, jPathStr);
          if (newVal === null || newVal === void 0) {
            attrs[aName] = oldVal;
          } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
            attrs[aName] = newVal;
          } else {
            attrs[aName] = parseValue(oldVal, options.parseAttributeValue, options.numberParseOptions);
          }
          hasAttrs = true;
        } else if (options.allowBooleanAttributes) {
          attrs[aName] = true;
          hasAttrs = true;
        }
      }
    }
    if (!hasAttrs) return;
    if (options.attributesGroupName && !options.preserveOrder) {
      const attrCollection = {};
      attrCollection[options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
var parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n");
  const xmlObj = new XmlNode("!xml");
  let currentNode = xmlObj;
  let textData = "";
  this.matcher.reset();
  this.entityDecoder.reset();
  this.entityExpansionCount = 0;
  this.currentExpandedLength = 0;
  const options = this.options;
  const docTypeReader = new DocTypeReader(options.processEntities);
  const xmlLen = xmlData.length;
  for (let i = 0; i < xmlLen; i++) {
    const ch = xmlData[i];
    if (ch === "<") {
      const c1 = xmlData.charCodeAt(i + 1);
      if (c1 === 47) {
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        let tagName = xmlData.substring(i + 2, closeIndex).trim();
        if (options.removeNSPrefix) {
          const colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
          }
        }
        tagName = transformTagName(options.transformTagName, tagName, "", options).tagName;
        if (currentNode) {
          textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        }
        const lastTagName = this.matcher.getCurrentTag();
        if (tagName && options.unpairedTagsSet.has(tagName)) {
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        if (lastTagName && options.unpairedTagsSet.has(lastTagName)) {
          this.matcher.pop();
          this.tagsNodeStack.pop();
        }
        this.matcher.pop();
        this.isCurrentNodeStopNode = false;
        currentNode = this.tagsNodeStack.pop();
        textData = "";
        i = closeIndex;
      } else if (c1 === 63) {
        let tagData = readTagExp(xmlData, i, false, "?>");
        if (!tagData) throw new Error("Pi Tag is not closed.");
        textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        const attsMap = this.buildAttributesMap(tagData.tagExp, this.matcher, tagData.tagName, true);
        if (attsMap) {
          const ver = attsMap[this.options.attributeNamePrefix + "version"];
          this.entityDecoder.setXmlVersion(Number(ver) || 1);
        }
        if (options.ignoreDeclaration && tagData.tagName === "?xml" || options.ignorePiTags) {
        } else {
          const childNode = new XmlNode(tagData.tagName);
          childNode.add(options.textNodeName, "");
          if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent && options.ignoreAttributes !== true) {
            childNode[":@"] = attsMap;
          }
          this.addChild(currentNode, childNode, this.readonlyMatcher, i);
        }
        i = tagData.closeIndex + 1;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
        const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
        if (options.commentPropName) {
          const comment = xmlData.substring(i + 4, endIndex - 2);
          textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
          currentNode.add(options.commentPropName, [{ [options.textNodeName]: comment }]);
        }
        i = endIndex;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 68) {
        const result = docTypeReader.readDocType(xmlData, i);
        this.entityDecoder.addInputEntities(result.entities);
        i = result.i;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9, closeIndex);
        textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        let val = this.parseTextData(tagExp, currentNode.tagname, this.readonlyMatcher, true, false, true, true);
        if (val == void 0) val = "";
        if (options.cdataPropName) {
          currentNode.add(options.cdataPropName, [{ [options.textNodeName]: tagExp }]);
        } else {
          currentNode.add(options.textNodeName, val);
        }
        i = closeIndex + 2;
      } else {
        let result = readTagExp(xmlData, i, options.removeNSPrefix);
        if (!result) {
          const context = xmlData.substring(Math.max(0, i - 50), Math.min(xmlLen, i + 50));
          throw new Error(`readTagExp returned undefined at position ${i}. Context: "${context}"`);
        }
        let tagName = result.tagName;
        const rawTagName = result.rawTagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;
        ({ tagName, tagExp } = transformTagName(options.transformTagName, tagName, tagExp, options));
        if (options.strictReservedNames && (tagName === options.commentPropName || tagName === options.cdataPropName || tagName === options.textNodeName || tagName === options.attributesGroupName)) {
          throw new Error(`Invalid tag name: ${tagName}`);
        }
        if (currentNode && textData) {
          if (currentNode.tagname !== "!xml") {
            textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher, false);
          }
        }
        const lastTag = currentNode;
        if (lastTag && options.unpairedTagsSet.has(lastTag.tagname)) {
          currentNode = this.tagsNodeStack.pop();
          this.matcher.pop();
        }
        let isSelfClosing = false;
        if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
          isSelfClosing = true;
          if (tagName[tagName.length - 1] === "/") {
            tagName = tagName.substr(0, tagName.length - 1);
            tagExp = tagName;
          } else {
            tagExp = tagExp.substr(0, tagExp.length - 1);
          }
          attrExpPresent = tagName !== tagExp;
        }
        let prefixedAttrs = null;
        let rawAttrs = {};
        let namespace = void 0;
        namespace = extractNamespace(rawTagName);
        if (tagName !== xmlObj.tagname) {
          this.matcher.push(tagName, {}, namespace);
        }
        if (tagName !== tagExp && attrExpPresent) {
          prefixedAttrs = this.buildAttributesMap(tagExp, this.matcher, tagName);
          if (prefixedAttrs) {
            rawAttrs = extractRawAttributes(prefixedAttrs, options);
          }
        }
        if (tagName !== xmlObj.tagname) {
          this.isCurrentNodeStopNode = this.isItStopNode();
        }
        const startIndex = i;
        if (this.isCurrentNodeStopNode) {
          let tagContent = "";
          if (isSelfClosing) {
            i = result.closeIndex;
          } else if (options.unpairedTagsSet.has(tagName)) {
            i = result.closeIndex;
          } else {
            const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
            if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
            i = result2.i;
            tagContent = result2.tagContent;
          }
          const childNode = new XmlNode(tagName);
          if (prefixedAttrs) {
            childNode[":@"] = prefixedAttrs;
          }
          childNode.add(options.textNodeName, tagContent);
          this.matcher.pop();
          this.isCurrentNodeStopNode = false;
          this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
        } else {
          if (isSelfClosing) {
            ({ tagName, tagExp } = transformTagName(options.transformTagName, tagName, tagExp, options));
            const childNode = new XmlNode(tagName);
            if (prefixedAttrs) {
              childNode[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
            this.matcher.pop();
            this.isCurrentNodeStopNode = false;
          } else if (options.unpairedTagsSet.has(tagName)) {
            const childNode = new XmlNode(tagName);
            if (prefixedAttrs) {
              childNode[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
            this.matcher.pop();
            this.isCurrentNodeStopNode = false;
            i = result.closeIndex;
            continue;
          } else {
            const childNode = new XmlNode(tagName);
            if (this.tagsNodeStack.length > options.maxNestedTags) {
              throw new Error("Maximum nested tags exceeded");
            }
            this.tagsNodeStack.push(currentNode);
            if (prefixedAttrs) {
              childNode[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    } else {
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
};
function addChild(currentNode, childNode, matcher, startIndex) {
  if (!this.options.captureMetaData) startIndex = void 0;
  const jPathOrMatcher = this.options.jPath ? matcher.toString() : matcher;
  const result = this.options.updateTag(childNode.tagname, jPathOrMatcher, childNode[":@"]);
  if (result === false) {
  } else if (typeof result === "string") {
    childNode.tagname = result;
    currentNode.addChild(childNode, startIndex);
  } else {
    currentNode.addChild(childNode, startIndex);
  }
}
function replaceEntitiesValue(val, tagName, jPath) {
  const entityConfig = this.options.processEntities;
  if (!entityConfig || !entityConfig.enabled) {
    return val;
  }
  if (entityConfig.allowedTags) {
    const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
    const allowed = Array.isArray(entityConfig.allowedTags) ? entityConfig.allowedTags.includes(tagName) : entityConfig.allowedTags(tagName, jPathOrMatcher);
    if (!allowed) {
      return val;
    }
  }
  if (entityConfig.tagFilter) {
    const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
    if (!entityConfig.tagFilter(tagName, jPathOrMatcher)) {
      return val;
    }
  }
  return this.entityDecoder.decode(val);
}
function saveTextToParentTag(textData, parentNode, matcher, isLeafNode) {
  if (textData) {
    if (isLeafNode === void 0) isLeafNode = parentNode.child.length === 0;
    textData = this.parseTextData(
      textData,
      parentNode.tagname,
      matcher,
      false,
      parentNode[":@"] ? Object.keys(parentNode[":@"]).length !== 0 : false,
      isLeafNode
    );
    if (textData !== void 0 && textData !== "")
      parentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}
function isItStopNode() {
  if (this.stopNodeExpressionsSet.size === 0) return false;
  return this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
  let attrBoundary = 0;
  const len = xmlData.length;
  const closeCode0 = closingChar.charCodeAt(0);
  const closeCode1 = closingChar.length > 1 ? closingChar.charCodeAt(1) : -1;
  let result = "";
  let segmentStart = i;
  for (let index = i; index < len; index++) {
    const code = xmlData.charCodeAt(index);
    if (attrBoundary) {
      if (code === attrBoundary) attrBoundary = 0;
    } else if (code === 34 || code === 39) {
      attrBoundary = code;
    } else if (code === closeCode0) {
      if (closeCode1 !== -1) {
        if (xmlData.charCodeAt(index + 1) === closeCode1) {
          result += xmlData.substring(segmentStart, index);
          return { data: result, index };
        }
      } else {
        result += xmlData.substring(segmentStart, index);
        return { data: result, index };
      }
    } else if (code === 9 && !attrBoundary) {
      result += xmlData.substring(segmentStart, index) + " ";
      segmentStart = index + 1;
    }
  }
}
function findClosingIndex(xmlData, str, i, errMsg) {
  const closingIndex = xmlData.indexOf(str, i);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str.length - 1;
  }
}
function findClosingChar(xmlData, char, i, errMsg) {
  const closingIndex = xmlData.indexOf(char, i);
  if (closingIndex === -1) throw new Error(errMsg);
  return closingIndex;
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
  const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
  if (!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if (separatorIndex !== -1) {
    tagName = tagExp.substring(0, separatorIndex);
    tagExp = tagExp.substring(separatorIndex + 1).trimStart();
  }
  const rawTagName = tagName;
  if (removeNSPrefix) {
    const colonIndex = tagName.indexOf(":");
    if (colonIndex !== -1) {
      tagName = tagName.substr(colonIndex + 1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName,
    tagExp,
    closeIndex,
    attrExpPresent,
    rawTagName
  };
}
function readStopNodeData(xmlData, tagName, i) {
  const startIndex = i;
  let openTagCount = 1;
  const xmllen = xmlData.length;
  for (; i < xmllen; i++) {
    if (xmlData[i] === "<") {
      const c1 = xmlData.charCodeAt(i + 1);
      if (c1 === 47) {
        const closeIndex = findClosingChar(xmlData, ">", i, `${tagName} is not closed`);
        let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
        if (closeTagName === tagName) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i),
              i: closeIndex
            };
          }
        }
        i = closeIndex;
      } else if (c1 === 63) {
        const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
        i = closeIndex;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
        const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
        i = closeIndex;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
        i = closeIndex;
      } else {
        const tagData = readTagExp(xmlData, i, ">");
        if (tagData) {
          const openTagName = tagData && tagData.tagName;
          if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i = tagData.closeIndex;
        }
      }
    }
  }
}
function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === "string") {
    const newval = val.trim();
    if (newval === "true") return true;
    else if (newval === "false") return false;
    else return toNumber(val, options);
  } else {
    if (isExist(val)) {
      return val;
    } else {
      return "";
    }
  }
}
function transformTagName(fn, tagName, tagExp, options) {
  if (fn) {
    const newTagName = fn(tagName);
    if (tagExp === tagName) {
      tagExp = newTagName;
    }
    tagName = newTagName;
  }
  tagName = sanitizeName(tagName, options);
  return { tagName, tagExp };
}
function sanitizeName(name, options) {
  if (criticalProperties.includes(name)) {
    throw new Error(`[SECURITY] Invalid name: "${name}" is a reserved JavaScript keyword that could cause prototype pollution`);
  } else if (DANGEROUS_PROPERTY_NAMES.includes(name)) {
    return options.onDangerousProperty(name);
  }
  return name;
}

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/xmlparser/node2json.js
var METADATA_SYMBOL2 = XmlNode.getMetaDataSymbol();
function stripAttributePrefix(attrs, prefix) {
  if (!attrs || typeof attrs !== "object") return {};
  if (!prefix) return attrs;
  const rawAttrs = {};
  for (const key in attrs) {
    if (key.startsWith(prefix)) {
      const rawName = key.substring(prefix.length);
      rawAttrs[rawName] = attrs[key];
    } else {
      rawAttrs[key] = attrs[key];
    }
  }
  return rawAttrs;
}
function prettify(node, options, matcher, readonlyMatcher) {
  return compress(node, options, matcher, readonlyMatcher);
}
function compress(arr, options, matcher, readonlyMatcher) {
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    if (property !== void 0 && property !== options.textNodeName) {
      const rawAttrs = stripAttributePrefix(
        tagObj[":@"] || {},
        options.attributeNamePrefix
      );
      matcher.push(property, rawAttrs);
    }
    if (property === options.textNodeName) {
      if (text === void 0) text = tagObj[property];
      else text += "" + tagObj[property];
    } else if (property === void 0) {
      continue;
    } else if (tagObj[property]) {
      let val = compress(tagObj[property], options, matcher, readonlyMatcher);
      const isLeaf = isLeafTag(val, options);
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], readonlyMatcher, options);
      } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }
      if (tagObj[METADATA_SYMBOL2] !== void 0 && typeof val === "object" && val !== null) {
        val[METADATA_SYMBOL2] = tagObj[METADATA_SYMBOL2];
      }
      if (compressedObj[property] !== void 0 && Object.prototype.hasOwnProperty.call(compressedObj, property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() : readonlyMatcher;
        if (options.isArray(property, jPathOrMatcher, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }
      if (property !== void 0 && property !== options.textNodeName) {
        matcher.pop();
      }
    }
  }
  if (typeof text === "string") {
    if (text.length > 0) compressedObj[options.textNodeName] = text;
  } else if (text !== void 0) compressedObj[options.textNodeName] = text;
  return compressedObj;
}
function propName(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key !== ":@") return key;
  }
}
function assignAttributes(obj, attrMap, readonlyMatcher, options) {
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length;
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      const rawAttrName = atrrName.startsWith(options.attributeNamePrefix) ? atrrName.substring(options.attributeNamePrefix.length) : atrrName;
      const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() + "." + rawAttrName : readonlyMatcher;
      if (options.isArray(atrrName, jPathOrMatcher, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
function isLeafTag(obj, options) {
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  if (propCount === 0) {
    return true;
  }
  if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
    return true;
  }
  return false;
}

// ../node_modules/.pnpm/fast-xml-parser@5.7.2/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var XMLParser = class {
  constructor(options) {
    this.externalEntities = {};
    this.options = buildOptions(options);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Uint8Array} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(xmlData, validationOption) {
    if (typeof xmlData !== "string" && xmlData.toString) {
      xmlData = xmlData.toString();
    } else if (typeof xmlData !== "string") {
      throw new Error("XML data is accepted in String or Bytes[] form.");
    }
    if (validationOption) {
      if (validationOption === true) validationOption = {};
      const result = validate(xmlData, validationOption);
      if (result !== true) {
        throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
      }
    }
    const orderedObjParser = new OrderedObjParser(this.options, this.externalEntities);
    const orderedResult = orderedObjParser.parseXml(xmlData);
    if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
    else return prettify(orderedResult, this.options, orderedObjParser.matcher, orderedObjParser.readonlyMatcher);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(key, value) {
    if (value.indexOf("&") !== -1) {
      throw new Error("Entity value can't have '&'");
    } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    } else if (value === "&") {
      throw new Error("An entity with value '&' is not permitted");
    } else {
      this.externalEntities[key] = value;
    }
  }
  /**
   * Returns a Symbol that can be used to access the metadata
   * property on a node.
   * 
   * If Symbol is not available in the environment, an ordinary property is used
   * and the name of the property is here returned.
   * 
   * The XMLMetaData property is only present when `captureMetaData`
   * is true in the options.
   */
  static getMetaDataSymbol() {
    return XmlNode.getMetaDataSymbol();
  }
};

// ../packages/docs-exchange/src/utils/parse/xml.ts
var xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  removeNSPrefix: false,
  preserveOrder: true,
  trimValues: false,
  parseTagValue: false
});
function nodeName(node) {
  for (const k of Object.keys(node)) {
    if (k !== ":@") return k;
  }
  return "";
}
function nodeChildren(node) {
  const name = nodeName(node);
  const value = node[name];
  return Array.isArray(value) ? value : [];
}
function nodeAttrs(node) {
  var _a;
  return (_a = node[":@"]) != null ? _a : {};
}
function findChild(node, tagName) {
  return nodeChildren(node).find((c) => nodeName(c) === tagName);
}
function findChildren(node, tagName) {
  return nodeChildren(node).filter((c) => nodeName(c) === tagName);
}
function textOf(node) {
  const children = nodeChildren(node);
  let out = "";
  for (const c of children) {
    if ("#text" in c) out += String(c["#text"]);
  }
  return out;
}
function flattenSdt(nodes) {
  const out = [];
  for (const node of nodes) {
    if (nodeName(node) === "w:sdt") {
      const content = findChild(node, "w:sdtContent");
      if (content) {
        for (const inner of flattenSdt(nodeChildren(content))) out.push(inner);
      }
    } else {
      out.push(node);
    }
  }
  return out;
}

// ../packages/docs-exchange/src/utils/parse/parse-drawing.ts
var EMU_PER_PX = 9525;
function findFirstByName(node, target) {
  if (!node || typeof node !== "object") return void 0;
  const name = nodeName(node);
  if (name === target) return node;
  for (const child of nodeChildren(node)) {
    const found = findFirstByName(child, target);
    if (found) return found;
  }
  return void 0;
}
function parseDrawingFromXmlNode(node) {
  if (!node) return void 0;
  const blip = findFirstByName(node, "a:blip");
  if (!blip) return void 0;
  const rId = nodeAttrs(blip)["@_r:embed"];
  if (!rId) return void 0;
  const extent = findFirstByName(node, "wp:extent");
  const out = { rId };
  if (extent) {
    const a = nodeAttrs(extent);
    const cx = Number(a["@_cx"]);
    const cy = Number(a["@_cy"]);
    if (!Number.isNaN(cx)) out.widthPx = Math.round(cx / EMU_PER_PX);
    if (!Number.isNaN(cy)) out.heightPx = Math.round(cy / EMU_PER_PX);
  }
  return out;
}
function resolveMediaPath(target) {
  let t = target.replace(/^\/+/, "");
  while (t.startsWith("../")) t = t.slice(3);
  if (t.startsWith("word/")) return t;
  return `word/${t}`;
}
function buildDrawing(drawingId, info, rels, media) {
  var _a, _b, _c, _d;
  const rel = rels.get(info.rId);
  if (!rel || rel.type !== "image") return void 0;
  const path = resolveMediaPath(rel.target);
  const bytes = media.get(path);
  if (!bytes) return void 0;
  const ext = (_b = (_a = path.split(".").pop()) == null ? void 0 : _a.toLowerCase()) != null ? _b : "png";
  const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : ext === "gif" ? "image/gif" : ext === "bmp" ? "image/bmp" : "image/png";
  const base64 = bytesToBase64(bytes);
  const width = (_c = info.widthPx) != null ? _c : 100;
  const height = (_d = info.heightPx) != null ? _d : 100;
  return {
    drawingId,
    drawingType: 0,
    imageSourceType: "BASE64",
    source: `data:${mime};base64,${base64}`,
    transform: { left: 0, top: 0, width, height },
    docTransform: {
      size: { width, height },
      positionH: { relativeFrom: 2, posOffset: 0 },
      positionV: { relativeFrom: 1, posOffset: 0 },
      angle: 0
    }
  };
}

// ../packages/docs-exchange/src/utils/parse/assemble.ts
var uuidv4 = () => generateRandomId();
var { TABLE_START, TABLE_ROW_START, TABLE_CELL_START, TABLE_CELL_END, TABLE_ROW_END, TABLE_END } = DataStreamTreeTokenType;
function emitRun(run, acc, ctx) {
  const runStart = acc.data.length;
  if (run.drawingId && ctx.drawingInfoMap) {
    const info = ctx.drawingInfoMap.get(run.drawingId);
    if (info) {
      const drawing = buildDrawing(run.drawingId, info, ctx.rels, ctx.media);
      if (drawing) {
        acc.data += "\b";
        acc.customBlocks.push({ startIndex: runStart, blockId: run.drawingId });
        acc.drawings[run.drawingId] = drawing;
      }
      return;
    }
  }
  acc.data += run.text;
  const runEnd = acc.data.length;
  if (run.style) {
    acc.textRuns.push({ st: runStart, ed: runEnd, ts: run.style });
  }
  if (run.fieldType) {
    acc.customRanges.push({
      startIndex: runStart,
      endIndex: runEnd - 1,
      rangeType: 1 /* FIELD */,
      rangeId: uuidv4(),
      properties: { subtype: run.fieldType }
    });
  }
  if (run.hyperlink) {
    const real = ctx.rels.get(run.hyperlink.url);
    if (!real || real.type !== "hyperlink") {
      console.warn("[ieport-docx] Hyperlink rel missing or wrong type:", run.hyperlink.url);
    } else {
      acc.customRanges.push({
        startIndex: runStart,
        endIndex: runEnd - 1,
        rangeType: 0,
        rangeId: uuidv4(),
        properties: { url: real.target }
      });
    }
  }
}
function isBarePageBreakParagraph(p) {
  if (p.bullet || p.sectionBreakAfter) return false;
  let sawPageBreak = false;
  for (const run of p.runs) {
    if (run.drawingId) return false;
    for (const ch of run.text) {
      if (ch === "\f") sawPageBreak = true;
      else return false;
    }
  }
  return sawPageBreak;
}
function countPageBreaks(p) {
  let n = 0;
  for (const run of p.runs) {
    for (const ch of run.text) {
      if (ch === "\f") n++;
    }
  }
  return n;
}
function emitParagraph(p, acc, ctx) {
  var _a;
  for (const run of p.runs) emitRun(run, acc, ctx);
  const paraEnd = acc.data.length;
  acc.data += "\r";
  let bullet;
  let numberingLevel;
  if (p.bullet) {
    const def = ctx.numbering.get(p.bullet.numId);
    if (def) {
      acc.listsUsed.set(p.bullet.numId, def);
      numberingLevel = (_a = def.levels[p.bullet.ilvl]) != null ? _a : def.levels[def.levels.length - 1];
      bullet = {
        listType: p.bullet.numId,
        listId: p.bullet.numId,
        nestingLevel: p.bullet.ilvl
      };
    }
  }
  let style = p.style;
  if (numberingLevel && style && style.indentStart && style.hanging === void 0 && numberingLevel.hanging) {
    const inlineLeft = style.indentStart.v + 0;
    const numberingHanging = numberingLevel.hanging.v;
    style = {
      ...style,
      indentStart: { v: Math.max(0, inlineLeft - numberingHanging) },
      hanging: { v: numberingHanging }
    };
  }
  const entry = { startIndex: paraEnd };
  if (bullet) entry.bullet = bullet;
  if (style) {
    if (style.tabStopsClear) {
      const { tabStopsClear: _, ...rest } = style;
      entry.paragraphStyle = rest;
    } else {
      entry.paragraphStyle = style;
    }
  }
  acc.paragraphs.push(entry);
  if (p.sectionBreakAfter) {
    acc.sectionBreaks.push({
      startIndex: acc.data.length,
      ...sectionToBreakFields(p.sectionBreakAfter)
    });
    acc.data += "\n";
  }
}
var SECTION_TYPE_BY_NAME = {
  continuous: 1 /* CONTINUOUS */,
  nextPage: 2 /* NEXT_PAGE */,
  evenPage: 3 /* EVEN_PAGE */,
  oddPage: 4 /* ODD_PAGE */
};
function sectionToBreakFields(parsed) {
  const out = {};
  if (parsed.sectionBreakDefaults.linePitch !== void 0) out.linePitch = parsed.sectionBreakDefaults.linePitch;
  if (parsed.sectionBreakDefaults.gridType !== void 0) out.gridType = parsed.sectionBreakDefaults.gridType;
  const ds = parsed.documentStyle;
  if (ds.pageSize) out.pageSize = ds.pageSize;
  if (ds.pageOrient !== void 0) out.pageOrient = ds.pageOrient;
  if (ds.marginTop !== void 0) out.marginTop = ds.marginTop;
  if (ds.marginBottom !== void 0) out.marginBottom = ds.marginBottom;
  if (ds.marginLeft !== void 0) out.marginLeft = ds.marginLeft;
  if (ds.marginRight !== void 0) out.marginRight = ds.marginRight;
  if (ds.marginHeader !== void 0) out.marginHeader = ds.marginHeader;
  if (ds.marginFooter !== void 0) out.marginFooter = ds.marginFooter;
  if (parsed.titlePage) out.useFirstPageHeaderFooter = 1 /* TRUE */;
  if (parsed.sectionTypeRaw && parsed.sectionTypeRaw in SECTION_TYPE_BY_NAME) {
    out.sectionType = SECTION_TYPE_BY_NAME[parsed.sectionTypeRaw];
  }
  const h = parsed.resolvedHeaderIds;
  if (h == null ? void 0 : h.default) out.defaultHeaderId = h.default;
  if (h == null ? void 0 : h.first) out.firstPageHeaderId = h.first;
  if (h == null ? void 0 : h.even) out.evenPageHeaderId = h.even;
  const f = parsed.resolvedFooterIds;
  if (f == null ? void 0 : f.default) out.defaultFooterId = f.default;
  if (f == null ? void 0 : f.first) out.firstPageFooterId = f.first;
  if (f == null ? void 0 : f.even) out.evenPageFooterId = f.even;
  return out;
}
function borderToUniver(b) {
  var _a;
  if (!b) return void 0;
  if (b.val === "nil" || b.val === "none") return void 0;
  const rgb = b.color && b.color !== "auto" ? `#${b.color.toUpperCase()}` : "#000000";
  const dashStyle = b.val ? (_a = DOCX_BORDER_TO_UNIVER_DASH[b.val]) != null ? _a : 1 : 1;
  const out = {
    color: { rgb },
    dashStyle
  };
  if (b.sizeEighths !== void 0) out.width = { v: b.sizeEighths / 8 };
  return out;
}
function isExplicitNoBorder(b) {
  return b !== void 0 && (b.val === "nil" || b.val === "none");
}
function marginToUniver(m, fallback) {
  var _a, _b, _c, _d;
  return {
    start: { v: (_a = m == null ? void 0 : m.start) != null ? _a : fallback.start },
    end: { v: (_b = m == null ? void 0 : m.end) != null ? _b : fallback.end },
    top: { v: (_c = m == null ? void 0 : m.top) != null ? _c : fallback.top },
    bottom: { v: (_d = m == null ? void 0 : m.bottom) != null ? _d : fallback.bottom }
  };
}
var ALIGN_TO_UNIVER = {
  start: 0,
  // TableAlignmentType.START
  center: 1,
  end: 2
};
var VALIGN_TO_UNIVER = {
  top: 2,
  // VerticalAlignmentType.TOP
  center: 3,
  bottom: 4
};
var ROW_HEIGHT_RULE_TO_UNIVER = {
  auto: 0,
  // TableRowHeightRule.AUTO
  atLeast: 1,
  exact: 2
};
function resolveCellBorder(side, cellBorders, tableBorders, isPerimeter) {
  const own = cellBorders == null ? void 0 : cellBorders[side];
  if (isExplicitNoBorder(own)) return void 0;
  if (own) return own;
  if (!tableBorders) return void 0;
  if (isPerimeter) return tableBorders[side];
  if (side === "top" || side === "bottom") return tableBorders.insideH;
  return tableBorders.insideV;
}
function emitTable(t, acc, ctx) {
  var _a;
  const tableId = `tbl_${uuidv4()}`;
  const start = acc.data.length;
  acc.data += TABLE_START;
  for (const row of t.rows) {
    acc.data += TABLE_ROW_START;
    for (const cell of row) {
      acc.data += TABLE_CELL_START;
      for (const p of cell.paragraphs) {
        emitParagraph(
          p.sectionBreakAfter ? { ...p, sectionBreakAfter: void 0 } : p,
          acc,
          ctx
        );
      }
      acc.sectionBreaks.push({ startIndex: acc.data.length });
      acc.data += "\n";
      acc.data += TABLE_CELL_END;
    }
    acc.data += TABLE_ROW_END;
  }
  acc.data += TABLE_END;
  const end = acc.data.length - 1;
  acc.tables.push({ startIndex: start, endIndex: end, tableId });
  const defaultMargin = { start: 10, end: 10, top: 5, bottom: 5 };
  const tableCellMargin = marginToUniver(t.cellMargin, defaultMargin);
  const colCount = Math.max(0, ...t.rows.map((r) => r.reduce((n, c) => {
    var _a2;
    return n + ((_a2 = c.columnSpan) != null ? _a2 : 1);
  }, 0)));
  const fallbackWidth = colCount > 0 ? 601 / colCount : 0;
  const colSizes = t.columnWidths && t.columnWidths.length > 0 ? t.columnWidths : new Array(colCount).fill(fallbackWidth);
  const totalWidth = colSizes.reduce((a, b) => a + b, 0);
  const tableSize = t.preferredWidthPx !== void 0 ? { type: 1, width: { v: t.preferredWidthPx } } : { type: 0, width: { v: totalWidth } };
  const rowCount = t.rows.length;
  acc.tableSource[tableId] = {
    tableId,
    tableRows: t.rows.map((row, ri) => {
      var _a2, _b, _c;
      const colCountInRow = row.reduce((n, c) => {
        var _a3;
        return n + ((_a3 = c.columnSpan) != null ? _a3 : 1);
      }, 0);
      let colCursor = 0;
      const tableCells = row.map((c) => {
        var _a3, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        const colStart = colCursor;
        const colEnd = colCursor + ((_a3 = c.columnSpan) != null ? _a3 : 1) - 1;
        colCursor += (_b2 = c.columnSpan) != null ? _b2 : 1;
        const cellEntry = {
          // Cell margin: cell-level overrides table-level, table-level overrides global default.
          margin: marginToUniver(c.margin, {
            start: (_d = (_c2 = t.cellMargin) == null ? void 0 : _c2.start) != null ? _d : defaultMargin.start,
            end: (_f = (_e = t.cellMargin) == null ? void 0 : _e.end) != null ? _f : defaultMargin.end,
            top: (_h = (_g = t.cellMargin) == null ? void 0 : _g.top) != null ? _h : defaultMargin.top,
            bottom: (_j = (_i = t.cellMargin) == null ? void 0 : _i.bottom) != null ? _j : defaultMargin.bottom
          })
        };
        if (c.rowSpan !== void 0) cellEntry.rowSpan = c.rowSpan;
        if (c.columnSpan !== void 0) cellEntry.columnSpan = c.columnSpan;
        const fill = (_k = c.shadingFill) != null ? _k : t.shadingFill;
        if (fill && fill !== "auto") cellEntry.backgroundColor = { rgb: `#${fill.toUpperCase()}` };
        const sides = ["top", "bottom", "left", "right"];
        const isPerimeter = {
          top: ri === 0,
          bottom: ri + ((_l = c.rowSpan) != null ? _l : 1) - 1 === rowCount - 1,
          left: colStart === 0,
          right: colEnd === colCountInRow - 1
        };
        for (const side of sides) {
          const resolved = resolveCellBorder(side, c.borders, t.borders, isPerimeter[side]);
          const u = borderToUniver(resolved);
          if (u) {
            const key = `border${side[0].toUpperCase()}${side.slice(1)}`;
            cellEntry[key] = u;
          }
        }
        if (c.vAlign) cellEntry.vAlign = VALIGN_TO_UNIVER[c.vAlign];
        if (c.preferredWidthPx !== void 0) {
          cellEntry.size = { type: 1, width: { v: c.preferredWidthPx } };
        }
        return cellEntry;
      });
      const trHeight = ((_a2 = t.rowHeights) == null ? void 0 : _a2[ri]) !== void 0 ? { val: { v: t.rowHeights[ri].v }, hRule: ROW_HEIGHT_RULE_TO_UNIVER[t.rowHeights[ri].rule] } : { val: { v: 0 }, hRule: 0 };
      const rowEntry = { tableCells, trHeight };
      if ((_b = t.rowCantSplit) == null ? void 0 : _b[ri]) rowEntry.cantSplit = 1;
      if ((_c = t.rowIsHeader) == null ? void 0 : _c[ri]) rowEntry.repeatHeaderRow = 1;
      return rowEntry;
    }),
    tableColumns: colSizes.map((w) => ({
      size: { type: 1, width: { v: w } }
      // TableSizeType.SPECIFIED
    })),
    align: t.align ? ALIGN_TO_UNIVER[t.align] : 0,
    indent: { v: (_a = t.indentPx) != null ? _a : 0 },
    textWrap: 0,
    // TableTextWrapType.NONE — TODO(unsupported): <w:tblpPr> floating tables map to WRAP
    position: {
      positionH: { relativeFrom: 0, posOffset: 0 },
      // ObjectRelativeFromH.PAGE
      positionV: { relativeFrom: 0, posOffset: 0 }
      // ObjectRelativeFromV.PAGE
      // TODO(unsupported): <w:tblpPr> tblpX/tblpY/tblpXSpec/tblpYSpec/horzAnchor/vertAnchor → ITableAnchor
    },
    dist: { distB: 0, distL: 0, distR: 0, distT: 0 },
    // TODO(unsupported): <w:tblpPr> leftFromText/rightFromText/topFromText/bottomFromText → IDistFromText
    cellMargin: tableCellMargin,
    size: tableSize,
    ...t.layout ? { layout: t.layout === "fixed" ? 1 : 0 } : {}
    // TableLayoutType.FIXED=1, AUTO_FIT=0
  };
}
function assembleDocument(children, ctx) {
  var _a;
  const acc = {
    data: "",
    textRuns: [],
    paragraphs: [],
    sectionBreaks: [],
    tables: [],
    customRanges: [],
    customBlocks: [],
    drawings: {},
    tableSource: {},
    listsUsed: /* @__PURE__ */ new Map()
  };
  const pageBreakOwners = (() => {
    var _a2;
    const out = [];
    const future = [];
    for (let i = children.length - 1; i >= 0; i--) {
      const c = children[i];
      if (c.kind === "paragraph") {
        if (c.paragraph.sectionBreakAfter) future.unshift(c.paragraph.sectionBreakAfter);
        if (isBarePageBreakParagraph(c.paragraph)) {
          const owner = (_a2 = future[0]) != null ? _a2 : ctx.bodyEndSection;
          for (let n = 0; n < countPageBreaks(c.paragraph); n++) out.unshift(owner);
        }
      }
    }
    return out;
  })();
  let pageBreakIdx = 0;
  const pageBreakFields = (owner) => {
    const inherited = owner ? sectionToBreakFields(owner) : {};
    const {
      sectionType: _st,
      useFirstPageHeaderFooter: _u,
      firstPageHeaderId: _fh,
      firstPageFooterId: _ff,
      ...rest
    } = inherited;
    return { ...rest, sectionType: 2 /* NEXT_PAGE */ };
  };
  const flushBarePageBreaks = (count) => {
    for (let i = 0; i < count; i++) {
      const owner = pageBreakOwners[pageBreakIdx++];
      acc.sectionBreaks.push({
        startIndex: acc.data.length,
        // index of the '\n' we're about to write
        ...pageBreakFields(owner)
      });
      acc.data += "\n";
    }
  };
  for (const child of children) {
    if (child.kind === "paragraph" && isBarePageBreakParagraph(child.paragraph)) {
      flushBarePageBreaks(countPageBreaks(child.paragraph));
      continue;
    }
    if (child.kind === "paragraph") {
      emitParagraph(child.paragraph, acc, ctx);
    } else {
      emitTable(child.table, acc, ctx);
    }
  }
  acc.data += "\n";
  const numFmtToGlyphType = (format) => {
    switch (format) {
      case "bullet":
        return 0;
      case "decimal":
        return 2;
      case "decimalZero":
        return 3;
      case "upperLetter":
        return 4;
      case "lowerLetter":
        return 5;
      case "upperRoman":
        return 6;
      case "lowerRoman":
        return 7;
      default:
        return 2;
    }
  };
  const lists = {};
  for (const [numId, def] of acc.listsUsed) {
    lists[numId] = {
      listType: def.listType,
      nestingLevel: def.levels.map((l) => {
        const props = {};
        if (l.indentStart) props.indentStart = l.indentStart;
        if (l.hanging) props.hanging = l.hanging;
        if (l.indentFirstLine) props.indentFirstLine = l.indentFirstLine;
        const entry = {
          bulletAlignment: 0,
          glyphFormat: l.text,
          // Univer's bullet renderer treats startNumber as an OFFSET added to the previous
          // item's startIndexItem (which defaults to 1 for the first item). So an OOXML
          // start=1 ("begin counting from 1") maps to Univer startNumber=0, otherwise the
          // first item renders as 2.
          startNumber: Math.max(0, l.start - 1),
          glyphType: numFmtToGlyphType(l.format)
        };
        if (Object.keys(props).length > 0) {
          entry.paragraphProperties = props;
        }
        return entry;
      })
    };
  }
  const body = {
    dataStream: acc.data,
    textRuns: acc.textRuns,
    paragraphs: acc.paragraphs
  };
  if (acc.tables.length > 0) body.tables = acc.tables;
  const docEndIndex = Math.max(0, acc.data.length - 1);
  if (!acc.sectionBreaks.some((sb) => sb.startIndex === docEndIndex)) {
    const tail = ctx.bodyEndSection ? sectionToBreakFields(ctx.bodyEndSection) : {};
    acc.sectionBreaks.push({ startIndex: docEndIndex, ...tail });
  }
  if (ctx.sectionBreakDefaults && Object.keys(ctx.sectionBreakDefaults).length > 0) {
    for (const sb of acc.sectionBreaks) {
      if (sb.linePitch === void 0 && ctx.sectionBreakDefaults.linePitch !== void 0) {
        sb.linePitch = ctx.sectionBreakDefaults.linePitch;
      }
      if (sb.gridType === void 0 && ctx.sectionBreakDefaults.gridType !== void 0) {
        sb.gridType = ctx.sectionBreakDefaults.gridType;
      }
    }
  }
  body.sectionBreaks = acc.sectionBreaks;
  if (acc.customRanges.length > 0) body.customRanges = acc.customRanges;
  if (acc.customBlocks.length > 0) body.customBlocks = acc.customBlocks;
  const docData = {
    id: uuidv4(),
    documentStyle: (_a = ctx.documentStyle) != null ? _a : {},
    body
  };
  if (Object.keys(acc.tableSource).length > 0) docData.tableSource = acc.tableSource;
  if (Object.keys(acc.drawings).length > 0) docData.drawings = acc.drawings;
  if (Object.keys(lists).length > 0) docData.lists = lists;
  return docData;
}

// ../packages/docs-exchange/src/utils/parse/ooxml-reader.ts
var import_jszip = __toESM(require_jszip_min());
async function toUint8Array(input) {
  if (input instanceof Uint8Array) return input;
  if (input instanceof ArrayBuffer || input instanceof SharedArrayBuffer) return new Uint8Array(input);
  if (typeof Blob !== "undefined" && input instanceof Blob) {
    return new Uint8Array(await input.arrayBuffer());
  }
  throw new Error("Invalid DOCX: unsupported input type");
}
async function readOptionalText(zip, path) {
  const file = zip.file(path);
  return file ? file.async("string") : void 0;
}
async function readOoxmlBundle(input) {
  const data = await toUint8Array(input);
  let zip;
  try {
    zip = await import_jszip.default.loadAsync(data);
  } catch (err) {
    throw new Error(`Invalid DOCX: not a zip archive (${err.message})`);
  }
  const documentXml = await readOptionalText(zip, "word/document.xml");
  if (!documentXml) {
    throw new Error("Missing word/document.xml");
  }
  const numberingXml = await readOptionalText(zip, "word/numbering.xml");
  const stylesXml = await readOptionalText(zip, "word/styles.xml");
  const themeXml = await readOptionalText(zip, "word/theme/theme1.xml");
  const relsXml = await readOptionalText(zip, "word/_rels/document.xml.rels");
  const settingsXml = await readOptionalText(zip, "word/settings.xml");
  const headers = /* @__PURE__ */ new Map();
  const footers = /* @__PURE__ */ new Map();
  const headerRels = /* @__PURE__ */ new Map();
  const footerRels = /* @__PURE__ */ new Map();
  const headerFooterRe = /^word\/(header|footer)(\d+)\.xml$/;
  const headerFooterRelsRe = /^word\/_rels\/(header|footer)(\d+)\.xml\.rels$/;
  const hfPromises = [];
  zip.forEach((path, file) => {
    if (file.dir) return;
    const m = headerFooterRe.exec(path);
    if (m) {
      const stem = `${m[1]}${m[2]}`;
      hfPromises.push(file.async("string").then((s) => void (m[1] === "header" ? headers : footers).set(stem, s)));
      return;
    }
    const r = headerFooterRelsRe.exec(path);
    if (r) {
      const stem = `${r[1]}${r[2]}`;
      hfPromises.push(file.async("string").then((s) => void (r[1] === "header" ? headerRels : footerRels).set(stem, s)));
    }
  });
  await Promise.all(hfPromises);
  const media = /* @__PURE__ */ new Map();
  const mediaFolder = zip.folder("word/media");
  if (mediaFolder) {
    const promises = [];
    mediaFolder.forEach((relative, file) => {
      if (file.dir) return;
      const fullPath = `word/media/${relative}`;
      promises.push(file.async("uint8array").then((bytes) => void media.set(fullPath, bytes)));
    });
    await Promise.all(promises);
  }
  return {
    documentXml,
    numberingXml,
    stylesXml,
    themeXml,
    relsXml,
    settingsXml,
    media,
    headers: headers.size > 0 ? headers : void 0,
    footers: footers.size > 0 ? footers : void 0,
    headerRels: headerRels.size > 0 ? headerRels : void 0,
    footerRels: footerRels.size > 0 ? footerRels : void 0
  };
}

// ../packages/docs-exchange/src/utils/parse/parse-hyperlink.ts
var HYPERLINK_TYPE = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";
var IMAGE_TYPE = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
function parseRelationships(relsXml) {
  var _a;
  const result = /* @__PURE__ */ new Map();
  if (!relsXml) return result;
  let parsed;
  try {
    parsed = xmlParser.parse(relsXml);
  } catch {
    return result;
  }
  const root = parsed.find((n) => nodeName(n) === "Relationships");
  if (!root) return result;
  for (const rel of findChildren(root, "Relationship")) {
    const a = nodeAttrs(rel);
    const id = a["@_Id"];
    const type = a["@_Type"];
    const target = (_a = a["@_Target"]) != null ? _a : "";
    if (!id) continue;
    let kind = "other";
    if (type === HYPERLINK_TYPE) kind = "hyperlink";
    else if (type === IMAGE_TYPE) kind = "image";
    result.set(id, { type: kind, target });
  }
  return result;
}

// ../packages/docs-exchange/src/utils/units.ts
var PT_PER_PX = 0.75;
function dxaToPx(dxa) {
  return dxa / 15;
}
function hpToPt(hp) {
  return hp / 2;
}
function ptToPx(pt) {
  return pt / PT_PER_PX;
}

// ../packages/docs-exchange/src/utils/parse/parse-paragraph-style.ts
var ALIGN_MAP = {
  start: 1,
  left: 1,
  center: 2,
  end: 3,
  right: 3,
  both: 5,
  justify: 5,
  distribute: 6
};
var TAB_ALIGN_MAP = {
  start: 1,
  left: 1,
  center: 2,
  end: 3,
  right: 3,
  decimal: 1,
  bar: 1,
  num: 1
};
var HEADING_MAP = {
  Title: 2,
  Subtitle: 3,
  Heading1: 4,
  Heading2: 5,
  Heading3: 6,
  Heading4: 7,
  Heading5: 8
};
var DEFAULT_BORDER_COLOR_RGB = "#000000";
function parseBorder(b) {
  const a = nodeAttrs(b);
  const out = {};
  const colorAttr = a["@_w:color"];
  if (colorAttr && colorAttr !== "auto") out.color = { rgb: `#${colorAttr.toUpperCase()}` };
  else out.color = { rgb: DEFAULT_BORDER_COLOR_RGB };
  const sz = Number(a["@_w:sz"]);
  if (!Number.isNaN(sz)) out.width = Math.max(1, Math.round(sz / 6));
  const valAttr = a["@_w:val"];
  out.dashStyle = valAttr && DOCX_BORDER_TO_UNIVER_DASH[valAttr] || 1;
  const space = Number(a["@_w:space"]);
  if (!Number.isNaN(space)) out.padding = space;
  return out;
}
function parseSpacingInto(spacing, out) {
  var _a;
  const a = nodeAttrs(spacing);
  if (a["@_w:before"] !== void 0) {
    const before = Number(a["@_w:before"]);
    if (!Number.isNaN(before)) out.spaceAbove = { v: dxaToPx(before) };
  } else if (a["@_w:beforeLines"] !== void 0) {
    const beforeLines = Number(a["@_w:beforeLines"]);
    if (!Number.isNaN(beforeLines)) out.spaceAbove = { v: beforeLines / 100 * 16 };
  }
  if (a["@_w:after"] !== void 0) {
    const after = Number(a["@_w:after"]);
    if (!Number.isNaN(after)) out.spaceBelow = { v: dxaToPx(after) };
  } else if (a["@_w:afterLines"] !== void 0) {
    const afterLines = Number(a["@_w:afterLines"]);
    if (!Number.isNaN(afterLines)) out.spaceBelow = { v: afterLines / 100 * 16 };
  }
  const line = Number(a["@_w:line"]);
  if (!Number.isNaN(line)) {
    const rule = (_a = a["@_w:lineRule"]) != null ? _a : "auto";
    if (rule === "auto") {
      out.lineSpacing = line / 240;
      out.spacingRule = 0;
    } else if (rule === "atLeast") {
      out.lineSpacing = dxaToPx(line);
      out.spacingRule = 1;
    } else if (rule === "exact") {
      out.lineSpacing = dxaToPx(line);
      out.spacingRule = 2;
    }
  }
}
var CHAR_TO_PT = 10.5;
var DXA_ARTIFACT_EPSILON_PT = 0.5;
function parseIndentInto(ind, out) {
  var _a, _b, _c, _d;
  const a = nodeAttrs(ind);
  const pickPx = (charsAttr, dxaAttr) => {
    if (charsAttr !== void 0) {
      const n = Number(charsAttr);
      if (!Number.isNaN(n)) return ptToPx(n / 100 * CHAR_TO_PT);
    }
    if (dxaAttr !== void 0) {
      const n = Number(dxaAttr);
      if (!Number.isNaN(n)) return dxaToPx(n);
    }
    return void 0;
  };
  const dropArtifact = (charsAttr, valuePx) => charsAttr === void 0 && Math.abs(valuePx) < ptToPx(DXA_ARTIFACT_EPSILON_PT);
  const startPx = pickPx(
    (_a = a["@_w:leftChars"]) != null ? _a : a["@_w:startChars"],
    (_b = a["@_w:left"]) != null ? _b : a["@_w:start"]
  );
  const endPx = pickPx(
    (_c = a["@_w:rightChars"]) != null ? _c : a["@_w:endChars"],
    (_d = a["@_w:right"]) != null ? _d : a["@_w:end"]
  );
  if (endPx !== void 0) out.indentEnd = { v: endPx };
  const firstLineChars = a["@_w:firstLineChars"];
  const firstLinePx = pickPx(firstLineChars, a["@_w:firstLine"]);
  if (firstLinePx !== void 0 && !dropArtifact(firstLineChars, firstLinePx)) {
    out.indentFirstLine = { v: firstLinePx };
  }
  const hangingChars = a["@_w:hangingChars"];
  const hangingPxRaw = pickPx(hangingChars, a["@_w:hanging"]);
  const hangingPx = hangingPxRaw !== void 0 && !dropArtifact(hangingChars, hangingPxRaw) ? hangingPxRaw : void 0;
  if (hangingPx !== void 0) out.hanging = { v: hangingPx };
  if (startPx !== void 0) {
    out.indentStart = { v: hangingPx !== void 0 ? startPx - hangingPx : startPx };
  }
}
function parseTabsInto(tabs, out) {
  const stops = [];
  const cleared = [];
  for (const t of nodeChildren(tabs)) {
    if (nodeName(t) !== "w:tab") continue;
    const a = nodeAttrs(t);
    const pos = Number(a["@_w:pos"]);
    if (Number.isNaN(pos)) continue;
    const offset = dxaToPx(pos);
    const val = a["@_w:val"];
    if (val === "clear") {
      cleared.push(offset);
      continue;
    }
    const alignment = val && TAB_ALIGN_MAP[val] || 1;
    stops.push({ offset, alignment });
  }
  if (stops.length > 0) out.tabStops = stops;
  if (cleared.length > 0) out.tabStopsClear = cleared;
}
function parsePPr(pPr) {
  if (!pPr) return void 0;
  const out = {};
  for (const child of nodeChildren(pPr)) {
    const name = nodeName(child);
    if (name === "w:jc") {
      const v = nodeAttrs(child)["@_w:val"];
      if (v && v in ALIGN_MAP) out.horizontalAlign = ALIGN_MAP[v];
    } else if (name === "w:pStyle") {
      const v = nodeAttrs(child)["@_w:val"];
      if (v && v in HEADING_MAP) out.namedStyleType = HEADING_MAP[v];
    } else if (name === "w:spacing") {
      parseSpacingInto(child, out);
    } else if (name === "w:ind") {
      parseIndentInto(child, out);
    } else if (name === "w:pBdr") {
      for (const b of nodeChildren(child)) {
        const bn = nodeName(b);
        if (bn === "w:bottom") out.borderBottom = parseBorder(b);
        else if (bn === "w:top") out.borderTop = parseBorder(b);
      }
    } else if (name === "w:tabs") {
      parseTabsInto(child, out);
    }
  }
  return Object.keys(out).length > 0 ? out : void 0;
}
function pPrStyleRef(pPr) {
  if (!pPr) return void 0;
  for (const child of nodeChildren(pPr)) {
    if (nodeName(child) === "w:pStyle") {
      return nodeAttrs(child)["@_w:val"];
    }
  }
  return void 0;
}

// ../packages/docs-exchange/src/utils/parse/parse-run.ts
var uuidv42 = () => generateRandomId();
var HIGHLIGHT_COLORS = {
  black: "000000",
  blue: "0000FF",
  cyan: "00FFFF",
  green: "00FF00",
  magenta: "FF00FF",
  red: "FF0000",
  yellow: "FFFF00",
  white: "FFFFFF",
  darkBlue: "000080",
  darkCyan: "008080",
  darkGreen: "008000",
  darkMagenta: "800080",
  darkRed: "800000",
  darkYellow: "808000",
  darkGray: "808080",
  lightGray: "C0C0C0"
};
function isToggleOn(val) {
  return val !== "0" && val !== "false" && val !== "none";
}
function parseRPr(rPr) {
  if (!rPr) return void 0;
  const style = {};
  for (const child of nodeChildren(rPr)) {
    const name = nodeName(child);
    const attrs = nodeAttrs(child);
    switch (name) {
      case "w:b":
        if (isToggleOn(attrs["@_w:val"])) style.bl = 1;
        break;
      case "w:i":
        if (isToggleOn(attrs["@_w:val"])) style.it = 1;
        break;
      case "w:u":
        if (isToggleOn(attrs["@_w:val"])) style.ul = { s: 1 };
        break;
      case "w:strike":
        if (isToggleOn(attrs["@_w:val"])) style.st = { s: 1 };
        break;
      case "w:sz": {
        const val = Number(attrs["@_w:val"]);
        if (!Number.isNaN(val)) style.fs = hpToPt(val);
        break;
      }
      case "w:rFonts": {
        const fam = attrs["@_w:ascii"] || attrs["@_w:hAnsi"] || attrs["@_w:cs"];
        if (fam) style.ff = fam;
        break;
      }
      case "w:color": {
        const v = attrs["@_w:val"];
        if (v && v !== "auto") style.cl = { rgb: `#${v.toUpperCase()}` };
        break;
      }
      case "w:highlight": {
        const v = attrs["@_w:val"];
        const rgb = v ? HIGHLIGHT_COLORS[v] : void 0;
        if (rgb) style.bg = { rgb: `#${rgb}` };
        break;
      }
      case "w:shd": {
        const fill = attrs["@_w:fill"];
        if (fill && fill !== "auto") style.bg = { rgb: `#${fill.toUpperCase()}` };
        break;
      }
      case "w:vertAlign": {
        const v = attrs["@_w:val"];
        if (v === "superscript") style.va = 3;
        else if (v === "subscript") style.va = 2;
        break;
      }
    }
  }
  return Object.keys(style).length > 0 ? style : void 0;
}
function rPrStyleRef(rPr) {
  if (!rPr) return void 0;
  for (const child of nodeChildren(rPr)) {
    if (nodeName(child) === "w:rStyle") {
      return nodeAttrs(child)["@_w:val"];
    }
  }
  return void 0;
}
function extractRFonts(rPr) {
  if (!rPr) return void 0;
  for (const child of nodeChildren(rPr)) {
    if (nodeName(child) !== "w:rFonts") continue;
    const a = nodeAttrs(child);
    const out = {};
    if (a["@_w:ascii"]) out.ascii = a["@_w:ascii"];
    if (a["@_w:hAnsi"]) out.hAnsi = a["@_w:hAnsi"];
    if (a["@_w:eastAsia"]) out.eastAsia = a["@_w:eastAsia"];
    if (a["@_w:cs"]) out.cs = a["@_w:cs"];
    if (a["@_w:asciiTheme"]) out.asciiTheme = a["@_w:asciiTheme"];
    if (a["@_w:hAnsiTheme"]) out.hAnsiTheme = a["@_w:hAnsiTheme"];
    if (a["@_w:eastAsiaTheme"]) out.eastAsiaTheme = a["@_w:eastAsiaTheme"];
    if (a["@_w:cstheme"]) out.cstheme = a["@_w:cstheme"];
    return Object.keys(out).length > 0 ? out : void 0;
  }
  return void 0;
}
var CJK_PATTERN = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/;
function resolveFontFamily(rfonts, text, themeFonts) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  if (!rfonts) return void 0;
  const wantsEastAsia = CJK_PATTERN.test(text);
  const themeOf = (ref) => themeFonts && ref ? themeFonts.resolve(ref) : void 0;
  if (wantsEastAsia) {
    return (_g = (_f = (_e = (_d = (_c = (_b = (_a = rfonts.eastAsia) != null ? _a : themeOf(rfonts.eastAsiaTheme)) != null ? _b : rfonts.ascii) != null ? _c : rfonts.hAnsi) != null ? _d : themeOf(rfonts.asciiTheme)) != null ? _e : themeOf(rfonts.hAnsiTheme)) != null ? _f : rfonts.cs) != null ? _g : themeOf(rfonts.cstheme);
  }
  return (_n = (_m = (_l = (_k = (_j = (_i = (_h = rfonts.ascii) != null ? _h : rfonts.hAnsi) != null ? _i : themeOf(rfonts.asciiTheme)) != null ? _j : themeOf(rfonts.hAnsiTheme)) != null ? _k : rfonts.eastAsia) != null ? _l : themeOf(rfonts.eastAsiaTheme)) != null ? _m : rfonts.cs) != null ? _n : themeOf(rfonts.cstheme);
}
function mergeRFonts(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function runTextFromR(r) {
  let text = "";
  for (const child of nodeChildren(r)) {
    const name = nodeName(child);
    if (name === "w:t") {
      text += textOf(child);
    } else if (name === "w:tab") {
      text += "	";
    } else if (name === "w:br") {
      const brType = nodeAttrs(child)["@_w:type"];
      if (brType === "page") text += "\f" /* PAGE_BREAK */;
      else if (brType === "column") text += "\v" /* COLUMN_BREAK */;
      else text += "\x07" /* LINE_BREAK */;
    }
  }
  return text;
}
function readRunFieldSignals(r) {
  let out;
  for (const child of nodeChildren(r)) {
    const name = nodeName(child);
    if (name === "w:fldChar") {
      const v = nodeAttrs(child)["@_w:fldCharType"];
      if (v === "begin" || v === "separate" || v === "end") {
        (out != null ? out : out = {}).fldChar = v;
      }
    } else if (name === "w:instrText") {
      (out != null ? out : out = {}).instrText = textOf(child);
    }
  }
  return out;
}
function classifyFieldInstr(instr) {
  var _a;
  const head = (_a = instr.trim().split(/\s+/, 1)[0]) == null ? void 0 : _a.toUpperCase();
  if (head === "PAGE") return "PAGE";
  if (head === "NUMPAGES") return "NUMPAGES";
  return void 0;
}
function parseRunsFromPNode(pNode, drawingsOut, styles, pStyleRpr, themeFonts, pStyleRFonts) {
  const docDefaultRpr = styles == null ? void 0 : styles.docDefaults.rPr;
  const docDefaultRFonts = styles == null ? void 0 : styles.docDefaults.rFonts;
  const baseRpr = mergeRpr(docDefaultRpr, pStyleRpr);
  const baseRFonts = mergeRFonts(docDefaultRFonts, pStyleRFonts);
  const runs = [];
  let fieldDepth = 0;
  let fieldInstr = "";
  let inFieldResult = false;
  const emitField = (rPrForStyle, fallbackText) => {
    const kind = classifyFieldInstr(fieldInstr);
    if (!kind) {
      if (fallbackText.length > 0) {
        const style2 = resolveRunStyle(rPrForStyle, baseRpr, baseRFonts, styles, themeFonts, fallbackText);
        runs.push(style2 ? { text: fallbackText, style: style2 } : { text: fallbackText });
      }
      return;
    }
    const placeholder = "1";
    const style = resolveRunStyle(rPrForStyle, baseRpr, baseRFonts, styles, themeFonts, placeholder);
    runs.push(style ? { text: placeholder, style, fieldType: kind } : { text: placeholder, fieldType: kind });
  };
  let pendingFieldRPr;
  let pendingFieldResultRPr;
  let pendingFieldFallback = "";
  for (const child of nodeChildren(pNode)) {
    const name = nodeName(child);
    if (name === "w:r") {
      const rPr = findChild(child, "w:rPr");
      const signals = readRunFieldSignals(child);
      if ((signals == null ? void 0 : signals.fldChar) === "begin") {
        fieldDepth++;
        fieldInstr = "";
        inFieldResult = false;
        pendingFieldRPr = rPr;
        pendingFieldResultRPr = void 0;
        pendingFieldFallback = "";
        continue;
      }
      if ((signals == null ? void 0 : signals.fldChar) === "separate") {
        if (fieldDepth > 0) inFieldResult = true;
        continue;
      }
      if ((signals == null ? void 0 : signals.fldChar) === "end") {
        if (fieldDepth > 0) {
          emitField(pendingFieldResultRPr != null ? pendingFieldResultRPr : pendingFieldRPr, pendingFieldFallback);
          fieldDepth--;
          fieldInstr = "";
          inFieldResult = false;
          pendingFieldRPr = void 0;
          pendingFieldResultRPr = void 0;
          pendingFieldFallback = "";
        }
        continue;
      }
      if (fieldDepth > 0) {
        if ((signals == null ? void 0 : signals.instrText) !== void 0 && !inFieldResult) {
          fieldInstr += signals.instrText;
          continue;
        }
        if (inFieldResult) {
          if (pendingFieldResultRPr === void 0 && rPr !== void 0 && runTextFromR(child).length > 0) {
            pendingFieldResultRPr = rPr;
          }
          pendingFieldFallback += runTextFromR(child);
          continue;
        }
        continue;
      }
      const text = runTextFromR(child);
      const style = resolveRunStyle(rPr, baseRpr, baseRFonts, styles, themeFonts, text);
      if (text.length > 0) runs.push(style ? { text, style } : { text });
      const drawingNode = findChild(child, "w:drawing");
      if (drawingNode && drawingsOut && !isWatermarkDrawing(drawingNode)) {
        const info = parseDrawingFromXmlNode(drawingNode);
        if (info) {
          const drawingId = uuidv42();
          drawingsOut.set(drawingId, info);
          runs.push({ text: "", drawingId });
        }
      }
    } else if (name === "w:hyperlink") {
      const rId = nodeAttrs(child)["@_r:id"];
      for (const inner of nodeChildren(child)) {
        if (nodeName(inner) === "w:r") {
          const rPr = findChild(inner, "w:rPr");
          const text = runTextFromR(inner);
          if (text.length === 0) continue;
          const style = resolveRunStyle(rPr, baseRpr, baseRFonts, styles, themeFonts, text);
          if (rId) runs.push({ text, style, hyperlink: { url: rId } });
          else runs.push(style ? { text, style } : { text });
        }
      }
    }
  }
  if (fieldDepth > 0 && pendingFieldFallback.length > 0) {
    const style = resolveRunStyle(pendingFieldResultRPr != null ? pendingFieldResultRPr : pendingFieldRPr, baseRpr, baseRFonts, styles, themeFonts, pendingFieldFallback);
    runs.push(style ? { text: pendingFieldFallback, style } : { text: pendingFieldFallback });
  }
  return runs;
}
function mergeRpr(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function isWatermarkDrawing(drawing) {
  var _a;
  const find = (node, tag) => {
    for (const c of nodeChildren(node)) {
      if (nodeName(c) === tag) return c;
      const inner = find(c, tag);
      if (inner) return inner;
    }
    return void 0;
  };
  const anchor = find(drawing, "wp:anchor");
  if (!anchor) return false;
  const docPr = find(anchor, "wp:docPr");
  const name = docPr ? (_a = nodeAttrs(docPr)["@_name"]) != null ? _a : "" : "";
  return /watermark/i.test(name);
}
function resolveRunStyle(rPr, baseRpr, baseRFonts, styles, themeFonts, text) {
  let merged = baseRpr;
  let rfonts = baseRFonts;
  if (styles && rPr) {
    const ref = rPrStyleRef(rPr);
    if (ref) {
      merged = mergeRpr(merged, styles.resolveRStyle(ref));
      rfonts = mergeRFonts(rfonts, styles.resolveRFonts(ref));
    }
  }
  const inline = parseRPr(rPr);
  merged = mergeRpr(merged, inline);
  rfonts = mergeRFonts(rfonts, extractRFonts(rPr));
  const ff = resolveFontFamily(rfonts, text, themeFonts);
  if (ff) merged = { ...merged != null ? merged : {}, ff };
  return merged;
}

// ../packages/docs-exchange/src/utils/parse/parse-section.ts
var DEFAULT_A4 = { width: 793.7, height: 1122.7 };
var PAGE_ORIENT_PORTRAIT = 0;
var PAGE_ORIENT_LANDSCAPE = 1;
var DOCUMENT_FLAVOR_TRADITIONAL = 1;
var GRID_TYPE_BY_NAME = {
  default: 0,
  lines: 1,
  linesAndChars: 2,
  snapToChars: 3
};
function dxaAttrToPx(value) {
  if (value === void 0) return void 0;
  const n = Number(value);
  if (!Number.isFinite(n)) return void 0;
  return dxaToPx(n);
}
function parseSectionProperties(body) {
  const sectPr = body ? findChild(body, "w:sectPr") : void 0;
  if (!sectPr) {
    return {
      documentStyle: { pageSize: { ...DEFAULT_A4 }, documentFlavor: DOCUMENT_FLAVOR_TRADITIONAL },
      sectionBreakDefaults: {},
      headerRefs: {},
      footerRefs: {},
      titlePage: false
    };
  }
  return parseSectionPropertiesFromNode(sectPr);
}
function parseSectionPropertiesFromNode(sectPr) {
  var _a, _b;
  const style = { documentFlavor: DOCUMENT_FLAVOR_TRADITIONAL };
  const sectionBreakDefaults = {};
  const headerRefs = {};
  const footerRefs = {};
  for (const ref of findChildren(sectPr, "w:headerReference")) {
    const a = nodeAttrs(ref);
    const type = (_a = a["@_w:type"]) != null ? _a : "default";
    const rId = a["@_r:id"];
    if (rId && (type === "default" || type === "first" || type === "even")) headerRefs[type] = rId;
  }
  for (const ref of findChildren(sectPr, "w:footerReference")) {
    const a = nodeAttrs(ref);
    const type = (_b = a["@_w:type"]) != null ? _b : "default";
    const rId = a["@_r:id"];
    if (rId && (type === "default" || type === "first" || type === "even")) footerRefs[type] = rId;
  }
  const titlePage = findChild(sectPr, "w:titlePg") !== void 0;
  const typeNode = findChild(sectPr, "w:type");
  const sectionTypeRaw = typeNode ? nodeAttrs(typeNode)["@_w:val"] : void 0;
  const pgSz = findChild(sectPr, "w:pgSz");
  if (pgSz) {
    const attrs = nodeAttrs(pgSz);
    const width = dxaAttrToPx(attrs["@_w:w"]);
    const height = dxaAttrToPx(attrs["@_w:h"]);
    style.pageSize = {
      width: width != null ? width : DEFAULT_A4.width,
      height: height != null ? height : DEFAULT_A4.height
    };
    if (attrs["@_w:orient"] === "landscape") {
      style.pageOrient = PAGE_ORIENT_LANDSCAPE;
    } else if (attrs["@_w:orient"] === "portrait") {
      style.pageOrient = PAGE_ORIENT_PORTRAIT;
    }
  } else {
    style.pageSize = { ...DEFAULT_A4 };
  }
  const pgMar = findChild(sectPr, "w:pgMar");
  if (pgMar) {
    const attrs = nodeAttrs(pgMar);
    const top = dxaAttrToPx(attrs["@_w:top"]);
    const right = dxaAttrToPx(attrs["@_w:right"]);
    const bottom = dxaAttrToPx(attrs["@_w:bottom"]);
    const left = dxaAttrToPx(attrs["@_w:left"]);
    const header = dxaAttrToPx(attrs["@_w:header"]);
    const footer = dxaAttrToPx(attrs["@_w:footer"]);
    if (top !== void 0) style.marginTop = top;
    if (right !== void 0) style.marginRight = right;
    if (bottom !== void 0) style.marginBottom = bottom;
    if (left !== void 0) style.marginLeft = left;
    if (header !== void 0) style.marginHeader = header;
    if (footer !== void 0) style.marginFooter = footer;
  }
  const docGrid = findChild(sectPr, "w:docGrid");
  if (docGrid) {
    const attrs = nodeAttrs(docGrid);
    const linePitch = dxaAttrToPx(attrs["@_w:linePitch"]);
    if (linePitch !== void 0) sectionBreakDefaults.linePitch = linePitch;
    const typeName = attrs["@_w:type"];
    if (typeName !== void 0 && typeName in GRID_TYPE_BY_NAME) {
      sectionBreakDefaults.gridType = GRID_TYPE_BY_NAME[typeName];
    }
  }
  return { documentStyle: style, sectionBreakDefaults, headerRefs, footerRefs, titlePage, sectionTypeRaw };
}
function parseEvenAndOddHeaders(settingsXml) {
  if (!settingsXml) return false;
  return /<w:evenAndOddHeaders\b/.test(settingsXml);
}

// ../packages/docs-exchange/src/utils/parse/parse-paragraph.ts
function parseBullet(pNode) {
  var _a;
  const pPr = findChild(pNode, "w:pPr");
  if (!pPr) return void 0;
  const numPr = findChild(pPr, "w:numPr");
  if (!numPr) return void 0;
  const numId = findChild(numPr, "w:numId");
  const ilvl = findChild(numPr, "w:ilvl");
  const numIdVal = numId ? nodeAttrs(numId)["@_w:val"] : void 0;
  if (!numIdVal) return void 0;
  if (numIdVal === "0") return void 0;
  const ilvlVal = ilvl ? Number((_a = nodeAttrs(ilvl)["@_w:val"]) != null ? _a : "0") : 0;
  return { numId: numIdVal, ilvl: Number.isNaN(ilvlVal) ? 0 : ilvlVal };
}
function mergePPr(parent, child) {
  var _a, _b, _c;
  if (!parent) return child;
  if (!child) return parent;
  const merged = { ...parent, ...child };
  if (parent.tabStops || child.tabStops || child.tabStopsClear) {
    const cleared = new Set((_a = child.tabStopsClear) != null ? _a : []);
    const byOffset = /* @__PURE__ */ new Map();
    for (const stop of (_b = parent.tabStops) != null ? _b : []) {
      if (!cleared.has(stop.offset)) byOffset.set(stop.offset, stop);
    }
    for (const stop of (_c = child.tabStops) != null ? _c : []) {
      byOffset.set(stop.offset, stop);
    }
    const finalStops = [...byOffset.values()].sort((a, b) => a.offset - b.offset);
    if (finalStops.length > 0) merged.tabStops = finalStops;
    else delete merged.tabStops;
    delete merged.tabStopsClear;
  }
  return merged;
}
function parseParagraph(pNode, drawingsOut, styles, themeFonts) {
  const pPr = findChild(pNode, "w:pPr");
  const styleRef = pPrStyleRef(pPr);
  const resolved = styles == null ? void 0 : styles.resolvePStyle(styleRef);
  const inline = parsePPr(pPr);
  let style = mergePPr(styles == null ? void 0 : styles.docDefaults.pPr, resolved == null ? void 0 : resolved.pPr);
  style = mergePPr(style, inline);
  const pStyleRpr = resolved == null ? void 0 : resolved.rPr;
  const pStyleRFonts = resolved == null ? void 0 : resolved.rFonts;
  const out = {
    runs: parseRunsFromPNode(pNode, drawingsOut, styles, pStyleRpr, themeFonts, pStyleRFonts)
  };
  if (style) out.style = style;
  const bullet = parseBullet(pNode);
  if (bullet) out.bullet = bullet;
  const inlineSectPr = pPr ? findChild(pPr, "w:sectPr") : void 0;
  if (inlineSectPr) out.sectionBreakAfter = parseSectionPropertiesFromNode(inlineSectPr);
  return out;
}

// ../packages/docs-exchange/src/utils/parse/parse-table.ts
function parseBorder2(node) {
  const a = nodeAttrs(node);
  const out = {};
  const val = a["@_w:val"];
  if (val) out.val = val;
  const color = a["@_w:color"];
  if (color) out.color = color;
  const sz = Number(a["@_w:sz"]);
  if (!Number.isNaN(sz)) out.sizeEighths = sz;
  return out;
}
function parseBorderSet(node, includeInside) {
  const out = {};
  for (const child of nodeChildren(node)) {
    const name = nodeName(child);
    switch (name) {
      case "w:top":
        out.top = parseBorder2(child);
        break;
      case "w:bottom":
        out.bottom = parseBorder2(child);
        break;
      case "w:left":
      case "w:start":
        out.left = parseBorder2(child);
        break;
      case "w:right":
      case "w:end":
        out.right = parseBorder2(child);
        break;
      case "w:insideH":
        if (includeInside) out.insideH = parseBorder2(child);
        break;
      case "w:insideV":
        if (includeInside) out.insideV = parseBorder2(child);
        break;
    }
  }
  return out;
}
function parseShdFill(shd) {
  const fill = nodeAttrs(shd)["@_w:fill"];
  if (!fill || fill === "auto") return void 0;
  return fill;
}
function parseMargins(node) {
  const out = {};
  for (const child of nodeChildren(node)) {
    const name = nodeName(child);
    const a = nodeAttrs(child);
    const w = Number(a["@_w:w"]);
    if (Number.isNaN(w)) continue;
    const px = dxaToPx(w);
    if (name === "w:top") out.top = px;
    else if (name === "w:bottom") out.bottom = px;
    else if (name === "w:start" || name === "w:left") out.start = px;
    else if (name === "w:end" || name === "w:right") out.end = px;
  }
  return Object.keys(out).length > 0 ? out : void 0;
}
function parseCellPr(tcPr, cell) {
  for (const child of nodeChildren(tcPr)) {
    const name = nodeName(child);
    const a = nodeAttrs(child);
    switch (name) {
      case "w:gridSpan": {
        const v = Number(a["@_w:val"]);
        if (!Number.isNaN(v) && v > 1) cell.columnSpan = v;
        break;
      }
      case "w:vMerge": {
        const v = a["@_w:val"];
        cell.vMerge = v === "restart" ? "restart" : "continue";
        break;
      }
      case "w:shd": {
        const fill = parseShdFill(child);
        if (fill) cell.shadingFill = fill;
        break;
      }
      case "w:tcBorders":
        cell.borders = parseBorderSet(child, false);
        break;
      case "w:vAlign": {
        const v = a["@_w:val"];
        if (v === "top" || v === "center" || v === "bottom") cell.vAlign = v;
        break;
      }
      case "w:tcMar": {
        const m = parseMargins(child);
        if (m) cell.margin = m;
        break;
      }
      case "w:tcW": {
        const type = a["@_w:type"];
        const w = Number(a["@_w:w"]);
        if (type === "dxa" && !Number.isNaN(w)) cell.preferredWidthPx = dxaToPx(w);
        break;
      }
    }
  }
}
function parseTblPr(tblPr, t) {
  for (const child of nodeChildren(tblPr)) {
    const name = nodeName(child);
    const a = nodeAttrs(child);
    switch (name) {
      case "w:tblStyle": {
        const v = a["@_w:val"];
        if (v) t.styleRef = v;
        break;
      }
      case "w:tblBorders":
        t.borders = parseBorderSet(child, true);
        break;
      case "w:shd": {
        const fill = parseShdFill(child);
        if (fill) t.shadingFill = fill;
        break;
      }
      case "w:tblCellMar": {
        const m = parseMargins(child);
        if (m) t.cellMargin = m;
        break;
      }
      case "w:jc": {
        const v = a["@_w:val"];
        if (v === "start" || v === "left") t.align = "start";
        else if (v === "center") t.align = "center";
        else if (v === "end" || v === "right") t.align = "end";
        break;
      }
      case "w:tblInd": {
        const type = a["@_w:type"];
        const w = Number(a["@_w:w"]);
        if ((type === void 0 || type === "dxa") && !Number.isNaN(w)) t.indentPx = dxaToPx(w);
        break;
      }
      case "w:tblLayout": {
        const v = a["@_w:type"];
        if (v === "fixed") t.layout = "fixed";
        else if (v === "autofit") t.layout = "autofit";
        break;
      }
      case "w:tblW": {
        const type = a["@_w:type"];
        const w = Number(a["@_w:w"]);
        if (type === "dxa" && !Number.isNaN(w)) t.preferredWidthPx = dxaToPx(w);
        break;
      }
    }
  }
}
function mergeBordersInherit(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function mergeMarginInherit(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function parseRowPr(trPr) {
  const out = {};
  for (const child of nodeChildren(trPr)) {
    const name = nodeName(child);
    const a = nodeAttrs(child);
    switch (name) {
      case "w:trHeight": {
        const v = Number(a["@_w:val"]);
        if (Number.isNaN(v)) break;
        const rule = a["@_w:hRule"];
        let mapped = "atLeast";
        if (rule === "auto") mapped = "auto";
        else if (rule === "exact") mapped = "exact";
        out.height = { v: dxaToPx(v), rule: mapped };
        break;
      }
      case "w:cantSplit":
        out.cantSplit = true;
        break;
      case "w:tblHeader":
        out.isHeader = true;
        break;
    }
  }
  return out;
}
function parseTable(tblNode, drawingsOut, styles, themeFonts) {
  var _a, _b, _c, _d;
  const result = { rows: [] };
  const tblPr = findChild(tblNode, "w:tblPr");
  if (tblPr) parseTblPr(tblPr, result);
  const resolvedStyle = styles == null ? void 0 : styles.resolveTableStyle(result.styleRef);
  if (resolvedStyle) {
    if (resolvedStyle.borders) {
      result.borders = mergeBordersInherit(resolvedStyle.borders, result.borders);
    }
    if (result.shadingFill === void 0 && resolvedStyle.shadingFill) {
      result.shadingFill = resolvedStyle.shadingFill;
    }
    if (resolvedStyle.cellMargin) {
      result.cellMargin = mergeMarginInherit(resolvedStyle.cellMargin, result.cellMargin);
    }
  }
  const styleCellDefaults = resolvedStyle ? {
    borders: resolvedStyle.cellBorders,
    shadingFill: resolvedStyle.cellShadingFill,
    vAlign: resolvedStyle.cellVAlign,
    margin: resolvedStyle.cellMargin_tcPr
  } : void 0;
  const rawRows = [];
  const rowHeights = [];
  const rowCantSplit = [];
  const rowIsHeader = [];
  for (const child of nodeChildren(tblNode)) {
    if (nodeName(child) !== "w:tr") continue;
    const trPr = findChild(child, "w:trPr");
    const rowPr = trPr ? parseRowPr(trPr) : {};
    rowHeights.push(rowPr.height);
    rowCantSplit.push((_a = rowPr.cantSplit) != null ? _a : false);
    rowIsHeader.push((_b = rowPr.isHeader) != null ? _b : false);
    const cells = [];
    for (const tc of nodeChildren(child)) {
      if (nodeName(tc) !== "w:tc") continue;
      const paragraphs = nodeChildren(tc).filter((c) => nodeName(c) === "w:p").map((p) => parseParagraph(p, drawingsOut, styles, themeFonts));
      const cell = { paragraphs };
      const tcPr = findChild(tc, "w:tcPr");
      if (tcPr) parseCellPr(tcPr, cell);
      if (styleCellDefaults) {
        if (styleCellDefaults.borders) {
          cell.borders = mergeBordersInherit(styleCellDefaults.borders, cell.borders);
        }
        if (cell.shadingFill === void 0 && styleCellDefaults.shadingFill) {
          cell.shadingFill = styleCellDefaults.shadingFill;
        }
        if (cell.vAlign === void 0 && styleCellDefaults.vAlign) {
          cell.vAlign = styleCellDefaults.vAlign;
        }
        if (styleCellDefaults.margin) {
          cell.margin = mergeMarginInherit(styleCellDefaults.margin, cell.margin);
        }
      }
      cells.push(cell);
    }
    if (cells.length > 0) rawRows.push(cells);
  }
  for (let r = 0; r < rawRows.length; r++) {
    let colCursor = 0;
    for (const cell of rawRows[r]) {
      if (cell.vMerge === "restart") {
        const startCol = colCursor;
        let span = 1;
        for (let r2 = r + 1; r2 < rawRows.length; r2++) {
          let c2 = 0;
          let matched;
          for (const c of rawRows[r2]) {
            if (c2 === startCol) {
              matched = c;
              break;
            }
            c2 += (_c = c.columnSpan) != null ? _c : 1;
          }
          if (matched && matched.vMerge === "continue") span++;
          else break;
        }
        if (span > 1) cell.rowSpan = span;
      }
      colCursor += (_d = cell.columnSpan) != null ? _d : 1;
    }
  }
  result.rows = rawRows;
  const grid = findChild(tblNode, "w:tblGrid");
  if (grid) {
    const cols = findChildren(grid, "w:gridCol");
    result.columnWidths = cols.map((c) => {
      const w = Number(nodeAttrs(c)["@_w:w"]);
      return Number.isNaN(w) ? 0 : dxaToPx(w);
    });
  }
  if (rowHeights.some((h) => h !== void 0)) result.rowHeights = rowHeights;
  if (rowCantSplit.some(Boolean)) result.rowCantSplit = rowCantSplit;
  if (rowIsHeader.some(Boolean)) result.rowIsHeader = rowIsHeader;
  return result;
}

// ../packages/docs-exchange/src/utils/parse/parse-header-footer.ts
function parseHeaderFooterXml(xml, rootTag, ctx) {
  let parsed;
  try {
    parsed = xmlParser.parse(xml);
  } catch {
    return void 0;
  }
  const root = parsed.find((n) => nodeName(n) === rootTag);
  if (!root) return void 0;
  const drawingInfoMap = /* @__PURE__ */ new Map();
  const children = [];
  for (const child of flattenSdt(nodeChildren(root))) {
    const name = nodeName(child);
    try {
      if (name === "w:p") {
        children.push({
          kind: "paragraph",
          paragraph: parseParagraph(child, drawingInfoMap, ctx.styles, ctx.themeFonts)
        });
      } else if (name === "w:tbl") {
        children.push({
          kind: "table",
          table: parseTable(child, drawingInfoMap, ctx.styles, ctx.themeFonts)
        });
      }
    } catch (err) {
      console.warn(`[ieport-docx] Failed to parse <${name}> in ${rootTag}:`, err.message);
    }
  }
  const sub = assembleDocument(children, {
    numbering: ctx.numbering,
    rels: ctx.rels,
    media: ctx.media,
    drawingInfoMap
  });
  return {
    body: sub.body,
    drawings: sub.drawings,
    lists: sub.lists,
    tableSource: sub.tableSource
  };
}
function parseHeaderFooterRels(relsXml) {
  return parseRelationships(relsXml);
}

// ../packages/docs-exchange/src/utils/parse/parse-numbering.ts
var CHECKBOX_GLYPHS = /* @__PURE__ */ new Set(["\u2610", "\u2611", "\u2612", "\u25A1", "\u25A0"]);
var CHECKBOX_FONTS = /* @__PURE__ */ new Set(["wingdings", "symbol"]);
function parseLevels(absNum) {
  var _a, _b, _c, _d, _e;
  const out = [];
  for (const lvl of findChildren(absNum, "w:lvl")) {
    const ilvl = Number((_a = nodeAttrs(lvl)["@_w:ilvl"]) != null ? _a : "0");
    const fmtNode = findChild(lvl, "w:numFmt");
    const textNode = findChild(lvl, "w:lvlText");
    const startNode = findChild(lvl, "w:start");
    const rPr = findChild(lvl, "w:rPr");
    const rFonts = rPr ? findChild(rPr, "w:rFonts") : void 0;
    const fontFamily = rFonts ? ((_b = nodeAttrs(rFonts)["@_w:ascii"]) != null ? _b : "").toLowerCase() : void 0;
    const lvlPPr = findChild(lvl, "w:pPr");
    const lvlStyle = parsePPr(lvlPPr);
    const raw = {
      ilvl: Number.isNaN(ilvl) ? 0 : ilvl,
      format: fmtNode ? (_c = nodeAttrs(fmtNode)["@_w:val"]) != null ? _c : "decimal" : "decimal",
      text: textNode ? (_d = nodeAttrs(textNode)["@_w:val"]) != null ? _d : "" : "",
      start: startNode ? Number((_e = nodeAttrs(startNode)["@_w:val"]) != null ? _e : "1") : 1,
      fontFamily
    };
    if (lvlStyle == null ? void 0 : lvlStyle.indentStart) raw.indentStart = lvlStyle.indentStart;
    if (lvlStyle == null ? void 0 : lvlStyle.hanging) raw.hanging = lvlStyle.hanging;
    if (lvlStyle == null ? void 0 : lvlStyle.indentFirstLine) raw.indentFirstLine = lvlStyle.indentFirstLine;
    out.push(raw);
  }
  return out;
}
function deriveListType(levels) {
  const lvl0 = levels[0];
  if (lvl0 && lvl0.format === "bullet") {
    const isCheckbox = CHECKBOX_GLYPHS.has(lvl0.text) || (lvl0.fontFamily ? CHECKBOX_FONTS.has(lvl0.fontFamily) : false);
    if (isCheckbox) return { listType: "CHECK_LIST", isCheckbox: true };
    return { listType: "BULLET_LIST", isCheckbox: false };
  }
  return { listType: "ORDER_LIST", isCheckbox: false };
}
function parseNumbering(numberingXml) {
  var _a, _b, _c, _d;
  const result = /* @__PURE__ */ new Map();
  if (!numberingXml) return result;
  let parsed;
  try {
    parsed = xmlParser.parse(numberingXml);
  } catch {
    return result;
  }
  const root = parsed.find((n) => nodeName(n) === "w:numbering");
  if (!root) return result;
  const abstractMap = /* @__PURE__ */ new Map();
  for (const absNum of findChildren(root, "w:abstractNum")) {
    const id = (_a = nodeAttrs(absNum)["@_w:abstractNumId"]) != null ? _a : "";
    abstractMap.set(id, parseLevels(absNum));
  }
  for (const num of findChildren(root, "w:num")) {
    const numId = (_b = nodeAttrs(num)["@_w:numId"]) != null ? _b : "";
    const absRef = findChild(num, "w:abstractNumId");
    const absId = absRef ? (_c = nodeAttrs(absRef)["@_w:val"]) != null ? _c : "" : "";
    const rawLevels = (_d = abstractMap.get(absId)) != null ? _d : [];
    const { listType, isCheckbox } = deriveListType(rawLevels);
    const levels = rawLevels.map(({ ilvl, format, text, start, indentStart, hanging, indentFirstLine }) => {
      const lvl = { ilvl, format, text, start };
      if (indentStart) lvl.indentStart = indentStart;
      if (hanging) lvl.hanging = hanging;
      if (indentFirstLine) lvl.indentFirstLine = indentFirstLine;
      return lvl;
    });
    result.set(numId, { numId, abstractNumId: absId, levels, isCheckbox, listType });
  }
  return result;
}

// ../packages/docs-exchange/src/utils/parse/parse-styles.ts
var EMPTY_INDEX = {
  docDefaults: {},
  paragraphStyles: /* @__PURE__ */ new Map(),
  characterStyles: /* @__PURE__ */ new Map(),
  tableStyles: /* @__PURE__ */ new Map(),
  resolvePStyle: () => ({}),
  resolveRStyle: () => void 0,
  resolveRFonts: () => void 0,
  resolveTableStyle: () => ({})
};
function mergePPr2(parent, child) {
  var _a, _b, _c;
  if (!parent) return child;
  if (!child) return parent;
  const merged = { ...parent, ...child };
  if (parent.tabStops || child.tabStops || child.tabStopsClear) {
    const cleared = new Set((_a = child.tabStopsClear) != null ? _a : []);
    const byOffset = /* @__PURE__ */ new Map();
    for (const stop of (_b = parent.tabStops) != null ? _b : []) {
      if (!cleared.has(stop.offset)) byOffset.set(stop.offset, stop);
    }
    for (const stop of (_c = child.tabStops) != null ? _c : []) byOffset.set(stop.offset, stop);
    const finalStops = [...byOffset.values()].sort((a, b) => a.offset - b.offset);
    if (finalStops.length > 0) merged.tabStops = finalStops;
    else delete merged.tabStops;
    delete merged.tabStopsClear;
  }
  return merged;
}
function mergeRPr(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function mergeRFonts2(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function parseDocDefaults(stylesRoot) {
  const out = {};
  const docDefaults = findChild(stylesRoot, "w:docDefaults");
  if (!docDefaults) return out;
  const rPrDefault = findChild(docDefaults, "w:rPrDefault");
  if (rPrDefault) {
    const rPr = findChild(rPrDefault, "w:rPr");
    const parsed = parseRPr(rPr);
    if (parsed) out.rPr = parsed;
    const rfonts = extractRFonts(rPr);
    if (rfonts) out.rFonts = rfonts;
  }
  const pPrDefault = findChild(docDefaults, "w:pPrDefault");
  if (pPrDefault) {
    const pPr = findChild(pPrDefault, "w:pPr");
    const parsed = parsePPr(pPr);
    if (parsed) out.pPr = parsed;
  }
  return out;
}
function parseNamedStyle(styleNode) {
  const basedOnNode = findChild(styleNode, "w:basedOn");
  const basedOn = basedOnNode ? nodeAttrs(basedOnNode)["@_w:val"] : void 0;
  const pPr = findChild(styleNode, "w:pPr");
  const rPr = findChild(styleNode, "w:rPr");
  const out = {};
  if (basedOn) out.basedOn = basedOn;
  const parsedPPr = parsePPr(pPr);
  if (parsedPPr) out.pPr = parsedPPr;
  const parsedRPr = parseRPr(rPr);
  if (parsedRPr) out.rPr = parsedRPr;
  const rfonts = extractRFonts(rPr);
  if (rfonts) out.rFonts = rfonts;
  return out;
}
function parseBorderInline(node) {
  const a = nodeAttrs(node);
  const out = {};
  const val = a["@_w:val"];
  if (val) out.val = val;
  const color = a["@_w:color"];
  if (color) out.color = color;
  const sz = Number(a["@_w:sz"]);
  if (!Number.isNaN(sz)) out.sizeEighths = sz;
  return out;
}
function parseBorderSetInline(node, includeInside) {
  const out = {};
  for (const child of nodeChildren(node)) {
    const name = nodeName(child);
    switch (name) {
      case "w:top":
        out.top = parseBorderInline(child);
        break;
      case "w:bottom":
        out.bottom = parseBorderInline(child);
        break;
      case "w:left":
      case "w:start":
        out.left = parseBorderInline(child);
        break;
      case "w:right":
      case "w:end":
        out.right = parseBorderInline(child);
        break;
      case "w:insideH":
        if (includeInside) out.insideH = parseBorderInline(child);
        break;
      case "w:insideV":
        if (includeInside) out.insideV = parseBorderInline(child);
        break;
    }
  }
  return out;
}
function parseMarginsInline(node) {
  const out = {};
  for (const child of nodeChildren(node)) {
    const name = nodeName(child);
    const a = nodeAttrs(child);
    const w = Number(a["@_w:w"]);
    if (Number.isNaN(w)) continue;
    const px = dxaToPx(w);
    if (name === "w:top") out.top = px;
    else if (name === "w:bottom") out.bottom = px;
    else if (name === "w:start" || name === "w:left") out.start = px;
    else if (name === "w:end" || name === "w:right") out.end = px;
  }
  return Object.keys(out).length > 0 ? out : void 0;
}
function parseShdFillInline(shd) {
  const fill = nodeAttrs(shd)["@_w:fill"];
  if (!fill || fill === "auto") return void 0;
  return fill;
}
function parseNamedTableStyle(styleNode) {
  const out = {};
  const basedOnNode = findChild(styleNode, "w:basedOn");
  const basedOn = basedOnNode ? nodeAttrs(basedOnNode)["@_w:val"] : void 0;
  if (basedOn) out.basedOn = basedOn;
  const rPr = findChild(styleNode, "w:rPr");
  const parsedRPr = parseRPr(rPr);
  if (parsedRPr) out.rPr = parsedRPr;
  const rfonts = extractRFonts(rPr);
  if (rfonts) out.rFonts = rfonts;
  const tblPr = findChild(styleNode, "w:tblPr");
  if (tblPr) {
    const tblBorders = findChild(tblPr, "w:tblBorders");
    if (tblBorders) out.borders = parseBorderSetInline(tblBorders, true);
    const shd = findChild(tblPr, "w:shd");
    if (shd) {
      const fill = parseShdFillInline(shd);
      if (fill) out.shadingFill = fill;
    }
    const tblCellMar = findChild(tblPr, "w:tblCellMar");
    if (tblCellMar) {
      const m = parseMarginsInline(tblCellMar);
      if (m) out.cellMargin = m;
    }
  }
  const tcPr = findChild(styleNode, "w:tcPr");
  if (tcPr) {
    const tcBorders = findChild(tcPr, "w:tcBorders");
    if (tcBorders) out.cellBorders = parseBorderSetInline(tcBorders, false);
    const shd = findChild(tcPr, "w:shd");
    if (shd) {
      const fill = parseShdFillInline(shd);
      if (fill) out.cellShadingFill = fill;
    }
    const vAlign = findChild(tcPr, "w:vAlign");
    if (vAlign) {
      const v = nodeAttrs(vAlign)["@_w:val"];
      if (v === "top" || v === "center" || v === "bottom") out.cellVAlign = v;
    }
    const tcMar = findChild(tcPr, "w:tcMar");
    if (tcMar) {
      const m = parseMarginsInline(tcMar);
      if (m) out.cellMargin_tcPr = m;
    }
  }
  return out;
}
function mergeBorders(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function mergeCellBorders(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function mergeMargin(parent, child) {
  if (!parent) return child;
  if (!child) return parent;
  return { ...parent, ...child };
}
function resolveTableChain(styleId, styles) {
  var _a, _b, _c;
  if (!styleId) return {};
  const chain = [];
  const seen = /* @__PURE__ */ new Set();
  let cur = styleId;
  while (cur && !seen.has(cur)) {
    seen.add(cur);
    const s = styles.get(cur);
    if (!s) break;
    chain.push(s);
    cur = s.basedOn;
  }
  let out = {};
  for (let i = chain.length - 1; i >= 0; i--) {
    const s = chain[i];
    out = {
      borders: mergeBorders(out.borders, s.borders),
      shadingFill: (_a = s.shadingFill) != null ? _a : out.shadingFill,
      cellMargin: mergeMargin(out.cellMargin, s.cellMargin),
      cellBorders: mergeCellBorders(out.cellBorders, s.cellBorders),
      cellShadingFill: (_b = s.cellShadingFill) != null ? _b : out.cellShadingFill,
      cellVAlign: (_c = s.cellVAlign) != null ? _c : out.cellVAlign,
      cellMargin_tcPr: mergeMargin(out.cellMargin_tcPr, s.cellMargin_tcPr),
      rPr: mergeRPr(out.rPr, s.rPr),
      rFonts: mergeRFonts2(out.rFonts, s.rFonts)
    };
  }
  return out;
}
function resolveChain(styleId, styles) {
  if (!styleId) return {};
  const chain = [];
  const seen = /* @__PURE__ */ new Set();
  let cur = styleId;
  while (cur && !seen.has(cur)) {
    seen.add(cur);
    const style = styles.get(cur);
    if (!style) break;
    chain.push(style);
    cur = style.basedOn;
  }
  let pPr;
  let rPr;
  let rFonts;
  for (let i = chain.length - 1; i >= 0; i--) {
    pPr = mergePPr2(pPr, chain[i].pPr);
    rPr = mergeRPr(rPr, chain[i].rPr);
    rFonts = mergeRFonts2(rFonts, chain[i].rFonts);
  }
  const out = {};
  if (pPr) out.pPr = pPr;
  if (rPr) out.rPr = rPr;
  if (rFonts) out.rFonts = rFonts;
  return out;
}
function parseStyles(stylesXml) {
  if (!stylesXml) return EMPTY_INDEX;
  let parsed;
  try {
    parsed = xmlParser.parse(stylesXml);
  } catch {
    return EMPTY_INDEX;
  }
  const root = parsed.find((n) => nodeName(n) === "w:styles");
  if (!root) return EMPTY_INDEX;
  const docDefaults = parseDocDefaults(root);
  const paragraphStyles = /* @__PURE__ */ new Map();
  const characterStyles = /* @__PURE__ */ new Map();
  const tableStyles = /* @__PURE__ */ new Map();
  for (const styleNode of findChildren(root, "w:style")) {
    const attrs = nodeAttrs(styleNode);
    const type = attrs["@_w:type"];
    const styleId = attrs["@_w:styleId"];
    if (!styleId) continue;
    if (type === "paragraph") paragraphStyles.set(styleId, parseNamedStyle(styleNode));
    else if (type === "character") characterStyles.set(styleId, parseNamedStyle(styleNode));
    else if (type === "table") tableStyles.set(styleId, parseNamedTableStyle(styleNode));
  }
  return {
    docDefaults,
    paragraphStyles,
    characterStyles,
    tableStyles,
    resolvePStyle: (id) => resolveChain(id, paragraphStyles),
    resolveRStyle: (id) => resolveChain(id, characterStyles).rPr,
    resolveRFonts: (id) => resolveChain(id, characterStyles).rFonts,
    resolveTableStyle: (id) => resolveTableChain(id, tableStyles)
  };
}

// ../packages/docs-exchange/src/utils/parse/parse-theme.ts
var EMPTY = { resolve: () => void 0 };
function parseTheme(themeXml) {
  if (!themeXml) return EMPTY;
  let parsed;
  try {
    parsed = xmlParser.parse(themeXml);
  } catch {
    return EMPTY;
  }
  const themeRoot = parsed.find((n) => nodeName(n) === "a:theme");
  if (!themeRoot) return EMPTY;
  const elements = findChild(themeRoot, "a:themeElements");
  if (!elements) return EMPTY;
  const fontScheme = findChild(elements, "a:fontScheme");
  if (!fontScheme) return EMPTY;
  const minor = readFontGroup(findChild(fontScheme, "a:minorFont"));
  const major = readFontGroup(findChild(fontScheme, "a:majorFont"));
  return {
    resolve(ref) {
      if (!ref) return void 0;
      const isMajor = ref.startsWith("major");
      const group = isMajor ? major : minor;
      const role = ref.slice(5);
      switch (role) {
        case "HAnsi":
        case "Ascii":
          return group.latin;
        case "EastAsia":
          return group.eastAsia;
        case "Bidi":
        case "Cs":
          return group.cs;
        default:
          return void 0;
      }
    }
  };
}
function readFontGroup(group) {
  if (!group) return {};
  const out = {};
  const latin = findChild(group, "a:latin");
  if (latin) {
    const v = nodeAttrs(latin)["@_typeface"];
    if (v) out.latin = v;
  }
  const ea = findChild(group, "a:ea");
  if (ea) {
    const v = nodeAttrs(ea)["@_typeface"];
    if (v) out.eastAsia = v;
  }
  if (!out.eastAsia) {
    for (const f of findChildren(group, "a:font")) {
      if (nodeAttrs(f)["@_script"] === "Hans") {
        const v = nodeAttrs(f)["@_typeface"];
        if (v) {
          out.eastAsia = v;
          break;
        }
      }
    }
  }
  const cs = findChild(group, "a:cs");
  if (cs) {
    const v = nodeAttrs(cs)["@_typeface"];
    if (v) out.cs = v;
  }
  return out;
}

// ../packages/docs-exchange/src/utils/parse/parse-watermark.ts
var DEFAULT_TEXT_WATERMARK = {
  type: "text",
  content: "",
  fontFamily: "Arial",
  fontSize: 144,
  color: "rgb(192,192,192)",
  bold: false,
  italic: false,
  direction: "ltr",
  x: 0,
  y: 0,
  repeat: false,
  spacingX: 0,
  spacingY: 0,
  // No fallback rotation: a watermark with no explicit rotation in
  // either VML style:rotation or DrawingML xfrm@rot is upright. The
  // old "DRAFT defaults to -45" assumption is wrong for any modern
  // writer (WPS, current Word "Insert > Watermark") — they always
  // emit an explicit rotation when one is wanted.
  rotate: 0,
  opacity: 0.5
};
var DEFAULT_IMAGE_WATERMARK = {
  type: "image",
  x: 0,
  y: 0,
  repeat: false,
  spacingX: 0,
  spacingY: 0,
  rotate: 0,
  opacity: 0.5,
  maintainAspectRatio: true
};
function parseWatermarksBySource(sources, rootTag, relsByStem, media) {
  var _a;
  const out = /* @__PURE__ */ new Map();
  for (const [stem, xml] of sources) {
    const rels = (_a = relsByStem == null ? void 0 : relsByStem.get(stem)) != null ? _a : /* @__PURE__ */ new Map();
    const items = parseWatermarksFromXml(xml, rootTag, { rels, media });
    if (items.length > 0) out.set(stem, items);
  }
  return out;
}
function parseWatermarksFromXml(xml, rootTag, opts) {
  let parsed;
  try {
    parsed = xmlParser.parse(xml);
  } catch {
    return [];
  }
  const root = parsed.find((n) => nodeName(n) === rootTag);
  if (!root) return [];
  const shapes = collectVmlWatermarkShapes(root);
  const out = [];
  for (const shape of shapes) {
    const wm = parseShapeAsWatermark(shape, opts);
    if (wm) out.push(wm);
  }
  const anchors = collectDrawingMlWatermarkAnchors(root);
  for (const anchor of anchors) {
    const wm = parseDrawingMlAnchorAsImage(anchor, opts);
    if (wm) out.push(wm);
  }
  return out;
}
function parseShapeAsWatermark(shape, opts) {
  const textpath = findChildDeep(shape, "v:textpath");
  if (textpath) return parseTextShape(shape, textpath);
  const imagedata = findChildDeep(shape, "v:imagedata");
  if (imagedata) return parseImageShape(shape, imagedata, opts);
  return null;
}
function parseTextShape(shape, textpath) {
  var _a, _b, _c, _d, _e;
  const tpAttrs = nodeAttrs(textpath);
  const content = tpAttrs["@_string"];
  if (!content) return null;
  const shapeAttrs = nodeAttrs(shape);
  const tpStyle = parseInlineStyle((_a = tpAttrs["@_style"]) != null ? _a : "");
  const shapeStyle = parseInlineStyle((_b = shapeAttrs["@_style"]) != null ? _b : "");
  const fillcolor = vmlFillColorToCss(shapeAttrs["@_fillcolor"]);
  const opacity = parseFillOpacity(shape);
  const rotate = parseRotation(shapeStyle.rotation);
  const fontFamily = parseFontFamily(tpStyle["font-family"]);
  const fontWeight = ((_c = tpStyle["font-weight"]) != null ? _c : "").trim().toLowerCase();
  const fontStyle = ((_d = tpStyle["font-style"]) != null ? _d : "").trim().toLowerCase();
  const textpathFontPt = parsePtNumber(tpStyle["font-size"]);
  const shapeWidthPt = parsePtNumber(shapeStyle.width);
  const shapeHeightPt = parsePtNumber(shapeStyle.height);
  const fitshape = String((_e = tpAttrs["@_fitshape"]) != null ? _e : "").toLowerCase() === "t";
  const ptSize = textpathFontPt != null ? textpathFontPt : shapeHeightPt;
  const fontSize = ptSize != null ? Math.round(ptSize * (96 / 72)) : DEFAULT_TEXT_WATERMARK.fontSize;
  const boxWidth = fitshape && shapeWidthPt != null ? Math.round(shapeWidthPt * (96 / 72)) : void 0;
  const boxHeight = fitshape && shapeHeightPt != null ? Math.round(shapeHeightPt * (96 / 72)) : void 0;
  return {
    ...DEFAULT_TEXT_WATERMARK,
    content,
    fontFamily: fontFamily != null ? fontFamily : DEFAULT_TEXT_WATERMARK.fontFamily,
    fontSize,
    color: fillcolor != null ? fillcolor : DEFAULT_TEXT_WATERMARK.color,
    opacity: opacity != null ? opacity : DEFAULT_TEXT_WATERMARK.opacity,
    rotate: rotate != null ? rotate : DEFAULT_TEXT_WATERMARK.rotate,
    // bold / italic / weight: Word watermarks rarely set these, but
    // when font-weight or font-style is present we honour them.
    bold: fontWeight === "bold" || /^[5-9]\d{2}$/.test(fontWeight),
    italic: fontStyle === "italic" || fontStyle === "oblique",
    ...vmlMsoAnchors(shapeStyle),
    ...boxWidth != null ? { boxWidth } : {},
    ...boxHeight != null ? { boxHeight } : {}
  };
}
function parseImageShape(shape, imagedata, opts) {
  var _a, _b, _c, _d, _e;
  const imgAttrs = nodeAttrs(imagedata);
  const rId = (_b = (_a = imgAttrs["@_r:id"]) != null ? _a : imgAttrs["@_r:pict"]) != null ? _b : imgAttrs["@_id"];
  if (!rId) return null;
  const rel = opts.rels.get(rId);
  if (!rel || !rel.target) return null;
  const path = resolveMediaPath2(rel.target);
  const bytes = opts.media.get(path);
  if (!bytes) return null;
  const ext = ((_c = path.split(".").pop()) != null ? _c : "png").toLowerCase();
  const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : ext === "gif" ? "image/gif" : ext === "bmp" ? "image/bmp" : ext === "svg" ? "image/svg+xml" : "image/png";
  const dataUrl = `data:${mime};base64,${bytesToBase64(bytes)}`;
  const shapeAttrs = nodeAttrs(shape);
  const shapeStyle = parseInlineStyle((_d = shapeAttrs["@_style"]) != null ? _d : "");
  const widthPt = parsePtNumber(shapeStyle.width);
  const heightPt = parsePtNumber(shapeStyle.height);
  const width = widthPt != null ? Math.round(widthPt * (96 / 72)) : 468;
  const height = heightPt != null ? Math.round(heightPt * (96 / 72)) : 351;
  const originRatio = height > 0 ? width / height : 1;
  const opacity = (_e = parseFillOpacity(shape)) != null ? _e : parseImagedataOpacity(imagedata);
  const rotate = parseRotation(shapeStyle.rotation);
  return {
    ...DEFAULT_IMAGE_WATERMARK,
    dataUrl,
    width,
    height,
    originRatio,
    opacity: opacity != null ? opacity : DEFAULT_IMAGE_WATERMARK.opacity,
    rotate: rotate != null ? rotate : DEFAULT_IMAGE_WATERMARK.rotate,
    ...vmlMsoAnchors(shapeStyle)
  };
}
function collectVmlWatermarkShapes(node) {
  const out = [];
  const visit = (n) => {
    var _a, _b;
    for (const child of nodeChildren(n)) {
      if (nodeName(child) === "v:shape") {
        const attrs = nodeAttrs(child);
        const id = (_a = attrs["@_id"]) != null ? _a : "";
        const type = (_b = attrs["@_type"]) != null ? _b : "";
        const looksLikeWatermark = /watermark/i.test(id) || type === "#_x0000_t136" || // t75 (image) without "watermark" in the id usually
        // means an inline image, not a watermark — but Word's
        // picture-watermark template always uses t75 inside a
        // <w:pict>. We only treat t75 as a watermark when the
        // shape id explicitly contains "WaterMark" or
        // "PictureWatermark", or when it's the only shape in
        // a <w:pict>. The first heuristic catches Word
        // canonical output; the second is handled implicitly
        // by the absence of competing shapes in the header.
        type === "#_x0000_t75" && /watermark|pict/i.test(id);
        if (looksLikeWatermark) out.push(child);
      }
      visit(child);
    }
  };
  visit(node);
  return out;
}
function findChildDeep(node, tagName) {
  for (const child of nodeChildren(node)) {
    if (nodeName(child) === tagName) return child;
    const inner = findChildDeep(child, tagName);
    if (inner) return inner;
  }
  return null;
}
function collectDrawingMlWatermarkAnchors(node) {
  const out = [];
  const visit = (n) => {
    var _a, _b;
    for (const child of nodeChildren(n)) {
      if (nodeName(child) === "wp:anchor") {
        const attrs = nodeAttrs(child);
        const behindDoc = String((_a = attrs["@_behindDoc"]) != null ? _a : "") === "1";
        const docPr = findChildDeep(child, "wp:docPr");
        const name = docPr ? (_b = nodeAttrs(docPr)["@_name"]) != null ? _b : "" : "";
        const looksLikeWatermark = /watermark/i.test(name) || behindDoc && /watermark/i.test(name);
        if (looksLikeWatermark) out.push(child);
      }
      visit(child);
    }
  };
  visit(node);
  return out;
}
function parseDrawingMlAnchorAsImage(anchor, opts) {
  var _a, _b, _c;
  const info = parseDrawingFromXmlNode(anchor);
  if (!info) return null;
  const rel = opts.rels.get(info.rId);
  if (!rel || !rel.target) return null;
  const path = resolveMediaPath2(rel.target);
  const bytes = opts.media.get(path);
  if (!bytes) return null;
  const ext = ((_a = path.split(".").pop()) != null ? _a : "png").toLowerCase();
  const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : ext === "gif" ? "image/gif" : ext === "bmp" ? "image/bmp" : ext === "svg" ? "image/svg+xml" : "image/png";
  const dataUrl = `data:${mime};base64,${bytesToBase64(bytes)}`;
  const width = (_b = info.widthPx) != null ? _b : 468;
  const height = (_c = info.heightPx) != null ? _c : 351;
  const originRatio = height > 0 ? width / height : 1;
  const xfrm = findChildDeep(anchor, "a:xfrm");
  let rotate = 0;
  if (xfrm) {
    const rotAttr = nodeAttrs(xfrm)["@_rot"];
    if (rotAttr != null) {
      const n = Number(rotAttr);
      if (Number.isFinite(n)) rotate = n / 6e4;
    }
  }
  const posH = findChildDeep(anchor, "wp:positionH");
  const posV = findChildDeep(anchor, "wp:positionV");
  const horizontalAlign = positionAlignFrom(posH, "h");
  const verticalAlign = positionAlignFrom(posV, "v");
  return {
    ...DEFAULT_IMAGE_WATERMARK,
    dataUrl,
    width,
    height,
    originRatio,
    rotate,
    ...horizontalAlign ? { horizontalAlign } : {},
    ...verticalAlign ? { verticalAlign } : {}
  };
}
function positionAlignFrom(node, axis) {
  var _a;
  if (!node) return void 0;
  const align = findChildDeep(node, "wp:align");
  if (!align) return void 0;
  const text = String(typeof align === "object" ? (_a = align["#text"]) != null ? _a : "" : align != null ? align : "").toLowerCase().trim();
  if (axis === "h") {
    if (text === "left") return "start";
    if (text === "center") return "center";
    if (text === "right") return "end";
  } else {
    if (text === "top") return "start";
    if (text === "center") return "center";
    if (text === "bottom") return "end";
  }
  return void 0;
}
function vmlMsoAnchors(shapeStyle) {
  var _a, _b;
  const out = {};
  const h = ((_a = shapeStyle["mso-position-horizontal"]) != null ? _a : "").trim().toLowerCase();
  if (h === "left") out.horizontalAlign = "start";
  else if (h === "center") out.horizontalAlign = "center";
  else if (h === "right") out.horizontalAlign = "end";
  const v = ((_b = shapeStyle["mso-position-vertical"]) != null ? _b : "").trim().toLowerCase();
  if (v === "top") out.verticalAlign = "start";
  else if (v === "center") out.verticalAlign = "center";
  else if (v === "bottom") out.verticalAlign = "end";
  return out;
}
function parseInlineStyle(raw) {
  const out = {};
  for (const decl of raw.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const key = decl.slice(0, i).trim().toLowerCase();
    const value = decl.slice(i + 1).trim();
    if (key) out[key] = value;
  }
  return out;
}
function parsePtNumber(raw) {
  if (!raw) return null;
  const m = /^(-?\d+(?:\.\d+)?)\s*pt$/i.exec(raw.trim());
  return m ? Number.parseFloat(m[1]) : null;
}
function vmlFillColorToCss(raw) {
  if (!raw) return null;
  const t = raw.trim();
  return t || null;
}
function parseFillOpacity(shape) {
  const fill = findChildDeep(shape, "v:fill");
  if (!fill) return null;
  const attrs = nodeAttrs(fill);
  const raw = attrs["@_opacity"];
  if (!raw) return null;
  return parseVmlOpacity(raw);
}
function parseImagedataOpacity(imagedata) {
  var _a;
  const raw = nodeAttrs(imagedata)["@_chromakey"] ? null : (_a = nodeAttrs(imagedata)["@_opacity"]) != null ? _a : null;
  if (!raw) return null;
  return parseVmlOpacity(raw);
}
function parseVmlOpacity(raw) {
  const t = raw.trim();
  if (t.endsWith("f")) {
    const n2 = Number.parseFloat(t.slice(0, -1));
    return Number.isFinite(n2) ? n2 / 65536 : null;
  }
  const n = Number.parseFloat(t);
  return Number.isFinite(n) ? n : null;
}
function parseRotation(raw) {
  if (!raw) return null;
  const m = /^(-?\d+(?:\.\d+)?)\s*(?:deg)?$/i.exec(raw.trim());
  return m ? Number.parseFloat(m[1]) : null;
}
function parseFontFamily(raw) {
  if (!raw) return null;
  const first = raw.split(",")[0].trim();
  const unquoted = first.replace(/^["']|["']$/g, "").trim();
  return unquoted || null;
}
function resolveMediaPath2(target) {
  let t = target.replace(/^\/+/, "");
  while (t.startsWith("../")) t = t.slice(3);
  if (t.startsWith("word/")) return t;
  return `word/${t}`;
}

// ../packages/docs-exchange/src/docx-to-univer.ts
var DOC_WATERMARK_PLUGIN = "DOC_WATERMARK_PLUGIN";
var WATERMARK_TYPE_TEXT = "text";
var WATERMARK_TYPE_IMAGE = "image";
async function docxToUniverData(input) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  const bundle = await readOoxmlBundle(input);
  const numbering = parseNumbering(bundle.numberingXml);
  const rels = parseRelationships(bundle.relsXml);
  const styles = parseStyles(bundle.stylesXml);
  const themeFonts = parseTheme(bundle.themeXml);
  const docTree = xmlParser.parse(bundle.documentXml);
  const docRoot = docTree.find((n) => nodeName(n) === "w:document");
  const body = docRoot ? findChild(docRoot, "w:body") : void 0;
  const drawingInfoMap = /* @__PURE__ */ new Map();
  const children = [];
  if (body) {
    for (const child of flattenSdt(nodeChildren(body))) {
      const name = nodeName(child);
      try {
        if (name === "w:p") {
          children.push({ kind: "paragraph", paragraph: parseParagraph(child, drawingInfoMap, styles, themeFonts) });
        } else if (name === "w:tbl") {
          children.push({ kind: "table", table: parseTable(child, drawingInfoMap, styles, themeFonts) });
        }
      } catch (err) {
        console.warn(`[ieport-docx] Failed to parse <${name}>:`, err.message);
      }
    }
  }
  const { documentStyle, sectionBreakDefaults } = parseSectionProperties(body);
  const bodyEndSection = parseSectionProperties(body);
  const inlineSections = [];
  for (const c of children) {
    if (c.kind === "paragraph" && c.paragraph.sectionBreakAfter) {
      inlineSections.push(c.paragraph.sectionBreakAfter);
    }
  }
  const headers = {};
  const footers = {};
  const extraDrawings = {};
  const extraLists = {};
  const extraTableSource = {};
  const refToStem = (rId) => {
    if (!rId) return void 0;
    const rel = rels.get(rId);
    if (!rel || !rel.target) return void 0;
    const m = /(?:^|\/)((?:header|footer)\d+)\.xml$/.exec(rel.target);
    return m == null ? void 0 : m[1];
  };
  const parseHF = (stem, kind) => {
    var _a2;
    if (!stem) return void 0;
    const xmlMap = kind === "header" ? bundle.headers : bundle.footers;
    const relsMap = kind === "header" ? bundle.headerRels : bundle.footerRels;
    const xml = xmlMap == null ? void 0 : xmlMap.get(stem);
    if (!xml) return void 0;
    if (kind === "header" ? headers[stem] : footers[stem]) return stem;
    const hfRels = parseHeaderFooterRels(relsMap == null ? void 0 : relsMap.get(stem));
    const parsed = parseHeaderFooterXml(xml, kind === "header" ? "w:hdr" : "w:ftr", {
      numbering,
      styles,
      themeFonts,
      media: (_a2 = bundle.media) != null ? _a2 : /* @__PURE__ */ new Map(),
      rels: hfRels
    });
    if (!parsed) return void 0;
    if (kind === "header") headers[stem] = { headerId: stem, body: parsed.body };
    else footers[stem] = { footerId: stem, body: parsed.body };
    if (parsed.drawings) Object.assign(extraDrawings, parsed.drawings);
    if (parsed.lists) Object.assign(extraLists, parsed.lists);
    if (parsed.tableSource) Object.assign(extraTableSource, parsed.tableSource);
    return stem;
  };
  const resolveSection = (sec) => {
    sec.resolvedHeaderIds = {
      default: parseHF(refToStem(sec.headerRefs.default), "header"),
      first: parseHF(refToStem(sec.headerRefs.first), "header"),
      even: parseHF(refToStem(sec.headerRefs.even), "header")
    };
    sec.resolvedFooterIds = {
      default: parseHF(refToStem(sec.footerRefs.default), "footer"),
      first: parseHF(refToStem(sec.footerRefs.first), "footer"),
      even: parseHF(refToStem(sec.footerRefs.even), "footer")
    };
  };
  for (const sec of inlineSections) resolveSection(sec);
  resolveSection(bodyEndSection);
  const pickFallbackSection = () => {
    const hasAnyRef = (s) => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      return ((_a2 = s.resolvedHeaderIds) == null ? void 0 : _a2.default) || ((_b2 = s.resolvedHeaderIds) == null ? void 0 : _b2.first) || ((_c2 = s.resolvedHeaderIds) == null ? void 0 : _c2.even) || ((_d2 = s.resolvedFooterIds) == null ? void 0 : _d2.default) || ((_e2 = s.resolvedFooterIds) == null ? void 0 : _e2.first) || ((_f2 = s.resolvedFooterIds) == null ? void 0 : _f2.even);
    };
    if (hasAnyRef(bodyEndSection)) return bodyEndSection;
    return inlineSections.find(hasAnyRef);
  };
  const fallback = pickFallbackSection();
  const fallbackHeaderIds = (_a = fallback == null ? void 0 : fallback.resolvedHeaderIds) != null ? _a : {};
  const fallbackFooterIds = (_b = fallback == null ? void 0 : fallback.resolvedFooterIds) != null ? _b : {};
  const allSections = [...inlineSections, bodyEndSection];
  const carried = { default: void 0, first: void 0, even: void 0 };
  const carriedF = { default: void 0, first: void 0, even: void 0 };
  for (const s of allSections) {
    const h = (_c = s.resolvedHeaderIds) != null ? _c : s.resolvedHeaderIds = {};
    const f = (_d = s.resolvedFooterIds) != null ? _d : s.resolvedFooterIds = {};
    h.default = (_e = h.default) != null ? _e : carried.default;
    h.first = (_f = h.first) != null ? _f : carried.first;
    h.even = (_g = h.even) != null ? _g : carried.even;
    f.default = (_h = f.default) != null ? _h : carriedF.default;
    f.first = (_i = f.first) != null ? _i : carriedF.first;
    f.even = (_j = f.even) != null ? _j : carriedF.even;
    carried.default = h.default;
    carried.first = h.first;
    carried.even = h.even;
    carriedF.default = f.default;
    carriedF.first = f.first;
    carriedF.even = f.even;
  }
  const evenAndOdd = parseEvenAndOddHeaders(bundle.settingsXml);
  if (fallbackHeaderIds.default) documentStyle.defaultHeaderId = fallbackHeaderIds.default;
  if (fallbackFooterIds.default) documentStyle.defaultFooterId = fallbackFooterIds.default;
  if (fallbackHeaderIds.first) documentStyle.firstPageHeaderId = fallbackHeaderIds.first;
  if (fallbackFooterIds.first) documentStyle.firstPageFooterId = fallbackFooterIds.first;
  if (fallbackHeaderIds.even) documentStyle.evenPageHeaderId = fallbackHeaderIds.even;
  if (fallbackFooterIds.even) documentStyle.evenPageFooterId = fallbackFooterIds.even;
  if (evenAndOdd) documentStyle.evenAndOddHeaders = 1;
  const docData = assembleDocument(children, {
    numbering,
    rels,
    media: (_k = bundle.media) != null ? _k : /* @__PURE__ */ new Map(),
    drawingInfoMap,
    documentStyle,
    sectionBreakDefaults,
    bodyEndSection
  });
  if (Object.keys(headers).length > 0) docData.headers = headers;
  if (Object.keys(footers).length > 0) docData.footers = footers;
  if (Object.keys(extraDrawings).length > 0) {
    docData.drawings = { ...(_l = docData.drawings) != null ? _l : {}, ...extraDrawings };
  }
  if (Object.keys(extraLists).length > 0) {
    docData.lists = { ...(_m = docData.lists) != null ? _m : {}, ...extraLists };
  }
  if (Object.keys(extraTableSource).length > 0) {
    docData.tableSource = { ...(_n = docData.tableSource) != null ? _n : {}, ...extraTableSource };
  }
  const headerRelsByStem = /* @__PURE__ */ new Map();
  for (const [stem, relsXml] of (_o = bundle.headerRels) != null ? _o : /* @__PURE__ */ new Map()) {
    headerRelsByStem.set(stem, parseHeaderFooterRels(relsXml));
  }
  const footerRelsByStem = /* @__PURE__ */ new Map();
  for (const [stem, relsXml] of (_p = bundle.footerRels) != null ? _p : /* @__PURE__ */ new Map()) {
    footerRelsByStem.set(stem, parseHeaderFooterRels(relsXml));
  }
  const media = (_q = bundle.media) != null ? _q : /* @__PURE__ */ new Map();
  const watermarksByHeader = parseWatermarksBySource(
    (_r = bundle.headers) != null ? _r : /* @__PURE__ */ new Map(),
    "w:hdr",
    headerRelsByStem,
    media
  );
  const watermarksByFooter = parseWatermarksBySource(
    (_s = bundle.footers) != null ? _s : /* @__PURE__ */ new Map(),
    "w:ftr",
    footerRelsByStem,
    media
  );
  if (watermarksByHeader.size > 0 || watermarksByFooter.size > 0) {
    const toConfigList = (items) => items.map((wm) => {
      if (wm.type === "text") {
        return { type: WATERMARK_TYPE_TEXT, config: { text: wm } };
      }
      const { dataUrl, ...rest } = wm;
      return {
        type: WATERMARK_TYPE_IMAGE,
        config: { image: { ...rest, url: dataUrl } }
      };
    });
    const byHeader = {};
    for (const [stem, items] of watermarksByHeader) byHeader[stem] = toConfigList(items);
    const byFooter = {};
    for (const [stem, items] of watermarksByFooter) byFooter[stem] = toConfigList(items);
    docData.resources = (_t = docData.resources) != null ? _t : [];
    docData.resources.push({
      name: DOC_WATERMARK_PLUGIN,
      data: JSON.stringify({ byHeader, byFooter })
    });
  }
  return docData;
}

// ../packages/docs-exchange-ui/src/commands/commands/docx-import.command.ts
async function pickDocxFile() {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    input.style.display = "none";
    input.addEventListener("change", async () => {
      var _a;
      const file = (_a = input.files) == null ? void 0 : _a[0];
      input.remove();
      if (!file) {
        resolve(null);
        return;
      }
      resolve(await file.arrayBuffer());
    });
    input.addEventListener("cancel", () => {
      input.remove();
      resolve(null);
    });
    document.body.appendChild(input);
    input.click();
  });
}
var DocxImportOperation = {
  id: "docs-exchange.operation.docx-import",
  type: 1 /* OPERATION */,
  handler: async (accessor, params) => {
    var _a;
    const logService = accessor.get(ILogService);
    const instanceService = accessor.get(IUniverInstanceService);
    const bytes = (_a = params == null ? void 0 : params.file) != null ? _a : await pickDocxFile();
    if (!bytes) return false;
    try {
      const data = await docxToUniverData(bytes);
      const previous = instanceService.getCurrentUnitOfType(1 /* UNIVER_DOC */);
      const unit = instanceService.createUnit(
        1 /* UNIVER_DOC */,
        data
      );
      instanceService.focusUnit(unit.getUnitId());
      if (previous && previous.getUnitId() !== unit.getUnitId()) {
        instanceService.disposeUnit(previous.getUnitId());
      }
      return true;
    } catch (err) {
      logService.error("[docs-exchange-ui] DOCX import failed:", err);
      return false;
    }
  }
};

// ../packages/docs-exchange-ui/src/config/config.ts
var DOCS_EXCHANGE_UI_PLUGIN_CONFIG_KEY = "docs-exchange-ui.config";
var defaultPluginConfig = {};

// ../packages/docs-exchange-ui/src/menu/menu.ts
var DOCX_IMPORT_ICON = "docs-exchange-import-icon";
function DocxImportMenuItemFactory(accessor) {
  return {
    id: DocxImportOperation.id,
    type: 0 /* BUTTON */,
    icon: DOCX_IMPORT_ICON,
    title: "docsExchange.menu.import",
    tooltip: "docsExchange.menu.importTooltip",
    hidden$: getMenuHiddenObservable(accessor, 1 /* UNIVER_DOC */)
  };
}

// ../packages/docs-exchange-ui/src/menu/schema.ts
var menuSchema = {
  ["ribbon.start.others" /* OTHERS */]: {
    [DocxImportOperation.id]: {
      order: 0,
      menuItemFactory: DocxImportMenuItemFactory
    }
  }
};

// ../packages/docs-exchange-ui/src/controllers/docs-exchange-ui.controller.ts
var DocsExchangeUIController = class extends Disposable {
  constructor(_componentManager, _commandService, _menuManagerService) {
    super();
    __publicField(this, "_componentManager", _componentManager);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_menuManagerService", _menuManagerService);
    this._initComponents();
    this._initCommands();
    this._initMenus();
  }
  _initComponents() {
    this.disposeWithMe(this._componentManager.register(DOCX_IMPORT_ICON, DownloadIcon));
  }
  _initCommands() {
    this.disposeWithMe(this._commandService.registerCommand(DocxImportOperation));
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema);
  }
};
DocsExchangeUIController = __decorateClass([
  __decorateParam(0, Inject(ComponentManager)),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IMenuManagerService)
], DocsExchangeUIController);

// ../packages/docs-exchange-ui/package.json
var package_default = {
  name: "@univerjs/docs-exchange-ui",
  version: "0.21.1",
  private: false,
  description: "Univer docs import/export UI integration",
  author: "DreamNum <developer@univer.ai>",
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
    "docx"
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
    "@univerjs/docs": "workspace:*",
    "@univerjs/docs-exchange": "workspace:*",
    "@univerjs/docs-ui": "workspace:*",
    "@univerjs/icons": "^1.1.1",
    "@univerjs/ui": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    react: "18.3.1",
    rxjs: "^7.8.2",
    typescript: "^6.0.2",
    vitest: "^4.1.4"
  }
};

// ../packages/docs-exchange-ui/src/plugin.ts
var UniverDocsExchangeUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig, _injector, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_configService", _configService);
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(DOCS_EXCHANGE_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    const dependencies = [
      [DocsExchangeUIController]
    ];
    dependencies.forEach((dependency) => this._injector.add(dependency));
    this._injector.get(DocsExchangeUIController);
  }
};
__publicField(UniverDocsExchangeUIPlugin, "type", 1 /* UNIVER_DOC */);
__publicField(UniverDocsExchangeUIPlugin, "pluginName", "DOCS_EXCHANGE_UI_PLUGIN");
__publicField(UniverDocsExchangeUIPlugin, "packageName", package_default.name);
__publicField(UniverDocsExchangeUIPlugin, "version", package_default.version);
UniverDocsExchangeUIPlugin = __decorateClass([
  DependentOn(UniverUIPlugin, UniverDocsUIPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverDocsExchangeUIPlugin);

// ../packages/docs-hyper-link/package.json
var package_default2 = {
  name: "@univerjs/docs-hyper-link",
  version: "0.21.1",
  private: false,
  description: "Univer thread comment plugin",
  author: "DreamNum <developer@univer.ai>",
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
  keywords: [],
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
    "@univerjs/core": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    typescript: "^6.0.2",
    vitest: "^4.1.4"
  }
};

// ../packages/docs-hyper-link/src/commands/mutations/hyper-link.mutation.ts
var AddHyperLinkMuatation = {
  id: "docs.mutation.add-hyper-link",
  type: 2 /* MUTATION */,
  handler: () => {
    return true;
  }
};
var UpdateHyperLinkMuatation = {
  id: "docs.mutation.update-hyper-link",
  type: 2 /* MUTATION */,
  handler: () => {
    return true;
  }
};
var DeleteHyperLinkMuatation = {
  id: "docs.mutation.delete-hyper-link",
  type: 2 /* MUTATION */,
  handler: () => {
    return true;
  }
};

// ../packages/docs-hyper-link/src/config/config.ts
var DOCS_HYPER_LINK_PLUGIN_CONFIG_KEY = "docs-hyper-link.config";
var configSymbol = Symbol(DOCS_HYPER_LINK_PLUGIN_CONFIG_KEY);
var defaultPluginConfig2 = {};

// ../packages/docs-hyper-link/src/controllers/resource.controller.ts
var DOC_HYPER_LINK_PLUGIN = "DOC_HYPER_LINK_PLUGIN";
var DocHyperLinkResourceController = class extends Disposable {
  constructor(_resourceManagerService, _univerInstanceService) {
    super();
    __publicField(this, "_resourceManagerService", _resourceManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    this._init();
  }
  _init() {
    this._resourceManagerService.registerPluginResource({
      pluginName: DOC_HYPER_LINK_PLUGIN,
      businesses: [1 /* UNIVER_DOC */],
      onLoad: (unitID, resource) => {
        const doc = this._univerInstanceService.getUnit(unitID, 1 /* UNIVER_DOC */);
        if (!doc) {
          return;
        }
        const customRangeMap = /* @__PURE__ */ new Map();
        const handleDoc = (model) => {
          var _a, _b;
          (_b = (_a = model.getBody()) == null ? void 0 : _a.customRanges) == null ? void 0 : _b.forEach((customRange) => {
            if (customRange.rangeType === 0 /* HYPERLINK */) {
              customRangeMap.set(customRange.rangeId, customRange);
            }
          });
          return customRangeMap;
        };
        doc.headerModelMap.forEach((headerModel) => {
          handleDoc(headerModel);
        });
        doc.footerModelMap.forEach((footerModel) => {
          handleDoc(footerModel);
        });
        handleDoc(doc);
        resource.links.forEach((link) => {
          const customRange = customRangeMap.get(link.id);
          if (customRange) {
            customRange.properties = {
              ...customRange.properties,
              url: link.payload
            };
          }
        });
      },
      onUnLoad: (unitID) => {
      },
      toJson: (unitID) => {
        const doc = this._univerInstanceService.getUnit(unitID, 1 /* UNIVER_DOC */);
        const links = [];
        if (doc) {
          const handleDoc = (model) => {
            var _a, _b;
            (_b = (_a = model.getBody()) == null ? void 0 : _a.customRanges) == null ? void 0 : _b.forEach((customRange) => {
              var _a2;
              if (customRange.rangeType === 0 /* HYPERLINK */) {
                links.push({
                  id: customRange.rangeId,
                  payload: ((_a2 = customRange.properties) == null ? void 0 : _a2.url) || ""
                });
              }
            });
          };
          doc.headerModelMap.forEach((headerModel) => {
            handleDoc(headerModel);
          });
          doc.footerModelMap.forEach((footerModel) => {
            handleDoc(footerModel);
          });
          handleDoc(doc);
        }
        return JSON.stringify({ links });
      },
      parseJson(bytes) {
        return JSON.parse(bytes);
      }
    });
  }
};
DocHyperLinkResourceController = __decorateClass([
  __decorateParam(0, Inject(IResourceManagerService)),
  __decorateParam(1, IUniverInstanceService)
], DocHyperLinkResourceController);

// ../packages/docs-hyper-link/src/plugin.ts
var UniverDocsHyperLinkPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig2, _injector, _configService, _commandService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_configService", _configService);
    __publicField(this, "_commandService", _commandService);
    const { ...rest } = merge_default(
      {},
      defaultPluginConfig2,
      this._config
    );
    this._configService.setConfig(DOCS_HYPER_LINK_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    const deps = [[DocHyperLinkResourceController]];
    deps.forEach((dep) => this._injector.add(dep));
    [AddHyperLinkMuatation, DeleteHyperLinkMuatation, UpdateHyperLinkMuatation].forEach((mutation) => {
      this.disposeWithMe(this._commandService.registerCommand(mutation));
    });
    this._injector.get(DocHyperLinkResourceController);
  }
};
__publicField(UniverDocsHyperLinkPlugin, "pluginName", DOC_HYPER_LINK_PLUGIN);
__publicField(UniverDocsHyperLinkPlugin, "packageName", package_default2.name);
__publicField(UniverDocsHyperLinkPlugin, "version", package_default2.version);
__publicField(UniverDocsHyperLinkPlugin, "type", 1 /* UNIVER_DOC */);
UniverDocsHyperLinkPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService),
  __decorateParam(3, ICommandService)
], UniverDocsHyperLinkPlugin);

// ../packages/docs-hyper-link-ui/package.json
var package_default3 = {
  name: "@univerjs/docs-hyper-link-ui",
  version: "0.21.1",
  private: false,
  description: "Univer thread comment plugin",
  author: "DreamNum <developer@univer.ai>",
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
  keywords: [],
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
    "@univerjs/docs": "workspace:*",
    "@univerjs/docs-hyper-link": "workspace:*",
    "@univerjs/docs-ui": "workspace:*",
    "@univerjs/engine-render": "workspace:*",
    "@univerjs/icons": "^1.1.1",
    "@univerjs/ui": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    postcss: "^8.5.10",
    react: "18.3.1",
    rxjs: "^7.8.2",
    tailwindcss: "3.4.18",
    typescript: "^6.0.2",
    vitest: "^4.1.4"
  }
};

// ../packages/docs-hyper-link-ui/src/config/config.ts
var DOCS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY = "docs-hyper-link-ui.config";
var configSymbol2 = Symbol(DOCS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig3 = {};

// ../packages/docs-hyper-link-ui/src/views/hyper-link-edit/index.tsx
var import_react = __toESM(require_react());

// ../packages/docs-hyper-link-ui/src/commands/commands/add-link.command.ts
var AddDocHyperLinkCommand = {
  type: 0 /* COMMAND */,
  id: "docs.command.add-hyper-link",
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { payload, unitId, selections } = params;
    const commandService = accessor.get(ICommandService);
    const id = generateRandomId();
    const doMutation = addCustomRangeBySelectionFactory(
      accessor,
      {
        rangeId: id,
        rangeType: 0 /* HYPERLINK */,
        properties: {
          url: payload
        },
        unitId,
        selections
      }
    );
    if (doMutation) {
      return commandService.syncExecuteCommand(doMutation.id, doMutation.params);
    }
    return false;
  }
};

// ../packages/docs-hyper-link-ui/src/commands/commands/update-link.command.ts
var UpdateDocHyperLinkCommand = {
  id: "docs.command.update-hyper-link",
  type: 0 /* COMMAND */,
  handler(accessor, params) {
    var _a;
    if (!params) {
      return false;
    }
    const { unitId, payload, segmentId, linkId } = params;
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const docSelectionManagerService = accessor.get(DocSelectionManagerService);
    const currentSelection = docSelectionManagerService.getActiveTextRange();
    const doc = univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
    if (!currentSelection || !doc) {
      return false;
    }
    const oldBody = getBodySlice(doc.getSelfOrHeaderFooterModel(segmentId).getBody(), currentSelection.startOffset, currentSelection.endOffset);
    const textRun = (_a = oldBody.textRuns) == null ? void 0 : _a[0];
    if (textRun) {
      textRun.ed = params.label.length + 1;
    }
    const replaceSelection = replaceSelectionFactory(accessor, {
      unitId,
      body: {
        dataStream: `${params.label}`,
        customRanges: [{
          rangeId: linkId,
          rangeType: 0 /* HYPERLINK */,
          startIndex: 0,
          endIndex: params.label.length + 1,
          properties: {
            url: payload
          }
        }],
        textRuns: textRun ? [textRun] : void 0
      },
      selection: {
        startOffset: currentSelection.startOffset,
        endOffset: currentSelection.endOffset,
        collapsed: false,
        segmentId
      }
    });
    if (!replaceSelection) {
      return false;
    }
    return commandService.syncExecuteCommand(replaceSelection.id, replaceSelection.params);
  }
};

// ../packages/docs-hyper-link-ui/src/views/hyper-link-edit/utils.ts
function isBlankInput(value) {
  return value.trim().length === 0;
}

// ../packages/docs-hyper-link-ui/src/views/hyper-link-edit/index.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function hasProtocol(urlString) {
  const pattern = /^[a-zA-Z]+:\/\//;
  return pattern.test(urlString);
}
function isEmail(url) {
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return pattern.test(url);
}
function transformUrl(urlStr) {
  return hasProtocol(urlStr) ? urlStr : isEmail(urlStr) ? `mailto://${urlStr}` : `https://${urlStr}`;
}
var DocHyperLinkEdit = () => {
  const hyperLinkService = useDependency(DocHyperLinkPopupService);
  const localeService = useDependency(LocaleService);
  const editing = useObservable(hyperLinkService.editingLink$);
  const commandService = useDependency(ICommandService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const docSelectionManagerService = useDependency(DocSelectionManagerService);
  const [link, setLink] = (0, import_react.useState)("");
  const [label, setLabel] = (0, import_react.useState)("");
  const [showError, setShowError] = (0, import_react.useState)(false);
  const isLegal = Tools.isLegalUrl(link);
  const doc = editing ? univerInstanceService.getUnit(editing.unitId, 1 /* UNIVER_DOC */) : univerInstanceService.getCurrentUnitForType(1 /* UNIVER_DOC */);
  (0, import_react.useEffect)(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const activeRange = docSelectionManagerService.getActiveTextRange();
    if (!activeRange) {
      return;
    }
    if (editing) {
      const body2 = (_a = doc == null ? void 0 : doc.getSelfOrHeaderFooterModel(editing.segmentId)) == null ? void 0 : _a.getBody();
      const matchedRange2 = (_b = body2 == null ? void 0 : body2.customRanges) == null ? void 0 : _b.find((i) => (editing == null ? void 0 : editing.linkId) === i.rangeId && i.startIndex === editing.startIndex && i.endIndex === editing.endIndex);
      if (doc && matchedRange2) {
        setLink((_d = (_c = matchedRange2.properties) == null ? void 0 : _c.url) != null ? _d : "");
        setLabel(BuildTextUtils.transform.getPlainText(getBodySlice(body2, matchedRange2.startIndex, matchedRange2.endIndex + 1).dataStream));
      }
      return;
    }
    const body = (_e = doc == null ? void 0 : doc.getSelfOrHeaderFooterModel(activeRange.segmentId)) == null ? void 0 : _e.getBody();
    const selection = body ? activeRange : null;
    const matchedRange = selection && ((_g = BuildTextUtils.customRange.getCustomRangesInterestsWithSelection(selection, (_f = body == null ? void 0 : body.customRanges) != null ? _f : [])) == null ? void 0 : _g[0]);
    if (doc && matchedRange) {
      setLink((_i = (_h = matchedRange == null ? void 0 : matchedRange.properties) == null ? void 0 : _h.url) != null ? _i : "");
    }
  }, [doc, editing, docSelectionManagerService, univerInstanceService]);
  const handleCancel = () => {
    hyperLinkService.hideEditPopup();
  };
  const handleConfirm = () => {
    setShowError(true);
    if (!isLegal || !doc) {
      return;
    }
    const linkFinal = transformUrl(link);
    if (!editing) {
      commandService.executeCommand(AddDocHyperLinkCommand.id, {
        unitId: doc.getUnitId(),
        payload: linkFinal
      });
    } else {
      if (isBlankInput(label)) {
        return;
      }
      commandService.executeCommand(UpdateDocHyperLinkCommand.id, {
        unitId: doc.getUnitId(),
        payload: linkFinal,
        linkId: editing.linkId,
        label,
        segmentId: editing.segmentId
      });
    }
    hyperLinkService.hideEditPopup();
  };
  if (!doc) {
    return;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: clsx(`univer-box-border univer-w-[328px] univer-rounded-xl univer-bg-white univer-px-6 univer-py-5 univer-shadow dark:!univer-bg-gray-900`, borderClassName),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            FormLayout,
            {
              label: localeService.t("docLink.edit.label"),
              error: showError && isBlankInput(label) ? localeService.t("docLink.edit.labelError") : "",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Input,
                {
                  value: label,
                  onChange: setLabel,
                  autoFocus: true,
                  onKeyDown: (evt) => {
                    if (evt.keyCode === 13 /* ENTER */) {
                      handleConfirm();
                    }
                  }
                }
              )
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            FormLayout,
            {
              label: localeService.t("docLink.edit.address"),
              error: showError && !isLegal ? localeService.t("docLink.edit.addressError") : "",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Input,
                {
                  value: link,
                  onChange: setLink,
                  autoFocus: true,
                  onKeyDown: (evt) => {
                    if (evt.keyCode === 13 /* ENTER */) {
                      handleConfirm();
                    }
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "univer-flex univer-justify-end univer-gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { onClick: handleCancel, children: localeService.t("docLink.edit.cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Button,
            {
              variant: "primary",
              disabled: isBlankInput(link),
              onClick: handleConfirm,
              children: localeService.t("docLink.edit.confirm")
            }
          )
        ] })
      ]
    }
  );
};
DocHyperLinkEdit.componentKey = "docs-hyper-link-edit";

// ../packages/docs-hyper-link-ui/src/commands/commands/delete-link.command.ts
var DeleteDocHyperLinkCommand = {
  type: 0 /* COMMAND */,
  id: "docs.command.delete-hyper-link",
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { unitId, linkId, segmentId } = params;
    const commandService = accessor.get(ICommandService);
    const doMutation = deleteCustomRangeFactory(accessor, { unitId, rangeId: linkId, segmentId });
    if (!doMutation) {
      return false;
    }
    return await commandService.syncExecuteCommand(doMutation.id, doMutation.params);
  }
};

// ../packages/docs-hyper-link-ui/src/commands/operations/popup.operation.ts
var shouldDisableAddLink = (accessor) => {
  const textSelectionService = accessor.get(DocSelectionManagerService);
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const textRanges = textSelectionService.getTextRanges();
  if (!(textRanges == null ? void 0 : textRanges.length)) {
    return true;
  }
  const activeRange = textRanges[0];
  const doc = univerInstanceService.getCurrentUnitForType(1 /* UNIVER_DOC */);
  if (!doc || !activeRange || activeRange.collapsed) {
    return true;
  }
  return false;
};
var ShowDocHyperLinkEditPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.show-hyper-link-edit-popup",
  handler(accessor, params) {
    var _a;
    const linkInfo = params == null ? void 0 : params.link;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    if (shouldDisableAddLink(accessor) && !linkInfo) {
      return false;
    }
    const hyperLinkService = accessor.get(DocHyperLinkPopupService);
    const unitId = (linkInfo == null ? void 0 : linkInfo.unitId) || ((_a = univerInstanceService.getCurrentUnitForType(1 /* UNIVER_DOC */)) == null ? void 0 : _a.getUnitId());
    if (!unitId) {
      return false;
    }
    hyperLinkService.showEditPopup(unitId, linkInfo);
    return true;
  }
};
var ToggleDocHyperLinkInfoPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.toggle-hyper-link-info-popup",
  handler(accessor, params) {
    const hyperLinkService = accessor.get(DocHyperLinkPopupService);
    if (!params) {
      hyperLinkService.hideInfoPopup();
      return true;
    }
    hyperLinkService.showInfoPopup(params);
    return true;
  }
};
var ClickDocHyperLinkOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.click-hyper-link",
  handler(accessor, params) {
    var _a, _b, _c;
    if (!params) {
      return false;
    }
    const { unitId, linkId, segmentId } = params;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const doc = univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
    const body = doc == null ? void 0 : doc.getSelfOrHeaderFooterModel(segmentId).getBody();
    const link = (_c = (_b = (_a = body == null ? void 0 : body.customRanges) == null ? void 0 : _a.find((range) => range.rangeId === linkId && range.rangeType === 0 /* HYPERLINK */)) == null ? void 0 : _b.properties) == null ? void 0 : _c.url;
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
    return true;
  }
};

// ../packages/docs-hyper-link-ui/src/views/hyper-link-popup/index.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var DocLinkPopup = () => {
  var _a, _b;
  const hyperLinkService = useDependency(DocHyperLinkPopupService);
  const commandService = useDependency(ICommandService);
  const messageService = useDependency(IMessageService);
  const localeService = useDependency(LocaleService);
  const currentPopup = useObservable(hyperLinkService.showingLink$);
  const univerInstanceService = useDependency(IUniverInstanceService);
  if (!currentPopup) {
    return null;
  }
  const { unitId, linkId, segmentId, startIndex, endIndex } = currentPopup;
  const doc = univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
  const body = doc == null ? void 0 : doc.getSelfOrHeaderFooterModel(segmentId).getBody();
  const link = (_a = body == null ? void 0 : body.customRanges) == null ? void 0 : _a.find((range) => range.rangeId === linkId && range.rangeType === 0 /* HYPERLINK */ && range.startIndex === startIndex && range.endIndex === endIndex);
  if (!link) {
    return null;
  }
  const url = (_b = link.properties) == null ? void 0 : _b.url;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: clsx(`univer-box-border univer-flex univer-max-w-80 univer-items-center univer-justify-between univer-overflow-hidden univer-rounded-lg univer-bg-white univer-p-3 univer-shadow dark:!univer-bg-gray-900`, borderClassName),
      onClick: () => {
        hyperLinkService.hideInfoPopup();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "div",
          {
            className: `univer-flex univer-h-6 univer-flex-1 univer-cursor-pointer univer-items-center univer-truncate univer-text-sm univer-leading-5 univer-text-primary-500`,
            onClick: () => window.open(url, void 0, "noopener noreferrer"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "div",
                {
                  className: `univer-mr-2 univer-flex univer-size-5 univer-flex-[0_0_auto] univer-items-center univer-justify-center univer-text-base univer-text-gray-900 dark:!univer-text-white`,
                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LinkIcon, {})
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { showIfEllipsis: true, title: url, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "univer-flex-1 univer-truncate", children: url }) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "univer-flex univer-h-6 univer-flex-[0_0_auto] univer-items-center univer-justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: `univer-ml-2 univer-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-text-base`,
              onClick: () => {
                navigator.clipboard.writeText(url);
                messageService.show({
                  content: localeService.t("docLink.info.coped"),
                  type: "info" /* Info */
                });
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { placement: "bottom", title: localeService.t("docLink.info.copy"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CopyIcon, {}) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: `univer-ml-2 univer-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-text-base`,
              onClick: () => {
                commandService.executeCommand(ShowDocHyperLinkEditPopupOperation.id, {
                  link: currentPopup
                });
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { placement: "bottom", title: localeService.t("docLink.info.edit"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WriteIcon, {}) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "div",
            {
              className: `univer-ml-2 univer-flex univer-size-6 univer-cursor-pointer univer-items-center univer-justify-center univer-rounded univer-text-base`,
              onClick: () => {
                commandService.executeCommand(DeleteDocHyperLinkCommand.id, {
                  unitId,
                  linkId: link.rangeId,
                  segmentId
                });
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, { placement: "bottom", title: localeService.t("docLink.info.cancel"), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UnlinkIcon, {}) })
            }
          )
        ] })
      ]
    }
  );
};
DocLinkPopup.componentKey = "univer.doc.link-info-popup";

// ../packages/docs-hyper-link-ui/src/services/hyper-link-popup.service.ts
var DocHyperLinkPopupService = class extends Disposable {
  constructor(_docCanvasPopupManagerService, _textSelectionManagerService, _univerInstanceService) {
    super();
    __publicField(this, "_docCanvasPopupManagerService", _docCanvasPopupManagerService);
    __publicField(this, "_textSelectionManagerService", _textSelectionManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_editingLink$", new BehaviorSubject(null));
    __publicField(this, "_showingLink$", new BehaviorSubject(null));
    __publicField(this, "editingLink$", this._editingLink$.asObservable());
    __publicField(this, "showingLink$", this._showingLink$.asObservable());
    __publicField(this, "_editPopup", null);
    __publicField(this, "_infoPopup", null);
    this.disposeWithMe(() => {
      this._editingLink$.complete();
      this._showingLink$.complete();
    });
  }
  get editing() {
    return this._editingLink$.value;
  }
  get showing() {
    return this._showingLink$.value;
  }
  showEditPopup(unitId, linkInfo) {
    if (this._editPopup) {
      this._editPopup.dispose();
    }
    this._editingLink$.next(linkInfo);
    const textRanges = this._textSelectionManagerService.getTextRanges({ unitId, subUnitId: unitId });
    let activeRange = textRanges == null ? void 0 : textRanges[textRanges.length - 1];
    if (linkInfo) {
      const { segmentId, segmentPage, startIndex, endIndex } = linkInfo;
      activeRange = {
        collapsed: false,
        startOffset: startIndex,
        endOffset: endIndex + 1,
        segmentId,
        segmentPage
      };
      this._textSelectionManagerService.replaceDocRanges([{
        startOffset: startIndex,
        endOffset: endIndex + 1
      }]);
    }
    if (activeRange) {
      this._editPopup = this._docCanvasPopupManagerService.attachPopupToRange(
        activeRange,
        {
          componentKey: DocHyperLinkEdit.componentKey,
          direction: "bottom"
        },
        unitId
      );
      return this._editPopup;
    }
    return null;
  }
  hideEditPopup() {
    var _a;
    this._editingLink$.next(null);
    (_a = this._editPopup) == null ? void 0 : _a.dispose();
  }
  showInfoPopup(info) {
    var _a, _b, _c, _d, _e, _f;
    const { linkId, unitId, segmentId, segmentPage, startIndex, endIndex } = info;
    if (((_a = this.showing) == null ? void 0 : _a.linkId) === linkId && ((_b = this.showing) == null ? void 0 : _b.unitId) === unitId && ((_c = this.showing) == null ? void 0 : _c.segmentId) === segmentId && ((_d = this.showing) == null ? void 0 : _d.segmentPage) === segmentPage && ((_e = this.showing) == null ? void 0 : _e.startIndex) === startIndex && ((_f = this.showing) == null ? void 0 : _f.endIndex) === endIndex) {
      return;
    }
    if (this._infoPopup) {
      this._infoPopup.dispose();
    }
    const doc = this._univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
    if (!doc) {
      return;
    }
    this._showingLink$.next({ unitId, linkId, segmentId, segmentPage, startIndex, endIndex });
    this._infoPopup = this._docCanvasPopupManagerService.attachPopupToRange(
      {
        collapsed: false,
        startOffset: startIndex,
        endOffset: endIndex + 1,
        segmentId,
        segmentPage
      },
      {
        componentKey: DocLinkPopup.componentKey,
        direction: "top-center",
        multipleDirection: "top",
        onClickOutside: () => {
          this.hideInfoPopup();
        }
      },
      unitId
    );
    return this._infoPopup;
  }
  hideInfoPopup() {
    var _a;
    this._showingLink$.next(null);
    (_a = this._infoPopup) == null ? void 0 : _a.dispose();
  }
};
DocHyperLinkPopupService = __decorateClass([
  __decorateParam(0, Inject(DocCanvasPopManagerService)),
  __decorateParam(1, Inject(DocSelectionManagerService)),
  __decorateParam(2, IUniverInstanceService)
], DocHyperLinkPopupService);

// ../packages/docs-hyper-link-ui/src/controllers/doc-hyper-link-selection.controller.ts
var DocHyperLinkSelectionController = class extends Disposable {
  constructor(_commandService, _univerInstanceService, _docHyperLinkService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_docHyperLinkService", _docHyperLinkService);
    this._initSelectionChange();
  }
  _initSelectionChange() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c;
        if (commandInfo.id === SetTextSelectionsOperation.id) {
          const params = commandInfo.params;
          const { unitId, ranges, segmentId } = params;
          const doc = this._univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
          const primary = ranges[0];
          if (primary && doc) {
            const { startOffset, endOffset, collapsed, segmentPage } = primary;
            const customRanges = (_b = (_a = doc.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _a.getBody()) == null ? void 0 : _b.customRanges;
            if (collapsed) {
              const index = (_c = customRanges == null ? void 0 : customRanges.findIndex((value) => value.startIndex < startOffset && value.endIndex > endOffset - 1)) != null ? _c : -1;
              if (index > -1) {
                const customRange = customRanges[index];
                this._docHyperLinkService.showInfoPopup({ unitId, linkId: customRange.rangeId, segmentId, segmentPage, startIndex: customRange.startIndex, endIndex: customRange.endIndex });
                return;
              }
            } else {
              const range = customRanges == null ? void 0 : customRanges.find((value) => value.startIndex <= startOffset && value.endIndex >= endOffset - 1);
              if (range) {
                return;
              }
            }
          }
          this._docHyperLinkService.hideInfoPopup();
          this._docHyperLinkService.hideEditPopup();
        }
      })
    );
  }
};
DocHyperLinkSelectionController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, Inject(DocHyperLinkPopupService))
], DocHyperLinkSelectionController);

// ../packages/docs-hyper-link-ui/src/controllers/render-controllers/hyper-link-event.render-controller.ts
var DocHyperLinkEventRenderController = class extends Disposable {
  constructor(_context, _docEventManagerService, _commandService, _hyperLinkPopupService, _docSkeletonManagerService, _docSelectionManagerService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_docEventManagerService", _docEventManagerService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_hyperLinkPopupService", _hyperLinkPopupService);
    __publicField(this, "_docSkeletonManagerService", _docSkeletonManagerService);
    __publicField(this, "_docSelectionManagerService", _docSelectionManagerService);
    if (this._context.unitId === DOCS_ZEN_EDITOR_UNIT_ID_KEY || this._context.unitId === DOCS_NORMAL_EDITOR_UNIT_ID_KEY) {
      return;
    }
    this._initHover();
    this._initClick();
  }
  get _skeleton() {
    return this._docSkeletonManagerService.getSkeleton();
  }
  _hideInfoPopup() {
    if (this._hyperLinkPopupService.showing) {
      this._commandService.executeCommand(
        ToggleDocHyperLinkInfoPopupOperation.id
      );
    }
  }
  _initHover() {
    this.disposeWithMe(
      this._docEventManagerService.hoverCustomRanges$.subscribe((ranges) => {
        var _a;
        const link = ranges.find((range) => range.range.rangeType === 0 /* HYPERLINK */);
        const activeRanges = this._docSelectionManagerService.getTextRanges();
        const currentSegmentId = activeRanges == null ? void 0 : activeRanges[0].segmentId;
        if (((_a = link == null ? void 0 : link.segmentId) != null ? _a : "") !== currentSegmentId) {
          this._hideInfoPopup();
          return;
        }
        if (link) {
          this._commandService.executeCommand(
            ToggleDocHyperLinkInfoPopupOperation.id,
            {
              unitId: this._context.unitId,
              linkId: link.range.rangeId,
              segmentId: link.segmentId,
              segmentPage: link.segmentPageIndex,
              rangeId: link.range.rangeId,
              startIndex: link.range.startIndex,
              endIndex: link.range.endIndex
            }
          );
        } else {
          this._hideInfoPopup();
        }
      })
    );
  }
  _initClick() {
    this.disposeWithMe(
      this._docEventManagerService.clickCustomRanges$.subscribe((range) => {
        const link = range.range;
        if (link) {
          this._commandService.executeCommand(
            ClickDocHyperLinkOperation.id,
            {
              unitId: this._context.unitId,
              linkId: link.rangeId,
              segmentId: range.segmentId
            }
          );
        }
      })
    );
  }
};
DocHyperLinkEventRenderController = __decorateClass([
  __decorateParam(1, Inject(DocEventManagerService)),
  __decorateParam(2, ICommandService),
  __decorateParam(3, Inject(DocHyperLinkPopupService)),
  __decorateParam(4, Inject(DocSkeletonManagerService)),
  __decorateParam(5, Inject(DocSelectionManagerService))
], DocHyperLinkEventRenderController);

// ../packages/docs-hyper-link-ui/src/controllers/render-controllers/render.controller.ts
var DocHyperLinkRenderController = class extends Disposable {
  constructor(_context, _docInterceptorService, _hyperLinkService, _docRenderController) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_docInterceptorService", _docInterceptorService);
    __publicField(this, "_hyperLinkService", _hyperLinkService);
    __publicField(this, "_docRenderController", _docRenderController);
    this._init();
    this._initReRender();
  }
  _init() {
    this._docInterceptorService.intercept(DOC_INTERCEPTOR_POINT.CUSTOM_RANGE, {
      handler: (data, pos, next) => {
        if (!data) {
          return next(data);
        }
        const { unitId, index } = pos;
        const activeLink = this._hyperLinkService.showing;
        if (!activeLink) {
          return next({
            ...data,
            active: false
          });
        }
        const { linkId, unitId: linkUnitId, startIndex, endIndex } = activeLink;
        const isActive = linkUnitId === unitId && data.rangeId === linkId && index >= startIndex && index <= endIndex;
        return next({
          ...data,
          active: isActive
        });
      }
    });
  }
  _initReRender() {
    this.disposeWithMe(this._hyperLinkService.showingLink$.pipe(
      distinctUntilChanged((prev, aft) => (prev == null ? void 0 : prev.linkId) === (aft == null ? void 0 : aft.linkId) && (prev == null ? void 0 : prev.unitId) === (aft == null ? void 0 : aft.unitId) && (prev == null ? void 0 : prev.startIndex) === (aft == null ? void 0 : aft.startIndex)),
      pairwise()
    ).subscribe(([preLink, link]) => {
      if (link) {
        if (link.unitId === this._context.unitId) {
          this._docRenderController.reRender(link.unitId);
        }
      } else {
        if (preLink && preLink.unitId === this._context.unitId) {
          this._docRenderController.reRender(preLink.unitId);
        }
      }
    }));
  }
};
DocHyperLinkRenderController = __decorateClass([
  __decorateParam(1, Inject(DocInterceptorService)),
  __decorateParam(2, Inject(DocHyperLinkPopupService)),
  __decorateParam(3, Inject(DocRenderController))
], DocHyperLinkRenderController);

// ../packages/docs-hyper-link-ui/src/menu/menu.ts
var DOC_LINK_ICON = "doc-hyper-link-icon";
function AddHyperLinkMenuItemFactory(accessor) {
  return {
    id: ShowDocHyperLinkEditPopupOperation.id,
    type: 0 /* BUTTON */,
    icon: DOC_LINK_ICON,
    title: "docLink.menu.tooltip",
    tooltip: "docLink.menu.tooltip",
    hidden$: getMenuHiddenObservable(accessor, 1 /* UNIVER_DOC */),
    disabled$: new Observable(function(subscribe) {
      const textSelectionService = accessor.get(DocSelectionManagerService);
      const observer = textSelectionService.textSelection$.pipe(debounceTime(16)).subscribe(() => {
        subscribe.next(shouldDisableAddLink(accessor));
      });
      return () => {
        observer.unsubscribe();
      };
    })
  };
}
var addLinkShortcut = {
  id: ShowDocHyperLinkEditPopupOperation.id,
  binding: 4096 /* CTRL_COMMAND */ | 75 /* K */,
  description: "docLink.menu.tooltip",
  preconditions: whenDocAndEditorFocused
};

// ../packages/docs-hyper-link-ui/src/menu/schema.ts
var menuSchema2 = {
  ["ribbon.insert.media" /* MEDIA */]: {
    [ShowDocHyperLinkEditPopupOperation.id]: {
      order: 1,
      menuItemFactory: AddHyperLinkMenuItemFactory
    }
  },
  ["contextMenu.mainArea" /* MAIN_AREA */]: {
    ["contextMenu.data" /* DATA */]: {
      [ShowDocHyperLinkEditPopupOperation.id]: {
        order: 0,
        menuItemFactory: AddHyperLinkMenuItemFactory
      }
    }
  }
};

// ../packages/docs-hyper-link-ui/src/controllers/ui.controller.ts
var DocHyperLinkUIController = class extends Disposable {
  constructor(_componentManager, _commandService, _menuManagerService, _shortcutService) {
    super();
    __publicField(this, "_componentManager", _componentManager);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_menuManagerService", _menuManagerService);
    __publicField(this, "_shortcutService", _shortcutService);
    this._initComponents();
    this._initCommands();
    this._initMenus();
    this._initShortcut();
  }
  _initComponents() {
    [
      [DocHyperLinkEdit.componentKey, DocHyperLinkEdit],
      [DocLinkPopup.componentKey, DocLinkPopup],
      [DOC_LINK_ICON, LinkIcon]
    ].forEach(([key, comp]) => {
      this.disposeWithMe(
        this._componentManager.register(key, comp)
      );
    });
  }
  _initCommands() {
    [
      AddDocHyperLinkCommand,
      UpdateDocHyperLinkCommand,
      DeleteDocHyperLinkCommand,
      ShowDocHyperLinkEditPopupOperation,
      ToggleDocHyperLinkInfoPopupOperation,
      ClickDocHyperLinkOperation
    ].forEach((command) => {
      this._commandService.registerCommand(command);
    });
  }
  _initShortcut() {
    [addLinkShortcut].forEach((shortcut) => {
      this._shortcutService.registerShortcut(shortcut);
    });
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema2);
  }
};
DocHyperLinkUIController = __decorateClass([
  __decorateParam(0, Inject(ComponentManager)),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IMenuManagerService),
  __decorateParam(3, IShortcutService)
], DocHyperLinkUIController);

// ../packages/docs-hyper-link-ui/src/types/const/index.ts
var DOC_HYPER_LINK_UI_PLUGIN = "DOC_HYPER_LINK_UI_PLUGIN";

// ../packages/docs-hyper-link-ui/src/plugin.ts
var UniverDocsHyperLinkUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig3, _injector, _renderManagerSrv, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_renderManagerSrv", _renderManagerSrv);
    __publicField(this, "_configService", _configService);
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig3,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(DOCS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    const deps = [
      [DocHyperLinkPopupService],
      [DocHyperLinkUIController],
      [DocHyperLinkSelectionController]
    ];
    deps.forEach((dep) => {
      this._injector.add(dep);
    });
    this._injector.get(DocHyperLinkUIController);
  }
  onReady() {
    this._injector.get(DocHyperLinkSelectionController);
  }
  onRendered() {
    this._initRenderModule();
  }
  _initRenderModule() {
    [
      [DocHyperLinkRenderController],
      [DocHyperLinkEventRenderController]
    ].forEach((dep) => {
      this._renderManagerSrv.registerRenderModule(1 /* UNIVER_DOC */, dep);
    });
  }
};
__publicField(UniverDocsHyperLinkUIPlugin, "pluginName", DOC_HYPER_LINK_UI_PLUGIN);
__publicField(UniverDocsHyperLinkUIPlugin, "packageName", package_default3.name);
__publicField(UniverDocsHyperLinkUIPlugin, "version", package_default3.version);
__publicField(UniverDocsHyperLinkUIPlugin, "type", 1 /* UNIVER_DOC */);
UniverDocsHyperLinkUIPlugin = __decorateClass([
  DependentOn(UniverDocsHyperLinkPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IConfigService)
], UniverDocsHyperLinkUIPlugin);

// ../packages/docs-quick-insert-ui/src/commands/commands/doc-quick-insert.command.ts
var DeleteSearchKeyCommand = {
  id: "doc.command.delete-search-key",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    const commandService = accessor.get(ICommandService);
    const { start, end } = params;
    return commandService.syncExecuteCommand(CutContentCommand.id, {
      segmentId: "",
      textRanges: [{
        startOffset: start,
        endOffset: start,
        collapsed: true
      }],
      selections: [{
        startOffset: start,
        endOffset: end,
        collapsed: false,
        direction: "forward" /* FORWARD */
      }]
    });
  }
};

// ../packages/docs-quick-insert-ui/src/views/KeywordInputPlaceholder.tsx
var import_react2 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var KeywordInputPlaceholderComponentKey = "docs.quick.insert.keyword-input-placeholder";
var DEFAULT_FONT_SIZE = 11;
function measureTextWidth(text, font) {
  if (typeof document === "undefined") {
    return text.length * DEFAULT_FONT_SIZE;
  }
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    return text.length * DEFAULT_FONT_SIZE;
  }
  context.font = font;
  return Math.ceil(context.measureText(text).width);
}
var KeywordInputPlaceholder = ({ popup }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const localeService = useDependency(LocaleService);
  const placeholder = localeService.t("docQuickInsert.keywordInputPlaceholder");
  const fontSize = (_b = (_a = popup.extraProps) == null ? void 0 : _a.fontSize) != null ? _b : DEFAULT_FONT_SIZE;
  const fontSizePx = ptToPixel(fontSize);
  const fontString = (_d = (_c = popup.extraProps) == null ? void 0 : _c.fontString) != null ? _d : `${fontSizePx}px sans-serif`;
  const ascent = (_f = (_e = popup.extraProps) == null ? void 0 : _e.ascent) != null ? _f : fontSizePx;
  const contentHeight = Math.max((_h = (_g = popup.extraProps) == null ? void 0 : _g.contentHeight) != null ? _h : fontSizePx, fontSizePx);
  const textWidth = (0, import_react2.useMemo)(() => measureTextWidth(placeholder, fontString), [fontString, placeholder]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      className: `univer-select-none univer-font-normal univer-text-gray-500 univer-transition-colors dark:!univer-text-gray-400`,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "svg",
        {
          width: textWidth,
          height: contentHeight,
          viewBox: `0 0 ${textWidth} ${contentHeight}`,
          style: { overflow: "visible", display: "block" },
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "text",
            {
              x: 0,
              y: ascent,
              fill: "currentColor",
              style: {
                font: fontString,
                fontFamily: (_i = popup.extraProps) == null ? void 0 : _i.fontFamily,
                fontStyle: (_j = popup.extraProps) == null ? void 0 : _j.fontStyle,
                fontWeight: (_k = popup.extraProps) == null ? void 0 : _k.fontWeight
              },
              children: placeholder
            }
          )
        }
      )
    }
  );
};
KeywordInputPlaceholder.componentKey = KeywordInputPlaceholderComponentKey;

// ../packages/docs-quick-insert-ui/src/views/QuickInsertPopup.tsx
var import_react4 = __toESM(require_react());

// ../packages/docs-quick-insert-ui/src/views/QuickInsertMenu.tsx
var import_react3 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function isMenuGroup(menu) {
  return "children" in menu;
}
function flattenMenuItems(menus) {
  return menus.flatMap((menu) => {
    if (isMenuGroup(menu)) {
      return flattenMenuItems(menu.children);
    }
    return menu;
  });
}
function getQuickInsertMenuLeafCount(menus) {
  return flattenMenuItems(menus).length;
}
function QuickInsertMenu(props) {
  const {
    menus,
    focusedMenuIndex,
    focusedMenuRef,
    menuNodeMapRef,
    componentManager,
    onFocusedMenuIndexChange,
    onSelect
  } = props;
  const flatMenus = (0, import_react3.useMemo)(() => flattenMenuItems(menus), [menus]);
  (0, import_react3.useEffect)(() => {
    var _a, _b;
    const focusedMenu = Number.isNaN(focusedMenuIndex) ? null : (_a = flatMenus[focusedMenuIndex]) != null ? _a : null;
    focusedMenuRef.current = focusedMenu;
    if (!focusedMenu) {
      return;
    }
    (_b = menuNodeMapRef.current.get(focusedMenu.id)) == null ? void 0 : _b.scrollIntoView({
      block: "nearest"
    });
  }, [flatMenus, focusedMenuIndex, focusedMenuRef, menuNodeMapRef]);
  const itemIndexRef = (0, import_react3.useRef)(0);
  itemIndexRef.current = 0;
  function renderMenus(currentMenus) {
    return currentMenus.map((menu, index) => {
      const iconKey = menu.icon;
      const Icon = iconKey ? componentManager.get(iconKey) : null;
      if (isMenuGroup(menu)) {
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            className: clsx("univer-grid univer-gap-1 univer-py-1", index !== currentMenus.length - 1 && borderBottomClassName),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "div",
                {
                  className: `univer-box-border univer-inline-flex univer-items-center univer-gap-2 univer-px-2 univer-text-xs univer-font-semibold univer-text-gray-600 dark:!univer-text-gray-300`,
                  children: [
                    Icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "univer-inline-flex univer-text-base", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, {}) }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: menu.title })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "univer-grid univer-gap-1", children: renderMenus(menu.children) })
            ]
          },
          menu.id
        );
      }
      const currentMenuIndex = itemIndexRef.current;
      const isFocused = focusedMenuIndex === currentMenuIndex;
      itemIndexRef.current += 1;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "div",
        {
          ref: (node) => {
            if (node) {
              menuNodeMapRef.current.set(menu.id, node);
              return;
            }
            menuNodeMapRef.current.delete(menu.id);
          },
          role: "button",
          tabIndex: -1,
          className: clsx(`univer-relative univer-box-border univer-flex univer-min-h-8 univer-w-full univer-cursor-pointer univer-items-center univer-justify-between univer-gap-3 univer-rounded-md univer-border-none univer-bg-transparent univer-px-2 univer-text-left univer-text-sm univer-text-gray-900 univer-outline-none hover:univer-bg-gray-50 dark:!univer-text-white dark:hover:!univer-bg-gray-600`, {
            "hover:univer-bg-transparent": !isFocused,
            "univer-bg-gray-50 dark:!univer-bg-gray-600": isFocused
          }),
          onMouseEnter: () => onFocusedMenuIndexChange(currentMenuIndex),
          onMouseLeave: () => onFocusedMenuIndexChange(Number.NaN),
          onClick: () => onSelect(menu),
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "univer-inline-flex univer-w-full univer-items-center univer-gap-2", children: [
            Icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "univer-inline-flex univer-text-base", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Tooltip, { showIfEllipsis: true, title: menu.title, placement: "right", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "univer-truncate", children: menu.title }) })
          ] })
        },
        menu.id
      );
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: clsx(`univer-box-border univer-grid univer-max-h-[360px] univer-gap-1 univer-overflow-y-auto univer-overflow-x-hidden univer-overscroll-contain univer-rounded-md univer-bg-white univer-px-2 univer-py-1 univer-text-sm univer-text-gray-900 univer-shadow-md dark:!univer-bg-gray-700 dark:!univer-text-white`, borderClassName, scrollbarClassName),
      onWheel: (event) => event.stopPropagation(),
      children: renderMenus(menus)
    }
  );
}

// ../packages/docs-quick-insert-ui/src/views/QuickInsertPlaceholder.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var QuickInsertPlaceholderComponentKey = "docs.quick.insert.placeholder";
var QuickInsertPlaceholder = () => {
  const localeService = useDependency(LocaleService);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      className: `univer-flex univer-h-full univer-items-center univer-justify-center univer-rounded-lg univer-bg-white univer-px-12 univer-py-6 univer-text-gray-400 univer-shadow-lg`,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: localeService.t("docQuickInsert.placeholder") })
    }
  );
};
QuickInsertPlaceholder.componentKey = QuickInsertPlaceholderComponentKey;

// ../packages/docs-quick-insert-ui/src/views/QuickInsertPopup.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
function filterMenusByKeyword(menus, keyword) {
  return menus.map((menu) => ({ ...menu })).filter((menu) => {
    if ("children" in menu) {
      menu.children = filterMenusByKeyword(menu.children, keyword);
      return menu.children.length > 0;
    }
    const keywords = menu.keywords;
    if (keywords) {
      return keywords.some((word) => word.includes(keyword));
    }
    return menu.title.toLowerCase().includes(keyword);
  });
}
function translateMenus(menus, localeService) {
  return menus.map((_menu) => {
    const menu = { ..._menu };
    if ("children" in menu) {
      menu.children = translateMenus(menu.children, localeService);
    }
    menu.title = localeService.t(menu.title);
    if ("keywords" in menu) {
      menu.keywords = menu.keywords.concat(menu.title).map((word) => word.toLowerCase());
    }
    return menu;
  });
}
var interceptKeys = [38 /* ARROW_UP */, 40 /* ARROW_DOWN */, 13 /* ENTER */];
var QuickInsertPopup = () => {
  const localeService = useDependency(LocaleService);
  const docQuickInsertPopupService = useDependency(DocQuickInsertPopupService);
  const componentManager = useDependency(ComponentManager);
  const shortcutService = useDependency(IShortcutService);
  const commandService = useDependency(ICommandService);
  const id = (0, import_react4.useMemo)(() => generateRandomId(), []);
  const [focusedMenuIndex, setFocusedMenuIndex] = (0, import_react4.useState)(0);
  const focusedMenuRef = (0, import_react4.useRef)(null);
  const filterKeyword = useObservable(docQuickInsertPopupService.filterKeyword$, "");
  const currentPopup = useObservable(docQuickInsertPopupService.editPopup$);
  const menus = useObservable(currentPopup == null ? void 0 : currentPopup.popup.menus$, []);
  const translatedMenus = (0, import_react4.useMemo)(() => {
    return translateMenus(menus, localeService);
  }, [menus]);
  const [filteredMenus, setFilteredMenus] = (0, import_react4.useState)(() => {
    return filterMenusByKeyword(translatedMenus, filterKeyword.toLowerCase());
  });
  const filteredMenuCount = (0, import_react4.useMemo)(() => getQuickInsertMenuLeafCount(filteredMenus), [filteredMenus]);
  const filteredMenuCountRef = (0, import_react4.useRef)(filteredMenuCount);
  (0, import_react4.useEffect)(() => {
    filteredMenuCountRef.current = filteredMenuCount;
  }, [filteredMenuCount]);
  (0, import_react4.useEffect)(() => {
    const id2 = requestIdleCallback(() => {
      setFilteredMenus(filterMenusByKeyword(translatedMenus, filterKeyword.toLowerCase()));
    });
    return () => {
      cancelIdleCallback(id2);
    };
  }, [translatedMenus, filterKeyword]);
  const handleMenuSelect = (menu) => {
    docQuickInsertPopupService.emitMenuSelected(menu);
    commandService.executeCommand(CloseQuickInsertPopupOperation.id);
  };
  (0, import_react4.useEffect)(() => {
    const disposableCollection = new DisposableCollection();
    const shortcutItems = shortcutService.getAllShortcuts();
    const interceptedShortcutItems = shortcutItems.filter((item) => item.binding && interceptKeys.includes(item.binding));
    interceptedShortcutItems.forEach((item) => {
      const rawPreconditions = item.preconditions;
      item.preconditions = () => false;
      disposableCollection.add(toDisposable(() => {
        item.preconditions = rawPreconditions;
      }));
    });
    const enterCommand = {
      id: `quick.insert.popup.enter.${id}`,
      type: 1 /* OPERATION */,
      handler: () => {
        const menu = focusedMenuRef.current;
        if (menu) {
          handleMenuSelect(menu);
        }
      }
    };
    const moveCursorUpCommand = {
      id: `quick.insert.popup.move.cursor.up.${id}`,
      type: 1 /* OPERATION */,
      handler: () => {
        setFocusedMenuIndex((index) => {
          if (filteredMenuCountRef.current <= 0) {
            return 0;
          }
          const nextIndex = index - 1;
          return nextIndex >= 0 ? nextIndex : filteredMenuCountRef.current - 1;
        });
      }
    };
    const moveCursorDownCommand = {
      id: `quick.insert.popup.move.cursor.down.${id}`,
      type: 1 /* OPERATION */,
      handler: () => {
        setFocusedMenuIndex((index) => {
          if (filteredMenuCountRef.current <= 0) {
            return 0;
          }
          const nextIndex = index + 1;
          return nextIndex <= filteredMenuCountRef.current - 1 ? nextIndex : 0;
        });
      }
    };
    disposableCollection.add(commandService.registerCommand(moveCursorUpCommand));
    disposableCollection.add(commandService.registerCommand(moveCursorDownCommand));
    disposableCollection.add(commandService.registerCommand(enterCommand));
    disposableCollection.add(shortcutService.registerShortcut({
      priority: 1e3,
      id: moveCursorUpCommand.id,
      binding: 38 /* ARROW_UP */,
      preconditions: () => true,
      staticParameters: {
        direction: 0 /* UP */
      }
    }));
    disposableCollection.add(shortcutService.registerShortcut({
      priority: 1e3,
      id: moveCursorDownCommand.id,
      binding: 40 /* ARROW_DOWN */,
      preconditions: () => true,
      staticParameters: {
        direction: 2 /* DOWN */
      }
    }));
    disposableCollection.add(shortcutService.registerShortcut({
      priority: 1e3,
      id: enterCommand.id,
      binding: 13 /* ENTER */,
      preconditions: () => true
    }));
    return () => {
      disposableCollection.dispose();
    };
  }, [commandService, id, shortcutService]);
  (0, import_react4.useEffect)(() => {
    setFocusedMenuIndex(0);
  }, [filteredMenus]);
  const menuNodeMapRef = (0, import_react4.useRef)(/* @__PURE__ */ new Map());
  (0, import_react4.useEffect)(() => {
    return () => {
      menuNodeMapRef.current.clear();
    };
  }, []);
  const hasMenus = filteredMenus.length > 0;
  const Placeholder = (currentPopup == null ? void 0 : currentPopup.popup.Placeholder) || componentManager.get(QuickInsertPlaceholder.componentKey);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "univer-mt-2", children: hasMenus ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    QuickInsertMenu,
    {
      menus: filteredMenus,
      focusedMenuIndex,
      focusedMenuRef,
      menuNodeMapRef,
      componentManager,
      onFocusedMenuIndexChange: setFocusedMenuIndex,
      onSelect: handleMenuSelect
    }
  ) : Placeholder && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Placeholder, {}) });
};
QuickInsertPopup.componentKey = "docs.quick.insert.popup";

// ../packages/docs-quick-insert-ui/src/services/doc-quick-insert-popup.service.ts
var noopDisposable = {
  dispose: () => {
  }
};
var DocQuickInsertPopupService = class extends Disposable {
  constructor(_docCanvasPopupManagerService, _univerInstanceService, _commandService, _renderManagerService, _docSelectionManagerService) {
    super();
    __publicField(this, "_docCanvasPopupManagerService", _docCanvasPopupManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_docSelectionManagerService", _docSelectionManagerService);
    __publicField(this, "_popups", /* @__PURE__ */ new Set());
    __publicField(this, "_editPopup$", new BehaviorSubject(void 0));
    __publicField(this, "editPopup$", this._editPopup$.asObservable());
    __publicField(this, "_isComposing$", new BehaviorSubject(false));
    __publicField(this, "isComposing$", this._isComposing$.asObservable());
    __publicField(this, "_inputOffset$", new BehaviorSubject({ start: 0, end: 0 }));
    __publicField(this, "inputOffset$", this._inputOffset$.asObservable());
    __publicField(this, "filterKeyword$");
    __publicField(this, "_menuSelectedCallbacks", /* @__PURE__ */ new Set());
    __publicField(this, "_inputPlaceholderRenderRoot", null);
    this.disposeWithMe(this._editPopup$);
    const getBodySlice2 = (start, end) => {
      var _a, _b;
      return (_b = (_a = this._univerInstanceService.getCurrentUnitOfType(1 /* UNIVER_DOC */)) == null ? void 0 : _a.getBody()) == null ? void 0 : _b.dataStream.slice(start, end);
    };
    let lastFilterKeyword = "";
    this.filterKeyword$ = this._inputOffset$.pipe(
      map((offset) => {
        var _a;
        const slice = getBodySlice2(offset.start, offset.end);
        return (_a = slice == null ? void 0 : slice.slice(1)) != null ? _a : "";
      }),
      distinctUntilChanged(),
      tap((filterKeyword) => {
        lastFilterKeyword = filterKeyword;
      })
    );
    this.disposeWithMe(combineLatest([
      this.filterKeyword$.pipe(tap((filterKeyword) => {
        var _a, _b, _c;
        if (filterKeyword.length > 0) {
          (_b = (_a = this._inputPlaceholderRenderRoot) == null ? void 0 : _a.unmount) == null ? void 0 : _b.dispose();
        } else {
          (_c = this._inputPlaceholderRenderRoot) == null ? void 0 : _c.mount();
        }
      })),
      this.isComposing$.pipe(tap((isComposing) => {
        var _a, _b, _c;
        if (isComposing) {
          (_b = (_a = this._inputPlaceholderRenderRoot) == null ? void 0 : _a.unmount) == null ? void 0 : _b.dispose();
        } else {
          lastFilterKeyword.length <= 0 && ((_c = this._inputPlaceholderRenderRoot) == null ? void 0 : _c.mount());
        }
      })),
      this.editPopup$.pipe(tap((popup) => {
        var _a, _b;
        if (!popup) {
          (_b = (_a = this._inputPlaceholderRenderRoot) == null ? void 0 : _a.unmount) == null ? void 0 : _b.dispose();
          this._inputPlaceholderRenderRoot = null;
        }
      }))
    ]).subscribe());
  }
  get popups() {
    return Array.from(this._popups);
  }
  get editPopup() {
    return this._editPopup$.value;
  }
  get isComposing() {
    return this._isComposing$.value;
  }
  setIsComposing(isComposing) {
    this._isComposing$.next(isComposing);
  }
  get inputOffset() {
    return this._inputOffset$.value;
  }
  setInputOffset(offset) {
    this._inputOffset$.next(offset);
  }
  getDocEventManagerService(unitId) {
    var _a;
    return (_a = this._renderManagerService.getRenderById(unitId)) == null ? void 0 : _a.with(DocEventManagerService);
  }
  resolvePopup(keyword) {
    return Array.from(this._popups).find((popup) => popup.keyword === keyword);
  }
  registerPopup(popup) {
    this._popups.add(popup);
    return () => {
      this._popups.delete(popup);
    };
  }
  _createInputPlaceholderRenderRoot(mount) {
    const renderRoot = {
      isMounted: false,
      mount() {
        if (this.isMounted) {
          return;
        }
        this.isMounted = true;
        const unmount = mount();
        this.unmount = {
          dispose: () => {
            unmount.dispose();
            this.isMounted = false;
          }
        };
      }
    };
    return renderRoot;
  }
  _getParagraphBound(unitId, index) {
    var _a, _b, _c;
    const currentDoc = this._univerInstanceService.getUnit(unitId);
    const paragraph = (_b = (_a = currentDoc == null ? void 0 : currentDoc.getBody()) == null ? void 0 : _a.paragraphs) == null ? void 0 : _b.find((p) => p.startIndex > index);
    if (!paragraph) {
      return null;
    }
    const docEventManagerService = this.getDocEventManagerService(unitId);
    return (_c = docEventManagerService == null ? void 0 : docEventManagerService.findParagraphBoundByIndex(paragraph.startIndex)) != null ? _c : null;
  }
  _getKeywordPlaceholderAnchorRect(document2, skeleton, activeRange, fallbackRect) {
    const startPosition = skeleton.findNodePositionByCharIndex(activeRange.startOffset, true, activeRange.segmentId, activeRange.segmentPage);
    if (!startPosition) {
      return fallbackRect;
    }
    const documentOffsetConfig = document2.getOffsetConfig();
    const convertor = new NodePositionConvertToCursor(documentOffsetConfig, skeleton);
    const { contentBoxPointGroup } = convertor.getRangePointData(startPosition, startPosition);
    if (contentBoxPointGroup.length === 0) {
      return fallbackRect;
    }
    const anchor = getAnchorBounding(contentBoxPointGroup);
    const left = anchor.left + documentOffsetConfig.docsLeft;
    const top = anchor.top + documentOffsetConfig.docsTop;
    return {
      left,
      right: left,
      top,
      bottom: top + anchor.height
    };
  }
  _getKeywordPlaceholderExtraProps(curGlyph) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    return {
      fontSize: (_a = curGlyph.ts) == null ? void 0 : _a.fs,
      fontString: (_b = curGlyph.fontStyle) == null ? void 0 : _b.fontString,
      fontFamily: (_f = (_e = (_c = curGlyph.fontStyle) == null ? void 0 : _c.fontFamily) != null ? _e : (_d = curGlyph.ts) == null ? void 0 : _d.ff) != null ? _f : void 0,
      fontStyle: ((_g = curGlyph.ts) == null ? void 0 : _g.it) ? "italic" : "normal",
      fontWeight: ((_h = curGlyph.ts) == null ? void 0 : _h.bl) ? "bold" : "normal",
      ascent: (_i = curGlyph.bBox) == null ? void 0 : _i.ba,
      contentHeight: ((_k = (_j = curGlyph.bBox) == null ? void 0 : _j.ba) != null ? _k : 0) + ((_m = (_l = curGlyph.bBox) == null ? void 0 : _l.bd) != null ? _m : 0) || void 0
    };
  }
  _mountInputPlaceholder(unitId, fallbackRect) {
    const currentRender = this._renderManagerService.getRenderById(unitId);
    const docSkeletonManagerService = currentRender == null ? void 0 : currentRender.with(DocSkeletonManagerService);
    const activeRange = this._docSelectionManagerService.getActiveTextRange();
    if (!currentRender || !docSkeletonManagerService || !activeRange) {
      return noopDisposable;
    }
    const skeleton = docSkeletonManagerService.getSkeleton();
    const curGlyph = skeleton.findNodeByCharIndex(activeRange.startOffset, activeRange.segmentId, activeRange.segmentPage);
    const isEmptyLine = (curGlyph == null ? void 0 : curGlyph.content) === "\r";
    if (!isEmptyLine || !curGlyph) {
      return noopDisposable;
    }
    const document2 = currentRender.mainComponent;
    const placeholderAnchorRect = this._getKeywordPlaceholderAnchorRect(document2, skeleton, activeRange, fallbackRect);
    const extraProps = this._getKeywordPlaceholderExtraProps(curGlyph);
    const disposable = this._docCanvasPopupManagerService.attachPopupToRect(
      placeholderAnchorRect,
      {
        componentKey: KeywordInputPlaceholder.componentKey,
        extraProps,
        onClickOutside: () => {
          disposable.dispose();
        },
        direction: "horizontal"
      },
      unitId
    );
    return disposable;
  }
  showPopup(options) {
    const { popup, index, unitId } = options;
    this.closePopup();
    const paragraphBound = this._getParagraphBound(unitId, index);
    if (!paragraphBound) {
      return;
    }
    this._inputPlaceholderRenderRoot = this._createInputPlaceholderRenderRoot(() => this._mountInputPlaceholder(unitId, paragraphBound.firstLine));
    this._inputPlaceholderRenderRoot.mount();
    const disposable = this._docCanvasPopupManagerService.attachPopupToRect(
      paragraphBound.firstLine,
      {
        componentKey: QuickInsertPopup.componentKey,
        onClickOutside: () => {
          this.closePopup();
        },
        direction: "bottom"
      },
      unitId
    );
    this._editPopup$.next({ disposable, popup, anchor: index, unitId });
  }
  closePopup() {
    if (this.editPopup) {
      this.editPopup.disposable.dispose();
      this._editPopup$.next(null);
    }
  }
  onMenuSelected(callback) {
    this._menuSelectedCallbacks.add(callback);
    return () => {
      this._menuSelectedCallbacks.delete(callback);
    };
  }
  emitMenuSelected(menu) {
    const { start, end } = this.inputOffset;
    this._commandService.syncExecuteCommand(DeleteSearchKeyCommand.id, {
      start,
      end
    });
    setTimeout(() => {
      this._menuSelectedCallbacks.forEach((callback) => callback(menu));
    }, 0);
  }
};
DocQuickInsertPopupService = __decorateClass([
  __decorateParam(0, Inject(DocCanvasPopManagerService)),
  __decorateParam(1, Inject(IUniverInstanceService)),
  __decorateParam(2, Inject(ICommandService)),
  __decorateParam(3, Inject(IRenderManagerService)),
  __decorateParam(4, Inject(DocSelectionManagerService))
], DocQuickInsertPopupService);

// ../packages/docs-quick-insert-ui/src/commands/operations/quick-insert-popup.operation.ts
var ShowQuickInsertPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.show-quick-insert-popup",
  handler(accessor, params) {
    const docQuickInsertPopupService = accessor.get(DocQuickInsertPopupService);
    if (!params) {
      return false;
    }
    docQuickInsertPopupService.showPopup(params);
    return true;
  }
};
var CloseQuickInsertPopupOperation = {
  type: 1 /* OPERATION */,
  id: "doc.operation.close-quick-insert-popup",
  handler(accessor) {
    const docQuickInsertPopupService = accessor.get(DocQuickInsertPopupService);
    docQuickInsertPopupService.closePopup();
    return true;
  }
};

// ../packages/docs-quick-insert-ui/src/menu/menu.ts
var textMenu = {
  id: "quick-insert.text.menu",
  title: "docQuickInsert.menu.text",
  icon: "TextIcon",
  keywords: ["text"]
};
var numberedListMenu = {
  id: OrderListCommand.id,
  title: "docQuickInsert.menu.numberedList",
  icon: "OrderIcon",
  keywords: ["numbered", "list", "ordered"]
};
var bulletedListMenu = {
  id: BulletListCommand.id,
  title: "docQuickInsert.menu.bulletedList",
  icon: "UnorderIcon",
  keywords: ["bulleted", "list", "unordered"]
};
var dividerMenu = {
  id: HorizontalLineCommand.id,
  title: "docQuickInsert.menu.divider",
  icon: "DividerIcon",
  keywords: ["divider", "line", "separate"]
};
var tableMenu = {
  id: DocCreateTableOperation.id,
  title: "docQuickInsert.menu.table",
  icon: "GridIcon",
  keywords: ["table", "grid", "spreadsheet"]
};
var imageMenu = {
  id: InsertDocImageCommand.id,
  title: "docQuickInsert.menu.image",
  icon: "AdditionAndSubtractionIcon",
  keywords: ["image", "picture", "photo"]
};
var builtInMenus = [
  {
    title: "docQuickInsert.group.basics",
    id: "quick.insert.group.basic" /* Basic */,
    children: [
      textMenu,
      numberedListMenu,
      bulletedListMenu,
      dividerMenu,
      tableMenu,
      imageMenu
    ]
  }
];
var builtInMenuCommandIds = /* @__PURE__ */ new Set([
  numberedListMenu.id,
  bulletedListMenu.id,
  dividerMenu.id,
  tableMenu.id,
  imageMenu.id
]);

// ../packages/docs-quick-insert-ui/src/controllers/doc-quick-insert-trigger.controller.ts
var DocQuickInsertTriggerController = class extends Disposable {
  constructor(_commandService, _textSelectionManagerService, _docQuickInsertPopupService, _shortcutService, _univerInstanceService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_textSelectionManagerService", _textSelectionManagerService);
    __publicField(this, "_docQuickInsertPopupService", _docQuickInsertPopupService);
    __publicField(this, "_shortcutService", _shortcutService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    this.disposeWithMe(this._shortcutService.registerShortcut({
      id: CloseQuickInsertPopupOperation.id,
      binding: 27 /* ESC */,
      preconditions: () => Boolean(this._docQuickInsertPopupService.editPopup),
      priority: 1e3
    }));
    this._initTrigger();
    this._initMenuHandler();
  }
  // eslint-disable-next-line max-lines-per-function
  _initTrigger() {
    this.disposeWithMe(
      // eslint-disable-next-line complexity, max-lines-per-function
      this._commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c;
        const { _docQuickInsertPopupService, _textSelectionManagerService, _commandService } = this;
        const documentDataModel = this._univerInstanceService.getCurrentUnitOfType(1 /* UNIVER_DOC */);
        if (documentDataModel == null ? void 0 : documentDataModel.getDisabled()) {
          return;
        }
        if (commandInfo.id === InsertCommand.id) {
          const params = commandInfo.params;
          if (_docQuickInsertPopupService.editPopup) {
            _docQuickInsertPopupService.setInputOffset({
              start: _docQuickInsertPopupService.inputOffset.start,
              end: params.range.endOffset + 1
            });
            return;
          }
          const activeRange = _textSelectionManagerService.getActiveTextRange();
          if (!activeRange) {
            return;
          }
          const popup = _docQuickInsertPopupService.resolvePopup(params.body.dataStream);
          if (!popup) {
            return;
          }
          const available = popup.preconditions ? popup.preconditions(params) : true;
          if (!available) {
            return;
          }
          _docQuickInsertPopupService.setInputOffset({ start: activeRange.startOffset - 1, end: activeRange.startOffset });
          setTimeout(() => {
            _commandService.executeCommand(ShowQuickInsertPopupOperation.id, {
              index: activeRange.startOffset - 1,
              unitId: params.unitId,
              popup
            });
          }, 100);
        }
        if (commandInfo.id === IMEInputCommand.id) {
          const params = commandInfo.params;
          if (!_docQuickInsertPopupService.isComposing && params.isCompositionStart) {
            _docQuickInsertPopupService.setIsComposing(true);
          }
          if (_docQuickInsertPopupService.isComposing && params.isCompositionEnd) {
            _docQuickInsertPopupService.setIsComposing(false);
          }
        }
        if (commandInfo.id === RichTextEditingMutation.id) {
          const params = commandInfo.params;
          if (params.isCompositionEnd) {
            const endOffset = (_b = (_a = params.textRanges) == null ? void 0 : _a[0]) == null ? void 0 : _b.endOffset;
            if (endOffset) {
              _docQuickInsertPopupService.setInputOffset({ start: _docQuickInsertPopupService.inputOffset.start, end: endOffset });
            }
          }
        }
        if (commandInfo.id === DeleteCommand.id) {
          const params = commandInfo.params;
          if (_docQuickInsertPopupService.editPopup && params.direction === 0 /* LEFT */) {
            const len = (_c = params.len) != null ? _c : 0;
            _docQuickInsertPopupService.setInputOffset({ start: _docQuickInsertPopupService.inputOffset.start, end: params.range.endOffset - len });
          }
        }
        if (commandInfo.id === MoveCursorOperation.id) {
          const params = commandInfo.params;
          if (params.direction === 3 /* LEFT */ || params.direction === 1 /* RIGHT */) {
            _docQuickInsertPopupService.editPopup && _commandService.executeCommand(CloseQuickInsertPopupOperation.id);
          }
        }
        if (commandInfo.id === DeleteLeftCommand.id) {
          const activeRange = _textSelectionManagerService.getActiveTextRange();
          if (!_docQuickInsertPopupService.editPopup || !activeRange) {
            return;
          }
          if (activeRange.endOffset <= _docQuickInsertPopupService.editPopup.anchor) {
            _commandService.executeCommand(CloseQuickInsertPopupOperation.id);
          }
        }
      })
    );
  }
  _initMenuHandler() {
    this.disposeWithMe(this._docQuickInsertPopupService.onMenuSelected((menu) => {
      if (menu.id === textMenu.id) {
        return;
      }
      if (builtInMenuCommandIds.has(menu.id)) {
        this._commandService.executeCommand(menu.id);
      }
    }));
  }
};
DocQuickInsertTriggerController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(DocSelectionManagerService)),
  __decorateParam(2, Inject(DocQuickInsertPopupService)),
  __decorateParam(3, Inject(IShortcutService)),
  __decorateParam(4, Inject(IUniverInstanceService))
], DocQuickInsertTriggerController);

// ../packages/docs-quick-insert-ui/src/views/QuickInsertButton.tsx
var import_react5 = __toESM(require_react());

// ../packages/docs-quick-insert-ui/src/menu/doc-quick-insert-menu.controller.ts
var DocQuickInsertMenuController = class extends Disposable {
  constructor(_context, _docEventManagerService, _docQuickInsertPopupService, _docCanvasPopManagerService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_docEventManagerService", _docEventManagerService);
    __publicField(this, "_docQuickInsertPopupService", _docQuickInsertPopupService);
    __publicField(this, "_docCanvasPopManagerService", _docCanvasPopManagerService);
    __publicField(this, "_popup$", new BehaviorSubject(null));
    __publicField(this, "popup$", this._popup$.asObservable());
    this._init();
  }
  get popup() {
    return this._popup$.value;
  }
  _init() {
    this.disposeWithMe(combineLatest([this._docEventManagerService.hoverParagraphLeftRealTime$, this._docEventManagerService.hoverParagraphRealTime$]).subscribe(([left, paragraph]) => {
      var _a;
      const p = left != null ? left : paragraph;
      const isDisabled = this._context.unit.getDisabled();
      if (!p || isDisabled) {
        this._hideMenu(true);
        return;
      }
      if (p.paragraphStart === p.paragraphEnd) {
        if (this._docQuickInsertPopupService.editPopup || p.startIndex === ((_a = this.popup) == null ? void 0 : _a.startIndex)) return;
        this._hideMenu(true);
        const disposable = this._docCanvasPopManagerService.attachPopupToRect(p.firstLine, {
          componentKey: QuickInsertButtonComponentKey,
          direction: "left-center"
        }, this._context.unit.getUnitId());
        this._popup$.next({
          startIndex: p.startIndex,
          disposable
        });
      } else {
        this._hideMenu(true);
      }
    }));
  }
  _hideMenu(force) {
    if (this._docQuickInsertPopupService.editPopup) return;
    if (this.popup && (force || this.popup.disposable.canDispose())) {
      this.popup.disposable.dispose();
      this._popup$.next(null);
    }
  }
};
DocQuickInsertMenuController = __decorateClass([
  __decorateParam(1, Inject(DocEventManagerService)),
  __decorateParam(2, Inject(DocQuickInsertPopupService)),
  __decorateParam(3, Inject(DocCanvasPopManagerService))
], DocQuickInsertMenuController);

// ../packages/docs-quick-insert-ui/src/views/QuickInsertButton.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var QuickInsertButtonComponentKey = "doc.quick-insert.button";
var QuickInsertButton = ({ className = "" }) => {
  const docQuickInsertPopupService = useDependency(DocQuickInsertPopupService);
  const univerInstanceService = useDependency(IUniverInstanceService);
  const renderManagerService = useDependency(IRenderManagerService);
  const currentDoc = useObservable((0, import_react5.useMemo)(() => univerInstanceService.getCurrentTypeOfUnit$(1 /* UNIVER_DOC */), [univerInstanceService]));
  const currentUnit = currentDoc && renderManagerService.getRenderById(currentDoc.getUnitId());
  const docQuickInsertMenuController = currentUnit == null ? void 0 : currentUnit.with(DocQuickInsertMenuController);
  const layoutService = useDependency(ILayoutService);
  const docSelectionManagerService = useDependency(DocSelectionManagerService);
  const editPopup = useObservable(docQuickInsertPopupService.editPopup$);
  const onClick = useEvent(() => {
    var _a;
    const p = docQuickInsertMenuController == null ? void 0 : docQuickInsertMenuController.popup;
    if (!p) {
      return;
    }
    const allPopups = docQuickInsertPopupService.popups;
    const popup = {
      keyword: "",
      menus$: combineLatest(allPopups.map((p2) => p2.menus$)).pipe(
        map((menusCollection) => menusCollection.flat())
      )
    };
    docSelectionManagerService.replaceDocRanges([{
      startOffset: p.startIndex,
      endOffset: p.startIndex
    }]);
    docQuickInsertPopupService.setInputOffset({ start: p.startIndex - 1, end: p.startIndex - 1 });
    docQuickInsertPopupService.showPopup({
      popup,
      index: p.startIndex - 1,
      unitId: (_a = currentDoc == null ? void 0 : currentDoc.getUnitId()) != null ? _a : ""
    });
    setTimeout(() => {
      layoutService.focus();
    });
  });
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      className: clsx(`univer-mr-1 univer-flex univer-cursor-pointer univer-items-center univer-gap-2.5 univer-rounded-full univer-p-1.5 univer-shadow-sm hover:univer-bg-gray-100 dark:!univer-text-gray-200 dark:hover:!univer-bg-gray-700`, borderClassName, {
        "univer-bg-gray-100 dark:!univer-bg-gray-700": editPopup,
        "univer-bg-white dark:!univer-bg-gray-900": !editPopup
      }, className),
      role: "button",
      tabIndex: 0,
      onClick,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        IncreaseIcon,
        {
          className: `univer-text-gray-800 dark:!univer-text-gray-200`
        }
      )
    }
  );
};
QuickInsertButton.componentKey = QuickInsertButtonComponentKey;

// ../packages/docs-quick-insert-ui/src/controllers/doc-quick-insert-ui.controller.ts
var DocQuickInsertUIController = class extends Disposable {
  constructor(_commandService, _docQuickInsertPopupService, _componentManager) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_docQuickInsertPopupService", _docQuickInsertPopupService);
    __publicField(this, "_componentManager", _componentManager);
    this._initCommands();
    this._initComponents();
    this._initMenus();
  }
  _initCommands() {
    [
      DeleteSearchKeyCommand,
      ShowQuickInsertPopupOperation,
      CloseQuickInsertPopupOperation
    ].forEach((operation) => {
      this.disposeWithMe(this._commandService.registerCommand(operation));
    });
  }
  _initComponents() {
    [
      [QuickInsertPopup.componentKey, QuickInsertPopup],
      [KeywordInputPlaceholder.componentKey, KeywordInputPlaceholder],
      [QuickInsertPlaceholder.componentKey, QuickInsertPlaceholder],
      [DividerIcon.displayName, DividerIcon],
      [TextIcon.displayName, TextIcon],
      [QuickInsertButton.componentKey, QuickInsertButton]
    ].forEach(([key, comp]) => {
      if (key) {
        this.disposeWithMe(this._componentManager.register(key, comp));
      }
    });
    const popups = [
      {
        keyword: "/",
        menus$: of(builtInMenus),
        // only show when the cursor is at the beginning of a line
        preconditions: (params) => {
          var _a;
          return ((_a = params.range.startNodePosition) == null ? void 0 : _a.glyph) === 0;
        }
      }
    ];
    popups.forEach((popup) => {
      this.disposeWithMe(this._docQuickInsertPopupService.registerPopup(popup));
    });
  }
  _initMenus() {
  }
};
DocQuickInsertUIController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(DocQuickInsertPopupService)),
  __decorateParam(2, Inject(ComponentManager))
], DocQuickInsertUIController);

// ../packages/docs-quick-insert-ui/package.json
var package_default4 = {
  name: "@univerjs/docs-quick-insert-ui",
  version: "0.21.1",
  private: false,
  description: "",
  author: "DreamNum <developer@univer.ai>",
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
  keywords: [],
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
    "@univerjs/docs": "workspace:*",
    "@univerjs/docs-drawing": "workspace:*",
    "@univerjs/docs-drawing-ui": "workspace:*",
    "@univerjs/docs-ui": "workspace:*",
    "@univerjs/drawing": "workspace:*",
    "@univerjs/drawing-ui": "workspace:*",
    "@univerjs/engine-render": "workspace:*",
    "@univerjs/icons": "^1.1.1",
    "@univerjs/ui": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    postcss: "^8.5.10",
    react: "18.3.1",
    rxjs: "^7.8.2",
    tailwindcss: "3.4.18",
    typescript: "^6.0.2",
    vitest: "^4.1.4"
  }
};

// ../packages/docs-quick-insert-ui/src/config/config.ts
var DOCS_QUICK_INSERT_UI_PLUGIN_CONFIG_KEY = "docs-quick-insert-ui.config";
var configSymbol3 = Symbol(DOCS_QUICK_INSERT_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig4 = {};

// ../packages/docs-quick-insert-ui/src/plugin.ts
var UniverDocsQuickInsertUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig4, _injector, _renderManagerSrv, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_renderManagerSrv", _renderManagerSrv);
    __publicField(this, "_configService", _configService);
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig4,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(DOCS_QUICK_INSERT_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    const dependencies = [
      [DocQuickInsertUIController],
      [DocQuickInsertTriggerController],
      [DocQuickInsertPopupService]
    ];
    dependencies.forEach((dependency) => this._injector.add(dependency));
    this._injector.get(DocQuickInsertUIController);
  }
  onRendered() {
    this._injector.get(DocQuickInsertTriggerController);
    this._injector.get(DocQuickInsertPopupService);
    [
      [DocQuickInsertMenuController]
    ].forEach((m) => {
      this._renderManagerSrv.registerRenderModule(1 /* UNIVER_DOC */, m);
    });
  }
};
__publicField(UniverDocsQuickInsertUIPlugin, "type", 1 /* UNIVER_DOC */);
__publicField(UniverDocsQuickInsertUIPlugin, "pluginName", "DOC_QUICK_INSERT_UI_PLUGIN");
__publicField(UniverDocsQuickInsertUIPlugin, "packageName", package_default4.name);
__publicField(UniverDocsQuickInsertUIPlugin, "version", package_default4.version);
UniverDocsQuickInsertUIPlugin = __decorateClass([
  DependentOn(UniverDrawingUIPlugin, UniverDrawingPlugin, UniverDocsDrawingUIPlugin, UniverDocsDrawingPlugin, UniverUIPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(IRenderManagerService)),
  __decorateParam(3, IConfigService)
], UniverDocsQuickInsertUIPlugin);

// ../packages/docs-thread-comment-ui/src/common/const.ts
var DOCS_THREAD_COMMENT_PANEL = "univer.doc.thread-comment-panel";
var PLUGIN_NAME = "DOC_THREAD_COMMENT_UI_PLUGIN";
var DEFAULT_DOC_SUBUNIT_ID = "default_doc";

// ../packages/docs-thread-comment-ui/src/commands/commands/add-doc-comment.command.ts
var AddDocCommentComment = {
  id: "docs.command.add-comment",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { comment: originComment, unitId } = params;
    const dataSourceService = accessor.get(IThreadCommentDataSourceService);
    const comment = await dataSourceService.addComment(originComment);
    const commandService = accessor.get(ICommandService);
    const doMutation = addCustomDecorationBySelectionFactory(
      accessor,
      {
        id: comment.threadId,
        type: 0 /* COMMENT */,
        unitId
      }
    );
    if (doMutation) {
      const addComment = {
        id: AddCommentMutation.id,
        params: {
          unitId,
          subUnitId: DEFAULT_DOC_SUBUNIT_ID,
          comment
        }
      };
      const activeOperation = {
        id: SetActiveCommentOperation.id,
        params: {
          unitId,
          subUnitId: DEFAULT_DOC_SUBUNIT_ID,
          commentId: comment.id
        }
      };
      return (await sequenceExecute([addComment, doMutation, activeOperation], commandService)).result;
    }
    return false;
  }
};

// ../packages/docs-thread-comment-ui/src/commands/commands/delete-doc-comment.command.ts
var DeleteDocCommentComment = {
  id: "docs.command.delete-comment",
  type: 0 /* COMMAND */,
  async handler(accessor, params) {
    if (!params) {
      return false;
    }
    const { commentId, unitId } = params;
    const commandService = accessor.get(ICommandService);
    const doMutation = deleteCustomDecorationFactory(accessor, {
      id: commentId,
      unitId
    });
    if (doMutation) {
      return (await sequenceExecute([doMutation], commandService)).result;
    }
    return false;
  }
};

// ../packages/docs-thread-comment-ui/src/services/doc-thread-comment.service.ts
var DocThreadCommentService = class extends Disposable {
  constructor(_sidebarService, _threadCommentPanelService) {
    super();
    __publicField(this, "_sidebarService", _sidebarService);
    __publicField(this, "_threadCommentPanelService", _threadCommentPanelService);
    __publicField(this, "_addingComment$", new BehaviorSubject(void 0));
    __publicField(this, "addingComment$", this._addingComment$.asObservable());
    this.disposeWithMe(() => {
      this._addingComment$.complete();
    });
  }
  get addingComment() {
    return this._addingComment$.getValue();
  }
  startAdd(comment) {
    this._addingComment$.next(comment);
  }
  endAdd() {
    this._addingComment$.next(void 0);
  }
};
DocThreadCommentService = __decorateClass([
  __decorateParam(0, ISidebarService),
  __decorateParam(1, Inject(ThreadCommentPanelService))
], DocThreadCommentService);

// ../packages/docs-thread-comment-ui/src/commands/operations/show-comment-panel.operation.ts
var ShowCommentPanelOperation = {
  id: "docs.operation.show-comment-panel",
  type: 1 /* OPERATION */,
  handler(accessor, params) {
    var _a;
    const panelService = accessor.get(ThreadCommentPanelService);
    const sidebarService = accessor.get(ISidebarService);
    if (!panelService.panelVisible || ((_a = sidebarService.options.children) == null ? void 0 : _a.label) !== DOCS_THREAD_COMMENT_PANEL) {
      sidebarService.open({
        header: { title: "threadCommentUI.panel.title" },
        children: { label: DOCS_THREAD_COMMENT_PANEL },
        width: 320,
        onClose: () => panelService.setPanelVisible(false)
      });
      panelService.setPanelVisible(true);
    }
    if (params) {
      panelService.setActiveComment(params == null ? void 0 : params.activeComment);
    }
    return true;
  }
};
var ToggleCommentPanelOperation = {
  id: "docs.operation.toggle-comment-panel",
  type: 1 /* OPERATION */,
  handler(accessor) {
    var _a;
    const panelService = accessor.get(ThreadCommentPanelService);
    const sidebarService = accessor.get(ISidebarService);
    if (!panelService.panelVisible || ((_a = sidebarService.options.children) == null ? void 0 : _a.label) !== DOCS_THREAD_COMMENT_PANEL) {
      sidebarService.open({
        header: { title: "threadCommentUI.panel.title" },
        children: { label: DOCS_THREAD_COMMENT_PANEL },
        width: 320,
        onClose: () => panelService.setPanelVisible(false)
      });
      panelService.setPanelVisible(true);
    } else {
      sidebarService.close();
      panelService.setPanelVisible(false);
      panelService.setActiveComment(null);
    }
    return true;
  }
};
var StartAddCommentOperation = {
  id: "docs.operation.start-add-comment",
  type: 1 /* OPERATION */,
  handler(accessor) {
    var _a, _b, _c;
    const panelService = accessor.get(ThreadCommentPanelService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const doc = univerInstanceService.getCurrentUnitForType(1 /* UNIVER_DOC */);
    const docSelectionManagerService = accessor.get(DocSelectionManagerService);
    const renderManagerService = accessor.get(IRenderManagerService);
    const userManagerService2 = accessor.get(UserManagerService);
    const docCommentService = accessor.get(DocThreadCommentService);
    const commandService = accessor.get(ICommandService);
    const sidebarService = accessor.get(ISidebarService);
    const textRange = docSelectionManagerService.getActiveTextRange();
    if (!doc || !textRange) {
      return false;
    }
    const docSelectionRenderManager = (_a = renderManagerService.getRenderById(doc.getUnitId())) == null ? void 0 : _a.with(DocSelectionRenderService);
    docSelectionRenderManager == null ? void 0 : docSelectionRenderManager.setReserveRangesStatus(true);
    if (textRange.collapsed) {
      if (panelService.panelVisible) {
        panelService.setPanelVisible(false);
        sidebarService.close();
      } else {
        commandService.executeCommand(ShowCommentPanelOperation.id);
      }
      return true;
    }
    commandService.executeCommand(ShowCommentPanelOperation.id);
    const unitId = doc.getUnitId();
    const dataStream = ((_c = (_b = doc.getBody()) == null ? void 0 : _b.dataStream) != null ? _c : "").slice(textRange.startOffset, textRange.endOffset);
    const text = BuildTextUtils.transform.getPlainText(dataStream);
    const subUnitId = DEFAULT_DOC_SUBUNIT_ID;
    const commentId = "";
    const comment = {
      unitId,
      subUnitId,
      id: commentId,
      ref: text,
      dT: getDT(),
      personId: userManagerService2.getCurrentUser().userID,
      text: {
        dataStream: "\r\n"
      },
      startOffset: textRange.startOffset,
      endOffset: textRange.endOffset,
      collapsed: true,
      threadId: commentId
    };
    docSelectionRenderManager == null ? void 0 : docSelectionRenderManager.blur();
    docCommentService.startAdd(comment);
    panelService.setActiveComment({
      unitId,
      subUnitId,
      commentId
    });
    return true;
  }
};

// ../packages/docs-thread-comment-ui/package.json
var package_default5 = {
  name: "@univerjs/docs-thread-comment-ui",
  version: "0.21.1",
  private: false,
  description: "Univer thread comment plugin",
  author: "DreamNum <developer@univer.ai>",
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
  keywords: [],
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
  peerDependencies: {
    react: "^16.9.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc",
    rxjs: ">=7.0.0"
  },
  dependencies: {
    "@univerjs/core": "workspace:*",
    "@univerjs/docs": "workspace:*",
    "@univerjs/docs-ui": "workspace:*",
    "@univerjs/engine-render": "workspace:*",
    "@univerjs/icons": "^1.1.1",
    "@univerjs/thread-comment": "workspace:*",
    "@univerjs/thread-comment-ui": "workspace:*",
    "@univerjs/ui": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    postcss: "^8.5.10",
    react: "18.3.1",
    rxjs: "^7.8.2",
    tailwindcss: "3.4.18",
    typescript: "^6.0.2",
    vitest: "^4.1.4"
  }
};

// ../packages/docs-thread-comment-ui/src/config/config.ts
var DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "docs-thread-comment-ui.config";
var configSymbol4 = Symbol(DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY);
var defaultPluginConfig5 = {};

// ../packages/docs-thread-comment-ui/src/controllers/doc-thread-comment-selection.controller.ts
var DocThreadCommentSelectionController = class extends Disposable {
  constructor(_threadCommentPanelService, _univerInstanceService, _commandService, _docThreadCommentService, _renderManagerService, _threadCommentModel) {
    super();
    __publicField(this, "_threadCommentPanelService", _threadCommentPanelService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_docThreadCommentService", _docThreadCommentService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_threadCommentModel", _threadCommentModel);
    this._initSelectionChange();
    this._initActiveCommandChange();
  }
  _initSelectionChange() {
    let lastSelection;
    this.disposeWithMe(
      this._commandService.onCommandExecuted((commandInfo) => {
        var _a, _b, _c, _d;
        if (commandInfo.id === SetTextSelectionsOperation.id) {
          const params = commandInfo.params;
          const { unitId, ranges } = params;
          if (isInternalEditorID(unitId)) return;
          const doc = this._univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
          const primary = ranges[0];
          if ((lastSelection == null ? void 0 : lastSelection.startOffset) === (primary == null ? void 0 : primary.startOffset) && (lastSelection == null ? void 0 : lastSelection.endOffset) === (primary == null ? void 0 : primary.endOffset)) {
            return;
          }
          lastSelection = primary;
          if (primary && doc) {
            const { startOffset, endOffset, collapsed } = primary;
            let customRange;
            if (collapsed) {
              customRange = (_b = (_a = doc.getBody()) == null ? void 0 : _a.customDecorations) == null ? void 0 : _b.find((value) => value.startIndex <= startOffset && value.endIndex >= endOffset - 1);
            } else {
              customRange = (_d = (_c = doc.getBody()) == null ? void 0 : _c.customDecorations) == null ? void 0 : _d.find((value) => value.startIndex <= startOffset && value.endIndex >= endOffset - 1);
            }
            if (customRange) {
              const comment = this._threadCommentModel.getComment(unitId, DEFAULT_DOC_SUBUNIT_ID, customRange.id);
              if (comment && !comment.resolved) {
                this._commandService.executeCommand(ShowCommentPanelOperation.id, {
                  activeComment: {
                    unitId,
                    subUnitId: DEFAULT_DOC_SUBUNIT_ID,
                    commentId: customRange.id
                  }
                });
              }
              return;
            }
          }
          if (!this._threadCommentPanelService.activeCommentId) {
            return;
          }
          this._commandService.executeCommand(SetActiveCommentOperation.id);
        }
      })
    );
  }
  _initActiveCommandChange() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe((activeComment) => {
      var _a, _b, _c, _d;
      if (activeComment) {
        const doc = this._univerInstanceService.getUnit(activeComment.unitId);
        if (doc) {
          const backScrollController = (_a = this._renderManagerService.getRenderById(activeComment.unitId)) == null ? void 0 : _a.with(DocBackScrollRenderController);
          const customRange = (_c = (_b = doc.getBody()) == null ? void 0 : _b.customDecorations) == null ? void 0 : _c.find((range) => range.id === activeComment.commentId);
          if (customRange && backScrollController) {
            backScrollController.scrollToRange({
              startOffset: customRange.startIndex,
              endOffset: customRange.endIndex,
              collapsed: false
            });
          }
        }
      }
      if (!activeComment || activeComment.commentId !== ((_d = this._docThreadCommentService.addingComment) == null ? void 0 : _d.id)) {
        this._docThreadCommentService.endAdd();
      }
    }));
  }
};
DocThreadCommentSelectionController = __decorateClass([
  __decorateParam(0, Inject(ThreadCommentPanelService)),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, ICommandService),
  __decorateParam(3, Inject(DocThreadCommentService)),
  __decorateParam(4, IRenderManagerService),
  __decorateParam(5, Inject(ThreadCommentModel))
], DocThreadCommentSelectionController);

// ../packages/docs-thread-comment-ui/src/menu/menu.ts
var shouldDisableAddComment = (accessor) => {
  var _a;
  const renderManagerService = accessor.get(IRenderManagerService);
  const docSelectionManagerService = accessor.get(DocSelectionManagerService);
  const skeleton = (_a = withCurrentTypeOfRenderer(
    1 /* UNIVER_DOC */,
    DocSkeletonManagerService,
    accessor.get(IUniverInstanceService),
    renderManagerService
  )) == null ? void 0 : _a.getSkeleton();
  const editArea = skeleton == null ? void 0 : skeleton.getViewModel().getEditArea();
  if (editArea === "FOOTER" /* FOOTER */ || editArea === "HEADER" /* HEADER */) {
    return true;
  }
  const range = docSelectionManagerService.getActiveTextRange();
  if (range == null || range.collapsed) {
    return true;
  }
  return false;
};
function AddDocCommentMenuItemFactory(accessor) {
  return {
    id: StartAddCommentOperation.id,
    type: 0 /* BUTTON */,
    icon: "CommentIcon",
    title: "threadCommentUI.panel.addComment",
    tooltip: "threadCommentUI.panel.addComment",
    hidden$: getMenuHiddenObservable(accessor, 1 /* UNIVER_DOC */, void 0, SHEET_EDITOR_UNITS),
    disabled$: new Observable(function(subscribe) {
      const textSelectionService = accessor.get(DocSelectionManagerService);
      const observer = textSelectionService.textSelection$.pipe(debounceTime(16)).subscribe(() => {
        subscribe.next(shouldDisableAddComment(accessor));
      });
      return () => {
        observer.unsubscribe();
      };
    })
  };
}
function ToolbarDocCommentMenuItemFactory(accessor) {
  return {
    id: ToggleCommentPanelOperation.id,
    type: 0 /* BUTTON */,
    icon: "CommentIcon",
    title: "threadCommentUI.panel.addComment",
    tooltip: "threadCommentUI.panel.addComment",
    hidden$: getMenuHiddenObservable(accessor, 1 /* UNIVER_DOC */)
  };
}

// ../packages/docs-thread-comment-ui/src/menu/schema.ts
var menuSchema3 = {
  ["ribbon.insert.media" /* MEDIA */]: {
    [ToggleCommentPanelOperation.id]: {
      order: 3,
      menuItemFactory: ToolbarDocCommentMenuItemFactory
    }
  },
  ["contextMenu.mainArea" /* MAIN_AREA */]: {
    ["contextMenu.data" /* DATA */]: {
      [StartAddCommentOperation.id]: {
        order: 1,
        menuItemFactory: AddDocCommentMenuItemFactory
      }
    }
  }
};

// ../packages/docs-thread-comment-ui/src/views/doc-thread-comment-panel/index.tsx
var import_react6 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var DocThreadCommentPanel = () => {
  const univerInstanceService = useDependency(IUniverInstanceService);
  const injector2 = useDependency(Injector);
  const doc$ = (0, import_react6.useMemo)(() => univerInstanceService.getCurrentTypeOfUnit$(1 /* UNIVER_DOC */).pipe(filter((doc2) => !!doc2 && !isInternalEditorID(doc2.getUnitId()))), [univerInstanceService]);
  const doc = useObservable(doc$);
  const subUnitId$ = (0, import_react6.useMemo)(() => new Observable((sub) => sub.next(DEFAULT_DOC_SUBUNIT_ID)), []);
  const docSelectionManagerService = useDependency(DocSelectionManagerService);
  const selectionChange$ = (0, import_react6.useMemo)(
    () => docSelectionManagerService.textSelection$.pipe(debounceTime(16)),
    [docSelectionManagerService.textSelection$]
  );
  useObservable(selectionChange$);
  const commandService = useDependency(ICommandService);
  const docCommentService = useDependency(DocThreadCommentService);
  const tempComment = useObservable(docCommentService.addingComment$);
  const [commentIds, setCommentIds] = (0, import_react6.useState)([]);
  (0, import_react6.useEffect)(() => {
    var _a;
    const set = /* @__PURE__ */ new Set();
    const customRanges = doc == null ? void 0 : doc.getCustomDecorations();
    setCommentIds((_a = customRanges == null ? void 0 : customRanges.map((r) => r.id).filter((i) => {
      const hasRepeat = set.has(i);
      set.add(i);
      return !hasRepeat;
    })) != null ? _a : []);
    const dispose = commandService.onCommandExecuted((command) => {
      var _a2;
      if (command.id === RichTextEditingMutation.id) {
        const set2 = /* @__PURE__ */ new Set();
        const customRanges2 = doc == null ? void 0 : doc.getCustomDecorations();
        setCommentIds((_a2 = customRanges2 == null ? void 0 : customRanges2.map((r) => r.id).filter((i) => {
          const hasRepeat = set2.has(i);
          set2.add(i);
          return !hasRepeat;
        })) != null ? _a2 : []);
      }
    });
    return () => {
      dispose.dispose();
    };
  }, [commandService, doc]);
  if (!doc) {
    return null;
  }
  const isInValidSelection = shouldDisableAddComment(injector2);
  const unitId = doc.getUnitId();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    ThreadCommentPanel,
    {
      unitId,
      subUnitId$,
      type: 1 /* UNIVER_DOC */,
      onAdd: () => {
        commandService.executeCommand(StartAddCommentOperation.id);
      },
      getSubUnitName: () => "",
      disableAdd: isInValidSelection,
      tempComment,
      onAddComment: (comment) => {
        if (!comment.parentId) {
          const params = {
            unitId,
            range: tempComment,
            comment
          };
          commandService.executeCommand(AddDocCommentComment.id, params);
          docCommentService.endAdd();
          return false;
        }
        return true;
      },
      onDeleteComment: (comment) => {
        if (!comment.parentId) {
          const params = {
            unitId,
            commentId: comment.id
          };
          commandService.executeCommand(DeleteDocCommentComment.id, params);
          return false;
        }
        return true;
      },
      showComments: commentIds
    }
  );
};

// ../packages/docs-thread-comment-ui/src/controllers/doc-thread-comment-ui.controller.ts
var DocThreadCommentUIController = class extends Disposable {
  constructor(_commandService, _menuManagerService, _componentManager) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_menuManagerService", _menuManagerService);
    __publicField(this, "_componentManager", _componentManager);
    this._initCommands();
    this._initMenus();
    this._initComponents();
  }
  _initCommands() {
    [
      AddDocCommentComment,
      DeleteDocCommentComment,
      ShowCommentPanelOperation,
      StartAddCommentOperation,
      ToggleCommentPanelOperation
    ].forEach((command) => {
      this.disposeWithMe(this._commandService.registerCommand(command));
    });
  }
  _initMenus() {
    this._menuManagerService.mergeMenu(menuSchema3);
  }
  _initComponents() {
    [
      [DOCS_THREAD_COMMENT_PANEL, DocThreadCommentPanel],
      ["CommentIcon", CommentIcon]
    ].forEach(([id, comp]) => {
      this.disposeWithMe(
        this._componentManager.register(id, comp)
      );
    });
  }
};
DocThreadCommentUIController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IMenuManagerService),
  __decorateParam(2, Inject(ComponentManager))
], DocThreadCommentUIController);

// ../packages/docs-thread-comment-ui/src/controllers/render-controllers/render.controller.ts
var DocThreadCommentRenderController = class extends Disposable {
  constructor(_context, _docInterceptorService, _threadCommentPanelService, _docRenderController, _univerInstanceService, _threadCommentModel, _commandService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_docInterceptorService", _docInterceptorService);
    __publicField(this, "_threadCommentPanelService", _threadCommentPanelService);
    __publicField(this, "_docRenderController", _docRenderController);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_threadCommentModel", _threadCommentModel);
    __publicField(this, "_commandService", _commandService);
    this._interceptorViewModel();
    this._initReRender();
    this._initSyncComments();
  }
  _initReRender() {
    this.disposeWithMe(this._threadCommentPanelService.activeCommentId$.subscribe((activeComment) => {
      var _a;
      if (activeComment) {
        this._docRenderController.reRender(activeComment.unitId);
        return;
      }
      const unitId = (_a = this._univerInstanceService.getCurrentUnitForType(1 /* UNIVER_DOC */)) == null ? void 0 : _a.getUnitId();
      if (unitId) {
        this._docRenderController.reRender(unitId);
      }
    }));
    this.disposeWithMe(this._threadCommentModel.commentUpdate$.subscribe((update) => {
      if (update.type === "resolve") {
        this._docRenderController.reRender(update.unitId);
      }
    }));
  }
  _interceptorViewModel() {
    this._docInterceptorService.intercept(DOC_INTERCEPTOR_POINT.CUSTOM_DECORATION, {
      handler: (data, pos, next) => {
        if (!data) {
          return next(data);
        }
        const { unitId, index, customDecorations } = pos;
        const activeComment = this._threadCommentPanelService.activeCommentId;
        const { commentId, unitId: commentUnitID } = activeComment || {};
        const activeCustomDecoration = customDecorations.find((i) => i.id === commentId);
        const comment = this._threadCommentModel.getComment(unitId, DEFAULT_DOC_SUBUNIT_ID, data.id);
        if (!comment) {
          return next({
            ...data,
            show: false
          });
        }
        const isActiveIndex = activeCustomDecoration && index >= activeCustomDecoration.startIndex && index <= activeCustomDecoration.endIndex;
        const isActive = commentUnitID === unitId && data.id === commentId;
        return next({
          ...data,
          active: isActive || isActiveIndex,
          show: !comment.resolved
        });
      }
    });
  }
  _initSyncComments() {
    var _a, _b, _c;
    const unitId = this._context.unit.getUnitId();
    const subUnitId = DEFAULT_DOC_SUBUNIT_ID;
    const threadIds = (_c = (_b = (_a = this._context.unit.getBody()) == null ? void 0 : _a.customDecorations) == null ? void 0 : _b.filter((i) => i.type === 0 /* COMMENT */).map((i) => i.id)) != null ? _c : [];
    threadIds.forEach((id) => {
      const comment = this._threadCommentModel.getComment(unitId, subUnitId, id);
      if (!comment) {
        this._threadCommentModel.addComment(unitId, subUnitId, { id, threadId: id, ref: "", dT: "", personId: "", text: { dataStream: "" }, unitId, subUnitId });
      }
    });
    threadIds.length && this._threadCommentModel.syncThreadComments(this._context.unit.getUnitId(), DEFAULT_DOC_SUBUNIT_ID, threadIds);
    let prevThreadIds = threadIds.sort();
    this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
      var _a2, _b2, _c2;
      if (commandInfo.id === RichTextEditingMutation.id) {
        const params = commandInfo.params;
        if (params.unitId !== this._context.unit.getUnitId()) {
          return;
        }
        const currentThreadIds = (_c2 = (_b2 = (_a2 = this._context.unit.getBody()) == null ? void 0 : _a2.customDecorations) == null ? void 0 : _b2.filter((i) => i.type === 0 /* COMMENT */).map((i) => i.id)) != null ? _c2 : [];
        const currentThreadIdsSorted = currentThreadIds.sort();
        if (JSON.stringify(prevThreadIds) !== JSON.stringify(currentThreadIdsSorted)) {
          const preIds = new Set(prevThreadIds);
          const currentIds = new Set(currentThreadIdsSorted);
          const addIds = /* @__PURE__ */ new Set();
          const deleteIds = /* @__PURE__ */ new Set();
          currentThreadIds.forEach((id) => {
            if (!preIds.has(id)) {
              addIds.add(id);
            }
          });
          prevThreadIds.forEach((id) => {
            if (!currentIds.has(id)) {
              deleteIds.add(id);
            }
          });
          prevThreadIds = currentThreadIdsSorted;
          addIds.forEach((id) => {
            const comment = this._threadCommentModel.getComment(unitId, subUnitId, id);
            if (!comment) {
              this._threadCommentModel.addComment(unitId, subUnitId, { id, threadId: id, ref: "", dT: "", personId: "", text: { dataStream: "" }, unitId, subUnitId });
            }
          });
          this._threadCommentModel.syncThreadComments(unitId, subUnitId, [...addIds]);
        }
      }
    }));
  }
};
DocThreadCommentRenderController = __decorateClass([
  __decorateParam(1, Inject(DocInterceptorService)),
  __decorateParam(2, Inject(ThreadCommentPanelService)),
  __decorateParam(3, Inject(DocRenderController)),
  __decorateParam(4, IUniverInstanceService),
  __decorateParam(5, Inject(ThreadCommentModel)),
  __decorateParam(6, ICommandService)
], DocThreadCommentRenderController);

// ../packages/docs-thread-comment-ui/src/plugin.ts
var UniverDocsThreadCommentUIPlugin = class extends Plugin {
  constructor(_config = defaultPluginConfig5, _injector, _renderManagerSrv, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_renderManagerSrv", _renderManagerSrv);
    __publicField(this, "_configService", _configService);
    const { menu, ...rest } = merge_default(
      {},
      defaultPluginConfig5,
      this._config
    );
    if (menu) {
      this._configService.setConfig("menu", menu, { merge: true });
    }
    this._configService.setConfig(DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    [
      [DocThreadCommentUIController],
      [DocThreadCommentSelectionController],
      [DocThreadCommentService]
    ].forEach((dep) => {
      this._injector.add(dep);
    });
  }
  onRendered() {
    this._initRenderModule();
    this._injector.get(DocThreadCommentSelectionController);
    this._injector.get(DocThreadCommentUIController);
  }
  _initRenderModule() {
    [DocThreadCommentRenderController].forEach((dep) => {
      this._renderManagerSrv.registerRenderModule(1 /* UNIVER_DOC */, dep);
    });
  }
};
__publicField(UniverDocsThreadCommentUIPlugin, "pluginName", PLUGIN_NAME);
__publicField(UniverDocsThreadCommentUIPlugin, "packageName", package_default5.name);
__publicField(UniverDocsThreadCommentUIPlugin, "version", package_default5.version);
__publicField(UniverDocsThreadCommentUIPlugin, "type", 1 /* UNIVER_DOC */);
UniverDocsThreadCommentUIPlugin = __decorateClass([
  DependentOn(UniverThreadCommentUIPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService),
  __decorateParam(3, IConfigService)
], UniverDocsThreadCommentUIPlugin);

// ../packages/docs-watermark/src/common/const.ts
var DOCS_WATERMARK_PLUGIN_NAME = "UNIVER_DOCS_WATERMARK_PLUGIN";
var DOC_WATERMARK_PLUGIN2 = "DOC_WATERMARK_PLUGIN";

// ../packages/docs-watermark/package.json
var package_default6 = {
  name: "@univerjs/docs-watermark",
  version: "0.21.1",
  private: false,
  description: "Per-document watermark plugin for Univer docs (renders Word-style page watermarks).",
  author: "DreamNum <developer@univer.ai>",
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
  keywords: [],
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
  peerDependencies: {
    rxjs: ">=7.0.0"
  },
  dependencies: {
    "@univerjs/core": "workspace:*",
    "@univerjs/docs": "workspace:*",
    "@univerjs/docs-ui": "workspace:*",
    "@univerjs/engine-render": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    rxjs: "^7.8.2",
    typescript: "^6.0.2",
    vitest: "^4.1.4"
  }
};

// ../packages/docs-watermark/src/services/docs-watermark.service.ts
var DocsWatermarkService = class extends Disposable {
  constructor() {
    super(...arguments);
    __publicField(this, "_resource$", new BehaviorSubject(null));
    __publicField(this, "resource$", this._resource$.asObservable());
  }
  get resource() {
    return this._resource$.getValue();
  }
  setResource(value) {
    this._resource$.next(value);
  }
  getForHeader(headerId) {
    var _a, _b, _c;
    if (!headerId) return [];
    return (_c = (_b = (_a = this._resource$.getValue()) == null ? void 0 : _a.byHeader) == null ? void 0 : _b[headerId]) != null ? _c : [];
  }
  getForFooter(footerId) {
    var _a, _b, _c;
    if (!footerId) return [];
    return (_c = (_b = (_a = this._resource$.getValue()) == null ? void 0 : _a.byFooter) == null ? void 0 : _b[footerId]) != null ? _c : [];
  }
  dispose() {
    super.dispose();
    this._resource$.complete();
  }
};

// ../packages/docs-watermark/src/controllers/docs-watermark-resource.controller.ts
var DocsWatermarkResourceController = class extends Disposable {
  constructor(_resourceManagerService, _renderManagerService) {
    super();
    __publicField(this, "_resourceManagerService", _resourceManagerService);
    __publicField(this, "_renderManagerService", _renderManagerService);
    __publicField(this, "_pendingByUnit", /* @__PURE__ */ new Map());
    this._register();
    this._initFlushOnRenderCreated();
  }
  _getService(unitId) {
    const render = this._renderManagerService.getRenderById(unitId);
    if (!render) return null;
    try {
      return render.with(DocsWatermarkService);
    } catch {
      return null;
    }
  }
  _push(unitId, value) {
    const svc = this._getService(unitId);
    if (svc) {
      svc.setResource(value != null ? value : null);
    } else {
      this._pendingByUnit.set(unitId, value);
    }
  }
  _initFlushOnRenderCreated() {
    this.disposeWithMe(
      this._renderManagerService.created$.subscribe((render) => {
        var _a;
        const unitId = render.unitId;
        if (!this._pendingByUnit.has(unitId)) return;
        const value = (_a = this._pendingByUnit.get(unitId)) != null ? _a : null;
        this._pendingByUnit.delete(unitId);
        const svc = this._getService(unitId);
        svc == null ? void 0 : svc.setResource(value != null ? value : null);
      })
    );
    this.disposeWithMe(toDisposable(() => this._pendingByUnit.clear()));
  }
  _register() {
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: DOC_WATERMARK_PLUGIN2,
        businesses: [1 /* UNIVER_DOC */],
        toJson: (_unitId, model) => JSON.stringify(model),
        parseJson: (json) => JSON.parse(json),
        onLoad: (unitId, value) => {
          this._push(unitId, value);
        },
        onUnLoad: (unitId) => {
          var _a;
          this._pendingByUnit.delete(unitId);
          (_a = this._getService(unitId)) == null ? void 0 : _a.setResource(null);
        }
      })
    );
  }
};
DocsWatermarkResourceController = __decorateClass([
  __decorateParam(0, IResourceManagerService),
  __decorateParam(1, IRenderManagerService)
], DocsWatermarkResourceController);

// ../packages/docs-watermark/src/views/render/render-watermark.ts
function renderWatermarkOnPage(ctx, config, bounds, image, user) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, bounds.width, bounds.height);
  ctx.clip();
  const { type, config: cfg } = config;
  if (type === "userInfo" /* UserInfo */ && cfg.userInfo) {
    drawUserInfo(ctx, cfg.userInfo, bounds, user);
  } else if (type === "image" /* Image */ && cfg.image) {
    drawImage(ctx, cfg.image, bounds, image);
  } else if (type === "text" /* Text */ && cfg.text) {
    drawText(ctx, cfg.text, bounds);
  }
  ctx.restore();
}
function applyTextStyle(ctx, fontSize, color, bold, italic, direction, fontFamily) {
  ctx.direction = direction;
  let style = "";
  if (italic) style += "italic ";
  if (bold) style += "bold ";
  style += `${fontSize}px ${fontFamily || "Arial"}`;
  ctx.font = style;
  ctx.fillStyle = color;
}
function tile(bounds, startX, startY, stepX, stepY, drawOne) {
  for (let y = startY; y < bounds.height; y += stepY) {
    for (let x = startX; x < bounds.width; x += stepX) {
      drawOne(x, y);
    }
  }
}
function drawText(ctx, cfg, bounds) {
  const { x, y, repeat, spacingX, spacingY, rotate, opacity, content, fontSize, color, bold, italic, direction, fontFamily, horizontalAlign, verticalAlign, boxWidth, boxHeight } = cfg;
  if (!content) return;
  ctx.globalAlpha = opacity;
  const renderFontSize = boxHeight != null ? boxHeight : fontSize;
  applyTextStyle(ctx, renderFontSize, color, bold, italic, direction, fontFamily);
  const naturalWidth = ctx.measureText(content).width;
  const scaleX = boxWidth != null && naturalWidth > 0 ? boxWidth / naturalWidth : 1;
  const drawnW = boxWidth != null ? boxWidth : naturalWidth;
  const drawnH = renderFontSize;
  if (!repeat) {
    const legacyCentered = x === 0 && y === 0 && !horizontalAlign && !verticalAlign;
    const hAlign = horizontalAlign != null ? horizontalAlign : legacyCentered ? "center" : void 0;
    const vAlign = verticalAlign != null ? verticalAlign : legacyCentered ? "center" : void 0;
    const cx = anchorCoord(hAlign, x, drawnW, bounds.width);
    const cy = anchorCoord(vAlign, y, drawnH, bounds.height);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI / 180 * rotate);
    if (scaleX !== 1) ctx.scale(scaleX, 1);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(content, 0, 0);
    ctx.restore();
    return;
  }
  const draw = (px, py) => {
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.PI / 180 * rotate);
    if (scaleX !== 1) ctx.scale(scaleX, 1);
    ctx.fillText(content, 0, 0);
    ctx.restore();
  };
  const stepX = drawnW + spacingX;
  const stepY = drawnH + spacingY;
  tile(bounds, x, y, stepX, stepY, draw);
}
function drawUserInfo(ctx, cfg, bounds, user) {
  const { x, y, repeat, spacingX, spacingY, rotate, opacity, name, fontSize, color, bold, italic, direction } = cfg;
  if (!user) return;
  let content = "";
  if (name) content += `${user.name} `;
  if (!content) return;
  ctx.globalAlpha = opacity;
  applyTextStyle(ctx, fontSize, color, bold, italic, direction);
  const draw = (px, py) => {
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.PI / 180 * rotate);
    ctx.fillText(content, 0, 0);
    ctx.restore();
  };
  if (repeat) {
    const stepX = ctx.measureText(content).width + spacingX;
    const stepY = fontSize + spacingY;
    tile(bounds, x, y, stepX, stepY, draw);
  } else {
    draw(x, y);
  }
}
function drawImage(ctx, cfg, bounds, image) {
  const { x, y, repeat, spacingX, spacingY, rotate, opacity, width, height, maintainAspectRatio, originRatio, horizontalAlign, verticalAlign } = cfg;
  if (!(image == null ? void 0 : image.complete)) return;
  ctx.globalAlpha = opacity;
  const w = width;
  const h = maintainAspectRatio ? width / originRatio : height;
  if (!repeat) {
    const legacyCentered = x === 0 && y === 0 && !horizontalAlign && !verticalAlign;
    const hAlign = horizontalAlign != null ? horizontalAlign : legacyCentered ? "center" : void 0;
    const vAlign = verticalAlign != null ? verticalAlign : legacyCentered ? "center" : void 0;
    const cx = anchorCoord(hAlign, x, w, bounds.width);
    const cy = anchorCoord(vAlign, y, h, bounds.height);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI / 180 * rotate);
    ctx.drawImage(image, -w / 2, -h / 2, w, h);
    ctx.restore();
    return;
  }
  const draw = (px, py) => {
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.PI / 180 * rotate);
    ctx.drawImage(image, 0, 0, w, h);
    ctx.restore();
  };
  tile(bounds, x, y, w + spacingX, h + spacingY, draw);
}
function anchorCoord(align, coord, boxSize, pageSize) {
  if (align === "start") return boxSize / 2;
  if (align === "end") return pageSize - boxSize / 2;
  if (align === "center") return pageSize / 2;
  return coord + boxSize / 2;
}

// ../packages/docs-watermark/src/controllers/render-controllers/docs-watermark.render-controller.ts
var DocsWatermarkRenderController = class extends Disposable {
  constructor(_context, _watermarkService, _userManagerService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_watermarkService", _watermarkService);
    __publicField(this, "_userManagerService", _userManagerService);
    // dataUrl → preloaded HTMLImageElement. Image watermarks render via
    // <img>.complete check; multiple distinct images coexist in one doc
    // (e.g. one logo per section), so we cache by url.
    __publicField(this, "_images", /* @__PURE__ */ new Map());
    this._initSubscription();
  }
  _initSubscription() {
    const documents = this._context.mainComponent;
    if (!documents) return;
    this.disposeWithMe(
      documents.pageBackgroundRender$.subscribe((cfg) => {
        const items = [
          ...this._watermarkService.getForHeader(cfg.page.headerId),
          ...this._watermarkService.getForFooter(cfg.page.footerId)
        ];
        if (items.length === 0) return;
        this._draw(cfg, items);
      })
    );
    this.disposeWithMe(
      this._watermarkService.resource$.subscribe((resource) => {
        var _a, _b;
        this._images.clear();
        if (!resource) {
          (_a = this._context.mainComponent) == null ? void 0 : _a.makeDirty();
          return;
        }
        const visit = (lists) => {
          var _a2;
          if (!lists) return;
          for (const list of Object.values(lists)) {
            for (const item of list) {
              if (item.type === "image" /* Image */ && ((_a2 = item.config.image) == null ? void 0 : _a2.url)) {
                const url = item.config.image.url;
                if (this._images.has(url)) continue;
                const img = new Image();
                img.src = url;
                img.onload = () => {
                  var _a3;
                  return (_a3 = this._context.mainComponent) == null ? void 0 : _a3.makeDirty();
                };
                this._images.set(url, img);
              }
            }
          }
        };
        visit(resource.byHeader);
        visit(resource.byFooter);
        (_b = this._context.mainComponent) == null ? void 0 : _b.makeDirty();
      })
    );
  }
  _draw(cfg, items) {
    var _a, _b;
    const { page, pageLeft, pageTop, ctx } = cfg;
    ctx.save();
    ctx.translate(pageLeft, pageTop);
    for (const item of items) {
      const user = item.type === "userInfo" /* UserInfo */ ? this._userManagerService.getCurrentUser() : null;
      const image = item.type === "image" /* Image */ && ((_a = item.config.image) == null ? void 0 : _a.url) ? (_b = this._images.get(item.config.image.url)) != null ? _b : null : null;
      renderWatermarkOnPage(
        ctx,
        item,
        { width: page.pageWidth, height: page.pageHeight },
        image,
        user
      );
    }
    ctx.restore();
  }
};
DocsWatermarkRenderController = __decorateClass([
  __decorateParam(1, Inject(DocsWatermarkService)),
  __decorateParam(2, Inject(UserManagerService))
], DocsWatermarkRenderController);

// ../packages/docs-watermark/src/plugin.ts
var UniverDocsWatermarkPlugin = class extends Plugin {
  constructor(_config, _injector, _renderManagerSrv) {
    super();
    __publicField(this, "_injector", _injector);
    __publicField(this, "_renderManagerSrv", _renderManagerSrv);
  }
  onStarting() {
    [
      [DocsWatermarkResourceController]
    ].forEach((dep) => {
      this._injector.add(dep);
    });
  }
  onRendered() {
    this._initRenderModule();
    this._injector.get(DocsWatermarkResourceController);
  }
  _initRenderModule() {
    [
      [DocsWatermarkService],
      [DocsWatermarkRenderController]
    ].forEach((dep) => {
      this._renderManagerSrv.registerRenderModule(1 /* UNIVER_DOC */, dep);
    });
  }
};
__publicField(UniverDocsWatermarkPlugin, "pluginName", DOCS_WATERMARK_PLUGIN_NAME);
__publicField(UniverDocsWatermarkPlugin, "packageName", package_default6.name);
__publicField(UniverDocsWatermarkPlugin, "version", package_default6.version);
__publicField(UniverDocsWatermarkPlugin, "type", 1 /* UNIVER_DOC */);
UniverDocsWatermarkPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IRenderManagerService)
], UniverDocsWatermarkPlugin);

// src/docs/main.ts
var IS_E2E = false;
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  },
  logLevel: 4 /* VERBOSE */
});
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  ribbonType: "classic"
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin, {
  container: "univerdoc"
});
univer.registerPlugin(UniverDocsDrawingUIPlugin);
univer.registerPlugin(UniverDocsExchangeUIPlugin);
univer.registerPlugin(UniverDocsThreadCommentUIPlugin);
univer.registerPlugin(UniverDocsHyperLinkUIPlugin);
univer.registerPlugin(UniverDocsMentionUIPlugin);
univer.registerPlugin(UniverDocsQuickInsertUIPlugin);
univer.registerPlugin(UniverDocsWatermarkPlugin);
if (!IS_E2E) {
  univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_SIMPLE);
  univer.registerPlugin(UniverDebuggerPlugin, {
    fabEntryUnitType: 1 /* UNIVER_DOC */
  });
} else {
  univer.registerPlugin(UniverDebuggerPlugin, {
    fab: false,
    performanceMonitor: {
      enabled: false
    }
  });
}
window.univer = univer;
var injector = univer.__getInjector();
var userManagerService = injector.get(UserManagerService);
var mockUser = {
  userID: "Owner_qxVnhPbQ",
  name: "Owner",
  avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBtZU9TxtBEIbfWRzFSIdkikhBSqRQkJqkCKTCFkqVInSUSaT0wC8w/gXxD4gU2nRJkXQWhAZowDUUWKIwEgWWbEEB3mVmx3dn4DA2nB/ppNuPeWd29mMIPXDr+RxwtgRHeW6+guNPRxogqnL7Dwz9psJ27S4NShaeZTH3kwXy6I81dlRKcmRui88swdq9AcSFL7Buz1Vmlns64MiLsCjzwnIYHLH57tbfFbs7KRaXyEU8FVZofqccOfA5l7Q8LPIkGrwnb2RPNEXWFVMUF3L+kDCk0btDDAMzOm5YfAHDwp4tG74wnzAsiOYMnJ3GoDybA7IT98/jm5+JNnfiIzAS6LlqHQBN/i6b2t/cV1Hh6BfwYlHnHP4AXi5q/8kmMMpOs8+BixZw/Fd6xUEHEbnkgclvQP2fGp7uShRKnQ3G32rkjV1th8JhIGG7tR/JyjGteSOZELwGMmNqIIigRCLRh2OZIE6BjItdd7pCW6Uhm1zzkUtungSxwEUzNpQ+GQumtH1ej1MqgmNT6vwmhCq5yuwq56EYTbgeQUz3yvrpV1b4ok3nYJ+eYhgYmjRUqErx2EDq0Fr8FhG++iqVGqxlUJI/70Ar0UgJaWHj6hYVHJrfKssAHot1JfqwE9WVWzXZVd5z2Ws/4PnmtEjkXeKJDvxUecLbWOXH/DP6QQ4J72NS0adedp1aseBfXP8odlZFfPvBF7SN/8hky1TYuPOAXAEipMx15u5ToAAAAABJRU5ErkJggg==",
  anonymous: false,
  canBindAnonymous: false
};
userManagerService.setCurrentUser(mockUser);
window.univerAPI = FUniver.newAPI(univer);
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)
*/
