export const handleButton = () => {
    const myNumbers = document.querySelectorAll(".number");
    const inputValue = document.getElementById("Num").value;
    const checkedCount = document.querySelectorAll("input[type='checkbox']:checked").length;

    console.log(checkedCount.length);
    console.log(inputValue);

    myNumbers.forEach((v) => {
        if (v.previousElementSibling.firstElementChild.checked || checkedCount == 0) {
            v.textContent = +(v.textContent) + (+inputValue);
        }
        else {

        }
    });
}

const AddSub = () => {
    
}