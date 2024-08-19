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
    "../utils/DateTime",
    "../utils/Attachment",
    "../utils/DataOperation",
    "../utils/FileReader",
], function (Controller, History, Constants, Messages, ZMessageBox, ZMessageToast, CallToBackend, Dialog,
    SelectDialog, Validator, Filters, DateTime, Attachment, DataOperation, FileReader)
{
    "use strict";

    return Controller.extend("zmmvpi01.app.z20231228mmvpi01.controller.BaseController", {
        /**
         * Convenience method for accessing the router in every controller of the application.
         * @public
         * @returns {sap.ui.core.routing.Router} the router for this component
         */
        getRouter: function ()
        {
            return this.getOwnerComponent().getRouter();
        },

        getConstantBase: function ()
        {
            return Constants;

        },
        getMessagesBase: function ()
        {
            return Messages;

        },

        getCallToBackendBase: function ()
        {
            return CallToBackend;

        },
        getDialogBase: function ()
        {
            return Dialog;

        },
        getSelectDialogBase: function ()
        {
            return SelectDialog;

        },
        getValidatorBase: function ()
        {
            return new Validator();

        },
        getFilterBase: function ()
        {
            return Filters;
        },
        getDateBase: function ()
        {
            return DateTime;
        },
        getAttachmentBase: function ()
        {
            return Attachment;
        },
        getDataOperationBase: function ()
        {
            return DataOperation;
        },
        getFileReaderBase: function ()
        {
            return FileReader;
        },



        toggleFullScreen: function ()
        {
            let bFullScreen = this.getModel("appView").getProperty("/actionButtonsInfo/midColumn/fullScreen");
            this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreen", !bFullScreen);
            if (!bFullScreen)
            {
                // store current layout and go full screen
                this.getModel("appView").setProperty("/previousLayout", this.getModel("appView").getProperty("/layout"));
                this.getModel("appView").setProperty("/layout", "MidColumnFullScreen");
            } else
            {
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
        getModel: function (sName)
        {
            return this.getView().getModel(sName);
        },

        /**
         * Convenience method for setting the view model.
         * @public
         * @param {sap.ui.model.Model} oModel the model instance
         * @param {string} sName the model name
         * @returns {sap.ui.mvc.View} the view instance
         */
        setModel: function (oModel, sName)
        {
            return this.getView().setModel(oModel, sName);
        },

        /**
         * Getter for the resource bundle.
         * @public
         * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
         */
        getResourceBundle: function ()
        {
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
        /* Public methods                                           */
        /* =========================================================== */

        setCookie: function (cname, cvalue, exdays)
        {
            this._setCookie(cname, cvalue, exdays);
        },

        getCookie: function (cname)
        {
            return this._getCookie(cname);
        },
        checkCookie: function ()
        {
            return this._checkCookie();
        },
        deleteCookie: function ()
        {
            this._deleteCookie();
        },
        callGetLifnr: async function (ebeln, passw, usetype) 
        {
            return  await this._callGetLifnr(ebeln, passw, usetype);
        },
        callCheckEbeln: async function (ebeln, passw)
        {
           return await this._callCheckEbeln(ebeln, passw);
        },
        getUserType:  function ()
        {
            return this._getUserType();
        },
        getLogonEbeln:  function ()
        {
            return this._getLogonEbeln();
        },
        setHeaderLifnr:  function (oLifnr)
        {
             this._setHeaderLifnr(oLifnr);
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
        /* begin: CORE internal methods                                */
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
        /* =========================================================== */
        /* Internal methods                                            */
        /* =========================================================== */


        _setCookie: function (cname, cvalue, exdays)
        {
            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
        _getCookie: function (cname)
        {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++)
            {
                let c = ca[i];
                while (c.charAt(0) == ' ')
                {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0)
                {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        _checkCookie: function ()
        {
            let oKeys = {};
            oKeys.load = true;
            let ebeln = this._getCookie("ebeln");
            let password = this._getCookie("password");
            // if (ebeln !== "" && password !== "") {
            if (ebeln === "")
            {
                return false;
            } else
            {
                return true;
            }
        },
        _deleteCookie: function ()
        {
            document.cookie = 'ebeln=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = 'password=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
        _getUserType: function () {
            let usertype;
            usertype = this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).getData().UserType;
            return usertype;
        },
        _getLogonEbeln: function () {
            let logonebeln;
            logonebeln = this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).getData().bLogonEbeln;
            return usertype;
        },
        _setHeaderLifnr: function (oFifnr) {

            this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/Lifnr", oFifnr.Lifnr);
            this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/LifnrName", oFifnr.LifnrName);
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

        onMessagePopoverPress: function (oEvent)
        {
            Messages.onMessagePopoverPress(this, oEvent);
        },
        onMessagePopoverClose: function ()
        {
            Messages.onMessagePopoverClose();
        },
        onMessagePopoverOpen: function ()
        {

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

        messageBoxSuccess: async function (text)
        {
            return await ZMessageBox.success(text);
        },
        messageBoxConfirm: async function (text)
        {
            return await ZMessageBox.confirm(text);
        },
        messageBoxError: async function (text)
        {
            return await ZMessageBox.error(text);
        },
        messageBoxWarning: async function (text)
        {
            return await ZMessageBox.warning(text);
        },
        messageBoxWarning2: async function (text)
        {
            return await ZMessageBox.warning2(text);
        },
        messageBoxInformation: async function (text)
        {
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

        messageToastShow: async function (text, duration)
        {
            await ZMessageToast.show(text, duration);
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
        /* begin: Call to backendu                                     */
        /* =========================================================== */
        _callCheckEbeln: async function (ebeln, passw)
        {
            let oDataConfirmEbelnAuthen;
            let sEbeln;
            let sPassw;
            sEbeln = ebeln;
            sPassw = passw;
            try
            {
                oDataConfirmEbelnAuthen = await this.getCallToBackendBase().callCheckEbeln(this, ebeln, passw);
                if (oDataConfirmEbelnAuthen.check === true)
                {
                    // this._oSmartFilter.setShowGoOnFB(true);
                    this._fnResolveCheckEbeln();

                    this.setCookie("ebeln", sEbeln, 0.0208);
                    this.setCookie("password", sPassw, 0.0208);

                } else
                {
                    // this._oSmartFilter.setShowGoOnFB(false);
                    this._fnRejectCheckEbeln("Oprávnění bylo neúspěšné");
                }
            } catch (error)
            {
                await this.messageBoxError(error);
            }
        },
        _callGetLifnr: async function (ebeln, passw, usetype)
        {
            let oDataLifnr;

            try
            {
                oDataLifnr = await this.getCallToBackendBase().callGetLifnr(this, ebeln, passw, usetype);
                return oDataLifnr;

            } catch (error)
            {
                await this.messageBoxError(error);
            }
        },





    });

});