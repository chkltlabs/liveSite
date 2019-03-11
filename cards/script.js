

const question  = document.getElementById('question');
const answer    = document.getElementById('answer');
const button    = document.getElementById('next');
const select      = document.getElementById('select');


function getRandFact() {
    let url = select.options[select.selectedIndex].value + '.json';
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            let randQ = Math.floor(Math.random() * data.q.length);
            question.firstElementChild.textContent = data.q[randQ];
            answer.firstElementChild.innerHTML = data.a[randQ];
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

button.addEventListener('click', function () {
    if(this.textContent === "Next Flashcard" || this.textContent === "Let's Begin!"){
        getRandFact();
        this.textContent = 'Show Answer';
        answer.style.display = 'none';
    } else {
        this.textContent = "Next Flashcard";
        answer.style.display = 'block';
    }
});