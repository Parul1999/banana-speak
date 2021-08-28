var input = document.querySelector('#text');
var translateBtn = document.querySelector('#translate-btn');
var output = document.querySelector('#output');

function translate()
{
if(input.value !="")
{
var url ="https://api.funtranslations.com/translate/minion.json?text="+(input.value);

fetch(url)
.then(response=>response.json())
.then(finalRes=>output.innerText=finalRes.contents.translated)
.catch(error=>(
output.innerText="Error Occured !! Try Again after some time.",
output.style.color="red" 
))
}
else
{
    output.innerText="You cannot translate if you don't have anything to type !!"
    output.style.color="darkred"
}

}

translateBtn.addEventListener('click',translate)