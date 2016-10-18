var btn = document.querySelector('button');
btn.addEventListener('click', generate);
var generator = document.querySelector('div.generator');
var avgGen = document.querySelector('div.avg');


function generate()
{
    var grid = '<table>';
    var stacks = [];
    var items = [];
    
    var inputNumber = document.querySelector('input[name="number"]');
    
    var matrix = parseInt(inputNumber.value);
    var divisor = matrix * matrix;
    var sum = 0
    //rows
    for ( var i = 0; i < matrix; i++)
    {
        grid += '<tr>';
        //colums
            for (var j = 0; j< matrix ; j++)
            {
                var randNum = randomNumber (1, 100);
                items[j] = randNum;
                
                if (items[j] % 3 === 0){
                grid += '<td class="red">';
                }
                else if (items[j] % 2 === 0){
                    grid += '<td class="blue">';
                }
                else{
                    grid += '<td>';
                }
            grid += randNum;
            sum += randNum;
        }
        stacks.push(items.slice());
        grid += '<tr>';
    }
    console.log(stacks);
    grid += '</table>';
    grid += '<p>';
    grid += 'This is the average of the table: ';
    grid += sum/divisor;
    grid += '</p>';
    generator.innerHTML = grid;
}

function randomNumber (min, max)
{
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

