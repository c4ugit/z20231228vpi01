sap.ui.define([
    "./DataOperation",
    "sap/ui/model/Sorter"
], function (DataOperation,Sorter) {
    "use strict";

    return {
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
            return new Promise(function (resolve, reject) {
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();


                that._oComponent._PromiseInfoUser = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveInfoUser = fnResolve;
                    that._oComponent._fnRejectInfoUser = fnReject;
                }.bind(that));
                that._oComponent._PromiseInfoUser.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    // resolve();
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "1";
                oParam.sObjectPath = "/ZC_UserInfo";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);
            })
        },
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
        callMaterialList: function (that) {
            return new Promise(function (resolve, reject) {
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();


                that._oComponent._PromiseMaterialList = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveMaterialList = fnResolve;
                    that._oComponent._fnRejectMaterialList = fnReject;
                }.bind(that));
                that._oComponent._PromiseMaterialList.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    // resolve();
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "5";
                oParam.sObjectPath = "/ZC_MaterialB198";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);
            })
        },
        callReasonRequestList: function (that) {
            return new Promise(function (resolve, reject) {
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();


                that._oComponent._PromiseReasonRequestList = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveReasonRequestList = fnResolve;
                    that._oComponent._fnRejectReasonRequestList = fnReject;
                }.bind(that));
                that._oComponent._PromiseReasonRequestList.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    // resolve();
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "8";
                oParam.sObjectPath = "/ZC_ReasonReq";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);
            })
        },

        callSaveNewRequest: function (requestPath, requestData, that) {
            return new Promise(function (resolve, reject) {
                let oData = {};
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();



                oData.Kunnr = requestData.Customer;
                oData.Matnr = requestData.Material;
                oData.Menge = String(requestData.Menge);
                oData.Meins = requestData.Meins;
                oData.ValidFrm = that.formatter.odataDate(requestData.ValidFrm);
                oData.ValidTo = that.formatter.odataDate(requestData.ValidTo);
                oData.Vkaus = requestData.Vkaus;
                oData.Requestnote = requestData.Requestnote;

                oParam.oOdata = oData


                that._oComponent._PromiseNewRequestSave = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveNewRequestSave = fnResolve;
                    that._oComponent._fnRejectNewRequestSave = fnReject;
                }.bind(that));
                that._oComponent._PromiseNewRequestSave.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));

                }.bind(that));

                oParam.oOdata = oData;
                oParam.sNamePromise = "6";
                oParam.sTypeCall = "C";
                oParam.sObjectPath = requestPath;
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);


            })
        },
        callDeleteRequest: function (requestPath, that) {
            return new Promise(function (resolve, reject) {
                let oData = {};
                let oParam = {};
                oParam = DataOperation.getListOfCallVar();               


                that._oComponent._PromiseDeleteRequest = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveDeleteRequestSave = fnResolve;
                    that._oComponent._fnRejectDeleteRequestSave = fnReject;
                }.bind(that));
                that._oComponent._PromiseDeleteRequest.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    reject(that.getMessagesBase().findFirstErrorMessage(that));

                }.bind(that));

             
                oParam.sNamePromise = "7";
                oParam.sTypeCall = "D";
                oParam.sObjectPath = requestPath;
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                DataOperation.dataOperation(oParam);


            })
        },
        callShipmentStatus: function (that) {
            return new Promise(function (resolve, reject) {
                let oParam = {};

                oParam = DataOperation.getListOfCallVar();

                that._oComponent._PromiseShipmentIsAssigned = new Promise(function (fnResolve, fnReject) {
                    that._oComponent._fnResolveShipmentIsAssigned = fnResolve;
                    that._oComponent._fnRejectShipmentIsAssigned = fnReject;
                }.bind(that));
                that._oComponent._PromiseShipmentIsAssigned.then(function (oData) {
                    resolve(Object.freeze(oData));
                }.bind(that)).catch(function (oError) {
                    // resolve();
                    reject(that.getMessagesBase().findFirstErrorMessage(that));
                }.bind(that));

                oParam.sNamePromise = "10";
                oParam.urlParameters = {
                    // User: '1111111111'
                };
                oParam.bFunction = true;
                oParam.sObjectPath = "/getShipmentStatus";
                oParam.sViewmodel = that.CO_VIEW_MODEL;
                oParam.scope = that;
                oParam.component = that._oComponent;
                oParam.bBusyelement = false;

                DataOperation.dataOperation(oParam);
            })
        },
    };




});