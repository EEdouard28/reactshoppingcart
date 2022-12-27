const productsArray = [
  {
    id: '1',
    title: 'Coffee',
    price: 4.99,
  },
  {
    id: '2',
    title: 'Sugar',
    price: 1.99,
  },
  {
    id: '3',
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
