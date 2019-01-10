function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

    var ds = DatasetBuilder.newDataset();

    //colunas
    ds.addColumn("Codigo");
    ds.addColumn("Produto");
    ds.addColumn("Preço");
    ds.addColumn("Quantidade");

    // linhas
    ds.addRow(new Array("001","Martelo","25,00","20"));
    ds.addRow(new Array("002","Furadeira","525,00","20"));
    ds.addRow(new Array("003","Prego","2,00","2220"));
    ds.addRow(new Array("004","Chave","15,00","120"));
    ds.addRow(new Array("005","Bucha 8mm","0,50","320"));

    return ds;


} function onMobileSync(user) {

}

