const AboutUs = {
  async render() {
    return `
    <div class="container-xxl py-5">
    <div class="container px-lg-5">
        <div class="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
            <h1 class="mb-3">Our Team Members</h1>
            <p class="mb-1">Tim kami merupakan peserta dari Dicoding Academy tahun 2023, dipertemukan melalui open member tim Capstone melalui discord.</p>
        </div>
        <div class="row g-4">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                    <div class="text-center p-4">
                        <img class="img-fluid rounded-circle mb-4" src="img/rama.jpeg" alt="Ramaditya Eka Prasetyo">
                        <h5 class="fw-bold mb-1">Ramaditya Eka Prasetyo</h5>
                        <small>ID : F0096YB380</small><br>
                        <small>Universitas Gunadarma</small>
                    </div>
                    <div class="d-flex justify-content-center bg-primary p-3">
                        <a class="btn btn-square text-primary bg-white m-1" target="_blank" href="https://www.linkedin.com/in/ramaditya-eka-11aa60229/"><i class="bi fw-bold">LinkedIn</i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                    <div class="text-center p-4">
                        <img class="img-fluid rounded-circle mb-4" src="img/Hasan.jpg" alt="Hasan Andreas Lumbantoruan">
                        <h5 class="fw-bold mb-1">Hasan Andreas Lumbantoruan</h5>
                        <small>ID : F3196YB234</small><br>
                        <small>Universitas Sumatra Utara</small>
                    </div>
                    <div class="d-flex justify-content-center bg-primary p-3">
                        <a class="btn btn-square text-primary bg-white m-1" target="_blank" href="https://www.linkedin.com/in/hasan-lumbantoruan"><i class="bi fw-bold">LinkedIn</i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                    <div class="text-center p-4">
                        <img class="img-fluid rounded-circle mb-4" src="img/Ivanno.jpg" alt="Ivanno Rifky Ali Rahardjoo">
                        <h5 class="fw-bold mb-1">Ivanno Rifky Ali Rahardjo</h5>
                        <small>ID : F0096YB381</small><br>
                        <small>Universitas Gunadarma</small>
                    </div>
                    <div class="d-flex justify-content-center bg-primary p-3">
                        <a class="btn btn-square text-primary bg-white m-1" target="_blank" href="https://www.linkedin.com/in/ivannorifky/"><i class="bi fw-bold">LinkedIn</i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


      `;
  },

  async afterRender() {
    (function ($) {
      "use strict";
  
       // Spinner
       var spinner = function () {
          setTimeout(function () {
              if ($('#spinner').length > 0) {
                  $('#spinner').removeClass('show');
              }
          }, 1);
      };
      spinner();
      
      
      // Initiate the wowjs
      new WOW().init();
      
   // Back to top button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });
  
  
  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000
  });
  
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 25,
      dots: true,
      loop: true,
      center: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
  });
  },
};

export default AboutUs;