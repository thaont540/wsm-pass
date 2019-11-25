$(function () {
    $('.login-content').find('.wsm-btn.login-success#wsm-login-button').parent().append('<button class="wsm-btn login-success" id="remove-7-core">Remove 7 cores</button>');
    $('body').on('click', '#remove-7-core', function (e) {
        e.preventDefault();
        var url = 'https://fitm.sun-asterisk.vn//core_values/questions/valid_answer';

        var formData = new FormData();
        formData.append('question_id', 3397);
        formData.append('answer_ids[]', 11738);

        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response.data.status) {
                    $("#token-core-value").val(response.data.token);
                    $("#recaptcha-checkbox, #recaptcha-checkmark").toggleClass("hidden");
                    $("#captcha-msg").addClass("hidden");
                    if ($('#user_email').val() != '' && $('#user_password').val() != '') {
                        $('#wsm-login-button').click();
                    }
                } else {
                    alert('hmm, có vẻ họ đã update code, chờ tác giả fix nhé!');
                }
            }
        })
    });
});
