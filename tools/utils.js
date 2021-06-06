let stack, queue, list;
let stackArray = new Array();
let queueArray = new Array();
let listArray = new Array();

window.addEventListener("load", loadPage, false);
function loadPage() {
    //Events
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
    document.getElementById("insertAtStart").addEventListener("click", insertAtStart, false);
    document.getElementById("insertAt").addEventListener("click", insertAt, false);
    document.getElementById("append").addEventListener("click", append, false);
    document.getElementById("deleteAtStart").addEventListener("click", deleteAtStart, false);
    document.getElementById("deleteAt").addEventListener("click", deleteAt, false);
    document.getElementById("deleteAtEnd").addEventListener("click", deleteAtEnd, false);
    document.getElementById("newList").addEventListener("click", newList, false);
    document.getElementById("saveList").addEventListener("click", saveList, false);
    document.getElementById("loadList").addEventListener("click", loadList, false);
    //Objets
    stack = document.getElementById("stackAnimation");
    queue = document.getElementById("queueAnimation");
    list = document.getElementById("listAnimation");
}

//Code Animations

function resetCodeAnimations(sectionId) {
    let paragraphs = document.getElementById(sectionId).children;
    for (let i = 0; i < paragraphs.length; i++) if(paragraphs.item(i).tagName != "br"){
        let lines = paragraphs.item(i).children;
        for (let j = 0; j < lines.length; j++) if(lines.item(j).tagName != "br"){
            lines.item(j).style.color = document.body.style.color;
            lines.item(j).style.backgroundColor = "";
        }
    }
}

function codeAnimation(articleId) {
    let lines = document.getElementById(articleId).children;
    for (let i = 0; i < lines.length; i++) if(lines.item(i).tagName != "br"){
        lines.item(i).style.color = (document.body.style.color == "rgb(46, 46, 46)")
            ? "rgba(0, 127, 63, 0.9)" : "rgba(0, 255, 127, 0.9)";
        lines.item(i).style.backgroundColor = (document.body.style.color == "rgb(46, 46, 46)")
            ? "rgba(0, 255, 127, 0.3)" : "rgba(0, 127, 63, 0.3)";
    }
    lines.item(0).scrollIntoView();
}

//Stack

function newStack() {
    resetCodeAnimations("sCode");
    while (stack.hasChildNodes()) stack.removeChild(stack.firstChild);
    stackArray = new Array();
    document.getElementById("sHead").style.display = "none";
    document.getElementById("sTail").style.display = "none";
    codeAnimation("createStack");
}

