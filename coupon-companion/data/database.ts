// TODO: fill this out according to api
export type Coupon = {
  id: string,
  company: string,
  details: string,
  discount: number,
};

const URL = 'localhost:3000';

export const getCoupons = async (radius: number) => {
  const req = `${URL}/get`;
  let json: Coupon[] = [];
  try {
    const res = await fetch(req);
    json = await res.json();
  } catch (e) {
    console.log(e);
  }
  return json;
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
  const req = `${URL}/get`;
  let json;
  try {
    const res = await fetch(req);
    json = await res.json();
  } catch (e) {
    console.log(e);
  }
  return json;
}