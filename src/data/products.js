const products = [
  // BAGEL
  {
    id: 0,
    title: 'BEST3 베이글 6EA',
    price: '30,000원',
    image: process.env.PUBLIC_URL + '/images/babel_01.jpg',
    category: 'BAGEL',
    kcal: '250kcal',
    capacity: '145g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 감자(국산), 연유, 마요네즈, 후추, 소금',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },

  {
    id: 1,
    title: 'MD pick 베이글 6EA',
    price: '25,000원',
    image: process.env.PUBLIC_URL + '/images/babel_02.jpg',
    category: 'BAGEL',
    kcal: '100g/110g/145g/114g/110g/115g',
    capacity: '145g',
    expiration: '제조일로부터 7일',
    // ingredients: '',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },

  {
    id: 2,
    title: '[5+1] 플레인 베이글',
    price: '17,500원',
    image: process.env.PUBLIC_URL + '/images/babel_03.jpg',
    category: 'BAGEL',
    kcal: '200kacl',
    capacity: '105g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },

  {
    id: 3,
    title: '[5+1] 카야 버터 베이글',
    price: '30,000원',
    image: process.env.PUBLIC_URL + '/images/babel_04.jpg',
    category: 'BAGEL',
    kcal: '312kcal',
    capacity: '160g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 카야잼(말레이시아), 버터(프랑스)',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 4,
    title: '[5+1] 감자 베이글',
    price: '29,000원',
    image: process.env.PUBLIC_URL + '/images/babel_05.jpg',
    category: 'BAGEL',
    kcal: '270kcal',
    capacity: '145g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 감자(국산), 연유, 마요네즈, 후추, 소금',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 5,
    title: '[5+1] 소금 버터 베이글',
    price: '24,000원',
    image: process.env.PUBLIC_URL + '/images/babel_01.jpg',
    category: 'BAGEL',
    kcal: '288kcal',
    capacity: '114g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터(프랑스)',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 6,
    title: '[5+1] 참깨 베이글',
    price: '20,000원',
    image: process.env.PUBLIC_URL + '/images/babel_07.jpg',
    category: 'BAGEL',
    kcal: '236kcal',
    capacity: '110g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 참깨(국산)',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 7,
    title: '[5+1] 할라피뇨 베이컨 베이글',
    price: '32,500원',
    image: process.env.PUBLIC_URL + '/images/babel_08.jpg',
    category: 'BAGEL',
    kcal: '317kcal',
    capacity: '165g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 할라피뇨(멕시코), 트러플베이컨(국내산)',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 8,
    title: '[5+1] 올리브 베이글',
    price: '24,000원',
    image: process.env.PUBLIC_URL + '/images/babel_09.jpg',
    category: 'BAGEL',
    kcal: '180kcal',
    capacity: '115g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 올리브(스페인), 후추',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 9,
    title: '[5+1] 어니언 체다치즈 베이글',
    price: '24,000원',
    image: process.env.PUBLIC_URL + '/images/babel_10.jpg',
    category: 'BAGEL',
    kcal: '255kcal',
    capacity: '110g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 양파(국산)',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 10,
    title: '[5+1] 팥 소보로 베이글',
    price: '29,000원',
    image: process.env.PUBLIC_URL + '/images/babel_11.jpg',
    category: 'BAGEL',
    kcal: '277kcal',
    capacity: '167g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 팥앙금(국산), 아몬드가루',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 11,
    title: '[5+1] 모카번 베이글', price: '32,500원',
    image: process.env.PUBLIC_URL + '/images/babel_12.jpg',
    category: 'BAGEL',
    kcal: '365kcal',
    capacity: '180g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 버터(덴마크), 에스프레소',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },
  {
    id: 12,
    title: '[5+1] 무화과 베이글',
    price: '29,000원',
    image: process.env.PUBLIC_URL + '/images/babel_13.jpg',
    category: 'BAGEL',
    kcal: '187kcal',
    capacity: '130g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 무화과조림(국산)',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },

  {
    id: 13,
    title: '베이글칩',
    price: '4,500원',
    image: process.env.PUBLIC_URL + '/images/babel_14.jpg',
    category: 'BAGEL',
    kcal: '177kcal',
    capacity: '100g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 참깨(국산), 사탕수수 설탕(말라위)',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },

  {
    id: 14,
    title: '슬로베이글 개별 구매',
    price: '3,500원',
    image: process.env.PUBLIC_URL + '/images/babel_15.jpg',
    category: 'BAGEL',
    kcal: '180kcal',
    capacity: '110g',
    expiration: '제조일로부터 7일',
    ingredients: '밀가루, 이스트, 설탕, 발효종(무가당요거트, 밀가루), 소금, 버터, 참깨(국산)',
    storage: '냉장·냉동 보관',
    allergy: '밀, 글루텐'
  },

  // SAUCE
  {
    id: 15,
    title: '버라이어티 소스 | 2types',
    price: '3,500원',
    image: process.env.PUBLIC_URL + '/images/saucs_01.jpg',
    category: 'SAUCE',
    kcal: '80kcal, 340kcal',
    capacity: '60g, 260g',
    expiration: '제조일로부터 7일',
    ingredients: '마요네즈, 생크림, 할라피뇨(멕시코), 양파(국산), 홀그레인 머스타드(프랑스), 쪽파(국산), 꿀(국산), 후추',
    storage: '실온·냉장보관',
  },

  {
    id: 16,
    title: '크림치즈 | 7types',
    price: '2,800원',
    image: process.env.PUBLIC_URL + '/images/creamchees_01.jpg',
    category: 'CREAM CHEESE',
    kcal: '159kcal',
    capacity: '55g',
    expiration: '제조일로부터 7일',
    ingredients: '크림치즈(미국), 생크림, 꿀(국산), 쪽파(국산), 후추',
    storage: '실온·냉동보관',
    allergy: '밀, 글루텐'
  },
  // COFFEE
  {
    id: 17,
    title: '아이스 커피',
    price: '4,700원',
    image: process.env.PUBLIC_URL + '/images/coffee_01.jpg',
    category: 'COFFEE',
    kcal: '1회 제공량 5kcal',
    capacity: 'Tall(톨) / 355ml',
    // expiration: '제조일로부터 7일',
    ingredients: '카페인 140(mg), 나트륨 10(mg)',
    storage: '실온·냉장보관',
    // allergy: '밀, 글루텐'
  },

  {
    id: 18,
    title: '카라멜 마키아또',
    price: '6,100원',
    image: process.env.PUBLIC_URL + '/images/coffee_02.jpg',
    category: 'COFFEE',
    kcal: '1회 제공량 200kcal',
    capacity: 'Tall(톨) / 355ml',
    // expiration: '제조일로부터 7일',
    ingredients: '카페인 75(mg), 당류 22(g), 나트륨 130(mg), 포화지방 5(g), 단백질 8(g)',
    storage: '실온·냉장보관',
    // allergy: '밀, 글루텐'
  },
];

export default products;