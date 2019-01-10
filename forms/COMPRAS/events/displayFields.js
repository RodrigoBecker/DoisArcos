function displayFields(form, customHTML) {

    var codigoAtividade = parseInt(getValue("WKNumState"));

    //log.info("###########################" + codigoAtividade);


    switch (codigoAtividade) {

        case 0: {

            //form.setVisible("nome",false);
            form.setVisibleById("aprovador", false);
            form.setVisibleById("validacao", false);

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
