let ragName1 = /^1[3-8]\d{9}$/;
let ragName2 = /^\w+@[qq|163|outlook|gMail]\.[com|cn]/;
let ragPass = /^\w{6,}$/;

function checkPhone(str) {
    let a = ragName1.test(str)
    return a;
}

function checkEmail(str) {
    let a = ragName2.test(str)
    return a;
}

function checkPass(str) {
    let a = ragPass.test(str)
    return a;
}