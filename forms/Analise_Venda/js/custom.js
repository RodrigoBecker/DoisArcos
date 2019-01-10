$("#cpf").blur(function () {


    // Realizar a consulta do CPF
    var cpf = $("#cpf").val();
    var c1 = DatasetFactory.createConstraint("cfp", cpf, cpf, ConstraintType.MUST);
    var dataset = DatasetFactory.getDataset("ds_vendas", null, new Array(c1), null);

    //Carregar valores no campo

    
    if ((dataset.values[0].nome == "0") || (dataset.values[0].nome == "")) {
        alert("CPF NÃO CONSTA EM NOSSA BASE");
    } else {
        $("#nome").val(dataset.values[0].nome);
        $("#renda").val(dataset.values[0].renda);
        $("#cidade").val(dataset.values[0].cidade);
    }

});

