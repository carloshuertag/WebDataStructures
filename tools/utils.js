let stack, queue, list;
let stackArray = new Array();
let queueArray = new Array();
let listArray = new Array();

window.addEventListener("load", loadPage, false);
function loadPage() {
    //Events
    //Tabs
    document.getElementById("aboutTab").addEventListener("click", function() { showTabs(0); });
    document.getElementById("stackTab").addEventListener("click", function() { showTabs(1); });
    document.getElementById("queueTab").addEventListener("click", function() { showTabs(2); });
    document.getElementById("listTab").addEventListener("click", function() { showTabs(3); });
    //Stack
    document.getElementById("pop").addEventListener("click", pop, false);
    document.getElementById("push").addEventListener("click", push, false);
    document.getElementById("newStack").addEventListener("click", newStack, false);
    document.getElementById("saveStack").addEventListener("click", saveStack, false);
    document.getElementById("loadStack").addEventListener("click", loadStack, false);
    //Queue
    document.getElementById("enqueue").addEventListener("click", enqueue, false);
    document.getElementById("dequeue").addEventListener("click", dequeue, false);
    document.getElementById("newQueue").addEventListener("click", newQueue, false);
    document.getElementById("saveQueue").addEventListener("click", saveQueue, false);
    document.getElementById("loadQueue").addEventListener("click", loadQueue, false);
    //list
    
    //Objets
    stack = document.getElementById("stackAnimation");
    queue = document.getElementById("queueAnimation");
    list = document.getElementById("listAnimation");
}

function showTabs(i) {
    switch(i) {
        case 1:
            document.getElementById("about").display = "none";
            document.getElementById("stack").display = "block";
            document.getElementById("queue").display = "none";
            document.getElementById("list").display = "none";
            break;
        case 2:
            document.getElementById("about").display = "none";
            document.getElementById("stack").display = "none";
            document.getElementById("queue").display = "block";
            document.getElementById("list").display = "none";
            break;
        case 3:
            document.getElementById("about").display = "none";
            document.getElementById("stack").display = "none";
            document.getElementById("queue").display = "none";
            document.getElementById("list").display = "block";
            break;
        default:
            document.getElementById("about").display = "block";
            document.getElementById("stack").display = "none";
            document.getElementById("queue").display = "none";
            document.getElementById("list").display = "none";
            break;
    }
}

//Stack

function newStack() {
    while(stack.hasChildNodes()) stack.removeChild(stack.firstChild);
    stackArray = new Array();
}

function loadStack() {
    let sArray = getCookie("stackArray");
    if(sArray != "") stackArray = sArray.split(",");
    if(stackArray.length == 0) alert("No stack stored");
    else {
        //Delete any stack 
        while(stack.hasChildNodes()) stack.removeChild(stack.firstChild);
        //Print the stack
        let row, value, arrow, arrowText, arrowData, data;
        for (let i = 0; i < stackArray.length; i++) {
            row = document.createElement("tr");
            value = document.createTextNode(stackArray[stackArray.length-(i+1)]);
            if(i != 0){
                //Arrow 
                arrow = document.createElement("tr");
                stack.appendChild(arrow);
                arrowData = document.createElement("td");
                arrowText = document.createTextNode("↓");
                arrowData.appendChild(arrowText);
                arrow.appendChild(arrowData);  
            }
            stack.appendChild(row);
            data = document.createElement("td");
            data.appendChild(value);
            row.appendChild(data);
        }
    }
}

function saveStack(){
    let qAux = new Array();
    let lAux = new Array();
    let qArray = getCookie("queueArray");
    if (qArray != "") qAux = qArray.split(",");
    let lArray = getCookie("listArray");
    if (lArray != "") lAux = lArray.split(",");
    setCookie(stackArray, qAux, lAux, 1);
    alert ("Stack saved succesfully");
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
        let arrowData = document.createElement("td");
        let arrowText = document.createTextNode("↓");
        arrowData.appendChild(arrowText);
        arrow.appendChild(arrowData);
    }
    let data = document.createElement("td");
    //data.className = "stackElement";
    let text = document.createTextNode(value);
    data.appendChild(text);
    row.appendChild(data);
    stackArray.push(value);
}

