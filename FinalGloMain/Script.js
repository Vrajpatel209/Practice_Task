let SearchValue = [];
let ind = -1;

function display() {
    let d = SearchValue.map(function (value, index) {
        return `<div class="grocery-list">${value}
        <button class="edit-btn" onclick="editItem(${index})">Edit</button>
        <button class="delete-btn" onclick="removeItem(${index})">Delete</button>
    </div>`;
    });
    document.getElementById("items").innerHTML = d.join(" ");
}

function addValues() {
    const newValues = document.getElementById("grocery").value;
    //SearchValue.push(newValues);
    if (ind < 0) {
        SearchValue.push(newValues);
    }
    else {
        SearchValue[ind] = newValues;
    }
    ind = -1;
    display();
}

function removeItem(index) {
    SearchValue.splice(index, 1);
    display();
}

function clearAllItems() {
    SearchValue.splice(0);
    display();
}

function editItem(index) {
    document.getElementById("grocery").value = SearchValue[index];
    ind = index;
}
//HomeWork:
// create 3text-box(FirstName,LastName,PhoneNo.) with single array i.e. ArrayOfObject.