import ProductList from "./ProductList";
export default function Products(props) {
  const { products, onAddProduct, onRemoveProduct } = props;
  return (
    <>
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">
            {products.length} Items Selected
          </h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
            Product Details
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/5 text-center">
            Price
          </h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/5 text-center">
            Action
          </h3>
        </div>
        {products.map((product) => (
          <ProductList
            onAddProduct={onAddProduct}
            onRemoveProduct={onRemoveProduct}
            key={product.id}
            product={product}
          ></ProductList>
        ))}
      </div>
    </>
  );
}
