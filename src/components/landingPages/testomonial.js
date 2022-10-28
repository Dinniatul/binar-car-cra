const Testimonial = () => {
  return (
    <div class="container pt-5">
      <h2 class="h2 text-center">Testimonial</h2>
      <p class="text-center py-3">Berbagai review positif dari para pelanggan kami</p>
      <div id="carouselExampleControls" class="carousel slide mx-auto" style="max-width: 80%" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active bg-aliceblue ">
            <div class="row mx-4 my-5">
              <div class="col-xl-2 m-auto">
                <img src="images/photo1-testimoni.png" class="d-block testimonial-img m-auto" alt="Person" />
              </div>
              <div class="col-xl-10">
                <img src="images/Rate.png" class="testimonial-rating" alt="Rating" />
                <p class="testimonial-text">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
                <p class="testimonial-name">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div class="carousel-item bg-aliceblue">
            <div class="row mx-4 my-5">
              <div class="col-xl-2 m-auto">
                <img src="images/photo2-testimoni.png" class="d-block testimonial-img m-auto" alt="Person" />
              </div>
              <div class="col-xl-10">
                <img src="images/Rate.png" class="testimonial-rating" alt="Rating" />
                <p class="testimonial-text">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””
                </p>
                <p class="testimonial-name">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div class="carousel-item bg-aliceblue">
            <div class="row mx-4 my-5">
              <div class="col-xl-2 m-auto">
                <img src="images/photo1-testimoni.png" class="d-block testimonial-img m-auto" alt="Person" />
              </div>
              <div class="col-xl-10">
                <img src="images/Rate.png" class="testimonial-rating" alt="Rating" />
                <p class="testimonial-text">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””
                </p>
                <p class="testimonial-name">John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
        <div class="text-center">
          <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" class="testimonial-media">
            &#8249;
          </a>
          <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" class="testimonial-media">
            &#8250;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
