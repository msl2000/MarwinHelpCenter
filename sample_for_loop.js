const questions = [
   'Option A',
   'Option B',
   'Option C',
   'Option D',
]
var question_list = '<div>'

for(var i = 0; i < questions.length; i++) {
    question_list += '<button>'+ questions[i] + '</button>';
}

question_list += '</div>';

document.getElementById("question_container").innerHTML = question_list;

//How it looks in HTML

<div id="question_container"></div>