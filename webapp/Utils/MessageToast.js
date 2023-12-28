sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    "use strict";

    return {
        show: function (text,duration) {            
            return new Promise(function (resolve) {
                MessageToast.show(text, {
                    duration: duration,                   
                    onClose: function (oAction) {
                        resolve();
                        return;                        
                    }
                });
            })
        }

    };
});
// sap.m.MessageToast.show("This message should appear in the message toast", {
//     duration: 3000,                  // default
//     width: "15em",                   // default
//     my: "center bottom",             // default
//     at: "center bottom",             // default
//     of: window,                      // default
//     offset: "0 0",                   // default
//     collision: "fit fit",            // default
//     onClose: null,                   // default
//     autoClose: true,                 // default
//     animationTimingFunction: "ease", // default
//     animationDuration: 1000,         // default
//     closeOnBrowserNavigation: true   // default
// });