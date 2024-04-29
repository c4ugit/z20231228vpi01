sap.ui.define([
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
], function (Fragment, MessageToast) {
    "use strict";

    return {


       
        /* =========================================================== */
        /* =========================================================== */
        /* Nápovšda                          */
        /* =========================================================== */

        getDialogHelpForUser: async function (that, sModelName, oDataModel) {
            if (!that._oHelpForUser) {
                let oDialog = await Fragment.load({
                    name: that.getConstantBase().getConstants().HELP_FOR_USER_DIALOG,
                    controller: that
                })
                that.getView().addDependent(oDialog);
                that._oHelpForUser = oDialog;
                that._oHelpForUser.setModel(oDataModel, sModelName);

                return that._oHelpForUser;
            } else {
                that._oHelpForUser.setModel(oDataModel, sModelName);
                return that._oHelpForUser;
            }
        },
        onCancelHelpForUser: function (that) {
            this._closeDialog(that._oHelpForUser);
        },
        clearHelpForUser: function () {
        },
        onConfirmHelpForUser: function (that) {
            this._closeDialog(that._oHelpForUser);

        },
        /* =========================================================== */
        /* =========================================================== */
        /* Ebeln logon                                                 */
        /* =========================================================== */

        getDialogEbelnLogon: async function (that) {
            if (!that._oEbelnLogon) {
                let oDialog = await Fragment.load({
                    name: that.getConstantBase().getConstants().EBELN_LOGON_DIALOG,
                    controller: that
                })
                that.getView().addDependent(oDialog);
                that._oEbelnLogon = oDialog;
             
                return that._oEbelnLogon;
            } else {             

                return that._oEbelnLogon;
            }
        },
        onCancelEbelnLogon: function (that) {
            this._closeDialog(that._oEbelnLogon);
        },
        clearEbelnLogonDialog: function () {
        },
        onConfirmEbelnLogon: function (that) {
           this._closeDialog(that._oEbelnLogon);
           return  that._oEbelnLogon;      
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
        /* Public general methods                                      */
        /* =========================================================== */

        openDialog: function (dialog) {
            this._openDialog(dialog)
        },
        closeDialog: function (dialog) {
            this._closeDialog(dialog)
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
        /* Busy Dialog                                                 */
        /* =========================================================== */

        openBusyDialog: function (that) {

            //OpenDialog
            // load asynchronous XML fragment
            if (!that._oBusyLoadingDialog) {
                Fragment.load({
                    name: "XXX",
                    controller: that
                }).then(function (oDialog) {
                    // connect dialog to the root view of this component (models, lifecycle)
                    that.getView().addDependent(oDialog);
                    that._oBusyLoadingDialog = oDialog
                    that._oBusyLoadingDialog = oDialog.open();
                }.bind(that));
            } else {
                that._oBusyLoadingDialog.open();
            }
        },
        onBusyDialogClosed: function (that) {
            if (that._oBusyLoadingDialog) {
                that._oBusyLoadingDialog.close();
                MessageToast.show("Data byla načtena...");

            }

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
        /* begin: internal methods                                     */
        /* =========================================================== */

        _openDialog: function (dialog) {
            dialog.open();
        },
        _closeDialog: function (dialog) {
            dialog.close();
        }


    }
})