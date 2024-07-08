//regole
//non mettere 0
//non mettere sopra nmax

let t1=600, t2=600, tflag=0;
let keysPressed=0;//potrebbe essere inutile
let input=0;
let readyInput=0;
let inputZeroFlag=0;
let n1=1, n2=1;
let turn=1;
const nmax=1000;
const numberLog=document.querySelector(".numberLog");
let nvect = [];
let endflag=0;

let show=Math.floor(1+Math.random()*8);
console.log("show ", show);
nvect.push(show);

document.getElementById("timer1").innerText=t1;
document.getElementById("timer2").innerText=t2;


// setTimeout(function(){
//     console.log("timeout finished");
//     window.location.reload();
// },4000);

const countdown=setInterval(function(){
    if(tflag==1){
        
        t1--;
        document.getElementById("timer1").innerText=t1;
        if(t1==0){
            // clearInterval(countdown);
            // alert("Tempo scaduto! Player 2 vince!");
            // setTimeout(function(){
            //     window.location.reload();
            // }, 0);
            showAlert("Tempo scaduto! Player 2 vince!");
            document.querySelector(".game-alert-message").style.backgroundColor="rgb(255, 136, 0)";
            
        }
        // console.log("t1=",t1);
    }
    else if(tflag==2){
        t2--;
        document.getElementById("timer2").innerText=t2;
        if(t2==0){
            clearInterval(countdown);
            // alert("Tempo scaduto! Player 1 vince!");
            // setTimeout(function(){
            //     window.location.reload();
            // }, 0);
            showAlert("Tempo scaduto! Player 1 vince!");
            document.querySelector(".game-alert-message").style.backgroundColor="rgb(0, 191, 255)";
            
        }
        // console.log("t2=",t2);
    }
}, 100);

document.addEventListener('keydown', function(event) {
    //console.log("key pressed")
    keysPressed++;
    if(endflag==1){
        window.location.reload();
    }
    switch(event.code){
        case "Digit1":
            // console.log("one");
            input=input*10+1;
            inputZeroFlag=0;
            break;
        case "Digit2":
            //console.log("two");
            input=input*10+2;
            inputZeroFlag=0;
            break;
        case "Digit3":
            //console.log("three");
            input=input*10+3;
            inputZeroFlag=0;
            break;
        case "Digit4":
            //console.log("four");
            input=input*10+4;
            inputZeroFlag=0;
            break;
        case "Digit5":
            //console.log("five");
            input=input*10+5;
            inputZeroFlag=0;
            break;
        case "Digit6":
            //console.log("six");
            input=input*10+6;
            inputZeroFlag=0;
            break;
        case "Digit7":
            //console.log("seven");
            input=input*10+7;
            inputZeroFlag=0;
            break;
        case "Digit8":
            //console.log("eight");
            input=input*10+8;
            inputZeroFlag=0;
            break;
        case "Digit9":
            //console.log("nine");
            input=input*10+9;
            inputZeroFlag=0;
            break;
        case "Digit0":
            //console.log("zero");
            input=input*10+0;
            inputZeroFlag=0;
            break;
        case "Backspace":
            //console.log("backspace");
            keysPressed=keysPressed-2;
            if(keysPressed<=0){keysPressed=0;}
            input=Math.floor(input/10);
            inputZeroFlag=0;
            break;
        case "Enter":
            
            if(tflag==0){
                printNewNumber(show);
                tflag=1;
                console.log("game started");
                changeplayer21();
                input=0;
                inputZeroFlag=1;
            }else{
                keysPressed=0;
                readyInput=input;
                console.log("input=",input);
                check(readyInput);
                printNewNumber(readyInput);
                input=0;
                inputZeroFlag=1;
                turn++;
                if(tflag==1){
                    tflag=2;
                    nvect.push(n1);
                    changeplayer12();
                    console.log("turno", turn, "tocca a p2");
                }
                else if(tflag==2) {
                    tflag=1;
                    nvect.push(n2);
                    changeplayer21();
                    console.log("turno", turn, "tocca a p1");
                }
            }
            break;
        case "Space":
            if(tflag!=0){
                keysPressed=0;
                readyInput=input;
                console.log("input=",input);
                check(readyInput);
                printNewNumber(readyInput);
                input=0;
                inputZeroFlag=1;
                turn++;
                if(tflag==1){
                    tflag=2;
                    nvect.push(n1);
                    changeplayer12();
                    console.log("turno", turn, "tocca a p2");
                }
                else if(tflag==2) {
                    tflag=1;
                    nvect.push(n2);
                    changeplayer21();
                    console.log("turno", turn, "tocca a p1");
                }
            }else{
                inputZeroFlag=1;
            }
            break;
        default:
            if(input==0){
                inputZeroFlag=1;
            }
            keysPressed--;
            break;
    }
    //console.log(keysPressed);
    console.log("input ",input);
    if(inputZeroFlag==0){
        document.getElementById("inputNumber").innerText=input;
    }else{//inputZeroFlag==1
        document.getElementById("inputNumber").innerText="";
    }
});

