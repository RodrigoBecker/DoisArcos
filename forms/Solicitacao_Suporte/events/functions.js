function consulta_dataset(){
    var ds = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"),getValue("WKUser"), 
		ConstraintType.MUST);
		var constraints = new Array (ds);
		var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null );
		return colaborador; 
}