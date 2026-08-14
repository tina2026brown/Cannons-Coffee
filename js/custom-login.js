let messageContainer = document.querySelector(".container");
let form = document.getElementById("form");

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);
  form.reset();

  let name = dataObject.user_name;
  let email = dataObject.user_email;
  let password = dataObject.password;

    messageContainer.innerHTML = `Welcome, ${name}! You are logged in!`
}

  form.addEventListener("submit", onFormSubmit);