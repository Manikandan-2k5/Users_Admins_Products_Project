store.registerModel("products",{
    product_id:Lyte.attr("string", { primaryKey : true }),
    product_name:Lyte.attr("string", {minLength:5, mandatory:true}),
    product_price:Lyte.attr("number", {mandatory:true, minimum:1}),
    product_brand:Lyte.attr("string", {minLength:2, mandatory:true}),
    product_origin:Lyte.attr("string", {minLength:2, mandatory:true})
});
