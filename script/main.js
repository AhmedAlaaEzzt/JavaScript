var colors = document.querySelectorAll(".color-switcher li");
var classesList = [];
//Loop on elements
for(var i=0; i< colors.length; i++){
    classesList.push(colors[i].getAttribute("data-color"))
    colors[i].addEventListener("click", function(){
        document.body.classList.remove(...classesList);
        document.body.classList.add(this.getAttribute("data-color"));
    })
}