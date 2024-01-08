sap.ui.define([
], function () {
    "use strict";

    return {
        dataOperation: function (oParameters) {
            let oViewModel, sNamePromise, oComponent, that, sTypeCall;

            that = oParameters.scope;
            oComponent = oParameters.component;
            sNamePromise = oParameters.sNamePromise;
            sTypeCall = oParameters.sTypeCall;
            if (oParameters.localViewModel === true) {
                oViewModel = oParameters.scope.getModel(oParameters.sViewmodel);
            } else {
                oViewModel = oParameters.scope.getModel(oParameters.sViewmodel);
            }

            let mParameters = {};
            if (oParameters.bFunction === true) {
                mParameters.method = "GET";
            }
            if (oParameters.bFunction === true) {
                mParameters.urlParameters = {};
                mParameters.urlParameters = oParameters.oParameters;
            }
            mParameters.filters = oParameters.aFilters;
            mParameters.sorters = oParameters.aSorters;
            if (oParameters.sExpandParameter === "") {
                //empty
            } else {
                mParameters.urlParameters = {
                    "$expand": oParameters.sExpandParameter
                };
            }

            if (oParameters.groupId === "" || oParameters.groupId === undefined) {
                //empty
            } else {
                mParameters.groupId = oParameters.groupId;

            }
            if (oParameters.bEntitySet === true) {
                if (oParameters.iTop === 0) {
                    //empty
                } else {
                    if (typeof mParameters.urlParameters === "object") {
                        mParameters.urlParameters.$top = oParameters.iTop;
                    } else {
                        mParameters.urlParameters = {
                            "$top": oParameters.iTop
                        };
                    }
                }
            }
            mParameters.success = function (oDataServer) {
                that.getMessagesBase().setPersistentProperty(that);
                if (oParameters.bBusyelement === true) {
                    that.getView().byId(oParameters.sBusyelementid).setBusy(false);
                } else {
                    oViewModel.setProperty("/busy", false);
                }
                switch (sNamePromise) {
                    case "1":
                        oComponent._fnResolveInfoUser(oDataServer);
                        break;
                    case "2":
                        oComponent._fnResolveGetInvoiceHeader(oDataServer);
                        break;
                    case "3":
                        oComponent._fnResolveGetInvoiceList(oDataServer);
                        break;                 
                    case "4":
                        oComponent._fnResolveCustomerlist(oDataServer);
                        break;                 
                    case "5":
                        oComponent._fnResolveMaterialList(oDataServer);
                        break;                 
                    case "6":
                        oComponent._fnResolveNewRequestSave(oDataServer);
                        break;                 
                    case "7":
                        oComponent._fnResolveDeleteRequestSave(oDataServer);
                        break;                 
                    case "8":
                        oComponent._fnResolveReasonRequestList(oDataServer);
                        break;                 
                    case "9":
                        oComponent._fnResolveRequestBudgetOLD(oDataServer);
                        break;                 
                    case "10":
                        oComponent._fnResolveRequestBudget01(oDataServer);
                        break;                 
                    case "11":
                        oComponent._fnResolveBudgetOverViewPrev(oDataServer);
                        break;                 

                    default:
                        break;
                }

            };
            mParameters.error = function (oError) {
                that.getMessagesBase().setPersistentProperty(that);
                if (oParameters.bBusyelement === true) {
                    that.getView().byId(oParameters.sBusyelementid).setBusy(false);
                } else {
                    oViewModel.setProperty("/busy", false);
                }

                switch (sNamePromise) {
                    case "1":
                        oComponent._fnRejectInfoUser(oError);
                        break;
                    case "2":
                        oComponent._fnRejectGetInvoiceHeader(oError);
                        break;
                    case "3":
                        oComponent._fnRejectGetInvoiceList(oError);
                        break;                 
                    case "4":
                        oComponent._fnRejectCustomerlist(oError);
                        break;                 
                    case "5":
                        oComponent._fnRejectMaterialList(oError);
                        break;                 
                    case "6":
                        oComponent._fnRejectNewRequestSave(oError);
                        break;                 
                    case "7":
                        oComponent._fnRejectDeleteRequestSave(oError);
                        break;                 
                    case "8":
                        oComponent._fnRejectReasonRequestList(oError);
                        break;                 
                    case "9":
                        oComponent._fnRejectRequestBudgetOLD(oError);
                        break;                 
                    case "10":
                        oComponent._fnRejectRequestBudget01(oError);
                        break;                 
                    case "11":
                        oComponent._fnRejectBudgetOverViewPrev(oError);
                        break;                 

                    default:
                        break;
                }
            };


            if (oParameters.bOdataModelName === true) {
                switch (oParameters.bFunction) {
                    case true:
                        oComponent.getModel(oParameters.sOdataModelName).callFunction(oParameters.sObjectPath, mParameters);
                        break;
                    case false:
                        if (sTypeCall === "C") {
                            oComponent.getModel(oParameters.sOdataModelName).create(oParameters.sObjectPath, oParameters.oOdata, mParameters);
                        } else if (sTypeCall === "D") {
                            oComponent.getModel(oParameters.sOdataModelName).remove(oParameters.sObjectPath, mParameters);
                        } else if (sTypeCall === "R") {
                            oComponent.getModel(oParameters.sOdataModelName).read(oParameters.sObjectPath, mParameters);

                        } else if (sTypeCall === "U") {
                            oComponent.getModel(oParameters.sOdataModelName).update(oParameters.sObjectPath, oParameters.oOdata, mParameters);
                        } else {
                        }

                        break;
                    default:
                }


            } else {
                switch (oParameters.bFunction) {
                    case true:
                        oComponent.getModel().callFunction(oParameters.sObjectPath, mParameters);
                        break;
                    case false:
                        if (sTypeCall === "C") {
                            oComponent.getModel().create(oParameters.sObjectPath, oParameters.oOdata, mParameters);
                        } else if (sTypeCall === "D") {
                            oComponent.getModel().remove(oParameters.sObjectPath, mParameters);
                        } else if (sTypeCall === "R") {
                            oComponent.getModel().read(oParameters.sObjectPath, mParameters);

                        } else if (sTypeCall === "U") {
                            oComponent.getModel().update(oParameters.sObjectPath, oParameters.oOdata, mParameters);
                        } else {
                        }

                        break;
                    default:
                }



            }

            if (oParameters.bBusyelement === true) {
                that.getView().byId(oParameters.sBusyelementid).setBusy(true);
            } else {
                oViewModel.setProperty("/busy", true);
            }
        },

        getListOfCallVar: function () {
            let oParameters = {};
            oParameters.sNamePromise = "";
            oParameters.bFunction = false;
            oParameters.sObjectPath = "";
            oParameters.sViewmodel = "";
            oParameters.aFilters = [];
            oParameters.aSorters = [];
            oParameters.sExpandParameter = "";
            oParameters.oParameters = {};
            oParameters.iTop = 0;
            oParameters.oOdata = {};
            oParameters.bEntitySet = true;
            oParameters.sTypeCall = "R";
            oParameters.groupId = "";
            oParameters.localViewModel = true;
            oParameters.scope = "";
            oParameters.component = "";
            oParameters.sBusyelementid = "";
            oParameters.bBusyelement = false;
            oParameters.sOdataModelName = "";
            oParameters.bOdataModelName = false;
            return oParameters;
        },


        loopDataTableXXX: function (aDataTable, oData) {
            var aDataTableCorrect = [];
            var sLength = aDataTable.length;
            var i, j;

            for (i = 0; i < sLength; i++) {
                var oDataTableItem = aDataTable[i];
                var oDataTableItemCorect = {};
                oDataTableItemCorect = oDataTableItem;
                aDataTableCorrect.push(oDataTableItemCorect);


            }

            return aDataTableCorrect;
        },
        loopDataTableDeliveryListItem: function (aDataTable, oData) {
            let aDataTableCorrect = [];
            let sLength = aDataTable.length;
            let i, j;

            for (i = 0; i < sLength; i++) {
                let oDataTableItem = aDataTable[i];
                let oDataTableItemCorect = {};
                oDataTableItemCorect = oDataTableItem;
                if (oDataTableItemCorect.RecQuantity === undefined) {
                    oDataTableItemCorect.RecQuantity = String(0);
                } else {

                    oDataTableItemCorect.RecQuantity = String(oDataTableItemCorect.RecQuantity);
                }

                oDataTableItemCorect.Mengecorrection = String(oDataTableItemCorect.Mengecorrection);
                oDataTableItemCorect.Mengemax = String(oDataTableItemCorect.Mengemax);
                delete oDataTableItemCorect.__metadata;
                delete oDataTableItemCorect.bMengecorrectionTextVIS;
                delete oDataTableItemCorect.bMengecorrectionStepVIS;
                delete oDataTableItemCorect.bMengecorrectionStepEmptiesVIS;
                delete oDataTableItemCorect.bMengecorrectionStepEmptiesENB;
                delete oDataTableItemCorect.FromDeliveryListStatus;
                delete oDataTableItemCorect.FromDeliveryList;
                delete oDataTableItemCorect.Order;
                delete oDataTableItemCorect.Netpr;
                delete oDataTableItemCorect.Max;
                delete oDataTableItemCorect.Min;
                delete oDataTableItemCorect.Mengemax;
                aDataTableCorrect.push(oDataTableItemCorect);

            }
            return aDataTableCorrect;
        },

        loopDataTableEmpties: function (aDataTable, oData) {
            let aDataTableCorrect = [];
            let sLength = aDataTable.length;
            let i, j;

            for (i = 0; i < sLength; i++) {
                let oDataTableItem = aDataTable[i];
                let oDataTableItemCorect = {};
                oDataTableItemCorect = oDataTableItem;

                oDataTableItemCorect.Menge = String(oDataTableItemCorect.Menge);
                delete oDataTableItemCorect.__metadata;

                aDataTableCorrect.push(oDataTableItemCorect);

            }
            return aDataTableCorrect;
        }


    };
});


