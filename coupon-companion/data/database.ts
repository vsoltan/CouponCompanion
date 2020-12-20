import AsyncStorage from '@react-native-community/async-storage';

export type Coupon = {
  id: string,
  company: string,
  details: string,
  discount: number,
};

const URL = 'http://192.168.1.182:3000';
const DiscountURL = 'https://api.discountapi.com/v2/deals'
const DiscountKey = 'RxRkFaGr';

export const getCoupons = async (radius: number) => {
  const req = `${DiscountURL}?api_key=${DiscountKey}`;
  let json: any;
  let list: Coupon[];
  try {
    const res = await fetch(req);
    json = await res.json();
    list = json.deals.map((item) => {
      let { deal } = item
      return {
        id: deal.id,
        company: deal.merchant.name,
        details: deal.title,
        discount: deal.discount_percentage,
      }
    })
  } catch (e) {
    console.log(e);
  }
  return list;
}

export const saveCoupon = async (coupon: Coupon) => {
  const req = `${URL}/post`;
  try {
    const res = await fetch(req, {
      method: 'POST',
      body: JSON.stringify({ coupon: coupon }),
    });
    return res.ok;
  } catch (e) {
    console.log(e);
  }
  return false;
}

export const login = async (username: string, password: string) => {
  const req = `${URL}/auth/login`;
  const body = {
    username: username,
    password: password,
  }
  try {
    const res = await fetch(req, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '' + JSON.stringify(body).length,
      }
    });
    if (res.ok) {
      const token = await res.text();
      console.log(token);
      storeAuth(token);
      return true;
    } else {
      console.log(res.status);
    }
  } catch (e) {
    console.log(e);
  }
  return false;
}

export const signup = async (first: string, last: string, username: string, password: string) => {
  const req = `${URL}/auth/register`;
  const body = {
    firstName: first,
    lastName: last,
    username: username,
    password: password,
  }
  try {
    const res = await fetch(req, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '' + JSON.stringify(body).length,
      }
    });
    if (res.ok) {
      const token = await res.text();
      console.log(token);
      storeAuth(token);
    }
  } catch (e) {
    console.log(e)
  }
  return false;
}

const storeAuth = async (value: string) => {
  try {
    await AsyncStorage.setItem('auth', value)
  } catch (e) {
    console.log(e)
  }
}