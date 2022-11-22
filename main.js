let inputOne = document.querySelector('#username');
let regexx = /^[a-zA-Z-\s]+$/;
const rger = /0(6|7|5)[0-9]{8}$/
const arr = [];
let resultOne = document.querySelector('#result1');
inputOne.onblur = function () {
    resultOne.innerHTML = ""
    console.log('hhhhh');


    if (inputOne.value.match(regexx)) {

        resultOne.innerHTML = '<i class="fa-solid fa-circle-check"></i> valid'
        inputOne.style.borderColor = "green"
        resultOne.style.color = "green"


    } else if (inputOne.value.length >= 30) {
        resultOne.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> name must be under 30 characters'
        inputOne.style.borderColor = "red"
        resultOne.style.color = "red"

    } else if (inputOne.value.length < 3) {
        resultOne.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> must be atleast 3 characters'
        inputOne.style.borderColor = "red"
        resultOne.style.color = "red"

    }

    else {
        resultOne.style.color = "red"
        resultOne.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> unvalid'
        inputOne.style.borderColor = "red"

    }
}
















// =========================== ===============  last name      ===============================================================================




let lastname = document.querySelector('#lastname');
let reg = /^[a-zA-Z-\s]+$/;
let resultTwo = document.querySelector('#result2');
lastname.onblur = function () {
    resultTwo.innerHTML = ""
    console.log('hhhhh');

    if (lastname.value.match(reg)) {
        resultTwo.innerHTML = '<i class="fa-solid fa-circle-check"></i> valid'
        lastname.style.borderColor = "green"
        resultTwo.style.color = "green"

    } else if (lastname.value.length < 3) {
        resultTwo.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> name must be atleast 3 characters'
        lastname.style.borderColor = "red"
        resultTwo.style.color = "red"

    } else if (lastname.value.length >= 30) {
        resultTwo.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> name must be under 30 characters'
        lastname.style.borderColor = "red"
        resultTwo.style.color = "red"

    } else {

        resultTwo.style.color = "red"
        resultTwo.innerHTML = ' <i class="fa-solid fa-circle-exclamation"></i> unvalid'
        lastname.style.borderColor = "red"

    }
}
















// =========================== =========== email =========================================================================


let emailAdress = document.querySelector('#email');
let resultThree = document.querySelector('#result3');
let rgerr = /([a-z\d\.-]+)@(gmail|ofppt)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
emailAdress.onblur = function () {

    if (emailAdress.value.match(rgerr)) {
        resultThree.innerHTML = '<i class="fa-solid fa-circle-check"></i> valid adress'
        emailAdress.style.borderColor = "green"
        resultThree.style.color = "green"


    } else {
        resultThree.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Given email-id is not valid'
        emailAdress.style.borderColor = "red"
        resultThree.style.color = "red"



    }
}















let phoneNum = document.querySelector('#phone');
let resultFour = document.querySelector('#result4');
phoneNum.onblur = function () {


    if (phoneNum.value.match(rger)) {
        resultFour.innerHTML = '<i class="fa-solid fa-circle-check"></i> valid number'
        phoneNum.style.borderColor = "green"
        resultFour.style.color = "green"



    } else {
        resultFour.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Given number is not valid'
        phoneNum.style.borderColor = "red"
        resultFour.style.color = "red"

    }

}









function gochk() {
    let resultFive = document.getElementById('result5');

    let allGroup = document.getElementsByName("chk");
    let total = 0;

    for (let j=0; j < allGroup.length; j++) {
        if (allGroup[j].checked == true) {
            total += 1;
        }
    }
    if (total > 1) {
        resultFive.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> please check one groupe'
        resultFive.style.color = "red"
        return false;

    } else if (total == 0) {
        resultFive.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> choose an option'
        resultFive.style.color = "red"


    }
    else {
        resultFive.innerHTML = '<i class="fa-solid fa-circle-check"></i> valid'
        resultFive.style.color = "green"
    }
}


function srrs() {


    let ginre = document.getElementsByName('ginre');
let resultSix = document.getElementById('result7');



if (ginre[0].checked === false && ginre[1].checked == false) {

    resultSix.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> choose your gender'
    resultSix.style.color = "red"

}

else {
    resultSix.innerHTML = '<i class="fa-solid fa-circle-check"></i> Vous êtes prêt à partir'
    resultSix.style.color = "green"
}
    
}




 
        




   






























// =========================== ================ phone number=======================================================================









// =========================================== =======================================================================


