# Welcome to Coupon Companion!

This is a documentation of all the routes we are using for our application. This provides us with easy reference to our API and keeps our standard clean and consistent.

> Note that throughout the guide we will omit host:port from the API routes.

## Authentication
  
### Login `/auth/login`
**Method:**  `POST`
 **Returns:** JSON Web Token valid for two hours. 

Login body structure:

```
{
	username: string,
	password: string
}
```

HTTP Return Codes: 
```
	200: Success 
	400: Registration Error 
	422: Invalid request body 
```

### Registration `/auth/register`
**Method:**  `POST`
**Returns:** JSON Web Token valid for two hours. 
```
{
	firstName: string, 
	lastName: string, 
	username: string,
	password: string
}
```

HTTP Return Codes: 
```
	200: Success 
	401: Invalid password 
	422: Invalid request body 
```
## Coupons

### CouponObject
```
{
	id              (number):   unique identifier for a local deal or discount. 
	company         (string):   name of the merchant offering the coupon. 
	description     (string):   immediately relevant information about the deal.
	fineprint       (string):   additional details about the deal, including availability, 
	                            locations, and other restrictions. 
	discount: 		(number):   0 by default, otherwise absolute value of price delta.			
	discountType:	(object):   See discountType for additional details. 	
	location: 		(string):   coordinate string. 
	website: 		(string):   URL string to get more information from the source.
}
```
#### discountType 
```
	0: Percentage eg. 50% off  
	1: Price eg. $40 off 
	2: Miscellaneous 
```
### Get Coupon Library (`/coupons/library`)
**Method:**  `GET`
**Headers:** `auth-token` 
**Returns:** an `Array` of `CouponObject`
HTTP Return Codes: 
```
	200: Success 
	404: User-token id mismatch 
```

### Add Coupon to Library (`/coupons/add`)
**Method:**  `POST`
**Headers:** `auth-token` 
**Returns:** `void`
Body: 
```
{
	coupon: CouponObject
}
```

HTTP Return Codes: 
```
	200: Success 
	400: Failed to update database collection 
	422: Invalid request body 
```

## UserProfile 
### UserDocument 
```
{
	firstName 		(string) 
	lastName 		(string) 
	username 		(string) 
	totalSavings 	(number)
}
```
**Method:**  `GET`
**Headers:** `auth-token` 
**Returns:**  a single `Object` of type `UserDocument` 

HTTP Return Codes: 
```
	200: Success 
	404: User-token id mismatch 
```