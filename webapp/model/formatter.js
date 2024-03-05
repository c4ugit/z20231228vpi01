sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function (NumberFormat) {
    "use strict";

    return {
        /**
         * Rounds the currency value to 2 digits
         *
         * @public
         * @param {string} sValue value to be formatted
         * @returns {string} formatted currency value with 2 digits
         */
        currencyValue: function (iValue) {
            let oFormat = NumberFormat.getFloatInstance({
                "groupingEnabled": true,  // grouping is enabled
                "groupingSeparator": ' ', // grouping separator is '.'
                "groupingSize": 3,        // the amount of digits to be grouped (here: thousand)
                "decimalSeparator": ","   // the decimal separator must be different from the grouping separator
            });
        
            if (!iValue) {
                return oFormat.format(parseFloat(0).toFixed(2));
               
            } else if (typeof iValue === "number") {
                return oFormat.format(parseFloat(iValue).toFixed(2))
            } else {

                return oFormat.format(parseFloat(iValue.replace(',','.').replace(' ','')).toFixed(2));
            }
            

        },
        currencyValueChart: function (iValue) {
            let oFormat = NumberFormat.getFloatInstance({
                "groupingEnabled": true,  // grouping is enabled
                "groupingSeparator": '', // grouping separator is '.'
                "groupingSize": 3,        // the amount of digits to be grouped (here: thousand)
                "decimalSeparator": ","   // the decimal separator must be different from the grouping separator
            });
        
            if (!iValue) {
                return oFormat.format(parseFloat(0).toFixed(0));
               
            } else if (typeof iValue === "number") {
                return oFormat.format(parseFloat(iValue).toFixed(0))
            } else {

                return oFormat.format(parseFloat(iValue.replace(',','.').replace(' ','')).toFixed(0));
            }
            

        },
        budgetSpending: function (actual, budget) {
			let iProgress;
            if (actual === undefined || budget === undefined) {
                return 0;
            }
			if (Number(actual) === 0 || Number(budget) === null) {
				iProgress = 0;
			} else {
				iProgress = parseFloat((Number(actual) / Number(budget)).toFixed(2)) * 100;
			}

			return iProgress;
		},
		budgetSpendingColor: function (actual, budget) {
			let sProgressColor, iProgress;
			if (actual === undefined || budget === undefined) {} else {

				if (Number(actual) === 0 || Number(budget) === null) {
					sProgressColor = "Error";
				} else {
					iProgress = (actual / budget) * 100;
					if (iProgress >= 100) {
						sProgressColor = "Error";
					} else if (iProgress < 99 && iProgress >= 50) {
						sProgressColor = "Critical";
					} else if (iProgress < 50 && iProgress > 0) {
						sProgressColor = "Good";
					} else if (iProgress === 0) {
						sProgressColor = "Good";
					} else {
						//none
					}
				}
			}

			return sProgressColor;
		},
        currencyValueWithCurrency: function (iValue, sCurrency) {
            let oFormat = NumberFormat.getFloatInstance({
                "groupingEnabled": true,  // grouping is enabled
                "groupingSeparator": '', // grouping separator is '.'
                "groupingSize": 3,        // the amount of digits to be grouped (here: thousand)
                "decimalSeparator": ","   // the decimal separator must be different from the grouping separator
            });
            let result;
        
            if (!iValue) {
                result = oFormat.format(parseFloat(0).toFixed(2)) + sCurrency;
                return result;
               
            } else if (typeof iValue === "number") {
                result =  oFormat.format(parseFloat(iValue).toFixed(2)) + sCurrency;
                return result;
            } else {                
                result =  oFormat.format(parseFloat(iValue.replace(',','.').replace(' ','')).toFixed(2)) + sCurrency;
                return result;
            }
            

        },
        currencyValueState: function (iValue) {
     

            if (iValue > 0 ) {
                return "Error"
            } else {
                return  "None"
            }           
        

        },
        currencyValueState2: function (iValue) {
     

            if (iValue > 0 ) {
                return "Success"
            } else {
                return  "Error"
            }           
        

        },
        toNumber: function (sValue) {
            if (!sValue) {
                return 0;
            }

            return Number(sValue);

        },
        ammountValue: function (sValue) {
            if (!sValue) {
                return "";
            }
            var oFormat = NumberFormat.getFloatInstance({
                "groupingEnabled": true,  // grouping is enabled
                "groupingSeparator": '', // grouping separator is '.'
                "groupingSize": 3,        // the amount of digits to be grouped (here: thousand)
                "decimalSeparator": ","   // the decimal separator must be different from the grouping separator
            });
            return oFormat.format(parseFloat(sValue).toFixed(0))

        },
        roundMengeCorrection: function (sValue) {
            if (!sValue) {
                return "";
            }
            var oFormat = NumberFormat.getFloatInstance({
                "groupingEnabled": true,  // grouping is enabled
                "groupingSeparator": '', // grouping separator is '.'
                "groupingSize": 3,        // the amount of digits to be grouped (here: thousand)
                "decimalSeparator": ","   // the decimal separator must be different from the grouping separator
            });
            return oFormat.format(parseFloat(sValue).toFixed(0))

        },
        weightValue: function (sValue) {
            if (!sValue) {
                return "";
            }
            var oFormat = NumberFormat.getFloatInstance({
                "groupingEnabled": true,  // grouping is enabled
                "groupingSeparator": '', // grouping separator is '.'
                "groupingSize": 3,        // the amount of digits to be grouped (here: thousand)
                "decimalSeparator": ","   // the decimal separator must be different from the grouping separator
            });
            return oFormat.format(parseFloat(sValue).toFixed(3))

        },
        percentageValue: function (sValue) {
            if (!sValue) {
                return "";
            }
            let sNewValue = sValue + '%';
            return sNewValue;

        },
        percentageValue: function (sValue) {
            if (!sValue) {
                return "";
            }
            let sNewValue = sValue + '%';
            return sNewValue;

        },
        windowDeliveryColor: function (stype) {
            let sButtonType;
            switch (stype) {
                case false:
                    sButtonType = "Default";
                    break;
                case true:
                    sButtonType = "Emphasized";
                    break;

                default:
                    break;
            }
            return sButtonType;
        },
        blockCustomer: function (stype) {
            let sCustomerBlockIcon;
            switch (stype) {
                case false:
                    sCustomerBlockIcon = "";
                    break;
                case true:
                    sCustomerBlockIcon = "sap-icon://stop";
                    break;

                default:
                    break;
            }
            return sCustomerBlockIcon;
        },
        correctedMaterialStatus: function (stype) {
            let sCorrectedMaterialStatus;
            switch (stype) {
                case true:
                    sCorrectedMaterialStatus = "Information";
                    break;
                case false:
                    sCorrectedMaterialStatus = "None";
                    break;
                default:
                    break;
            }
            return sCorrectedMaterialStatus;
        },
        rowHighlightZb198Status: function (status) {
            let requestStatus;
            switch (status) {
                case "":
                    requestStatus = "Neutral";
                    break;
                case "1":
                    requestStatus = "Success";
                    break;
                case "2":
                    requestStatus = "Information";
                    break;
                case "3":
                    requestStatus = "Information";
                    break;
                case "4":
                    requestStatus = "Information";
                    break;
                case "5":
                    requestStatus = "Information";
                    break;
                case "6":
                    requestStatus = "Information";
                    break;
                case "7":
                    requestStatus = "Information";
                    break;
                case "9":
                    requestStatus = "Error";
                    break;
                case "8":
                    requestStatus = "Warning";
                    break;
                default:
                    requestStatus = "None";
                    break;
            }
            return requestStatus;
        },
        statusInvoiceState1: function (invoiceState) {
            let Status;
            switch (invoiceState) {             
                case "1":
                    Status = "Warning";
                    break;
                case "2":
                    Status = "Success";
                    break;
                case "3":
                    Status = "Success";
                    break;
                case "4":
                    Status = "Success";
                    break;
                case "5":
                    Status = "Success";
                    break;
                case "6":
                    Status = "Success";
                    break;
                default:
                    Status = "None";
                    break;
            }
            return Status;
        },
        statusInvoiceState2: function (invoiceState) {
            let Status;
            switch (invoiceState) {             
                case "1":
                    Status = "None";
                    break;
                case "2":
                    Status = "Warning";
                    break;
                case "3":
                    Status = "Success";
                    break;
                case "4":
                    Status = "Success";
                    break;
                case "5":
                    Status = "Success";
                    break;
                case "6":
                    Status = "Success";
                    break;
                default:
                    Status = "None";
                    break;
            }
            return Status;
        },
        statusInvoiceState3: function (invoiceState) {
            let Status;
            switch (invoiceState) {             
                case "1":
                    Status = "None";
                    break;
                case "2":
                    Status = "None";
                    break;
                case "3":
                    Status = "Warning";
                    break;
                case "4":
                    Status = "Success";
                    break;
                case "5":
                    Status = "Success";
                    break;
                case "6":
                    Status = "Success";
                    break;
                default:
                    Status = "None";
                    break;
            }
            return Status;
        },
        statusInvoiceState4: function (invoiceState) {
            let Status;
            switch (invoiceState) {             
                case "1":
                    Status = "None";
                    break;
                case "2":
                    Status = "None";
                    break;
                case "3":
                    Status = "None";
                    break;
                case "4":
                    Status = "Warning";
                    break;
                case "5":
                    Status = "Success";
                    break;
                case "6":
                    Status = "Success";
                    break;
                default:
                    Status = "None";
                    break;
            }
            return Status;
        },
        statusInvoiceState5: function (invoiceState) {
            let Status;
            switch (invoiceState) {             
                case "1":
                    Status = "None";
                    break;
                case "2":
                    Status = "None";
                    break;
                case "3":
                    Status = "None";
                    break;
                case "4":
                    Status = "None";
                    break;
                case "5":
                    Status = "Warning";
                    break;
                case "6":
                    Status = "Success";
                    break;
                default:
                    Status = "None";
                    break;
            }
            return Status;
        },
        statusInvoiceState5: function (invoiceState) {
            let Status;
            switch (invoiceState) {             
                case "1":
                    Status = "None";
                    break;
                case "2":
                    Status = "None";
                    break;
                case "3":
                    Status = "None";
                    break;
                case "4":
                    Status = "None";
                    break;
                case "5":
                    Status = "Warning";
                    break;
                case "6":
                    Status = "Success";
                    break;
                default:
                    Status = "None";
                    break;
            }
            return Status;
        },
        statusInvoiceState: function (invoiceState) {
            let Status;
            switch (invoiceState) {           

                case "6":
                    Status = "Success";
                    break;
                default:
                    Status = "Warning";
                    break;
            }
            return Status;
        },
        statusInvoiceIcon: function (invoiceState) {
            let Icon;
            switch (invoiceState) {           

                case "1":
                    Icon="sap-icon://account"
                    break;
                case "2":
                    Icon="sap-icon://account"
                    break;
                case "3":
                    Icon="sap-icon://account"
                    break;
                case "4":
                    Icon="sap-icon://account"
                    break;
                case "5":
                    Icon="sap-icon://account"
                    break;
                case "6":
                    Icon="sap-icon://account"
                    break;
                default:
                    Icon = "";
                    break;
            }
            return Icon;
        },
        statusInvoiceText: function (invoiceState) {
            let Text;
            switch (invoiceState) {           

                case "1":
                    Text="Todo1"
                    break;
                case "2":
                    Text="Todo2"
                    break;
                case "3":
                    Text="Todo3"
                    break;
                case "4":
                    Text="Todo4"
                    break;
                case "5":
                    Text="Todo5"
                    break;
                case "6":
                    Text="Todo6"
                    break;
                default:
                    Text = "";
                    break;
            }
            return Text;
        },
        statusInvoiceUploadEnabled: function (invoiceState) {
            let uploadEnabled;
            switch (invoiceState) {           

                case "1":
                    uploadEnabled=true;
                    break;
               
                default:
                    uploadEnabled = false;
                    break;
            }
            return uploadEnabled;
        },
        itemTypeStatusIcon: function (itemTypeStatusIcon) {
            let statusIcon;
            switch (itemTypeStatusIcon) {
                case "X":
                    statusIcon = "sap-icon://bell";
                //   statusIcon = "sap-icon://BusinessSuiteInAppSymbols/icon-goods";
                    break;
                case "F":
                    statusIcon = "sap-icon://bell";
                    // statusIcon = "sap-icon://BusinessSuiteInAppSymbols/icon-goods";
                    break;    
                default:
                    statusIcon = "";
                    break;
            }
            return statusIcon;
        },
   
        columnListItemType: function (status,paymentType,paymentException,blocked,paymentCash) {
            let navigationType;

            if (status === "264" && paymentType === "P") {
                navigationType =  "Inactive";
            } else if (status === "265") {
                navigationType =  "Inactive";            
            } else if (status === "264" && paymentType === "H" && paymentException === true) {
                navigationType =  "Inactive";       }
            else if (status === "264" && paymentType === "H" && Number(paymentCash) >= 1000 ) {
                navigationType =  "Inactive";            
            } 
            else if (status === "264" && paymentType === "X") {
                navigationType =  "Inactive";            
            } else {
                navigationType =  "Navigation";
            }

            if (blocked === true) {
                // navigationType =  "Inactive";     
            }
      
            return navigationType;
        },
       
      
      
     
        rowHighlightSalesDocumentRjcnReason: function (sStatus) {
            switch (sStatus) {
                case "":
                    return "None";

                default:
                    return "Warning";

            }
        },
        textInfoLabelSDOrder: function (stype) {
            let sTextLabel;
            switch (stype) {
                case true:
                    sTextLabel = "Změna zakázky";
                    break;
                case false:
                    sTextLabel = "Nová zakázka";
                    break;
                default:
                    break;
            }
            return sTextLabel;
        },
        dateTimeDispWithActuTime: function (sTime) {
            if (sTime === undefined) {
                return;
            }

            if (sTime.ms === 0) {
                var oTimeFormat = sap.ui.core.format.DateFormat
                    .getTimeInstance({
                        pattern: "kk:mm"
                    });

                var sTimeActual = new Date();
                var sTimeNew = oTimeFormat.format(new Date(sTimeActual.getTime()));
                return sTimeNew;
            }

            if (sTime.ms) {
                oTimeFormat = sap.ui.core.format.DateFormat
                    .getTimeInstance({
                        pattern: "kk:mm"
                    });

                // sTimeNew = this._getDateTimewithZone();
                sTimeNew = oTimeFormat.format(new Date(sTime.ms));
                return sTimeNew;
            }
            if (sTime) {
                oTimeFormat = sap.ui.core.format.DateFormat
                    .getTimeInstance({
                        pattern: "kk:mm"
                    });

                // sTimeNew = this._getDateTimewithZone();
                sTimeNew = oTimeFormat.format(new Date(sTime.getTime()));
                return sTimeNew;
            }

        },
        dateTimeDispString: function (sTime) {
            var oTimeFormat = sap.ui.core.format.DateFormat
                .getTimeInstance({
                    pattern: "kk:mm:ss"
                });
            var sTimeNew = oTimeFormat.format(new Date(sTime));

            return sTimeNew;


        },
        dateTimeDisp: function (sTime) {
            if (sTime === null) {
                return;
            }
            if (sTime === undefined) {
                return;
            }
            if (sTime.ms === 0) {
                if (sTime.ms === 0) {
                    var oTimeFormat = sap.ui.core.format.DateFormat
                        .getTimeInstance({
                            pattern: "kk:mm:ss"
                        });

                    var sTimeActual = new Date(0, 0, 0, 0, 0, 0, 0);
                    var sTimeNew = oTimeFormat.format(new Date(sTimeActual.getTime()));
                    return sTimeNew;
                }
            }
            if (sTime) {
                var oTimeFormat = sap.ui.core.format.DateFormat
                    .getTimeInstance({
                        pattern: "kk:mm:ss"
                    });
                // var TZOffsetMs = new Date(0).getTimezoneOffset()*60*1000;
                var TZOffsetMs = new Date(0).getTimezoneOffset() * 60 * 1000;
                // var sTimeNew = oTimeFormat.parse(sTime.ms)+ TZOffsetMs;
                var sTimeNew = oTimeFormat.format(new Date(sTime.ms + TZOffsetMs));
                // var sTimeNew = oTimeFormat.format(new Date(sTime.ms));

                // var sTimeNew = new Date(oTimeFormat.parse(sTime).getTime());
                return sTimeNew;
            }

        },
        odataDate: function (sDate) {
            if (sDate) {
                var oDateFormat = sap.ui.core.format.DateFormat
                    .getDateTimeInstance({
                        pattern: "yyyy-MM-ddTHH:mm:ss"
                    });
                // return oDateFormat.format(sDate);
                var TZOffsetMs = new Date(sDate).getTimezoneOffset() * 60 * 1000;
                var oDate = new Date(sDate);
                var dNewDate = oDateFormat.format(new Date(oDate.getTime() - 2 * TZOffsetMs));
                return dNewDate;
            } else {
                return sDate;
            }
        },
        dateFormatWithWeekDay: function (sDate) {
            if (sDate) {
                var oDateFormat = sap.ui.core.format.DateFormat
                    .getDateTimeInstance({
                        pattern: "EEE, dd.MM.yyyy"
                    });

                var dNewDate = oDateFormat.format(new Date(sDate));
                return dNewDate;
            } else {
                return sDate;
            }
        },
        thumbnailUrl: function (mimeType, attachUrl) {
			var sUrlAttach;
			switch (mimeType) {
			case "image/jpeg":
				sUrlAttach = attachUrl;
				break;
			case "application/pdf":
				sUrlAttach = "../attach/pdf.png";
				// sUrlAttach = "/sap/bc/bsp/sap/zhermapp/attach/pdf.png";
				break;
			default:
			}
			return sUrlAttach;
		},
    };
});