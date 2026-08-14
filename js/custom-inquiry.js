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
  let phoneNumber = dataObject.telNo;
  let comments = dataObject.comments;
  let coffeeFlavor = dataObject.flavor;
  let buyOrEmploy = dataObject.question;


  messageContainer.innerHTML = `Thank you ${name}! We appreciate your interest in ${buyOrEmploy}. Your favorite coffee flavor is ${coffeeFlavor} and your comments are ${comments}. We will soon contact you at ${email} or ${phoneNumber}.`

}
  form.addEventListener("submit", onFormSubmit);

