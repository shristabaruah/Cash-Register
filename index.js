const billAmount = document.querySelector("#bill-amount");
const CashGiven = document.querySelector("#cash-given");
const Cashgivendiv = document.querySelector("#cashGiven");
const checkbutton = document.querySelector("#check");
const NextButton = document.querySelector("#next");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll("#no-of-notes");
const availableNotes = [2000,500,100,20,10,5,1];

NextButton.addEventListener("click", ()=>{
    HideMessage();
    
    if(Number(billAmount.value)>0){

        NextButton.style.display = "none";
        Cashgivendiv.style.display="block";
        
    }
    else{
        showMessage("Enter valid bill amount");
    }
} )


checkbutton.addEventListener("click", function validateBillandCash(){
    HideMessage();

    if(billAmount.value > 0 && CashGiven.value>0)
   {
   
       if(CashGiven.value >= billAmount.value){
           const amountToBeReturned = CashGiven.value - billAmount.value;
           CalculateChange(amountToBeReturned);
           

       }else{
            showMessage("The cash provided should be atleast equal to the bill amount");
       }
    }else{
        showMessage("Enter valid bill amount and cash recieved to continue")
    }

    
});
function CalculateChange(amountToBeReturned){
for(let i = 0; i < availableNotes.length; i++){
    const numberofNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberofNotes;
}
}
function HideMessage(){
    message.style.display = "none";
}


function showMessage(msg){
    message.style.display="block";
    message.innerText = msg;

}