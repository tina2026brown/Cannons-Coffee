let messageContainer = document.querySelector(".container");
let form = document.getElementById("form");


// const form = document.querySelector(“#form”) 

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);
  form.reset();
}
  form.addEventListener("submit", onFormSubmit);

  let name = dataObject.user_name;
  let email = dataObject.user_email;
  let phoneNumber = dataObject.telNo;
  let comments = dataObject.comments;
  let coffeeFlavor = dataObject.flavor;
  let buyOrEmploy = dataObject.question;

  messageContainer.innerHTML = `Thank you ${user_name}! We appreciate your interest in ${question}. Your favorite coffee flavor is ${flavor} and your comments are ${comments}. We will soon contact you at ${user_email} or ${telNo}.`