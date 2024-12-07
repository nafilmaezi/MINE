document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".search-bar button");
    searchButton.addEventListener("click", function() {
        const category = document.querySelector("#kategori").value;
        const query = document.querySelector(".search-bar input").value;
        alert(`Searching for ${query} in category ${category}`);
    });

    const sortSelect = document.querySelector("#urutkan");
    sortSelect.addEventListener("change", function() {
        alert(`Sorting products by ${sortSelect.value}`);
        // Add sorting functionality here
    });
});
