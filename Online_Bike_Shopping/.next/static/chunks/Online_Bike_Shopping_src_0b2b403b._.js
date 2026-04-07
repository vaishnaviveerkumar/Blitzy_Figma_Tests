(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * StatusBar — Decorative iOS-style status bar component.
 *
 * Renders a non-functional, purely visual iOS status bar at the top of each screen.
 * Displays a static "9:41" time on the left and decorative signal, WiFi, and battery
 * icons on the right, all in white on a transparent background.
 *
 * This component is used across all 3 screens (Discover, Detail, Shopping Bag) to
 * maintain visual fidelity with the Figma design (Component 1:7).
 *
 * Key design decisions:
 * - Uses system font stack for time display (SF Pro Text → system fallback)
 * - All icons are inline SVGs for reliability and theming via currentColor
 * - No interactivity — this is a Server Component with zero client-side JS
 * - No external dependencies — fully self-contained
 *
 * Figma reference: Node 1:7 (file key: 6FWdXDJV3foFfDfOhmkORj)
 * Instances: Discover (1:45), Detail (1:181), Cart (1:215)
 */ /**
 * CellularIcon — Inline SVG rendering 4 ascending signal bars.
 * Represents cellular signal strength in the iOS status bar.
 * Each bar increases in height from left to right.
 */ __turbopack_context__.s([
    "default",
    ()=>StatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CellularIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "12",
        viewBox: "0 0 17 12",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "9",
                width: "3",
                height: "3",
                rx: "0.5",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.5",
                y: "6",
                width: "3",
                height: "6",
                rx: "0.5",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "9",
                y: "3",
                width: "3",
                height: "9",
                rx: "0.5",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13.5",
                y: "0",
                width: "3",
                height: "12",
                rx: "0.5",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = CellularIcon;
/**
 * WiFiIcon — Inline SVG rendering a simplified WiFi signal icon.
 * Three concentric arcs representing WiFi signal strength,
 * with a bottom center dot as the connection point.
 */ function WiFiIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "12",
        viewBox: "0 0 16 12",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.5 3.5C4.5 0.5 11.5 0.5 14.5 3.5",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 6C6 4 10 4 12 6",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.25 8.5C7.25 7.5 8.75 7.5 9.75 8.5",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "11",
                r: "1",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c1 = WiFiIcon;
/**
 * BatteryIcon — Inline SVG rendering a horizontal battery indicator.
 * Shows a nearly-full battery with a rounded rectangular body,
 * inner fill bar, and small terminal nub on the right side.
 */ function BatteryIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "25",
        height: "12",
        viewBox: "0 0 25 12",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0.5",
                y: "0.5",
                width: "21",
                height: "11",
                rx: "2",
                stroke: "white",
                strokeOpacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "18",
                height: "8",
                rx: "1",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "22.5",
                y: "3.5",
                width: "2",
                height: "5",
                rx: "1",
                fill: "white",
                fillOpacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c2 = BatteryIcon;
function StatusBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full items-center justify-between",
        style: {
            padding: "12px 20px",
            height: "44px"
        },
        role: "presentation",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[15px] font-semibold text-white leading-none",
                style: {
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif"
                },
                children: "9:41"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                style: {
                    gap: "6px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CellularIcon, {}, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WiFiIcon, {}, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BatteryIcon, {}, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c3 = StatusBar;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CellularIcon");
__turbopack_context__.k.register(_c1, "WiFiIcon");
__turbopack_context__.k.register(_c2, "BatteryIcon");
__turbopack_context__.k.register(_c3, "StatusBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/layout/BackButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function BackButton(param) {
    let { onClick } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    /** Navigate back using the provided handler or default router.back() */ const handleClick = ()=>{
        if (onClick) {
            onClick();
        } else {
            router.back();
        }
    };
    /* Main button — gradient fill with ::before pseudo-element gradient stroke.
     Design system classes applied:
     - bg-gradient-primary: blue-to-purple gradient fill
     - shadow-button: neumorphic dual-direction shadow
     - gradient-stroke-button: ::before pseudo-element 1px gradient stroke */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: handleClick,
        "aria-label": "Go back",
        className: "relative w-[44px] h-[44px] shrink-0 rounded-[10px] flex items-center justify-center cursor-pointer border-none bg-gradient-primary shadow-button gradient-stroke-button outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "15 6 9 12 15 18",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/BackButton.tsx",
                lineNumber: 67,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Online_Bike_Shopping/src/components/layout/BackButton.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/BackButton.tsx",
        lineNumber: 49,
        columnNumber: 7
    }, this);
}
_s(BackButton, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BackButton;
var _c;
__turbopack_context__.k.register(_c, "BackButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/layout/BackButton.tsx [app-client] (ecmascript)");
'use client';
;
;
function PageHeader(param) {
    let { title, showSearch, onBack, onSearch } = param;
    /* ----------------------------------------------------------------
     SEARCH MODE — Discover screen (Figma node 1:46)
     Row layout: title left + 44×44 gradient search button right
     ---------------------------------------------------------------- */ if (showSearch) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "flex w-full items-center justify-between px-[20px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-[20px] font-bold leading-[1.5em] text-white",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onSearch,
                    "aria-label": "Search",
                    className: "relative flex h-[44px] w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-[10px] border-none bg-gradient-primary shadow-button gradient-stroke-button outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "11",
                                cy: "11",
                                r: "7",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "16.5",
                                y1: "16.5",
                                x2: "21",
                                y2: "21",
                                stroke: "white",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    /* ----------------------------------------------------------------
     BACK MODE — Detail & Cart screens (Figma nodes 1:210, 1:303)
     Row layout: BackButton left + title right, gap 56px
     Default when neither showSearch nor showBack is specified.
     ---------------------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex w-full items-center gap-[56px] px-[20px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: onBack
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[20px] font-bold leading-[1.5em] text-white",
                children: title
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/store/cart-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Central cart state management store for the Online Bike Shopping App.
 *
 * Uses Zustand v5 with the `persist` middleware to maintain cart state
 * (items, coupon code, coupon application status) across page navigations
 * and browser refreshes via localStorage.
 *
 * Consumers:
 * - BuyNowBar (Detail page) — calls addToCart(product)
 * - CartItemList, CartItem (Cart page) — reads items
 * - QuantityStepper (Cart page) — calls updateQuantity(id, delta)
 * - CouponInput (Cart page) — calls applyCoupon(code)
 * - PriceSummary (Cart page) — reads getSubtotal(), getDeliveryFee(), getDiscount()
 * - TotalDisplay (Cart page) — reads getTotal()
 * - TabBar (Discover page) — optionally reads items.length for cart badge
 *
 * @module store/cart-store
 */ __turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        /* ─── Initial State ─── */ items: [],
        couponCode: '',
        isCouponApplied: false,
        /* ─── Mutation Actions ─── */ addToCart: (product)=>{
            const { items } = get();
            const existingIndex = items.findIndex((item)=>item.product.id === product.id);
            if (existingIndex !== -1) {
                // Product already in cart — increment its quantity by 1
                const updatedItems = items.map((item, index)=>index === existingIndex ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item);
                set({
                    items: updatedItems
                });
            } else {
                // New product — add with quantity 1
                set({
                    items: [
                        ...items,
                        {
                            product,
                            quantity: 1
                        }
                    ]
                });
            }
        },
        removeFromCart: (id)=>{
            const { items } = get();
            const filteredItems = items.filter((item)=>item.product.id !== id);
            set({
                items: filteredItems
            });
        },
        updateQuantity: (id, delta)=>{
            const { items } = get();
            const updatedItems = items.map((item)=>{
                if (item.product.id === id) {
                    const newQuantity = item.quantity + delta;
                    return {
                        ...item,
                        quantity: newQuantity
                    };
                }
                return item;
            }).filter((item)=>item.quantity > 0);
            set({
                items: updatedItems
            });
        },
        applyCoupon: (code)=>{
            const isValid = code.toLowerCase() === 'bike30';
            set({
                couponCode: code,
                isCouponApplied: isValid
            });
        },
        /* ─── Computed Value Getters ─── */ getSubtotal: ()=>{
            const { items } = get();
            if (items.length === 0) {
                return 0;
            }
            const sum = items.reduce((acc, item)=>acc + item.product.price * item.quantity, 0);
            // Round to 2 decimal places to prevent IEEE 754 floating-point
            // precision drift when summing monetary values (e.g., $1999.99 +
            // $3999.99 + $120 should yield exactly $6119.98, not 6119.9799…)
            return Math.round(sum * 100) / 100;
        },
        getDeliveryFee: ()=>{
            // Free shipping — per Figma design: "Delivery Fee: $0"
            // and "Your cart qualifies for free shipping"
            return 0;
        },
        getDiscount: ()=>{
            const { isCouponApplied } = get();
            return isCouponApplied ? 0.30 : 0;
        },
        getTotal: ()=>{
            const subtotal = get().getSubtotal();
            const discount = get().getDiscount();
            const deliveryFee = get().getDeliveryFee();
            // Formula: total = subtotal × (1 - discount) + deliveryFee
            // Round to 2 decimal places to prevent floating-point precision issues
            const total = subtotal * (1 - discount) + deliveryFee;
            return Math.round(total * 100) / 100;
        }
    }), {
    name: 'cart-storage',
    /**
       * skipHydration prevents the persist middleware from auto-reading
       * localStorage during SSR (server-side rendering), which avoids
       * React hydration mismatches in Next.js App Router.
       *
       * Consumer components must call `useCartStore.persist.rehydrate()`
       * inside a client-side `useEffect` to restore persisted state:
       *
       * @example
       * ```tsx
       * useEffect(() => { useCartStore.persist.rehydrate(); }, []);
       * ```
       */ skipHydration: true
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
/**
 * QuantityStepper — Neumorphic quantity increment/decrement control.
 *
 * Renders a compact 79×30px stepper with:
 * - Left: dark "−" decrement button (no gradient)
 * - Center: quantity count display (Poppins 600, 13px, white)
 * - Right: gradient "+" increment button (linear-gradient 142deg, #34C8E8 → #4E4AF2)
 *
 * The container uses an inset neumorphic shadow to create a recessed appearance,
 * with 8px border-radius and overflow-hidden for corner clipping.
 *
 * Figma spec: within Cart Item rows (node 1:240), 79×30px, radius 8px,
 * shadow-stepper-inset: inset 2px 2px 4px rgba(30,37,49,1),
 *                       inset -2px -2px 4px rgba(39,48,65,1)
 */ const QuantityStepper = (param)=>{
    let { value, onIncrement, onDecrement } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center w-[79px] h-[30px] rounded-input overflow-hidden shadow-stepper-inset",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onDecrement,
                className: "flex items-center justify-center flex-1 h-full text-white/60 transition-colors bg-transparent",
                "aria-label": "Decrease quantity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "6",
                        y1: "12",
                        x2: "18",
                        y2: "12"
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white text-center select-none font-semibold text-[13px] leading-[1.5em] tracking-[-0.023em] min-w-[24px]",
                children: value
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onIncrement,
                className: "flex items-center justify-center flex-1 h-full text-white transition-colors bg-gradient-primary",
                "aria-label": "Increase quantity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    width: "12",
                    height: "12",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "6",
                            y1: "12",
                            x2: "18",
                            y2: "12"
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            y1: "6",
                            x2: "12",
                            y2: "18"
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = QuantityStepper;
const __TURBOPACK__default__export__ = QuantityStepper;
var _c;
__turbopack_context__.k.register(_c, "QuantityStepper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$QuantityStepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/cart/QuantityStepper.tsx [app-client] (ecmascript)");
;
;
;
/**
 * Formats a numeric price for display following Figma specifications.
 *
 * - Whole numbers display without decimals: 120 → "120"
 * - Fractional values display with 2 decimals: 1999.99 → "1,999.99"
 * - Commas are inserted as thousands separators
 *
 * @param price - Numeric price value from the Product interface
 * @returns Formatted price string without the "$" prefix
 */ function formatPrice(price) {
    const isWholeNumber = price % 1 === 0;
    return price.toLocaleString('en-US', {
        minimumFractionDigits: isWholeNumber ? 0 : 2,
        maximumFractionDigits: isWholeNumber ? 0 : 2
    });
}
/**
 * CartItem — Individual cart item row component.
 *
 * Renders a horizontal flex row containing:
 * - Left: Product image (100×90px, 10px border-radius, dark gradient background)
 * - Center: Text column with product name (Poppins 700 15px rgba(255,255,255,0.87))
 *   and price (Poppins 400 13px #3C9EEA)
 * - Right: QuantityStepper control for quantity adjustment
 *
 * Figma spec: Within Cart Items container (node 1:240), each row uses
 * horizontal flex layout with items-center alignment and 20px horizontal
 * padding matching the page's space-page-x token.
 *
 * This component does NOT use the 'use client' directive — it is rendered
 * within CartItemList which handles the client boundary.
 */ const CartItem = (param)=>{
    let { item, onIncrement, onDecrement } = param;
    var _item_product_cartName;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center px-5 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[100px] h-[90px] rounded-[10px] overflow-hidden bg-gradient-to-br from-[#353F54] to-[#222834] flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: item.product.image,
                    alt: item.product.name,
                    width: 100,
                    height: 90,
                    className: "object-contain w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col ml-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-[15px] leading-[1.5em] tracking-[-0.02em] text-text-semi",
                        children: (_item_product_cartName = item.product.cartName) !== null && _item_product_cartName !== void 0 ? _item_product_cartName : item.product.name
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-normal text-[13px] leading-[1.5em] text-[#3C9EEA]",
                        children: [
                            "$ ",
                            formatPrice(item.product.price)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$QuantityStepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: item.quantity,
                onIncrement: onIncrement,
                onDecrement: onDecrement
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CartItem;
const __TURBOPACK__default__export__ = CartItem;
var _c;
__turbopack_context__.k.register(_c, "CartItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/cart/CartItemList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartItemList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/cart-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$CartItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/cart/CartItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CartItemList() {
    _s();
    /* ─── Store Selectors ─── */ const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "CartItemList.useCartStore[items]": (state)=>state.items
    }["CartItemList.useCartStore[items]"]);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "CartItemList.useCartStore[updateQuantity]": (state)=>state.updateQuantity
    }["CartItemList.useCartStore[updateQuantity]"]);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "CartItemList.useCartStore[removeFromCart]": (state)=>state.removeFromCart
    }["CartItemList.useCartStore[removeFromCart]"]);
    /*
   * Guard: removeFromCart is accessed here per schema contract even though
   * the current CartItem UI does not expose a "remove" button. It remains
   * available for future integration (e.g., swipe-to-delete or a remove
   * icon) without requiring changes to this container component.
   */ void removeFromCart;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$CartItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: item,
                        onIncrement: ()=>updateQuantity(item.product.id, 1),
                        onDecrement: ()=>updateQuantity(item.product.id, -1)
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItemList.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    index < items.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-5",
                        style: {
                            height: '0.5px',
                            backgroundColor: 'rgba(255,255,255,0.5)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItemList.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this)
                ]
            }, item.product.id, true, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItemList.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CartItemList.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(CartItemList, "6BbjpEmjUruISybJ7fFgjMlr7eM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = CartItemList;
var _c;
__turbopack_context__.k.register(_c, "CartItemList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/cart/CouponInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CouponInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/cart-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CouponInput() {
    _s();
    /* Local state for the coupon code input — pre-filled with "Bike30" per Figma */ const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Bike30');
    /* Cart store action: validates code (case-insensitive "Bike30") and applies 30% discount */ const applyCoupon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "CouponInput.useCartStore[applyCoupon]": (state)=>state.applyCoupon
    }["CouponInput.useCartStore[applyCoupon]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center mx-5 h-[44px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: code,
                onChange: (e)=>setCode(e.target.value),
                placeholder: "Coupon Code",
                "aria-label": "Coupon code",
                className: "flex-1 min-w-0 h-full bg-bg-primary rounded-l-[8px] px-4 font-normal text-[13px] leading-[1.5em] tracking-[-0.0062em] text-text-muted placeholder:text-text-muted outline-none border-none shadow-coupon-inset"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/CouponInput.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>applyCoupon(code),
                className: "relative w-[114px] h-[44px] rounded-button bg-gradient-primary gradient-stroke-button font-bold text-[13px] leading-[1.5em] tracking-[-0.0062em] text-white flex-shrink-0 flex items-center justify-center",
                children: "Apply"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/CouponInput.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CouponInput.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(CouponInput, "EeX8B1lBlDQ/Nq4tet7InSzrKfI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = CouponInput;
var _c;
__turbopack_context__.k.register(_c, "CouponInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/cart-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * PriceSummary component displays the price breakdown section of the
 * Shopping Bag page with Subtotal, Delivery Fee, and Discount rows.
 *
 * Each row renders a left-aligned label and a right-aligned value using
 * flex layout with justify-between alignment. The container applies
 * 20px horizontal margin (mx-5) matching the page's consistent padding.
 *
 * @returns JSX element containing three price breakdown rows
 */ function PriceSummary() {
    _s();
    /**
   * Read computed price values from Zustand cart store via reactive selectors.
   *
   * Each selector calls the getter function INSIDE the selector so that
   * Zustand compares the returned numeric VALUE (not the function reference).
   * This ensures the component re-renders when underlying data changes
   * (e.g., after store rehydration or cart modifications).
   */ const subtotalValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "PriceSummary.useCartStore[subtotalValue]": (state)=>state.getSubtotal()
    }["PriceSummary.useCartStore[subtotalValue]"]);
    const deliveryFeeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "PriceSummary.useCartStore[deliveryFeeValue]": (state)=>state.getDeliveryFee()
    }["PriceSummary.useCartStore[deliveryFeeValue]"]);
    const discountValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "PriceSummary.useCartStore[discountValue]": (state)=>state.getDiscount()
    }["PriceSummary.useCartStore[discountValue]"]);
    /**
   * Format subtotal as "$" + number with 2 decimal places.
   * Matches Figma text "$6119.99" (no comma separator per design).
   */ const formattedSubtotal = "$".concat(subtotalValue.toFixed(2));
    /**
   * Format delivery fee as "$0" (not "$0.00").
   * Per Figma design and cart store logic, delivery is always free.
   */ const formattedDeliveryFee = "$".concat(deliveryFeeValue);
    /**
   * Format discount as a percentage string.
   * Returns "30%" when Bike30 coupon is applied, "0%" otherwise.
   */ const formattedDiscount = "".concat(Math.round(discountValue * 100), "%");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-5 space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-[15px] leading-[1.5em] text-text-semi",
                        children: "Subtotal:"
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-normal text-[15px] leading-[1.5em] text-text-muted",
                        children: formattedSubtotal
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-[15px] leading-[1.5em] text-text-semi",
                        children: "Delivery Fee:"
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-normal text-[15px] leading-[1.5em] text-text-muted",
                        children: formattedDeliveryFee
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-[15px] leading-[1.5em] text-text-semi",
                        children: "Discount:"
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-normal text-[15px] leading-[1.5em] text-text-muted",
                        children: formattedDiscount
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(PriceSummary, "Nj0SpBk6cZNjYEDsMBEeH16sopw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = PriceSummary;
const __TURBOPACK__default__export__ = PriceSummary;
var _c;
__turbopack_context__.k.register(_c, "PriceSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/cart/TotalDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TotalDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/cart-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function TotalDisplay() {
    _s();
    /**
   * Select the COMPUTED total value (number) from the Zustand cart store.
   *
   * CRITICAL: The selector calls `state.getTotal()` — invoking the getter
   * function inside the selector — so that Zustand receives the numeric
   * result and can detect changes via `Object.is()` comparison. Selecting
   * the function reference (`state.getTotal`) instead would return a stable
   * identity that never changes, preventing re-renders when only the coupon
   * or discount state changes (without an accompanying `items` mutation).
   */ const totalValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "TotalDisplay.useCartStore[totalValue]": (state)=>state.getTotal()
    }["TotalDisplay.useCartStore[totalValue]"]);
    /**
   * Format the computed total as a USD string with commas and 2 decimals.
   * Example: 4283.99 → "4,283.99"
   */ const formattedTotal = totalValue.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between mx-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-[15px] leading-[1.5em] text-text-semi",
                children: "Total:"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/TotalDisplay.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-[17px] leading-[1.5em] text-[#38B8EA]",
                children: [
                    "$",
                    formattedTotal
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/TotalDisplay.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/cart/TotalDisplay.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(TotalDisplay, "PTZ5kXGDpBfaa4kCq2EUrWOMrQM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = TotalDisplay;
var _c;
__turbopack_context__.k.register(_c, "TotalDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/cart/CheckoutSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
/* ── Layout constants (px) matching Figma node 1:233 ── */ const TRACK_WIDTH = 174;
const HANDLE_SIZE = 44;
const MAX_DRAG = TRACK_WIDTH - HANDLE_SIZE; // 130px maximum drag distance
const CHECKOUT_THRESHOLD = 0.8; // Trigger checkout at 80% drag
function CheckoutSlider(param) {
    let { onCheckout } = param;
    _s();
    /* ── State ── */ const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /**
   * Ref mirrors the latest dragOffset so the window-level event listeners
   * (attached once per gesture) always read the current value instead of a
   * stale closure capture.
   */ const dragOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    /**
   * Ref stores references to active window-level listeners so they can be
   * cleaned up on component unmount — prevents listener leaks if the user
   * navigates away mid-drag.
   */ const activeListenersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    /** Keep dragOffset ref in sync with state */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutSlider.useEffect": ()=>{
            dragOffsetRef.current = dragOffset;
        }
    }["CheckoutSlider.useEffect"], [
        dragOffset
    ]);
    /** Cleanup: remove any active window listeners on component unmount */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutSlider.useEffect": ()=>{
            const listenersRef = activeListenersRef;
            return ({
                "CheckoutSlider.useEffect": ()=>{
                    const listeners = listenersRef.current;
                    if (listeners.mousemove) window.removeEventListener('mousemove', listeners.mousemove);
                    if (listeners.mouseup) window.removeEventListener('mouseup', listeners.mouseup);
                    if (listeners.touchmove) window.removeEventListener('touchmove', listeners.touchmove);
                    if (listeners.touchend) window.removeEventListener('touchend', listeners.touchend);
                }
            })["CheckoutSlider.useEffect"];
        }
    }["CheckoutSlider.useEffect"], []);
    /**
   * Computed left-position of the handle.
   * Default (no drag): handle sits at MAX_DRAG (right end).
   * As the user drags left, dragOffset increases and handlePosition decreases.
   */ const handlePosition = Math.max(0, Math.min(MAX_DRAG, MAX_DRAG - dragOffset));
    /* ── Mouse drag handlers (desktop) ── */ const handleMouseDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckoutSlider.useCallback[handleMouseDragStart]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
            const startX = e.clientX;
            dragOffsetRef.current = 0;
            const onMouseMove = {
                "CheckoutSlider.useCallback[handleMouseDragStart].onMouseMove": (moveEvent)=>{
                    const delta = startX - moveEvent.clientX;
                    const clamped = Math.max(0, Math.min(MAX_DRAG, delta));
                    dragOffsetRef.current = clamped;
                    setDragOffset(clamped);
                }
            }["CheckoutSlider.useCallback[handleMouseDragStart].onMouseMove"];
            const onMouseUp = {
                "CheckoutSlider.useCallback[handleMouseDragStart].onMouseUp": ()=>{
                    setIsDragging(false);
                    if (dragOffsetRef.current > MAX_DRAG * CHECKOUT_THRESHOLD) {
                        onCheckout();
                    }
                    setDragOffset(0);
                    dragOffsetRef.current = 0;
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseup', onMouseUp);
                    activeListenersRef.current.mousemove = undefined;
                    activeListenersRef.current.mouseup = undefined;
                }
            }["CheckoutSlider.useCallback[handleMouseDragStart].onMouseUp"];
            /* Store listener references for unmount cleanup */ activeListenersRef.current.mousemove = onMouseMove;
            activeListenersRef.current.mouseup = onMouseUp;
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        }
    }["CheckoutSlider.useCallback[handleMouseDragStart]"], [
        onCheckout
    ]);
    /* ── Touch drag handlers (mobile) ── */ const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckoutSlider.useCallback[handleTouchStart]": (e)=>{
            const touch = e.touches[0];
            if (!touch) return;
            setIsDragging(true);
            const startX = touch.clientX;
            dragOffsetRef.current = 0;
            const onTouchMove = {
                "CheckoutSlider.useCallback[handleTouchStart].onTouchMove": (moveEvent)=>{
                    const currentTouch = moveEvent.touches[0];
                    if (!currentTouch) return;
                    const delta = startX - currentTouch.clientX;
                    const clamped = Math.max(0, Math.min(MAX_DRAG, delta));
                    dragOffsetRef.current = clamped;
                    setDragOffset(clamped);
                }
            }["CheckoutSlider.useCallback[handleTouchStart].onTouchMove"];
            const onTouchEnd = {
                "CheckoutSlider.useCallback[handleTouchStart].onTouchEnd": ()=>{
                    setIsDragging(false);
                    if (dragOffsetRef.current > MAX_DRAG * CHECKOUT_THRESHOLD) {
                        onCheckout();
                    }
                    setDragOffset(0);
                    dragOffsetRef.current = 0;
                    window.removeEventListener('touchmove', onTouchMove);
                    window.removeEventListener('touchend', onTouchEnd);
                    activeListenersRef.current.touchmove = undefined;
                    activeListenersRef.current.touchend = undefined;
                }
            }["CheckoutSlider.useCallback[handleTouchStart].onTouchEnd"];
            /* Store listener references for unmount cleanup */ activeListenersRef.current.touchmove = onTouchMove;
            activeListenersRef.current.touchend = onTouchEnd;
            window.addEventListener('touchmove', onTouchMove, {
                passive: true
            });
            window.addEventListener('touchend', onTouchEnd);
        }
    }["CheckoutSlider.useCallback[handleTouchStart]"], [
        onCheckout
    ]);
    /* ── Keyboard support (progressive enhancement) ── */ const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CheckoutSlider.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onCheckout();
            }
        }
    }["CheckoutSlider.useCallback[handleKeyDown]"], [
        onCheckout
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: trackRef,
        className: "relative w-[174px] h-[44px] rounded-button flex items-center overflow-hidden mx-auto shadow-checkout-inset",
        role: "slider",
        "aria-label": "Slide to checkout",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(dragOffset / MAX_DRAG * 100),
        tabIndex: 0,
        onKeyDown: handleKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 flex items-center justify-center font-medium text-[15px] leading-[1.5em] tracking-[-0.02em] pointer-events-none select-none text-text-muted",
                children: "Checkout"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/CheckoutSlider.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 w-[44px] h-[44px] rounded-button flex items-center justify-center text-white cursor-grab active:cursor-grabbing z-10 touch-none bg-gradient-primary",
                style: {
                    left: "".concat(handlePosition, "px"),
                    /* Spring-back: animate only when not actively dragging */ transition: isDragging ? 'none' : 'left 0.3s ease-out'
                },
                onMouseDown: handleMouseDragStart,
                onTouchStart: handleTouchStart,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    width: "16",
                    height: "16",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "9,6 15,12 9,18"
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CheckoutSlider.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/cart/CheckoutSlider.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/cart/CheckoutSlider.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/cart/CheckoutSlider.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(CheckoutSlider, "T8uKv0pZFNIYGYCFGLocdK3Hv/Y=");
_c = CheckoutSlider;
var _c;
__turbopack_context__.k.register(_c, "CheckoutSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/store/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Static product data and category definitions for the Online Bike Shopping App.
 *
 * All data in this file is hardcoded to match the Figma design screens exactly.
 * Product names, prices, categories, and image paths are derived directly from
 * the Figma specification. This is a pure data module with no runtime side effects.
 *
 * @module store/products
 */ __turbopack_context__.s([
    "categories",
    ()=>categories,
    "products",
    ()=>products
]);
const products = [
    {
        id: 'peugeot-lr01',
        name: 'PEUGEOT - LR01',
        cartName: 'PEUGEOT- LR01',
        category: 'Road Bike',
        price: 1999.99,
        image: '/images/bike-peugeot-lr01.png',
        description: 'The LR01 is designed for those who want to get into road cycling, on a limited budget. Equipped with an aluminum frame and a carbon fork, the LR01 uses the same frame as the LR01 but with Shimano Tiagra groupset and Mavic Aksium wheels.'
    },
    {
        id: 'pilot-chromoly',
        name: 'PILOT \u2013 CHROMOLY 520',
        category: 'Mountain Bike',
        price: 3999.99,
        image: '/images/bike-pilot-chromoly.png',
        description: 'The PILOT Chromoly 520 is a versatile mountain bike built with a durable chromoly steel frame. Designed for rugged trails and off-road adventures, it features premium suspension and reliable disc brakes for confident handling on any terrain.'
    },
    {
        id: 'smith-trade',
        name: 'SMITH \u2013 Trade',
        category: 'Road Helmet',
        price: 120,
        image: '/images/helmet-smith-trade.png',
        description: 'The SMITH Trade helmet combines safety with aerodynamic design. Featuring MIPS technology and generous ventilation, this helmet delivers superior protection and comfort for road cycling enthusiasts.'
    }
];
const categories = [
    {
        id: 'all',
        name: 'All',
        icon: 'category-all'
    },
    {
        id: 'electric',
        name: 'Electric',
        icon: 'category-electric'
    },
    {
        id: 'road',
        name: 'Road',
        icon: 'category-road'
    },
    {
        id: 'mountain',
        name: 'Mountain',
        icon: 'category-mountain'
    },
    {
        id: 'accessory',
        name: 'Accessory',
        icon: 'category-accessory'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/app/cart/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * CartPage — Shopping Bag page component (Route: `/cart`).
 *
 * Renders the complete shopping cart experience as a vertically-stacked
 * mobile layout within the 390×844 device frame. Composes 7 child
 * components and one inline free-shipping banner in this order:
 *
 * 1. StatusBar — Decorative iOS status bar
 * 2. PageHeader — Back button + "My Shopping Cart" title
 * 3. CartItemList — 3 cart items with quantity steppers and separators
 * 4. Free Shipping Banner — inline text message
 * 5. CouponInput — "Bike30" input + Apply button
 * 6. PriceSummary — Subtotal, Delivery Fee, Discount rows
 * 7. TotalDisplay — Computed total in accent blue
 * 8. CheckoutSlider — Slide-to-checkout control
 *
 * Cart state is managed via Zustand (`useCartStore`) with localStorage
 * persistence. On first mount, the cart is pre-populated with 3 demo
 * products and the "Bike30" coupon is pre-applied to match the Figma
 * design showing a 30% discount.
 *
 * Figma reference: Node 1:214, Shopping Bag screen
 * (File key: 6FWdXDJV3foFfDfOhmkORj)
 *
 * @module app/cart/page
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$CartItemList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/cart/CartItemList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$CouponInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/cart/CouponInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$PriceSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/cart/PriceSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$TotalDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/cart/TotalDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$CheckoutSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/cart/CheckoutSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/cart-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function CartPage() {
    _s();
    /* ─── Store Selectors ───
     Access cart store values via Zustand selector pattern.
     - `items`: Subscribes to cart item changes for reactive re-renders
     - `addToCart`: Called during mount-only initialization
     - `applyCoupon`: Called to pre-apply "Bike30" on first load */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "CartPage.useCartStore[items]": (state)=>state.items
    }["CartPage.useCartStore[items]"]);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "CartPage.useCartStore[addToCart]": (state)=>state.addToCart
    }["CartPage.useCartStore[addToCart]"]);
    const applyCoupon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "CartPage.useCartStore[applyCoupon]": (state)=>state.applyCoupon
    }["CartPage.useCartStore[applyCoupon]"]);
    /* ─── Cart Initialization & Store Rehydration ───
     On first mount:
     1. Rehydrate the Zustand persist store from localStorage.
        Required because cart-store uses `skipHydration: true` to
        prevent SSR hydration mismatches in Next.js App Router.
     2. After rehydration, check if the cart is empty. If so,
        populate with 3 demo products matching the Figma design
        and pre-apply the "Bike30" coupon for 30% discount.

     Uses `useCartStore.getState()` for the emptiness check to read
     the post-rehydration state accurately (closure-captured `items`
     would still hold the pre-rehydration value of `[]`). */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartPage.useEffect": ()=>{
            /* Step 1: Rehydrate persisted state from localStorage */ __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"].persist.rehydrate();
            /* Step 2: Initialize cart with demo products if still empty.
       Reads items via getState() for post-rehydration accuracy
       (closure-captured `items` still holds pre-rehydration []).
       Uses selector-derived addToCart/applyCoupon — these are stable
       function references that always operate on current store state. */ const currentItems = __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"].getState().items;
            if (currentItems.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].forEach({
                    "CartPage.useEffect": (product)=>addToCart(product)
                }["CartPage.useEffect"]);
                applyCoupon('Bike30');
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CartPage.useEffect"], []);
    /* ─── Checkout Handler ───
     Placeholder callback for the CheckoutSlider component.
     Per AAP Section 0.7.2: "Checkout flow beyond the slider" is
     explicitly out of scope. This handler demonstrates the
     interaction works without implementing actual checkout logic. */ const handleCheckout = ()=>{
        alert('Checkout initiated!');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex flex-col overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "My Shopping Cart",
                    showBack: true
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-9",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$CartItemList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 mx-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-normal text-[15px] leading-[1.5em] tracking-[-0.02em] text-text-muted",
                    children: "Your cart qualifies for free shipping"
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$CouponInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$PriceSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$TotalDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$cart$2f$CheckoutSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onCheckout: handleCheckout
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/app/cart/page.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(CartPage, "MHtKVHOxGVtofviAdlryAseJldU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = CartPage;
var _c;
__turbopack_context__.k.register(_c, "CartPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Online_Bike_Shopping_src_0b2b403b._.js.map