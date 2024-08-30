$(document).ready(function () {
    const books = [
        { id: 1, title: 'Book Title 1', image: 'https://picsum.photos/150?1' },
        { id: 2, title: 'Book Title 2', image: 'https://picsum.photos/150?2' },
        { id: 3, title: 'Book Title 3', image: 'https://picsum.photos/150?3' },
        { id: 4, title: 'Book Title 4', image: 'https://picsum.photos/150?4' },
        { id: 5, title: 'Book Title 5', image: 'https://picsum.photos/150?5' },
        { id: 6, title: 'Book Title 6', image: 'https://picsum.photos/150?6' },
        { id: 7, title: 'Book Title 7', image: 'https://picsum.photos/150?7' },
        { id: 8, title: 'Book Title 8', image: 'https://picsum.photos/150?8' },
        { id: 9, title: 'Book Title 9', image: 'https://picsum.photos/150?9' }
    ];

    const $carouselWrapper = $('.book-carousel__wrapper');
    let itemWidth = 0;
    let currentPosition = 0;

    function hideLoadingShowCarousel() {
        $('#loading').hide();
        $('.book-carousel-container').fadeIn();
    }

    function renderCarouselItems() {
        $carouselWrapper.empty();
        books.forEach(book => {
            const itemHtml = `
                <div class="book-carousel__item" data-id="${book.id}">
                    <img src="${book.image}" alt="${book.title}" class="book-carousel__image">
                    <p class="book-carousel__title">${book.title}</p>
                </div>
            `;
            $carouselWrapper.append(itemHtml);
        });
        itemWidth = $('.book-carousel__item').outerWidth(true);
    }

    function updateCarouselPosition() {
        $carouselWrapper.css('transform', `translateX(${currentPosition}px)`);
    }

    $('.book-carousel__control--next').click(function () {
        const maxPosition = -($carouselWrapper.children().length - Math.floor($('.book-carousel').width() / itemWidth)) * itemWidth;
        if (currentPosition > maxPosition) {
            currentPosition -= itemWidth;
            updateCarouselPosition();
        }
    });

    $('.book-carousel__control--prev').click(function () {
        if (currentPosition < 0) {
            currentPosition += itemWidth;
            updateCarouselPosition();
        }
    });

    $(document).on('click', '.book-carousel__image', function () {
        const bookId = $(this).closest('.book-carousel__item').data('id');
        const baseUrl = window.location.origin + window.location.pathname.replace('index.html', ''); 
            if (bookId) {
            window.location.href = `${baseUrl}book-details.html?id=${encodeURIComponent(bookId)}`;
        } else {
            console.error('Book ID not found');
        }
    });
    
    
    $(window).resize(function () {
        itemWidth = $('.book-carousel__item').outerWidth(true);
        currentPosition = Math.max(currentPosition, -($carouselWrapper.children().length - Math.floor($('.book-carousel').width() / itemWidth)) * itemWidth);
        updateCarouselPosition();
    });

    renderCarouselItems();
    setTimeout(hideLoadingShowCarousel, 1000);
});
