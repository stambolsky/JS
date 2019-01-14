let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for(let i = 0; i < 3; i++) {
        let answer = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = answer;
    }
}
chooseOptExpenses();

 function checkSavigs() {
     if (appData.savings == true) {
         let save = +prompt("Какова суммма накоплений?"),
            percent = +prompt("под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("доход в месяц с вашего депозита: " + appData.monthIncome);
     }
 }

 checkSavigs();






 // do {
//     var i = 0;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");

//         appData.expenses[a] = b;
       
//     } else {
//         console.log("bad result");
//         i--;
//     }
//     i++;
// } while (i < 2);

// var i = 0;
// while (i < 2) {

//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");

//         appData.expenses[a] = b;
    
//     } else {
//         console.log("bad result");
//         i--;
//     }
//     i++;
// }