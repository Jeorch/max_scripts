function getSalesAgg(collection, scope){
    db[collection].mapReduce(
            function() { emit(this.MARKET, this.f_sales); },
            function(key, values) { return Array.sum(values); }, {
                query: { MARKET: { $exists: true } },
                out: {
                    replace: collection + scope,
                    db: "pharbers-max-aggregation"
                }
            }
        );
}

function getCompanySalesAgg(collection, scope){
    db[collection].mapReduce(
            function() { emit(this.MARKET, this.f_sales); },
            function(key, values) { return Array.sum(values); }, {
                query: { belong2company: 1 },
                out: {
                    replace: collection + scope,
                    db: "pharbers-max-aggregation"
                }
            }
        );
}

db.getCollectionNames().forEach(
    getSalesAgg(collection, "_NATION_SALES");
    getSalesAgg(collection, "_PROVINCE_SALES");
    getSalesAgg(collection, "_CITY_SALES");
    getCompanySalesAgg(collection, "_NATION_COMPANY_SALES");
    getCompanySalesAgg(collection, "_PROVINCE_COMPANY_SALES");
    getCompanySalesAgg(collection, "_CITY_COMPANY_SALES");
);
