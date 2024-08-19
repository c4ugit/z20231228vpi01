sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/Device",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter, Device, Sorter, Filter, FilterOperator) {
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
            CO_ODATA_HELP_USER_MODEL: "helpUserModel",
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

                let oViewModel;
                oViewModel = new JSONModel({
                    busy: false,
                    ebeln: "",
                    pasw: "",

                });
                this.setModel(oViewModel, this.CO_VIEW_MODEL);
                this.setModel(new JSONModel(), this.CO_ODATA_HELP_USER_MODEL);

                this._oComponent = this.getOwnerComponent();
                this._oSmartTable = this.getView().byId(this.CO_SMART_TABLE_INVOICE_ID);
                this._oSmartFilter = this.getView().byId(this.CO_SMART_FILTER_INVOICE_ID);
                this._oSmartFilter.setShowGoOnFB(false);
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
            onConfirmEbelnLogon: function () {
                this._confirmEbelnLogon();
            },
            onCancelEbelnLogon: function (oEvent) {
                this._cancelEbelnLogon(oEvent);
            },
            onCloseEbelnLogon: function (oEvent) {
                this._closeEbelnLogon(oEvent);
            },

            onPressOpenHelpForUser: function () {
                this._getDialogHelpForUser(this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_HELP_FOR_USER).getData());
            },
            onConfirmHelpForUser: function () {
                this._confirmHelpForUser();
            },
            onCancelHelpForUser: function (oEvent) {
                this._cancelHelpForUser(oEvent);
            },
            onCloseHelpForUser: function (oEvent) {
                this._closeHelpForUser(oEvent);
            },

            onDeleteCookie: function (oEvent) {
                this._deleteCookieRefresh();
            },
            onBeforeExport: function(oEvent) {
                this._beforeExport(oEvent);
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
            _procesOnMatchedScenario: async function () {

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


                if (sUserType === '04' || sUserType === '05') {
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
                        this._setFilterBindSmartTable(oLifnr.Lifnr);
                        this._fnResolveWaitGetLifnr();
                    } catch (error) {
                        // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", false);
                        return;
                    }

                    //10a - pokračuj dále
                    // this._getDialogEbelnLogon();
                } else {
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
                            this._setFilterBindSmartTable(oLifnr.Lifnr);
                            this._fnResolveWaitGetLifnr();
                        } catch (error) {
                            // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", false);
                            return;
                        }
                    } else if(sUserType === '02' || sUserType === '03'){
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
                            this._oSmartFilter.setShowGoOnFB(true);
                            this.setHeaderLifnr(oLifnr);
                            this._setFilterBindSmartTable(oLifnr.Lifnr);
                            this._fnResolveWaitGetLifnr();                            
                        } catch (error) {
                            // this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_USER_INFO).setProperty("/bEnable", false);
                            return;
                        }
                    }.bind(this)).catch(async function (sErrorText) {
                        await this.messageBoxError(sErrorText);
                        this._oSmartFilter.setShowGoOnFB(false);
                    }.bind(this));
                }

                this._PromiseWaitGetLifnr.then(function () {
                    this._rebindSmartTable();
                    this._oSmartFilter.setShowGoOnFB(true);
                }.bind(this)).catch(async function (sErrorText) {

                    await this.messageBoxError(sErrorText);
                    let oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                    oCrossAppNavigator.toExternal({
                        target: {
                            shellHash: "#Shell-home"
                        }
                    });
                }.bind(this));
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
               
                // if(this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_HELP).getProperty("/oFilterForSmartTable")){
                    
                // }
                if (Object.keys(this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_HELP).getProperty("/oFilterForSmartTable")).length === 0) {
                } else {
                    oEvent.getParameter("bindingParams").filters.push(this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_HELP).getProperty("/oFilterForSmartTable"));
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
            _beforeExport: function (oEvent) {

            },
            _deleteCookieRefresh: function (oFifnr) {
                var that = this;
                this.deleteCookie();
                var oHashChanger = this.getRouter().oHashChanger;
                oHashChanger.setHash("");
                this.getModel().removeData();
                window.location.reload();

            },
          
            _setFilterBindSmartTable: function (lifnr) {
                let oFilters;
                oFilters = {};
                oFilters = new Filter("Lifnr", FilterOperator.EQ, lifnr);
                this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_HELP).setProperty("/oFilterForSmartTable", oFilters);
            },
         
         
            _setFilterBindSmartTableBasedUserType(usertype) {
                let oFilters, aFiltersMulti;
                oFilters = {};
                aFiltersMulti = [];

                switch (usertype) {
                    case '01':
                        oFilters = new Filter("UserType", FilterOperator.EQ, "01");
                        break;
                    case '02':
                        oFilters = new Filter("UserType", FilterOperator.EQ, "02");
                        break;
                    case '03':
                        oFilters = new Filter("UserType", FilterOperator.EQ, "03");
                        break;
                    default:
                        break;
                }
                // aFilters.push(new Filter({
                //     and: false,
                //     filters: aFiltersMulti

                // }));

                this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_HELP).setProperty("/oFilterForSmartTable", oFilters);

            },

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
            /* begin:  Dialog Get UserHelp                                 */
            /* =========================================================== */
            _getDialogHelpForUser: async function (oDataHelp) {

                let oHelpForUser;
                this.getModel(this.CO_ODATA_HELP_USER_MODEL).setData(oDataHelp);
                oHelpForUser = await this.getDialogBase().getDialogHelpForUser(
                    this,
                    this.CO_ODATA_HELP_USER_MODEL,
                    this.getModel(this.CO_ODATA_HELP_USER_MODEL)                
                );
                this.getDialogBase().openDialog(oHelpForUser);


            },
            _cancelHelpForUser: async function (oEvent) {
                this.getDialogBase().closeDialog(await this.getDialogBase().getDialogHelpForUser(this));

            },
            _closeHelpForUser: async function (oEvent) {

            },
            _confirmHelpForUser: function () {
                let oHelpForUser;
                oHelpForUser = this.getDialogBase().onConfirmHelpForUser(this);          

            },
            _deleteHelpForUser: async function () {
                this.getDialogBase().clearEbelnLogonDialog(await this.getDialogBase().getDialogEbelnLogon(this));

            },

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
            _callCheckEbeln: async function (ebeln, passw) {
                let oDataConfirmEbelnAuthen;
                let sEbeln;
                let sPassw;
                sEbeln = ebeln;
                sPassw = passw;
                try {
                    oDataConfirmEbelnAuthen = await this.getCallToBackendBase().callCheckEbeln(this, ebeln, passw);
                    if (oDataConfirmEbelnAuthen.check === true) {
                        this._oSmartFilter.setShowGoOnFB(true);
                        this._fnResolveCheckEbeln();

                        this.setCookie("ebeln", sEbeln, 0.0208);
                        this.setCookie("password", sPassw, 0.0208);

                    } else {
                        this._oSmartFilter.setShowGoOnFB(false);
                        this._fnRejectCheckEbeln("Oprávnění bylo neúspěšné");
                    }
                } catch (error) {
                    await this.messageBoxError(error);
                }
            },
            _callGetLifnr: async function (ebeln, passw, usetype) {
                let oDataLifnr;

                try {
                    oDataLifnr = await this.getCallToBackendBase().callGetLifnr(this, ebeln, passw, usetype);
                    return oDataLifnr;

                } catch (error) {
                    await this.messageBoxError(error);
                }
            },

        });
    });
