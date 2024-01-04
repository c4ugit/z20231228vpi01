/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "zmmvpi01/app/z20231228mmvpi01/model/models",
    "./controller/ErrorHandler",
    "./utils/Constants"
],
    function (UIComponent, Device, models, ErrorHandler,Constants) {
        "use strict";

        return UIComponent.extend("zmmvpi01.app.z20231228mmvpi01.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // this._oErrorHandler = new ErrorHandler(this);
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                this._PromiseDataLoadedInit = new Promise(function (fnResolveDataLoadedInit) {
                    this._fnResolveDataLoadedInit = fnResolveDataLoadedInit;
                }.bind(this));


                let oDataHelp = {
                    bFooterDisplay: true
                };
                this.getModel(Constants.getConstants().GLOBAL_MODEL_HELP).setData(oDataHelp);



                let oMessageManager = sap.ui.getCore().getMessageManager();
                this.setModel(oMessageManager.getMessageModel(), "message");

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                // enable routing
                this.getRouter().initialize();
            },
            destroy: function () {
                // this._oErrorHandler.destroy();
                // call the base component's destroy function
                UIComponent.prototype.destroy.apply(this, arguments);
            },
            getContentDensityClass: function () {
                if (this._sContentDensityClass === undefined) {
                    // check whether FLP has already set the content density class; do nothing in this case
                    // eslint-disable-next-line sap-no-proprietary-browser-api
                    if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
                        this._sContentDensityClass = "";
                    } else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
                        this._sContentDensityClass = "sapUiSizeCompact";
                    } else {
                        // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                        this._sContentDensityClass = "sapUiSizeCozy";
                    }
                }
                return this._sContentDensityClass;
            }
        });
    }
);