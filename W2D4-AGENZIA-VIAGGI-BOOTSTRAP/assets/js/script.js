/* 1) bottone per Aprire o Chiudere le sezioni viaggi*/
document.querySelectorAll('.btn-collapse').forEach(button => {
    button.addEventListener('click', function () {
        const section = this.closest('section');
        const sectionContent = section.querySelector('.row');
        if (sectionContent.classList.contains('d-none')) {
            sectionContent.classList.remove('d-none');
            sectionContent.classList.add('d-md-flex');
            button.innerHTML = "Chiudi";
        } else {
            sectionContent.classList.remove('d-md-flex');
            sectionContent.classList.add('d-none');
            button.innerHTML = "Apri";
        }
    });
});

/* 2) Contare i viaggi presenti sulla pagina*/
function travelCounter() {
    const cardElements = document.querySelectorAll('.card');
    let count = cardElements.length - 1; /*One travel has two cards, deduct one to get the right amount*/
    return count;
}
const travelsNumber = travelCounter()
console.log(travelsNumber)

/* 5) Bottone per eliminare tutte le card presenti sul sito*/
document.getElementById('remove-all-btn').addEventListener('click', function () {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(card => {
        card.remove();
    });
});