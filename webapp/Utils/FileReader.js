sap.ui.define([

], function ()
{
    "use strict";

    return {
    
        initFileReader: function() {
          return new FileReader();   
        },
        onLoadFileReaderIT(e,that,oParameter,i) {
            let raw = e.target.result;
            let binaryString = raw;
            let Content = btoa(binaryString);
            let oNewAttachmet = {};


            oNewAttachmet.Filename = oParameter.getProperty("fileName");
            oNewAttachmet.Mimetype = oParameter.getProperty("mediaType");
            oNewAttachmet.UploadState = oParameter.getProperty("uploadState");
            oNewAttachmet.Counter = i;
            oNewAttachmet.Content = Content;
            that.getModel(that.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).getData().results.push(oNewAttachmet);
            that.getModel(that.CO_ODATA_INVOICE_ITEM_INCOMPLETE_ATTACH_MODEL).updateBindings(true);
            for (let index = 0; index < that._oUploadSetOthersAttachment.getIncompleteItems().length; index++) {
                //10_1
                that._oUploadSetOthersAttachment.getIncompleteItems()[index].setUploadState("Complete");
                that._oUploadSetOthersAttachment.getIncompleteItems()[index]._oEditButton.setProperty("visible",false)
            }
            // for (let index = 0; index < that._oUploadSetOthersAttachment.getIncompleteItems().length; index++) {
            //     //10_1
              
            //     that._oUploadSetOthersAttachment.getIncompleteItems()[index].setVisibleEdit(false);
              
              
            // }
        },        
        onErrorFileReaderIT(e,that)  {
            that.messageToastShow("error");
        },
        onLoadFileReader(e,that,oParameter,i) {
            let raw = e.target.result;
            let binaryString = raw;
            let Content = btoa(binaryString);
            let oNewAttachmet = {};


            oNewAttachmet.Filename = oParameter.getProperty("fileName");
            oNewAttachmet.Mimetype = oParameter.getProperty("mediaType");
            oNewAttachmet.UploadState = oParameter.getProperty("uploadState");
            oNewAttachmet.Counter = i;
            oNewAttachmet.Content = Content;
            that.getModel(that.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).getData().results.push(oNewAttachmet);
            that.getModel(that.CO_ODATA_INVOICE_HEADER_INCOMPLETE_ATTACH_MODEL).updateBindings(true);
            for (let index = 0; index < that._oUploadSetAttachment.getIncompleteItems().length; index++) {
                //10_1
                 that._oUploadSetAttachment.getIncompleteItems()[index].setUploadState("Complete");
                 that._oUploadSetAttachment.getIncompleteItems()[index]._oEditButton.setProperty("visible",false)

            }
            // for (let index = 0; index < that._oUploadSetAttachment.getIncompleteItems().length; index++) {
            //     //10_1
            //     that._oUploadSetAttachment.getIncompleteItems()[index].setVisibleEdit(false);


            // }
        },        
        onErrorFileReader(e,that)  {
            that.messageToastShow("error");
        },

    };




});