var mySwiper = new Swiper('.swiper', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: false,
  pauseOnMouseEnter: true,
  stopOnLastSlide: false,
  disableOnInteraction: false,
  // disableOnInteraction:false,

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // autoplay: {
  //   autoplay:false,
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var hambuger = document.querySelector('.hambuger');
let navBar = document.querySelector('.menu-list-container');
hambuger.onclick = function () {
  // console.log(hambuger);

  navBar.classList.toggle('activate');
  // document.getElementsByClassName(".menu-list-container").style.height = "480";
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-bar .menu-list-container li a');

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY + 40;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('.nav-bar .menu-list-container li a[href*=' + id + ']')
          .classList.add('active');
        navBar.classList.remove('activate');
      });
    }
  });
};

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 43.76588, lng: -79.40073 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
