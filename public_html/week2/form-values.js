var label = document.querySelector('label');

var textField = document.querySelector('input[name="number"]');
var addTextBtn = document.querySelector('input[name="add"]');

var divToAdd = document.querySelector('div');


addTextBtn.addEventListener('click',addText );

function addText() {
      
    if ( textField.value.length ) {
        
        var result = '<p>' + textField.value + '</p>';
        divToAdd.innerHTML += result;
        
     } else {
        label.classList.add('error'); 
     }
    
}

 function randomNumber (min, max) {

                return Math.floor (Math.random() * (max - min + 1)) + min;

            }