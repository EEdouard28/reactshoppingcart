// Coffee: price_1MKSGeCzfp9YZaTYzvj3y2M4
// Creamer: price_1MKSHECzfp9YZaTYuMuBcLgz
// Sugar: price_1MKSHdCzfp9YZaTYahgo2E6z

const productsArray = [
  {
    id: 'price_1MKSGeCzfp9YZaTYzvj3y2M4',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: 'price_1MKSHECzfp9YZaTYuMuBcLgz',
    title: 'Sugar',
    price: 1.99,
  },
  {
    id: 'price_1MKSHdCzfp9YZaTYahgo2E6z',
    title: 'Creamer',
    price: 3.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log('Product data does not exist for ID' + id);
    return undefined;
  }
  return productData;
}
export { productsArray, getProductData };
