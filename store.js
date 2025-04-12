function searchText() {
    var searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.toUpperCase() === "ASUS") {
        window.open("shop.html#asus", "_blank");
    }
    else if (searchTerm.toUpperCase() === "HP") {
        window.open("shop.html#hp", "_blank");
    }
    else if (searchTerm.toUpperCase() === "DELL") {
        window.open("shop.html#dell", "_blank");
    }
    else if (searchTerm.toUpperCase() === "LENOVO") {
        window.open("shop.html#lenovo", "_blank");
    }
    else if (searchTerm.toUpperCase() === "MSI") {
        window.open("shop.html#msi", "_blank");
    }
    else {
        alert("Not found");
    }
}
