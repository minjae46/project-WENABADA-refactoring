const BASE_URL = 'http://10.58.5.156:3000';

export const API = {
  POST_PRODUCT: `${BASE_URL}/register/upload`,
  UN_FOLLOW: `${BASE_URL}/shop/follow?followId=`,
  SHOP: `${BASE_URL}/shop`,
  SHOP_PRODUCT: `${BASE_URL}/shop/product`,
  SHOP_REVIEW: `${BASE_URL}/shop/review`,
  SHOP_LIKE: `${BASE_URL}/shop/like`,
  SHOP_FOLLOW: `${BASE_URL}/shop/following`,
  RECOMMEND: `${BASE_URL}/products/recommend/list`,
  RANDOM: `${BASE_URL}/products/random/list`,
  MAIN_CATEGORY: `${BASE_URL}/category/main/`,
  MAIN_SEARCH: `${BASE_URL}/products/search/list?search=`,
  RELATION: `${BASE_URL}/products/relate?id=`,
  DETAIL_PRODUCT: `${BASE_URL}/products/info?id=`,
  DETAIL_CATEGORY: `${BASE_URL}/products/category?id=`,
  DETAIL_USER_INFO: `${BASE_URL}/products/seller/info?id=`,
  DETAIL_USER_PRODUCTS: `${BASE_URL}/products/seller/product?id=`,
  DETAIL_IS_LIKE: `${BASE_URL}/products/checklike?id=`,
  DETAIL_REVIEW: `${BASE_URL}/products/seller/review?id=`,
  DETAIL_SET_LIKE: `${BASE_URL}/products/like?id=`,
  PATCH_LASTEST: `${BASE_URL}/products/recent/watch/list`,
  BUY_PRODUCT: `${BASE_URL}/products/buy`,
  ASIDE_LIKE_COUNT: `${BASE_URL}/products/like/number`,
  ASIDE_LASTEST_VIEW: `${BASE_URL}/products/recent/watch/list`,
};
