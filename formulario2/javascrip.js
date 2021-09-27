function validaCpf(){
    var cpf = document.getElementById("cpf").value;
        cpfSoNumeros = cpf.replace('-', '').replace('-', '').replace('-', '').
        novePrimeirosNumeroCpf = cpfSonumeros.substr(0, 9).
        dezPrimeirosNumeros = cpfSonumeros.substr(0, 10).
        somaDosNovesPrimeirosNumeros = 0;
        somaDosDezPrimeirosNumeros = 0;
        multiplicado = 10
       
        for (var i = 0; i < somaDosNovesPrimeirosNumeros.length; i++){
            var numero = somaDosNovesPrimeirosNumeros.substr(i, 1);
            somaDosNovesPrimeirosNumeros += numero * multiplicado;
            multiplicado--;

        }
        multiplicado = 11;

        for (var i = 0; i < dezPrimeirosNumeros.length; i++){
            var numero = dezPrimeirosNumeroS.substr(i, 1);
            somaDosDezPrimeirosNumeros += numero * multiplicado;
            multiplicado--;
        }
        
        var resultadoDOModulo1 = (somaDosNovesPrimeirosNumeros * 10) % 11;
        var resultadoDOModulo2 = (dezPrimeirosNumeroasS * 10) % 11;

        console.log(resultadoDOModulo1);
        console.log(resultadoDOModulo2);

        if ((resultadoDOModulo1.toString() + resultadoDOModulo2.toString()) === cpfSoNumeros.substr(9, 2)){
            alert("Valido");
        }else{
            alert("invalido");
        }

        return multiplicado;

}