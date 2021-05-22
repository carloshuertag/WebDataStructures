let stack, queue, list;

window.addEventListener("load", loadPage, false);
function loadPage() {
    //Events
    document.getElementById("pop").addEventListener("click", pop, false);
    document.getElementById("push").addEventListener("click", push, false);
    //Objets
    stack = document.getElementById("stackAnimation");
}
function push() {
    let value = document.getElementById("sElement").value;
    let row = document.createElement("tr");
    let arrow = document.createElement("tr");
    let head = stack.firstChild;
    if (!stack.hasChildNodes()) stack.appendChild(row)
    else {
        stack.insertBefore(arrow, head);
        stack.insertBefore(row, arrow);
    }
    data = document.createElement("td");
    arrowData = document.createElement("td");
    arrowText = document.createTextNode("↓");
    arrowData.appendChild(arrowText);
    arrow.appendChild(arrowData);
    //data.className = "stackElement";
    text = document.createTextNode(value);
    data.appendChild(text);
    row.appendChild(data);
}
function pop() {
    if (stack.hasChildNodes()) stack.removeChild(stack.firstChild);
    if (stack.hasChildNodes()) stack.removeChild(stack.firstChild);
}

function saveStack() {
    
    
}

function enqueue() {

}
function dequeue() {

}

