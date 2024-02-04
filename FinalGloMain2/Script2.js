let SearchValue = [];
let myObject = { FName: '', LName: '', Num: '' }
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
        SearchValue.push(myObject[newValues1]);
        SearchValue.push(myObject[newValues2]);
        SearchValue.push(myObject[newValues3]);
    }
    else {
        SearchValue[ind] = SearchValue.myObject;
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
    document.getElementById("grocery1").value = SearchValue.myObject[index];
    document.getElementById("grocery2").value = SearchValue.myObject[index];
    document.getElementById("grocery3").value = SearchValue.myObject[index];
    ind = index;
}
//HomeWork:
// create 3text-box(FirstName,LastName,PhoneNo.) with single array i.e. ArrayOfObject.