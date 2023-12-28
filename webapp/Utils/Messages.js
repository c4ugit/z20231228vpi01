sap.ui.define([
    "sap/ui/core/Fragment",
    "sap/ui/core/message/Message",
    "./Constants"
    
], function (Fragment, Message,Constants) {
    "use strict";

    return {
        addMessage: function (sMessage, oType, oTarget, oMessageProcessor) {
            // var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
            // 	var oMessageManager  = sap.ui.getCore().getMessageManager();

            // oMessageManager.registerMessageProcessor(oMessageProcessor);
            sap.ui.getCore().getMessageManager().addMessages(
                new Message({
                    message: sMessage,
                    type: oType,
                    target: oTarget,
                    processor: oMessageProcessor
                })
            );
        },
		/** 
		 * setPersistentProperty to messages => True.
		 * @public
		 */
        setPersistentProperty: function () {
          
            let oModel = sap.ui.getCore().getMessageManager().getMessageModel();
            for (let i = 0; i < oModel.getData().length; i++) {
                oModel.getData()[i].setPersistent(true);
            }
            if (oModel.getData().length > 1) {
                if (
                    // oModel.getData()[0].getCode() === oModel.getData()[1].getCode() &&
                    oModel.getData()[0].getMessage() === oModel.getData()[1].getMessage()
                ) {
                    oModel.getData().shift();
                }
            }
            oModel.updateBindings(true);

        },
		/** 
		 * @param {sap.ui.base.Event} oEvent - Press Handler for Message popover
		 * @public
		 */
        onMessagePopoverPress: async function (that, oEvent) {
            let oSource = oEvent.getSource()
            this._openPopover(await this._getMessagePopover(that),oSource);

        },
		/** 
		 * Clear Messages after popover closed
		 * @param {sap.ui.base.Event} oEvent - Press Handler for Message popover
		 * @public
		 */
        onMessagePopoverClose: function () {
            let oMessageManager = sap.ui.getCore().getMessageManager();
            oMessageManager.removeAllMessages();
        },

        onMessagePopoverOpen: function () {

        },
        findFirstErrorMessage: function (that) {
            let sErrorMessage;
            let aMessagesObject = that.getOwnerComponent().getModel("message").getData();
            // for (let index = 0; index < aMessagesObject.length; index++) {
                for (let index = aMessagesObject.length - 1; index >= 0; index--) {
                const oMessages = aMessagesObject[index];
                if (String(oMessages.getTechnicalDetails().statusCode) === "400" || String(oMessages.getTechnicalDetails().statusCode) === "500") {
                    return oMessages.getMessage();                    
                }
                
            }



            return sErrorMessage;
        },
        removeSelectedMessage: function (oSource, sProperty) {
            oSource.setValueState("None");
            let aMessages;
            aMessages = sap.ui.getCore().getMessageManager().getMessageModel().getData();
            let sMessage;
            sMessage = aMessages.filter(function (mItem) {
              return mItem.target === sProperty;
            });
            sap.ui.getCore().getMessageManager().removeMessages(sMessage);
          },


       

        /* =========================================================== */
        /* begin: internal methods                                     */
        /* =========================================================== */
        _getMessagePopover: async function (that) {
            // return new Promise(function (resolve) {
                if (!that._oMessagePopover) {
                    let oDialog = await Fragment.load({
                        name:  that.getConstantBase().getConstants().MESSAGE_POPOVER,
                        controller: that
                    })
                    that.getView().addDependent(oDialog);
                    that._oMessagePopover = oDialog

                    return that._oMessagePopover;
                } else {
                    return that._oMessagePopover;
                }
            // })
        },
        _openPopover: function(oPopover,oSource) {
            oPopover.openBy(oSource);
        }
    }
})