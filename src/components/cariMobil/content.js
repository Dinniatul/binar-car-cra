const Content = () => {
  return (
    <>
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
            </div>
            <div className="col-md-6">
              <img className="mobil" src="images/img_car.png" width="662" />
            </div>
          </div>
        </div>
      </header>

      <div className="container px-lg-5">
        <div className="row">
          <div className="d-lg-flex py-3 rounded-3 shadow bg-white">
            <div className="col">
              <label className="label">Tipe Driver</label>
              <select className="form-style">
                <option hidden className="tipe-driver">
                  Pilih Tipe Driver
                </option>
                <option className="tipe-driver">Dengan Sopir</option>
                <option className="tipe-driver">Tanpa Sopir Lepas kunci</option>
              </select>
            </div>
            <div className="col ">
              <label className="label">Tanggal</label>
              <div className="input-group">
                <input type="date" className="form-style" placeholder="Pilih Tanggal" id="input-tanggal" />
              </div>
            </div>
            <div className="col ">
              <label className="label">Waktu Jemput/Ambil</label>
              <input type="time" className="form-style" id="input-waktu" />
            </div>
            <div className="col ">
              <label className="label">Jumlah Penumpang/Opsional</label>
              <input type="person" className="form-style" placeholder="Jumlah Penumpang" id="input-penumpang" />
              <span className="icon">
                <i className="bi bi-people"></i>
              </span>
            </div>
            <div>
              <div className="col">
                <button type="button" style={{ height: " 5;" }} className="btn btn-success my-4 " id="cari-btn">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  Cari{" "}
                </button>
                <button type="button" className="btn btn-success my-4  " id="hapus-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                  Hapus{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
