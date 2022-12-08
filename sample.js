const questions = [
    {value: 'a', label: 'Option A'},
    {value: 'b', label: 'Option B'},
    {value: 'c', label: 'Option C'},
    {value: 'd', label: 'Option D'},
]
var question_list = '<ul>'

questions.forEach(question => {
    question_list += '<li>'+ question.label + '</li>';
})

question_list += '</ul>';

document.getElementById("question_container").innerHTML = question_list;

//How it looks in HTML

<div id="question_container"></div>