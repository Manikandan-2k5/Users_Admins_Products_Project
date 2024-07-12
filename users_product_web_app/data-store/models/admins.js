store.registerModel("admins",{
    name:Lyte.attr("string",{mandatory:true, minLength:1}),
    phone_no:Lyte.attr("string",{mandatory:true, minLength:10, maxLength:11}),
    email:Lyte.attr("string",{mandatory:true, minLength:5}),
    password:Lyte.attr("string",{mandatory:true, minLength:5})
});
