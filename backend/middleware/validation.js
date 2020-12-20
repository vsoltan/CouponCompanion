const Joi = require('@hapi/joi');

const validCouponSchema = Joi.object({
    companyName: Joi.string()
        .alphanum()
        .min(1)
        .required(),

    description: Joi.string()
        .min(1)
        .required(),

    discountType: Joi.string()
        .required(), 

    expirationDate: Joi.date()
        .required(),
});

const isValidCoupon = (couponObj) => {
    return validCouponSchema.validate(couponObj); 
}; 

module.exports = {
    isValidCoupon: isValidCoupon, 
};

// {
//     "companyName": "Starbucks",
//     "description": "save $5 on pumpkin spice latte",
//     "discountType": "dollar",
//     "expirationDate": "1/3/2021"
// }

// {
//     "firstName": "Valeriy",
//     "lastName": "Soltan",
//     "username": "vsoltan",
//     "password": "password"
// }