sap.ui.define([

], function () {
    "use strict";

    return {
        getDateTime: function (Y, M, D, h, m, s) {
            var oTime;
            oTime = new Date(Y, M, D, h, m, s);
            return oTime;
        },
        getTomorrow: function () {
			var  oTime;
			var dDateTomorrow = new Date();
			dDateTomorrow.setDate(dDateTomorrow.getDate()+1);
			oTime = new Date(dDateTomorrow.getFullYear(), dDateTomorrow.getMonth(), dDateTomorrow.getDate(), 0, 0, 0, 0);
			return oTime;
		},  
        getLastDayOfYear: function () {
			let d;
			var dDate = new Date();
			dDate.setDate(dDate.getDate());
			d = new Date(dDate.getFullYear(), 11, 31, 0, 0, 0, 0);
			return d;
		},  
        getToday: function () {
			let dToday;
			var dDate = new Date();
			dDate.setDate(dDate.getDate());
			dToday = new Date(dDate.getFullYear(), dDate.getMonth(), dDate.getDate(), 0, 0, 0, 0);
			return dToday;
		},  
        getDateTimeZero: function () {
			var  oTime;
			var dDate = new Date();		
			oTime = new Date(dDate.getFullYear(), dDate.getMonth(), dDate.getDate(), 0, 0, 0, 0);
			return oTime;
		},
        setToWholeHour: function (oDate) {
			let  oDateNew;	
            let oTime = {};	
            //oDateNew = this.getDateTime(oDate.getFullYear(), oDate.getMonth(), oDate.getDate(), oDate.getHours(), 0,0);		
            oDateNew = this.getDateTime(oDate.getFullYear(), oDate.getMonth(), oDate.getDate(), 0, 0,0);		
            oTime.__edmType = "Edm.Time";
			oTime.ms = oDateNew.getTime();
            return oTime;
		},
        changeTime: function (oEvent, sProperty,that,modelname) {          
			let oTime = {};
			let oDate = {};
			let oDateToday = {};
			let oDateTP = {};

			oDateToday = this.getDateTimeZero();
			oDateTP = oEvent.getSource().getProperty("dateValue");
			oDate = this.getDateTime(oDateToday.getFullYear(), oDateToday.getMonth(), oDateToday.getDate(), oDateTP.getHours(), oDateTP.getMinutes(),
				oDateTP.getSeconds());
			oTime.__edmType = "Edm.Time";
			oTime.ms = oDate.getTime();

			oEvent.getSource().getModel(modelname).setProperty(sProperty, oTime);
		},  
        correctionTime: function (oDate1970, sProperty,that,modelname) {          
			let oTime = {};
			let oDate = {};
			let oDateToday = {};
			let oDateTP = {};
			let iTZOffsetMs = {};

			oDateToday = this.getDateTimeZero();
			oDateTP = oDate1970;
			oDate = this.getDateTime(oDateToday.getFullYear(), oDateToday.getMonth(), oDateToday.getDate(), oDateTP.getHours(), oDateTP.getMinutes(),
				oDateTP.getSeconds());
                iTZOffsetMs = oDateTP.getTimezoneOffset() * 60 * 1000;				
			oTime.__edmType = "Edm.Time";
			oTime.ms = oDate.getTime() + iTZOffsetMs;

			that.getModel(modelname).setProperty(sProperty, oTime);
		}        

    }
})