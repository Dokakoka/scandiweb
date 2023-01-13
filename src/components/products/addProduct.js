import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './addPrdouct.css';
import './types';
import axios from 'axios';
import switchType from './types';
import validation from './validation';

export default function AddProduct() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        switchType();
    })

    const handleChange=(event)=>{
        const id = event.target.id;
        const value = event.target.value;
        setInputs(values=>({...values, [id]: value}));
    }
    const submitProducts=async()=> {
        let validation_res = validation();
        console.log(validation_res);
        if(validation_res) {
            await axios.post('http://scandiweb12.000webhostapp.com/php/index.php/add', inputs).then((response) => {
                navigate('/');
            });
        }
    }

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/addProduct">Product Add</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" onClick={submitProducts} id="save">Save</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Cancel</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
        <div className="container py-5">
            <form id='product_form'>
                <div className="form-container">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" className="form-control" id="sku" onChange={handleChange}/>
                </div>
                <div className="form-container">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={handleChange}/>
                </div>
                <div className="form-container">
                    <label htmlFor="name" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" onChange={handleChange}/>
                </div>
                <div className="form-container">
                    <label htmlFor="switch" className="form-label">Type Switcher</label>
                    <select className="form-control" defaultValue="Type Switcher" id="productType" onChange={handleChange}>
                        <option disabled>Type Switcher</option>
                        <option value="dvd">DVD</option>
                        <option value="furniture">Furniture</option>
                        <option value="book">Book</option>
                    </select>
                </div>

                <div>
                    <div className="d-none" id="dvd-options">
                        <div className="form-container">
                            <label htmlFor="size" className="form-label">Size (MB)</label>
                            <input type="number" className="form-control" id="size" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="d-none" id="furniture-options">
                        <div className="form-container">
                            <label htmlFor="height" className="form-label">Height (CM)</label>
                            <input type="number" className="form-control" id="height" onChange={handleChange}/>
                        </div>

                        <div className="form-container">
                            <label htmlFor="width" className="form-label">Width (CM)</label>
                            <input type="number" className="form-control" id="width" onChange={handleChange}/>
                        </div>

                        <div className="form-container">
                            <label htmlFor="length" className="form-label">Length (CM)</label>
                            <input type="number" className="form-control" id="length" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="d-none" id="book-options">
                        <div className="form-container">
                            <label htmlFor="weight" className="form-label">Weight (KG)</label>
                            <input type="number" className="form-control" id="weight" onChange={handleChange}/>
                        </div>
                    </div>
                    <p id="prdouctDescription"></p>
                </div>
            </form>
        </div>
    </div>
    )
}