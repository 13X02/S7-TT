
function cd(cdate, dest) {
    var x = setInterval(function () {

        var now = new Date().getTime();
        var distance = cdate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        dest.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            dest.innerHTML = "EXAM OVER";
        }
    }, 1000);
}

// Remove S5 subjects and add S7 subjects

// S7 Artificial Intelligence
var cdai = new Date("Jan 5, 2024 9:30:00").getTime();
var ai = document.querySelector('.ai');
cd(cdai, ai);

// S7 Web Programming
var cdweb = new Date("Jan 9, 2024 9:30:00").getTime();
var web = document.querySelector('.web');
cd(cdweb, web);

// S7 Renewable Energy System
var cdres = new Date("Jan 12, 2024 9:30:00").getTime();
var res = document.querySelector('.res');
cd(cdres, res);

// S7 Information Systems Engineering
var cdis = new Date("Jan 17, 2024 9:30:00").getTime();
var ise = document.querySelector('.ise');
cd(cdis, ise);

// S7 Industrial Safety Engineering
var cdisie = new Date("Jan 17, 2024 9:30:00").getTime(); // Assuming the same date as ISE
var isie = document.querySelector('.isie'); // You need to have a corresponding HTML element with class 'isie'
cd(cdisie, isie);
