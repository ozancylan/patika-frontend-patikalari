let name1 = prompt("Lütfen İsminizi Giriniz")
let text1 = document.querySelector("#info")
function tarihSaat() {
    var date = new Date().toLocaleString();
    document.getElementById("date1").innerHTML = date;
        }
    setInterval(tarihSaat, 1000); 
    text1.innerHTML = `${name1} Hoşgeldin!
     <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın <strong>Javascript bölümü</strong> 1. Ödevindesin!`
