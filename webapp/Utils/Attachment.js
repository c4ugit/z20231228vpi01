sap.ui.define([
    
], function () {
    "use strict";

    return {
        initFCFields:function() {
           
            this.getAttachmentBase().setPropertyAttach(this.getConstantBase().getConstants.FILE_NAME_LENGTH_EXCEEDED,false);               
            this.getAttachmentBase().setPropertyAttach(this.getConstantBase().getConstants.FILE_NAME_SIZE_EXCEEDED,false);               
            this.getAttachmentBase().setPropertyAttach(this.getConstantBase().getConstants.FILE_TYPE_MISMATCH_EXCEEDED,false);               
            this.getAttachmentBase().setPropertyAttach(this.getConstantBase().getConstants.FILE_NAME_LENGTH_EXCEEDED_IT,false);               
            this.getAttachmentBase().setPropertyAttach(this.getConstantBase().getConstants.FILE_NAME_SIZE_EXCEEDED_IT,false);               
            this.getAttachmentBase().setPropertyAttach(this.getConstantBase().getConstants.FILE_TYPE_MISMATCH_EXCEEDED_IT,false);               
          
        },
        setPropertyAttachFC: function (sPropertyName,bValue) {
          this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_FC_ATTACH).setProperty(sPropertyName,bValue);
        },
        getPropertyAttachFC: function (sPropertyName) {
          return  this.getModel(this.getConstantBase().getConstants().GLOBAL_MODEL_FC_ATTACH).getProperty(sPropertyName);
        },
        checkPropertiesAttachFC: function () {
            if(this.getAttachmentBase().getPropertyAttach(this.getConstantBase().getConstants.FILE_NAME_LENGTH_EXCEEDED) === false) {
                return false;
            };               
            if(  this.getAttachmentBase().getPropertyAttach(this.getConstantBase().getConstants.FILE_NAME_SIZE_EXCEEDED) === false) {
                return false;
            };               
            if(this.getAttachmentBase().getPropertyAttach(this.getConstantBase().getConstants.FILE_TYPE_MISMATCH_EXCEEDED) === false) {
                return false;
            };               
            if(this.getAttachmentBase().getPropertyAttach(this.getConstantBase().getConstants.FILE_NAME_LENGTH_EXCEEDED_IT) === false) {
                return false;
            };               
            if( this.getAttachmentBase().getPropertyAttach(this.getConstantBase().getConstants.FILE_NAME_SIZE_EXCEEDED_IT) === false) {
                return false;
            };               
            if(this.getAttachmentBase().getPropertyAttach(this.getConstantBase().getConstants.FILE_TYPE_MISMATCH_EXCEEDED_IT) === false) {
                return false;
            };               
                        
              return true;       
                
        } 
    };




});