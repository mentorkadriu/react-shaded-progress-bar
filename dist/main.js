require("./main.css");
var $33DU5$reactjsxruntime = require("react/jsx-runtime");
var $33DU5$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "ShadedProgressBar", () => $4938cc75a9161e87$export$2e2bcd8739ae039);



function $4938cc75a9161e87$export$2e2bcd8739ae039({ value: value = 50 , variant: variant = "default" , color: color = "orange" , onChange: onChange  }) {
    (0, ($parcel$interopDefault($33DU5$react))).useEffect(()=>{
        if (onChange) onChange(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
        className: "progress-factor flexy-item",
        children: /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
            className: "progress-bar",
            children: /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsxs)("div", {
                className: `bar has-rotation has-colors ${color} ${variant}`,
                role: "progressbar",
                "aria-valuenow": value,
                "aria-valuemin": 1,
                "aria-valuemax": 100,
                children: [
                    /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
                        className: "tooltip white"
                    }),
                    /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
                        className: "bar-face face-position roof percentage"
                    }),
                    /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
                        className: "bar-face face-position back percentage"
                    }),
                    /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
                        className: "bar-face face-position floor percentage volume-lights"
                    }),
                    /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
                        className: "bar-face face-position left"
                    }),
                    /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
                        className: "bar-face face-position right"
                    }),
                    /*#__PURE__*/ (0, $33DU5$reactjsxruntime.jsx)("div", {
                        className: "bar-face face-position front percentage volume-lights shine"
                    })
                ]
            })
        })
    });
}




