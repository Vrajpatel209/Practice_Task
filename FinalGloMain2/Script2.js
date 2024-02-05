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

        return `<tr><td>${value.FirstName}</td><td>${value.LastName}</td><td> : </td><td>${value.ContactNo}</td></tr>`;
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
//HomeWork:
// create 3text-box(FirstName,LastName,PhoneNo.) with single array i.e. ArrayOfObject.
//ARRAY - LeetCode
//2,3,4,5,6 : {2,3}{2,4}{2,5}....