getStatisticsPage();

function getNewExamPage(div) {
    var titDiv = document.createElement("div");
    titDiv.classList.add("row", "element-div");

    var titleElement = document.createElement("textarea");
    titleElement.id = "exam-title";
    titleElement.classList.add("exam-title-class", "col-sm-8", "col-sm-offset-2");
    titleElement.setAttribute("placeholder", "Exam Title");
    titDiv.appendChild(titleElement);

    var addNewQuestioDiv = document.createElement("div");
    addNewQuestioDiv.classList.add("row");

    var addNewQuestioElement = document.createElement("i");
    addNewQuestioElement.id = "newElement";
    addNewQuestioElement.classList.add("newElement-style", "fas", "fa-plus-circle", "col-sm-8", "col-sm-offset-2");
    addNewQuestioElement.onclick = function() { return creatNewElements(this); };
    addNewQuestioElement.setAttribute("data-toggle", "tooltip");
    addNewQuestioElement.setAttribute("data-placement", "right");
    addNewQuestioElement.setAttribute("title", "Add new Question");
    addNewQuestioDiv.appendChild(addNewQuestioElement);

    var navs = document.getElementsByClassName("navBtn");
    for (var a = 0; a < navs.length; a++) {
        navs[a].classList.remove("active-ele");
    }
    div.classList.add("active-ele");

    var body = document.getElementById("contentDiv");
    body.innerHTML = "";
    body.appendChild(titDiv);
    body.appendChild(addNewQuestioDiv);
    $('[data-toggle="tooltip"]').tooltip();

}

function getStudentAnswersPage(div) {

    var navs = document.getElementsByClassName("navBtn");
    for (var a = 0; a < navs.length; a++) {
        navs[a].classList.remove("active-ele");
    }
    div.classList.add("active-ele");

    var body = document.getElementById("contentDiv");
    body.innerHTML = "";

}

function getStatisticsPage() {
    var millisecondsToWait = 1000;
    var placeholder = document.getElementById("placeholder-loading");

    placeholder.style.display = "block";
    setTimeout(function() {
        var navs = document.getElementsByClassName("navBtn");
        for (var a = 0; a < navs.length; a++) {
            navs[a].classList.remove("active-ele");
        }
        var div = document.getElementById("statisticDiv");
        div.classList.add("active-ele");

        var body = document.getElementById("contentDiv");
        body.innerHTML = "";
        placeholder.style.display = "none";
    }, millisecondsToWait);
}

function getSettingsPage(div) {

    var navs = document.getElementsByClassName("navBtn");
    for (var a = 0; a < navs.length; a++) {
        navs[a].classList.remove("active-ele");
    }
    div.classList.add("active-ele");

    var body = document.getElementById("contentDiv");
    body.innerHTML = "";

}

