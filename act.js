document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="text"]');
    const photos = document.querySelectorAll('.photo-gallery .pic');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        photos.forEach(photo => {
            const category = photo.classList[1].toLowerCase();
            if (category.includes(searchTerm)) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        });
    });
});