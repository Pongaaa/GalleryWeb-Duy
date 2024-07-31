const images = document.querySelectorAll('.pic');
const searchInput = document.querySelector('input[type="text"]');

function search() {
    const keyword = searchInput.value.toLowerCase();
    images.forEach((image) => {
        const imageClass = image.classList[1].toLowerCase();

        if (imageClass.includes(keyword)){
            image.style.display = 'block';
        }
        else{
          image.style.display = 'none';
        }
  });
}

searchInput.addEventListener('input', search);