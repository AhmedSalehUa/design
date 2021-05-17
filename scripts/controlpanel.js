var navigationButton = document.getElementById("navigation-button");
navigationButton.addEventListener("click", togglePanel);

var navigationPanel = document.getElementById("navigation-panel");
var contentDiv = document.getElementById("contentDiv");


function togglePanel() {
    var listOfcss = navigationPanel.classList;
    var istOfContentcss = contentDiv.classList;
    var allDivs = document.getElementsByClassName("navigation-panel-content");
    if (listOfcss.contains("col-sm-3")) {
        listOfcss.remove("col-sm-3");
        listOfcss.add("col-sm-1");
        istOfContentcss.remove("col-sm-9");
        istOfContentcss.add("col-sm-11");
        for (var a = 0; a < allDivs.length; a++) {
            allDivs[a].hidden = true;
        }
    } else {
        listOfcss.add("col-sm-3");
        listOfcss.remove("col-sm-1");
        istOfContentcss.add("col-sm-9");
        istOfContentcss.remove("col-sm-11");
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

function creatNewElements(divs) {
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



    for (var a = 0; a < Object.entries(QuestionTypes).length; a++) {
        var categoryDiv = document.createElement("div");
        categoryDiv.id = QuestionTypes["q" + (a + 1)]["fun"];
        categoryDiv.addEventListener("click", (function() { return creatQuestionWithType(this, this.id); }));
        categoryDiv.classList.add("col-sm-2", "cat-icon", a);
        if (a % 4 == 0 || a == 0) {
            var rowDiv = document.createElement("div");
            rowDiv.classList.add("row", "cat-row");
            categoryDiv.classList.add("col-sm-offset-2");
        }
        var questionIcon = document.createElement("i");
        questionIcon.classList.add("fas", "fa-question", "cat-icon-sympole")
        categoryDiv.appendChild(questionIcon);
        var questionName = document.createElement("p");
        questionName.classList.add("cat-icon-text");
        questionName.innerHTML = QuestionTypes["q" + (a + 1)]["name"];
        categoryDiv.appendChild(questionName);
        rowDiv.appendChild(categoryDiv);
        mainDiv.appendChild(rowDiv);
    }
    divs.insertBefore(mainDiv, divs.children[divs.children.length - 1]);
}
var QuestionTypes = {
    q1: { name: "Multi Choice Question", fun: "multi" },
    q2: { name: "Short Answers", fun: "short" },
    q3: { name: "Math", fun: "math" },
    q4: { name: "Complete Syntax", fun: "complete" },
    q5: { name: "Multi Choice Question", fun: "multi" },
    q6: { name: "Short Answers", fun: "short" },
    q7: { name: "Math", fun: "math" },
    q8: { name: "Complete Syntax", fun: "complete" }
}

function creatQuestionWithType(div, question) {
    var parent = div.parentNode.parentNode.parentNode;
    var divIndex = Array.prototype.indexOf.call(parent.children, div.parentNode.parentNode);
    var questionContent;
    switch (question) {
        case "multi":
            questionContent = getMultiQuetionDiv(divIndex);
            break;
        case "short":
            questionContent = getShortQuetionDiv(divIndex);
            break;
        case "complete":
            questionContent = getCompeletQuestionDiv(divIndex);
            break;

    }

    parent.replaceChild(questionContent, parent.children[divIndex]);
}

function responseInput(input) {
    input.style.width = ((input.value.length + 10) * 8) + 'px'
}
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="floatLabel"]').attr('data-value', $(this).val()).on('keyup change', function() {
        $(this).attr('data-value', $(this).val());
    });
});