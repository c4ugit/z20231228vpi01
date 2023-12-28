/*global QUnit*/

sap.ui.define([
	"zmmvpi01app/z20231228mmvpi01/controller/OverViewVendorInvoice.controller"
], function (Controller) {
	"use strict";

	QUnit.module("OverViewVendorInvoice Controller");

	QUnit.test("I should test the OverViewVendorInvoice controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
