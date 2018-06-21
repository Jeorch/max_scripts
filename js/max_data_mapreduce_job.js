db.getCollectionNames().forEach(
    function(collection) {
        db[collection].mapReduce(
            function() { emit(this.MARKET, this.f_sales); },
            function(key, values) { return Array.sum(values); }, {
                query: { MARKET: { $exists: true } },
                out: {
                    replace: collection + "_NATION_SALES",
                    db: "pharbers-max-aggregation"
                }
            }
        );
        db[collection].mapReduce(
            function() { emit(this.MARKET, this.f_sales); },
            function(key, values) { return Array.sum(values); }, {
                query: { belong2company: 1 },
                out: {
                    replace: collection + "_NATION_COMPANY_SALES",
                    db: "pharbers-max-aggregation"
                }
            }
        );
        db[collection].mapReduce(
            function() { emit(this.Province, this.f_sales); },
            function(key, values) { return Array.sum(values); }, {
                query: { MARKET: { $exists: true } },
                out: {
                    replace: collection + "_PROVINCE_SALES",
                    db: "pharbers-max-aggregation"
                }
            }
        );
        db[collection].mapReduce(
            function() { emit(this.Province, this.f_sales); },
            function(key, values) { return Array.sum(values); }, {
                query: { belong2company: 1 },
                out: {
                    replace: collection + "_PROVINCE_COMPANY_SALES",
                    db: "pharbers-max-aggregation"
                }
            }
        );
        db[collection].mapReduce(
            function() { emit(this.City, this.f_sales); },
            function(key, values) { return Array.sum(values); }, {
                query: { MARKET: { $exists: true } },
                out: {
                    replace: collection + "_CITY_SALES",
                    db: "pharbers-max-aggregation"
                }
            }
        );
        db[collection].mapReduce(
            function() { emit(this.City, this.f_sales); },
            function(key, values) { return Array.sum(values); }, {
                query: { belong2company: 1 },
                out: {
                    replace: collection + "_CITY_COMPANY_SALES",
                    db: "pharbers-max-aggregation"
                }
            }
        );
    }
);