const d = new Date();
let currentYear = d.getFullYear();
var y1 = null; 
let dateInput = document.getElementById("dateinput");
dateInput.addEventListener("change", function () {
    let input = this.value;
    let d1 = new Date(input);
    y1 = d1.getFullYear();
});

let bt=document.querySelector("button")
bt.addEventListener("click", function (){
    event.preventDefault();
    let diff=currentYear-y1;
if (y1==null){
    window.alert("ENTER A VALID DATE !");
}
else if (diff<0) {
    window.alert(  ` Coming from the future ? `);
}
else if (diff==0 ){
        window.alert( ` 0  yo using a PC ? `)}

else {
    let chan=document.querySelector(".age");
chan.textContent=  ` ${diff} `;
}

})

