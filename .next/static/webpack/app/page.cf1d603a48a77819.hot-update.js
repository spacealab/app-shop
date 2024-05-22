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

/***/ "(app-pages-browser)/./src/components/layouts/header/menu/Menu.tsx":
/*!*****************************************************!*\
  !*** ./src/components/layouts/header/menu/Menu.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common */ \"(app-pages-browser)/./src/components/common/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _mock_browsCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mock/browsCategory */ \"(app-pages-browser)/./src/mock/browsCategory.tsx\");\n/* harmony import */ var _api_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/Menu */ \"(app-pages-browser)/./src/api/Menu.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Import useQuery\nfunction Menu() {\n    _s();\n    // TODO LOAD MENU DATA FROM API\n    const { data: menuData } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({\n        queryKey: [\n            _api_Menu__WEBPACK_IMPORTED_MODULE_4__.getMenuApiCall.name\n        ],\n        queryFn: ()=>(0,_api_Menu__WEBPACK_IMPORTED_MODULE_4__.getMenuApiCall)()\n    });\n    console.log(\"menuData\", menuData);\n    let mainMenuItems = null;\n    if (menuData) {\n        const findMenu = menuData.data.filter((item)=>item.attributes.position === \"main_menu\");\n        if (findMenu.length > 0) {\n            mainMenuItems = findMenu[0].attributes.menu_items;\n            mainMenuItems.data.sort((a, b)=>{\n                if (a.attributes.rank < b.attributes.rank) return -1;\n                if (a.attributes.rank > b.attributes.rank) return 1;\n                return 0;\n            });\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"all_categories\",\n                className: \"flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_1__.IconBox, {\n                        linkClassName: \"ml-2\",\n                        icon: \"icon-apps\",\n                        size: 24,\n                        title: \"Browse All Categories\",\n                        link: \"#\",\n                        titleClassName: \"text-medium\"\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_1__.IconBox, {\n                        icon: \"icon-angle-small-down\",\n                        size: 24\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"all_categories_box\",\n                        className: \"hidden absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"all_cat_inner_box\",\n                            className: \"flex flex-wrap justify-between gap-y-[15px]\",\n                            children: [\n                                _mock_browsCategory__WEBPACK_IMPORTED_MODULE_3__.browsCategoriesMock.map((item, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_1__.IconBox, {\n                                        link: item.link,\n                                        icon: item.icon,\n                                        size: 30,\n                                        title: item.title,\n                                        titleClassName: \"text-heading-sm text-blue-300\",\n                                        linkClassName: \"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300\",\n                                        path: item.iconPath\n                                    }, index, false, {\n                                        fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 31\n                                    }, this);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    id: \"more_categories\",\n                                    className: \"cursor-pointer flex gap-4 items-center justify-center w-full mt-[17px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"icon-add text-[24px]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-heading-sm text-blue-300\",\n                                            children: \"More Categories\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                id: \"main_menu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10\",\n                    children: mainMenuItems && mainMenuItems.data.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: item.attributes.icon_name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common__WEBPACK_IMPORTED_MODULE_1__.IconBox, {\n                                link: item.attributes.link,\n                                icon: item.attributes.icon_name,\n                                title: item.attributes.title,\n                                size: 24\n                            }, void 0, false, {\n                                fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 27\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: item.attributes.link,\n                                className: \"flex items-center gap-1\",\n                                children: item.attributes.title\n                            }, void 0, false, {\n                                fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 29\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 23\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ali/Desktop/app-shop/src/components/layouts/header/menu/Menu.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Menu, \"YgnrCgBgwY7VcH1tGyv+hm/7c38=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyL21lbnUvTWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ2pCO0FBQzRCO0FBQ2I7QUFDSyxDQUFDLGtCQUFrQjtBQUU3RCxTQUFTSzs7SUFDZCwrQkFBK0I7SUFFN0IsTUFBTSxFQUFFQyxNQUFNQyxRQUFRLEVBQUUsR0FBR0gsK0RBQVFBLENBQUM7UUFDbENJLFVBQVU7WUFBQ0wscURBQWNBLENBQUNNLElBQUk7U0FBQztRQUMvQkMsU0FBUyxJQUFNUCx5REFBY0E7SUFDL0I7SUFFQVEsUUFBUUMsR0FBRyxDQUFDLFlBQVlMO0lBRXhCLElBQUlNLGdCQUFtRDtJQUd2RCxJQUFHTixVQUFVO1FBQ1gsTUFBTU8sV0FBV1AsU0FBU0QsSUFBSSxDQUFDUyxNQUFNLENBQUMsQ0FBQ0MsT0FBK0JBLEtBQUtDLFVBQVUsQ0FBQ0MsUUFBUSxLQUFLO1FBRW5HLElBQUdKLFNBQVNLLE1BQU0sR0FBRyxHQUFHO1lBQ3RCTixnQkFBZ0JDLFFBQVEsQ0FBQyxFQUFFLENBQUNHLFVBQVUsQ0FBQ0csVUFBVTtZQUVqRFAsY0FBY1AsSUFBSSxDQUFDZSxJQUFJLENBQUMsQ0FBQ0MsR0FBOEJDO2dCQUNyRCxJQUFJRCxFQUFFTCxVQUFVLENBQUNPLElBQUksR0FBR0QsRUFBRU4sVUFBVSxDQUFDTyxJQUFJLEVBQ3ZDLE9BQU8sQ0FBQztnQkFFVixJQUFJRixFQUFFTCxVQUFVLENBQUNPLElBQUksR0FBR0QsRUFBRU4sVUFBVSxDQUFDTyxJQUFJLEVBQ3ZDLE9BQU87Z0JBRVQsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUdBLHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQUlDLElBQUc7Z0JBQWlCQyxXQUFVOztrQ0FDL0IsOERBQUMzQix1REFBT0E7d0JBQUM0QixlQUFjO3dCQUFPQyxNQUFLO3dCQUFZQyxNQUFNO3dCQUFJQyxPQUFNO3dCQUF3QkMsTUFBSzt3QkFBSUMsZ0JBQWU7Ozs7OztrQ0FFL0csOERBQUNqQyx1REFBT0E7d0JBQUM2QixNQUFLO3dCQUF3QkMsTUFBTTs7Ozs7O2tDQUU5Qyw4REFBQ0w7d0JBQUlDLElBQUc7d0JBQXFCQyxXQUFVO2tDQUNyQyw0RUFBQ0Y7NEJBQUlDLElBQUc7NEJBQW9CQyxXQUFVOztnQ0FJbEN6QixvRUFBbUJBLENBQUNnQyxHQUFHLENBQUMsQ0FBQ2xCLE1BQU1tQjtvQ0FDN0IscUJBQVEsOERBQUNuQyx1REFBT0E7d0NBQWFnQyxNQUFNaEIsS0FBS2dCLElBQUk7d0NBQUVILE1BQU1iLEtBQUthLElBQUk7d0NBQUVDLE1BQU07d0NBQUlDLE9BQU9mLEtBQUtlLEtBQUs7d0NBQUVFLGdCQUFlO3dDQUFnQ0wsZUFBYzt3Q0FBcUlRLE1BQU1wQixLQUFLcUIsUUFBUTt1Q0FBM1JGOzs7OztnQ0FDeEI7OENBSUYsOERBQUNWO29DQUFJQyxJQUFHO29DQUFrQkMsV0FBVTs7c0RBQ2xDLDhEQUFDVzs0Q0FBRVgsV0FBVTs7Ozs7O3NEQUNiLDhEQUFDRjs0Q0FBSUUsV0FBVTtzREFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU92RCw4REFBQ1k7Z0JBQUliLElBQUc7MEJBQ04sNEVBQUNjO29CQUFHYixXQUFVOzhCQUdWZCxpQkFDQUEsY0FBY1AsSUFBSSxDQUFDNEIsR0FBRyxDQUFDLENBQUNsQixNQUFnQ21CO3dCQUN0RCxxQkFDRSw4REFBQ007c0NBRUN6QixLQUFLQyxVQUFVLENBQUN5QixTQUFTLGlCQUN2Qiw4REFBQzFDLHVEQUFPQTtnQ0FBQ2dDLE1BQU1oQixLQUFLQyxVQUFVLENBQUNlLElBQUk7Z0NBQUVILE1BQU1iLEtBQUtDLFVBQVUsQ0FBQ3lCLFNBQVM7Z0NBQUVYLE9BQU9mLEtBQUtDLFVBQVUsQ0FBQ2MsS0FBSztnQ0FBRUQsTUFBTTs7Ozs7cURBQ3hHLDhEQUFDN0IsaURBQUlBO2dDQUFDMEMsTUFBTTNCLEtBQUtDLFVBQVUsQ0FBQ2UsSUFBSTtnQ0FBRUwsV0FBVTswQ0FBMkJYLEtBQUtDLFVBQVUsQ0FBQ2MsS0FBSzs7Ozs7OzJCQUp6Rkk7Ozs7O29CQVFiOzs7Ozs7Ozs7Ozs7O0FBcUJsQjtHQS9GZ0I5Qjs7UUFHZUQsMkRBQVFBOzs7S0FIdkJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyL21lbnUvTWVudS50c3g/ZmI0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlUeXBlLCBNZW51SXRlbVR5cGUsIE1lbnVUeXBlLCBQb3B1bGF0ZVR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5pbXBvcnQgeyBJY29uQm94IH0gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7YnJvd3NDYXRlZ29yaWVzTW9ja30gZnJvbSAnQC9tb2NrL2Jyb3dzQ2F0ZWdvcnknO1xuaW1wb3J0IHsgZ2V0TWVudUFwaUNhbGwgfSBmcm9tICdAL2FwaS9NZW51JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JzsgLy8gSW1wb3J0IHVzZVF1ZXJ5XG5cbmV4cG9ydCBmdW5jdGlvbiBNZW51KCkge1xuICAvLyBUT0RPIExPQUQgTUVOVSBEQVRBIEZST00gQVBJXG5cbiAgICBjb25zdCB7IGRhdGE6IG1lbnVEYXRhIH0gPSB1c2VRdWVyeSh7XG4gICAgICBxdWVyeUtleTogW2dldE1lbnVBcGlDYWxsLm5hbWVdLFxuICAgICAgcXVlcnlGbjogKCkgPT4gZ2V0TWVudUFwaUNhbGwoKVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ21lbnVEYXRhJywgbWVudURhdGEpXG5cbiAgICBsZXQgbWFpbk1lbnVJdGVtczogbnVsbCB8IFBvcHVsYXRlVHlwZTxNZW51SXRlbVR5cGU+ID0gbnVsbDtcblxuXG4gICAgaWYobWVudURhdGEpIHtcbiAgICAgIGNvbnN0IGZpbmRNZW51ID0gbWVudURhdGEuZGF0YS5maWx0ZXIoKGl0ZW06IEVudGl0eVR5cGU8TWVudVR5cGU+KSA9PiBpdGVtLmF0dHJpYnV0ZXMucG9zaXRpb24gPT09ICdtYWluX21lbnUnKTtcblxuICAgICAgaWYoZmluZE1lbnUubGVuZ3RoID4gMCkge1xuICAgICAgICBtYWluTWVudUl0ZW1zID0gZmluZE1lbnVbMF0uYXR0cmlidXRlcy5tZW51X2l0ZW1zO1xuXG4gICAgICAgIG1haW5NZW51SXRlbXMuZGF0YS5zb3J0KChhOiBFbnRpdHlUeXBlPE1lbnVJdGVtVHlwZT4gLCBiOiBFbnRpdHlUeXBlPE1lbnVJdGVtVHlwZT4pID0+IHtcbiAgICAgICAgICBpZiAoYS5hdHRyaWJ1dGVzLnJhbmsgPCBiLmF0dHJpYnV0ZXMucmFuaylcbiAgICAgICAgICAgIHJldHVybiAtMTtcblxuICAgICAgICAgIGlmIChhLmF0dHJpYnV0ZXMucmFuayA+IGIuYXR0cmlidXRlcy5yYW5rKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG5cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFsbF9jYXRlZ29yaWVzXCIgY2xhc3NOYW1lPVwiZmxleCByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciBiZy1ncmVlbi0yMDAgZ2FwLTIuNSB0ZXh0LXdoaXRlIHB4LTQgcHktMyByb3VuZGVkLVs1cHhdIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJY29uQm94IGxpbmtDbGFzc05hbWU9XCJtbC0yXCIgaWNvbj1cImljb24tYXBwc1wiIHNpemU9ezI0fSB0aXRsZT1cIkJyb3dzZSBBbGwgQ2F0ZWdvcmllc1wiIGxpbms9XCIjXCIgdGl0bGVDbGFzc05hbWU9XCJ0ZXh0LW1lZGl1bVwiLz5cblxuICAgICAgICAgICAgICAgIDxJY29uQm94IGljb249XCJpY29uLWFuZ2xlLXNtYWxsLWRvd25cIiBzaXplPXsyNH0vPlxuXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJhbGxfY2F0ZWdvcmllc19ib3hcIiBjbGFzc05hbWU9XCJoaWRkZW4gYWJzb2x1dGUgei0yMCBiZy13aGl0ZSBsZWZ0LTAgdG9wLTE2IHctWzUwMHB4XSByb3VuZGVkLVs1cHhdIGJvcmRlci1bMXB4XSBib3JkZXItZ3JlZW4tMzAwIHAtWzMwcHhdIGhvdmVyOmN1cnNvci1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFsbF9jYXRfaW5uZXJfYm94XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGdhcC15LVsxNXB4XVwiPlxuXG4gICAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJvd3NDYXRlZ29yaWVzTW9jay5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICA8SWNvbkJveCBrZXk9e2luZGV4fSBsaW5rPXtpdGVtLmxpbmt9IGljb249e2l0ZW0uaWNvbn0gc2l6ZT17MzB9IHRpdGxlPXtpdGVtLnRpdGxlfSB0aXRsZUNsYXNzTmFtZT1cInRleHQtaGVhZGluZy1zbSB0ZXh0LWJsdWUtMzAwXCIgbGlua0NsYXNzTmFtZT1cImdhcC0zLjUgcm91bmRlZC1bNXB4XSBsZzpib3JkZXItWzFweF0gbGc6Ym9yZGVyLWdyYXktMzAwIHB5LTIuNSBiYXNpcy1bY2FsYyg1MCUtOHB4KV0ganVzdGlmeS1zdGFydCBwbC00IGxnOmhvdmVyOmJvcmRlci1ncmVlbi0zMDBcIiBwYXRoPXtpdGVtLmljb25QYXRofS8+XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vcmVfY2F0ZWdvcmllc1wiIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBtdC1bMTdweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1hZGQgdGV4dC1bMjRweF1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1oZWFkaW5nLXNtIHRleHQtYmx1ZS0zMDBcIj5Nb3JlIENhdGVnb3JpZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxuYXYgaWQ9XCJtYWluX21lbnVcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtc3RhcnQgbGc6aXRlbXMtY2VudGVyIHRleHQtaGVhZGluZzYgbGc6dGV4dC1oZWFkaW5nLXNtIDJ4bDp0ZXh0LWhlYWRpbmc2IGdhcC1bMzJweF0gbXQtWzMycHhdIGxnOm10LTAgbGc6Z2FwLTMgeGw6Z2FwLTUgMnhsOmdhcC0xMFwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1haW5NZW51SXRlbXMgJiZcbiAgICAgICAgICAgICAgICAgIG1haW5NZW51SXRlbXMuZGF0YS5tYXAoKGl0ZW06IEVudGl0eVR5cGU8TWVudUl0ZW1UeXBlPiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXR0cmlidXRlcy5pY29uX25hbWU/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJveCBsaW5rPXtpdGVtLmF0dHJpYnV0ZXMubGlua30gaWNvbj17aXRlbS5hdHRyaWJ1dGVzLmljb25fbmFtZX0gdGl0bGU9e2l0ZW0uYXR0cmlidXRlcy50aXRsZX0gc2l6ZT17MjR9Lz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogPExpbmsgaHJlZj17aXRlbS5hdHRyaWJ1dGVzLmxpbmt9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+e2l0ZW0uYXR0cmlidXRlcy50aXRsZX08L0xpbms+IFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgbWVudU1vY2subWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pY29uPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJveCB7Li4uaXRlbX0gc2l6ZT17MjR9Lz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8TGluayBocmVmPXtpdGVtLmxpbmt9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+e2l0ZW0udGl0bGV9PC9MaW5rPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gKi99XG5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8Lz5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJJY29uQm94IiwiTGluayIsImJyb3dzQ2F0ZWdvcmllc01vY2siLCJnZXRNZW51QXBpQ2FsbCIsInVzZVF1ZXJ5IiwiTWVudSIsImRhdGEiLCJtZW51RGF0YSIsInF1ZXJ5S2V5IiwibmFtZSIsInF1ZXJ5Rm4iLCJjb25zb2xlIiwibG9nIiwibWFpbk1lbnVJdGVtcyIsImZpbmRNZW51IiwiZmlsdGVyIiwiaXRlbSIsImF0dHJpYnV0ZXMiLCJwb3NpdGlvbiIsImxlbmd0aCIsIm1lbnVfaXRlbXMiLCJzb3J0IiwiYSIsImIiLCJyYW5rIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJsaW5rQ2xhc3NOYW1lIiwiaWNvbiIsInNpemUiLCJ0aXRsZSIsImxpbmsiLCJ0aXRsZUNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwicGF0aCIsImljb25QYXRoIiwiaSIsIm5hdiIsInVsIiwibGkiLCJpY29uX25hbWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layouts/header/menu/Menu.tsx\n"));

/***/ })

});