var navigationButton = document.getElementById("navigation-button");
navigationButton.addEventListener("click", togglePanel);

var navigationPanel = document.getElementById("navigation-panel");
var contentDiv = document.getElementById("contentDiv");


function togglePanel() {
    var listOfcss = navigationPanel.classList;
    var allDivs = document.getElementsByClassName("navigation-panel-content");
    if (listOfcss.contains("col-sm-3")) {
        listOfcss.remove("col-sm-3");
        listOfcss.add("col-sm-1");
        contentDiv.remove("col-sm-9");
        contentDiv.add("col-sm-11");
        for (var a = 0; a < allDivs.length; a++) {
            allDivs[a].hidden = true;
        }
    } else {
        listOfcss.add("col-sm-3");
        listOfcss.remove("col-sm-1");
        contentDiv.add("col-sm-9");
        contentDiv.remove("col-sm-11");
        for (var a = 0; a < allDivs.length; a++) {
            allDivs[a].hidden = false;
        }
    }
}

function buttonClicked(button) {

    var ba = button.children[1].children[0].innerHTML = "DR.";

}

function showClose(div) {
    div.children[0].style.display = 'block';
}

function hideClose(div) {
    div.children[0].style.display = 'none';
}

function closeParent(div) {
    div.parentNode.remove();

}

function creatNewElement(divs) {
    divs = divs.parentNode.parentNode;

    var mainDiv = document.createElement("div");
    mainDiv.classList.add("row", "container-fluid", "cat-container");
    mainDiv.addEventListener("mouseover", (function() { return showClose(this) }));
    mainDiv.addEventListener("mouseout", (function() { return hideClose(this) }));

    var closeIcon = document.createElement("i");
    closeIcon.id = "newElement";
    closeIcon.classList.add("fas", "fa-times-circle", "col-sm-offset-2", "close-icon");
    closeIcon.addEventListener("click", (function() { return closeParent(this) }));
    mainDiv.appendChild(closeIcon);
    //frist row
    var rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "cat-row");

    var categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-sm-2", "col-sm-offset-2", "cat-icon");

    var questionIcon = document.createElement("i");
    questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
    categoryDiv.appendChild(questionIcon);
    //q1
    var questionName = document.createElement("p");
    questionName.classList.add("cat-icon-text");
    questionName.innerHTML = "Multi Choice Question";
    categoryDiv.appendChild(questionName);

    rowDiv.appendChild(categoryDiv);
    mainDiv.appendChild(rowDiv);
    var categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-sm-2", "cat-icon");

    var questionIcon = document.createElement("i");
    questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
    categoryDiv.appendChild(questionIcon);
    //q2
    var questionName = document.createElement("p");
    questionName.classList.add("cat-icon-text");
    questionName.innerHTML = "Complete Syntax";
    categoryDiv.appendChild(questionName);

    rowDiv.appendChild(categoryDiv);
    mainDiv.appendChild(rowDiv);
    var categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-sm-2", "cat-icon");

    var questionIcon = document.createElement("i");
    questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
    categoryDiv.appendChild(questionIcon);
    //q3
    var questionName = document.createElement("p");
    questionName.classList.add("cat-icon-text");
    questionName.innerHTML = "Short Answers";
    categoryDiv.appendChild(questionName);

    rowDiv.appendChild(categoryDiv);
    mainDiv.appendChild(rowDiv);
    var categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-sm-2", "cat-icon");

    var questionIcon = document.createElement("i");
    questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
    categoryDiv.appendChild(questionIcon);
    //q4
    var questionName = document.createElement("p");
    questionName.classList.add("cat-icon-text");
    questionName.innerHTML = "Math";
    categoryDiv.appendChild(questionName);

    rowDiv.appendChild(categoryDiv);
    mainDiv.appendChild(rowDiv);
    var rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "cat-row");

    var categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-sm-2", "col-sm-offset-2", "cat-icon");

    var questionIcon = document.createElement("i");
    questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
    categoryDiv.appendChild(questionIcon);
    //q5
    var questionName = document.createElement("p");
    questionName.classList.add("cat-icon-text");
    questionName.innerHTML = "Complete Syntax";
    categoryDiv.appendChild(questionName);

    rowDiv.appendChild(categoryDiv);
    mainDiv.appendChild(rowDiv);
    var categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-sm-2", "cat-icon");

    var questionIcon = document.createElement("i");
    questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
    categoryDiv.appendChild(questionIcon);
    //q6
    var questionName = document.createElement("p");
    questionName.classList.add("cat-icon-text");
    questionName.innerHTML = "Multi Choice Question";
    categoryDiv.appendChild(questionName);

    rowDiv.appendChild(categoryDiv);
    mainDiv.appendChild(rowDiv);
    var categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-sm-2", "cat-icon");

    var questionIcon = document.createElement("i");
    questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
    categoryDiv.appendChild(questionIcon);
    //q7
    var questionName = document.createElement("p");
    questionName.classList.add("cat-icon-text");
    questionName.innerHTML = "Multi Choice Question";
    categoryDiv.appendChild(questionName);

    rowDiv.appendChild(categoryDiv);
    mainDiv.appendChild(rowDiv);
    var categoryDiv = document.createElement("div");
    categoryDiv.classList.add("col-sm-2", "cat-icon");

    var questionIcon = document.createElement("i");
    questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
    categoryDiv.appendChild(questionIcon);
    //q8
    var questionName = document.createElement("p");
    questionName.classList.add("cat-icon-text");
    questionName.innerHTML = "Multi Choice Question";
    categoryDiv.appendChild(questionName);

    rowDiv.appendChild(categoryDiv);
    mainDiv.appendChild(rowDiv);

    divs.insertBefore(mainDiv, divs.children[divs.children.length - 1]);
}
var quwstionnames = ["Multi Choice Question", "Short Answers", "Math", "Complete Syntax"];
var q = {
    q1: { name: "Multi Choice Question", fun: "multi" },
    q2: { name: "Short Answers", fun: "short" },
    q3: { name: "Math", fun: "math" },
    q4: { name: "Complete Syntax", fun: "complete" },
}