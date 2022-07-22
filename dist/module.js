import "./main.css";
import {jsx as $jG4vO$jsx, jsxs as $jG4vO$jsxs} from "react/jsx-runtime";
import $jG4vO$react from "react";




function $e86c83e5ae94960b$export$2e2bcd8739ae039({ value: value = 50 , variant: variant = "default" , color: color = "orange" , onChange: onChange  }) {
    (0, $jG4vO$react).useEffect(()=>{
        if (onChange) onChange(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
        className: "progress-factor flexy-item",
        children: /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
            className: "progress-bar",
            children: /*#__PURE__*/ (0, $jG4vO$jsxs)("div", {
                className: `bar has-rotation has-colors ${color} ${variant}`,
                role: "progressbar",
                "aria-valuenow": value,
                "aria-valuemin": 1,
                "aria-valuemax": 100,
                children: [
                    /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
                        className: "tooltip white"
                    }),
                    /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
                        className: "bar-face face-position roof percentage"
                    }),
                    /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
                        className: "bar-face face-position back percentage"
                    }),
                    /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
                        className: "bar-face face-position floor percentage volume-lights"
                    }),
                    /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
                        className: "bar-face face-position left"
                    }),
                    /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
                        className: "bar-face face-position right"
                    }),
                    /*#__PURE__*/ (0, $jG4vO$jsx)("div", {
                        className: "bar-face face-position front percentage volume-lights shine"
                    })
                ]
            })
        })
    });
}




export {$e86c83e5ae94960b$export$2e2bcd8739ae039 as ShadedProgressBar};
