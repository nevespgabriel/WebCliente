document.querySelector("#insert").addEventListener("click", () => {
    const name = document.querySelector("#name");
    const grade = document.querySelector("#grade");
    const table = document.querySelector("table");
    const newRow = table.insertRow();
    
    const nameCell = newRow.insertCell(0);
    const gradeCell = newRow.insertCell(1);
    const buttonCell = newRow.insertCell(2);
    const deleteButton = document.createElement("button");


    nameCell.textContent = name.value;
    gradeCell.textContent = grade.value;
    deleteButton.textContent = "Delete";
    buttonCell.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        table.deleteRow(newRow.rowIndex);
    });
    
    document.querySelector("#name").value = "";
    document.querySelector("#grade").value = "";
});

