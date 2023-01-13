export default function validation() {
    let productType = document.getElementById("productType");
    let prdouctDescription = document.getElementById("prdouctDescription");
    
    let name = document.getElementById("name");
    let sku = document.getElementById("sku");
    let price = document.getElementById("price");

    if(name.value === "" || sku.value === "" || price.value === "") {
        prdouctDescription.innerHTML = "Please, submit required data";
        return false;
    } else {
        if(isNaN(price.value)) {
            prdouctDescription.innerText = "Please, provide the data of indicated type";
            return false;
        }
        else if(productType.value === "dvd") {
            let size = document.getElementById("size");
            if(size.value === "") {
                prdouctDescription.innerText = "Please, submit required data";
                return false;
            } else if(isNaN(size.value)) {
                prdouctDescription.innerText = "Please, provide the data of indicated type";
                return false;
            }
        } else if(productType.value === "furniture") {
            let height = document.getElementById("height");
            let width = document.getElementById("width");
            let length = document.getElementById("length");
            if(height.value === "" || width.value === "" || length.value === "") {
                prdouctDescription.innerText = "Please, submit required data";
                return false;
            } else if(isNaN(height.value) || isNaN(width.value) || isNaN(length.value)) {
                prdouctDescription.innerText = "Please, provide the data of indicated type";
                return false;
            }
        } else {
            let weight = document.getElementById("weight");
            if(weight.value === "") {
                prdouctDescription.innerText = "Please, submit required data";
                return false;
            } else if(isNaN(weight.value)) {
                prdouctDescription.innerText = "Please, provide the data of indicated type";
                return false;
            }
            prdouctDescription.innerText = "Please provide book weight in KG";
        }
    }
    return true;
}