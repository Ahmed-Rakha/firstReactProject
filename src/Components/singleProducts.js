function SingleProduct(props) {
  const productContainerStyle = {
    padding: '12px',
    boxShadow: '3px 4px 4px 5px lightgrey',
    margin: '20px',
    borderRadius: '8px',
    img: { width: '250px', height: '250px' },
    button: {
      padding: '10px',
      border: 'solid ',
      borderRadius: '8px',
      backgroundColor: 'green',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    description: { paddingInline: '50px' },
  };
  return (
    <div
      className={props.category}
      key={props.id}
      style={productContainerStyle}
    >
      <img src={props.image} alt="product" style={productContainerStyle.img} />
      <div>
        <h2>{props.title}</h2>
        <p style={productContainerStyle.description}>{props.description}</p>
        <h3>${props.price}</h3>
        <button style={productContainerStyle.button}>ORDER NOW</button>
      </div>
    </div>
  );
}
export default SingleProduct;
