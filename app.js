let input = document.querySelector("input");
let button = document.querySelector("button");
let form = document.querySelector("form");
let todos = document.querySelector(".todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = input.value.trim();
  if (val) {
    todoElement({
      text: val,
    });
  }
  input.value = "";
});

function todoElement(todo) {
  let li = document.createElement("li");
  li.innerHTML = `<span>${todo.text}</span>
            <i class="fa-solid fa-trash-can"></i>`;

  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
  }

  li.querySelector("i").addEventListener("click", () => {
    let liDelete = document.querySelector("li");

    liDelete.parentNode.removeChild(liDelete);
  });
  todos.appendChild(li);
}
