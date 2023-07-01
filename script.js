let rank = JSON.parse(localStorage.getItem('rank')) || [];
let rankPessoa = document.getElementById("RankePessoas");

rank.sort(function(a,b){
    return a[1] - b[1];
});
rank.reverse();

let cont = 0;
rank.forEach(addRank);

function addRank(arr) {
    cont++;
  let nomeLi = document.createElement("li");
  nomeLi.innerText = (cont+"º "+arr[0]+": "+arr[1]+" pontos") ;
  rankPessoa.appendChild(nomeLi);
}
