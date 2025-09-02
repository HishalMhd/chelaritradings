import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoChelari from '../assets/logochelari-removebg-preview.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadimg from '../assets/uploadimg.png';
import { toast } from 'react-toastify';
import { addPlywoodProductApi, getAdminPlywoodProductsApi, deletePlywoodProductApi } from '../services/allAPI';
import PlywoodEdit from '../edit/PlywoodEdit';

function AdminPlywood() {
  const [adminPlywoodDisplay, setAdminPlywoodDisplay] = useState([]);
  const [plywoodProducts, setPlywoodProducts] = useState({
    itemname: '',
    brand: '',
    category: '',
    productImg: '',
    productPdf: null,
    description: ''
  });
  const [imgFileStatus, setImgFileStatus] = useState(false);
  const [preview, setPreview] = useState(uploadimg);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      plywoodProducts.productImg?.type === 'image/png' ||
      plywoodProducts.productImg?.type === 'image/jpg' ||
      plywoodProducts.productImg?.type === 'image/jpeg'
    ) {
      setImgFileStatus(true);
      setPreview(URL.createObjectURL(plywoodProducts.productImg));
    } else {
      setImgFileStatus(false);
      setPreview(uploadimg);
    }
  }, [plywoodProducts.productImg]);

  useEffect(() => {
    allPlywoodDisplay();
  }, []);

  const allPlywoodDisplay = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) return;

    const reqHeader = {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`
    };

    try {
      const result = await getAdminPlywoodProductsApi(reqHeader);
      if (result.status === 200) setAdminPlywoodDisplay(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpload = async () => {
    const { itemname, brand, category, productImg, productPdf, description } = plywoodProducts;
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
      const result = await addPlywoodProductApi(reqBody, reqHeader);
      if (result.status === 200) {
        handleClose();
        toast.success('Plywood product added successfully!');
        allPlywoodDisplay();
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to add product');
    }
  };

  const handleClose = () => {
    setPlywoodProducts({ itemname: '', brand: '', category: '', productImg: '', description: '', productPdf: null });
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
      const result = await deletePlywoodProductApi(pid, reqHeader);
      if (result.status === 200) {
        toast.success('Product deleted successfully');
        allPlywoodDisplay();
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
                <img src={logoChelari} className="img-fluid" alt="Chelari Logo" style={{ maxHeight: "100px" }} />
              </div>
            </Link>
            <ul className="list-unstyled mt-4 fs-6 fw-bold text-center text-md-start">
              <li><Link to="/admin/admincontrol/carousal" className="text-decoration-none text-white d-block py-2">Home Products</Link></li>
              <li><Link to="/admin/admincontrol/adminplywood" className="text-decoration-none text-white fw-bold d-block py-2">Plywood</Link></li>
              <li><Link to="/admin/admincontrol/adminhardware" className="text-decoration-none text-white d-block py-2">Hardware</Link></li>
              <li><Link to="/admin/admincontrol/adminglass" className="text-decoration-none text-white d-block py-2">Glass</Link></li>
              <li><Link to="/admin/admincontrol/admindoors" className="text-decoration-none text-white d-block py-2">Doors</Link></li>
              <li><Link to="/admin/admincontrol/adminkitchenfittings" className="text-decoration-none text-white d-block py-2">Kitchen Fittings</Link></li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 px-4 mt-4">
          <h3 className="text-center fw-bold">Plywood Products Management</h3>

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
                  accept="image/*"
                  onChange={(e) => setPlywoodProducts({ ...plywoodProducts, productImg: e.target.files[0] })}
                />
                <img src={preview} width="100px" alt="Preview" />
              </label>
              {!imgFileStatus && plywoodProducts.productImg && (
                <div className="mt-2 fw-bold text-warning">
                  *only upload the following file types(.jpg, .jpeg, .png)
                </div>
              )}

              {/* PDF Upload */}
              <div className="mt-3">
                <label>
                  Upload PDF:
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setPlywoodProducts({ ...plywoodProducts, productPdf: e.target.files[0] })}
                  />
                </label>
              </div>

              {/* Other Inputs */}
              <input
                value={plywoodProducts.itemname}
                onChange={(e) => setPlywoodProducts({ ...plywoodProducts, itemname: e.target.value })}
                type="text"
                className="form-control mt-3"
                placeholder="Item Name"
              />
              <input
                value={plywoodProducts.brand}
                onChange={(e) => setPlywoodProducts({ ...plywoodProducts, brand: e.target.value })}
                type="text"
                className="form-control mt-3"
                placeholder="Brand"
              />
              <input
                value={plywoodProducts.category}
                onChange={(e) => setPlywoodProducts({ ...plywoodProducts, category: e.target.value })}
                type="text"
                className="form-control mt-3"
                placeholder="Category"
              />
              <textarea
                value={plywoodProducts.description}
                onChange={(e) => setPlywoodProducts({ ...plywoodProducts, description: e.target.value })}
                className="form-control mt-3"
                placeholder="Description"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>Cancel</Button>
              <Button variant="success" onClick={handleUpload}>Ok</Button>
            </Modal.Footer>
          </Modal>

          {/* Plywood Table */}
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
                {adminPlywoodDisplay.map((product) => (
                  <tr key={product._id}>
                    <td>{product.itemname}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <div className="d-flex flex-wrap justify-content-center gap-2">
                        <PlywoodEdit product={product} onUpdated={allPlywoodDisplay} />
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

export default AdminPlywood;
