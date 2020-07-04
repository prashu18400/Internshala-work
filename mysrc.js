var hitlike_3 = 0;
var hitlike = 0;
var hitlike_2 = 0;
var hitlike_4 = 0;
function myfunction() {
    var x = document.getElementById('follow').innerHTML;
    var str = x.toString().trim();
    if (str.length == 8) {
        document.getElementById('follow').innerHTML = 'Following..'
    }
    else {
        document.getElementById('follow').innerHTML = 'Follow +'
    }
}
function mylikes() {
    var x = document.getElementById('likes').innerHTML;
    if (hitlike == 0) {
        document.getElementById('likes').innerHTML = parseInt(x) + 1;
        document.getElementById('btnlike').setAttribute('class', 'clr');
        hitlike = 1;
    }
    else if (hitlike == 1) {
        document.getElementById('likes').innerHTML = parseInt(x) - 1;
        document.getElementById('btnlike').setAttribute('class', 'nclr');
        hitlike = 0;
    }
}
function mylikes_2() {
    var x = document.getElementById('likes_2').innerHTML;
    if (hitlike_2 == 0) {
        document.getElementById('likes_2').innerHTML = parseInt(x) + 1;
        document.getElementById('btnlike_2').setAttribute('class', 'clr');
        hitlike_2 = 1;
    }
    else if (hitlike_2 == 1) {
        document.getElementById('likes_2').innerHTML = parseInt(x) - 1;
        document.getElementById('btnlike_2').setAttribute('class', 'nclr');
        hitlike_2 = 0;
    }
}
function myfunction3() {
    var x = document.getElementById('likes_3').innerHTML;
    if (hitlike_3 == 0) {
        document.getElementById('likes_3').innerHTML = parseInt(x) + 1;
        document.getElementById('like3').setAttribute('class', 'clr1');
        hitlike_3 = 1;
    }
    else if (hitlike_3 == 1) {
        document.getElementById('likes_3').innerHTML = parseInt(x) - 1;
        document.getElementById('like3').setAttribute('class', 'nclr1');
        hitlike_3 = 0;
    }
}
function mylikes_4() {
    var x = document.getElementById('likes4').innerHTML;
    if (hitlike_4 == 0) {
        document.getElementById('likes4').innerHTML = parseInt(x) + 1;
        document.getElementById('btnlike_4').setAttribute('class', 'clr');
        hitlike_4 = 1;
    }
    else if (hitlike_4 == 1) {
        document.getElementById('likes4').innerHTML = parseInt(x) - 1;
        document.getElementById('btnlike_4').setAttribute('class', 'nclr');
        hitlike_4 = 0;
    }
}