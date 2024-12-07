(function ($) {
    "use strict";

 
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
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


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);

  // Function to animate the counter
  function animateCounter() {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      
      // Function to increment the counter
      const updateCount = () => {
        const increment = target / 100; // This defines the speed of the counter
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 50); // Adjust speed (lower value is faster)
        } else {
          counter.innerText = target; // Set exact target value at the end
        }
      };

      updateCount();
    });
  }

  // Run the animation when the page is scrolled into view
  window.addEventListener('scroll', () => {
    const contents = document.getElementById('contents');
    const rect = contents.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
      animateCounter();
      window.removeEventListener('scroll', arguments.callee); // Stop animation after it's triggered once
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        const speed = 100; // Adjust speed here
        let current = 0;

        const updateCount = () => {
            current += Math.ceil(target / speed);

            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = current;
                requestAnimationFrame(updateCount);
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});


let index = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function moveSlide(direction) {
    index += direction;
    if (index > testimonials.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = testimonials.length - 1;
    }
    const offset = -index * 100;
    document.querySelector('.testimonial-slider').style.transform = `translateX(${offset}%)`;
}

setInterval(() => moveSlide(1), 3000); // Auto slide every 3 seconds





$(document).ready(function () {
    $('#testimonialCarousel').carousel({
        interval: 2000, // 2 seconds
        ride: 'carousel'
    });
});