sap.ui.define([
    "sap/m/MessageBox"
], function (MessageBox) {
    "use strict";

    return {
        confirm: async function (text) {            
            return new Promise(function (resolve) {
                MessageBox.confirm(text, {
                    title: "Upozorn\u011Bn\xED",
                    actions: [
                        MessageBox.Action.YES,
                        MessageBox.Action.NO
                    ],
                    onClose: function (oAction) {
                    
                        if (oAction === "YES") {
                          return     resolve(true);
                        } else {
                            return resolve(false);
                        }
                    }
                });
            })
        },
        error: async function (text) {            
            return new Promise(function (resolve) {
                MessageBox.error(text, {
                    title: "Chyba",
                    actions: [
                        MessageBox.Action.CLOSE                      
                    ],
                    onClose: function (oAction) {
                        if (oAction === "CLOSE") {
                            resolve();
                          return;
                        }
                    }
                });
            })
        },
        success: async function (text) {            
            return new Promise(function (resolve) {
                MessageBox.success(text, {
                    title: "OK",
                    actions: [
                        MessageBox.Action.CLOSE                      
                    ],
                    onClose: function (oAction) {
                        if (oAction === "CLOSE") {
                            resolve();
                          return;
                        }
                    }
                });
            })
        },
        information: async function (text) {            
            return new Promise(function (resolve) {
                MessageBox.information(text, {
                    title: "Informace",
                    actions: [
                        MessageBox.Action.CLOSE                      
                    ],
                    onClose: function (oAction) {
                        if (oAction === "CLOSE") {
                            resolve();
                          return;
                        }
                    }
                });
            })
        },
        warning2: async function (text) {            
            return new Promise(function (resolve) {
                MessageBox.warning(text, {
                    actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
                    emphasizedAction: MessageBox.Action.OK,
                    onClose: function (sAction) {
                        if (sAction === "CANCEL") {
                            resolve(false);
                          return;
                        } else {
                            resolve(true);
                        }
                    }
                });
            })
        },
        warning: async function (text) {            
            return new Promise(function (resolve) {
                MessageBox.warning(text, {
                    title: "Upozornění",
                    actions: [
                        MessageBox.Action.CLOSE                      
                    ],
                    onClose: function (oAction) {
                        resolve();
                        if (oAction === "CLOSE") {
                          return;
                        }
                    }
                });
            })
        },
  

    };




});