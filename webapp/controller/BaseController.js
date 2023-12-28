sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "../utils/Constants",
    "../utils/Messages",
    "../utils/MessageBox",
    "../utils/MessageToast",
    "../utils/CallToBackend",
    "../utils/Dialog",
    "../utils/SelectDialog",
    "../utils/Validator",
    "../utils/Filters",
    "../utils/DateTime"
], function (Controller, History, Constants, Messages, ZMessageBox, ZMessageToast, CallToBackend, Dialog,
     SelectDialog, Validator,Filters,DateTime) {
    "use strict";

    return Controller.extend("zmmvpi01.app.z20231228mmvpi01.controller.BaseController", {
        /**
         * Convenience method for accessing the router in every controller of the application.
         * @public
         * @returns {sap.ui.core.routing.Router} the router for this component
         */
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },

        getConstantBase: function () {
            return Constants;

        },
        getMessagesBase: function () {
            return Messages;

        },

        getCallToBackendBase: function () {
            return CallToBackend;

        },
        getDialogBase: function () {
            return Dialog;

        },
        getSelectDialogBase: function () {
            return SelectDialog;

        },
        getValidatorBase: function () {
            return new Validator();

        },
        getFilterBase: function () {
            return Filters;
        },
        getDateBase: function () {
            return DateTime;
        },



        toggleFullScreen: function () {
            let bFullScreen = this.getModel("appView").getProperty("/actionButtonsInfo/midColumn/fullScreen");
            this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreen", !bFullScreen);
            if (!bFullScreen) {
                // store current layout and go full screen
                this.getModel("appView").setProperty("/previousLayout", this.getModel("appView").getProperty("/layout"));
                this.getModel("appView").setProperty("/layout", "MidColumnFullScreen");
            } else {
                // reset to previous layout
                this.getModel("appView").setProperty("/layout", this.getModel("appView").getProperty("/previousLayout"));
            }

        },


        /**
         * Convenience method for getting the view model by name.
         * @public
         * @param {string} [sName] the model name
         * @returns {sap.ui.model.Model} the model instance
         */
        getModel: function (sName) {
            return this.getView().getModel(sName);
        },

        /**
         * Convenience method for setting the view model.
         * @public
         * @param {sap.ui.model.Model} oModel the model instance
         * @param {string} sName the model name
         * @returns {sap.ui.mvc.View} the view instance
         */
        setModel: function (oModel, sName) {
            return this.getView().setModel(oModel, sName);
        },

        /**
         * Getter for the resource bundle.
         * @public
         * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
         */
        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },











        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* Message handlers                                            */
        /* =========================================================== */

        onMessagePopoverPress: function (oEvent) {
            Messages.onMessagePopoverPress(this, oEvent);
        },
        onMessagePopoverClose: function () {
            Messages.onMessagePopoverClose();
        },
        onMessagePopoverOpen: function () {

        },
       

        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* MsessageBox                                                 */
        /* =========================================================== */

        messageBoxSuccess: async function (text) {
            return await ZMessageBox.success(text);
        },
        messageBoxConfirm: async function (text) {
            return await ZMessageBox.confirm(text);
        },
        messageBoxError: async function (text) {
            return await ZMessageBox.error(text);
        },
        messageBoxWarning: async function (text) {
            return await ZMessageBox.warning(text);
        },
        messageBoxWarning2: async function (text) {
            return await ZMessageBox.warning2(text);
        },
        messageBoxInformation: async function (text) {
            return await ZMessageBox.information(text);
        },







        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* =========================================================== */
        /* MessageToas                                                 */
        /* =========================================================== */

        messageToastShow: async function (text, duration) {
            await ZMessageToast.show(text, duration);
        },




    });

});