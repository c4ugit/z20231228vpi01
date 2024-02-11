sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/Device",
    "sap/ui/model/Sorter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter, Device,Sorter) {
        "use strict";

        return BaseController.extend("zmmvpi01.app.z20231228mmvpi01.controller.OverViewVendorInvoice", {

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


            CO_VIEW_MODEL: "vendorInvoiceOverViewModel",
            CO_ODATA_XX_MODEL: "requestModel",
            CO_REQUEST_TABLE_ID: "overviewvendorinvoiceTableID",
            CO_OVERVIEW_VENDOR_PAGE_ID: "overviewvendorinvoicePage",
            CO_SMART_TABLE_INVOICE_ID: "smartTableInvoiceID",
            CO_SMART_FILTER_INVOICE_ID: "smartFilterBarInc",












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
                this._oSmartTable = this.getView().byId(this.CO_SMART_TABLE_INVOICE_ID);
                this._oSmartFilter = this.getView().byId(this.CO_SMART_FILTER_INVOICE_ID);
                this.getRouter().getRoute(this.getConstantBase().getConstants().ROUTE_OVERVIEW_VENDOR_INVOICE).attachPatternMatched(this._onMasterMatched, this);

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
            onNewInvoiceAttachCreatePressed: function (oEvent) {
                //    this.messageBoxInformation("Logika pro vybrané tlačítko nebyla ještě implementována");
                this._showCreateNewVendorInvoice();
            },
            onBind: function (oEvent) {
                this._bindSmartTable(oEvent);
            },
            onSFBInitialized: function () {
                this._sFBInitialized();
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
            _onMasterMatched: function (oEvent) {
                this.getModel(this.getConstantBase().getConstants().APP_VIEW_MODEL).setProperty("/layout", "OneColumn");
                this.getModel().metadataLoaded().then(function () {
                    this._oComponent._PromiseDataLoadedInit.then(function () {
                        this._procesOnMatchedScenario();
                    }.bind(this));
                }.bind(this));
            },
            _procesOnMatchedScenario: function () {
               
                this._rebindSmartTable();


            },
            _rebindSmartTable: function (oEvent) {
                 //10 Kontrola zda byl filtri inicializován
                if (this._oSmartFilter.isInitialised() === true) {
                    this._oSmartTable.rebindTable();
                } else {
                    this._oComponent._PromiseSmartFilterInitialized = new Promise(function (fnResolve) {
                        this._oComponent._fnResolveSmartFilterInitialized = fnResolve;
                    }.bind(this)); this._oComponent._PromiseSmartFilterInitialized.then(function () {
                        this._oSmartTable.rebindTable();
                    }.bind(this));
                }
            },
            _bindSmartTable: function (oEvent) {
        
                oEvent.getParameter("bindingParams").sorter.push(new Sorter("Zinvoicr_Id", true));
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
            _showDetailVendorInvoice: function (oItem) {
                let bReplace = !Device.system.phone;
                // set the layout property of FCL control to show two columns
                this.getModel(this.getConstantBase().getConstants().APP_VIEW_MODEL).setProperty("/layout", "TwoColumnsMidExpanded");
                this.getRouter().navTo(this.getConstantBase().getConstants().ROUTE_DETAIL_VENDOR_INVOICE, {
                    objectId: oItem.getBindingContext().getProperty("Zinvoicr_Id")
                }, bReplace);
            },
            _showCreateNewVendorInvoice: function (oItem) {
                let bReplace = !Device.system.phone;
                this.getModel(this.getConstantBase().getConstants().APP_VIEW_MODEL).setProperty("/layout", "OneColumn");
                this.getRouter().navTo(this.getConstantBase().getConstants().ROUTE_CREATE_VENDOR_INVOICE, {}, bReplace);
            },

            _sFBInitialized: function (oEvent) {
                // var oJSONData = {
                //     Erdat: {
                //         items: [],
                //         ranges: [{
                //             exclude: false,
                //             keyField: "Erdat",
                //             operation: "GE",
                //             value1: this.getModel(this.csGlobalModelHelp).getProperty("/dAkceStartDatumDefault"),
                //             value2: this.getModel(this.csGlobalModelHelp).getProperty("/dAkceStartDatumDefault"),
                //             // value2:{}
                //         }
                //         ]
                //     }
                // };
                // this._oSmartFilterBar.setFilterData(oJSONData);
                if (this._oComponent._fnResolveSmartFilterInitialized) {
                    this._oComponent._fnResolveSmartFilterInitialized();
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

        });
    });
