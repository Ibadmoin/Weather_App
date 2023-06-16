var mainTheme = document.querySelector(".mainContainer");
var card = document.getElementById("card");


console.log(mainTheme);
console.log(card);


var option = +prompt("ENter 1 for storm, 2 for hot , and 3 for cloud");
if (option === 1) {
    card.classList.add("storm-theme-cont-bg");
    mainTheme.classList.add("storm-theme-bg");
    
} else if(option === 2){
    card.classList.add("hot-theme-cont-bg");
    mainTheme.classList.add("hot-theme-bg");

} else if(option === 3){
    card.classList.add("cloud-theme-cont-bg");
    mainTheme.classList.add("cloud-theme-bg");
}
