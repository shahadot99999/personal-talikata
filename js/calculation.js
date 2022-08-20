//calculate click handler
document.getElementById('Calculate-button').addEventListener('click', function () {

    //Your total amount innerText
    const totalAmountInnerText = document.getElementById('amount-total')
    const totalAmountString = totalAmountInnerText.innerText;
    const totalAmount = parseFloat(totalAmountString);

    //food input value
    const foodField = document.getElementById('cost-food');
    const foodString = foodField.value;
    const foodAmount = parseFloat(foodString);
    foodField.value = '';


    if (isNaN(foodAmount)) {
        alert('Please provide a valid number');
        //return;
    }
    else if (foodAmount <= 0) {
        alert('Please provide a valid positive number');
        //return;
    }

    //Rent input Value
    const rentField = document.getElementById('rent-cost');
    const rainValueString = rentField.value;
    const rentAmount = parseFloat(rainValueString);
    rentField.value = '';

    if (isNaN(rentAmount)) {
        alert('Please provide a valid number');
        //return;
    }
    else if (rentAmount <= 0) {
        alert('Please provide a valid positive number');
        //return;
    }


    //clothes input Value 
    const clothesField = document.getElementById('clothes-cost');
    const clothesValueString = clothesField.value;
    const clothAmount = parseFloat(clothesValueString);
    clothesField.value = '';

    if (isNaN(clothAmount)) {
        alert('Please provide a valid number');
        return;
    }
    else if (clothAmount <= 0) {
        alert('Please provide a valid positive number');
        return;
    }

    //Total Expense innerText 
    const totalExpenseInnerText = document.getElementById('toal-expense');
    const totalExpenseInnerTextString = totalExpenseInnerText.innerText;
    const totalExpense = parseFloat(totalExpenseInnerTextString);



    //sum total cost 
    const totalCost = totalExpense + clothAmount + rentAmount + foodAmount;
    totalExpenseInnerText.innerText = totalCost;



    //your remaining balence innerText 
    const remainingInnertext = document.getElementById('remaining-total');
    const remainingInnertextString = remainingInnertext.innerText;
    const remainingBalence = parseFloat(remainingInnertextString);

    if (totalCost > 10000) {
        alert('Please Stop Your cost');
        const remainingMessage = document.getElementById('toal-expense')
        remainingMessage.style.display = 'none';
        return;
    }

    //calculate your remaining balence 
    const remainingAmount = totalAmount - (remainingBalence + totalCost);
    remainingInnertext.innerText = remainingAmount;


})


