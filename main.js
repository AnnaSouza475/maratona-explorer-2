
//criar variavel
var sol = document.querySelector("#dark");

sol.addEventListener("click", function () {
 //. document = procurar no html; .documentElement.=buscar um elemento; .style= elemento css
 //.getPropertyValue = pegar valor da propriedade (get - pegar) / (set- atribui) 
var elementoDark = document.documentElement.style.getPropertyValue('--background-color')
//se for dark 
if(elementoDark =='#1F000B'){
    document.documentElement.style.setProperty('--dark-color-1','#1F000B')
    document.documentElement.style.setProperty('--dark-color','#1F000B')
    document.documentElement.style.setProperty('--background-color','#FFF0F6')
}else{
    document.documentElement.style.setProperty('--dark-color-1','#f080a7')
    document.documentElement.style.setProperty('--dark-color','#FFF0F6')
    document.documentElement.style.setProperty('--background-color','#1F000B')   
}



});