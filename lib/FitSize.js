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
function FitSize_calc(screenWidth,     // @arg Number - screen width
                      screenHeight,    // @arg Number - screen height
                      contentWidth,    // @arg Number - content width
                      contentHeight) { // @arg Number - content height
                                       // @ret Object - { width:UINT32, height:UINT32, ratio:Number }
//{@dev
    if (VERIFY) {
        $valid($type(screenWidth,   "Number"), FitSize_calc, "screenWidth");
        $valid($type(screenHeight,  "Number"), FitSize_calc, "screenHeight");
        $valid($type(contentWidth,  "Number"), FitSize_calc, "contentWidth");
        $valid($type(contentHeight, "Number"), FitSize_calc, "contentHeight");
    }
//}@dev

    if (VERBOSE) {
        if (contentWidth > screenWidth) {
            console.log("reduce width");
        } else if (contentWidth < screenWidth) {
            console.log("expand width");
        }
        if (contentHeight > screenHeight) {
            console.log("reduce height");
        } else if (contentHeight < screenHeight) {
            console.log("expand height");
        }
    }

    var r = screenWidth / contentWidth;
    var w = (contentWidth  * r) | 0;
    var h = (contentHeight * r) | 0;

    if (w <= screenWidth && h <= screenHeight) {
        return { "width": w, "height": h, "ratio": r };
    } else {
        r = screenHeight / contentHeight;
        w = (contentWidth  * r) | 0;
        h = (contentHeight * r) | 0;

        if (w <= screenWidth && h <= screenHeight) {
            return { "width": w, "height": h, "ratio": r };
        }
    }
    return { "width": 0, "height": 0, "ratio": 0 };
}

return FitSize; // return entity

});

