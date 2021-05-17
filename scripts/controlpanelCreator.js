function getMultiQuetionDiv(num) {
    var mainDiv = document.createElement("div");
    mainDiv.classList.add("row");
    mainDiv.addEventListener("mouseover", (function() { return showClose(this) }));
    mainDiv.addEventListener("mouseout", (function() { return hideClose(this) }));

    var closeIcon = document.createElement("i");
    closeIcon.id = "newElement";
    closeIcon.classList.add("fas", "fa-times-circle", "col-sm-offset-2", "close-icon");
    closeIcon.addEventListener("click", (function() { return closeParent(this) }));
    mainDiv.appendChild(closeIcon);

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("col-sm-8", "col-sm-offset-2", "question-div");

    var tabs = document.createElement("ul");
    tabs.classList.add("nav", "nav-tabs");
    tabs.setAttribute("role", "tablist");

    var qTab = document.createElement("li");
    qTab.setAttribute("role", "presentation");
    qTab.classList.add("active");

    var qTabLink = document.createElement("a");
    qTabLink.setAttribute("href", "#question" + num);
    qTabLink.setAttribute("aria-controls", "question" + num);
    qTabLink.setAttribute("role", "tab");
    qTabLink.setAttribute("data-toggle", "tab");
    qTabLink.innerHTML = "Question";
    qTab.appendChild(qTabLink);

    var dTab = document.createElement("li");
    dTab.setAttribute("role", "presentation");

    var dTabLink = document.createElement("a");
    dTabLink.setAttribute("href", "#details" + num);
    dTabLink.setAttribute("aria-controls", "details" + num);
    dTabLink.setAttribute("role", "tab");
    dTabLink.setAttribute("data-toggle", "tab");
    dTabLink.innerHTML = "Details";
    dTab.appendChild(dTabLink);
    tabs.appendChild(qTab);
    tabs.appendChild(dTab);
    questionDiv.appendChild(tabs);

    var tabContainet = document.createElement("div");
    tabContainet.classList.add("tab-content");

    var questionTabContainet = document.createElement("div");
    questionTabContainet.classList.add("tab-pane", "active");
    questionTabContainet.id = "question" + num;
    questionTabContainet.setAttribute("role", "tabpanel");

    var questioHeader = document.createElement("p");
    questioHeader.classList.add("text-left", "q-title");
    questioHeader.innerHTML = "Question : ";
    questionTabContainet.appendChild(questioHeader);

    var questionName = document.createElement("input");
    questionName.classList.add("form-control");
    questionName.setAttribute("type", "text");
    questionTabContainet.appendChild(questionName);

    var answerHeader = document.createElement("p");
    answerHeader.classList.add("text-left", "q-title");
    answerHeader.innerHTML = "Answers : ";
    questionTabContainet.appendChild(answerHeader);

    var answersTable = document.createElement("table");
    answersTable.classList.add("table", "table-striped");

    var answersTableHeader = document.createElement("thead");
    var answersTableHeaderC = document.createElement("tr");
    var answersTableHeaderColum1 = document.createElement("th");
    answersTableHeaderColum1.setAttribute("scope", "col");
    var answersIcon = document.createElement("i");
    answersIcon.classList.add("fas", "fa-check-circle");
    answersTableHeaderColum1.appendChild(answersIcon);
    answersTableHeaderC.appendChild(answersTableHeaderColum1);
    var answersTableHeaderColum2 = document.createElement("th");
    answersTableHeaderColum2.setAttribute("scope", "col");
    answersTableHeaderColum2.innerHTML = "Answers";
    answersTableHeaderC.appendChild(answersTableHeaderColum2);
    answersTableHeader.appendChild(answersTableHeaderC);
    answersTable.appendChild(answersTableHeader);
    var answersTableBody = document.createElement("tbody");
    for (var a = 1; a < 5; a++) {
        var answersTableBodyC = document.createElement("tr");

        var answersTableBodyColum1 = document.createElement("th");
        answersTableBodyColum1.setAttribute("scope", "row");

        var answersTableBodyColum2 = document.createElement("td");

        var answerInput = document.createElement("input");
        answerInput.classList.add("q-radio");
        answerInput.setAttribute("type", "radio");
        answerInput.setAttribute("name", "q");
        answersTableBodyColum1.appendChild(answerInput);
        var answerText = document.createElement("input");
        answerText.classList.add("form-control");
        answerText.setAttribute("type", "text");
        answerText.setAttribute("name", "q" + a + "-text");
        answersTableBodyColum2.appendChild(answerText);
        answersTableBodyC.appendChild(answersTableBodyColum1);
        answersTableBodyC.appendChild(answersTableBodyColum2);
        answersTableBody.appendChild(answersTableBodyC);
        answersTable.appendChild(answersTableBody);
    }



    questionTabContainet.appendChild(answersTable);
    var detailsTabContainet = document.createElement("div");
    detailsTabContainet.classList.add("tab-pane", "details-question");
    detailsTabContainet.id = "details" + num;
    detailsTabContainet.setAttribute("role", "tabpanel");

    var detailsTabDiv = document.createElement("div");
    detailsTabDiv.classList.add("input-group");

    var detailsTabSpan = document.createElement("span");
    detailsTabSpan.classList.add("input-group-addon");
    detailsTabSpan.id = "basic-addon1";
    detailsTabSpan.innerHTML = "Marks";
    detailsTabDiv.appendChild(detailsTabSpan);

    var detailsTabInput = document.createElement("input");
    detailsTabInput.classList.add("form-control");
    detailsTabInput.setAttribute("type", "number");
    detailsTabInput.setAttribute("aria-describedby", "basic-addon1");
    detailsTabDiv.appendChild(detailsTabInput);
    detailsTabContainet.appendChild(detailsTabDiv);

    tabContainet.appendChild(questionTabContainet);
    tabContainet.appendChild(detailsTabContainet);

    questionDiv.appendChild(tabContainet);

    mainDiv.appendChild(questionDiv);

    return mainDiv;
}

