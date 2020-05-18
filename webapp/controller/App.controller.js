sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("mod.models.controller.App", {
		onInit: function () {
			var oMaterial = { 
					material: {
						id: "80009000",
						description: "Lenovo X250"
					},
					details: {
						longDescription: "Teste"
					}
				},
				oModel = new JSONModel(oMaterial),
				oView = this.getView();

			oModel.setDefaultBindingMode("OneWay");
			oView.setModel(oModel);
			
			// var oInput = this.getView().byId("inputMaterialDesc");
			// oInput.bindElement("/material");
			// oInput.bindProperty("value", "description");
		},
		
		press: function(oEvent) {
			debugger;
		}
	});
});