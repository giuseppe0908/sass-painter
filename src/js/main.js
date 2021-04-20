// function men(){
//   console.log("ciao");
//   var cliccato = document.getElementById("magico");
//   if (cliccato.style.display === "block") {
//       cliccato.style.display = "none";
//   }else {
//     cliccato.style.display = "block";
//   }
// }

document.getElementById('menu').addEventListener('click',function() {
  console.log("ciao");
  var cliccato = document.getElementById("magico");
    if (cliccato.style.display === "block") {
        cliccato.style.display = "none";
        console.log("bho");
    }else {
      cliccato.style.display = "block";
    }

})
