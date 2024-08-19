sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/core/MessageType"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter,MessageType)
    {
        "use strict";

        return BaseController.extend("zmmvpi01.app.z20231228mmvpi01.controller.CreateVendorInvoice", {

            formatter: formatter,
            /* =========================================================== */
            /* =========================================================== */
            /* =========================================================== */
            /* =========================================================== */
            /* =========================================================== */
            /* =========================================================== */
            /* =========================================================== */
            /* =========================================================== */
            /* =========================================================== */
            /* Local Constants		                                      */
            /* =========================================================== */


            CO_VIEW_MODEL: "createVendorInvoiceViewModel",
            CO_ODATA_INVOICE_HEADER_MODEL: "invoiceModel",
            CO_ODATA_INVOICE_HEADER_ATTACH_MODEL: "invoiceAttachModel",
            CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL: "invoiceAttachInCompleteModel",
            CO_ODATA_INVOICE_ITEM_MODEL: "invoiceItemModel",
            CO_ODATA_INVOICE_ITEM_ATTACH_MODEL: "invoiceItemAttachModel",
            CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL: "invoiceItemAttachInCompleteModel",
            CO_DETAIL_VENDOR_INVOICE_PAGE_ID: "detailVendorInvociePageID",












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
            /* lifecycle methods                                           */
            /* =========================================================== */
            onInit: function ()
            {
                this._oComponent = this.getOwnerComponent();
                this._oUploadSetOthersAttachment = this.getView().byId('createUploadSetOthersAttachment');
                this._oUploadSetAttachment = this.getView().byId('createUploadSetAttachment');


                let oViewModel;
                oViewModel = new JSONModel({
                    busy: false,
                    delay: 0,
                    minDate: this.getDateBase().getToday(),
                    maxDate: this.getDateBase().getLastDayOfYear()
                });
                this.setModel(oViewModel, this.CO_VIEW_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_HEADER_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL);
                this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_ITEM_MODEL).setData({ results: [] });

                this.getRouter().getRoute(this.getConstantBase().getConstants().ROUTE_CREATE_VENDOR_INVOICE).attachPatternMatched(this._onObjectMatched, this);

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
            /* event handlers                                              */
            /* =========================================================== */
            onDetailVendorInvoice: function (oEvent)
            {
                this._showDetailVendorInvoice(oEvent.getParameter("listItem") || oEvent.getSource());
            },
            onCloseCreateVendorInvoicePress: function (oEvent)
            {
                this._closeCreateVendorInvoice(oEvent);
            },
            onSaveNewInvoice: function (oEvent)
            {
                this._saveNewInvoice(oEvent);
            },

            onOpenAttachmentPressedIT: function (oEvent)
            {

            },
            onRemoveAttachmentPressedIT: function (oEvent)
            {
                this._removeAttachmentPressedIT(oEvent);

            },
            onBeforeItemAddedIT: function (oEvent)
            {

            },
            onAfterItemAddedIT: async function (oEvent)
            {
                this._afterItemAddedIT(oEvent);
            },
            onBeforeItemEditedIT: function (oEvent)
            {

            },
            onBeforeItemRemoveIT: function (oEvent)
            {
                this._beforeItemRemoveIT(oEvent);
            },
            onFileNameLengthExceededIT: function (oEvent)
            {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_NAME_LENGTH_EXCEEDED_IT, false, this);
            },
            onFileSizeExceededIT: function (oEvent)
            {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_NAME_SIZE_EXCEEDED_IT, false, this);
            },
            onFileTypeMismatchIT: function (oEvent)
            {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_TYPE_MISMATCH_EXCEEDED_IT, false, this);
            },

            onUploadCompletedIT: function (oEvent)
            {

            },
            onBeforeUploadTerminationIT: function (oEvent)
            {

            },
            onBeforeUploadStartsIT: function (oEvent)
            {

            },

            onOpenAttachmentPressed: function (oEvent)
            {

            },
            onRemoveAttachmentPressed: function (oEvent)
            {
                this._removeAttachmentPressed(oEvent);
            },
            onBeforeItemRemove: function (oEvent)
            {
                this._beforeItemRemove(oEvent);
            },
            onBeforeItemAdded: function (oEvent)
            {

            },
            onAfterItemAdded: async function (oEvent)
            {
                this._afterItemAdded(oEvent);
            },
            onBeforeItemEdited: function (oEvent)
            {

            },

            onFileNameLengthExceeded: function (oEvent)
            {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_NAME_LENGTH_EXCEEDED, false, this);
            },
            onFileSizeExceeded: function (oEvent)
            {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_NAME_SIZE_EXCEEDED, false, this);
            },
            onFileTypeMismatch: function (oEvent)
            {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_TYPE_MISMATCH_EXCEEDED, false, this);
            },

            onUploadCompleted: function (oEvent)
            {

            },
            onBeforeUploadTermination: function (oEvent)
            {

            },
            onBeforeUploadStarts: function (oEvent)
            {

            },
            onConfirmEbelnLogon: function () {
                this._confirmEbelnLogon();
            },
            onCancelEbelnLogon: function (oEvent) {
                this._cancelEbelnLogon(oEvent);
            },
            onCloseEbelnLogon: function (oEvent) {
                this._closeEbelnLogon(oEvent);
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
            _onObjectMatched: function (oEvent)
            {
                this.getModel().metadataLoaded().then(function ()
                {
                    this._oComponent._PromiseDataLoadedInit.then(function ()
                    {
                        this._procesOnMatchedScenario();
                    }.bind(this));
                }.bind(this));
            },
            _procesOnMatchedScenario: async function ()
            {

                let sUserType;
                sUserType = this.getUserType();
              
                this._PromiseWaitEbelnCheckEbeln = new Promise(function (fnResolve, fnReject) {
                    this._fnResolveCheckEbeln = fnResolve;
                    this._fnRejectCheckEbeln = fnReject;
                }.bind(this));
                this._PromiseWaitGetLifnr = new Promise(function (fnResolve, fnReject) {
                    this._fnResolveWaitGetLifnr = fnResolve;
                    this._fnRejectWaitGetLifnr = fnReject;
                }.bind(this));

                if (sUserType === '04' || sUserType ===  '05') {
                    // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", false);
                    this._fnResolveWaitGetLifnr();
                }
                else if (sUserType === '01') {
                    try {
                        let oLifnr = await this.callGetLifnr(
                            "",
                            "",
                            sUserType
                        );
                        
                        // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", true);
                        this.setHeaderLifnr(oLifnr);                 
                        this._fnResolveWaitGetLifnr();
                    } catch (error) {
                        // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", false);
                        return;
                    }

                    //10a - pokračuj dále
                    // this._getDialogEbelnLogon();
                } else if (sUserType === '02' || sUserType === '03') {
                    //10b - ověř příhlášení pomocí objednávky a hesla
                    //10b_10 - existuje již cookie
                    //10b_40 - otevři dialog

                    let bCheckCookieSuccess;
                    bCheckCookieSuccess = this.checkCookie();
                    if (bCheckCookieSuccess === true) {
                        try {
                            let oLifnr = await this.callGetLifnr(
                                this.getCookie("ebeln"),
                                this.getCookie("password"),
                                sUserType
                            );
                            // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", true);
                            this.setHeaderLifnr(oLifnr);                       
                            this._fnResolveWaitGetLifnr();
                        } catch (error) {
                            // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", false);
                            return;
                        }
                    } else {
                        this._getDialogEbelnLogon();
                    }

                    this._PromiseWaitEbelnCheckEbeln.then(async function () {
                        try {
                            let oLifnr = await this.callGetLifnr(
                                this.getModel(this.CO_VIEW_MODEL).getProperty("/ebeln"),
                                this.getModel(this.CO_VIEW_MODEL).getProperty("/pasw"),
                                sUserType
                            );
                            // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", true);
                            this.setHeaderLifnr(oLifnr);                           
                            this._fnResolveWaitGetLifnr();                            
                        } catch (error) {
                            // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", false);
                            return;
                        }
                    }.bind(this)).catch(async function (sErrorText) {
                        await this.messageBoxError(sErrorText);
                    }.bind(this));
                } else {
                    await this.messageBoxError("Error");
                }

                this._PromiseWaitGetLifnr.then(function () {

                }.bind(this)).catch(async function (sErrorText) {

                    await this.messageBoxError(sErrorText);
                    let oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                    oCrossAppNavigator.toExternal({
                        target: {
                            shellHash: "#Shell-home"
                        }
                    });
                }.bind(this));




                if (this._oUploadSetAttachment.getIncompleteItems().length > 0)
                {
                    for (let index = this._oUploadSetAttachment.getIncompleteItems().length - 1; index >= 0; index--)
                    {
                        this._oUploadSetAttachment.removeIncompleteItem(this._oUploadSetAttachment.getIncompleteItems()[index])
                    }
                }
                if (this._oUploadSetOthersAttachment.getIncompleteItems().length > 0)
                {
                    for (let index = this._oUploadSetOthersAttachment.getIncompleteItems().length - 1; index >= 0; index--)
                    {
                        this._oUploadSetOthersAttachment.removeIncompleteItem(this._oUploadSetOthersAttachment.getIncompleteItems()[index])
                    }
                }

                this.getAttachmentBase().initFCFields(this);

                this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_ITEM_MODEL).setData({ results: [] });


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

            _beforeItemRemoveIT: function (oEvent)
            {
                oEvent.preventDefault();
                oEvent.getSource().removeIncompleteItem(oEvent.getParameter("item"));
                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--)
                {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Counter === Number(oItem.Counter))
                    {
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        break;
                    }
                }
                oEvent.getParameters().item.destroy();
            },
            _beforeItemRemove: function (oEvent)
            {
                oEvent.preventDefault();
                oEvent.getSource().removeIncompleteItem(oEvent.getParameter("item"));
                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--)
                {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Counter === Number(oItem.Counter))
                    {
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        break;
                    }
                }
                oEvent.getParameters().item.destroy();
            },
            _removeAttachmentPressedIT: function (oEvent)
            {
                let oSource;
                oSource = oEvent.getSource();
                oEvent.preventDefault();
                oSource.getParent().removeItem(oEvent.getParameter("item"));
                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--)
                {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Zinvoicr_Id === oItem.Zinvoicr_Id && oSelectedItem.Attach_Id === oItem.Attach_Id)
                    {
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).updateBindings(true);

                        this._prepareDeleteInvoiceAttachIT(oSelectedItem.Zinvoicr_Id, oSelectedItem.Attach_Id);
                        break;
                    }
                }

                oEvent.getParameters().item.destroy();
            },
            _removeAttachmentPressed: function (oEvent)
            {
                oEvent.preventDefault();
                oEvent.getSource().getParent().removeItem(oEvent.getParameter("item"));

                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--)
                {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Zinvoicr_Id === oItem.Zinvoicr_Id)
                    {
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        break;
                    }
                }
                oEvent.getParameters().item.destroy();
            },
            _afterItemAdded: async function (oEvent)
            {
                let bCheckPropertiesAttachFC;
                let oSource = oEvent.getSource();
                let oItem = oEvent.getParameter("item");


                //10kontrola, kolik je nahraných příloh, může být maximálně 1
                if (oSource.getIncompleteItems().length > 1)
                {
                    if (this._oUploadSetAttachment.getIncompleteItems().length > 0)
                    {
                        for (let index = 0; index < this._oUploadSetAttachment.getIncompleteItems().length - 1; index++)
                        {
                            this._oUploadSetAttachment.removeIncompleteItem(this._oUploadSetAttachment.getIncompleteItems()[index])
                        }
                    }
                    await this.messageBoxWarning(this.getResourceBundle().getText("theAttachmentHasAlreadyBeenUploaded"));
                    return;
                } else
                {

                }
                //15kontrala, zda je příloha ok:
                bCheckPropertiesAttachFC = await this.getAttachmentBase().checkPropertiesAttachFC(this);
                if (bCheckPropertiesAttachFC === false)
                {
                    this._oUploadSetAttachment.removeIncompleteItem(oItem);
                    this.getAttachmentBase().initFCFields(this);
                    return;
                };

                let oFile;
                let oNewAttachmet = {};
                let oParameter;
                let i;
                i = 1;
                oParameter = oItem;

                oFile = oParameter.getFileObject();

                oParameter.setBindingContext(
                    new sap.ui.model.Context(
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL), "/results/0"),
                    this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL)



                let reader = this.getFileReaderBase().initFileReader();

                reader.onload = function (e)
                {
                    this.getFileReaderBase().onLoadFileReader(e, this, oParameter, i);
                }.bind(this);
                reader.onerror = function (e)
                {
                    this.getFileReaderBase().onErrorFileReader(e, this);
                };
                reader.readAsBinaryString(oFile);


            },
            _afterItemAddedIT: async function (oEvent)
            {

                let oItem = oEvent.getParameter("item");
                let oFile;
                let bCheckPropertiesAttachFC;
                let oNewAttachmet = {};
                let oNewAttachmet2 = {};
                let oParameter;
                oParameter = oEvent.getParameter("item");


                //5kontrala, zda je příloha ok:
                bCheckPropertiesAttachFC = await this.getAttachmentBase().checkPropertiesAttachFC(this);
                if (bCheckPropertiesAttachFC === false)
                {
                    this._oUploadSetOthersAttachment.removeIncompleteItem(oItem);
                    this.getAttachmentBase().initFCFields(this);
                    return;
                };

                //10 Odvození pořadového čisla nově přidané přílohy
                let i
                if (this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.length === 0)
                {
                    i = this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.length + 1;
                } else
                {
                    i = Math.max(...this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.map(o => o.Counter)) + 1;
                }

                oNewAttachmet2.Filename = oParameter.getProperty("fileName");
                oNewAttachmet2.Mimetype = oParameter.getProperty("mediaType");
                oNewAttachmet2.UploadState = oParameter.getProperty("uploadState");
                oNewAttachmet2.Counter = i
                oParameter.setProperty("thumbnailUrl", i);

                oFile = oParameter.getFileObject();

                oParameter.setBindingContext(
                    new sap.ui.model.Context(
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL), "/results/0"),
                    this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL);


                let reader = this.getFileReaderBase().initFileReader();

                reader.onload = function (e)
                {
                    this.getFileReaderBase().onLoadFileReaderIT(e, this, oParameter, i);
                }.bind(this);
                reader.onerror = function (e)
                {
                    this.getFileReaderBase().onErrorFileReaderIT(e, this);
                };
                reader.readAsBinaryString(oFile);
            },
            _closeCreateVendorInvoice: function ()
            {
                this.getRouter().navTo(this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE);
            },

            _saveNewInvoice: async function ()
            {
                let validator = this.getValidatorBase();
                this.getModel(this.CO_VIEW_MODEL).setProperty("/bValid", true);

                validator.validate(this.getView().byId(this.CO_DETAIL_VENDOR_INVOICE_PAGE_ID));
                if (validator.isValid() === false)
                {
                    this.getModel(this.CO_VIEW_MODEL).setProperty("/bValid", false);
                } else
                {
                }

                //kontrola příloh

                if (this._oUploadSetAttachment.getIncompleteItems().length === 0)
                {
                    this.getMessagesBase().addMessage(this.getResourceBundle().getText("noAttachmentUploaded"), "", this.getModel());
                    this.getModel(this.CO_VIEW_MODEL).setProperty("/bValid", false);
                }
                if (this._oUploadSetOthersAttachment.getIncompleteItems().length === 0)
                {
                 
                }

              if (this.getModel(this.CO_VIEW_MODEL).getProperty("/bValid") === true)
                {
                    let message = this.getResourceBundle().getText("saveNewInvoice");
                    if (await this.messageBoxConfirm(message) === false)
                    {
                        return;
                    } else
                    {
                        this._prepraveSaveNewInvoice();
                    };
                } else
                {
                    let message = this.getResourceBundle().getText("requiredFieldsNotCompleted");
                    this.messageBoxError(message);
                }
  
            },
            _prepraveSaveNewInvoice: function ()
            {
                let sPath, oInvoiceDataObject;
                oInvoiceDataObject = {};


                oInvoiceDataObject.Zinvoicr_Id = "9000000000";
                // oInvoiceDataObject.Bldat = new Date();
                // oInvoiceDataObject.Zfbdt = new Date();
                oInvoiceDataObject.Description = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getProperty("/Description");
                oInvoiceDataObject.ShortDescr = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getProperty("/ShortDescr");
                oInvoiceDataObject.Lifnr = this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).getProperty("/Lifnr");
                oInvoiceDataObject.to_invoiceAtt = this.getDataOperationBase()
                    .loopDataTableInvoiceAtt(
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL)
                            .getData()
                            .results,
                        oInvoiceDataObject.Zinvoicr_Id
                    );
                oInvoiceDataObject.to_items = [];
                oInvoiceDataObject.to_invItemAtt = this.getDataOperationBase()
                    .loopDataTableInvItemAtt(
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL)
                            .getData()
                            .results, [],
                        oInvoiceDataObject.Zinvoicr_Id);


                sPath = "/ZC_Invoice";
                this._callSaveNewInvoice(sPath, oInvoiceDataObject);
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
            /* begin: Fragments                                            */
            /* =========================================================== */
            /* =========================================================== */

            /* =========================================================== */
            /* begin:  Dialog Ebeln logon                                   */
            /* =========================================================== */
            _getDialogEbelnLogon: async function () {

                let oEbelnLogon;
                oEbelnLogon = await this.getDialogBase().getDialogEbelnLogon(this);
                this.getDialogBase().openDialog(oEbelnLogon);


            },
            _cancelEbelnLogon: async function (oEvent) {
                this.getDialogBase().closeDialog(await this.getDialogBase().getDialogEbelnLogon(this));

            },
            _closeEbelnLogon: async function (oEvent) {

            },
            _confirmEbelnLogon: function () {
                let oEbelnLogon;
                oEbelnLogon = this.getDialogBase().onConfirmEbelnLogon(this);
                this.getModel(this.CO_VIEW_MODEL).setProperty("/ebeln", oEbelnLogon.getContent()[1].getProperty("value"));
                this.getModel(this.CO_VIEW_MODEL).setProperty("/pasw", oEbelnLogon.getContent()[2].getProperty("value"));

                this.callCheckEbeln(
                    oEbelnLogon.getContent()[1].getProperty("value"),
                    oEbelnLogon.getContent()[2].getProperty("value")
                )

            },
            _deleteEbelnLogon: async function () {
                this.getDialogBase().clearEbelnLogonDialog(await this.getDialogBase().getDialogEbelnLogon(this));

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
            _callInvoiceHeader: async function (salesOrder)
            {
                let sObjectPath = this.getOwnerComponent().getModel().createKey("ZC_B193SOHeader", {
                    SalesOrder: salesOrder,
                });
                let oDataGetSalesOrderList = {};
                try
                {
                    oDataGetSalesOrderList = await this.getCallToBackendBase().callGetSalesOrder(this, sObjectPath);
                    this.getModel(this.CO_VIEW_HISTORY_SD_HEADER_MODEL).setData(oDataGetSalesOrderList);
                    this.getModel(this.CO_VIEW_HISTORY_SD_ITEM_MODEL).setData(oDataGetSalesOrderList.to_SOItem);
                    return;

                } catch (error)
                {
                    await this.messageBoxError(error);
                }
            },
            _callSaveNewInvoice: async function (sPath, oData)
            {
                let oDataConfirmSaveewInvoice = {};
                try
                {
                    oDataConfirmSaveewInvoice = await this.getCallToBackendBase().callSaveNewInvoice(sPath, oData, this);

                    oData = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getData();
                    oData.to_invoiceAtt = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData()
                    oData.to_invItemAtt = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData();

                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setData({});
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData({ results: [] });
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData({ results: [] });
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });


                    // await this.messageToastShow(this.getResourceBundle().getText("theSaveWasSuccessful"), 1200);
                    await this.messageBoxSuccess(this.getResourceBundle().getText("theSaveWasSuccessful"));
                    if (this._oUploadSetOthersAttachment.getIncompleteItems().length > 0)
                    {
                        for (let index = this._oUploadSetOthersAttachment.getIncompleteItems().length - 1; index >= 0; index--)
                        {
                            this._oUploadSetOthersAttachment.removeIncompleteItem(this._oUploadSetOthersAttachment.getIncompleteItems()[index])
                        }
                    }


                    let message = this.getResourceBundle().getText("uploadNextInvoice");
                    if (await this.messageBoxConfirm(message) === false)
                    {
                        this.getRouter().navTo(this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE);
                    } else
                    {
                    };

                } catch (error)
                {
                    await this.messageBoxError(error);

                }
            }

        });
    });
