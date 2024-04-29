sap.ui.define([
    "./DataOperation",
    "sap/ui/model/Sorter"
], function (DataOperation,Sorter) {
    "use strict";

    return {
        callGetInvoiceHeader: function (that, sObjectPath) {
            return new Promise(function (resolve, reject) {
                let oParam = {};

                oParam = DataOperation.getListOfCallVar();

                that._oComponent._PromiseGetInvoiceHeader = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveGetInvoiceHeader = fnResolve;
                    that._oComponent._fnRejectGetInvoiceHeader = fnReject;
                }.bind(that));
                that._oComponent._PromiseGetInvoiceHeader.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

               
                oParam.sNamePromise = "2";
                oParam.sObjectPath = "/" + sObjectPath;
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.groupId = "2";
                oParam.localViewModel = false;
                oParam.scope = that;
                oParam.component = that._oComponent;
                oParam.sExpandParameter = "to_invItemAtt,to_invoiceAtt,to_items";

                DataOperation.dataOperation(oParam);
            })
        },
        callGetInvoiceList: function (that, sObjectPath) {
            return new Promise(function (resolve, reject) {
                let oParam = {};

                oParam = DataOperation.getListOfCallVar();

                that._oComponent._PromiseGetInvoiceList = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveGetInvoiceList = fnResolve;
                    that._oComponent._fnRejectGetInvoiceList = fnReject;
                }.bind(that));
                that._oComponent._PromiseGetInvoiceList.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));                    
                }.bind(that));

             
                oParam.sNamePromise = "3";
                oParam.sObjectPath = "/" + sObjectPath;
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.groupId = "2";
                oParam.localViewModel = false;
                oParam.scope = that;
                oParam.component = that._oComponent;             

                DataOperation.dataOperation(oParam);
            })
        },
        callBudgetRequest: function (that) {
            return new Promise(function (resolve, reject) {
                let oParamBud = {};
                oParamBud = DataOperation.getListOfCallVar();
                let oParamBudPrev = {};
                oParamBudPrev = DataOperation.getListOfCallVar();
                let oParamReq = {};
                oParamReq = DataOperation.getListOfCallVar();
                let oParamReqOld = {};
                oParamReqOld = DataOperation.getListOfCallVar();
                let oParamReq01 = {};
                oParamReq01 = DataOperation.getListOfCallVar();

                that._oComponent._PromiseBudgetOverView = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveBudgetOverView = fnResolve;
                    that._oComponent._fnRejectBudgetOverView = fnReject;
                }.bind(that));
                that._oComponent._PromiseBudgetOverViewPrev = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveBudgetOverViewPrev = fnResolve;
                    that._oComponent._fnRejectBudgetOverViewPrev = fnReject;
                }.bind(that));
                that._oComponent._PromiseRequestBudget = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveRequestBudget = fnResolve;
                    that._oComponent._fnRejectRequestBudget = fnReject;
                }.bind(that));
                that._oComponent._PromiseRequestBudgetOLD = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveRequestBudgetOLD = fnResolve;
                    that._oComponent._fnRejectRequestBudgetOLD = fnReject;
                }.bind(that));
                that._oComponent._PromiseRequestBudget01 = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveRequestBudget01 = fnResolve;
                    that._oComponent._fnRejectRequestBudget01 = fnReject;
                }.bind(that));

                Promise.all([
                    that._oComponent._PromiseBudgetOverView,
                    that._oComponent._PromiseRequestBudget,
                    that._oComponent._PromiseRequestBudgetOLD,
                    that._oComponent._PromiseRequestBudget01,
                    that._oComponent._PromiseBudgetOverViewPrev,
                ]).then(function (aPromise) {

                    resolve(aPromise);
                }.bind(that)).catch(async function (oError) {
                    reject(await that.messageBoxError(that.getMessagesBase().findFirstErrorMessage(that)));

                }.bind(that));


                oParamBud.sNamePromise = "2";
                oParamBud.sObjectPath = "/ZC_Budget";
                oParamBud.sViewmodel = that.CO_VIEW_MODEL;
                oParamBud.scope = that;
                oParamBud.component = that._oComponent;
                DataOperation.dataOperation(oParamBud);

                oParamBudPrev.sNamePromise = "11";
                oParamBudPrev.sObjectPath = "/ZC_BudgetPrev";
                oParamBudPrev.sViewmodel = that.CO_VIEW_MODEL;
                oParamBudPrev.scope = that;
                oParamBudPrev.component = that._oComponent;
                DataOperation.dataOperation(oParamBudPrev);

                oParamReq.aSorters = [new Sorter("Zb198Id",true),new Sorter("Erdat",true),new Sorter("Erzet",true)];
                oParamReq.aFilters = that.getFilterBase().getFiltersStatus01(); 
                oParamReq.sNamePromise = "3";
                oParamReq.sObjectPath = "/ZC_Request";           
                oParamReq.sViewmodel = that.CO_VIEW_MODEL;
                oParamReq.scope = that;
                oParamReq.component = that._oComponent;                
                DataOperation.dataOperation(oParamReq);

                oParamReqOld.aSorters = [new Sorter("Zb198Id",true),new Sorter("Erdat",true),new Sorter("Erzet",true)];
                oParamReqOld.aFilters = that.getFilterBase().getFiltersStatusOLD();
                oParamReqOld.sNamePromise = "9";
                oParamReqOld.sObjectPath = "/ZC_Request";           
                oParamReqOld.sViewmodel = that.CO_VIEW_MODEL;
                oParamReqOld.scope = that;
                oParamReqOld.component = that._oComponent;                
                DataOperation.dataOperation(oParamReqOld);


                oParamReq01.aSorters = [new Sorter("Zb198Id",true),new Sorter("Erdat",true),new Sorter("Erzet",true)];
                oParamReq01.aFilters = that.getFilterBase().getFiltersStatus();
                oParamReq01.sNamePromise = "10";
                oParamReq01.sObjectPath = "/ZC_Request";           
                oParamReq01.sViewmodel = that.CO_VIEW_MODEL;
                oParamReq01.scope = that;
                oParamReq01.component = that._oComponent;                
                DataOperation.dataOperation(oParamReq01);
            })
        },
        callInfoUser: function (that) {
            // return new Promise(function (resolve, reject) {
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();


                that._oComponent._PromiseInfoUser = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveInfoUser = fnResolve;
                    that._oComponent._fnRejectInfoUser = fnReject;
                }.bind(that));
                that._oComponent._PromiseInfoUser.then(function (oData) {
                    // resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    // resolve();
                    // reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "1";
                oParam.sObjectPath = "/ZC_UserInfo02";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);
            },
            callHelpForUser: function (that) {
            // return new Promise(function (resolve, reject) {
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();


                that._oComponent._PromiseHelpForUser = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveHelpForUser = fnResolve;
                    that._oComponent._fnRejectHelpForUser = fnReject;
                }.bind(that));
                that._oComponent._PromiseHelpForUser.then(function (oData) {
                    // resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    // resolve();
                    // reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "10";
                oParam.sObjectPath = "/ZC_HelpVPI";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);
            },
            callStatusName: function (that) {
            // return new Promise(function (resolve, reject) {
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();
                that._oComponent._PromiseStatusName = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveStatusName = fnResolve;
                    that._oComponent._fnRejectStatusName = fnReject;
                }.bind(that));
                that._oComponent._PromiseStatusName.then(function (oData) {
                    // resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    // resolve();
                    // reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "9";
                oParam.sObjectPath = "/ZC_StatusName";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);
            },
            // )
        // },
        callCustomerList: function (that) {
            return new Promise(function (resolve, reject) {
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();


                that._oComponent._PromiseCustomerlist = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveCustomerlist = fnResolve;
                    that._oComponent._fnRejectCustomerlist = fnReject;
                }.bind(that));
                that._oComponent._PromiseCustomerlist.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    // resolve();
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "4";
                oParam.sObjectPath = "/ZC_CUSTOMER_DIRECT";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                oParam.groupId = "1";
                DataOperation.dataOperation(oParam);
            })
        },
      

        callSaveNewInvoice: function (invoicePath, invoiceData, that) {
            return new Promise(function (resolve, reject) {
                let oData = {};
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();


                oData = invoiceData


                that._oComponent._PromiseNewInvoiceSave = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveNewInvoiceSave = fnResolve;
                    that._oComponent._fnRejectNewInvoiceSave = fnReject;
                }.bind(that));
                that._oComponent._PromiseNewInvoiceSave.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));

                }.bind(that));

                oParam.oOdata = oData;
                oParam.sNamePromise = "4";
                oParam.sTypeCall = "C";
                oParam.sObjectPath = invoicePath;
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);


            })
        },
        callDeleteInvoiceAttachmentIT: function (sPath, that) {
            return new Promise(function (resolve, reject) {             
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();               


                that._oComponent._PromiseDeleteInvoiceAttachmentIT = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveDeleteInvoiceAttachmentIT = fnResolve;
                    that._oComponent._fnRejectDeleteInvoiceAttachmentIT = fnReject;
                }.bind(that));
                that._oComponent._PromiseDeleteInvoiceAttachmentIT.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));
             
                oParam.sNamePromise = "5";
                oParam.sTypeCall = "D";
                oParam.sObjectPath = sPath;
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);


            })
        },
        callDeleteInvoiceAttachment: function (sPath, that) {
            return new Promise(function (resolve, reject) {             
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();               


                that._oComponent._PromiseDeleteInvoiceAttachment = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveDeleteInvoiceAttachment = fnResolve;
                    that._oComponent._fnRejectDeleteInvoiceAttachment = fnReject;
                }.bind(that));
                that._oComponent._PromiseDeleteInvoiceAttachment.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));
             
                oParam.sNamePromise = "6";
                oParam.sTypeCall = "D";
                oParam.sObjectPath = sPath;
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);


            })
        },
        callCheckEbeln: function (that, ebeln, password) {
            return new Promise(function (resolve, reject) {
                let oParam = {};

                oParam = DataOperation.getListOfCallVar();

                that._oComponent._PromiseCheckEbeln = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveCheckEbeln = fnResolve;
                    that._oComponent._fnRejectCheckEbeln = fnReject;
                }.bind(that));
                that._oComponent._PromiseCheckEbeln.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "7";
                oParam.oParameters = {
                    ebeln: ebeln,
                    pasw: password,
                  
                };
                oParam.bFunction = true;
                oParam.sObjectPath = "/checkEbeln";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                oParam.bBusyelement = false;

                DataOperation.dataOperation(oParam);
            })
        },
        callGetLifnr: function (that, ebeln, password, usertype) {
            return new Promise(function (resolve, reject) {
                let oParam = {};

                oParam = DataOperation.getListOfCallVar();

                that._oComponent._PromiseGetLifnr = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveGetLifnr = fnResolve;
                    that._oComponent._fnRejectGetLifnr = fnReject;
                }.bind(that));
                that._oComponent._PromiseGetLifnr.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "8";
                oParam.oParameters = {
                    usertype:usertype,
                    ebeln: ebeln,
                    pasw: password,
                  
                };
                oParam.bFunction = true;
                oParam.sObjectPath = "/getLifnr";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                oParam.bBusyelement = false;

                DataOperation.dataOperation(oParam);
            })
        },
    };




});