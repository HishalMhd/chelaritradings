import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoChelari from '../assets/logochelari-removebg-preview.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadimg from '../assets/uploadimg.png';
import { toast } from 'react-toastify';
import {
  addKitchenFittingsProductsApi,
  getAdminKitchenFittingsProductsApi,
  deleteKitchenFittingsProductApi
} from '../services/allAPI';
import KitchenFittingsEdit from '../edit/KitchenFittingsEdit';

function AdminKitchenFittings() {
  const [adminKitchenProducts, setAdminKitchenProducts] = useState([]);
  const [kitchenProduct, setKitchenProduct] = useState({
    itemname: '',
    brand: '',
    category: '',
    productImg: '',
    description: '',
    productPdf: null
  });
  const [imgFileStatus, setImgFileStatus] = useState(false);
  const [preview, setPreview] = useState(uploadimg);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      kitchenProduct.productImg?.type === 'image/png' ||
      kitchenProduct.productImg?.type === 'image/jpg' ||
      kitchenProduct.productImg?.type === 'image/jpeg'
    ) {
      setImgFileStatus(true);
      setPreview(URL.createObjectURL(kitchenProduct.productImg));
    } else {
      setImgFileStatus(false);
      setPreview(uploadimg);
    }
  }, [kitchenProduct.productImg]);

  useEffect(() => {
    fetchKitchenProducts();
  }, []);

  const fetchKitchenProducts = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) return;
    const reqHeader = {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`
    };
    try {
      const result = await getAdminKitchenFittingsProductsApi(reqHeader);
      if (result.status === 200) setAdminKitchenProducts(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpload = async () => {
    const { itemname, brand, category, productImg, description, productPdf } = kitchenProduct;
    if (!itemname || !brand || !category || !productImg || !description) {
      toast.warning('Enter all fields completely');
      return;
    }

    const reqBody = new FormData();
    reqBody.append('itemname', itemname);
    reqBody.append('brand', brand);
    reqBody.append('category', category);
    reqBody.append('productImg', productImg);
    reqBody.append('description', description);
    if (productPdf) reqBody.append('productPdf', productPdf);

    const token = sessionStorage.getItem('token');
    if (!token) return;
    const reqHeader = {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`
    };

    try {
      const result = await addKitchenFittingsProductsApi(reqBody, reqHeader);
      if (result.status === 200) {
        handleClose();
        toast.success('Kitchen Fittings product added successfully!');
        fetchKitchenProducts();
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to add product');
    }
  };

  const handleClose = () => {
    setKitchenProduct({
      itemname: '',
      brand: '',
      category: '',
      productImg: '',
      description: '',
      productPdf: null
    });
    setPreview(uploadimg);
    setShow(false);
  };

  const handleDeleteProduct = async (pid) => {
    const token = sessionStorage.getItem('token');
    if (!token) return;
    const reqHeader = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    };
    try {
      const result = await deleteKitchenFittingsProductApi(pid, reqHeader);
      if (result.status === 200) {
        toast.success('Product deleted successfully');
        fetchKitchenProducts();
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to delete product');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>

        {/* Sidebar */}
        <div className="col-12 col-md-3 text-white py-4" style={{ backgroundColor: "#003366" }}>
          <div className="mt-3 text-center">
            <Link to="/" className="text-decoration-none text-white">
              <div className="border border-0 p-3 rounded shadow m-3 bg-white">
                <img
                  src={logoChelari}
                  className="img-fluid"
                  alt="Chelari Logo"
                  style={{ maxHeight: "100px" }}
                />
              </div>
            </Link>
            <ul className="list-unstyled mt-4 fs-6 fw-bold text-center text-md-start">
              <li><Link to="/admin/admincontrol/carousal" className="text-decoration-none text-white d-block py-2">Home Products</Link></li>
              <li><Link to="/admin/admincontrol/adminplywood" className="text-decoration-none text-white d-block py-2">Plywood</Link></li>
              <li><Link to="/admin/admincontrol/adminhardware" className="text-decoration-none text-white d-block py-2">Hardware</Link></li>
              <li><Link to="/admin/admincontrol/adminglass" className="text-decoration-none text-white d-block py-2">Glass</Link></li>
              <li><Link to="/admin/admincontrol/admindoors" className="text-decoration-none text-white d-block py-2">Doors</Link></li>
              <li><Link to="/admin/admincontrol/adminkitchenfittings" className="text-decoration-none text-white fw-bold d-block py-2">Kitchen Fittings</Link></li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 px-4 mt-4">
          <h3 className="text-center fw-bold">Kitchen Fittings Management</h3>

          <div className="text-center my-4">
            <button onClick={() => setShow(true)} className="btn px-4" style={{ color: "white", backgroundColor: "#003366" }}>Add New Product</button>
          </div>

          {/* Add Product Modal */}
          <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => setKitchenProduct({ ...kitchenProduct, productImg: e.target.files[0] })}
                />
                <img src={preview} width="100px" alt="" />
              </label>
              {!imgFileStatus && kitchenProduct.productImg && (
                <div className="mt-2 fw-bold text-warning">*only upload (.jpg, .jpeg, .png)</div>
              )}

              {/* PDF Upload */}
              <div className="mt-3">
                <label>
                  Upload PDF:
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setKitchenProduct({ ...kitchenProduct, productPdf: e.target.files[0] })}
                  />
                </label>
              </div>

              <input
                value={kitchenProduct.itemname}
                onChange={(e) => setKitchenProduct({ ...kitchenProduct, itemname: e.target.value })}
                type="text"
                className="form-control mt-3"
                placeholder="Item Name"
              />
              <input
                value={kitchenProduct.brand}
                onChange={(e) => setKitchenProduct({ ...kitchenProduct, brand: e.target.value })}
                type="text"
                className="form-control mt-3"
                placeholder="Brand"
              />
              <input
                value={kitchenProduct.category}
                onChange={(e) => setKitchenProduct({ ...kitchenProduct, category: e.target.value })}
                type="text"
                className="form-control mt-3"
                placeholder="Category"
              />
              <textarea
                value={kitchenProduct.description}
                onChange={(e) => setKitchenProduct({ ...kitchenProduct, description: e.target.value })}
                className="form-control mt-3"
                placeholder="Description"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>Cancel</Button>
              <Button variant="success" onClick={handleUpload}>Ok</Button>
            </Modal.Footer>
          </Modal>

          {/* Kitchen Fittings Table */}
          <div className="table-responsive">
            <table className="table table-bordered mt-4">
              <thead className="table-primary">
                <tr>
                  <td>Added Products</td>
                  <td>Category</td>
                  <td>Brand</td>
                  <td>Selection</td>
                </tr>
              </thead>
              <tbody>
                {adminKitchenProducts.map((product) => (
                  <tr key={product._id}>
                    <td>{product.itemname}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <div className="d-flex flex-wrap justify-content-center gap-2">
                        <KitchenFittingsEdit product={product} onUpdated={fetchKitchenProducts} />
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="btn btn-danger btn-sm"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminKitchenFittings;
