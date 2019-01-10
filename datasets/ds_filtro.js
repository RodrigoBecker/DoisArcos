function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

    var ds = DatasetBuilder.newDataset();

    ds.addColumn("Codigo");
    ds.addColumn("Produto");
    ds.addColumn("Preço");
    ds.addColumn("Quantidade");

    var c1 = DatasetFactory.createConstraint("codigo", "0001", "0001", ConstraintType.MUST);
    var dataset = DatasetFactory.getDataset("ds_custom2", null, new Array(c1), null);

    for (var i = 0; i < dataset.rowsCount; i++) {
        ds.addRow([dataset.getValue(i, "codigo"),
        dataset.getValue(i, "produto"),
        dataset.getValue(i, "preco"),
        dataset.getValue(i, "quantidade")
        ]);
    }


    return ds;


} function onMobileSync(user) {

}