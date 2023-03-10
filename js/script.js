let dias = document.getElementById('dia')
let mes = document.getElementById('mes')
let ano = document.getElementById('ano')
let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

for(let i=0; i<=31; i++){
dias.innerHTML += "<option>" + i + "<option>"

}

//for(let i=0; i<=12; i++){
  //  mes.innerHTML += "<option>" + i + "<option>"
    
 //   }

 for(let i=0; i < meses.length; i++){
      mes.innerHTML += "<option>" + meses[i] + "<option>"
      
   }

    for(let i=2023; i>= 1950; i--){
        ano.innerHTML += "<option>" + i + "<option>"
        
        }