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
            CO_LOCAL_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL: "invoiceLocalAttachInCompleteModel",
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
                this._oUploadSetOthersAttachment = this.getView().byId('uploadSetOthersAttachment');
                this._oUploadSetAttachment = this.getView().byId('uploadSetAttachment');
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
                this.setModel(new JSONModel(), this.CO_LOCAL_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL);
                this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData({ results: [] });

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

            onSelectionChange: function (oEvent) {

            },
            onTypeMissmatch: function (oEvent) {

            },
            onUploadComplete: function (oEvent) {

            },
            onBeforeUploadStarts: function (oEvent) {

            },
            onUploadTerminated: function (oEvent) {

            },


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
                let oFile;
                let oNewAttachmet = {};
                let oNewAttachmet2 = {};                
                let oParameter;
                oParameter = oEvent.getParameter("item");

                let oSource = oEvent.getSource();
                let i
                if (this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.length === 0 ) {

                     i = this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.length + 1;
                } else {
                    i = Math.max(...this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.map(o => o.Counter)) + 1;
                }

                oNewAttachmet2.Filename = oParameter.getProperty("fileName");
                oNewAttachmet2.Mimetype = oParameter.getProperty("mediaType");
                oNewAttachmet2.UploadState = oParameter.getProperty("uploadState");
                oNewAttachmet2.Counter =  i
               
                oParameter.setProperty("thumbnailUrl",i);
       

                oFile = oEvent.getParameter("item").getFileObject();



                let reader = new FileReader();
                oParameter.setBindingContext(
                    new sap.ui.model.Context(
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL), "/results/0"),
                    this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL)


                reader.onload = function (e) {
                    let raw = e.target.result;
                    let binaryString = raw;
                    let Content = btoa(binaryString);
                   
                    let dataset = JSON.parse(JSON.stringify(this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData()));
               
        this.getModel(this.CO_LOCAL_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData(dataset);
    
                    for (let index = 0; index < this.getModel(this.CO_LOCAL_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.length; index++) {
                        let iCounter = Number(this.getModel(this.CO_LOCAL_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results[index].Counter);
                        //Pokud najde,pak je to ok
                        let bExist;                    
                        bExist = oSource.getIncompleteItems().some(function(oIncomplereItem) {
                            return Number(oIncomplereItem.getProperty("thumbnailUrl")) === iCounter
                        } );
                        if(bExist === true) {
                            //našel
                        } else {
                         //je potřeba smaazt json
                         this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.splice(Number(index), 1);
                        }
    
                    }  
                  
              


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
                    sap.m.MessageToast.show("error");
                };

                reader.readAsBinaryString(oFile);



             
             

            },
            onBeforeItemEdited: function (oEvent) {

            },
            onBeforeItemRemove: function (oEvent) {
                // this._deleteIncompleteHeaderAttachItem(oEvent.getParameter("item"));
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

            onTestAttach: function (oEvent) {
                let oUploadSet = this.byId("uploadSetAttachment");
                oUploadSet.upload();
            },
            onSaveInvoiceChange: function (oEvent) {
                //Musí proběhnout kontrola, zda byla smazána položka 
                //pokud ano, je potřeba manuálně upravit json
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

                if (this._oUploadSetAttachment.getIncompleteItems().length > 0) {
                    for (let index = 0; index < this._oUploadSetAttachment.getIncompleteItems().length; index++) {
                        this._oUploadSetAttachment.removeIncompleteItem(this._oUploadSetAttachment.getIncompleteItems()[index])
                    }

                }
                let oHelpArray = {};
                oHelpArray.results = [];
                this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData(oHelpArray);

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
            _deleteIncompleteHeaderAttachItem: function (oItem) {
                let aSelectedItems = [];
                let aItem = [];
                let oTable = {};
                let oSelectedItem = {};
                let oBindingContext = {};
                let iIndex;
                let i;


                aItem = this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results;


                oBindingContext = oItem.getBindingContext(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL);
                iIndex = oBindingContext.getPath().split("/")[2];
                aItem.splice(Number(iIndex), 1);

                this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).updateBindings();

            },
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
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_MODEL).setData(oDataGetGetInvoiceHeader.to_items);
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData(oDataGetGetInvoiceHeader.to_invItemAtt);
                    return;
                } catch (error) {
                    await this.messageBoxError(error);
                }
            }

        });
    });
