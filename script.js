let profilemenu = document.getElementById("profilemenu");
function togglemenu() {
    profilemenu.classList.toggle("open-menu-js");
}

let drop_down_msg = document.getElementById("drop_down_msg");
function togglemsg() {
    drop_down_msg.classList.toggle("open-msg-js");
}

//========= network left panel ======================
function togglenetwork() {
    const content = document.querySelector(".manage-drop-down");

    if (content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px"; // Collapse the content
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand the content
    }
}
//============== network buttons ========================

document.getElementById('scrollButtonup').addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('scrollButton').addEventListener('click', function () {
    // Calculate the middle of the page
    // const middle = document.body.scrollHeight / 2;

    // Smooth scroll to the middle
    window.scrollTo({
        top: 550,
        behavior: 'smooth'
    });
});


// jobs section collaps

function toggleFilterSuggestions() {
    const content = document.querySelector(".filter_job_suggestions");

    if (content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px"; // Collapse the content
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand the content
    }
}
//=================== filter selection===============
function selectLi(element) {
    const currentColor = window.getComputedStyle(element).backgroundColor;

    if (currentColor === "rgb(141, 184, 255)") { // Check if the color is white
        element.style.backgroundColor = "#fff"; // Change to the new color
    } else {
        element.style.backgroundColor = "#8db8ff"; // Change back to white
    }
}
function applybutton() {
    const items = document.querySelectorAll('.filter_job_suggestions ul li');
    items.forEach(item => {
        item.style.backgroundColor = "#fff"; // Reset all items to white
    });
}
//=========================== notification =====================
function selectnotification(element) {
    const currentColor = window.getComputedStyle(element).backgroundColor;

    if (currentColor === "rgb(34, 139, 34)") { // Check if the color is white
        element.style.backgroundColor = "#fff"; // Change to the new color
        element.style.color = "rgb(51, 51, 51)";
    } else {
        element.style.backgroundColor = "rgb(34, 139, 34)"; // Change back to white
        element.style.color = "rgb(255, 255, 255)";
    }
}
function applybutton2() {
    const items = document.querySelectorAll('.all_mypost_mentions ul h6');
    items.forEach(item => {
        item.style.backgroundColor = "#fff"; // Reset all items to white
        item.style.color = "rgb(51, 51, 51)"
    });
}
function applybutton1() {
    const items = document.querySelectorAll('.all_mypost_mentions ul li');
    items.forEach(item => {
        item.style.backgroundColor = "#fff"; // Reset all items to white
        item.style.color = "rgb(51, 51, 51)"
    });
}
// ====================responsive===============

let sideActivity = document.getElementById("sidebarActivity");
let morelink = document.getElementById("showMoreLink");

function toggleActivity() {
    let sideActivity = document.getElementById("sidebarActivity");
    let moreLink = document.getElementById("showMoreLink");

    sideActivity.classList.toggle("open-activity");

    if (sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = 'Show less <b>-</b>';
    } else {
        moreLink.innerHTML = 'Show more <b>+</b>';
    }
}

// =============================== ai history ===============

/*
function togglehistory() {
    let historyActivity = document.getElementById("history");
    let showhistory = document.getElementById("showMoreLinkAi");

    historyActivity.classList.toggle("open-history");

} */

function togglehistory() {
    let historyActivity = document.getElementById("historyActivity");
    historyActivity.classList.toggle("open-history");
}
