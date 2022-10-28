///////////////////////////////////////////////////////////
// Set current year
const yearElement = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Send E-mail forms

const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const btnSendMail = document.querySelector('.btn-sendmail');
const name = document.getElementById('full-name');
const mail = document.getElementById('mail');
const message = document.querySelector('.bigger-cta-box');

btnSendMail.addEventListener('click', function () {
  if (name.value != '' && message.value != '' && mail.value.match(mailRegex)) {
    window.location.href = 'mailto:d.butler13@outlook.com?subject=Mail from: ' + name.value + '&body=Message: %0D%0A' + message.value + '%0D%0A%0D%0A%0D%0AYou can reach me here: ' + mail.value;
    name.value = '';
    mail.value = '';
    message.value = '';
    location.reload(true);
  } else {
    starListening();
  }
});

function starListening() {
  setColors();
  document.addEventListener('keyup', function () {
    setColors();
  });
  document.addEventListener('click', function () {
    setColors();
  });
}

function setColors() {
  if (name.value != '') {
    name.style.backgroundColor = '#00b40085';
  } else {
    name.style.backgroundColor = '#ff000085';
  }
  if (mail.value.match(mailRegex)) {
    mail.style.backgroundColor = '#00b40085';
  } else {
    mail.style.backgroundColor = '#ff000085';
  }
  if (message.value != '') {
    message.style.backgroundColor = '#00b40085';
  } else {
    message.style.backgroundColor = '#ff000085';
  }
}
