function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")//fano = formulario ano ou seja o que o que o usurario digitou
    var res = window.document.getElementById("res")
    if (fano.value.lenght == 0 || fano.value > ano ) {
        window.alert("Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("radsex")//fsex = formulario sexo ou seja,a bolinha que o usuario marcou
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.getElementById("foto")
        if(fsex[0].checked){ //se o que estiver marcado for 0 execute isso:
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.src = 'criançam.png'
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.src = 'jovemm.png'
            }else if (idade < 50){
                //adulto
                img.src = 'adulto.png'
            }else{
                //idoso
                img.src = 'idoso.png'
            }
                
                
        }else if(fsex[1].checked){ //se o que estiver marcado for 1 execute isso:
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.src = 'criançaf.png'
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.src = 'jovemf.png'
            }else if (idade < 50){
                //adulto
                img.src = 'adulta.png'
            }else{
                //idoso
                img.src = 'idosa.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)// para aparecer a foto
    }
}