
let button = document.getElementById('btnSubmit');
let results = document.getElementById('results');



button.addEventListener('click', function() {
    let pattern = /[aeiou]/i;
    let text = document.getElementById('text').value;
    let count = 0;
    let display = [];



    for (let i = 0; i < text.length; i++){

        if (text[i].match(pattern)){
            console.log("found a match")
            count ++;
            display.push(count);
        }
        results.innerHTML = "We found " + display.length + " matches!";
        }
    return count;

});

