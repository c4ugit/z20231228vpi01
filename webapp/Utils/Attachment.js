sap.ui.define([

], function ()
{
    "use strict";

    return {
        initFCFields: function (that)
            {
                this.setPropertyAttachFC(that.getConstantBase().getConstants().FILE_NAME_LENGTH_EXCEEDED, true, that);
                this.setPropertyAttachFC(that.getConstantBase().getConstants().FILE_NAME_SIZE_EXCEEDED, true, that);
                this.setPropertyAttachFC(that.getConstantBase().getConstants().FILE_TYPE_MISMATCH_EXCEEDED, true, that);
                this.setPropertyAttachFC(that.getConstantBase().getConstants().FILE_NAME_LENGTH_EXCEEDED_IT, true, that);
                this.setPropertyAttachFC(that.getConstantBase().getConstants().FILE_NAME_SIZE_EXCEEDED_IT, true, that);
                this.setPropertyAttachFC(that.getConstantBase().getConstants().FILE_TYPE_MISMATCH_EXCEEDED_IT, true, that);
            },

        setPropertyAttachFC: function (sPropertyName, bValue, that)
            {
                that.getModel(that.getConstantBase().getConstants().GLOBAL_MODEL_FC_ATTACH).setProperty(sPropertyName, bValue);
            },

        getPropertyAttachFC: function (sPropertyName,that)
            {
                return that.getModel(that.getConstantBase().getConstants().GLOBAL_MODEL_FC_ATTACH).getProperty(sPropertyName);
            },

     

        checkPropertiesAttachFC: async function (that)
        {
            if (this.getPropertyAttachFC(that.getConstantBase().getConstants().FILE_NAME_LENGTH_EXCEEDED,that) === false)
            {
                await that.messageBoxError("Překročena délka názvu přílohy (max70).");
                return false;
            };
            if (this.getPropertyAttachFC(that.getConstantBase().getConstants().FILE_NAME_SIZE_EXCEEDED,that) === false)
            {
                await that.messageBoxError("Překročena velikost přílohy.");
                return false;
            };
            if (this.getPropertyAttachFC(that.getConstantBase().getConstants().FILE_TYPE_MISMATCH_EXCEEDED,that) === false)
            {
                await that.messageBoxError("Špatný typ přílohy.");
                return false;
            };
            if (this.getPropertyAttachFC(that.getConstantBase().getConstants().FILE_NAME_LENGTH_EXCEEDED_IT,that) === false)
            {
                await that.messageBoxError("Překročena délka názvu přílohy (max70).");
                return false;
            };
            if (this.getPropertyAttachFC(that.getConstantBase().getConstants().FILE_NAME_SIZE_EXCEEDED_IT,that) === false)
            {
                await that.messageBoxError("Překročena velikost přílohy.");
                return false;
            };
            if (this.getPropertyAttachFC(that.getConstantBase().getConstants().FILE_TYPE_MISMATCH_EXCEEDED_IT,that) === false)
            {
                await that.messageBoxError("Špatný typ přílohy.");
                return false;
            };
            return true;
        }
    };




});