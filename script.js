const ONN=()=>{
    document.getElementById("bulbon").style.display="flex"
    document.getElementById("bulbof").style.display="none"
    document.getElementById("text").innerText="Touch The button to turn ON the light"
    document.getElementById("mn").style.backgroundColor="black"
    document.getElementById("text").style.color="white"
    document.getElementById("bton").style.display="none"
    document.getElementById("btof").style.display="flex"




}
const OFF=()=>{
    document.getElementById("bulbon").style.display="none"
    document.getElementById("bulbof").style.display="flex"
    document.getElementById("mn").style.backgroundColor="white"
    document.getElementById("text").style.color="black"
    document.getElementById("text").innerText="Touch The button to turn OFF the light"
    document.getElementById("bton").style.display="flex"
    document.getElementById("btof").style.display="none"





}