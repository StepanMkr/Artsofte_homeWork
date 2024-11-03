document.addEventListener('DOMContentLoaded', function() {
    let likes = document.querySelectorAll('.like-img');
    for(const e of likes) {
        e.onclick = function() {
            e.classList.toggle('liked');
        };
    }
});
