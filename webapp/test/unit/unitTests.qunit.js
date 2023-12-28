/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zmmvpi01app/z20231228mmvpi01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
