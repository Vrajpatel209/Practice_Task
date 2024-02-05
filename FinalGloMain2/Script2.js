let Details = [];

function addValues() {
    const info = {
        FirstName : document.getElementById("FName").value,
        LastName : document.getElementById("LName").value,
        ContactNo : document.getElementById("Number").value,
    }

    Details.push(info);

    display();
}
function display() {
    let d = Details.map(function (value, index) {
        return `<div class="grocery-list">
        ${value.FirstName} ${value.LastName} : ${value.ContactNo}
        <button class="edit-btn" onclick="editItem(${index})">Edit</button>
        <button class="delete-btn" onclick="removeItem(${index})">Delete</button>
    </div>`;
    });
    document.getElementById("items").innerHTML = d.join(" ");
}

function removeItem(index) {
    Details.splice(index, 1);
    display();
}

function clearAllItems() {
    Details.splice(0);
    display();
}
//HomeWork:
// create 3text-box(FirstName,LastName,PhoneNo.) with single array i.e. ArrayOfObject.