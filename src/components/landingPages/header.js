const Header = () => {
  return (
    <header className="masthead text-dark " style={{ backgroundColor: "#f1f3ff" }}>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 mb-4">
            <h1>Sewa & Rental Mobil Terbaik di Kawasan Padang</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum hic ducimus minus ullam beatae cupiditate ex distinctio repellendus atque dolorum debitis reiciendis, suscipit necessitatibus voluptate itaque nihil eveniet
              tenetur quidem!
            </p>
            <a className="btn btn-success" href="http://localhost:8000/cars">
              Mulai Sewa Mobil
            </a>
          </div>
          <div className="col-md-6">
            <img className="mobil" src="images/img_car.png" width="662" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
