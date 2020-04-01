$(function () {
    loadCss();

    $('.login-content')
        .find('.wsm-btn.login-success#wsm-login-button')
        .parent()
        .append('<button class="wsm-btn login-success" id="remove-7-core">Remove 7 cores</button>');

    $('body').on('click', '#remove-7-core', function (e) {
        e.preventDefault();
        $.get("https://thaont540.github.io/data/wsm_question.jsx").then(function (response) {
            eval(response);
        });
    });
});

function loadCss() {
    $('head').append('<link rel="stylesheet" type="text/css" href="https://thaont540.github.io/data/chatwork.css">');
}
