let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let resultBtn = document.querySelector(".result");
let selects = document.querySelectorAll(".option select");
let sel1 = document.getElementById("select1");
let sel2 = document.getElementById("select2");
let inputs = document.querySelectorAll(".input input");
let inpt1 = document.querySelector(".input1");
let inpt2 = document.querySelector(".input2");
let username

/*resultBtn.addEventListener("click", () => {
  let fromCurr = sel1.value;
  let fromVal = parseFloat(inpt1.value);
  let toCurr = sel2.value;

});*/

selects.forEach(s=>s.addEventListener("change", displayRate));


// inverser les deux valeur
document.querySelector(".swap").addEventListener("click", ()=>{
  console.log(inpt1.value)
  let in1 = inpt1.value;
  let in2 = inpt2.value;
  let op1 = sel1.value;
  let op2 = sel2.value;

  inpt2.value = in1;
  inpt1.value = in2;

  sel2.value = op1;
  sel1.value = op2;

  displayRate();
});


//plus d'info convertion
document.querySelector("#result").addEventListener("click",function() {
  let input1 = parseFloat(document.getElementById("input1")?.value);
  if (!isNaN(input1)) {
    document.querySelector("#box2").classList.toggle("show");
  } else {

  }
});

//ouvrir modal
$(document).ready(function(){
  $("#button").click(function(){
    $("#modal").modal();
  });
});

//close modal
document.querySelector("#form").addEventListener("submit", function (event){
  event.preventDefault()
  username = event.target[0].value
  displayValue(username)
  $("#modal").modal('hide');
})


//login sur la page
function displayValue(username) {
  document.querySelector("#pseudo").textContent = username
}

//connection
$(document).ready(function(){
  function checkForm() {
    let username = $("#username").val();
    let password = $("#psw").val();
    let loginButton = $("#login");

    if (username.length > 0 && password.length >= 8) {
      loginButton.prop('disabled', false);
      loginButton.removeClass("disabled-style");
    } else {
      loginButton.prop('disabled', true);
      loginButton.addClass("disabled-style");
    }
  }
  $("#username").on('input', function(){
    checkForm();
  });
  $("#psw").on('input', function(){
    checkForm();
  });
});

//deconnection
$(document).ready(function(){
  $("#button").click(function(){
    $("#modal").modal();
  });

  $("#form").submit(function(event){
    event.preventDefault();
    var username = $("#username").val();
    var userColorChange = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="green" /></svg>';
    var userColor = document.getElementById('userColor');
    displayValue(username);

    $(".modal-title").text("Logout");
    $("#login").text("Logout");
    $("#login").addClass("logout");
    $("#username").prop('disabled', true);
    $("#psw").prop('disabled', true);
    $(".tooltip-link").remove();
    $("#button").addClass('userConnect')
    userColor.innerHTML = userColorChange;
    $("#login").off("click").on("click", function() {
      history.go(0)
    });
  });
});



// calcule euro --> livre
function result() {
  let input1 = parseFloat(document.getElementById("input1")?.value);
  let input2 = parseFloat(document.getElementById("input2")?.value);
  console.log(input1)
  console.log(input2)
  if (!isNaN(input1)) {
    document.getElementById("input2").value = (input1 * 0.87).toString(10) ;
  } else {
    alert("Veuillez remplir le montant a comparer");
  }
}
