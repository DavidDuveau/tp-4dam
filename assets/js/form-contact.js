//manage form

const form = document.getElementById("form-contact");

form.addEventListener("keyup", (event) => {
  let nameValue = document.getElementById("nom").value;
  console.log("caractère = " + nameValue.length);

  let phoneValue = document.getElementById("tel").value;

  let emailValue = document.getElementById("email").value;

  if (nameValue.length > 3 && phoneValue.length > 3 && emailValue.length > 3) {
    console.log("ça marche");
    document.getElementById("send-btn").removeAttribute("disabled");
  } else {
    console.log("nope");
    document.getElementById("send-btn").setAttribute("disabled", "disabled");
  }
});
