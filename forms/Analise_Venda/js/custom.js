$("#cpf").blur(function () {


    // Realizar a consulta do CPF
    var cpf = $("#cpf").val();
    var c1 = DatasetFactory.createConstraint("cfp", cpf, cpf, ConstraintType.MUST);
    var dataset = DatasetFactory.getDataset("ds_vendas", null, new Array(c1), null);
    
    
    // Validar conteudo do dataset 
    if(dataset.values.length == 0){
        alert("CPF NÃO LOCALIZADO");
    }else{
        $("#nome").val(dataset.values[0].nome);
        $("#renda").val(dataset.values[0].renda);
        $("#cidade").val(dataset.values[0].cidade);
    }



    //Carregar valores no campo
     
   /*
        $("#nome").val(dataset.values[0].nome);
        $("#renda").val(dataset.values[0].renda);
        $("#cidade").val(dataset.values[0].cidade);
   */

});

