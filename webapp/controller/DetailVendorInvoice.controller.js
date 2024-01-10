sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/m/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter, MobileLibrary) {
        "use strict";

        return BaseController.extend("zmmvpi01.app.z20231228mmvpi01.controller.DetailVendorInvoice", {

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


            CO_VIEW_MODEL: "detailVendorInvoiceViewModel",
            CO_ODATA_INVOICE_HEADER_MODEL: "invoiceModel",
            CO_ODATA_INVOICE_HEADER_ATTACH_MODEL: "invoiceAttachModel",
            CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL: "invoiceAttachInCompleteModel",
            CO_ODATA_INVOICE_ITEM_MODEL: "invoiceItemModel",
            CO_ODATA_INVOICE_ITEM_ATTACH_MODEL: "invoiceItemAttachModel",
            CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL: "invoiceItemAttachInCompleteModel",

            CO_REQUEST_TABLE_ID: "requestTableID",












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
                this._oUploadSetOthersAttachment = this.getView().byId('UploadSetOthersAttachment');
                this._oUploadSetAttachment = this.getView().byId('UploadSetAttachment');
                this._oUploadSetOthersAttachment.getList().setMode(MobileLibrary.ListMode.MultiSelect);
                this._oUploadSetAttachment.getList().setMode(MobileLibrary.ListMode.MultiSelect);


                let oViewModel;
                oViewModel = new JSONModel({
                    busy: false,
                    delay: 0,
                    minDate: this.getDateBase().getToday(),
                    maxDate: this.getDateBase().getLastDayOfYear(),
                    step: 1,
                    stepprecision: 0
                });
                this.setModel(oViewModel, this.CO_VIEW_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_HEADER_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL);

                this.getRouter().getRoute(this.getConstantBase().getConstants().ROUTE_DETAIL_VENDOR_INVOICE).attachPatternMatched(this._onObjectMatched, this);

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
            onCloseDetailVendorInvoicePress: function (oEvent) {
                this._closeDetailVendorInvoice(oEvent);
            },
            onOpenAttachmentPressed: function (oEvent) {

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
                let oUploadSet = this.byId("UploadSetAttachment");

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
                let sInvoiceId = oEvent.getParameter("arguments").objectId;
                this.getModel(this.getConstantBase().getConstants().APP_VIEW_MODEL).setProperty("/layout", "TwoColumnsMidExpanded");
                this.getModel().metadataLoaded().then(function () {
                    this._oComponent._PromiseDataLoadedInit.then(function () {
                        this._procesOnMatchedScenario(sInvoiceId);
                    }.bind(this));
                }.bind(this));
            },
            _procesOnMatchedScenario: async function (sInvoiceId) {
                //05
                this._oUploadSetAttachment.removeAllIncompleteItems();

                //10 Načtení dat z backendu.
                await this._callInvoiceHeader(
                    sInvoiceId
                )

                //20Next steps...
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
            _closeDetailVendorInvoice: function () {
                this.getModel(this.getConstantBase().getConstants().APP_VIEW_MODEL).setProperty("/layout", "OneColumn");
                this.getRouter().navTo(this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE);
            },
            _helpdata: function () {
                return {
                    "items": [
                        {
                            "fileName": "Business Plan Agenda.doc",
                            "mediaType": "application/msword",
                            "url": "demokit/sample/UploadCollection/LinkedDocuments/Business Plan Agenda.doc",
                            "uploadState": "Complete",
                            "attributes": [
                                {
                                    "title": "Uploaded By",
                                    "text": "Jane Burns",
                                    "active": true
                                },
                                {
                                    "title": "Uploaded On",
                                    "text": "2014-07-28",
                                    "active": false
                                },
                                {
                                    "title": "File Size",
                                    "text": "25",
                                    "active": false
                                },
                                {
                                    "title": "Lorem ipsum dolor sit amet",
                                    "text": "consectetur adipisici elit",
                                    "active": false
                                }
                            ],
                            "markers": [
                                {
                                    "type": "Draft"
                                },
                                {
                                    "type": "Favorite"
                                },
                                {
                                    "type": "Flagged"
                                },
                                {
                                    "type": "Locked"
                                },
                                {
                                    "type": "Unsaved"
                                }
                            ],
                            "statuses": [
                                {
                                    "title": "Basic",
                                    "text": "Error",
                                    "state": "Error"
                                },
                                {
                                    "title": "Advanced",
                                    "text": "Success",
                                    "state": "Success",
                                    "icon": "sap-icon://alert"
                                },
                                {
                                    "title": "Ultimate",
                                    "text": "Warning",
                                    "state": "Warning",
                                    "active": true
                                }
                            ],
                            "selected": false
                        },
                        {
                            "fileName": "Picture of a woman.png",
                            "mimeType": "image/png",
                            "thumbnailUrl": "test-resources/sap/m/images/Woman_04.png",
                            "url": "test-resources/sap/m/images/Woman_04.png",
                            "uploadState": "Complete"
                        }
                    ]
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
            _callInvoiceHeader: async function (zinvoicrId) {
                let sObjectPath = this.getOwnerComponent().getModel().createKey("ZC_Invoice", {
                    ZinvoicrId: zinvoicrId,
                });
                let oDataGetGetInvoiceHeader = {};
                try {
                    oDataGetGetInvoiceHeader = await this.getCallToBackendBase().callGetInvoiceHeader(this, sObjectPath);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setData(oDataGetGetInvoiceHeader);

                    let oHelpArray = {};
                    oHelpArray.results = [];
                    oHelpArray.results.push(oDataGetGetInvoiceHeader.to_invoiceAtt);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData(oDataGetGetInvoiceHeader.to_invoiceAtt);
                    // this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData(this._helpdata());

                    let data;


                    this.getModel(this.CO_ODATA_INVOICE_ITEM_MODEL).setData(oDataGetGetInvoiceHeader.to_items);
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData(oDataGetGetInvoiceHeader.to_invItemAtt);
                    return;
                } catch (error) {
                    await this.messageBoxError(error);
                }
            }

        });
    });
