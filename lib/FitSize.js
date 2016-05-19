(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("FitSize", function moduleClosure(global, WebModule, VERIFY, VERBOSE) {
"use strict";

// --- technical terms / data structure --------------------
/*
    RatioObject:Object = {
        rario:  Number,
        width:  Number,
        height: Number,
    }
 */
// --- dependency modules ----------------------------------
// --- import / local extract functions --------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
var FitSize = {
    "calc":         FitSize_calc, // FitSize_calc(screenSize:Object, contentSize:Object):Object
    "repository":   "https://github.com/uupaa/FitSize.js",
};

// --- implements ------------------------------------------
function FitSize_calc(sw,   // @arg Number - screen width
                      sh,   // @arg Number - screen height
                      cw,   // @arg Number - content width
                      ch) { // @arg Number - content height
                            // @ret Object - { r:Number, w:Number, h:Number }
//{@dev
    if (VERIFY) {
        $valid($type(sw, "Number"), FitSize_calc, "sw");
        $valid($type(sh, "Number"), FitSize_calc, "sh");
        $valid($type(cw, "Number"), FitSize_calc, "cw");
        $valid($type(ch, "Number"), FitSize_calc, "ch");
    }
//}@dev

    if (VERBOSE) {
        if (cw > sw) {
            console.log("reduce width");
        } else if (cw < sw) {
            console.log("expand width");
        }
        if (ch > sh) {
            console.log("reduce height");
        } else if (ch < sh) {
            console.log("expand height");
        }
    }

    var ratio = sw / cw;
    var w = (cw * ratio) | 0;
    var h = (ch * ratio) | 0;

    if (w <= sw && h <= sh) {
        return { "r": ratio, "w": w, "h": h };
    } else {
        ratio = sh / ch;
        w = (cw * ratio) | 0;
        h = (ch * ratio) | 0;

        if (w <= sw && h <= sh) {
            return { "r": ratio, "w": w, "h": h };
        }
    }
    return { "r": 0, "w": 0, "h": 0 };
}

return FitSize; // return entity

});

