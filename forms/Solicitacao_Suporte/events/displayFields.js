function displayFields(form, customHTML) {

    var codigo = parseInt(getValue("WKNumState"));
    var colaborador = consulta_dataset();

    switch (codigo) {
        case 0: // Solicitar Suporte
            form.setEnabled("nome", false);
            form.setEnabled("email", false);
            form.setEnabled("ramal", false);
            form.setEnabled("setor", false);
            form.setEnabled("descricao", false);

            form.setVisibleById("feedback", false);
            form.setVisibleById("suporte", false);

            //Inserindo Valores:
            form.setValue("nome", colaborador.getValue(0, "colleagueName"));
            form.setValue("email", colaborador.getValue(0, "mail"));
            form.setValue("setor", colaborador.getValue(0, "currentProject"));
            form.setValue("ramal", colaborador.getValue(0, "extensionNr"));

            break;
        case 5: //Analisar Tickert

            form.setEnabled("nome", false);
            form.setEnabled("email", false);
            form.setEnabled("ramal", false);
            form.setEnabled("setor", false);
            form.setEnabled("descricao", false);

            form.setEnabled("analista", false);
            form.setEnabled("email_analista", false);
            form.setEnabled("ramal_analista", false);

            form.setVisibleById("feedback", false);

            //Inserindo Valores:

             //Inserindo Valores:
             form.setValue("analista", colaborador.getValue(0, "colleagueName"));
             form.setValue("email_analista", colaborador.getValue(0, "mail"));
             form.setValue("ramal_analista", colaborador.getValue(0, "extensionNr"));
 

            break;
        case 7: // Feedback Atendimento

            form.setEnabled("nome", false);
            form.setEnabled("email", false);
            form.setEnabled("ramal", false);
            form.setEnabled("setor", false);
            form.setEnabled("descricao", false);

            form.setEnabled("analista", false);
            form.setEnabled("email_analista", false);
            form.setEnabled("ramal_analista", false);
            form.setEnabled("solucao", false);

            //Inserindo Valores:

            break;
        default:
            break;

    }


}