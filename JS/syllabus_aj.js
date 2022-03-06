function years() {
    const YR = new XMLHttpRequest();
    YR.onload = function () {
        document.getElementById("folder").innerHTML = this.responseText;
    }
    YR.open("GET", "Syllabus_html/year_syllabus.html");
    YR.send();
    console.log("main load");
}

let year;
function course_year(y) {
    const YR = new XMLHttpRequest();

    year = y;
    YR.onload = function () {
        document.getElementById("folder").innerHTML = this.responseText;
    }
    YR.open("GET", "Syllabus_html/" + year + "/course_syllabus.html");
    YR.send();
    console.log("course load" + year);
}

function BCA() {
    const YR = new XMLHttpRequest();
    YR.onload = function () {
        document.getElementById("folder").innerHTML = this.responseText;
    }
    YR.open("GET", "Syllabus_html/" + year + "/BCA_syllabus.html");
    YR.send();
    console.log("BCA load " + year);
}

function BBA() {
    const YR = new XMLHttpRequest();
    YR.onload = function () {
        document.getElementById("folder").innerHTML = this.responseText;
    }
    YR.open("GET", "Syllabus_html/" + year + "/BBA_syllabus.html");
    YR.send();
    console.log("BBA load " + year);
}

function BSC() {
    const YR = new XMLHttpRequest();
    YR.onload = function () {
        document.getElementById("folder").innerHTML = this.responseText;
    }
    YR.open("GET", "Syllabus_html/" + year + "/BSC_syllabus.html");
    YR.send();
    console.log("BSC load " + year);
}

function BED() {
    const YR = new XMLHttpRequest();
    YR.onload = function () {
        document.getElementById("folder").innerHTML = this.responseText;
    }
    YR.open("GET", "error.html");
    YR.send();
    console.log("BEC load " + year);
}

function BCOM_guj() {
    const YR = new XMLHttpRequest();
    YR.onload = function () {
        document.getElementById("folder").innerHTML = this.responseText;
    }
    YR.open("GET", "Syllabus_html/" + year + "/BCOM_guj_syllabus.html");
    YR.send();
    console.log("BSC load " + year);
}

function BCOM_eng() {
    const YR = new XMLHttpRequest();
    YR.onload = function () {
        document.getElementById("folder").innerHTML = this.responseText;
    }
    YR.open("GET", "Syllabus_html/" + year + "/BCOM_eng_syllabus.html");
    YR.send();
    console.log("BSC load " + year);
}
