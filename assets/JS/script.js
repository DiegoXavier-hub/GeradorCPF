function GerarCPF() {
    let a1, a2, a3, a4, a5, a6, a7, a8, a9, d1, d2, cpfp;
    
    a1 = Math.floor(Math.random() * 10)
    a2 = Math.floor(Math.random() * 10) 
    a3 = Math.floor(Math.random() * 10) 
    a4 = Math.floor(Math.random() * 10) 
    a5 = Math.floor(Math.random() * 10) 
    a6 = Math.floor(Math.random() * 10) 
    a7 = Math.floor(Math.random() * 10) 
    a8 = Math.floor(Math.random() * 10) 
    a9 = Math.floor(Math.random() * 10) 
    
    let d1p = ((a1*10)+(a2*9)+(a3*8)+(a4*7)+(a5*6)+(a6*5)+(a7*4)+(a8*3)+(a9*2))
    
    d1p%11<2 ? d1 = 0 : d1 = 11 - (d1p%11)
    
    let d2p = ((a1*11)+(a2*10)+(a3*9)+(a4*8)+(a5*7)+(a6*6)+(a7*5)+(a8*4)+(a9*3)+(d1*2))
    
    d2p%11<2 ? d2 = 0 : d2 = 11 - (d2p%11)

    a1 = a1.toString()
    a2 = a2.toString() 
    a3 = a3.toString() 
    a4 = a4.toString() 
    a5 = a5.toString() 
    a6 = a6.toString() 
    a7 = a7.toString() 
    a8 = a8.toString() 
    a9 = a9.toString()

    let pontuacao
    document.getElementById('radio-1').checked == true ? pontuacao = 1 : pontuacao = 0

    if(pontuacao == 1){
        cpfp = a1+a2+a3 + '.' + a4+a5+a6 + '.' + a7+a8+a9 + '-' + d1+d2;
    } else {
        cpfp = a1+a2+a3+a4+a5+a6+a7+a8+a9+d1+d2;
    }
    
    document.getElementById('cpf').value = cpfp
}

function ValidarCPF() {
    let cpf = (document.getElementById('cpf-Validate').value).replace(/[^0-9]/g,'');
    document.getElementById('cpf-Validate').value = ''
    
    let a1, a2, a3, a4, a5, a6, a7, a8, a9, d1, d2, d1v, d2v;
    
    a1 = cpf.substr(0, 1)
    a2 = cpf.substr(1, 1) 
    a3 = cpf.substr(2, 1) 
    a4 = cpf.substr(3, 1) 
    a5 = cpf.substr(4, 1) 
    a6 = cpf.substr(5, 1) 
    a7 = cpf.substr(6, 1) 
    a8 = cpf.substr(7, 1) 
    a9 = cpf.substr(8, 1) 
    d1 = cpf.substr(9, 1) 
    d2 = cpf.substr(10, 1) 

    let d1p = ((a1*10)+(a2*9)+(a3*8)+(a4*7)+(a5*6)+(a6*5)+(a7*4)+(a8*3)+(a9*2))

    if((d1p%11<2 && d1 == 0) || (d1p%11>=2 && d1 == (11 - (d1p%11)))){
        d1v = true;
    }
    
    let d2p = ((a1*11)+(a2*10)+(a3*9)+(a4*8)+(a5*7)+(a6*6)+(a7*5)+(a8*4)+(a9*3)+(d1*2))
    
    if((d2p%11<2 && d2 == 0) || (d2p%11>=2 && d2 == (11 - (d2p%11)))){
        d2v = true;
    }

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    if(d1v == true && d2v == true){
        document.getElementById('cpf-Validate').value = cpf + ' é válido!'
    } else {
        document.getElementById('cpf-Validate').value = cpf + ' é inválido!'
    }

}


