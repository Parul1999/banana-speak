const input = document.querySelector("#input-text");
const translateButton = document.querySelector("#translate-btn");
const output = document.querySelector("#output");

function translate()
{
    if(input.value !="")
    {
       var url= "https://api.funtranslations.com/translate/minion.json?text="+ input.value;

       fetch(url)
       .then(res=>res.json())
       .then(finalRes=>(
        output.innerText= finalRes.contents.translated,
        output.style="black")
        )
        .catch( err =>(
            output.style.color="red",
          output.innerText="Error Occurred !!"
        )
        )

    }
    else
    {
        output.innerText = "Please Enter Something , to Translate !!";
        output.style.color="Red"
    }

}

translateButton.addEventListener("click",translate)