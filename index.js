const billAmount = document.querySelector("#bill-amount");
const CashGiven = document.querySelector("#cash-given");
const Cashgivendiv = document.querySelector("#cashGiven");
const checkbutton = document.querySelector("#check");
const NextButton = document.querySelector("#next");
const message = document.querySelector("#error-message");
const returnchangetable = document.querySelector(".change-table")
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

    let BillamountValue = Number(billAmount.value);
    let CashgivenValue = Number(CashGiven.value);

    if(BillamountValue > 0 && CashgivenValue>0)
   {
   
       if(CashgivenValue >= BillamountValue){
           const amountToBeReturned = CashgivenValue - BillamountValue;
            showMessage(`Amount to be returned Rs${amountToBeReturned}`)
           CalculateChange(amountToBeReturned);
           

       }else{
            returnchangetable.style.display="none"
            showMessage("The cash provided should be atleast equal to the bill amount");
       }
    }else{
        returnchangetable.style.display="none"
        showMessage("Enter valid bill amount and cash recieved to continue")
    }

    
});
function CalculateChange(amountToBeReturned){
    returnchangetable.style.display="block";
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