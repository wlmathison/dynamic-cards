const containerDiv = document.getElementById("container-div");

const textArea = document.createElement("textarea");
const createButton = document.createElement("button");
createButton.textContent = "Create";

containerDiv.appendChild(textArea);
containerDiv.appendChild(createButton);

let i = 0;

const writeToDOM = () => {
    i++
    let articleEL = document.createElement("article");
    articleEL.classList = "card";
    articleEL.id = `card--${i}`;

    let articleDiv = document.createElement("div");
    articleDiv.textContent = textArea.value;
    articleEL.appendChild(articleDiv);
    
    let articleDiv2 = document.createElement("div");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete This Card";
    deleteButton.id = `delete--${i}`
    articleDiv2.appendChild(deleteButton);
    articleEL.appendChild(articleDiv2);
    containerDiv.appendChild(articleEL);
    textArea.value = "";
    deleteButton.addEventListener("click", () => {
        containerDiv.removeChild(articleEL)
    })
}

createButton.addEventListener("click", writeToDOM)

// Example from challenge instructions
/* <article class="card" id="card--1">
    <div>Hey, I entered some text</div>
    <div>
        <button id="delete--1">Delete This Card</button>
    </div>
</article>
<article class="card" id="card--2">
    <div>Hey, I entered some text</div>
    <div>
        <button id="delete--2">Delete This Card</button>
    </div>
</article> */