const cdMinutes = document.getElementById("cdMinutes");
const cdSeconds = document.getElementById("cdSeconds");
const uiMinutes = document.getElementById("uiMinutes");
const uiSeconds = document.getElementById("uiSeconds");
const start = document.getElementById("start");
let secondsCounter;
let minutesCounter;

start.addEventListener( 'click', () =>

{
    let inputMinutes = 0;
    let inputSeconds = 0;
    if(uiMinutes.value != ""){
        inputMinutes = parseInt(uiMinutes.value);
    }
    if(uiSeconds.value != ""){
    inputSeconds = parseInt(uiSeconds.value);
    }
    secondsCounter = inputSeconds;
    minutesCounter = inputMinutes;

    if(secondsCounter != 0 || minutesCounter !=0 )
    {
        cdSeconds.innerText = secondsCounter;
        cdMinutes.innerText = minutesCounter;
        setInterval( () => {

            if( minutesCounter == 1 && secondsCounter == 0){
                minutesCounter = minutesCounter - 1;
                cdMinutes.innerText = minutesCounter;
                secondsCounter = 59;
            }
            if ( secondsCounter > -1){
                
                cdSeconds.innerText = secondsCounter;
                secondsCounter = secondsCounter - 1;
            }
            if ( secondsCounter == -1 && minutesCounter != 0){
                
                minutesCounter = minutesCounter - 1;
                cdMinutes.innerText = minutesCounter;
                secondsCounter = 59;
            }
            // if ( secondsCounter > -1 ){
                
            //     cdSeconds.innerText = secondsCounter;
            //     secondsCounter = secondsCounter - 1;
            // }
            
        }, 1000)
    }
}
);