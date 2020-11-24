'use strict';
    let money = 8700,
        income = "фриланс" , 
        addExpenses = ["Еда, Вода, Развлечения"], 
        deposit = true, 
        mission = 100000,
        period = 11,
        budgetDay, budgetMonth,
        expenses = [],
        amount = [],
        i, amountSum;
    const n = 2; // n - количество обязательных статей расходов
                 // и цен во сколько обойдется (на каждую). 
    
    
        money = prompt('Ваш месячный доход ?') * 1;
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        deposit = confirm('Есть ли у вас депозит в банке?');
       
    console.log(typeof money,typeof income,typeof deposit);
    console.log(addExpenses.length);
    console.log("Период равен " + period +" месяцев");
    console.log("Цель заработать " + mission +" рублей");

        for (i = 0; i < n; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов?');
            amount[i] = prompt('Во сколько это обойдется?') * 1;
        }

        amountSum = amount.reduce(function(sum, current) {
            return  sum + current;
        },);
           
        budgetMonth = money - amountSum;
        console.log('Бюджет на месяц: ', budgetMonth.valueOf());
        console.log("Цель будет достигнута: ", Math.ceil((mission / budgetMonth)));

    console.log(addExpenses.toLowerCase().split(','));

    budgetDay = budgetMonth / 30 ;
 
    console.log('Бюджет на день: ', parseInt(budgetDay));

    if (budgetDay >= 1200) {
         console.log("У вас высокий уровень дохода");
    } else if((budgetDay >= 600) && (budgetDay < 1200)) {
        console.log("У вас средний уровень дохода");
    } else if((budgetDay < 600) && (budgetDay >= 0)){ 
        console.log("К сожалению у вас уровень дохода ниже среднего");
    } else {
        console.log("Что то пошло не так");
    }    
