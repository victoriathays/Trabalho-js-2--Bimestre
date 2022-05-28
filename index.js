document.querySelector('#Calcular').addEventListener("click", (evento) => {
    event.preventDefault();

    let Valor_Base = document.querySelector('#valor_base').value;
    let Ajuda_transporte = document.querySelector('#Ajuda_transporte').value;
    let Ajuda_alimentação = document.querySelector('#Ajuda_alimentação').value;

    let v = Number(Valor_Base) + Number(Ajuda_transporte) + Number(Ajuda_alimentação);
    document.querySelector('#Receita_Total').value=v;

    let Desconto_de_Automóvel = document.querySelector('#Desconto_de_Automóvel').value;
    let Faltas = document.querySelector('#Faltas').value;
    
    let Desconto_Total = document.querySelector('#Desconto_Total').value;
    let Receita_Total = document.querySelector('#Receita_Total').value;
    let v3 = Number (Desconto_Total) - Number (Receita_Total)
    document.querySelector('#Total').value=v3;

    let v2 = Number(Desconto_de_Automóvel) + Number(Faltas) 
    document.querySelector('#Desconto_Total').value=v2;
    
   
});

document.querySelector('#Cancelar').addEventListener("click", (evento) => {
    event.preventDefault();
    
    limpar();

});
function limpar(){
    document.querySelector('#valor_base').value ="";
    document.querySelector('#Ajuda_transporte').value ="";
    document.querySelector('#Ajuda_alimentação').value ="";
    document.querySelector('#Desconto_de_Automóvel').value="";
    document.querySelector('#Faltas').value="";
    document.querySelector('#Desconto_Total').value="";
    document.querySelector('#Receita_Total').value="";
}


    