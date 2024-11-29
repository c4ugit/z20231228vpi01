sap.ui.define([
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Filter, FilterOperator) {
    "use strict";

    return {

        getFiltersStatusOLD: function (Status) {
            let aFilter;
            aFilter = [
                new Filter("Zb198Status", FilterOperator.EQ, "9"),
                new Filter("Zb198Status", FilterOperator.EQ, "8")

            ];
            return aFilter;

        },
        getFiltersStatus: function (Status) {
            let aFilter;
            aFilter = [
                new Filter("Zb198Status", FilterOperator.EQ, "2"),
                new Filter("Zb198Status", FilterOperator.EQ, "3"),
                new Filter("Zb198Status", FilterOperator.EQ, "4"),
                new Filter("Zb198Status", FilterOperator.EQ, "5"),
                new Filter("Zb198Status", FilterOperator.EQ, "6"),
                new Filter("Zb198Status", FilterOperator.EQ, "7")

            ];
            return aFilter;

        },
        getFiltersStatus01: function () {
            let aFilter;
            aFilter = [
                new Filter("Zb198Status", FilterOperator.EQ, "1")
         

            ];
            return aFilter;

        },

        /*
        * Nastavení Filtrů pro SimCustomer
        */
        setFiltersCustomerList: function (sQuery) {
            var aFilter;
            aFilter = [
                new Filter({
                    and: false,
                    filters: [
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("Customer", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("CustomerName", FilterOperator.Contains, sQuery)
                            ]
                        }),

                        new Filter({
                            and: true,
                            filters: [
                                new Filter("CityName", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("StreetName", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("PostalCode", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("katr8", FilterOperator.Contains, sQuery)
                            ]
                        }),                   
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("vtext", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("StreetName", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("ICO", FilterOperator.Contains, sQuery)
                            ]
                        })
                    ]

                })

            ];

            return aFilter[0];
        },
        /*
        * Nastavení Filtrů pro SimCustomer
        */
        setFiltersShipmentList: function (sQuery) {
            var aFilter;
            aFilter = [
                new Filter({
                    and: false,
                    filters: [
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("Customer", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("CustomerName", FilterOperator.Contains, sQuery)
                            ]
                        }),

                        new Filter({
                            and: true,
                            filters: [
                                new Filter("CityName", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("StreetName", FilterOperator.Contains, sQuery)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("ICO", FilterOperator.Contains, sQuery)
                            ]
                        })
                    ]

                })

            ];

            return aFilter[0];
        },
        setFiltersEmptiesList: function (sQuery) {
            var aFilter;
            aFilter = [
                new Filter({
                    and: false,
                    filters: [
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("Matnr", FilterOperator.Contains, sQuery)
                            ]
                        }),

                        new Filter({
                            and: true,
                            filters: [
                                new Filter("Maktx", FilterOperator.Contains, sQuery)
                            ]
                        })
                    ]

                })

            ];

            return aFilter[0];
        },
        setFiltersOverViewList: function (lifnr,robot) {
            var aFilter;
            aFilter = [
                new Filter({
                    and: false,
                    filters: [
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("Lifnr", FilterOperator.EQ, lifnr)
                            ]
                        }),
                        new Filter({
                            and: true,
                            filters: [
                                new Filter("Ernam", FilterOperator.EQ, robot)
                            ]
                        })                   
                    ]
                })

            ];

            return aFilter[0];
        }
    }
});


