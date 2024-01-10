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
                "groupingSeparator": '', // grouping separator is '.'
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
        itemTypeStatusState: function (itemTypeStatus) {
            let Status;
            switch (itemTypeStatus) {
                case "X":
                    Status = "Warning";
                    break;
                case "F":
                    Status = "Information";
                    break;  
                default:
                    Status = "None";
                    break;
            }
            return Status;
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
        paymentType: function (paymentType) {
            let paymentTypeReText;
            switch (paymentType) {
                case "H":
                    paymentTypeReText = "HT";
                    break;
                case "":
                    paymentTypeReText = "FA";
                    break;   
                case "X":
                    paymentTypeReText = "SA";
                    break;
                default:
                    paymentTypeReText = "FA";
                    break;
            }
            return paymentTypeReText;
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
        blockCustomerText: function (stype) {
            let sCustomerBlockText;
            switch (stype) {
                case false:
                    sCustomerBlockText = "";
                    break;
                case true:
                    sCustomerBlockText = "Blokováno";
                    break;
                default:
                    break;
            }
            return sCustomerBlockText;
        },
        typeStatus: function (sStatus) {
         
            switch (sStatus) {
                case "O":
                    return "Success"; 

                case "V":
                    return "None";             
                    case "N":
                        return "Error";                   

                default:
                    return "None";

            }
        },
        blockedStatusState: function (blocked) {
         
            switch (blocked) {
                case true:
                    return "Error"; 

                case false:
                    return "None";          
        
            }
        },
      
        blockedIcon: function (blocked) {
         
            switch (blocked) {
                case true:
                    return "sap-icon://alert"; 

                case false:
                    return "None";          
        
            }
        },
        deliveryStatusDisplay: function (status) {
   
            switch (status) {
                case "264":
                    return "Success"; 

                case "265":
                    return "Error";               

                case "":
                    return "None"; 
                case "220":
                    return "Warning"; 
                case "225":
                    return "Warning";   
                case "227":
                    return "Warning";                  
                case "230":
                    return "Warning";                  
                case "235":
                    return "Warning";                  
                case "237":
                    return "Warning";                  
                case "240":
                    return "Warning";                  
                case "245":
                    return "Warning";                  
                case "250":
                    return "Warning";                  
                case "255":
                    return "Warning";                  
                case "257":
                    return "Warning";                  
                case "258":
                    return "Warning";                  
                case "259":
                    return "Warning";                  
                case "":
                    return "None";

                default:
                    return "None";

            }
        },
        sdStatusName: function (sStatus) {
            // *1  Nová
            // *2  Zrušena
            // *3  Vystaven DL
            // *4  Výdej ze skladu
            // *5  Ukončení návštěvy
            // *6  Vyfakturováno
            switch (sStatus) {
                case "1":
                    return "Nová"; //Nová
                case "2":
                    return "Zrušena"; //Zrušená    
                case "3":
                    return "Vystaven DL"; // Vystaven DL
                case "4":
                    return "Výdej ze skladu"; //Výdej ze skladu
                case "5":
                    return "Ukončení návštěvy";     //Ukončení návštěvy             
                case "6":
                    return "Vyfakturováno";// 6  Vyfakturováno                  
                default:
                    return "";

            }
        },
        sdStatusIcon: function (sStatus) {
            // *1  Nová
            // *2  Zrušena
            // *3  Vystaven DL
            // *4  Výdej ze skladu
            // *5  Ukončení návštěvy
            // *6  Vyfakturováno
            switch (sStatus) {
                case "1":
                    return "sap-icon://add-favorite"; //Nová
                case "2":
                    return "sap-icon://cancel"; //Zrušená    
                case "3":
                    return "sap-icon://activity-items"; // Vystaven DL
                case "4":
                    return "sap-icon://addresses"; //Výdej ze skladu
                case "5":
                    return "sap-icon://hr-approval";     //Ukončení návštěvy             
                case "6":
                    return "sap-icon://decision";// 6  Vyfakturováno                  
                default:
                    return "";

            }
        },
        sdStatusState: function (sStatus) {
            // *1  Nová
            // *2  Zrušena
            // *3  Vystaven DL
            // *4  Výdej ze skladu
            // *5  Ukončení návštěvy
            // *6  Vyfakturováno
            switch (sStatus) {
                case "1":
                    return "Information"; //Nová

                case "2":
                    return "Error"; //Zrušená                 

                case "3":
                    return "Warning"; // Vystaven DL
                case "4":
                    return "Warning"; //Výdej ze skladu
                case "5":
                    return "Warning";     //Ukončení návštěvy             
                case "6":
                    return "Success";// 6  Vyfakturováno

                default:
                    return "None";

            }
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