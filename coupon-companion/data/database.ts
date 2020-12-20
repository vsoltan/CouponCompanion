// TODO: fill this out according to api
type coupon = {
  
};

const URL = '';

export const getCoupon = async (radius: number) => {
  const req = `${URL}/get`;
  const res = await fetch(req);
  const json: coupon[] = await res.json();
  return json;
}

export const saveCoupon = async (coupon: coupon) => {
  const req = `${URL}/post`;
  const res = await fetch(req, {
    method: 'POST',
    body: JSON.stringify({ coupon: coupon }),
  });
  return res.ok;
}