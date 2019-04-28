const form = document.querySelector("form")
const input = document.querySelector("input")
const chatbox = document.querySelector("#chat-box")
const joke = document.querySelector("#lonley-btn")
// const deleteButton = document.querySelectorAll(".delete-button")



let id = 0
const date = new Date().toLocaleTimeString()


// console.log("this is working")
form.addEventListener("submit", handleSubmit)
joke.addEventListener("click", tellJoke)
// deleteButton.addEventListener("click", deleteMessage)


function handleSubmit(e) {
  e.preventDefault()
  const sender = ["Me", "Myself", "I"][Math.floor(Math.random() * 3)]
  createMessage(sender, input.value)
  form.reset()
}


function createMessage(sender, msgInput) {
  // const something = console.log("create message")
  // chatbox.innerHTML += something
  id ++
  const message = `<div id="${id}" class="user-input row">
    <div class="col-2">${date}</div>
    <div class="col-1">${sender}</div>
    <div class="col-7">${msgInput}</div>
    <div class="col-2">
      <button onclick="deleteMessage(${id})" type="button" class="col-1 close delete" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>`
  chatbox.innerHTML += message
  chatbox.scrollTop = chatbox.scrollHeight
}

function deleteMessage(id) {
  if(confirm("Delete Message?")) {
    const message = document.getElementById(id)
    message.remove()
  }
  // console.log("delete")
  // if(confirm("Are you sure?")) {
  //   const message = document.getElementById(id)
  //   message.remove()
  // }
}

function tellJoke() {
  // console.log("tell a joke!")
  fetch('https://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(json => createMessage('Fact', json.value.joke))
}
