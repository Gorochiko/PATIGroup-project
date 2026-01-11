document.addEventListener('DOMContentLoaded', function () {

    // Product Gallery: Switch main image when clicking thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function () {
            thumbnails.forEach(t => t.classList.remove('border-sculptique-green'));
            this.classList.add('border-sculptique-green');
            const thumbImg = this.querySelector('img');
            mainImage.src = thumbImg.src;
        });
    });

    // Pricing Options: Update opacity based on selected bundle
    const pricingOptions = document.querySelectorAll('input[name="bundle"]');

    function updateOptionStates() {
        pricingOptions.forEach(radio => {
            const label = radio.closest('label');
            if (radio.checked) {
                label.style.opacity = '1';
            } else {
                label.style.opacity = '0.5';
            }
        });
    }

    pricingOptions.forEach(radio => {
        const label = radio.closest('label');

        label.addEventListener('click', function () {
            radio.checked = true;
            updateOptionStates();
        });

        radio.addEventListener('change', function () {
            updateOptionStates();
        });
    });

    updateOptionStates();

    // Ingredients Accordion: Toggle ingredient details
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');

        trigger.addEventListener('click', function () {
            const isOpen = !content.classList.contains('hidden');

            if (isOpen) {
                content.classList.add('hidden');
                icon.classList.remove('rotate-45');
                item.classList.remove('border-[#039869]');
                item.classList.add('border-gray-200');
            } else {
                content.classList.remove('hidden');
                icon.classList.add('rotate-45');
                item.classList.remove('border-gray-200');
                item.classList.add('border-[#039869]');
            }
        });
    });

    // FAQ Accordion: Expand/collapse FAQ items with smooth animation
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('svg');
        answer.style.maxHeight = '0px';
        icon.style.transform = 'rotate(0deg)';
    });

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('svg');

        question.addEventListener('click', function () {
            const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

            faqItems.forEach(faq => {
                const faqAnswer = faq.querySelector('.faq-answer');
                const faqIcon = faq.querySelector('svg');
                faqAnswer.style.maxHeight = '0px';
                faqIcon.style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Mobile Menu: Toggle mobile navigation
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            alert('Mobile menu coming soon!');
        });
    }

    // Add to Cart: Show confirmation message
    const addToCartBtn = document.querySelector('.bg-sculptique-green');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function () {
            const originalText = this.textContent;
            this.textContent = '✓ ADDED TO CART!';
            this.classList.add('bg-green-700');

            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('bg-green-700');
            }, 2000);
        });
    }

    // Smooth Scroll: Enable smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Animations: Fade in sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Ingredient Items: Toggle ingredient details with arrow rotation
    const ingredientItems = document.querySelectorAll('.ingredient-item');

    ingredientItems.forEach(item => {
        const header = item.querySelector('.ingredient-header');
        const content = item.querySelector('.ingredient-content');
        const arrow = item.querySelector('.ingredient-arrow');

        header.addEventListener('click', () => {
            const isOpen = !content.classList.contains('hidden');

            if (isOpen) {
                content.classList.add('hidden');
                arrow.classList.remove('rotate-90');
            } else {
                content.classList.remove('hidden');
                arrow.classList.add('rotate-90');
            }
        });
    });

    // Video Carousel: Manual scroll navigation
    const videoCarousel = document.getElementById('videoCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (videoCarousel && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            videoCarousel.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            videoCarousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });
    }

    // Slick Carousel: Initialize video carousel with responsive settings
    if (typeof jQuery !== 'undefined' && jQuery.fn.slick) {
        jQuery(document).ready(function ($) {
            $('.video-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: false,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $('.product_carousel-prev').on('click', function () {
                $('.video-slider').slick('slickPrev');
            });

            $('.product_carousel-next').on('click', function () {
                $('.video-slider').slick('slickNext');
            });
        });
    }

    // Video Play/Pause: Click to play videos in carousel
    const videoSlides = document.querySelectorAll('.video-slide');
    videoSlides.forEach(slide => {
        const video = slide.querySelector('video');
        const playButton = slide.querySelector('img[alt="Play"]');
        const overlay = playButton?.parentElement;

        if (video && overlay) {
            slide.addEventListener('click', function (e) {
                e.preventDefault();

                if (video.paused) {
                    video.play();
                    overlay.style.display = 'none';
                    videoSlides.forEach(otherSlide => {
                        const otherVideo = otherSlide.querySelector('video');
                        const otherOverlay = otherSlide.querySelector('img[alt="Play"]')?.parentElement;
                        if (otherVideo && otherVideo !== video && !otherVideo.paused) {
                            otherVideo.pause();
                            if (otherOverlay) otherOverlay.style.display = 'flex';
                        }
                    });
                } else {
                    video.pause();
                    overlay.style.display = 'flex';
                }
            });
            video.addEventListener('ended', function () {
                overlay.style.display = 'flex';
            });
        }
    });
});