function pop() {
    if (stack.hasChildNodes()) stack.removeChild(stack.firstChild);
    if (stack.hasChildNodes()) stack.removeChild(stack.firstChild);
    stackArray.pop();
}

//Queue

function enqueue() {
    let value = document.getElementById("qElement").value;
    let row;
    let element = document.createElement("td");
    let arrow = document.createElement("td");
    if (!queue.hasChildNodes()){
        row = document.createElement("tr");
        queue.appendChild(row);
        row.appendChild(element);
    }
    else {
        row = queue.firstChild;
        if(row.hasChildNodes()){
            row.appendChild(arrow);
            let arrowText = document.createTextNode("→");
            arrow.appendChild(arrowText);
        }
        row.appendChild(element);
    }
    //data.className = "queueElement";
    let text = document.createTextNode(value);
    element.appendChild(text);
    queueArray.push(value); 
}

function dequeue() {
    if (queue.hasChildNodes()){
        let row = queue.firstChild;
        if(row.hasChildNodes()) row.removeChild(row.firstChild);
        if(row.hasChildNodes()) row.removeChild(row.firstChild);
    }
    queueArray.shift();
}

function newQueue() {
    console.log(queueArray);
    if(queue.hasChildNodes()) queue.removeChild(queue.firstChild);
    queueArray = new Array();
}

function loadQueue() {
    let qArray = getCookie("queueArray");
    console.log(qArray);
    if (qArray != "") queueArray = qArray.split(",");
    if(queueArray.length == 0) alert("No queue stored");
    else {
        //Delete any queue
        if(queue.hasChildNodes()) queue.removeChild(queue.firstChild);
        console.log("deleted")
        //Print the queue
        let row, value, arrow, arrowText, arrowData, data;
        //Se crea la fila (solo habra una)
        row = document.createElement("tr");
        queue.appendChild(row);
        for (let i = 0; i < queueArray.length; i++) {
            value = document.createTextNode(queueArray[i]);
            //agregar el nodo (una columna)
            data = document.createElement("td");
            row.appendChild(data);
            data.appendChild(value);
            //let arrow = document.createElement("td");
            //si i es el ultimo elemento, no se imprime la flecha solo el nodo 
            if(i != (queueArray.length-1)){
                //Arrow 
                arrow = document.createElement("td");
                row.appendChild(arrow);
                //arrowData = document.createElement("td");
                arrowText = document.createTextNode("→");
                //arrowData.appendChild(arrowText);
                arrow.appendChild(arrowText);  
            } 
        }
        console.log("added");
        
    }
}

function saveQueue(){
    let sAux = new Array();
    let lAux = new Array();
    let sArray = getCookie("stackArray");
    if (sArray != "") sAux = sArray.split(",");
    let lArray = getCookie("listArray");
    if (lArray != "") lAux = lArray.split(",");
    console.log(queueArray);
    setCookie(sAux, queueArray, lAux, 1);
    alert ("Queue saved successfully");
}

//List

function loadList() {
    let lArray = getCookie("listArray");
    if (lArray != "") listArray = lArray.split(",");
}

function saveList(){
    let sAux = new Array();
    let qAux = new Array();
    let qArray = getCookie("queueArray");
    if (qArray != "") qAux = qArray.split(",");
    let sArray = getCookie("stackArray");
    if (sArray != "") sAux = sArray.split(",");
    setCookie(sAux, qAux, listArray, 1);
    alert ("List saved succesfully");
}

//Cookies 

function setCookie(sArray, qArray, lArray, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "queueArray=" + qArray.toString() + ";" + "stackArray=" + sArray.toString() + ";" + "listArray=" + lArray.toString() + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
