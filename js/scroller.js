(function() {

    document.addEventListener('scroll', e => {
        if(window.scrollY > window.innerHeight) {
            document.querySelector('#profil-picture').classList.add('small');
        } else {
            document.querySelector('#profil-picture').classList.remove('small');
        }
    });

})();