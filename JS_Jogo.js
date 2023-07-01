
let PONTOS = 0;

// document.bt1.classname = "btsEdit"
// document.bt2.classname = "btsEdit"
// document.bt3.classname = "btsEdit"
// document.bt4.classname = "btsEdit"

let EmojisTitulo = document.querySelector('#EmojisTitulo');
let final = document.querySelector('#tituloFinal');

let TEmoji = document.createElement("H1");
let tituloFinal = document.createElement("H1");
let divBts = document.querySelector('#divBts');
let nomeInP = document.createElement("input");
let btEnvi = document.createElement("button");

var ranke = JSON.parse(localStorage.getItem('rank')) || [];

var Perguntas = [
    {
        emojis: "😱🔪",
        r1: "Pânico",
        r2: "O Rei Leão",
        r3: "O Planeta dos Macacos",
        r4: "Quatro Casamentos e Um Funeral",
        resp: "Pânico"
    },

    {
        emojis: "👊💥🐼",
        r1: "Homem-Aranha",
        r2: "Up – Altas Aventuras",
        r3: "O Diabo Veste Prada",
        r4: "Kung Fu Panda",
        resp: "Kung Fu Panda"
    },
    
    {
        emojis: "🏠🎈🎈🎈👴👦",
        r1: "Homem-Aranha",
        r2: "Os Caça-Fantasmas",
        r3: "O Planeta dos Macacos",
        r4: "Up – Altas Aventuras",
        resp: "Up – Altas Aventuras"
    },
    
    {
        emojis: "👨🕷️",
        r1: "Titanic",
        r2: "Up – Altas Aventuras",
        r3: "Homem-Aranha",
        r4: "Kung Fu Panda",
        resp: "Homem-Aranha"
    },
    
    {
        emojis: "🔎👻",
        r1: "O Silêncio dos Inocentes",
        r2: "O Fantasma da Ópera",
        r3: "Os Caça-Fantasmas",
        r4: "Cidade dos Anjos",
        resp: "Os Caça-Fantasmas"
    },
    
    {
        emojis: "👩‍🦰🥀👹",
        r1: "A Bela e a Fera",
        r2: "Cidade dos Anjos",
        r3: "O Discurso do Rei",
        r4: "O Advogado do Diabo",
        resp: "A Bela e a Fera"
    }];

    sortearPergunta();

function sortearPergunta() {
    
    if(Perguntas.length == 0){
        EmojisTitulo.removeChild(TEmoji);
        tituloFinal.innerText = ("Você acertou: "+PONTOS+"\n Digite seu nome: ");
        btEnvi.innerText = ("Enviar");
        final.appendChild(tituloFinal);
        divBts.appendChild(nomeInP);
        divBts.appendChild(btEnvi);

        btEnvi.addEventListener('click', function(){
            var pessoa = [nomeInP.value, PONTOS];
            ranke.push(pessoa);
            localStorage.setItem('rank', JSON.stringify(ranke));
            window.location.href = "/index.html";
        });
    }
    else{
        let P = Math.floor(Math.random() * Perguntas.length);

        var arrayP = Perguntas[P];
    
        apresentar(arrayP.emojis, arrayP.r1, arrayP.r2, arrayP.r3, arrayP.r4, arrayP.resp);
    
        Perguntas.splice(P, 1);
    }

}

function apresentar(emojis, r1, r2, r3, r4, resp) {

    let bt1 = document.createElement("button");
    let bt2 = document.createElement("button");
    let bt3 = document.createElement("button");
    let bt4 = document.createElement("button");

    console.log(bt1);

    TEmoji.innerText = emojis;
    bt1.innerText = r1;
    bt2.innerText = r2;
    bt3.innerText = r3;
    bt4.innerText = r4;

    EmojisTitulo.appendChild(TEmoji);

    divBts.appendChild(bt1);
    divBts.appendChild(bt2);

    divBts.appendChild(bt3);
    divBts.appendChild(bt4);

    bt1.addEventListener('click', function () {
        if (r1 === resp) {
            PONTOS++;
            divBts.removeChild(bt1);
            divBts.removeChild(bt2);
            divBts.removeChild(bt3);
            divBts.removeChild(bt4);
            sortearPergunta();
        }else{
            divBts.removeChild(bt1);
            divBts.removeChild(bt2);
            divBts.removeChild(bt3);
            divBts.removeChild(bt4);
            sortearPergunta();
        }
    })
    bt2.addEventListener('click', function () {
        if (r2 === resp) {
            PONTOS++;
            divBts.removeChild(bt1);
            divBts.removeChild(bt2);
            divBts.removeChild(bt3);
            divBts.removeChild(bt4);
            sortearPergunta();
        }else{
            divBts.removeChild(bt1);
            divBts.removeChild(bt2);
            divBts.removeChild(bt3);
            divBts.removeChild(bt4);
            sortearPergunta();
        }
    })
    bt3.addEventListener('click', function () {
        if (r3 === resp) {
            PONTOS++;
            divBts.removeChild(bt1);
            divBts.removeChild(bt2);
            divBts.removeChild(bt3);
            divBts.removeChild(bt4);
            sortearPergunta();
        }else{
            divBts.removeChild(bt1);
            divBts.removeChild(bt2);
            divBts.removeChild(bt3);
            divBts.removeChild(bt4);
            sortearPergunta();
        }
    })
    bt4.addEventListener('click', function () {
        if (r4 === resp) {
            PONTOS++;
            divBts.removeChild(bt1);
            divBts.removeChild(bt2);
            divBts.removeChild(bt3);
            divBts.removeChild(bt4);
            sortearPergunta();
        }else{
            divBts.removeChild(bt1);
            divBts.removeChild(bt2);
            divBts.removeChild(bt3);
            divBts.removeChild(bt4);
            sortearPergunta();
        }
    });

    console.log(PONTOS);
}



