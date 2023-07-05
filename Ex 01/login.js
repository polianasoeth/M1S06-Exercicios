import { usuarios } from "./usuarios.js"

document.getElementById("login-buton").addEventListener("click", clicarNoBotao)


function fazerLogin() {
    document.querySelector('button').onclick = () => {
    const email = document.getElementById('campo-email').value
    const senha = document.getElementById('campo-senha').value
    

    document.getElementById('campo-email').classList.remove("input-error")
    document.getElementById('error-email').hidden = true

    document.getElementById('campo-senha').classList.remove("input-error")
    document.getElementById('error-senha').hidden = true


    if (email === "") {
        document.getElementById('campo-email').classList.add('input-error')
        document.getElementById('error-email').hidden = false
        document.getElementById('error-email').innerText = "Digite um email válido"


    } else if (senha.length < 9) {
        document.getElementById('campo-senha').classList.add('input-error')
        document.getElementById('error-senha').hidden = false
        document.getElementById('error-senha').innerText = "A senha deve no minimo 8 caracteres"
    }

  
}

}

