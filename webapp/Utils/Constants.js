sap.ui.define([], function () {
    "use strict";

    return {
        getConstants: function () {
            const constatntObject = {

                GLOBAL_MODEL_HELP: "globalModelHelp",   //Pomocný globální model           
                GLOBAL_MODEL_AUTH: "globalModelAuthorization", //        
                GLOBAL_MODEL_FC: "globalModelFieldsControl", //Možnosti nastavení aplikace            
                GLOBAL_MODEL_USER_INFO: "globalModelUserInfo",
                GLOBAL_MODEL_VENDOR_INFO: "globalModelVendorInfo",

                GLOBAL_MODEL_MATERIAL_LIST: "globalModelMaterialList", 
                GLOBAL_MODEL_CUSTOMER_LIST: "globalModelCustomerList", 
                GLOBAL_MODEL_REASON_REQ_LIST: "globalModelReasonReqList", 

                APP_VIEW_MODEL: "appView", 



        

                PENDING_TRUE: true,
                PENDING_FALSE: false,

                CUSTOMER_SELECTDIALOG: "zb19801.app.z20230809b19801.view.CustomerSelectList",
                MATERIAL_SELECTDIALOG: "zb19801.app.z20230809b19801.view.MaterialSelectList",
                MESSAGE_POPOVER: "zb19801.app.z20230809b19801.view.MessagePopover",

                ROUTE_DETAIL_VENDOR_INVOICE: "routeDetailVendorInvoice",
                ROUTE_OVERVIEW_VENDOR_INVOICE: "routeOverviewVendorInvoice",
                ROUTE_CREATE_VENDOR_INVOICE: "routeCreateVendorInvoice",




            };
            return constatntObject;
        } 
    };




});