function button1Clicked() {
    document.querySelector('#first-button .first-button').style.display = 'none';
    document.querySelector('#second-button').style.display = 'block';
}

 

function myFunction2 () {
    var input = document.querySelector('#second-button input');
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.querySelector('#second-button input').click();
        document.querySelector('#second-button').style.display = 'none'; 
        document.querySelector('#third-button').style.display = 'block'; 
        setTimeout(
            function(){
                document.querySelector('#third-button1').style.display = 'none'; 
                document.querySelector('#third-button2').style.display = 'block';  
            },8000
        )
    }
    });    
}

function myFunction3() {
    document.querySelector('#third-button').style.display = 'none'; 
    document.querySelector('#snow').style.backgroundImage ="url('./asset/heart.png'), url('./asset/heart1.png'), url('./asset/heart2.png')";
    document.querySelector("body").style.background = 'linear-gradient(to left,orange,#8BEB88)'
    document.querySelector("#fourth-button").style.display = 'block';
}






