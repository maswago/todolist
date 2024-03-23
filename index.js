

let myButton = document.getElementById('myButton');
let toDoContainer = document.getElementById('toDoContainer');
let myText = document.getElementById("myText");

myButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('.paragraph-styling');
    paragraph.innerText = myText.value;
    toDoContainer.appendChild(paragraph);
    myText.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
})

})
