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
                GLOBAL_MODEL_VENDOR_INFO: "globalModelVendorInfo",
                GLOBAL_MODEL_FC_ATTACH: "globalModelFCAttach",
                GLOBAL_MODEL_STATUS_NAME: "globalModelStatusName",

                GLOBAL_MODEL_MATERIAL_LIST: "globalModelMaterialList", 
                GLOBAL_MODEL_CUSTOMER_LIST: "globalModelCustomerList", 
                GLOBAL_MODEL_REASON_REQ_LIST: "globalModelReasonReqList", 

                APP_VIEW_MODEL: "appView", 



        

                PENDING_TRUE: true,
                PENDING_FALSE: false,

                CUSTOMER_SELECTDIALOG: "zb19801.app.z20230809b19801.view.CustomerSelectList",
                MATERIAL_SELECTDIALOG: "zb19801.app.z20230809b19801.view.MaterialSelectList",

                EBELN_LOGON_DIALOG: "zmmvpi01.app.z20231228mmvpi01.view.EbelnLogon",

                MESSAGE_POPOVER: "zmmvpi01.app.z20231228mmvpi01.view.MessagePopover",
                MESSAGE_POPOVER: "zmmvpi01.app.z20231228mmvpi01.view.MessagePopover",

                ROUTE_DETAIL_VENDOR_INVOICE: "routeDetailVendorInvoice",
                ROUTE_OVERVIEW_VENDOR_INVOICE: "routeOverviewVendorInvoice",
                ROUTE_CREATE_VENDOR_INVOICE: "routeCreateVendorInvoice",


                FILE_NAME_LENGTH_EXCEEDED :"/FileNameLengthExceeded",
                FILE_NAME_LENGTH_EXCEEDED_IT :"/FileNameLengthExceededIT",
                
                FILE_NAME_SIZE_EXCEEDED :"/FileSizeExceeded",
                FILE_NAME_SIZE_EXCEEDED_IT :"/FileSizeExceededIT",

                FILE_TYPE_MISMATCH_EXCEEDED :"/FileTypeMismatch",
                FILE_TYPE_MISMATCH_EXCEEDED_IT :"/FileTypeMismatchIT",


                OVERVIEW: "overview",
                CREATE : "create"







            };
            return constatntObject;
        } 
    };




});