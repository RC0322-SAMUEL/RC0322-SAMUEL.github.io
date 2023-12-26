/* Scripts for the toasts used on the index page*/
document.addEventListener("DOMContentLoaded", function(){
    var btn1 = document.getElementById("liveToastBtn1");
    var element1 = document.getElementById("liveToast1");

    var myToast = new bootstrap.Toast(element1, {
        autohide: false
    });

    btn1.addEventListener("click", function(){
        myToast.show();
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var btn2 = document.getElementById("liveToastBtn2");
    var element2 = document.getElementById("liveToast2");

    var myToast = new bootstrap.Toast(element2, {
        autohide: false
    });

    btn2.addEventListener("click", function(){
        myToast.show();
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var btn3 = document.getElementById("liveToastBtn3");
    var element3 = document.getElementById("liveToast3");

    var myToast = new bootstrap.Toast(element3, {
        autohide: false
    });

    btn3.addEventListener("click", function(){
        myToast.show();
    });
});