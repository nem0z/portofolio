(function() {
    let competences_li = document.querySelectorAll('.list-competence > li');

    for(let competence_li of competences_li) {
        competence_li.id = competence_li.innerText;
    }

    let colors = {1: 'red', 2: 'orange', 3: 'green'};

    fetch('config/competences.json')
    .then(res => res.json())
    .then(competences => {
        for(let competence of competences) {
            document.querySelector(`#${competence.label}`).classList.add(`border-${colors[competence.level]}`);
        }
    });

})();