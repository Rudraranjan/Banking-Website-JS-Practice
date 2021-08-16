document.getElementById('deposit-button').addEventListener('click', function(){

    // deposit amount geting code

    const depositField = document.getElementById('deposit-amount');
    const depositFinal = depositField.value;
    const depositParse = parseFloat(depositFinal);
    
    

    // amount add at deposite panel



    const depositInput = document.getElementById('deposit-total');  
    const depositeInner = depositInput.innerText;
    const depositeInnerParse = parseFloat(depositeInner);
    const newTotalAmount = depositeInnerParse + depositParse; 
    depositInput.innerText = newTotalAmount;



    // balance adding code for deposittime

    const balanceTotal = document.getElementById('balance-total');
    const balanceInnerText = balanceTotal.innerText;
    const balanceParse = parseFloat(balanceInnerText);
    const newBalanceTotal = balanceParse + depositParse;

    balanceTotal.innerText = newBalanceTotal;

    


    // clean up the field

    depositField.value = '';   

})

// Withdraw function details here

document.getElementById('withdraw-button').addEventListener('click', function(){

    //withdraw enter amount

    const withdrawField = document.getElementById('withdraw-amount');
    const withDrawAmount = withdrawField.value;
    const withdrawParse = parseFloat(withDrawAmount);

    // withdraw amount show

    const withdrawAmountHere = document.getElementById('withdraw-total');
    const withdrawAmountInner = withdrawAmountHere.innerText;
    const withdrawAmountParse = parseFloat(withdrawAmountInner);

    const newwithdrawAmount = withdrawAmountParse + withdrawParse;

    withdrawAmountHere.innerText = newwithdrawAmount;



    // balance adding code for deposittime

    const balanceTotal = document.getElementById('balance-total');
    const balanceInnerText = balanceTotal.innerText;
    const balanceParse = parseFloat(balanceInnerText);
    const newBalanceTotal = balanceParse - withdrawParse;

    balanceTotal.innerText = newBalanceTotal;


    // clear amount 

    withdrawField.value ='';



})