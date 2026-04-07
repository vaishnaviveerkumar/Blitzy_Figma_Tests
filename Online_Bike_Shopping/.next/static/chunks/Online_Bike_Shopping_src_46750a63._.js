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
"[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * TabBar — Bottom tab navigation bar for the Discover/Home screen.
 *
 * Renders 5 tab icons (Home, Map, Cart, Profile, Bookmark) in a horizontal
 * row at the bottom of the device frame. The active tab displays a
 * gradient-filled square background (#34C8E8 → #4E4AF2) with a white icon,
 * while inactive tabs show muted icons (rgba(255,255,255,0.4)).
 *
 * Features:
 * - Route-based active tab detection via usePathname()
 * - Cart badge indicator via useCartStore items count
 * - Next.js Link-based navigation for / and /cart routes
 * - Inline SVG icons matching the Figma IMAGE-SVG composite (node 1:150)
 *
 * Figma Specification:
 * - Node: 1:150 (IMAGE-SVG composite, 390×103.5)
 * - Position: absolute bottom of the 390×844 device frame (y:741)
 * - Active state: gradient bg square (gradient-primary-button), radius 10px
 * - Inactive state: muted white icon only, no background
 *
 * @module components/layout/TabBar
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/store/cart-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/* ────────────────────────────────────────────────────────────
   INLINE SVG ICON COMPONENTS
   Each icon uses viewBox 0 0 24 24, stroke currentColor,
   fill none, strokeWidth 1.5–2 for consistent visual weight.
   ──────────────────────────────────────────────────────────── */ /**
 * HomeIcon — Bicycle silhouette representing the Home/Discover tab.
 * Two wheels with frame, handlebars, and seat for a recognizable bicycle.
 */ function HomeIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "7",
                cy: "17",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17",
                cy: "17",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 17L12 7L17 17"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7L10 17"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7L16 10"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5 6.5L13.5 6.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = HomeIcon;
/**
 * MapIcon — Location/map pin icon representing the Map tab.
 * A pin shape with inner circle for classic map marker appearance.
 */ function MapIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 21C12 21 19 14.5 19 9.5C19 5.36 15.87 2 12 2C8.13 2 5 5.36 5 9.5C5 14.5 12 21 12 21Z"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "9.5",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c1 = MapIcon;
/**
 * CartIcon — Shopping cart icon representing the Cart/Shopping Bag tab.
 * Simple cart body with handle and two small wheels.
 */ function CartIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 6H21"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c2 = CartIcon;
/**
 * ProfileIcon — Person/user silhouette icon representing the Profile tab.
 * Head circle with body curve for standard user profile appearance.
 */ function ProfileIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c3 = ProfileIcon;
/**
 * BookmarkIcon — Bookmark/document icon representing the Bookmark tab.
 * Simple bookmark flag shape with bottom chevron.
 */ function BookmarkIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
        }, void 0, false, {
            fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c4 = BookmarkIcon;
/**
 * Static tab configuration array.
 * Only "/" and "/cart" are functional routes per AAP scope.
 * Map, Profile, and Bookmark use "#" as placeholder hrefs.
 */ const TABS = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon,
        matchPath: '/'
    },
    {
        name: 'Map',
        href: '#',
        icon: MapIcon,
        matchPath: '/map'
    },
    {
        name: 'Cart',
        href: '/cart',
        icon: CartIcon,
        matchPath: '/cart'
    },
    {
        name: 'Profile',
        href: '#',
        icon: ProfileIcon,
        matchPath: '/profile'
    },
    {
        name: 'Bookmark',
        href: '#',
        icon: BookmarkIcon,
        matchPath: '/bookmarks'
    }
];
function TabBar(param) {
    let { activeTab, onTabChange } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "TabBar.useCartStore[cartItems]": (state)=>state.items
    }["TabBar.useCartStore[cartItems]"]);
    /* Rehydrate Zustand persisted state on mount (SSR-safe) */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabBar.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"].persist.rehydrate();
        }
    }["TabBar.useEffect"], []);
    /**
   * Determine which tab index is active.
   * Priority: explicit activeTab prop > route-based auto-detection.
   * Defaults to 0 (Home) if no match is found.
   */ const resolvedActiveTab = activeTab !== undefined ? activeTab : pathname === '/cart' ? 2 : pathname === '/' || pathname === '' ? 0 : 0;
    /** Cart item count for badge display */ const cartCount = cartItems.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "absolute bottom-0 left-0 right-0 flex h-[103px] items-center justify-around pb-[24px] pt-[16px]",
        "aria-label": "Main navigation",
        children: TABS.map((tab, index)=>{
            const isActive = resolvedActiveTab === index;
            const IconComponent = tab.icon;
            const isCartTab = index === 2;
            /**
         * Shared inner content for both linked and non-linked tabs.
         * Contains the gradient background (active state), icon, and
         * optional cart badge. This is NOT a focusable element — the
         * outer Link or button handles focus and interaction.
         */ const tabInner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 rounded-[10px] bg-gradient-primary shadow-[0px_4px_12px_rgba(52,200,232,0.3)]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                        lineNumber: 268,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10 flex items-center justify-center transition-colors duration-200 ease-out ".concat(isActive ? 'text-white' : 'text-white/40'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                            lineNumber: 280,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                        lineNumber: 275,
                        columnNumber: 13
                    }, this),
                    isCartTab && cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-[-2px] right-[-2px] z-20 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary text-[9px] font-bold leading-none text-white",
                        "aria-label": "".concat(cartCount, " items in cart"),
                        children: cartCount > 9 ? '9+' : cartCount
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                        lineNumber: 285,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true);
            /* Functional routes (Home, Cart): use a single <Link> element —
         * no nested <button> to avoid duplicate focusable elements.
         * The <Link> renders as <a>, which is the sole tab stop. */ if (tab.href !== '#') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: tab.href,
                    className: "relative flex h-[44px] w-[44px] cursor-pointer flex-col items-center justify-center no-underline",
                    "aria-label": tab.name,
                    "aria-current": isActive ? 'page' : undefined,
                    onClick: ()=>onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(index),
                    children: tabInner
                }, tab.name, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                    lineNumber: 300,
                    columnNumber: 13
                }, this);
            }
            /* Placeholder routes (Map, Profile, Bookmark): use a single <button>
         * wrapped in a non-focusable <div> — one tab stop per item. */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "relative flex h-[44px] w-[44px] cursor-pointer flex-col items-center justify-center",
                    onClick: ()=>onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(index),
                    "aria-label": tab.name,
                    "aria-current": isActive ? 'page' : undefined,
                    children: tabInner
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                    lineNumber: 320,
                    columnNumber: 13
                }, this)
            }, tab.name, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
                lineNumber: 316,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