function getProfile(div) {

    var navs = document.getElementsByClassName("navBtn");
    for (var a = 0; a < navs.length; a++) {
        navs[a].classList.remove("active-ele");
    }
    div.classList.add("active-ele");

    var body = document.getElementById("contentDiv");
    body.innerHTML = '<div class="container-fluid">' +
        '                <div class="main-body">' +
        '                    <div class="row gutters-sm">' +
        '                        <div class="col-md-4 mb-3">' +
        '                            <div class="card">' +
        '                                <div class="card-body">' +
        '                                    <div class="d-flex flex-column align-items-center text-center">' +
        '                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">' +
        '                                        <div class="mt-3">' +
        '                                            <h4>John Doe</h4>' +
        '                                            <p class="text-secondary mb-1">Full Stack Developer</p>' +
        '                                            <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                            <div class="card mt-3">' +
        '                                <ul class="list-group list-group-flush">' +
        '                                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">' +
        '                                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>' +
        '                                        <span class="text-secondary">https://bootdey.com</span>' +
        '                                    </li>' +
        '                                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">' +
        '                                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>' +
        '                                        <span class="text-secondary">bootdey</span>' +
        '                                    </li>' +
        '                                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">' +
        '                                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>' +
        '                                        <span class="text-secondary">@bootdey</span>' +
        '                                    </li>' +
        '                                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">' +
        '                                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>' +
        '                                        <span class="text-secondary">bootdey</span>' +
        '                                    </li>' +
        '                                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">' +
        '                                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>' +
        '                                        <span class="text-secondary">bootdey</span>' +
        '                                    </li>' +
        '                                </ul>' +
        '                            </div>' +
        '                        </div>' +
        '                        <div class="col-md-8">' +
        '                            <div class="card mb-3">' +
        '                                <div class="card-body">' +
        '                                    <div class="row">' +
        '                                        <div class="col-sm-3">' +
        '                                            <h6 class="mb-0">Full Name</h6>' +
        '                                        </div>' +
        '                                        <div class="col-sm-9 text-secondary">' +
        '                                            Kenneth Valdez' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <hr>' +
        '                                    <div class="row">' +
        '                                        <div class="col-sm-3">' +
        '                                            <h6 class="mb-0">Email</h6>' +
        '                                        </div>' +
        '                                        <div class="col-sm-9 text-secondary">' +
        '                                            fip@jukmuh.al' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <hr>' +
        '                                    <div class="row">' +
        '                                        <div class="col-sm-3">' +
        '                                            <h6 class="mb-0">Phone</h6>' +
        '                                        </div>' +
        '                                        <div class="col-sm-9 text-secondary">' +
        '                                            (239) 816-9029' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <hr>' +
        '                                    <div class="row">' +
        '                                        <div class="col-sm-3">' +
        '                                            <h6 class="mb-0">Mobile</h6>' +
        '                                        </div>' +
        '                                        <div class="col-sm-9 text-secondary">' +
        '                                            (320) 380-4539' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <hr>' +
        '                                    <div class="row">' +
        '                                        <div class="col-sm-3">' +
        '                                            <h6 class="mb-0">Address</h6>' +
        '                                        </div>' +
        '                                        <div class="col-sm-9 text-secondary">' +
        '                                            Bay Area, San Francisco, CA' +
        '                                        </div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                            <div class="row gutters-sm">' +
        '                                <div class="col-sm-6 mb-3">' +
        '                                    <div class="card h-100">' +
        '                                        <div class="card-body">' +
        '                                            <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>' +
        '                                            <small>Web Design</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                            <small>Website Markup</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                            <small>One Page</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                            <small>Mobile Template</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                            <small>Backend API</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                </div>' +
        '                                <div class="col-sm-6 mb-3">' +
        '                                    <div class="card h-100">' +
        '                                        <div class="card-body">' +
        '                                            <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>' +
        '                                            <small>Web Design</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                            <small>Website Markup</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                            <small>One Page</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                            <small>Mobile Template</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                            <small>Backend API</small>' +
        '                                            <div class="progress mb-3" style="height: 5px">' +
        '                                                <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>' +
        '                                            </div>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>';

}



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

function getMultiAnswerDiv(num) {
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
        answerInput.classList.add("q-checkbox");
        answerInput.setAttribute("type", "checkbox");
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

    var allQuestion = document.createElement("input");
    allQuestion.classList.add("q-radio-details");
    allQuestion.setAttribute("type", "radio");
    allQuestion.setAttribute("name", "q");
    allQuestion.setAttribute("id", "all");
    var allQuestionLable = document.createElement("label");
    allQuestionLable.innerHTML = "For All Question"
    allQuestionLable.setAttribute("for", "all");
    allQuestionLable.classList.add("q-radio-label")
    detailsTabDiv.appendChild(allQuestion);
    detailsTabDiv.appendChild(allQuestionLable);

    var oneAnswer = document.createElement("input");
    oneAnswer.classList.add("q-radio-details");
    oneAnswer.setAttribute("type", "radio");
    oneAnswer.setAttribute("name", "q");
    oneAnswer.setAttribute("id", "one");
    var oneAnswerLable = document.createElement("label");
    oneAnswerLable.innerHTML = "For Every Answer"
    oneAnswerLable.setAttribute("for", "one");
    oneAnswerLable.classList.add("q-radio-label")
    detailsTabDiv.appendChild(oneAnswer);
    detailsTabDiv.appendChild(oneAnswerLable);


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

    var allQuestion = document.createElement("input");
    allQuestion.classList.add("q-radio-details");
    allQuestion.setAttribute("type", "radio");
    allQuestion.setAttribute("name", "q");
    allQuestion.setAttribute("id", "all");
    var allQuestionLable = document.createElement("label");
    allQuestionLable.innerHTML = "For All Question"
    allQuestionLable.setAttribute("for", "all");
    allQuestionLable.classList.add("q-radio-label")
    detailsTabDiv.appendChild(allQuestion);
    detailsTabDiv.appendChild(allQuestionLable);

    var oneAnswer = document.createElement("input");
    oneAnswer.classList.add("q-radio-details");
    oneAnswer.setAttribute("type", "radio");
    oneAnswer.setAttribute("name", "q");
    oneAnswer.setAttribute("id", "one");
    var oneAnswerLable = document.createElement("label");
    oneAnswerLable.innerHTML = "For Every Answer"
    oneAnswerLable.setAttribute("for", "one");
    oneAnswerLable.classList.add("q-radio-label")
    detailsTabDiv.appendChild(oneAnswer);
    detailsTabDiv.appendChild(oneAnswerLable);
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