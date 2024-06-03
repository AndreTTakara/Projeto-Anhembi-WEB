document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.category-content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

        
            links.forEach(l => l.classList.remove('active'));

           
            this.classList.add('active');

          
            contents.forEach(content => {
                content.classList.remove('active');
            });

          
            const category = this.getAttribute('href').substring(1);
            document.getElementById(category).classList.add('active');
        });
    });
});