     



//============Navbar Logic==================

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function toggleDropdown(event) {
    event.stopPropagation();
    const menuItem = event.currentTarget.closest('.has-submenu'); // Use closest()
    menuItem.classList.toggle('active');
}

// Close sidebar when clicking outside
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});




//=============this is for the rate section : testimonials==============
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //responsive breackponts
  breakpoints:{
    //when window width is >=601px
    601:{
          slidesPerView:2,
        },
      850:{
    //when window width is >=850px
          slidesPerView:3,
        }  
  },
  });

//=============this is for the rate section : testimonials==============



//=====================FAQS==============================
const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        // Toggle active class on the clicked item
        item.classList.toggle('active');

        // Close other open items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
      });
    });

//=====================FAQS==============================

 