function getShortQuetionDiv(num) {
    var mainDiv = document.createElement("div");
    mainDiv.classList.add("row");
    mainDiv.addEventListener("mouseover", (function() { return showClose(this) }));
    mainDiv.addEventListener("mouseout", (function() { return hideClose(this) }));

    var closeIcon = document.createElement("i");
    closeIcon.id = "newElement";
    closeIcon.classList.add("fas", "fa-times-circle", "col-sm-offset-2", "close-icon");
    closeIcon.addEventListener("click", (function() { return closeParent(this) }));
    mainDiv.appendChild(closeIcon);

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("col-sm-8", "col-sm-offset-2", "question-div");

    var tabs = document.createElement("ul");
    tabs.classList.add("nav", "nav-tabs");
    tabs.setAttribute("role", "tablist");

    var qTab = document.createElement("li");
    qTab.setAttribute("role", "presentation");
    qTab.classList.add("active");

    var qTabLink = document.createElement("a");
    qTabLink.setAttribute("href", "#question" + num);
    qTabLink.setAttribute("aria-controls", "question" + num);
    qTabLink.setAttribute("role", "tab");
    qTabLink.setAttribute("data-toggle", "tab");
    qTabLink.innerHTML = "Question";
    qTab.appendChild(qTabLink);

    var dTab = document.createElement("li");
    dTab.setAttribute("role", "presentation");

    var dTabLink = document.createElement("a");
    dTabLink.setAttribute("href", "#details" + num);
    dTabLink.setAttribute("aria-controls", "details" + num);
    dTabLink.setAttribute("role", "tab");
    dTabLink.setAttribute("data-toggle", "tab");
    dTabLink.innerHTML = "Details";
    dTab.appendChild(dTabLink);
    tabs.appendChild(qTab);
    tabs.appendChild(dTab);
    questionDiv.appendChild(tabs);

    var tabContainet = document.createElement("div");
    tabContainet.classList.add("tab-content");

    var questionTabContainet = document.createElement("div");
    questionTabContainet.classList.add("tab-pane", "active");
    questionTabContainet.id = "question" + num;
    questionTabContainet.setAttribute("role", "tabpanel");

    var questioHeader = document.createElement("p");
    questioHeader.classList.add("text-left", "q-title");
    questioHeader.innerHTML = "Question : ";
    questionTabContainet.appendChild(questioHeader);

    var questionName = document.createElement("input");
    questionName.classList.add("form-control");
    questionName.setAttribute("type", "text");
    questionTabContainet.appendChild(questionName);

    var answerHeader = document.createElement("p");
    answerHeader.classList.add("text-left", "q-title");
    answerHeader.innerHTML = "Answers : ";
    questionTabContainet.appendChild(answerHeader);

    var answerDiv = document.createElement("textarea");
    answerDiv.classList.add("form-control", "txt-are");
    answerDiv.setAttribute("name", "answer");
    answerDiv.setAttribute("rows", "4");

    questionTabContainet.appendChild(answerDiv);

    var detailsTabContainet = document.createElement("div");
    detailsTabContainet.classList.add("tab-pane", "details-question");
    detailsTabContainet.id = "details" + num;
    detailsTabContainet.setAttribute("role", "tabpanel");

    var detailsTabDiv = document.createElement("div");
    detailsTabDiv.classList.add("input-group");

    var detailsTabSpan = document.createElement("span");
    detailsTabSpan.classList.add("input-group-addon");
    detailsTabSpan.id = "basic-addon1";
    detailsTabSpan.innerHTML = "Marks";
    detailsTabDiv.appendChild(detailsTabSpan);

    var detailsTabInput = document.createElement("input");
    detailsTabInput.classList.add("form-control");
    detailsTabInput.setAttribute("type", "number");
    detailsTabInput.setAttribute("aria-describedby", "basic-addon1");
    detailsTabDiv.appendChild(detailsTabInput);
    detailsTabContainet.appendChild(detailsTabDiv);

    tabContainet.appendChild(questionTabContainet);
    tabContainet.appendChild(detailsTabContainet);

    questionDiv.appendChild(tabContainet);

    mainDiv.appendChild(questionDiv);

    return mainDiv;
}