function check(inp){

    if(tflag==1){
        if(turn==1){
            
            if(inp==0 || inputZeroFlag==1){
                // alert("Player 1 non puoi inserire 0! Player 2 vince!");
                // setTimeout(function(){
                //     window.location.reload();
                // }, 0);
                showAlert("Player 1 non puoi inserire 0! Player 2 vince!");
                document.querySelector(".game-alert-message").style.backgroundColor="rgb(255, 136, 0)";
            }else if(inp==show){
                // alert("Player 1 non puoi ripetere lo stesso numero! Player 2 vince!");
                // setTimeout(function(){
                //     window.location.reload();
                // }, 0);
                showAlert("Player 1 non puoi ripetere lo stesso numero! Player 2 vince!");
                document.querySelector(".game-alert-message").style.backgroundColor="rgb(255, 136, 0)";
            }else{
                if(inp%show==0){
                    n1=inp/show;
                    console.log("n1=",n1);
                    return; 
                }else{
                    console.log("P1 hai sbagliato")
                    // alert("Player 1 hai sbagliato! Player 2 vince!");
                    // setTimeout(function(){
                    //     window.location.reload();
                    // }, 0);
                    showAlert("Player 1 hai sbagliato! Player 2 vince!");
                    document.querySelector(".game-alert-message").style.backgroundColor="rgb(255, 136, 0)";
                    return;
                }
            }
        }else{
            if(inp==0 || inputZeroFlag==1){
                // alert("Player 2 non puoi mettere 0! Player 1 vince!");
                // setTimeout(function(){
                //     window.location.reload();
                // }, 0);
                showAlert("Player 1 non puoi mettere 0! Player 2 vince!");
                document.querySelector(".game-alert-message").style.backgroundColor="rgb(255, 136, 0)";
            }else if(inp==show){
                // alert("Player 1 non puoi ripetere lo stesso numero! Player 2 vince!");
                // setTimeout(function(){
                //     window.location.reload();
                // }, 0);
                showAlert("Player 1 non puoi ripetere lo stesso numero! Player 2 vince!");
                document.querySelector(".game-alert-message").style.backgroundColor="rgb(255, 136, 0)";
            }else{
                if(inp%n2==0){
                    n1=inp/n2;
                    console.log("n1=",n1);
                    return;
                }else{
                    console.log("P1 hai sbagliato")
                    // alert("Player 1 hai sbagliato! Player 2 vince!");
                    // setTimeout(function(){
                    //     window.location.reload();
                    // }, 0);
                    showAlert("Player 1 hai sbagliato! Player 2 vince!");
                    document.querySelector(".game-alert-message").style.backgroundColor="rgb(255, 136, 0)";
                    return;
                }
            }
        }
        
    }
    if(tflag==2){
        if(inp==0 || inputZeroFlag==1){
            // alert("Player 2 non puoi mettere 0! Player 1 vince!");
            // setTimeout(function(){
            //     window.location.reload();
            // }, 0);
            showAlert("Player 2 non puoi mettere 0! Player 1 vince!");
            document.querySelector(".game-alert-message").style.backgroundColor="rgb(0, 191, 255)";
        }else if(inp==show){
            // alert("Player 2 non puoi ripetere lo stesso numero! Player 1 vince!");
            // setTimeout(function(){
            //     window.location.reload();
            // }, 0);
            showAlert("Player 2 non puoi ripetere lo stesso numero! Player 1 vince!");
            document.querySelector(".game-alert-message").style.backgroundColor="rgb(0, 191, 255)";
        }else{
            if(inp%n1==0){
                n2=inp/n1;
                console.log("n2=",n2);
                return;
            }else{
                console.log("P2 hai sbagliato");
                // alert("Player 2 hai sbagliato! Player 1 vince!");
                // setTimeout(function(){
                //     window.location.reload();
                // }, 0);
                showAlert("Player 2 hai sbagliato! Player 1 vince!");
                document.querySelector(".game-alert-message").style.backgroundColor="rgb(0, 191, 255)";
                return;
            }
        }
    }
    
}

function printNewNumber(n){

    const number=document.createElement("span");
    number.classList.add("number");
    if(tflag==1){
        number.classList.add("t1on");
    }
    if(tflag==2){
        number.classList.add("t2on");
    }if(tflag==0){
        number.classList.add("t0on");
    }
    number.innerText=n;
    show=n;
    numberLog.appendChild(number);
    return;
}

function changeplayer12(){
    document.querySelector(".t2Area").classList.remove("t2off");
    document.querySelector(".t2Area").classList.add("t2on");
    document.querySelector(".t1Area").classList.remove("t1on");
    document.querySelector(".t1Area").classList.add("t1off");
    document.getElementById("inputNumber").classList.remove("input1");
    document.getElementById("inputNumber").classList.add("input2");
    console.log(nvect);
}
function changeplayer21(){
    document.querySelector(".t1Area").classList.remove("t1off");
    document.querySelector(".t1Area").classList.add("t1on");
    document.querySelector(".t2Area").classList.remove("t2on");
    document.querySelector(".t2Area").classList.add("t2off");
    document.getElementById("inputNumber").classList.remove("input2");
    document.getElementById("inputNumber").classList.add("input1");
    console.log(nvect);
}

function showAlert(message){
    endflag=1;
    const gameArea = document.querySelector('.timerArea');
    const alertMessage = `
    <div class="game-alert">
        <div class="game-alert-message">${message}</div>       
    </div>
    `;
    gameArea.innerHTML = gameArea.innerHTML + alertMessage;
}
