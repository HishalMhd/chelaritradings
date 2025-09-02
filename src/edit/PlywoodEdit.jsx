import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadimg from '../assets/uploadimg.png';
import SERVER_URL from '../services/server_url';
import { toast } from 'react-toastify';
import { editPlywoodProductApi } from '../services/allAPI';

function PlywoodEdit({ product, onUpdated }) {
  const [show, setShow] = useState(false);
  const [plywoodProduct, setPlywoodProduct] = useState({
    id: product?._id,
    itemname: product?.itemname,
    brand: product?.brand,
    category: product?.category,
    productImg: '',
    description: product?.description
  });
  const [imgFileStatus, setImgFileStatus] = useState(false);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (plywoodProduct.productImg?.type === 'image/png' ||
        plywoodProduct.productImg?.type === 'image/jpg' ||
        plywoodProduct.productImg?.type === 'image/jpeg') {
      setImgFileStatus(true);
      setPreview(URL.createObjectURL(plywoodProduct.productImg));
    } else {
      setImgFileStatus(false);
      setPreview('');
    }
  }, [plywoodProduct.productImg]);

  const handleShow = () => {
    setPlywoodProduct({
      id: product?._id,
      itemname: product?.itemname,
      brand: product?.brand,
      category: product?.category,
      productImg: '',
      description: product?.description
    });
    setShow(true);
  };

  const handleClose = () => {
    setPlywoodProduct({
      id: product?._id,
      itemname: product?.itemname,
      brand: product?.brand,
      category: product?.category,
      productImg: '',
      description: product?.description
    });
    setPreview('');
    setShow(false);
  };

  const handleUpdate = async () => {
    const { id, itemname, brand, category, description, productImg } = plywoodProduct;

    if (!itemname || !brand || !category || !description) {
      toast.error('Please fill all fields');
      return;
    }

    const reqBody = new FormData();
    reqBody.append('itemname', itemname);
    reqBody.append('brand', brand);
    reqBody.append('category', category);
    reqBody.append('description', description);
    if (productImg) reqBody.append('productImg', productImg);

    const token = sessionStorage.getItem('token');
    if (!token) return;

    const reqHeader = { 'Content-Type': 'multipart/form-data', authorization: `Bearer ${token}` };

    try {
      const result = await editPlywoodProductApi(id, reqBody, reqHeader);
      if (result.status === 200) {
        toast.success('Plywood product updated successfully!');
        handleClose();
        onUpdated(); // refresh table
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to update product');
    }
  };

  return (
    <>
      <button onClick={handleShow} className='btn' style={{ color: 'white', backgroundColor: '#003366' }}>
        <i className='fa-solid fa-edit'></i>
      </button>

      <Modal size='lg' show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Plywood Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <div>
            <label>
              <input
                type='file'
                style={{ display: 'none' }}
                onChange={(e) => setPlywoodProduct({ ...plywoodProduct, productImg: e.target.files[0] })}
              />
              <img
                src={preview ? preview : product?.productImg ? `${SERVER_URL}/uploads/${product.productImg}` : uploadimg}
                width='100px'
                alt=''
              />
            </label>
            {!imgFileStatus && plywoodProduct.productImg && (
              <div className='mt-2 fw-bold text-warning'>*only upload (.jpg, .jpeg, .png)</div>
            )}
          </div>

          <input value={plywoodProduct.itemname} onChange={(e) => setPlywoodProduct({ ...plywoodProduct, itemname: e.target.value })} type='text' className='form-control mt-3' placeholder='Item Name' />
          <input value={plywoodProduct.brand} onChange={(e) => setPlywoodProduct({ ...plywoodProduct, brand: e.target.value })} type='text' className='form-control mt-3' placeholder='Brand' />
          <input value={plywoodProduct.category} onChange={(e) => setPlywoodProduct({ ...plywoodProduct, category: e.target.value })} type='text' className='form-control mt-3' placeholder='Category' />
          <textarea value={plywoodProduct.description} onChange={(e) => setPlywoodProduct({ ...plywoodProduct, description: e.target.value })} className='form-control mt-3' placeholder='Description' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>Cancel</Button>
          <Button variant='success' onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PlywoodEdit;
