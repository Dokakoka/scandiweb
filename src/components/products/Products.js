import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function Products() {
    const [dvds, setDVD] = useState([]);
    const [furnitures, setFurniture] = useState([]);
    const [books, setBook] = useState([]);

    useEffect(()=>{
        getProducts();
    }, []);

    async function getProducts() {
        await axios.get("http://scandiweb12.000webhostapp.com/php/index.php/get").then((res)=>{
            setDVD(res.data[0]);
            setFurniture(res.data[1]);
            setBook(res.data[2]);
        })
    }

    function deleteProducts() {
        let checkboxes = document.querySelectorAll(".delete-checkbox");
        checkboxes.forEach(checkbox => {
            if(checkbox.checked) {
                if(checkbox.classList.contains("dvd-checkbox")) {
                    axios.post(`http://scandiweb12.000webhostapp.com/php/index.php/delete/dvd/${checkbox.value}`);
                } else if(checkbox.classList.contains("furniture-checkbox")) {
                    axios.post(`http://scandiweb12.000webhostapp.com/php/index.php/delete/furniture/${checkbox.value}`);
                } else if(checkbox.classList.contains("book-checkbox")) {
                    axios.post(`http://scandiweb12.000webhostapp.com/php/index.php/delete/book/${checkbox.value}`);
                }
            }
        });
        getProducts();
    }

    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">Product List</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/addProduct">ADD</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" id="delete-product-btn" onClick={deleteProducts} to="/">MASS DELETE</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>

    <div className="container py-5">
        <div className="row">
            {dvds.map((dvd, sku) =>
                <div key={dvd.sku} className="col-md-3 col-6">
                    <input value={dvd.sku} className="delete-checkbox dvd-checkbox" type="checkbox"/>
                    <div className="text-center">
                        <p>{dvd.sku}</p>
                        <p>{dvd.product_name}</p>
                        <p>{dvd.price} $</p>
                        <p>Size: {dvd.size} MB</p>
                    </div>
                </div>
            )}

            {furnitures.map((furniture, sku) =>
                <div key={furniture.sku} className="col-md-3 col-6">
                    <input value={furniture.sku} className="delete-checkbox furniture-checkbox" type="checkbox"/>
                    <div className="text-center">
                        <p>{furniture.sku}</p>
                        <p>{furniture.product_name}</p>
                        <p>{furniture.price} $</p>
                        <p>{furniture.height}X{furniture.width}X{furniture.length}</p>
                    </div>
                </div>
            )}

            {books.map((book, sku) =>
                <div key={book.sku} className="col-md-3 col-6">
                    <input value={book.sku} className="delete-checkbox book-checkbox" type="checkbox"/>
                    <div className="text-center">
                        <p>{book.sku}</p>
                        <p>{book.product_name}</p>
                        <p>{book.price} $</p>
                        <p>Weight: {book.weight} KG</p>
                    </div>
                </div>
            )}
        </div>
    </div>
    </div>
)
}