const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h4>{product.name}</h4>
      <p>
        <strong>Item Code: </strong>
        {product.itemCode}
      </p>
      <p>
        <strong>Category: </strong>
        {product.category}
      </p>
      <p>
        <strong>Unit Price (Rs.): </strong>
        {product.unitPrice}
      </p>
      <p>
        <strong>Cost (Rs.): </strong>
        {product.cost}
      </p>
      <p>
        <strong>Color: </strong>
        {product.color}
      </p>
      <p>{product.createdAt}</p>
    </div>
  );
};

export default ProductDetails;