function getCompeletQuestionDiv(num) {
    var mainDiv = document.createElement("div");
    mainDiv.classList.add("row");
    mainDiv.addEventListener("mouseover", (function() { return showClose(this) }));
    mainDiv.addEventListener("mouseout", (function() { return hideClose(this) }));

    var closeIcon = document.createElement("i");
    closeIcon.id = "newElement";
    closeIcon.classList.add("fas", "fa-times-circle", "col-sm-offset-2", "close-icon");
    closeIcon.addEventListener("click", (function() { return closeParent(this) }));
    mainDiv.appendChild(closeIcon);

    var questionDiv = document.createElement("div");
    questionDiv.classList.add("col-sm-8", "col-sm-offset-2", "question-div");

    var tabs = document.createElement("ul");
    tabs.classList.add("nav", "nav-tabs");
    tabs.setAttribute("role", "tablist");

    var qTab = document.createElement("li");
    qTab.setAttribute("role", "presentation");
    qTab.classList.add("active");

    var qTabLink = document.createElement("a");
    qTabLink.setAttribute("href", "#question" + num);
    qTabLink.setAttribute("aria-controls", "question" + num);
    qTabLink.setAttribute("role", "tab");
    qTabLink.setAttribute("data-toggle", "tab");
    qTabLink.innerHTML = "Question";
    qTab.appendChild(qTabLink);

    var dTab = document.createElement("li");
    dTab.setAttribute("role", "presentation");

    var dTabLink = document.createElement("a");
    dTabLink.setAttribute("href", "#details" + num);
    dTabLink.setAttribute("aria-controls", "details" + num);
    dTabLink.setAttribute("role", "tab");
    dTabLink.setAttribute("data-toggle", "tab");
    dTabLink.innerHTML = "Details";
    dTab.appendChild(dTabLink);
    tabs.appendChild(qTab);
    tabs.appendChild(dTab);
    questionDiv.appendChild(tabs);

    var tabContainet = document.createElement("div");
    tabContainet.classList.add("tab-content");

    var questionTabContainet = document.createElement("div");
    questionTabContainet.classList.add("tab-pane", "active");
    questionTabContainet.id = "question" + num;
    questionTabContainet.setAttribute("role", "tabpanel");

    var questioHeader = document.createElement("p");
    questioHeader.classList.add("text-left", "q-title");
    questioHeader.innerHTML = "Useable Inputs : ";
    questionTabContainet.appendChild(questioHeader);

    var addQuestionBtn = document.createElement("button");
    addQuestionBtn.classList.add("btn", "btn-primary");
    addQuestionBtn.innerHTML = "add/continue Question";
    addQuestionBtn.setAttribute("type", "button")
    addQuestionBtn.onclick = function() { return addQuestion(this); };
    questionTabContainet.appendChild(addQuestionBtn);

    var addAnswerBtn = document.createElement("button");
    addAnswerBtn.classList.add("btn", "btn-success");
    addAnswerBtn.innerHTML = "add answer";
    addAnswerBtn.setAttribute("type", "button")
    addAnswerBtn.onclick = function() { return addAnswer(this); }
    questionTabContainet.appendChild(addAnswerBtn);

    var answerHeader = document.createElement("p");
    answerHeader.classList.add("text-left", "q-title");
    answerHeader.innerHTML = "Answers : ";
    questionTabContainet.appendChild(answerHeader);


    var contaier = document.createElement("div");
    contaier.classList.add("question-group");

    var input = document.createElement("input");
    input.classList.add("question-field");
    input.setAttribute("type", "text");
    input.setAttribute("required", "")
    input.onkeydown = function() { return responseInput(this); };
    input.onkeyup = function() { return responseInput(this); };

    var label = document.createElement("label");
    label.classList.add("question-group-label");
    label.innerHTML = "Question";
    contaier.appendChild(input);
    contaier.appendChild(label);


    questionTabContainet.appendChild(contaier);

    var detailsTabContainet = document.createElement("div");
    detailsTabContainet.classList.add("tab-pane", "details-question");
    detailsTabContainet.id = "details" + num;
    detailsTabContainet.setAttribute("role", "tabpanel");

    var detailsTabDiv = document.createElement("div");
    detailsTabDiv.classList.add("input-group");

    var detailsTabSpan = document.createElement("span");
    detailsTabSpan.classList.add("input-group-addon");
    detailsTabSpan.id = "basic-addon1";
    detailsTabSpan.innerHTML = "Marks";
    detailsTabDiv.appendChild(detailsTabSpan);

    var detailsTabInput = document.createElement("input");
    detailsTabInput.classList.add("form-control");
    detailsTabInput.setAttribute("type", "number");
    detailsTabInput.setAttribute("aria-describedby", "basic-addon1");
    detailsTabDiv.appendChild(detailsTabInput);
    detailsTabContainet.appendChild(detailsTabDiv);

    tabContainet.appendChild(questionTabContainet);
    tabContainet.appendChild(detailsTabContainet);

    questionDiv.appendChild(tabContainet);

    mainDiv.appendChild(questionDiv);

    return mainDiv;
}

