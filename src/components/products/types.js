export default function switchType() {
    let productType = document.getElementById("productType");
    let dvdOptions = document.getElementById("dvd-options");
    let furnitureOptions = document.getElementById("furniture-options");
    let bookOptions = document.getElementById("book-options");
    let prdouctDescription = document.getElementById("prdouctDescription");
    
    productType.onchange=()=>{
        if(productType.value === "dvd") {
            dvdOptions.classList.remove("d-none");
            furnitureOptions.classList.add("d-none");
            bookOptions.classList.add("d-none");
            prdouctDescription.innerText = "Please provide disk space in MB";
        } else if(productType.value === "furniture") {
            dvdOptions.classList.add("d-none");
            furnitureOptions.classList.remove("d-none");
            bookOptions.classList.add("d-none");
            prdouctDescription.innerText = "Please provide dimensions in HxWxL format";
        } else {
            dvdOptions.classList.add("d-none");
            furnitureOptions.classList.add("d-none");
            bookOptions.classList.remove("d-none");
            prdouctDescription.innerText = "Please provide book weight in KG";
        }
    }
}