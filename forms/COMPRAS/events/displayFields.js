function displayFields(form, customHTML) {

    var codigoAtividade = parseInt(getValue("WKNumState"));

    //log.info("###########################" + codigoAtividade);


    switch (codigoAtividade) {

        case 0: {

            //form.setVisible("nome",false);
            form.setVisibleById("aprovador", false);
            form.setVisibleById("validacao", false);

            form.setEnabled("nome", false); // Metodos que desabilita campo
            form.setValue("nome", "Jose de Assis"); // Método que carrega valor no campo
            var exemplo = form.getValue("nome"); // exemplo de receber valor do campo em uma variavel 
            form.setValue("email", exemplo); // carrega valor no campo através de um variavel
            
            customHTML.append("<script>alert('OLÁ BEM VINDO AO NOSSO PROCESSO!')</script>");
            customHTML.append("<span>Testando CustomHTMTL</span>");
            customHTML.append("<script>" +
                "var estrutura = 2;" +
                "console.log(estrutura);" + 
                 "</script>");

            break;
        }
        case 4: {
            break;
        }
        case 5: {
            break;
        }
        case 12: {
            break;
        }

    }



    /*
    
    if(codigoAtividade == 0){   
        log.info("ESTOU NO ESCOPO DO IF");
    }else if(codigoAtividade !=0){
        log.info("ESTOU NO ELSE IF" );
    }else{
        log.info("NÃO PASSEI POR NENHUMA DAS VALIDAÇÕES");
    }
 */



}
