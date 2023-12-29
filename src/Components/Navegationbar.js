function Navbar() {
  return (
    <div
      style={{
        width: '55vw',
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'space-around',
        boxShadow: '4px 4px 4px 5px lightgrey',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <button
        style={{
          padding: '10px',
          width: '100px',
          backgroundColor: 'lightgrey',
          border: 'none',
          borderRadius: '4px',
          color: '#333',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        All
      </button>
      <button
        style={{
          padding: '10px',
          width: '100px',
          backgroundColor: 'lightgrey',
          border: 'none',
          borderRadius: '4px',
          color: '#333',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Men's clothing
      </button>
      <button
        style={{
          padding: '10px',
          width: '100px',
          backgroundColor: 'lightgrey',
          border: 'none',
          borderRadius: '4px',
          color: '#333',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Jewelery
      </button>
      <button
        style={{
          padding: '10px',
          width: '100px',
          backgroundColor: 'lightgrey',
          border: 'none',
          borderRadius: '4px',
          color: '#333',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Electronics
      </button>
      <button
        style={{
          padding: '10px',
          width: '100px',
          backgroundColor: 'lightgrey',
          border: 'none',
          borderRadius: '4px',
          color: '#333',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Women's clothing
      </button>
    </div>
  );
}
export default Navbar;
