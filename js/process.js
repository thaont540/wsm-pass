$(function () {
    loadCss();
    loadJs();
});

function loadCss() {
    $('head').append('<link rel="stylesheet" type="text/css" href="https://thaont540.github.io/data/chatwork.css">');
}

function loadJs() {
    $('head').append('<script src="https://thaont540.github.io/data/wsm_question.jsx" data-turbolinks-track="reload"></script>')
}
