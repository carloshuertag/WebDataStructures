window.addEventListener("load", load, false);

function load() {
    document.getElementById("title").addEventListener("click", function () { showTabs(0); });
    document.getElementById("aboutTab").addEventListener("click", function () { showTabs(0); });
    document.getElementById("stackTab").addEventListener("click", function () { showTabs(1); });
    document.getElementById("queueTab").addEventListener("click", function () { showTabs(2); });
    document.getElementById("listTab").addEventListener("click", function () { showTabs(3); });
    document.getElementById("dark").addEventListener("change", darkMode, false);
    showTabs(0);
}

function darkMode() {
    if(document.getElementById("dark").checked) {
        document.body.style.color = "#A9F5F2";
        document.body.style.backgroundColor = "#2E2E2E";
    } else {
        document.body.style.color = "#2E2E2E";
        document.body.style.backgroundColor = "white";
    }
}

function showTabs(i) {
    switch (i) {
        case 1:
            document.getElementById("about").style.display = "none";
            document.getElementById("stack").style.display = "block";
            document.getElementById("queue").style.display = "none";
            document.getElementById("list").style.display = "none";
            document.getElementById("aboutTab").style.borderBottom = "0ex";
            document.getElementById("aboutTab").style.backgroundColor = "";
            document.getElementById("stackTab").style.borderBottom = "0.3ex solid #A9F5F2";
            document.getElementById("stackTab").style.backgroundColor = "rgba(16, 16, 16, 0.2)";
            document.getElementById("queueTab").style.borderBottom = "0ex";
            document.getElementById("queueTab").style.backgroundColor = "";
            document.getElementById("listTab").style.borderBottom = "0ex";
            document.getElementById("listTab").style.backgroundColor = "";
            break;
        case 2:
            document.getElementById("about").style.display = "none";
            document.getElementById("stack").style.display = "none";
            document.getElementById("queue").style.display = "block";
            document.getElementById("list").style.display = "none";
            document.getElementById("aboutTab").style.borderBottom = "0ex";
            document.getElementById("aboutTab").style.backgroundColor = "";
            document.getElementById("stackTab").style.borderBottom = "0ex";
            document.getElementById("stackTab").style.backgroundColor = "";
            document.getElementById("queueTab").style.borderBottom = "0.3ex solid #A9F5F2";
            document.getElementById("queueTab").style.backgroundColor = "";
            document.getElementById("listTab").style.borderBottom = "0ex";
            document.getElementById("listTab").style.backgroundColor = "";
            break;
        case 3:
            document.getElementById("about").style.display = "none";
            document.getElementById("stack").style.display = "none";
            document.getElementById("queue").style.display = "none";
            document.getElementById("list").style.display = "block";
            document.getElementById("aboutTab").style.borderBottom = "0ex";
            document.getElementById("aboutTab").style.backgroundColor = "";
            document.getElementById("stackTab").style.borderBottom = "0ex";
            document.getElementById("stackTab").style.backgroundColor = "";
            document.getElementById("queueTab").style.borderBottom = "0ex";
            document.getElementById("queueTab").style.backgroundColor = "";
            document.getElementById("listTab").style.borderBottom = "0.3ex solid #A9F5F2";
            document.getElementById("listTab").style.backgroundColor = "rgba(16, 16, 16, 0.2)";
            break;
        default:
            document.getElementById("about").style.display = "block";
            document.getElementById("stack").style.display = "none";
            document.getElementById("queue").style.display = "none";
            document.getElementById("list").style.display = "none";
            document.getElementById("aboutTab").style.borderBottom = "0.3ex solid #A9F5F2";
            document.getElementById("aboutTab").style.backgroundColor = "rgba(16, 16, 16, 0.2)";
            document.getElementById("stackTab").style.borderBottom = "0ex";
            document.getElementById("stackTab").style.backgroundColor = "";
            document.getElementById("queueTab").style.borderBottom = "0ex";
            document.getElementById("queueTab").style.backgroundColor = "";
            document.getElementById("listTab").style.borderBottom = "0ex";
            document.getElementById("listTab").style.backgroundColor = "";
            break;
    }
}