function loadStack() {
    resetCodeAnimations("sCode");
    let sArray = getCookie("stackArray");
    if (sArray != "") stackArray = sArray.split(",");
    if (stackArray.length == 0) alert("No stack stored");
    else {
        while (stack.hasChildNodes()) stack.removeChild(stack.firstChild);
        let row, value, arrow, arrowText, arrowData, data;
        for (let i = 0; i < stackArray.length; i++) {
            row = document.createElement("tr");
            value = document.createTextNode(stackArray[stackArray.length - (i + 1)]);
            if (i != 0) {
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
            data.className = "stackElement";
            row.appendChild(data);
            if (i === 0) row.firstChild.className = "stackHead";
        }
        document.getElementById("sHead").style.display = "block";
        document.getElementById("sTail").style.display = "block";
        alert("Stack previously stored loaaded successfully");
    }
}

function saveStack() {
    let qAux = new Array();
    let lAux = new Array();
    let qArray = getCookie("queueArray");
    if (qArray != "") qAux = qArray.split(",");
    let lArray = getCookie("listArray");
    if (lArray != "") lAux = lArray.split(",");
    setCookie(stackArray, qAux, lAux, 1);
    alert("Stack saved successfully");
}

function push() {
    resetCodeAnimations("sCode");
    let value = document.getElementById("sElement").value;
    if(value == "") {
        alert("Please enter the data to push into the stack.");
        return;
    }
    let row = document.createElement("tr");
    let head = stack.firstChild;
    let data = document.createElement("td");
    if (!stack.hasChildNodes()) stack.appendChild(row);
    else {
        let arrow = document.createElement("tr");
        stack.insertBefore(arrow, head);
        stack.insertBefore(row, arrow);
        let arrowData = document.createElement("td");
        let arrowText = document.createTextNode("↓");
        arrowData.appendChild(arrowText);
        arrow.appendChild(arrowData);
        head.firstChild.className = "stackElement";
    }
    let text = document.createTextNode(value);
    data.className = "stackHead";
    data.appendChild(text);
    row.appendChild(data);
    stackArray.push(value);
    document.getElementById("sHead").style.display = "block";
    document.getElementById("sTail").style.display = "block";
    codeAnimation("pushCode");
    codeAnimation("createStackNode");
}

function pop() {
    resetCodeAnimations("sCode");
    if (stack.hasChildNodes()) stack.removeChild(stack.firstChild);
    if (stack.hasChildNodes()) stack.removeChild(stack.firstChild);
    if (!stack.hasChildNodes()) {
        document.getElementById("sHead").style.display = "none";
        document.getElementById("sTail").style.display = "none";
    } else stack.firstChild.firstChild.className = "stackHead";
    stackArray.pop();
    codeAnimation("popCode");
}

//Queue

function enqueue() {
    resetCodeAnimations("qCode");
    let value = document.getElementById("qElement").value;
    if(value == "") {
        alert("Please enter the data to enqueues.");
        return;
    }
    let row;
    let element = document.createElement("td");
    let arrow = document.createElement("td");
    let tail = document.createElement("td");
    let tailText = document.createTextNode("tail");
    tail.appendChild(tailText);
    tail.style.color = "#FA5858";
    if (!queue.hasChildNodes()) {
        row = document.createElement("tr");
        queue.appendChild(row);
        let head = document.createElement("td");
        let headtext = document.createTextNode("head");
        head.appendChild(headtext);
        head.style.color = "#FA5858";
        row.appendChild(head);
        row.appendChild(element);
        row.appendChild(tail);
    }
    else {
        row = queue.firstChild;
        if (row.hasChildNodes()) {
            let aux = row.lastChild;
            row.replaceChild(arrow, aux);
            let arrowText = document.createTextNode("→");
            arrow.appendChild(arrowText);
        }
        row.appendChild(element);
        row.appendChild(tail);
    }
    element.className = "queueElement";
    let text = document.createTextNode(value);
    element.appendChild(text);
    queueArray.push(value);
    codeAnimation("enqueueCode");
    codeAnimation("createQueueNode");
}

function dequeue() {
    resetCodeAnimations("qCode");
    if (queue.hasChildNodes()) {
        let row = queue.firstChild, i = 3;
        while(i--) row.removeChild(row.firstChild);
        if (row.hasChildNodes()) {
            let head = document.createElement("td");
            let headtext = document.createTextNode("head");
            head.appendChild(headtext);
            head.style.color = "#FA5858";
            let aux = row.firstChild;
            row.insertBefore(head, aux);
        } else queue.removeChild(row);
    }
    queueArray.shift();
    codeAnimation("dequeueCode");
}

function newQueue() {
    resetCodeAnimations("qCode");
    if (queue.hasChildNodes()) queue.removeChild(queue.firstChild);
    queueArray = new Array();
    codeAnimation("createQueue");
}

function loadQueue() {
    resetCodeAnimations("sCode");
    let qArray = getCookie("queueArray");
    if (qArray != "") queueArray = qArray.split(",");
    if (queueArray.length == 0) alert("No queue stored");
    else {
        if (queue.hasChildNodes()) queue.removeChild(queue.firstChild);
        let row, value, arrow, arrowText, data;
        row = document.createElement("tr");
        queue.appendChild(row);
        for (let i = 0; i < queueArray.length; i++) {
            if (i === 0) {
                let head = document.createElement("td");
                row.appendChild(head);
                let headtext = document.createTextNode("head");
                head.style.color = "#FA5858";
                head.appendChild(headtext);
            }
            value = document.createTextNode(queueArray[i]);
            data = document.createElement("td");
            data.className = "queueElement";
            row.appendChild(data);
            data.appendChild(value);
            if (i != (queueArray.length - 1)) {
                arrow = document.createElement("td");
                row.appendChild(arrow);
                arrowText = document.createTextNode("→");
                arrow.appendChild(arrowText);
            } else {
                let tail = document.createElement("td");
                let tailText = document.createTextNode("tail");
                tail.appendChild(tailText);
                tail.style.color = "#FA5858";
                row.appendChild(tail);
            }
        }
        alert("Queue previously stored loaaded successfully");
    }
}

function saveQueue() {
    let sAux = new Array();
    let lAux = new Array();
    let sArray = getCookie("stackArray");
    if (sArray != "") sAux = sArray.split(",");
    let lArray = getCookie("listArray");
    if (lArray != "") lAux = lArray.split(",");
    setCookie(sAux, queueArray, lAux, 1);
    alert("Queue saved successfully");
}

//List

function loadList() {
    resetCodeAnimations("lCode");
    let lArray = getCookie("listArray");
    if (lArray != "") listArray = lArray.split(",");
    if (listArray.length == 0) alert("No list stored");
    else {
        if (list.hasChildNodes()) list.removeChild(list.firstChild);
        let row, value, arrow, arrowText, data, pointer;
        row = document.createElement("tr");
        list.appendChild(row);
        for (let i = 0; i < listArray.length; i++) {
            if (i === 0) {
                let start = document.createElement("td");
                row.appendChild(start);
                let starttext = document.createTextNode("start");
                start.style.color = "#A9F5F2";
                start.appendChild(starttext);
            }
            value = document.createTextNode(listArray[i]);
            data = document.createElement("td");
            data.className = "listElement";
            row.appendChild(data);
            data.appendChild(value);
            pointer = document.createElement("td");
            row.appendChild(pointer);
            pointer.className = "listElement";
            if (i != (listArray.length - 1)) {
                arrow = document.createElement("td");
                row.appendChild(arrow);
                arrowText = document.createTextNode("→");
                arrow.appendChild(arrowText);
            } else {
                let nullE = document.createElement("td");
                row.appendChild(nullE);
                let nullIcon = document.createElement("img");
                nullIcon.src = "../icons/null.svg"
                nullE.appendChild(nullIcon);
                nullIcon.style.filter = (document.body.style.color == "rgb(46, 46, 46)")
                ? "brightness(10%)" : "brightness(100%)";
            }
        }
        alert("List previously stored loaaded successfully");
    }

}

function saveList() {
    let sAux = new Array();
    let qAux = new Array();
    let qArray = getCookie("queueArray");
    if (qArray != "") qAux = qArray.split(",");
    let sArray = getCookie("stackArray");
    if (sArray != "") sAux = sArray.split(",");
    setCookie(sAux, qAux, listArray, 1);
    alert("List saved succesfully");
}

function newList() {
    resetCodeAnimations("lCode");
    if (list.hasChildNodes()) list.removeChild(list.firstChild);
    listArray = new Array();
    codeAnimation("createList");
}

function insertAtStart() {
    let value = document.getElementById("lElement").value;
    if(value == "") {
        alert("Please enter the data to append.");
        return;
    }
    resetCodeAnimations("lCode");
    let row;
    let element = document.createElement("td");
    let pointer = document.createElement("td");
    let nullE = document.createElement("td");
    let nullIcon = document.createElement("img");
    nullIcon.src = "../icons/null.svg"
    nullE.appendChild(nullIcon);
    nullIcon.style.filter = (document.body.style.color == "rgb(46, 46, 46)")
            ? "brightness(10%)" : "brightness(100%)";
    if (!list.hasChildNodes()) {
        row = document.createElement("tr");
        list.appendChild(row);
        let start = document.createElement("td");
        let startText = document.createTextNode("start");
        start.appendChild(startText);
        start.style.color = document.body.style.color;
        row.appendChild(start);
        row.appendChild(element);
        row.appendChild(pointer);
        row.appendChild(nullE);
    }
    else{
        row = list.firstChild;
        let arrow = document.createElement("td");
        let next = row.children.item(1);
        let arrowText = document.createTextNode("→");
        arrow.appendChild(arrowText);
        row.insertBefore(arrow, next);
        row.insertBefore(pointer, arrow);
        row.insertBefore(element, pointer);
    }
    element.className = pointer.className = "listElement";
    let text = document.createTextNode(value);
    element.appendChild(text);
    listArray.splice(0, 0, value);
    codeAnimation("createListNode");
    codeAnimation("insertAtStartCode");
}

function insertAt() {
    let value = document.getElementById("lElement").value;
    if(value == "") {
        alert("Please enter the data to insert.");
        return;
    }
    let position = document.getElementById("lPosition").value;
    if(position == "") {
        alert("Please enter the posistion to insert at");
        return;
    }
    position = Number(document.getElementById("lPosition").value);
    if(position < 0 || listArray.length == 0 || position >= listArray.length) {
        alert("Please enter a valid posistion to insert at.");
        return;
    }
    if(position == 0) {
        insertAtStart();
        return;
    }
    resetCodeAnimations("lCode");
    let row = list.firstChild;
    let element = document.createElement("td");
    let pointer = document.createElement("td");
    let arrow = document.createElement("td");
    let next = row.children.item(position * 3 + 1);
    let arrowText = document.createTextNode("→");
    arrow.appendChild(arrowText);
    row.insertBefore(arrow, next);
    row.insertBefore(pointer, arrow);
    row.insertBefore(element, pointer);
    element.className = pointer.className = "listElement";
    let text = document.createTextNode(value);
    element.appendChild(text);
    listArray.splice(position, 0, value);
    codeAnimation("createListNode");
    codeAnimation("insertAtCode");
}

function append() {
    let value = document.getElementById("lElement").value;
    if(value == "") {
        alert("Please enter the data to append.");
        return;
    }
    resetCodeAnimations("lCode");
    let row;
    let element = document.createElement("td");
    let pointer = document.createElement("td");
    let arrow = document.createElement("td");
    let nullE = document.createElement("td");
    let nullIcon = document.createElement("img");
    nullIcon.src = "../icons/null.svg"
    nullE.appendChild(nullIcon);
    nullIcon.style.filter = (document.body.style.color == "rgb(46, 46, 46)")
            ? "brightness(10%)" : "brightness(100%)";
    if (!list.hasChildNodes()) {
        row = document.createElement("tr");
        list.appendChild(row);
        let start = document.createElement("td");
        let startText = document.createTextNode("start");
        start.appendChild(startText);
        start.style.color = document.body.style.color;
        row.appendChild(start);
        row.appendChild(element);
        row.appendChild(pointer);
        row.appendChild(nullE);
    }
    else {
        row = list.firstChild;
        if (row.hasChildNodes()) {
            let aux = row.lastChild;
            row.replaceChild(arrow, aux);
            let arrowText = document.createTextNode("→");
            arrow.appendChild(arrowText);
        }
        row.appendChild(element);
        row.appendChild(pointer);
        row.appendChild(nullE);
    }
    element.className = pointer.className = "listElement";
    let text = document.createTextNode(value);
    element.appendChild(text);
    listArray.push(value);
    codeAnimation("createListNode");
    codeAnimation("appendCode");
}

function deleteAtStart() {
    resetCodeAnimations("lCode");
    if (list.hasChildNodes()) {
        let row = list.firstChild, i = 4;
        while(i--) if (row.hasChildNodes()) row.removeChild(row.firstChild);
        if (row.hasChildNodes()) {
            let start = document.createElement("td");
            let starttext = document.createTextNode("start");
            start.appendChild(starttext);
            start.style.color = document.body.style.color;
            let aux = row.firstChild;
            row.insertBefore(start, aux);
        }
    }
    listArray.shift();
    codeAnimation("deleteAtStartCode");
}

function deleteAt() {
    resetCodeAnimations("lCode");
    let position = document.getElementById("lPosition").value;
    if(position == "") {
        alert("Please enter the posistion to insert at");
        return;
    }
    position = Number(document.getElementById("lPosition").value);
    if(position < 0 || listArray.length == 0 || position >= listArray.length) {
        alert("Please enter a valid posistion to insert at.");
        return;
    }
    if(position == 0) {
        deleteAtStart();
        return;
    }
    if(position == (listArray.length - 1)) {
        deleteAtEnd();
        return;
    }
    if(list.hasChildNodes()) {
        let row = list.firstChild;
        let i = 0, index = position * 3;
        while(i++ < 3) row.removeChild(row.children.item(index));
    }
    listArray.splice(position, 1);
    codeAnimation("deleteAtCode");
}

function deleteAtEnd() {
    resetCodeAnimations("lCode");
    if(list.hasChildNodes()) {
        let row = list.firstChild;
        let i = 0, index = (listArray.length - 1) * 3;
        while(i++ < 3) row.removeChild(row.children.item(index));
        if (row.children.length == 1) row.removeChild(row.children.item(0));
    }
    listArray.pop();
    codeAnimation("deleteAtEndCode");
}


//Cookies 

function setCookie(sArray, qArray, lArray, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "queueArray=" + qArray.toString() + ";" + expires + ";path=/";
    document.cookie = "stackArray=" + sArray.toString() + ";" + expires + ";path=/";
    document.cookie = "listArray=" + lArray.toString() + ";" + expires + ";path=/";
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
