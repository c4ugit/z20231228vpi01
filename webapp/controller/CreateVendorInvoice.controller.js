sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter) {
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
            onInit: function () {
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
            onDetailVendorInvoice: function (oEvent) {
                this._showDetailVendorInvoice(oEvent.getParameter("listItem") || oEvent.getSource());
            },
            onCloseCreateVendorInvoicePress: function (oEvent) {
                this._closeCreateVendorInvoice(oEvent);
            },
            onSaveNewInvoice: function (oEvent) {
                this._saveNewInvoice(oEvent);
            },

            onOpenAttachmentPressedIT: function (oEvent) {

            },
            onRemoveAttachmentPressedIT: function (oEvent) {
                let oSource;
                oSource = oEvent.getSource();
                oEvent.preventDefault();
                oSource.getParent().removeItem(oEvent.getParameter("item"));
                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--) {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.ZinvoicrId === oItem.ZinvoicrId && oSelectedItem.AttachId === oItem.AttachId) {
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).updateBindings(true);

                        this._prepareDeleteInvoiceAttachIT(oSelectedItem.ZinvoicrId, oSelectedItem.AttachId);
                        break;
                    }
                }





                oEvent.getParameters().item.destroy();
            },
            onBeforeItemAddedIT: function (oEvent) {

            },
            onAfterItemAddedIT: function (oEvent) {
                let oFile;
                let oNewAttachmet = {};
                let oNewAttachmet2 = {};
                let oParameter;
                oParameter = oEvent.getParameter("item");

                let oSource = oEvent.getSource();

                //10 Odvození pořadového čisla nově přidané přílohy
                let i
                if (this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.length === 0) {
                    i = this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.length + 1;
                } else {
                    i = Math.max(...this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.map(o => o.Counter)) + 1;
                }

                oNewAttachmet2.Filename = oParameter.getProperty("fileName");
                oNewAttachmet2.Mimetype = oParameter.getProperty("mediaType");
                oNewAttachmet2.UploadState = oParameter.getProperty("uploadState");
                oNewAttachmet2.Counter = i

                oParameter.setProperty("thumbnailUrl", i);

                oFile = oEvent.getParameter("item").getFileObject();

                oParameter.setBindingContext(
                    new sap.ui.model.Context(
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL), "/results/0"),
                    this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL)

                let reader = new FileReader();

                reader.onload = function (e) {
                    let raw = e.target.result;
                    let binaryString = raw;
                    let Content = btoa(binaryString);


                    oNewAttachmet.Filename = oParameter.getProperty("fileName");
                    oNewAttachmet.Mimetype = oParameter.getProperty("mediaType");
                    oNewAttachmet.UploadState = oParameter.getProperty("uploadState");
                    oNewAttachmet.Counter = i;
                    oNewAttachmet.Content = Content;
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.push(oNewAttachmet);
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).updateBindings(true);
                    // var oLocalData.content = "data:image/jpeg;base64," + base64;
                }.bind(this);
                reader.onerror = function (e) {
                    this.messageToastShow("error");
                };

                reader.readAsBinaryString(oFile);

            },
            onBeforeItemEditedIT: function (oEvent) {

            },
            onBeforeItemRemoveIT: function (oEvent) {
                oEvent.preventDefault();
                oEvent.getSource().removeIncompleteItem(oEvent.getParameter("item"));
                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--) {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Counter === Number(oItem.Counter)) {
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        break;
                    }
                }
                oEvent.getParameters().item.destroy();
            },
            onFileNameLengthExceededIT: function (oEvent) {

            },
            onFileSizeExceededIT: function (oEvent) {

            },
            onFileTypeMismatchIT: function (oEvent) {

            },
            onUploadCompletedIT: function (oEvent) {

            },
            onBeforeUploadTerminationIT: function (oEvent) {

            },
            onBeforeUploadStartsIT: function (oEvent) {

            },




            onOpenAttachmentPressed: function (oEvent) {

            },
            onRemoveAttachmentPressed: function (oEvent) {
                oEvent.preventDefault();
                oEvent.getSource().getParent().removeItem(oEvent.getParameter("item"));

                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--) {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.ZinvoicrId === oItem.ZinvoicrId) {
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        break;
                    }
                }
                oEvent.getParameters().item.destroy();


            },
            onBeforeItemRemove: function (oEvent) {
                oEvent.preventDefault();
                oEvent.getSource().removeIncompleteItem(oEvent.getParameter("item"));
                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--) {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Counter === Number(oItem.Counter)) {
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        break;
                    }
                }
                oEvent.getParameters().item.destroy();
            },
            onBeforeItemAdded: function (oEvent) {

            },
            onAfterItemAdded: async function (oEvent) {
                let oSource = oEvent.getSource();
                //10kontrola, kolik je nahraných příloh, může být maximálně 1
                if (oSource.getItems().length > 0) {
                    if (this._oUploadSetAttachment.getIncompleteItems().length > 0) {
                        for (let index = 0; index < this._oUploadSetAttachment.getIncompleteItems().length; index++) {
                            this._oUploadSetAttachment.removeIncompleteItem(this._oUploadSetAttachment.getIncompleteItems()[index])
                        }
                    }
                    let oHelpArray = {};
                    oHelpArray.results = [];
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData(oHelpArray);
                    await this.messageBoxWarning("Příloha již byla nahrána. Pro nahrání nové přlohy je nutné původní nejprve smazat.");
                    return;
                } else {

                }

                let oFile;
                let oNewAttachmet = {};
                let oParameter;
                let i;
                i = 1;
                oParameter = oEvent.getParameter("item");

                oFile = oEvent.getParameter("item").getFileObject();

                oParameter.setBindingContext(
                    new sap.ui.model.Context(
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL), "/results/0"),
                    this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL)

                let reader = new FileReader();

                reader.onload = function (e) {
                    let raw = e.target.result;
                    let binaryString = raw;
                    let Content = btoa(binaryString);


                    oNewAttachmet.Filename = oParameter.getProperty("fileName");
                    oNewAttachmet.Mimetype = oParameter.getProperty("mediaType");
                    oNewAttachmet.UploadState = oParameter.getProperty("uploadState");
                    oNewAttachmet.Counter = i;
                    oNewAttachmet.Content = Content;
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.push(oNewAttachmet);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).updateBindings(true);
                    // var oLocalData.content = "data:image/jpeg;base64," + base64;
                }.bind(this);

                reader.onerror = function (e) {
                    this.messageToastShow("error");
                };
                reader.readAsBinaryString(oFile);
            },
            onBeforeItemEdited: function (oEvent) {

            },

            onFileNameLengthExceeded: function (oEvent) {

            },
            onFileSizeExceeded: function (oEvent) {

            },
            onFileTypeMismatch: function (oEvent) {

            },
            onUploadCompleted: function (oEvent) {

            },
            onBeforeUploadTermination: function (oEvent) {

            },
            onBeforeUploadStarts: function (oEvent) {

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
            _onObjectMatched: function (oEvent) {
                this.getModel().metadataLoaded().then(function () {
                    this._oComponent._PromiseDataLoadedInit.then(function () {
                        this._procesOnMatchedScenario();
                    }.bind(this));
                }.bind(this));
            },
            _procesOnMatchedScenario: function () {

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
            _closeCreateVendorInvoice: function () {
                this.getRouter().navTo(this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE);
            },

            _saveNewInvoice: async function () {
                let validator = this.getValidatorBase();
                this.getModel(this.CO_VIEW_MODEL).setProperty("/bValid", true);

                validator.validate(this.getView().byId(this.CO_DETAIL_VENDOR_INVOICE_PAGE_ID));
                if (validator.isValid() === false) {
                    this.getModel(this.CO_VIEW_MODEL).setProperty("/bValid", false);
                } else {
                }

                if (this.getModel(this.CO_VIEW_MODEL).getProperty("/bValid") === true) {
                    let message = "Přejete si uložit novou fakturu do SAPu?";
                    if (await this.messageBoxConfirm(message) === false) {
                        return;
                    } else {
                        this._prepraveSaveNewInvoice();
                    };
                } else {

                }

            },
            _prepraveSaveNewInvoice: function () {
                let sPath, oInvoiceDataObject;
                oInvoiceDataObject = {};


                oInvoiceDataObject.ZinvoicrId = "9000000000";
                oInvoiceDataObject.Description = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getProperty("/Description");
                oInvoiceDataObject.ShortDescr = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getProperty("/ShortDescr");
                oInvoiceDataObject.to_invoiceAtt = this.getDataOperationBase()
                    .loopDataTableInvoiceAtt(
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL)
                            .getData()
                            .results,
                            oInvoiceDataObject.ZinvoicrId
                    );
                oInvoiceDataObject.to_items = [];
                oInvoiceDataObject.to_invItemAtt = this.getDataOperationBase()
                    .loopDataTableInvItemAtt(
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL)
                            .getData()
                            .results, [],
                            oInvoiceDataObject.ZinvoicrId);


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
            _callInvoiceHeader: async function (salesOrder) {
                let sObjectPath = this.getOwnerComponent().getModel().createKey("ZC_B193SOHeader", {
                    SalesOrder: salesOrder,
                });
                let oDataGetSalesOrderList = {};
                try {
                    oDataGetSalesOrderList = await this.getCallToBackendBase().callGetSalesOrder(this, sObjectPath);
                    this.getModel(this.CO_VIEW_HISTORY_SD_HEADER_MODEL).setData(oDataGetSalesOrderList);
                    this.getModel(this.CO_VIEW_HISTORY_SD_ITEM_MODEL).setData(oDataGetSalesOrderList.to_SOItem);
                    return;

                } catch (error) {
                    await this.messageBoxError(error);
                }
            },
            _callSaveNewInvoice: async function (sPath, oData) {
                let oDataConfirmSaveewInvoice = {};
                try {
                    oDataConfirmSaveewInvoice = await this.getCallToBackendBase().callSaveNewInvoice(sPath, oData, this);

                    oData = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getData();
                    oData.to_invoiceAtt = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData()
                    oData.to_invItemAtt = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData();

                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setData({});
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData({ results: [] });
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData({ results: [] });
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });


                    await this.messageToastShow("Uložení proběhlo v pořádku", 300);

                    if (this._oUploadSetOthersAttachment.getIncompleteItems().length > 0) {
                        for (let index = this._oUploadSetOthersAttachment.getIncompleteItems().length - 1; index >= 0; index--) {
                            this._oUploadSetOthersAttachment.removeIncompleteItem(this._oUploadSetOthersAttachment.getIncompleteItems()[index])
                        }
                    }


                    let message = "Přejete si pokračovat s uložením další faktury?";
                    if (await this.messageBoxConfirm(message) === false) {
                        this.getRouter().navTo(this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE);
                    } else {
                    };

                } catch (error) {
                    await this.messageBoxError(error);

                }
            }

        });
    });
