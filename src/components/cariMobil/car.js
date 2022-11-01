import React, { useEffect, useState } from "react";

const Car = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setCarData(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <section id="search">
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
                  <button type="button" style={{ height: " 5" }} className="btn btn-success my-4 " id="cari-btn">
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
      </section>

      <div className=" container row mt-5 mx-auto ">
        {carData.map((item) => (
          <div className="col-lg-4 d-flex mt-5">
            <div className="card  width=100px ">
              <div className="card-body">
                <div className="image-card ">
                  <img src={item.image} className="w-100" alt="" />
                </div>
                <p className="mt-4">
                  {item.manufacture}/{item.type}
                </p>
                <h5 className="fw-bold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.rentPerDay)}{" "}
                  / hari
                </h5>
                <p className="mt-0">{item.description}</p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>{" "}
                  {item.capacity} Orang
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>{" "}
                  {item.transmission}
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-calendar4" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                  </svg>{" "}
                  Tahun {item.year}
                </p>
                <a href="#" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4 " style={{ fontSize: "14px" }}>
                  Pilih Mobil
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Car;