_s(TabBar, "ICv+VZggiOCwvmHwy5w+6oWY2ZU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c5 = TabBar;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "HomeIcon");
__turbopack_context__.k.register(_c1, "MapIcon");
__turbopack_context__.k.register(_c2, "CartIcon");
__turbopack_context__.k.register(_c3, "ProfileIcon");
__turbopack_context__.k.register(_c4, "BookmarkIcon");
__turbopack_context__.k.register(_c5, "TabBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/discover/TopCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function TopCard(param) {
    let { discount = '30% Off', image = '/images/bike-electric-promo.png' } = param;
    return(/* Outer wrapper — positions the card with 20px horizontal margin (mx-auto
       centers the 350px card within the 390px device frame, creating 20px
       margin on each side matching the space-page-x token). */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto w-[350px] h-[240px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full rounded-card overflow-hidden bg-gradient-card-dark blur-topcard shadow-card gradient-stroke-card",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute",
                        style: {
                            top: 0,
                            bottom: 0,
                            left: 50,
                            right: -30
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: image,
                            alt: "Electric bicycle promotion",
                            fill: true,
                            className: "object-cover",
                            style: {
                                objectPosition: '50% 55%'
                            },
                            sizes: "350px",
                            priority: true,
                            fetchPriority: "high",
                            loading: "eager"
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/components/discover/TopCard.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/discover/TopCard.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "absolute bottom-[20px] left-[20px] z-10 m-0 p-0 text-[26px] font-bold leading-[1.5em] tracking-normal text-text-muted",
                        children: discount
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/discover/TopCard.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/TopCard.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Online_Bike_Shopping/src/components/discover/TopCard.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/TopCard.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this));
}
_c = TopCard;
var _c;
__turbopack_context__.k.register(_c, "TopCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
/**
 * Inline SVG icon components for each product category.
 *
 * These replicate the downloaded Figma assets in src/assets/icons/category-*.svg
 * and use currentColor for dynamic color theming — white (#FFFFFF) when active,
 * muted (rgba(255,255,255,0.6)) when inactive. Inline SVGs avoid the need
 * for SVGR configuration or serving from public/.
 */ const categoryIcons = {
    'category-all': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6.5",
                cy: "17",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "17",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "6.5,17 10,9 17.5,17"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "9",
                x2: "15",
                y2: "9"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "9",
                x2: "17.5",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "9",
                x2: "17",
                y2: "7"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "8",
                x2: "11",
                y2: "8"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "9",
                x2: "10",
                y2: "8"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    'category-electric': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "7",
                y1: "16",
                x2: "17",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "18",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "18",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17",
                y1: "16",
                x2: "19",
                y2: "8"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17.5",
                y1: "8",
                x2: "20.5",
                y2: "8"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "11,6 9,11 12,11 10,15"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    'category-road': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 14c0-5 3.5-8 8-8s8 3 8 8"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 14c0 1.5 1 3 3 3h10c2 0 3-1.5 3-3"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "10",
                x2: "9.5",
                y2: "8"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "11",
                y1: "9",
                x2: "12",
                y2: "7"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14",
                y1: "9",
                x2: "15",
                y2: "7.5"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    'category-mountain': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "2,20 9,6 16,20"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "12,20 17,10 22,20"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "7,10 9,6 11,10"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    'category-accessory': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 3l-2 2c-1 1-1 2.5 0 3.5l1 1c1 1 2.5 1 3.5 0l2-2"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "8",
                x2: "16",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "18",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "18",
                r: "1.2"
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function CategoryItem(param) {
    let { category, isActive, onClick } = param;
    var _categoryIcons_category_icon;
    /* Resolve the inline SVG icon from the category.icon identifier */ const icon = (_categoryIcons_category_icon = categoryIcons[category.icon]) !== null && _categoryIcons_category_icon !== void 0 ? _categoryIcons_category_icon : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-label": category.name,
        "aria-pressed": isActive,
        className: [
            /* Common properties — both states */ 'w-[50px] h-[50px] shrink-0',
            'rounded-[10px]',
            'flex items-center justify-center',
            'cursor-pointer',
            /* Accessible focus indicator — visible ring on keyboard navigation */ 'focus-visible:ring-2 focus-visible:ring-[#34C8E8] focus-visible:outline-none',
            /* Active state: gradient fill, white icon, no stroke */ isActive && 'bg-gradient-primary text-white',
            /* Inactive state: dark fill, gradient stroke, muted icon, blur */ !isActive && [
                'bg-gradient-card-darker',
                'gradient-stroke-category',
                'blur-category',
                'text-white/60'
            ]
        ].flat().filter(Boolean).join(' '),
        children: icon
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c = CategoryItem;
var _c;
__turbopack_context__.k.register(_c, "CategoryItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/discover/CategoryFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$CategoryItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/discover/CategoryItem.tsx [app-client] (ecmascript)");
'use client';
;
;
function CategoryFilter(param) {
    let { categories, activeCategory, onCategoryChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row items-center gap-[14px] px-5 overflow-x-auto flex-nowrap",
        role: "toolbar",
        "aria-label": "Product categories",
        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$CategoryItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                category: category,
                isActive: category.id === activeCategory,
                onClick: ()=>onCategoryChange(category.id)
            }, category.id, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryFilter.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/CategoryFilter.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = CategoryFilter;
var _c;
__turbopack_context__.k.register(_c, "CategoryFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ProductCard — Individual product card for the Discover page grid.
 *
 * Renders a neumorphic dark card with:
 * - Gradient fill (159deg, #353F54 → #222834)
 * - 2px gradient stroke via mask-composite (115deg, #FFF → #000)
 * - Dual neumorphic box-shadow for floating effect
 * - Backdrop-filter blur(40px) for frosted glass depth
 * - Heart outline icon (decorative, top-right)
 * - Product image centered (Next.js optimized <Image>)
 * - Category label, product name, and formatted price
 *
 * The entire card is wrapped in a Next.js <Link> for navigation
 * to the product detail page at /product/[id].
 *
 * Design tokens from globals.css:
 * - bg-gradient-card-dark, gradient-stroke-card, shadow-card, blur-card
 *
 * @module components/discover/ProductCard
 */ __turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
/**
 * Formats a numeric price into a display string with dollar sign and commas.
 *
 * Handles both decimal prices (1999.99 → "$ 1,999.99") and whole number
 * prices (120 → "$ 120") to match Figma text content exactly.
 *
 * Uses string manipulation instead of toLocaleString for deterministic
 * SSR/client output consistency.
 *
 * @param price - Numeric price value from the Product interface
 * @returns Formatted price string with dollar sign, space, and comma separators
 */ function formatPrice(price) {
    const parts = price.toString().split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const decimalPart = parts[1] ? ".".concat(parts[1]) : '';
    return "$ ".concat(integerPart).concat(decimalPart);
}
function ProductCard(param) {
    let { product } = param;
    const formattedPrice = formatPrice(product.price);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/product/".concat(product.id),
        className: "block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-[20px] bg-gradient-card-dark gradient-stroke-card shadow-card blur-card overflow-hidden p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-3 right-3 z-10 text-white",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-[140px] flex items-center justify-center my-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: product.image,
                        alt: product.name,
                        fill: true,
                        sizes: "140px",
                        className: "object-contain"
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] font-medium leading-[1.5em] text-white/60",
                    children: product.category
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[15px] font-bold leading-[1.5em] text-white tracking-[-0.02em]",
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] font-medium leading-[1.5em] text-white/60",
                    children: formattedPrice
                }, void 0, false, {
                    fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ProductGrid — 2-Column Staggered/Masonry Product Card Grid
 *
 * Renders a Pinterest-style masonry layout with two columns of ProductCard
 * components. Products are distributed by alternating indices (even → left,
 * odd → right), with the right column offset by 20px to create the visual
 * stagger effect matching the Figma design (Node 1:71).
 *
 * Layout specifications from Figma Phase 2 Reconciliation:
 * - Horizontal padding: 20px each side (token: space-page-x → px-5)
 * - Column gap: ~14px between left and right columns
 * - Row gap: ~14px between cards within the same column
 * - Stagger offset: ~20px top padding on right column
 * - Usable width: 350px (390px device − 40px padding)
 * - Each column: ~168px (flex: 1 shares remaining space equally)
 *
 * This is a server component — no client-side interactivity required.
 * Each ProductCard internally handles its own Link navigation.
 *
 * @module components/discover/ProductGrid
 */ __turbopack_context__.s([
    "default",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/discover/ProductCard.tsx [app-client] (ecmascript)");
;
;
function ProductGrid(param) {
    let { products } = param;
    /* Empty state: show a user-friendly message when no products match the
     active category filter. Styled to match the dark theme with muted text
     (Poppins 400 15px rgba(255,255,255,0.6)) and centered within the grid area. */ if (products.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center px-5 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[15px] font-normal leading-[1.5em] tracking-[-0.02em] text-white/60 text-center",
                children: "No products found in this category."
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    /* Split products into two columns by index parity.
     Even indices (0, 2, 4…) → left column
     Odd indices  (1, 3, 5…) → right column
     This matches the Figma arrangement:
       Left:  PEUGEOT LR01 (0), SMITH Trade (2), Items 5 (4)
       Right: PILOT Chromoly (1), Items 9 (3), Items 6 (5) */ const leftColumn = products.filter((_, index)=>index % 2 === 0);
    const rightColumn = products.filter((_, index)=>index % 2 !== 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-[14px] px-5 justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-[165px] flex-col gap-[14px]",
                children: leftColumn.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-[165px] flex-col gap-[14px] pt-[20px]",
                children: rightColumn.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c = ProductGrid;
var _c;
__turbopack_context__.k.register(_c, "ProductGrid");
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
"[project]/Online_Bike_Shopping/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiscoverPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * DiscoverPage — Home/Browse screen for the Online Bike Shopping App.
 *
 * Route: `/` (root route via Next.js 15 App Router)
 *
 * This is the primary landing page where users browse products by category
 * and view a staggered product grid. It composes the following child
 * components in a vertical stack within the 390×844 device frame:
 *
 *   1. StatusBar — Decorative iOS status bar ("9:41", signal, wifi, battery)
 *   2. PageHeader — "Choose Your Bike" title + gradient search button
 *   3. TopCard — Promotional "30% Off" banner card (350×240)
 *   4. CategoryFilter — 5 category icon buttons (All active by default)
 *   5. ProductGrid — 2-column staggered/masonry product card grid
 *   6. TabBar — Bottom tab navigation (5 tabs, home active)
 *
 * State management:
 * - Local `useState` for the active category filter (default: 'all')
 * - Category changes trigger filtered product re-rendering in ProductGrid
 *
 * Navigation:
 * - ProductCard click → `/product/[id]` (handled by ProductCard's Link)
 * - Cart tab → `/cart` (handled by TabBar's Link)
 *
 * Figma reference: Discover screen (Node 1:42, file key: 6FWdXDJV3foFfDfOhmkORj)
 * Background: #242C3B (handled by DeviceFrame in layout.tsx)
 *
 * @module app/page
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/layout/StatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/layout/PageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$TabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/layout/TabBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$TopCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/discover/TopCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$CategoryFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/discover/CategoryFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Online_Bike_Shopping/src/components/discover/ProductGrid.tsx [app-client] (ecmascript)");
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
function DiscoverPage() {
    _s();
    /**
   * Active category filter state.
   * Default: 'all' — shows all products in the grid.
   * Updated via the onCategoryChange callback in CategoryFilter.
   * Possible values: 'all', 'electric', 'road', 'mountain', 'accessory'
   */ const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    /**
   * Filtered products array based on the active category selection.
   *
   * Filtering strategy maps category IDs to product category strings:
   * - 'all' → shows all products (no filter)
   * - 'road' → matches "Road Bike" and "Road Helmet" (includes "Road")
   * - 'mountain' → matches "Mountain Bike" (includes "Mountain")
   * - 'electric' → matches "Electric" in category (none in current data)
   * - 'accessory' → matches "Helmet" or "Accessory" products
   *
   * The matching is case-insensitive using .toLowerCase().includes().
   * The 'accessory' category receives special handling to match helmet
   * products which are classified as "Road Helmet" rather than "Accessory".
   */ const filteredProducts = activeCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"] : __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>{
        const cat = p.category.toLowerCase();
        if (activeCategory === 'accessory') {
            return cat.includes('helmet') || cat.includes('accessory');
        }
        return cat.includes(activeCategory.toLowerCase());
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto pb-[104px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Choose Your Bike",
                            showSearch: true
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$TopCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$CategoryFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            categories: __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$store$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"],
                            activeCategory: activeCategory,
                            onCategoryChange: setActiveCategory
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$discover$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            products: filteredProducts
                        }, void 0, false, {
                            fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Online_Bike_Shopping$2f$src$2f$components$2f$layout$2f$TabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Online_Bike_Shopping/src/app/page.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(DiscoverPage, "6G/IZZcG35VdKTOY4C3Tu2p+J9k=");
_c = DiscoverPage;
var _c;
__turbopack_context__.k.register(_c, "DiscoverPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Online_Bike_Shopping_src_46750a63._.js.map