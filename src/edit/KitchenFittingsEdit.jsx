import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadimg from '../assets/uploadimg.png';
import SERVER_URL from '../services/server_url';
import { toast } from 'react-toastify';
import { editKitchenFittingsProductApi } from '../services/allAPI';

function KitchenFittingsEdit({ product, onUpdated }) {
    const [show, setShow] = useState(false);
    const [kitchenProduct, setKitchenProduct] = useState({
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
        if (kitchenProduct.productImg?.type === 'image/png' ||
            kitchenProduct.productImg?.type === 'image/jpg' ||
            kitchenProduct.productImg?.type === 'image/jpeg') {
            setImgFileStatus(true);
            setPreview(URL.createObjectURL(kitchenProduct.productImg));
        } else {
            setImgFileStatus(false);
            setPreview('');
        }
    }, [kitchenProduct.productImg]);

    const handleShow = () => {
        setKitchenProduct({
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
        setKitchenProduct({
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
        const { id, itemname, brand, category, description, productImg } = kitchenProduct;
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
            const result = await editKitchenFittingsProductApi(id, reqBody, reqHeader);
            if (result.status === 200) {
                toast.success('Kitchen Fittings product updated successfully!');
                handleClose();
                onUpdated();
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
                    <Modal.Title>Update Kitchen Fittings Product</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <div>
                        <label>
                            <input type='file' style={{ display: 'none' }}
                                onChange={(e) => setKitchenProduct({ ...kitchenProduct, productImg: e.target.files[0] })} />
                            <img src={preview ? preview : product?.productImg ? `${SERVER_URL}/uploads/${product.productImg}` : uploadimg} width='100px' alt='' />
                        </label>
                        {!imgFileStatus && kitchenProduct.productImg && (
                            <div className='mt-2 fw-bold text-warning'>*only upload (.jpg, .jpeg, .png)</div>
                        )}
                    </div>
                    <input value={kitchenProduct.itemname} onChange={(e) => setKitchenProduct({ ...kitchenProduct, itemname: e.target.value })} type='text' className='form-control mt-3' placeholder='Item Name' />
                    <input value={kitchenProduct.brand} onChange={(e) => setKitchenProduct({ ...kitchenProduct, brand: e.target.value })} type='text' className='form-control mt-3' placeholder='Brand' />
                    <input value={kitchenProduct.category} onChange={(e) => setKitchenProduct({ ...kitchenProduct, category: e.target.value })} type='text' className='form-control mt-3' placeholder='Category' />
                    <textarea value={kitchenProduct.description} onChange={(e) => setKitchenProduct({ ...kitchenProduct, description: e.target.value })} className='form-control mt-3' placeholder='Description' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={handleClose}>Cancel</Button>
                    <Button variant='success' onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default KitchenFittingsEdit;
