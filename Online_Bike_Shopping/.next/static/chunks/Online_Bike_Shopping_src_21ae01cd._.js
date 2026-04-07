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
"[project]/Online_Bike_Shopping/src/components/detail/ProductImageHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductImageHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
function ProductImageHero(param) {
    let { image, name } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[394px] flex items-center justify-center overflow-hidden bg-bg-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: 'linear-gradient(150deg, rgba(55, 182, 233, 0.3) 1%, rgba(75, 76, 237, 0.3) 91%)'
                }
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/detail/ProductImageHero.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: name,
                width: 288,
                height: 222,
                className: "object-contain relative z-10",
                style: {
                    width: '288px',
                    height: '222px'
                },
                priority: true,
                fetchPriority: "high",
                loading: "eager"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/detail/ProductImageHero.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/detail/ProductImageHero.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = ProductImageHero;
var _c;
__turbopack_context__.k.register(_c, "ProductImageHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/detail/PaginationDots.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaginationDots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function PaginationDots(param) {
    let { total, active } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-2",
        role: "tablist",
        "aria-label": "Image pagination",
        children: Array.from({
            length: total
        }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block w-2 h-2 rounded-full".concat(index === active ? ' bg-white' : ' bg-white/30'),
                role: "tab",
                "aria-selected": index === active,
                "aria-label": "Image ".concat(index + 1, " of ").concat(total)
            }, index, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/detail/PaginationDots.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/detail/PaginationDots.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = PaginationDots;
var _c;
__turbopack_context__.k.register(_c, "PaginationDots");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/detail/BottomSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BottomSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function BottomSheet(param) {
    let { children } = param;
    return(/* Sheet container:
     * - bg-gradient-sheet: linear-gradient(145deg, #353F54 0%, #222834 61%)
     * - shadow-sheet: 0px -20px 60px rgba(0,0,0,0.25) upward shadow
     * - gradient-stroke-sheet: 2px top-edge stroke via ::before pseudo-element
     *   using var(--stroke-sheet-top) = linear-gradient(181deg, #FFF 0%, transparent 14%)
     *   Full-opacity #FFF per AAP Token Manifest (AAP Rule #1)
     *   Pseudo-element technique per AAP Rule #2
     * - rounded-t-[30px]: 30px radius on top corners only (radius-sheet)
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full h-[450px] rounded-t-[30px] pt-6 overflow-hidden bg-gradient-sheet shadow-sheet gradient-stroke-sheet",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5",
            children: children
        }, void 0, false, {
            fileName: "[project]/Online_Bike_Shopping/src/components/detail/BottomSheet.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/detail/BottomSheet.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this));
}
_c = BottomSheet;
var _c;
__turbopack_context__.k.register(_c, "BottomSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/detail/TabToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TabToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function TabToggle(param) {
    let { activeTab, onTabChange, tabs } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2.5 px-5",
        role: "tablist",
        "aria-label": "Content tabs",
        children: tabs.map((tab)=>{
            const isActive = activeTab.toLowerCase() === tab.toLowerCase();
            return(/* Tab button:
           * - Active: bg-tab-active (#323B4F) + shadow-neumorphic-outset (raised)
           * - Inactive: bg-tab-inactive (#28303F) + shadow-neumorphic-inset (recessed)
           * - rounded-button: 10px radius from design token
           * Padding: py-3 px-6 = 12px 24px
           */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                role: "tab",
                "aria-selected": isActive,
                "aria-controls": "tabpanel-".concat(tab.toLowerCase()),
                onClick: ()=>onTabChange(tab.toLowerCase()),
                className: "flex-1 rounded-button cursor-pointer border-none py-3 px-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3CA4EB] motion-safe:transition-[background-color,box-shadow] motion-safe:duration-200 motion-safe:ease-out ".concat(isActive ? 'bg-tab-active shadow-neumorphic-outset' : 'bg-tab-inactive shadow-neumorphic-inset'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[15px] leading-[1.5em] tracking-[-0.02em] ".concat(isActive ? 'font-bold text-gradient-tab' : 'font-normal text-text-muted'),
                    children: tab
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/detail/TabToggle.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, this)
            }, tab, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/detail/TabToggle.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, this));
        })
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/detail/TabToggle.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = TabToggle;
var _c;
__turbopack_context__.k.register(_c, "TabToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/detail/ProductDescription.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ProductDescription(param) {
    let { name, description } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[17px] font-bold leading-[1.5em] tracking-[-0.0176em] text-white",
                children: name
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/detail/ProductDescription.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[15px] font-normal leading-[1.5em] tracking-[-0.02em] text-white/60 max-w-[335px]",
                children: description
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/detail/ProductDescription.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/detail/ProductDescription.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = ProductDescription;
var _c;
__turbopack_context__.k.register(_c, "ProductDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/detail/BuyNowBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuyNowBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
/* ------------------------------------------------------------------ */ /*  Helpers                                                            */ /* ------------------------------------------------------------------ */ /**
 * Formats a numeric price into the display string shown in the Figma design.
 *
 * Handles both decimal prices and whole numbers to match Figma text exactly:
 *   1999.99  → "$ 1,999.99"
 *   3999.99  → "$ 3,999.99"
 *   120      → "$ 120"       (no trailing zeros for whole numbers)
 *
 * Uses string manipulation for deterministic SSR/client output consistency,
 * matching the same formatting logic used in ProductCard.tsx.
 */ function formatPrice(value) {
    const parts = value.toString().split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const decimalPart = parts[1] ? ".".concat(parts[1]) : '';
    return "$ ".concat(integerPart).concat(decimalPart);
}
function BuyNowBar(param) {
    let { price, onAddToCart } = param;
    return(/* Bar container:
     * - bg-surface-sheet: #262E3D fill
     * - rounded-device: 50px pill radius
     * - shadow-buynow: 0px -10px 40px rgba(28,34,46,1) upward shadow
     * - gradient-stroke-buynow: 2px stroke via ::before pseudo-element
     *   using var(--stroke-buynow) = linear-gradient(180deg, #FFF 0%, #000 69%)
     *   with mask-composite technique (AAP Rule #2)
     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[104px] rounded-device flex items-center justify-between px-5 z-30 bg-surface-sheet shadow-buynow gradient-stroke-buynow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10 text-[24px] font-normal leading-[1.5em] tracking-[-0.0125em] text-accent-blue-1",
                children: formatPrice(price)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/detail/BuyNowBar.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onAddToCart,
                className: "relative z-10 w-[160px] h-[44px] rounded-button text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-white cursor-pointer bg-gradient-primary shadow-cta gradient-stroke-button-bold",
                children: "Add to Cart"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/detail/BuyNowBar.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/detail/BuyNowBar.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this));
}
_c = BuyNowBar;
var _c;
__turbopack_context__.k.register(_c, "BuyNowBar");
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
"[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$ProductImageHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/detail/ProductImageHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$PaginationDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/detail/PaginationDots.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/detail/BottomSheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$TabToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/detail/TabToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$ProductDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/detail/ProductDescription.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$BuyNowBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/detail/BuyNowBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/cart-store.ts [app-client] (ecmascript)");
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
;
;
function ProductDetailPage() {
    _s();
    /* ──────────────────────────────────────────────────────────────────
     HOOKS — called unconditionally before any conditional logic
     (React Rules of Hooks compliance)
     ────────────────────────────────────────────────────────────── */ /** Dynamic route parameter — reads the [id] URL segment */ const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    /** Local tab toggle state — default to 'description' (Figma node 1:188 active) */ const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('description');
    /** Cart store addToCart action via selector (Zustand best practice) */ const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "ProductDetailPage.useCartStore[addToCart]": (state)=>state.addToCart
    }["ProductDetailPage.useCartStore[addToCart]"]);
    /**
   * Rehydrate cart store from localStorage on mount.
   * Required because cart-store uses skipHydration: true to prevent
   * React hydration mismatches during SSR in Next.js App Router.
   * Without this, persisted cart items would not be restored.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailPage.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"].persist.rehydrate();
        }
    }["ProductDetailPage.useEffect"], []);
    /* ──────────────────────────────────────────────────────────────────
     PRODUCT LOOKUP — from static data using URL parameter
     ────────────────────────────────────────────────────────────── */ /** Extract the product ID from the URL parameters */ const id = params.id;
    /** Find the matching product from the static catalog */ const product = __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>p.id === id);
    /**
   * Handle invalid product IDs — triggers Next.js built-in 404 page.
   * notFound() returns `never`, so TypeScript narrows `product` to
   * `Product` (non-undefined) after this guard.
   */ if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    /* ──────────────────────────────────────────────────────────────────
     CALLBACKS
     ────────────────────────────────────────────────────────────── */ /**
   * Handles the "Add to Cart" button tap in BuyNowBar.
   * Adds the full product object to the Zustand cart store.
   * If the product already exists in the cart, the store increments
   * its quantity by 1. If new, it creates a CartItem with quantity 1.
   */ const handleAddToCart = ()=>{
        addToCart(product);
    };
    /* ──────────────────────────────────────────────────────────────────
     RENDER — Detail screen layout matching Figma node 1:180
     ────────────────────────────────────────────────────────────── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full overflow-hidden bg-bg-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$ProductImageHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    image: product.image,
                    name: product.name
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: product.name,
                        showBack: true
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 z-10",
                style: {
                    top: '360px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$PaginationDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    total: 3,
                    active: 0
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$BottomSheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$TabToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            activeTab: activeTab,
                            onTabChange: setActiveTab,
                            tabs: [
                                'Description',
                                'Specification'
                            ]
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        activeTab === 'description' ? /* Description tab content (DEFAULT — shown in Figma)
             * Figma node 1:199: title + body paragraph */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "tabpanel",
                            id: "tabpanel-description",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$ProductDescription$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: product.name,
                                description: product.description
                            }, void 0, false, {
                                fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this) : /* Specification tab content (PLACEHOLDER)
             * Per AAP §0.7.2: "the Specification tab can be left as a
             * placeholder" — only the Description tab has content in Figma.
             * Typography matches text-body token: Poppins 400 15px
             * rgba(255,255,255,0.6), letter-spacing -2%, 20px padding. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5",
                            role: "tabpanel",
                            id: "tabpanel-specification",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] font-normal leading-[1.5em] tracking-[-0.02em] text-white/60",
                                children: "Specifications coming soon."
                            }, void 0, false, {
                                fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$detail$2f$BuyNowBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    price: product.price,
                    onAddToCart: handleAddToCart
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/app/product/[id]/page.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(ProductDetailPage, "2FMobCCrqde24/DctO3qq/hwq9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = ProductDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Online_Bike_Shopping_src_21ae01cd._.js.map