let SearchValue = [];
let myObject = { FName: newValues1, LName: newValues2, Num: newValues3 }
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
    const newValues1 = document.getElementById("grocery1").value;
    const newValues2 = document.getElementById("grocery2").value;
    const newValues3 = document.getElementById("grocery3").value;
    //SearchValue.push(newValues);
    if (ind < 0) {
        SearchValue.push(myObject[newValues1, newValues2, newValues3]);
    }
    else {
        SearchValue[ind] = SearchValue.myObject[newValues1, newValues2, newValues3];
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