// TODO: fill this out according to api
export type Coupon = {
  id: string,
  company: string,
  details: string,
  discount: number,
};

const URL = '';

export const getCoupon = async (radius: number) => {
  const req = `${URL}/get`;
  const res = await fetch(req);
  const json: Coupon[] = await res.json();
  return json;
}

export const saveCoupon = async (coupon: Coupon) => {
  const req = `${URL}/post`;
  const res = await fetch(req, {
    method: 'POST',
    body: JSON.stringify({ coupon: coupon }),
  });
  return res.ok;
}

export const login = async (username: string, password: string) => {
  const req = `${URL}/get`;
  const res = await fetch(req);
  const json = await res.json();
  return json;
}