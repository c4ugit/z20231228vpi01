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
                this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).setData({results: []});
                this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData({results: []});
                this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData({ results: [] });

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


            onRemoveAttachmentPressed: function (oEvent) {

            },
            onBeforeItemAdded: function (oEvent) {

            },
            onAfterItemAdded: function (oEvent) {
                // let oNewAttachmet = {};
                // oNewAttachmet.Filename = oEvent.getParameter("item").getProperty("fileName");
                // oNewAttachmet.Mimetype = oEvent.getParameter("item").getProperty("mediaType");
                // oNewAttachmet.UploadState = oEvent.getParameter("item").getProperty("uploadState");

                // this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results.push(oNewAttachmet);
                // this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).updateBindings(true);

                let reader = new FileReader();
				reader.onload = function (e) {
					let raw = e.target.result;
					let binaryString = raw;
					let Content = btoa(binaryString);
				
					// var oLocalData.content = "data:image/jpeg;base64," + base64;
				};

            },
            onBeforeItemEdited: function (oEvent) {

            },
            onBeforeItemRemove: function (oEvent) {

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

            onUploadSelectedButton: function () {
                let oUploadSet = this.byId("createUploadSetAttachment");

                oUploadSet.getItems().forEach(function (oItem) {
                    if (oItem.getListItem().getSelected()) {
                        oUploadSet.uploadItem(oItem);
                    }
                });
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
                let sPath, oData;

                oData = {};
                oData.to_invItemAtt = [];
                oData.to_invoiceAtt = [];
                oData.to_items = [];
                oData = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getData();
                oData.ZinvoicrId = "9000000000";   
                //Incomplete header attach
                let aData = [];
                for (let index = 0; index <  this.getView().byId('createUploadSetAttachment').getIncompleteItems().length; index++) {
                    let oIncompleItem = {};
                    oIncompleItem.Filename =  this.getView().byId('createUploadSetAttachment').getIncompleteItems()[index].getProperty("fileName");
                    oIncompleItem.Mimetype =  this.getView().byId('createUploadSetAttachment').getIncompleteItems()[index].getProperty("mediaType");
                    oIncompleItem.UploadState =  this.getView().byId('createUploadSetAttachment').getIncompleteItems()[index].getProperty("uploadState");


                    aData.push(oIncompleItem);
                }


          

                oData.to_invoiceAtt = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData(aData);
                oData.to_invItemAtt = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData();


                                
            
              

                sPath = "/ZC_Invoice";
                this._callSaveNewInvoice(sPath, oData);
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


                    await this.messageToastShow("Uložení proběhlo v pořádku", 300);


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
