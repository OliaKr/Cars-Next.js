import { CarProps, Filterprops } from "@/types";

export async function fetchCars(filters: Filterprops) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    "X-RapidAPI-Key": "81fabdae54msh15836ddb3c8dba9p1e2622jsn07ccc75524d2",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const carImages = [
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436511/cars/11_ojy8gm.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436511/cars/13_i2opev.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436511/cars/14_kt4wqa.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436511/cars/12_kgkhrt.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436674/cars/21_sbxrog.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436674/cars/23_f1gjnh.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436674/cars/24_ts7n2z.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436674/cars/22_a1v8iy.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436752/cars/31_qykyka.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436752/cars/32_fjgqvz.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436771/cars/33_rbz1yy.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436752/cars/34_kak5vd.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436826/cars/51_isptc7.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436826/cars/52_avoypd.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436826/cars/53_qxybs9.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436826/cars/54_kpkfat.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436899/cars/61_str7sa.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436901/cars/62_nzprnq.png",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436901/cars/64_uvifcc.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436903/cars/63_zrn2bm.png",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436964/cars/71_litu1x.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436964/cars/73_q6cld7.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436965/cars/72_eo6eee.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691436966/cars/74_oykg3y.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437033/cars/81_hhujvc.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437034/cars/82_f3aqg5.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437034/cars/83_we6wjw.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437034/cars/84_y6odgb.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437108/cars/91_jvjb4f.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437108/cars/93_jr9vjt.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437108/cars/94_xvsdbi.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437108/cars/92_wbviat.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437168/cars/101_qfgijg.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437168/cars/104_kb0hz6.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437168/cars/103_yaewph.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437168/cars/102_z2gby4.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437245/cars/110_fa891q.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437245/cars/111_yx717w.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437245/cars/112_t8fqpx.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437245/cars/114_w8muno.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437316/cars/121_whdupo.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437316/cars/123_yluvsd.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437316/cars/124_wajc8a.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437316/cars/122_ek15ga.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437382/cars/131_egozvn.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437382/cars/134_lpg7gw.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437382/cars/132_eyiiab.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437382/cars/133_jixwzr.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437454/cars/151_qik68z.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437454/cars/152_s8ebnh.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437453/cars/154_bqi2o3.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437453/cars/153_zauckz.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437520/cars/161_u5upxq.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437520/cars/162_r7qxg5.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437520/cars/163_sbh5h3.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437521/cars/164_qtthyn.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437590/cars/171_x0bvvh.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437589/cars/172_fq4gu2.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437590/cars/174_wcgrux.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437590/cars/173_ykyou2.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437685/cars/181_fjbjek.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437685/cars/183_qzaxbp.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437686/cars/184_mtuhhd.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437685/cars/182_jdtd2c.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437744/cars/191_fec9kc.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437743/cars/192_g35osl.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437744/cars/194_e9ttbu.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437744/cars/193_itv9rx.jpg",
  },
  {
    1: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437823/cars/201_l6300b.jpg",
    2: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437823/cars/202_m4gvbq.jpg",
    3: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437824/cars/203_bs0sbl.jpg",
    4: "https://res.cloudinary.com/dzdhk1o3q/image/upload/v1691437823/cars/204_lcfyo7.jpg",
  },
];
