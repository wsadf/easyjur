$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    if (bookId) {
        const books = [
            { id: 1, title: 'Book Title 1', description: 'Description of Book Title 1', image: 'https://picsum.photos/150?1' },
            { id: 2, title: 'Book Title 2', description: 'Description of Book Title 2', image: 'https://picsum.photos/150?2' },
            { id: 3, title: 'Book Title 3', description: 'Description of Book Title 3', image: 'https://picsum.photos/150?3' },
            { id: 4, title: 'Book Title 4', description: 'Description of Book Title 4', image: 'https://picsum.photos/150?4' },
            { id: 5, title: 'Book Title 5', description: 'Description of Book Title 5', image: 'https://picsum.photos/150?5' },
            { id: 6, title: 'Book Title 6', description: 'Description of Book Title 6', image: 'https://picsum.photos/150?6' },
            { id: 7, title: 'Book Title 7', description: 'Description of Book Title 7', image: 'https://picsum.photos/150?7' },
            { id: 8, title: 'Book Title 8', description: 'Description of Book Title 8', image: 'https://picsum.photos/150?8' },
            { id: 9, title: 'Book Title 9', description: 'Description of Book Title 9', image: 'https://picsum.photos/150?9' },

        ];

        const book = books.find(b => b.id == bookId);

        if (book) {
            $('#book-details').html(`
                <div class="row">
                    <div class="col-md-4">
                        <img src="${book.image}" alt="${book.title}" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <h1>${book.title}</h1>
                        <p>${book.description}</p>
                    </div>
                </div>
            `);
        } else {
            $('#book-details').html('<p>Book not found.</p>');
        }
    } else {
        $('#book-details').html('<p>No book ID provided.</p>');
    }
});
