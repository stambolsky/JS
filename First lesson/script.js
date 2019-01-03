var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", "");
var secondQuestion = prompt("Во сколько обойдется?", "");
var appData = {
    budget: money,
    timeData: time,
    expenses: {
        first: firstQuestion,
        second: secondQuestion
    },
    optionalExpenses: "",
    income: "",
    savings: false
}

function budget() {
    var sumOneDay = appData.budget / 30;
    alert(sumOneDay);
}

//console.log(money);
//console.log(time);
//console.log(appData);
console.log(budget());
//console.log(firstQuestion);
//console.log(secondQuestion);