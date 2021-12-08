import '../css/style.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'lightbox2/dist/css/lightbox.css';
// import lightbox from 'lightbox2';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    // import("lightbox2/dist/js/lightbox-plus-jquery")

    var scrollPosition = window.scrollY;
    var header = document.getElementsByClassName('header-cc')[0];

    window.addEventListener('scroll', function () {

      scrollPosition = window.scrollY;

      if (scrollPosition >= 80) {
        header.classList.add('bg-light', 'pt-0', 'active');
        header.classList.remove('pt-2', 'pt-lg-4');
      } else {
        header.classList.add('pt-2', 'pt-lg-4');
        header.classList.remove('bg-light', 'pt-0', 'active');
      }

    });

    // lightbox.option({
    //     'wrapAround': true,
    //     'disableScrolling': true
    // })

    AOS.init({
      once: true,
    });
  });
  return <Component {...pageProps} />
}

export default MyApp
