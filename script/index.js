
const buttons = document.querySelector(".buttons")
const items = buttons.querySelectorAll("span");
const img = document.querySelector("img");
const rep = document.querySelector(".rep");
const ecran = document.getElementById("ecran")
let ess = [];
let fail = 0;
let mots = ('salut').split("");


function rest(mo,contener){
    
    ess = [];
    fail = 0;
    let span; 
    contener.innerHTML = "";
    img.setAttribute("src","")
    items.forEach(e => {
        e.style.backgroundColor = "#494949"
    })
    mo.forEach(m => {
        span = document.createElement("span")
        span.innerHTML = "_";
        contener.appendChild(span);
    })
}

function click(e){
    if(fail <= 6 && !(ess.includes(e.innerHTML.toLowerCase())) ){
        ess.push(e.innerHTML.toLowerCase());
        console.log(ess)
        if(!mots.includes((e.innerHTML).toLowerCase())){
            fail++;
            upImage();
            
        }else{
            rep.querySelectorAll("span")[mots.indexOf((e.innerHTML).toLowerCase())].innerHTML = e.innerHTML.toLowerCase();
            
        }
        document.querySelector(".fle").innerHTML = ess
        if(fail > 6){
            mofigEcran("loose !!! click sur select pour relancer");
        }else if(check()){
            mofigEcran("Win !!! click sur select pour relancer");
        }
    }
}

function check(){
    let t = document.querySelector(".rep");
    let bool = true;
    t.querySelectorAll("span").forEach( s => {
        console.log(s)
        if(s.innerHTML == "_"){
            bool = false;
        }
    })
    return bool;
}

function upImage(){
    img.setAttribute("src",`assets/t${fail}.png`);
}

function mofigEcran(phrase){
    ecran.innerHTML = ""
    console.log("cc1")
    setTimeout(()=>{console.log("cc2")},2000)

    for (let index = 0; index < phrase.split("").length; index++) {
        setTimeout(()=>{
            console.log("cc3")
            ecran.innerHTML = ecran.innerHTML + phrase.split("")[index];
        },2150+(index*150))
    }

    phrase.split("").forEach(lettre => {
        
    })
}

items.forEach(e => {
    e.addEventListener("click", () => {
        click(e);
        e.style.backgroundColor = "black"
    })
})

document.getElementById("start").addEventListener("click", ()=>{
    mofigEcran("T'attend pas un jeu complet c'est juste un exo ;)");
})

document.getElementById("select").addEventListener("click", ()=>{
    mofigEcran("New game ...");
    rest(mots,rep);
})

document.getElementById("wel").addEventListener("click", ()=>{
    mofigEcran("Bienvenu dans le jeu Hangman");
    document.getElementById("welcome").style.left = "-100vw"
    rest(mots,rep);
})









