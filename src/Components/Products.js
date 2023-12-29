import { dataApi } from './productsData.js';
import SingleProduct from './singleProducts.js';

function Products() {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
  };
  return (
    <div className="container" style={containerStyle}>
      {dataApi.map((ele) => (
        <SingleProduct
          title={ele.title}
          description={ele.description}
          price={ele.price}
          image={ele.image}
          key={ele.id}
          category={ele.category}
        />
      ))}
    </div>
  );
}
export default Products;
