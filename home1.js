let i = prompt("Введите число");
i = +i;
typeof(i);
if (i % 2 !== 0){
    alert("Нечетное")
}
else if (i % 2 === 0) {
    alert("Четное")
} 
if (isNaN(i)) {
    alert ("Упс, кажется вы ошиблись.")
}
