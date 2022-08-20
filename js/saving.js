//saving btn handler
document.getElementById('saving-button').addEventListener('click', function () {

    //saving percentage inputfield 

    const savingInputFieldValue = document.getElementById('saving-account');
    const savingInputFieldString = savingInputFieldValue.value;
    const savingInputField = parseFloat(savingInputFieldString);
    savingInputFieldValue.value = '';

    if (isNaN(savingInputField)) {
        alert('Please provide a valid number');
        return;
    }
    else if (savingInputField <= 0) {
        alert('Please provide a valid positive number');
        return;
    }
    else if (savingInputField > 100) {
        alert('Please provide a under 100 number');
        //return;
    }

    //Your total amount innerText
    const totalAmountInnerText = document.getElementById('amount-total')
    const totalAmountString = totalAmountInnerText.innerText;
    const totalAmount = parseFloat(totalAmountString);

    //saving your totall amouint 
    const savingTotallInnerText = document.getElementById('toal-saving-amount');
    const savingTotallInnerString = savingTotallInnerText.innerText;
    const savingTotall = parseFloat(savingTotallInnerString);


    //calculate saving amount
    const savingAmount = savingTotall + ((totalAmount * savingInputField) / 100);
    savingTotallInnerText.innerText = savingAmount;

    //Total Expense innerText 
    const totalExpenseInnerText = document.getElementById('toal-expense');
    const totalExpenseInnerTextString = totalExpenseInnerText.innerText;
    const totalExpense = parseFloat(totalExpenseInnerTextString);

    //remaing total your amount 
    const remainingTotallAmountInnerText = document.getElementById('toal-remaining-amount');
    const remainingTotallAmountString = remainingTotallAmountInnerText.innerText;
    const remainingTotallAmount = parseFloat(remainingTotallAmountString);


    if (savingAmount > 10000) {
        alert('Please You can not Saving');
        const savingMessage = document.getElementById('toal-saving-amount')
        savingMessage.style.display = 'none';
        return;


    }

    //calculate totall remain balence
    const totalRemainBalence = remainingTotallAmount + (totalAmount - (savingAmount + totalExpense));
    remainingTotallAmountInnerText.innerText = totalRemainBalence;




})