import * as response from "./response.json";

type DocumentField = {
    name: string;
    value: string;
    formattedValue: string;
    fieldType: number;
};
type DocumentFields = {
    [key: string]: DocumentField;
};
type Response = {
    [key: string]: DocumentFields
}
const TABLE_DATA = response as any as Response

const COLUMNS = [
    "Action",
    "-1",
    "0",
    "19",
    "20",
    "66",
    "90002000",
    "90002001",
    "2",
    "90000023",
    "90000201",
    "8",
    "15",
    "17",
    "18",
];

type TableRow = {[key:string]:any}

function removeStaticColumns(keysOrder: string[]) {
    keysOrder = keysOrder.filter((key) => key !== "-1" && key !== "Action");
    return keysOrder;
}

function getNamesInOrder(response: Response, keysOrder: string[]): string[] {
    const firstResponse = response[Object.keys(response)[0]];
    return keysOrder.map((key) => (firstResponse[key]?.name || ''));
}

function extractTableRowRecords(singleRecord: DocumentFields, keysOrder: string[]):TableRow {
    return keysOrder.reduce((extractedObj, key) => {
        if (singleRecord[key]) {
            const { name, value = '' } = singleRecord[key];
            const formattedKey = name.replace(/\s/g, ''); //
            extractedObj[formattedKey] = value;
        }
        return extractedObj;
    }, {} as TableRow);
}


function extractTableRecords(response: Response, keysOrder:string[]){
    keysOrder = removeStaticColumns(keysOrder)
    const tableHeaders = getNamesInOrder(response, keysOrder);
    const tableData : TableRow[]=[]

    for (const key in response) {
        if (key !=='default' && Object.prototype.hasOwnProperty.call(response, key)) {
            const row = response[key];
            const tableRowRecord = extractTableRowRecords(row,keysOrder)
            tableData.push(tableRowRecord);
        }
    }
    return {tableHeaders, tableData}
}
const {tableData,tableHeaders} = extractTableRecords(TABLE_DATA, COLUMNS)
console.log(tableData, tableHeaders)