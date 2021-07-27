export default function ProductList(props) {
  const { product, onAddProduct, onRemoveProduct } = props;
  return (
    <>
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-15" src={product.image} alt={product.name}></img>
          </div>
          <div className="flex flex-col justify-center ml-4 flex-grow">
            <span className="font-bold text-sm">{product.name}</span>
          </div>
        </div>
        <span className="text-center w-2/5 font-semibold text-sm">
          ${product.price}
        </span>
        <span className="text-center w-2/5 font-semibold text-sm">
          <button
            className="bg-green-500 hover:bg-green-600 px-5 mr-2  py-2 text-sm text-white uppercase"
            onClick={() => onAddProduct(product)}
          >
            +
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 px-5  py-2 text-sm text-white uppercase"
            onClick={() => onRemoveProduct(product)}
          >
            -
          </button>
        </span>
      </div>
    </>
  );
}
