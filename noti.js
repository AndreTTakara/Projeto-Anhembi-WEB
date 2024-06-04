document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newsItem = button.parentElement;
            const moreText = newsItem.querySelector('.more-text');

            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline';
                button.textContent = 'Leia menos';
            } else {
                moreText.style.display = 'none';
                button.textContent = 'Leia mais';
            }
        });
    });
});