sap.ui.define([
    "sap/ui/core/Fragment",
    "./Filters",  
    "./DataOperation",
    "./Constants",
    "sap/ui/model/Filter",
    "sap/ui/model/Sorter",
    "sap/ui/model/FilterOperator",   
    "sap/ui/model/json/JSONModel"

], function (Fragment, Filters, DataOperation, Constants ,Filter, Sorter, FilterOperator, JSONModel) {
    "use strict";

    return {

        getSelectCustomerList: async function (that, model) {
            if (!that._oCustomerListSelDialog) {
                let oSelectDialog = await Fragment.load({
                    name:  that.getConstantBase().getConstants().CUSTOMER_SELECTDIALOG,
                    controller: that
                })
                that.getView().addDependent(oSelectDialog);
                that._oCustomerListSelDialog = oSelectDialog;           
                 that._oCustomerListSelDialog.setModel(model, that.CO_SELECT_CUSTOMER_MODEL);
                return  that._oCustomerListSelDialog;
            } else {
                  that._oCustomerListSelDialog.setModel(model, that.CO_SELECT_CUSTOMER_MODEL);
                return  that._oCustomerListSelDialog;
            }
        },
        onConfirmSelectCustomerList: function (oEvent, that) {
            let oSelectedItem;
            oSelectedItem = oEvent.getParameter("selectedItem");
            let oBinding = oEvent.getSource().getBinding("items");
            oBinding.filter();
            return oSelectedItem;
        },
        handleSearchCustomerList: function (oEvent, that) {
            let sValue = oEvent.getParameter("value");
            let oFilter = Filters.setFiltersCustomerList(sValue);
            let oBinding = oEvent.getSource().getBinding("items");
            oBinding.filter([oFilter]);
        },




        getSelectMaterialList: async function (that, model) {
            if (!that._oMaterialListSelDialog) {
                let oSelectDialog = await Fragment.load({
                    name:  that.getConstantBase().getConstants().MATERIAL_SELECTDIALOG,
                    controller: that
                })
                that.getView().addDependent(oSelectDialog);
                that._oMaterialListSelDialog = oSelectDialog;           
                 that._oMaterialListSelDialog.setModel(model, that.CO_SELECT_MATERIAL_MODEL);
                return  that._oMaterialListSelDialog;
            } else {
                 that._oMaterialListSelDialog.setModel(model, that.CO_SELECT_MATERIAL_MODEL);
                return  that._oMaterialListSelDialog;
            }
        },
        onConfirmSelectMaterialList: function (oEvent, that) {
            let oSelectedItem;
            oSelectedItem = oEvent.getParameter("selectedItem");
            let oBinding = oEvent.getSource().getBinding("items");
            oBinding.filter();
            return oSelectedItem;
        },
        handleSearchMaterialList: function (oEvent, that) {
            let sValue = oEvent.getParameter("value");
            let oFilter = Filters.setFiltersMaterialList(sValue);
            let oBinding = oEvent.getSource().getBinding("items");
            oBinding.filter([oFilter]);
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
        /* begin: genereci public methods                              */
        /* =========================================================== */

        openSelectDialog: function (dialog) {
            this._openSelectDialog(dialog);
        },
        closeSelectDialog: function (dialog) {
            this._closeSelectDialog(dialog);
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

        _openSelectDialog: function (dialog) {
            dialog.open();
        },
        _closeSelectDialog: function (dialog) {
            dialog.close();
        },
    }
})