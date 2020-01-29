

//////////////////Doi anh khi click vao anh
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/14-logo-hoa-sen-dep.png') {
        myImage.setAttribute('src','images/fewa-lake-and-pokhara.jpg');
    }
    else {
        myImage.setAttribute('src','images/14-logo-hoa-sen-dep.png');
    }
}


//////////////////Tao thong bao ca nhan cho moi lan truy cap
let myHead = document.querySelector('h1');

function setUserName(){

    let userName = prompt('Enter your name:');
    if (!userName || userName === null){
        setUserName();
    }
    else {
        localStorage.setItem('userName',userName);
        myHead.textContent = 'LYHb blog welcome you, ' + userName + '!';
    }
    
}

if (!localStorage.getItem('userName')){
    setUserName();
}
else {
    let userName = localStorage.getItem('userName');
    myHead.textContent = 'LYHb blog welcome you back, ' + userName + '!';
}

let myButton = document.querySelector('button');
myButton.onclick = function(){
    setUserName();
}

