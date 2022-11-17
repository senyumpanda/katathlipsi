// Load Page
var loadPage = document.querySelector(".load-page");

// Menu
var menuPage = document.querySelector(".menu")

// Chatbot
var chatbotPopupRobot = document.querySelectorAll(".chat-popup-robot-chatbot")
var chatbotPopupUser = document.querySelectorAll(".chat-popup-user-chatbot")

window.addEventListener("load", () => {
    // Load Page
    loadPage.classList.toggle("animate-loadDisappear")
    // Menu 
    menuPage.classList.toggle("animate-menuShow")

    // ----- [ Chatbot ] -----
    setTimeout(() => {
        // Popup Robot
        for(var i = 0; i < chatbotPopupRobot.length; i++) {
            chatbotPopupRobot[i].classList.toggle('relative')
        }
        // Popup User
        for(var i = 0; i < chatbotPopupUser.length; i++) {
            chatbotPopupUser[i].classList.toggle('relative')
        }
    }, 1200)
    
})