import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadimg from '../assets/uploadimg.png';
import SERVER_URL from '../services/server_url';
import { toast } from 'react-toastify';
import { editHardwareProductApi } from '../services/allAPI';

function HardwareEdit({ product, onUpdated }) {
  const [show, setShow] = useState(false);
  const [hardwareProduct, setHardwareProduct] = useState({
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
    if (hardwareProduct.productImg?.type === 'image/png' ||
        hardwareProduct.productImg?.type === 'image/jpg' ||
        hardwareProduct.productImg?.type === 'image/jpeg') {
      setImgFileStatus(true);
      setPreview(URL.createObjectURL(hardwareProduct.productImg));
    } else {
      setImgFileStatus(false);
      setPreview('');
    }
  }, [hardwareProduct.productImg]);

  const handleShow = () => {
    setHardwareProduct({
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
    setHardwareProduct({
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
    const { id, itemname, brand, category, description, productImg } = hardwareProduct;

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

    const reqHeader = {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`
    };

    try {
      const result = await editHardwareProductApi(id, reqBody, reqHeader);
      if (result.status === 200) {
        toast.success('Hardware product updated successfully!');
        handleClose();
        onUpdated(); // refresh parent table
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to update product');
    }
  };

  return (
    <>
      <button
        onClick={handleShow}
        className='btn'
        style={{ color: 'white', backgroundColor: '#003366' }}
      >
        <i className='fa-solid fa-edit'></i>
      </button>

      <Modal size='lg' show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Hardware Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <div>
            <label>
              <input
                type='file'
                style={{ display: 'none' }}
                onChange={(e) =>
                  setHardwareProduct({ ...hardwareProduct, productImg: e.target.files[0] })
                }
              />
              <img
                src={
                  preview
                    ? preview
                    : product?.productImg
                    ? `${SERVER_URL}/uploads/${product.productImg}`
                    : uploadimg
                }
                width='100px'
                alt=''
              />
            </label>
            {!imgFileStatus && hardwareProduct.productImg && (
              <div className='mt-2 fw-bold text-warning'>
                *only upload the following file types(.jpg, .jpeg, .png)
              </div>
            )}
          </div>

          <input
            value={hardwareProduct.itemname}
            onChange={(e) => setHardwareProduct({ ...hardwareProduct, itemname: e.target.value })}
            type='text'
            className='form-control mt-3'
            placeholder='Item Name'
          />
          <input
            value={hardwareProduct.brand}
            onChange={(e) => setHardwareProduct({ ...hardwareProduct, brand: e.target.value })}
            type='text'
            className='form-control mt-3'
            placeholder='Brand'
          />
          <input
            value={hardwareProduct.category}
            onChange={(e) =>
              setHardwareProduct({ ...hardwareProduct, category: e.target.value })
            }
            type='text'
            className='form-control mt-3'
            placeholder='Category'
          />
          <textarea
            value={hardwareProduct.description}
            className='form-control mt-3'
            placeholder='Description'
            onChange={(e) =>
              setHardwareProduct({ ...hardwareProduct, description: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='success' onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HardwareEdit;
