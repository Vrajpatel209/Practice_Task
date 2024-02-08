let Details = [];
let ind = -1;

function addValues() {
    const info = {
        FirstName: document.getElementById("FName").value,
        LastName: document.getElementById("LName").value,
        ContactNo: document.getElementById("Number").value,
    }
    if (ind < 0) {
        Details.push(info);
    }
    else {
        Details[ind] = info;
    }
    ind = -1;

    //Details.push(info);

    display();
}
function display() {
    let d = Details.map(function (value, index) {

        return `<tr><td>${value.FirstName}</td><td>${value.LastName}</td><td> : </td><td>${value.ContactNo}</td><td><button class="edit-btn" onclick="editItem(${index})">Edit</button></td>
        <td><button class="delete-btn" onclick="removeItem(${index})">Delete</button></td></tr>`;
    });
    document.getElementById("tabledata").innerHTML = d.join(" ");
}

function removeItem(index) {
    Details.splice(index, 1);
    display();
}

function clearAllItems() {
    Details.splice(0);
    display();
}

function editItem(index){
    document.getElementById("FName").value = Details[index];
    ind = index;
    document.getElementById("LName").value = Details[index];
    ind = index;
    document.getElementById("Number").value = Details[index];
    ind = index;
}
//HomeWork:
//create 3text-box(FirstName,LastName,PhoneNo.) with single array i.e. ArrayOfObject.
//ARRAY - LeetCode
//2,3,4,5,6 : {2,3}{2,4}{2,5}....