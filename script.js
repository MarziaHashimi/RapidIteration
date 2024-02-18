document.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('header-border');
    } else {
        header.classList.remove('header-border');
    }
});
// -----------pop-up----------------

function togglePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

function sendMessage() {
    var userMessage = document.getElementById('userInput').value;
    var replyMessage = document.getElementById('replyMessage');
    
    if (userMessage) {
        replyMessage.innerHTML = '<p>' + userMessage + '</p><p>We typically reply in a few minutes.</p>';
    }
}

function changePageColor(page) {
    var menuItems = document.getElementsByClassName('list');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('selected');
    }

    document.getElementById(page).classList.add('selected');
}

function changePageColor(page) {
   
    var menuItems = document.querySelectorAll('.list');
    menuItems.forEach(item => item.classList.remove('selected'));

    document.getElementById(page).classList.add('selected');
}

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var emailInput = document.getElementById('email').value;
    var confirmationMessage = document.getElementById('confirmationMessage');

    confirmationMessage.textContent = "Thanks, we received your email. We will get back to you soon.";
});
function sendMessage() {
  
    document.getElementById('confirmationMessage').textContent = "Thanks, we received your message successfully.";
}

    
   

