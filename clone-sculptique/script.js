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


            // ==========================================
            // AUTO-GENERATE MOBILE GALLERY
            // ==========================================
            // 1. Extract Images from Desktop Gallery
            // Filter out badges/icons (leaves, nysale) to get only product images
            var desktopImages = [];
            $('.Desktop_only img').each(function () {
                var src = $(this).attr('src');
                if (src && !src.includes('leaves') && !src.includes('nysale') && !src.includes('sale-badge')) {
                    // Check if not already added (to avoid duplicates if any)
                    if (desktopImages.indexOf(src) === -1) desktopImages.push(src);
                }
            });

            // 2. Build HTML
            if (desktopImages.length > 0) {
                var mainSlides = '<div class="mobile-main-slider mb-4">';
                var thumbSlides = '<div class="mobile-thumb-slider px-1">';

                $.each(desktopImages, function (index, src) {
                    // Add Badges to the First Slide Only
                    var extras = '';
                    if (index === 0) {
                        extras = `
                        <img class="absolute top-4 right-4 w-20 z-10" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224" alt="Sale">
                        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] flex justify-center gap-2 items-center px-4 py-1.5 bg-[#ffffffd9] border border-black rounded-full cursor-pointer text-xs w-max max-w-[90%] shadow-sm">
                            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629" class="w-4 h-4">
                            <span class="font-medium">Nutritional Information</span>
                        </div>`;
                    }

                    mainSlides += '<div class="relative outline-none"><img src="' + src + '" class="w-full rounded-2xl">' + extras + '</div>';
                    thumbSlides += '<div class="px-1 outline-none"><img src="' + src + '" class="w-full rounded-lg cursor-pointer border-2 border-transparent transition-all"></div>';
                });

                mainSlides += '</div>';
                thumbSlides += '</div>';

                // 3. Inject into DOM
                $('#mobile-gallery-container').html(mainSlides + thumbSlides);

                // 4. Initialize Slick
                // Migrated Arrow Styles to Tailwind:
                // .mobile-main-slider .slick-arrow -> absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md cursor-pointer border-none
                const arrowClasses = "absolute top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/90 rounded-full flex !items-center !justify-center shadow-md cursor-pointer border-none outline-none hover:bg-white transition-colors";

                $('.mobile-main-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: true,
                    asNavFor: '.mobile-thumb-slider',
                    prevArrow: `<button type="button" class="slick-prev mobile-arrow-prev ${arrowClasses} left-4"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" class="w-3.5 h-3.5 opacity-80 block"></button>`,
                    nextArrow: `<button type="button" class="slick-next mobile-arrow-next ${arrowClasses} right-4"><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" class="w-3.5 h-3.5 opacity-80 block rotate-180"></button>`
                });

                $('.mobile-thumb-slider').slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    asNavFor: '.mobile-main-slider',
                    dots: false,
                    arrows: false,
                    focusOnSelect: true,
                    infinite: true,
                    centerMode: false
                });
            }

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
