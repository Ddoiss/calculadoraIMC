// let a = 56
// let b = 920
// let c = 82.50
// let d = 13.25
// let videogame = 4000
// let dinheiro = 5000
// let  altura = prompt("digite sua altura")


// //if(dinheiro >= videogame){
//    // alert(" Eu vou comprar o ps5")}
// //else {
// //    alert(" Eu não vou comprar o ps5")}


// //alert (a >= d &&  c < d)
// //alert (a > d)
// //alert (b == d)
// //alert ( a == a)
// //alert ( a < d)
// //alert (c != b ||  a < d)

// if (altura > 1.60) {
//     alert("pode entrar")

// } 
// else {
//     alert ("não entrar")

// }
// if (altura > 1.60) {
//     alert("pode entrar")

// } 
// else {
//     alert ("não entrar")

// }

// let peso = prompt ("seu peso")
// let idade =  prompt ("digite sua idade")

// if (peso <= 140 && idade > 18) {
//     alert("Posso doar")

// } else {
//    alert ("Não posso doar")

// }

// let n1 = Number(prompt (primeira nota))
// let n2 = Number(prompt (segunda nota))
// let n3 = Number(prompt (terceira nota))

// if (((n1+n2+n3+)/3) >= 7) {
//     alert ("Você foi aprovado")

// }
//  else {
//     alert ("você não foi aprovado") 
// }


// let videogame = 4000
// let dinheiro = 200
// let  altura = prompt("digite sua altura")


// if(dinheiro >= videogame){
//    alert(" Eu vou comprar o ps5")
// }
// else {
//    alert(" Eu não vou comprar o ps5")
// }

//    else if("vou pedier um emppréstimo")


// alert("*** DOAÇÃO CRIANÇA ESPERANÇA ***")

// let codigo = prompt ("digite o codigo")


// if(codigo == 1) {
//     alert("você doou R$ 10,00")
// } 
// else if( codigo == 2) {
//     alert("você doou R$ 5,00")
// }
// else if( codigo == 3) {
//     alert("você doou R$ 25,00")
// }
// else if( codigo == 4) {
//     alert("você doou R$ 50,00")
// }
// else if( codigo == 5) {
//     let valor =  prompt("valor que deseja doar")
//     alert(" você doou R$ "+valor+"reais")
// }
// else{
//     alert ("Código inválido")

// }

// let calcular = document.querySelector('calcular')

function imc() {
    let resultado = document.querySelector('.text')
    let nome = document.querySelector('#nome').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value


    resultado.style.color="black"

    
    if (nome.length === 0) {
        resultado.innerHTML = 'Você precisa preencher o campo nome'
        return ;
    }

    if (altura.length === 0) {
        resultado.innerHTML = 'Você precisa preencher o campo altura'
        return ;
    }

    if (peso.length === 0) {
        resultado.innerHTML = 'Você precisa preencher o campo peso'
        return ;
    }

    

        let valorIMC = (peso / (altura * altura)).toFixed(1)
        let tipoIMC = ""

        if (valorIMC < 18.6) {
            tipoIMC = 'abaixo do peso'
        } else if (valorIMC > 18.7 && valorIMC<25) {
            tipoIMC = 'peso ideal'
        } else if (valorIMC >25.1 && valorIMC < 30) {
            tipoIMC = 'um pouco acima do peso'
        } else if (valorIMC >30.1 && valorIMC < 35) {
            tipoIMC = 'obesidade grau 1'
        } else if (valorIMC >35.1 && valorIMC < 40) {
            tipoIMC = ' obesidade grau 2'
        } else {
            tipoIMC = 'obesidade grau 3'
        }
        resultado.style.color="black"
        resultado.innerHTML = `${nome} seu IMC é${valorIMC} e você está ${tipoIMC}`
    
}
}
    











