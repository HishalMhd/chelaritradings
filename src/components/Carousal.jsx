import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoChelari from '../assets/logochelari-removebg-preview.png'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import uploadimg from '../assets/uploadimg.png'
import { toast } from 'react-toastify'
import { addHomeProductsApi, deleteHomeProductApi, getAdminHomeProductsApi } from '../services/allAPI'
import { addResponseContext } from '../contexts/ContextApi'
import Edit from '../edit/Edit'

function Carousal() {
  const { addResponse, setAddResponse } = useContext(addResponseContext)
  const [adminProducts, setAdminProducts] = useState([])
  const [homeProducts, setHomeProducts] = useState({
    itemname: "",
    brand: "",
    category: "",
    productImg: null,
    productPdf: null,
    description: ""
  })
  const [imgFileStatus, setImgFileStatus] = useState(false)
  const [preview, setPreview] = useState(uploadimg)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (homeProducts.productImg) {
      const type = homeProducts.productImg.type
      if (type === "image/png" || type === "image/jpg" || type === "image/jpeg") {
        setImgFileStatus(true)
        setPreview(URL.createObjectURL(homeProducts.productImg))
      } else {
        setImgFileStatus(false)
        setHomeProducts({ ...homeProducts, productImg: null })
        setPreview(uploadimg)
      }
    }
  }, [homeProducts.productImg])

  useEffect(() => {
    getAdminProducts()
  }, [])

  const getAdminProducts = async () => {
    const token = sessionStorage.getItem("token")
    if (!token) return
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      "authorization": `Bearer ${token}`
    }
    try {
      const result = await getAdminHomeProductsApi(reqHeader)
      if (result.status === 200) setAdminProducts(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpload = async () => {
    const { itemname, brand, category, productImg, productPdf, description } = homeProducts
    if (!itemname || !brand || !category || !productImg || !description) {
      toast.warning("Enter all required fields")
      return
    }

    const reqBody = new FormData()
    reqBody.append("itemname", itemname)
    reqBody.append("brand", brand)
    reqBody.append("category", category)
    reqBody.append("productImg", productImg)
    reqBody.append("description", description)
    if (productPdf) reqBody.append("productPdf", productPdf)

    const token = sessionStorage.getItem("token")
    if (!token) return
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      "authorization": `Bearer ${token}`
    }

    try {
      const result = await addHomeProductsApi(reqBody, reqHeader)
      if (result.status === 200) {
        handleClose()
        setAddResponse(result.data)
        getAdminProducts()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteProduct = async (pid) => {
    const token = sessionStorage.getItem("token")
    if (!token) return
    const reqHeader = {
      "Content-Type": "application/json",
      "authorization": `Bearer ${token}`
    }
    try {
      const result = await deleteHomeProductApi(pid, reqHeader)
      if (result.status === 200) getAdminProducts()
    } catch (err) {
      console.log(err)
    }
  }

  const handleClose = () => {
    setHomeProducts({ itemname: "", brand: "", category: "", productImg: null, productPdf: null, description: "" })
    setPreview(uploadimg)
    setShow(false)
  }
  const handleShow = () => setShow(true)

  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>
        
        {/* Sidebar */}
        <div className="col-12 col-md-3 text-white py-4" style={{ backgroundColor: "#003366" }}>
          <div className="mt-3 text-center">
            <Link to={'/'} className="text-decoration-none text-white">
              <div className="border border-0 p-3 rounded shadow m-3 bg-white">
                <img src={logoChelari} className="img-fluid" alt="Chelari Logo" style={{ maxHeight: "100px" }} />
              </div>
            </Link>
            <ul className="list-unstyled mt-4 fs-6 fw-bold text-center text-md-start">
              <li><Link to={'/admin/admincontrol/carousal'} className="text-decoration-none text-white d-block py-2">Home Products</Link></li>
              <li><Link to={'/admin/admincontrol/adminplywood'} className="text-decoration-none text-white d-block py-2">Plywood</Link></li>
              <li><Link to={'/admin/admincontrol/adminhardware'} className="text-decoration-none text-white d-block py-2">Hardware</Link></li>
              <li><Link to={'/admin/admincontrol/adminglass'} className="text-decoration-none text-white d-block py-2">Glass</Link></li>
              <li><Link to={'/admin/admincontrol/admindoors'} className="text-decoration-none text-white d-block py-2">Doors</Link></li>
              <li><Link to={'/admin/admincontrol/adminkitchenfittings'} className="text-decoration-none text-white d-block py-2">Kitchen Fittings</Link></li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 px-4 mt-4">
          <h3 className="text-center fw-bold">Home Page Products Change</h3>

          <div className="text-center my-4">
            <button onClick={handleShow} className="btn px-4" style={{ color: "white", backgroundColor: "#003366" }}>Add New Product</button>
          </div>

          {/* Modal */}
          <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              {/* Image Upload */}
              <div>
                <label>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={(e) => setHomeProducts({ ...homeProducts, productImg: e.target.files[0] })}
                  />
                  <img src={preview} width="100px" alt="Preview" />
                </label>
                {!imgFileStatus && (
                  <div className="mt-2 fw-bold text-warning">
                    *only upload .jpg, .jpeg, .png
                  </div>
                )}
              </div>

              {/* PDF Upload */}
              <div className="mt-3">
                <label>
                  Upload PDF:
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setHomeProducts({ ...homeProducts, productPdf: e.target.files[0] })}
                  />
                </label>
              </div>

              {/* Other Inputs */}
              <div className="mt-3">
                <input type="text" placeholder="Item Name" className="form-control mt-3" onChange={(e) => setHomeProducts({ ...homeProducts, itemname: e.target.value })} />
                <input type="text" placeholder="Brand" className="form-control mt-2" onChange={(e) => setHomeProducts({ ...homeProducts, brand: e.target.value })} />
                <input type="text" placeholder="Category" className="form-control mt-2" onChange={(e) => setHomeProducts({ ...homeProducts, category: e.target.value })} />
                <textarea placeholder="Description" className="form-control mt-2" onChange={(e) => setHomeProducts({ ...homeProducts, description: e.target.value })}></textarea>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>Cancel</Button>
              <Button variant="success" onClick={handleUpload}>Ok</Button>
            </Modal.Footer>
          </Modal>

          {/* Admin Products Table */}
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
                {adminProducts?.map(product => (
                  <tr key={product._id}>
                    <td>{product.itemname}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
  <div className="d-flex flex-wrap justify-content-center gap-2">
    <Edit product={product} />
    <button
      className="btn btn-danger btn-sm"
      onClick={() => handleDeleteProduct(product._id)}
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
  )
}

export default Carousal
