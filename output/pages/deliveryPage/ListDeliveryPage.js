import * as delivery from "./../../adapters/delivery/Delivery.js";
const container = document.getElementById('table-container');
const data = delivery.getRows();

data.forEach(rowData => {
const rowDiv = document.createElement('div');
rowDiv.setAttribute("class", "table-row");
Object.keys(rowData).forEach(key => {
const rowCol = document.createElement('div');
rowCol.setAttribute("class", "table-row-column");
const value = rowData[key];
rowCol.textContent = value;
rowDiv.append(rowCol);
});
container.append(rowDiv);
});
