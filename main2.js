document.getElementById("btn").onclick = function (e) {
    e.preventDefault();
 

// ====================== declaration ==============================



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



let ginre = document.getElementsByName('ginre');
let resultSix = document.getElementById('result7');











// ====================== name ==============================







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



// ====================== last name ==============================




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
        arr.push(true);
    }






// ======================  email ==============================










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

        arr.push(true);
    }



// ====================== phone num  ==============================




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
        arr.push(true);

    }




// ====================== male female ==============================









    if (ginre[0].checked === false && ginre[1].checked == false) {

        resultSix.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> choose your gender'
        resultSix.style.color = "red"
    } else {
        resultSix.innerHTML = '<i class="fa-solid fa-circle-check"></i> Vous êtes prêt à partir'
        resultSix.style.color = "green"
        arr.push(true);
    }



// ==========%§%===========  dwb101 it let me select more than one so i did this one at the bottom prevent that ==============================




    var a = document.getElementsByName('chk');
    var newvar = 0;
    var count;
    let resultFive = document.getElementById('result5');
    for (count = 0; count < a.length; count++) {
        if (a[count].checked == true) {
            console.log('ghfhjjhhghhhhhhhh');
            newvar = newvar + 1;
          
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
    }
    else {
        resultFive.innerHTML = '<i class="fa-solid fa-circle-check"></i> you ready to go'
        resultFive.style.color = "green"
        arr.push(true);
    }








// ======================  musique clubs ==============================



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
 
        arr.push(true);
    }

    if (arr.length === 7) {
        let form = document.getElementById("form");
        form.submit();

    }

}
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================

// ==========%§%===========  dwb101 this is the wone ==============================


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