import '../../component/search-bar.js';
import DataSource from '../../data/data-source.js';

const Home = {
    async render() {
      return `
      <div class="content-header">
        <h2 class="content-header-title">Temukan Kondisi Cuaca</h1>
      </div>
        <search-bar></search-bar>
        <div class="lds-facebook"><div></div><div></div><div></div></div>
        <weather-list class="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"></weather-list>
        <div class="content-header">
        <h2 class="content-header-title">Berita Cuaca</h1>
      </div>
        <div class="weather-news">
            <div class="weather-item">
                <div class="photo">
                  <img class="post-item__thumbnail"
                   src="news/news1.jpg"
                   alt="Kota Makkah Diguyur Hujan">
                </div>
                <div class="text">
                    <a href="https://www.detik.com/hikmah/haji-dan-umrah/d-7395516/di-tengah-cuaca-ekstrem-kota-makkah-diguyur-hujan" target="blank"><h3>Di Tengah Cuaca Ekstrem, Kota Makkah Diguyur Hujan</h3></a>
                    <p>Jakarta - Di tengah suhu ekstrem yang mencapai 45 derajat celcius, Senin (17:6:2024), kawasan Makkah dan sekitarnya diguyur hujan</p>
                </div>
            </div>
            <div class="weather-item">
                <div class="photo">
                  <img class="post-item__thumbnail"
                   src="news/news2.jpg"
                   alt="Ilustrasi kota yang panas">
                </div>
                <div class="text">
                    <a href="https://www.detik.com/jabar/video/d-7392166/prediksi-tahun-terpanas-sergap-bumi-dalam-lima-tahun-ke-depan" target="blank"><h3>Prediksi Tahun Terpanas Sergap Bumi dalam Lima Tahun ke Depan</h3></a>
                    <p>Wakil Sekretaris Jenderal WMO Ko Barret mengungkap laporan tahunan terkait suhu tahun terpanas melebihi 2023 lalu dalam rentang waktu 2024 hingga 2028</p>
                </div>
            </div>
            <div class="weather-item">
                <div class="photo">
                  <img class="post-item__thumbnail"
                   src="news/news3.jpg"
                   alt="Foto Udara Dahsyatnya Banjir Menerjang Jerman">
                </div>
                <div class="text">
                    <a href="https://news.detik.com/foto-news/d-7375113/foto-udara-dahsyatnya-banjir-menerjang-jerman" target="blank"><h3>Foto Udara Dahsyatnya Banjir Menerjang Jerman</h3></a>
                    <p>Jerman - Hujan lebat yang terus-menerus menyebabkan banjir besar di Jerman. Meskipun situasi kini mulai mereda, di beberapa bagian Bavaria permukaan air masih tinggi</p>
                </div>
            </div>
            <div class="weather-item">
                <div class="photo">
                  <img class="post-item__thumbnail"
                   src="news/news4.jpg"
                   alt="Perbedaan Variabilitas dan Perubahan Iklim">
                </div>
                <div class="text">
                    <a href="https://www.detik.com/edu/detikpedia/d-7371385/mengenal-perbedaan-variabilitas-dan-perubahan-iklim" target="blank"><h3>Mengenal Perbedaan Variabilitas dan Perubahan Iklim</h3></a>
                    <p>Saat membicarakan soal cuaca yang semakin tak menentu, istilah "perubahan iklim" sering dilontarkan. Dibandingkan dengan perubahan iklim, kita jarang mendengar istilah "variabilitas iklim</p>
                </div>
            </div>
            <div class="weather-item">
                <div class="photo">
                  <img class="post-item__thumbnail"
                   src="news/news5.jpg"
                   alt="Suhu Panas India">
                </div>
                <div class="text">
                    <a href="https://health.detik.com/berita-detikhealth/d-7364557/suhu-panas-india-makin-parah-nyaris-50-derajat-celcius-13-orang-meninggal" target="blank"><h3>Suhu Panas India Makin Parah! Nyaris 50 Derajat Celcius</h3></a>
                    <p>Departemen Cuaca India mengeluarkan peringatan merah untuk beberapa wilayah, Gelombang panas semakin parah pasca ibukota Delhi mencatat suhu tertinggi mereka di nyaris 50 derajat Celcius</p>
                </div>
            </div>
            <div class="weather-item">
                <div class="photo">
                  <img class="post-item__thumbnail"
                   src="news/news6.jpg"
                   alt="Potensi Banjir">
                </div>
                <div class="text">
                    <a href="https://www.detik.com/sumbagsel/berita/d-7355928/bmkg-minta-warga-sumsel-waspadai-potensi-banjir-selama-sepekan-ke-depan" target="blank"><h3>BMKG Minta Warga Sumsel Waspadai Potensi Banjir</h3></a>
                    <p>BMKG minta warga Sumsel waspadai potensi banjir selama sepekan ke depan</p>
                </div>
            </div>
        </div>
        `;
    },
  
    async afterRender() {
        const searchElement = document.querySelector('search-bar');
        const weatherListElement = document.querySelector('weather-list');
        const loadingIndicator = document.querySelector('.lds-facebook');
      
        const onButtonSearchClicked = async () => {
          loadingIndicator.style.display = 'inline-block';

          try {
            const result = await DataSource.searchWeather(searchElement.value);
      
            setTimeout(function() {
              loadingIndicator.style.display = 'none';
              renderResult(result);
            }, 2000);
          } catch (message) {
            setTimeout(function() {
              loadingIndicator.style.display = 'none';
              fallbackResult(message);
            }, 2000);
          }
      
        };
      
        const renderResult = results => {
          weatherListElement.weathers = results;
        };
      
        const fallbackResult = message => {
          weatherListElement.renderError(message);
        };
      
        searchElement.clickEvent = onButtonSearchClicked;
    },
  };
  
  export default Home;