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
                        oComponent._fnResolveNewInvoiceSave(oDataServer);
                        break;
                    case "5":
                        oComponent._fnResolveDeleteInvoiceAttachmentIT(oDataServer);
                        break;
                    case "6":
                        oComponent._fnResolveDeleteInvoiceAttachment(oDataServer);
                        break;
                    case "7":
                        oComponent._fnResolveCheckEbeln(oDataServer);
                        break;
                    case "8":
                        oComponent._fnResolveGetLifnr(oDataServer);
                        break;
                    case "9":
                        oComponent._fnResolveStatusName(oDataServer);
                        break;
                    case "10":
                        oComponent._fnResolveHelpForUser(oDataServer);
                        break;
                    case "11":
                        oComponent._fnResolveInfoForUser(oDataServer);
                        break;
                    case "12":
                        oComponent._fnResolveGetUserAuthorizations(oDataServer);
                        break;
                    case "13":
                        oComponent._fnResolveGetConstant(oDataServer);
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
                        oComponent._fnRejectNewInvoiceSave(oError);
                        break;
                    case "5":
                        oComponent._fnRejectDeleteInvoiceAttachmentIT(oError);
                        break;
                    case "6":
                        oComponent._fnRejectDeleteInvoiceAttachment(oError);
                        break;
                    case "7":
                        oComponent._fnResolveStatusName(oError);
                        break;
                    case "8":
                        oComponent._fnRejectGetLifnr(oError);
                        break;
                    case "9":
                        oComponent._fnRejectStatusName(oError);
                        break;
                    case "10":
                        oComponent._fnRejectHelpForUser(oError);
                        break;
                    case "11":
                        oComponent._fnRejectInfoForUser(oError);
                        break;
                    case "12":
                        oComponent._fnRejectGetUserAuthorizations(oError);
                        break;
                    case "13":
                        oComponent._fnRejectGetConstant(oError);
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
        loopDataTable: function (aDataTable, oData) {
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

        loopDataTableInvoiceAtt: function (aDataTable, Zinvoicr_Id) {
            let aDataTableCorrect = [];
            let sLength = aDataTable.length;
            let i, j;

            for (i = 0; i < sLength; i++) {
                let oDataTableItem = aDataTable[i];
                let oDataTableItemCorect = {};
                oDataTableItemCorect = oDataTableItem;
                oDataTableItemCorect.Zinvoicr_Id = Zinvoicr_Id;

                delete oDataTableItemCorect.__metadata;
                delete oDataTableItemCorect.Counter;

                aDataTableCorrect.push(oDataTableItemCorect);

            }
            return aDataTableCorrect;
        },
        loopDataTableInvItemAtt: function (aDataTable, aDataTableJoin, Zinvoicr_Id) {

            let lastAttach_Id;
            if (aDataTable.length === 0) {
                lastAttach_Id = 0;
            } else {
                lastAttach_Id = Math.max(...aDataTable.map(o => Number(o.Attach_Id)));
            }

            let aDataTableCorrect = [];
            let sLength = aDataTable.length;
            let i, j;

            for (i = 0; i < sLength; i++) {
                let oDataTableItem = aDataTable[i];
                let oDataTableItemCorect = {};
                oDataTableItemCorect = oDataTableItem;
                delete oDataTableItemCorect.__metadata;
                delete oDataTableItemCorect.Counter;
                aDataTableCorrect.push(oDataTableItemCorect);

            }

            //Check if new items exist
            if (aDataTableJoin.length > 0) {
                for (let index = 0; index < aDataTableJoin.length; index++) {

                    lastAttach_Id = lastAttach_Id + 1;

                    let oDataTableItemJoin = aDataTableJoin[index];
                    let oDataTableItemCorectJoin = {};


                    oDataTableItemCorectJoin.Zinvoicr_Id = Zinvoicr_Id;
                    oDataTableItemCorectJoin.Attach_Id = String(lastAttach_Id);
                    oDataTableItemCorectJoin.Filename = oDataTableItemJoin.Filename;
                    oDataTableItemCorectJoin.Mimetype = oDataTableItemJoin.Mimetype;
                    oDataTableItemCorectJoin.UploadState = oDataTableItemJoin.UploadState;
                    oDataTableItemCorectJoin.Content = oDataTableItemJoin.Content;
                    oDataTableItemCorectJoin.Backenddeployed = false;
                    aDataTableCorrect.push(oDataTableItemCorectJoin);
                }

            }


            return aDataTableCorrect;
        },
        loopDataTabletoItems: function (aDataTable) {
            let aDataTableCorrect = [];
            let sLength = aDataTable.length;
            let i, j;

            for (i = 0; i < sLength; i++) {
                let oDataTableItem = aDataTable[i];
                let oDataTableItemCorect = {};
                oDataTableItemCorect = oDataTableItem;


                delete oDataTableItemCorect.__metadata;

                aDataTableCorrect.push(oDataTableItemCorect);

            }
            return aDataTableCorrect;
        },


    };
});