document.getElementById("btn").onclick = function (e) {
    e.preventDefault();
  




    let inputOne = document.querySelector('#username');
    let regexx = /^[a-zA-Z-\s]+$/;
    const rger = /0(6|7|5)[0-9]{8}$/
    const arr = [];
    let resultOne = document.querySelector('#result1');

    let lastname = document.querySelector('#lastname');
let reg = /^[a-zA-Z-\s]+$/;
let resultTwo = document.querySelector('#result2');

let emailAdress = document.querySelector('#email');
let resultThree = document.querySelector('#result3');
let rgerr = /([a-z\d\.-]+)@(gmail|ofppt)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

let phoneNum = document.querySelector('#phone');
let resultFour = document.querySelector('#result4');







    if (inputOne.value.length === 0) {
        resultOne.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> name required'
        inputOne.style.borderColor = "red"
        resultOne.style.color = "red"
    } else if (inputOne.value.length > 15) {
        resultOne.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> 30 characters is the maximum'
        inputOne.style.borderColor = "red"
        resultOne.style.color = "red"
    } else if (regexx.test(inputOne.value) === false) {
        resultOne.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> only characters are autorized'
        inputOne.style.borderColor = "red"
        resultOne.style.color = "red"
    } else {
        resultOne.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        arr.push(true);
       

    }







    if (lastname.value.length === 0) {

        resultTwo.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> last name required'
        lastname.style.borderColor = "red"
        resultTwo.style.color = "red"

    } else if (lastname.value.length > 15) {

        resultTwo.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> 30 characters is the maximum'
        lastname.style.borderColor = "red"
        resultTwo.style.color = "red"


    } else if (regexx.test(lastname.value) === false) {

        resultTwo.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> only letters are required'
        lastname.style.borderColor = "red"
        resultTwo.style.color = "red"


    } else {
        resultTwo.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        // document.getElementById("result2").innerHTML = " ";
        arr.push(true);
    }















    if (emailAdress.value.length === 0) {

        resultThree.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> email is required'
        emailAdress.style.borderColor = "red"
        resultThree.style.color = "red"

    } else if (rgerr.test(emailAdress.value) === false) {
        resultThree.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> this is not a valid email'
        emailAdress.style.borderColor = "red"
        resultThree.style.color = "red"

    } else {
        resultThree.innerHTML = '<i class="fa-solid fa-circle-check"></i>'

        // document.getElementById("result3").innerHTML = " ";
        arr.push(true);
    }







    if (phoneNum.value.length === 0) {
        resultFour.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> phone number is required'
        phoneNum.style.borderColor = "red"
        resultFour.style.color = "red"

    } else if (rger.test(phoneNum.value) === false) {

        resultFour.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> this phone number is unvalid'
        phoneNum.style.borderColor = "red"
        resultFour.style.color = "red"
    } else {
        resultFour.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        // document.getElementById("result4").innerHTML = " ";
        arr.push(true);

    }










    let ginre = document.getElementsByName('ginre');
    let resultSix = document.getElementById('result7');



    if (ginre[0].checked === false && ginre[1].checked == false) {

        resultSix.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> choose your gender'
        // phoneNum.style.borderColor = "red"
        resultSix.style.color = "red"

        // document.getElementById("result7").innerHTML = "choose ergerregre"


    } else {
        resultSix.innerHTML = '<i class="fa-solid fa-circle-check"></i> Vous êtes prêt à partir'
        resultSix.style.color = "green"
        arr.push(true);
    }







    var a = document.getElementsByName('chk');
    var newvar = 0;
    var count;
    let resultFive = document.getElementById('result5');
    for (count = 0; count < a.length; count++) {
        if (a[count].checked == true) {
            console.log('ghfhjjhhghhhhhhhh');
            newvar = newvar + 1;
            // break
        }
    }
    if (newvar > 1) {
        resultFive.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> choisissez seulement 3 clubs'
        resultFive.style.color = "red"
        return false;
    }
    else if (newvar == 0) {
        resultFive.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> choose an option'
        resultFive.style.color = "red"
        // return false;

    }
    else {
        resultFive.innerHTML = '<i class="fa-solid fa-circle-check"></i> Vous êtes prêt à partir'
        resultFive.style.color = "green"
        arr.push(true);
    }











    let resulteight = document.getElementById("result8");

    if(classes.selectedOptions.length === 0){
        resulteight.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> choose an option'
        resulteight.style.color = "red"
        
        
    } else if(classes.selectedOptions.length > 3){
        resulteight.innerHTML= '<i class="fa-solid fa-circle-exclamation"></i> maximum is 3'
        resulteight.style.color = "red"

    }else {
        resulteight.innerHTML= '<i class="fa-solid fa-circle-check"></i> you ready to go'
        resulteight.style.color = "green"
        // resultClub.innerHTML=" " ;
        arr.push(true);
    }






















    if (arr.length === 7) {
        let form = document.getElementById("form");
        form.submit();

    }

}




























































































































