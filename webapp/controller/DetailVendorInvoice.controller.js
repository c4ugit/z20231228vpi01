sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/m/library",
    "sap/ui/Device"




],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter, MobileLibrary, Device) {
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
                this._oUploadSetOthersAttachment = this.getView().byId('uploadSetOthersAttachment');
                this._oUploadSetAttachment = this.getView().byId('uploadSetAttachment');
                this._oUploadSetAttachmentVBOX = this.getView().byId('uploadSetAttachmentVBOX');
                // this._oUploadSetOthersAttachment.getList().setMode(MobileLibrary.ListMode.MultiSelect);
                // this._oUploadSetAttachment.getList().setMode(MobileLibrary.ListMode.MultiSelect);


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
                this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData({ results: [] });
                this.getModel(this.CO_ODATA_INVOICE_ITEM_MODEL).setData({ results: [] });

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




            onOpenAttachmentPressedIT: function (oEvent) {

            },
            onRemoveAttachmentPressedIT: function (oEvent) {
                this._removeAttachmentPressedIT(oEvent);
            },
            onBeforeItemAddedIT: function (oEvent) {

            },
            onAfterItemAddedIT:  function (oEvent) {
                this._afterItemAddedIT(oEvent);      
            },
            onBeforeItemEditedIT: function (oEvent) {

            },
            onBeforeItemRemoveIT: function (oEvent) {
                this._beforeItemRemoveIT(oEvent);
               
            },
            onFileNameLengthExceededIT: function (oEvent) {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_NAME_LENGTH_EXCEEDED_IT, false, this);
            },
            onFileSizeExceededIT: function (oEvent) {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_NAME_SIZE_EXCEEDED_IT, false, this);
            },
            onFileTypeMismatchIT: function (oEvent) {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_TYPE_MISMATCH_EXCEEDED_IT, false, this);
            },
            onUploadCompletedIT: function (oEvent) {

            },
            onBeforeUploadTerminationIT: function (oEvent) {

            },
            onBeforeUploadStartsIT: function (oEvent) {

            },




            onOpenAttachmentPressed: function (oEvent) {

            },
            onRemoveAttachmentPressed:  function (oEvent) {
             
                this._removeAttachmentPressed(oEvent,oEvent.getSource(),oEvent.getParameter("item"));
            


            },
            onBeforeItemRemove:  function (oEvent) {
        
                    
                this._beforeItemRemove(oEvent,oEvent.getSource(),oEvent.getParameter("item"));
            },
            onBeforeItemAdded: function (oEvent) {

            },
            onAfterItemAdded: async function (oEvent) {
                this._afterItemAdded(oEvent);                
            },
            onBeforeItemEdited: function (oEvent) {

            },
            onFileNameLengthExceeded: function (oEvent) {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_NAME_LENGTH_EXCEEDED, false, this);
            },
            onFileSizeExceeded: function (oEvent) {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_NAME_SIZE_EXCEEDED, false, this);
            },
            onFileTypeMismatch: function (oEvent) {
                this.getAttachmentBase().setPropertyAttachFC(this.getConstantBase().getConstants().FILE_TYPE_MISMATCH_EXCEEDED, false, this);
            },
            onUploadCompleted: function (oEvent) {

            },
            onBeforeUploadTermination: function (oEvent) {

            },
            onBeforeUploadStarts: function (oEvent) {

            },


            // onTestAttach: function (oEvent) {
            //     let oUploadSet = this.byId("uploadSetAttachment");
            //     oUploadSet.upload();
            // },
            onSaveInvoiceChange: function () {
                this._saveInvoiceChange();
            },

            // onUploadSelectedButton: function () {
            //     let oUploadSet = this.byId("UploadSetAttachment");

            //     oUploadSet.getItems().forEach(function (oItem) {
            //         if (oItem.getListItem().getSelected()) {
            //             oUploadSet.uploadItem(oItem);
            //         }
            //     });
            // },




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
                //10
                this._setInitStep();
            

                //20 Načtení dat z backendu.
                await this._callInvoiceHeader(
                    sInvoiceId
                )
                //30Next steps...
                this._nextStepsAfterDataCalled();
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
            _setInitStep:function () {
                if (this._oUploadSetAttachment.getIncompleteItems().length > 0) {
                    for (let index = this._oUploadSetAttachment.getIncompleteItems().length - 1; index >= 0; index--) {
                        this._oUploadSetAttachment.removeIncompleteItem(this._oUploadSetAttachment.getIncompleteItems()[index])
                    }
                }
                if (this._oUploadSetOthersAttachment.getIncompleteItems().length > 0) {
                    for (let index = this._oUploadSetOthersAttachment.getIncompleteItems().length - 1; index >= 0; index--) {
                        this._oUploadSetOthersAttachment.removeIncompleteItem(this._oUploadSetOthersAttachment.getIncompleteItems()[index])
                    }
                }
                this.getAttachmentBase().initFCFields(this);


                let oHelpArray1 = {};
                oHelpArray1.results = [];
                let oHelpArray2 = {};
                oHelpArray2.results = [];
                let oHelpArray3 = {};
                oHelpArray3.results = [];
                let oHelpArray4 = {};
                oHelpArray4.results = [];
                let oHelpArray5 = {};
                oHelpArray5.results = [];

                this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setData({});
                this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData(oHelpArray1);
                this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).setData(oHelpArray2);
                this.getModel(this.CO_ODATA_INVOICE_ITEM_MODEL).setData(oHelpArray3);
                this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData(oHelpArray4);
                this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).setData(oHelpArray5);
            },
            _beforeItemRemoveIT:function (oEvent) {
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
            _beforeItemRemove: async function(oEvent,source,item) {
           
                
                oEvent.preventDefault();
                // let bDelete = await this.messageBoxWarning2("Pozor, následujícím potvrzením smažete přílohu.");
                // if (bDelete === false) {
                //     return;
                // }

                source.removeIncompleteItem(item);
                let oItem = item.getBindingContext(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--) {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Counter === Number(oItem.Counter)) {
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        break;
                    }
                }
                // oEvent2.getParameters().item.destroy();
                item.destroy();
            },
            _afterItemAdded: async function (oEvent) {
                let bCheckPropertiesAttachFC;
                let oSource = oEvent.getSource();
                let oParameter = oEvent.getParameter("item");

                //5Kontrola, zda je možné nahrávat přílohy.
                if (oEvent.getSource().getProperty("uploadEnabled") === false) {
                    this._oUploadSetAttachment.removeIncompleteItem(oParameter);
                    return;
                }
                //08kontrola, kolik je nahraných příloh, může být maximálně 1
                  if (oSource.getIncompleteItems().length > 1)
                    {
                        if (this._oUploadSetAttachment.getIncompleteItems().length > 0)
                        {
                            for (let index = 0; index < this._oUploadSetAttachment.getIncompleteItems().length - 1; index++)
                            {
                                this._oUploadSetAttachment.removeIncompleteItem(this._oUploadSetAttachment.getIncompleteItems()[index])
                            }
                        }
                        await this.messageBoxWarning(this.getResourceBundle().getText("theAttachmentHasAlreadyBeenUploaded."));
                        return;
                    } else
                    {
    
                    }
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
                    await this.messageBoxWarning(this.getResourceBundle().getText("theAttachmentHasAlreadyBeenUploaded."));
                    return;
                } else {

                }

                //15kontrala, zda je příloha ok:
                bCheckPropertiesAttachFC = await this.getAttachmentBase().checkPropertiesAttachFC(this);
                if (bCheckPropertiesAttachFC === false) {
                    this._oUploadSetAttachment.removeIncompleteItem(oParameter);
                    this.getAttachmentBase().initFCFields(this);
                    return;
                };

                let oFile;
                let oNewAttachmet = {};

                let i;
                i = 1;


                oFile = oParameter.getFileObject();

                oParameter.setBindingContext(
                    new sap.ui.model.Context(
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL), "/results/0"),
                    this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL)

                let reader = new FileReader();

                reader.onload = function (e) {
                    // let raw = e.target.result;
                    // let binaryString = raw;
                    // let Content = btoa(binaryString);


                    // oNewAttachmet.Filename = oParameter.getProperty("fileName");
                    // oNewAttachmet.Mimetype = oParameter.getProperty("mediaType");
                    // oNewAttachmet.UploadState = oParameter.getProperty("uploadState");
                    // oNewAttachmet.Counter = i;
                    // oNewAttachmet.Content = Content;
                    // this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.push(oNewAttachmet);
                    // this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).updateBindings(true);
                    // var oLocalData.content = "data:image/jpeg;base64," + base64;
                    this.getFileReaderBase().onLoadFileReader(e, this, oParameter, i);
                }.bind(this);

                reader.onerror = function (e) {
                    this.messageToastShow("error");
                    this.getFileReaderBase().onLoadFileReader(e, this, oParameter, i);
                };
                reader.readAsBinaryString(oFile);
            },

            _afterItemAddedIT: async function (oEvent) {
                let bCheckPropertiesAttachFC;
                let oFile;
                let oNewAttachmet = {};
                let oNewAttachmet2 = {};
                let oParameter;
                oParameter = oEvent.getParameter("item");


                //5Kontrola, zda je možné nahrávat přílohy.
                if (oEvent.getSource().getProperty("uploadEnabled") === false) {
                    this._oUploadSetOthersAttachment.removeIncompleteItem(oParameter);
                    return;
                }
                //10kontrala, zda je příloha ok:
                bCheckPropertiesAttachFC = await this.getAttachmentBase().checkPropertiesAttachFC(this);
                if (bCheckPropertiesAttachFC === false) {
                    this._oUploadSetOthersAttachment.removeIncompleteItem(oParameter);
                    this.getAttachmentBase().initFCFields(this);
                    return;
                };

                //15 Odvození pořadového čisla nově přidané přílohy
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

                oFile = oParameter.getFileObject();

                oParameter.setBindingContext(
                    new sap.ui.model.Context(
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL), "/results/0"),
                    this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL)

                let reader = new FileReader();

                reader.onload = function (e) {
                    // let raw = e.target.result;
                    // let binaryString = raw;
                    // let Content = btoa(binaryString);


                    // oNewAttachmet.Filename = oParameter.getProperty("fileName");
                    // oNewAttachmet.Mimetype = oParameter.getProperty("mediaType");
                    // oNewAttachmet.UploadState = oParameter.getProperty("uploadState");
                    // oNewAttachmet.Counter = i;
                    // oNewAttachmet.Content = Content;
                    // this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.push(oNewAttachmet);
                    // this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).updateBindings(true);
                    this.getFileReaderBase().onLoadFileReaderIT(e, this, oParameter, i);
                    // var oLocalData.content = "data:image/jpeg;base64," + base64;
                }.bind(this);
                reader.onerror = function (e) {
                    this.messageToastShow("error");
                    this.getFileReaderBase().onLoadFileReaderIT(e, this, oParameter, i);
                };

                reader.readAsBinaryString(oFile);
            },
            _removeAttachmentPressedIT: function (oEvent) {
                let oSource;
                oSource = oEvent.getSource();
                oEvent.preventDefault();
                oSource.getParent().removeItem(oEvent.getParameter("item"));
                let oItem = oEvent.getParameter("item").getBindingContext(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--) {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Zinvoicr_Id === oItem.Zinvoicr_Id && oSelectedItem.Attach_Id === oItem.Attach_Id) {
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).updateBindings(true);

                        this._prepareDeleteInvoiceAttachIT(oSelectedItem.Zinvoicr_Id, oSelectedItem.Attach_Id);
                        break;
                    }
                }
                oEvent.getParameters().item.destroy();
            },
            _removeAttachmentPressed: async function (oEvent,source,item) {
                oEvent.preventDefault();

                let bDelete = await this.messageBoxWarning2(this.getResourceBundle().getText("warningAttachmentWillBeDeleted"));
                if (bDelete === false) {
                    return;
                }
                source.getParent().removeItem(item);

                let oItem = item.getBindingContext(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getObject();

                let i;
                for (i = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results.length - 1; i >= 0; i--) {
                    let oSelectedItem;
                    oSelectedItem = this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results[i];

                    if (oSelectedItem.Zinvoicr_Id === oItem.Zinvoicr_Id) {
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).getData().results.splice(Number(i), 1);
                        this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).updateBindings(true);
                        this._prepareDeleteInvoiceAttach(oSelectedItem.Zinvoicr_Id);
                        break;
                    }
                }
               item.destroy();
            },
            _saveInvoiceChange: function () {
                this._prepraveSaveInvoiceChange();
            },
            _prepraveSaveInvoiceChange: function () {
                let sPath;
                let oInvoiceDataObject = {};
                oInvoiceDataObject.Zinvoicr_Id = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getProperty("/Zinvoicr_Id");
                oInvoiceDataObject.Description = this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getProperty("/Description");

                oInvoiceDataObject.to_invoiceAtt = this.getDataOperationBase().loopDataTableInvoiceAtt(
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results,
                    oInvoiceDataObject.Zinvoicr_Id
                );
                oInvoiceDataObject.to_items = this.getDataOperationBase().loopDataTabletoItems(
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_MODEL).getData().results);
                oInvoiceDataObject.to_invItemAtt = this.getDataOperationBase().loopDataTableInvItemAtt(
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).getData().results,
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results,
                    oInvoiceDataObject.Zinvoicr_Id);

                sPath = "/ZC_Invoice";
                this._callSaveInvoiceChange(sPath, oInvoiceDataObject);
            },
            _prepareDeleteInvoiceAttachIT: function (Zinvoicr_Id, Attach_Id) {
                let sPath;

                sPath = this.getModel().createKey("ZC_InvItems", {
                    Zinvoicr_Id: Zinvoicr_Id,
                    Attach_Id: Attach_Id
                });

                this._callDeleteInvoiceAttachIT("/" + sPath,Zinvoicr_Id);

            },
            _prepareDeleteInvoiceAttach: function (Zinvoicr_Id) {
                let sPath;

                sPath = this.getModel().createKey("ZC_InvoiceAtt", {
                    Zinvoicr_Id: Zinvoicr_Id
                });

                this._callDeleteInvoiceAttach("/" + sPath,Zinvoicr_Id);

            },

            _closeDetailVendorInvoice: function () {
                this.getModel(this.getConstantBase().getConstants().APP_VIEW_MODEL).setProperty("/layout", "OneColumn");
                this.getRouter().navTo(this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE);
            },
            _nextStepsAfterDataCalled: function () {
                //10 nastavit visible false na EDIT
                for (let index = 0; index < this._oUploadSetAttachment.getItems().length; index++) {
                    //10_1
                    this._oUploadSetAttachment.getItems()[index].setVisibleEdit(false);
                    //10_2 pokud je status jiný než 1, pak i visible remove
                    if (this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getProperty("/Status") === "1") {
                        this._oUploadSetAttachment.getItems()[index].setVisibleRemove(true);

                    } else {
                        this._oUploadSetAttachment.getItems()[index].setVisibleRemove(false);
                    }
                }
                for (let index = 0; index < this._oUploadSetOthersAttachment.getItems().length; index++) {
                    //10_1
                    this._oUploadSetOthersAttachment.getItems()[index].setVisibleEdit(false);
                    //10_2 pokud je status jiný než 1, pak i visible remove
                    if (this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).getProperty("/Status") === "1") {
                        this._oUploadSetOthersAttachment.getItems()[index].setVisibleRemove(true);

                    } else {
                        this._oUploadSetOthersAttachment.getItems()[index].setVisibleRemove(false);
                    }
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
                    Zinvoicr_Id: zinvoicrId,
                });
                let oDataGetGetInvoiceHeader = {};
                try {
                    oDataGetGetInvoiceHeader = await this.getCallToBackendBase().callGetInvoiceHeader(this, sObjectPath);
                    let oHelpArray = {};
                    oHelpArray.results = [];
                    oHelpArray.results.push(oDataGetGetInvoiceHeader.to_invoiceAtt);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_ATTACH_MODEL).setData(oDataGetGetInvoiceHeader.to_invoiceAtt);
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_MODEL).setData(oDataGetGetInvoiceHeader.to_items);
                    this.getModel(this.CO_ODATA_INVOICE_ITEM_ATTACH_MODEL).setData(oDataGetGetInvoiceHeader.to_invItemAtt);


                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/Deleteflag", oDataGetGetInvoiceHeader.Deleteflag);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/Description", oDataGetGetInvoiceHeader.Description);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/Erdat", oDataGetGetInvoiceHeader.Erdat);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/Ernam", oDataGetGetInvoiceHeader.Ernam);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/Erzet", oDataGetGetInvoiceHeader.Erzet);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/ShortDescr", oDataGetGetInvoiceHeader.ShortDescr);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/Status", oDataGetGetInvoiceHeader.Status);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/Zinvoicr_Id", oDataGetGetInvoiceHeader.Zinvoicr_Id);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/Belnr", oDataGetGetInvoiceHeader.Belnr);
                    this.getModel(this.CO_ODATA_INVOICE_HEADER_MODEL).setProperty("/StatusName", oDataGetGetInvoiceHeader.StatusName);



                    return;
                } catch (error) {
                    await this.messageBoxError(error);
                }
            },
            _callSaveInvoiceChange: async function (sPath, oData) {
                let bReplace = !Device.system.phone;
                let oDataConfirmSaveInvoice = {};
                try {
                    oDataConfirmSaveInvoice = await this.getCallToBackendBase().callSaveNewInvoice(sPath, oData, this);
                    // await this.messageToastShow(this.getResourceBundle().getText("theSaveWasSuccessful"), 1200);
                    await this.messageBoxSuccess(this.getResourceBundle().getText("theSaveWasSuccessful"));
                    this.getRouter().navTo(
                        this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE,
                        {
                        },
                        bReplace
                    );

                } catch (error) {
                    await this.messageBoxError(error);
                    this._setInitStep();
                    await this._callInvoiceHeader(oData.Zinvoicr_Id);
                    this._nextStepsAfterDataCalled();

                }
            },
            _callDeleteInvoiceAttachIT: async function (sPath,zinvoicrId) {
                // let oDataConfirmDeleteInvoiceIT = {};
                try {
                    await this.getCallToBackendBase().callDeleteInvoiceAttachmentIT(sPath, this);
                    // await this.messageToastShow(this.getResourceBundle().getText("theAttachmentWasDeleted"), 1200);
                    await this.messageBoxSuccess(this.getResourceBundle().getText("theAttachmentWasDeleted"));
                } catch (error) {
                    await this.messageBoxError(error);
                    this._setInitStep();
                    await this._callInvoiceHeader(zinvoicrId);
                    this._nextStepsAfterDataCalled();
                }
            },
            _callDeleteInvoiceAttach: async function (sPath,zinvoicrId) {
                let bReplace = !Device.system.phone;
                try {
                    await this.getCallToBackendBase().callDeleteInvoiceAttachment(sPath, this);
                    // await this.messageToastShow(this.getResourceBundle().getText("theAttachmentWasDeleted"), 1200);
                    await this.messageBoxSuccess(this.getResourceBundle().getText("theAttachmentWasDeleted"));
                    this.getRouter().navTo(
                        this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE,
                        {
                        },
                        bReplace
                    );
                } catch (error) {
                    await this.messageBoxError(error);
                    this._setInitStep();
                    await this._callInvoiceHeader(zinvoicrId);
                    this._nextStepsAfterDataCalled();
                }
            }

        });
    });
