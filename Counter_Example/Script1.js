const items = document.querySelectorAll(".number");

const updateCount = (a1) => {
    const value = +(a1.dataset.value);
    const increment = Math.ceil(value / 1000);
    // increment by 1
    let initialValue = 0;

    const increaseCount = setInterval(()=> {
        initialValue += increment;

        if(initialValue > value){
            a1.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }
        a1.textContent = `${initialValue}+`;
    }, 1);
};

items.forEach((items) => {
    updateCount(items);
});