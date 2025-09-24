
function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Business Automation Suite",
      description: "Streamline workflows and boost efficiency with our automation tools.",
      price: "$499",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      name: "Data Analytics Platform",
      description: "Unlock insights with our powerful analytics and reporting solutions.",
      price: "$699",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      name: "Cloud Integration Service",
      description: "Seamlessly integrate and scale your business on the cloud.",
      price: "$899",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Our Products</h1>
        <p className="lead text-muted">
          Explore innovative solutions from LVC Solutions designed to grow your business.
        </p>
      </header>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="mt-auto">
                  <h6 className="text-primary">{product.price}</h6>
                  <button className="btn btn-primary btn-sm mt-2">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
