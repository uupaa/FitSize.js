var ModuleTestFitSize = (function(global) {

var test = new Test(["FitSize"], { // Add the ModuleName to be tested here (if necessary).
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        el:         true,  // enable electron (render process) test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
            console.error(error.message);
        }
    });

test.add([
    testFitSize_calc,
]);

// --- test cases ------------------------------------------
function testFitSize_calc(test, pass, miss) {
    var result = {
            0: _match(FitSize.calc( 500,  600,  350,  400), { ratio: 1.428, width: 500, height: 571 }),
            1: _match(FitSize.calc( 500,  500,  320,  480), { ratio: 1.04,  width: 333, height: 500 }),
            2: _match(FitSize.calc( 360,  480,  320,  480), { ratio: 1.0,   width: 320, height: 480 }),
            3: _match(FitSize.calc( 320,  480,  320,  480), { ratio: 1.0,   width: 320, height: 480 }),
            4: _match(FitSize.calc(1920, 1080,  320,  480), { ratio: 2.25,  width: 720, height: 1080 }),
            5: _match(FitSize.calc( 320,  480, 1920, 1080), { ratio: 0.17,  width: 320, height: 180 }),
        };

    if ( /false/.test(JSON.stringify(result)) ) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function _match(a, b) {
    console.log(a, b);
    if (a.ratio.toFixed(2) === b.ratio.toFixed(2)) {
        if (a.width.toFixed(2) === b.width.toFixed(2)) {
            if (a.height.toFixed(2) === b.height.toFixed(2)) {
                return true;
            }
        }
    }
    return false;
}

return test.run();

})(GLOBAL);

