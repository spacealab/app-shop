"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/common/product/simple-pruduct-slider/SimpleProductSlider.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/common/product/simple-pruduct-slider/SimpleProductSlider.tsx ***!
  \*************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SimpleProductSlider: function() { return /* binding */ SimpleProductSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/common */ \"(app-pages-browser)/./src/components/common/index.ts\");\n/* __next_internal_client_entry_do_not_use__ SimpleProductSlider auto */ \n\n\n\nfunction SimpleProductSlider(param) {\n    let { sliderData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        spaceBetween: 16,\n        slidesPerView: 2,\n        autoplay: true,\n        modules: [\n            swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay\n        ],\n        breakpoints: {\n            // Breakpoint at 640px\n            768: {\n                slidesPerView: 3,\n                spaceBetween: 18\n            },\n            // Breakpoint at 1024px\n            1024: {\n                slidesPerView: 4,\n                spaceBetween: 22\n            },\n            1280: {\n                slidesPerView: 5,\n                spaceBetween: 24\n            }\n        },\n        children: sliderData.map((sliderData, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_3__.SimpleProductCard, {\n                    data: sliderData\n                }, void 0, false, {\n                    fileName: \"/home/ali/Desktop/app-shop/src/components/common/product/simple-pruduct-slider/SimpleProductSlider.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 27\n                }, this)\n            }, index, false, {\n                fileName: \"/home/ali/Desktop/app-shop/src/components/common/product/simple-pruduct-slider/SimpleProductSlider.tsx\",\n                lineNumber: 46,\n                columnNumber: 25\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/ali/Desktop/app-shop/src/components/common/product/simple-pruduct-slider/SimpleProductSlider.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c = SimpleProductSlider;\nvar _c;\n$RefreshReg$(_c, \"SimpleProductSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0L3NpbXBsZS1wcnVkdWN0LXNsaWRlci9TaW1wbGVQcm9kdWN0U2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFc0Q7QUFDSDtBQUVLO0FBTWpELFNBQVNJLG9CQUFvQixLQUFtQjtRQUFuQixFQUFDQyxVQUFVLEVBQVEsR0FBbkI7SUFFaEMscUJBQ0ksOERBQUNKLGdEQUFNQTtRQUNMSyxjQUFjO1FBQ2RDLGVBQWU7UUFDZkMsVUFBVTtRQUNWQyxTQUFTO1lBQUNULG9EQUFRQTtTQUFDO1FBQ25CVSxhQUNFO1lBQ0ksc0JBQXNCO1lBQ3RCLEtBQUs7Z0JBQ0hILGVBQWU7Z0JBQ2ZELGNBQWM7WUFDaEI7WUFDQSx1QkFBdUI7WUFDdkIsTUFBTTtnQkFDSkMsZUFBZTtnQkFDZkQsY0FBYztZQUNoQjtZQUNBLE1BQU07Z0JBQ0ZDLGVBQWU7Z0JBQ2ZELGNBQWM7WUFDaEI7UUFDSjtrQkFRRUQsV0FBV00sR0FBRyxDQUFDLENBQUNOLFlBQVlPO1lBQ3hCLHFCQUNJLDhEQUFDVixxREFBV0E7MEJBQ1YsNEVBQUNDLGlFQUFpQkE7b0JBQUNVLE1BQVFSOzs7Ozs7ZUFEWE87Ozs7O1FBSTFCOzs7Ozs7QUFLaEI7S0EzQ2dCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vcHJvZHVjdC9zaW1wbGUtcHJ1ZHVjdC1zbGlkZXIvU2ltcGxlUHJvZHVjdFNsaWRlci50c3g/NjI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgQXV0b3BsYXksIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcblxuaW1wb3J0IHsgU2ltcGxlUHJvZHVjdENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vblwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzbGlkZXJEYXRhIDogQXJyYXk8YW55PlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXBsZVByb2R1Y3RTbGlkZXIoe3NsaWRlckRhdGF9OiBQcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTZ9XG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17Mn1cbiAgICAgICAgICBhdXRvcGxheT17dHJ1ZX1cbiAgICAgICAgICBtb2R1bGVzPXtbQXV0b3BsYXldfVxuICAgICAgICAgIGJyZWFrcG9pbnRzPSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gQnJlYWtwb2ludCBhdCA2NDBweFxuICAgICAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIEJyZWFrcG9pbnQgYXQgMTAyNHB4XG4gICAgICAgICAgICAgICAgMTAyNDoge1xuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEyODA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA+XG5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNsaWRlckRhdGEubWFwKChzbGlkZXJEYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpbXBsZVByb2R1Y3RDYXJkIGRhdGEgPSB7c2xpZGVyRGF0YX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICApO1xufVxuXG4iXSwibmFtZXMiOlsiQXV0b3BsYXkiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlNpbXBsZVByb2R1Y3RDYXJkIiwiU2ltcGxlUHJvZHVjdFNsaWRlciIsInNsaWRlckRhdGEiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiYXV0b3BsYXkiLCJtb2R1bGVzIiwiYnJlYWtwb2ludHMiLCJtYXAiLCJpbmRleCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/product/simple-pruduct-slider/SimpleProductSlider.tsx\n"));

/***/ })

});