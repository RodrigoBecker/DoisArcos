function DesabilitaCampo(form, campos) {
    for (var i = 0; i < campos.length; i++) {
         form.setEnabled(campos[i], false);
    }   
}

function ConsultaDataset(){
    var filtro = DatasetFactory.createConstraint("colleaguePK.colleagueId", UserCurrent, UserCurrent, ConstraintType.MUST);
    var ds = DatasetFactory.getDataset("colleague", null, new Array(filtro), null);
    return ds 
}

function OcultaInput(form, campos){
    for (var i = 0; i < campos.length; i++) {
        form.setVisibleById(campos[i], false);
   }   
}