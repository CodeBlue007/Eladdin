export function changeCategory(e) {

    const { category: target } = e.target.dataset;
    
    console.log(target);

    if (!target) return;

    const itemList = document.querySelectorAll(".itemcontainer");
    const liList = document.querySelectorAll(".tab_container li");
    const targetLi = document.getElementById(target);

    [...liList].forEach(li => li.classList.remove("is-active"));

    targetLi.classList.add("is-active");

    [...itemList].forEach(item => {
        const category = item.dataset.category;
        if (category === target) {
            item.classList.remove("hidden");
        }
        else {
            item.classList.add("hidden");
        }
    })
}
