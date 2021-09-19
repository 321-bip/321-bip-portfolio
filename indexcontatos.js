
function mensagemUsuario(){
   
    swal({
        title: document.getElementById("capitura").elements[1].value ,
        text: "Email enviado com suseso",
        icon: "success",
      });

      redireciona()
}
     document.getElementById("area-enviar").addEventListener("click",mensagemUsuario)
            //  setinterval(mensagemUsuario(),5000)

function redireciona(){

    let link = "https://321-bip.github.io/321-bip-portfolio/indexcontatos"
    let input4 = document.getElementById("capitura").elements[4]
        input4.setAttribute("value",link)
}   
    //setTimeout(redireciona,3000) 
//redireciona()

console.log(document.getElementById("capitura").elements[4])
