let SearchValue = [];

function display() {
    let d = SearchValue.map(function (value) {
        return `<div class="grocery-list">${value}
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    </div>`;
    });
    document.getElementById("items").innerHTML = d.join(" ");
}

function addValues() {
    const newValues = document.getElementById("grocery").value;
    SearchValue.push(newValues);
    display();
}