function addQuestion(div) {
    if (!div.parentNode.children[div.parentNode.children.length - 1].classList.contains("question-group")) {
        var contaier = document.createElement("div");
        contaier.classList.add("question-group");

        var input = document.createElement("input");
        input.classList.add("question-field");
        input.setAttribute("type", "text");
        input.setAttribute("required", "")
        input.onkeydown = function() { return responseInput(this); };
        input.onkeyup = function() { return responseInput(this); };

        var label = document.createElement("label");
        label.classList.add("question-group-label");
        label.innerHTML = "Question";
        contaier.appendChild(input);
        contaier.appendChild(label);
        div.parentNode.appendChild(contaier);
    }

}

function addAnswer(div) {
    if (!div.parentNode.children[div.parentNode.children.length - 1].classList.contains("answer-group")) {

        var contaier = document.createElement("div");
        contaier.classList.add("answer-group");

        var input = document.createElement("input");
        input.classList.add("question-field");
        input.setAttribute("type", "text");
        input.setAttribute("required", "")
        input.onkeydown = function() { return responseInput(this); };
        input.onkeyup = function() { return responseInput(this); };

        var label = document.createElement("label");
        label.classList.add("question-group-label");
        label.innerHTML = "Answer";
        contaier.appendChild(input);
        contaier.appendChild(label);
        div.parentNode.appendChild(contaier);
    }
}