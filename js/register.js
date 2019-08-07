function checkAfter(data) {
    if (data >= 1) {
        $(".error").eq(0).html("该用户名已经存在")
    }
}

// 后端注册
function checkAfterSuccess(data) {
    if (data >= 1) {
        $(".error").eq(0).html("该用户名已经存在")
    } else {
        $.post('register1.php', {
            "username": $(".informationInput1").eq(0).val(),
            "userPass": $(".pass").eq(1).val()
        }, result, `text`)
    }
}

function result(data) {
    if (data >= 1) {
        alert("success")
        if ($('input[type=checkbox]')[0].checked) {
            document.cookie = `username=${username.value}`
        } else {
            sessionStorage.setItem("username", username.value)
        }
        location.href = 'index.html';
    } else {
        alert("注册失败")
    }
}