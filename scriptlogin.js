
/*Dupla: João Pedro Vidal dos Santos & Joicy Mendes Rodrigues
 Disciplina: Introdução ao Desenvolvimento Web
 Professor: Paulo Ricardo Noé */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("login").addEventListener('submit', function(event) {
        event.preventDefault();

        let usuario =  document.getElementById("usuario").value;
        let senha = document.getElementById("senha").value;

        if (usuario === 'admin' && senha === 'admin'){
            window.location.href = 'index2.html';
        } else {
            setError(0);
            setError(1);
        }
    });

    let campos = document.querySelectorAll(".texto");
    let spans = document.querySelectorAll(".span-required");

    function setError(index) {
        campos[index].style.border = '2px solid red';
        spans[0].style.display = 'block';
    }

    function removeError(index) {
        campos[index].style.border = '';
        spans[0].style.display = 'none';
    }

    window.usuarioValidate = function() {
        if(campos[0].value !== 'admin') {
            setError(0);
        } else {
            removeError(0);
        }
    }

    window.senhaValidate = function() {
        if(campos[1].value !== 'admin') {
            setError(1);
        } else {
            removeError(1);
        }
    }
});

    function desabilitar(){
        document.querySelectorAll(".required").disabled = true;
    }



    /*Dupla: João Pedro Vidal dos Santos & Joicy Mendes Rodrigues
 Disciplina: Introdução ao Desenvolvimento Web
 Professor: Paulo Ricardo Noé */