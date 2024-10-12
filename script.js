






































/*let expensefrom=document.getElementById("#expense-form");
let expenseInput=document.getElementById("#Expense-amount");
let amountinput=document.getElementById("#Income-amount");
/**let categoryinput=document.getElementById("category-input"); */
/**let transcationlist=document.getElementById("transcation-list"); */
/*let totalExpense=document.getElementById("#total-Expense");
let totalincome=document.getElementById("#total-income");
let balance=document.getElementById("#Balance");

expensefrom.addEventListener("submit",function(event){
    event.preventDefault();
        const description=expenseInput.value.trim();
        const amount=parseFloat(amountinput.value.trim());
        const category=categoryinput.value;
               if(description===''||isNaN(amount)||amount<=0){
                alert('please enter a valid expense description and amount.');
                return;
               }
               addtransction(description,amount,category);
               updatesummary();
               clearInput();
});

function addtransction(description,amount,category){
    const transcationRow=document.createElement('.tr');

    transcationRow.innerHTML='<td>${description}</td><td>${category}</td><td>${amount.tofixed(2)}</td><td><button class="delete-btn">Delete</button></td>';

    transcationlist.appendChild(transcationRow);

    transcationRow.querySelector('.delete-btn').addEventListener('click',function(){
        transcationRow.remove();
        updatesummary();
    });
}

function updatesummary({
    let totalExpense =0;
    let totalincome=0;
     
    const transcation=transcationlist.querySelectorAll('tr');

    transcation.foreach(function(transcation){
        const amount=parseFloat(transcation.childern[2].textcontent);
        const category=transcation.childern[1].textcontent;
         
        if (category==='imcome'){
            totalincome += amount;
        }else{
            totalExpense +=amount;
        }
     });

totalExpense.textContent=totalExpense.tofixed(2);
totalincome.textContent=totalincome.tofixed(2);
balance.textContent=(totalincome-totalExpense).tofixed(2);
    })

function clearInput(){
    expenseInput.value='';
    amountinput.value='';
    categoryinput.value='expense';
}*/











 