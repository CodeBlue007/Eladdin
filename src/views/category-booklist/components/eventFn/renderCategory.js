export function renderCategory(e) {

    if (!e.target.id) return;

    const changeMap = {
        "에세이": "essay",
        "여행": "trip",
        "자기계발": "develop",
        "컴퓨터/모바일": "computer",
        "추리소설": "detective",
    };

    const itemList = document.querySelectorAll(".itemcontainer");
    const liList = document.querySelectorAll(".tab_container li");

    [...liList].forEach(li => li.classList.remove("is-active"));

    e.target.parentElement.classList.add("is-active");

    [...itemList].forEach(item => {
        const category = item.dataset.category;
        if (changeMap[category] === e.target.id) {
            item.classList.remove("hidden");
        }
        else {
            item.classList.add("hidden");
        }
    })
}
