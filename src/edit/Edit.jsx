import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadimg from '../assets/uploadimg.png';
import SERVER_URL from '../services/server_url';
import { toast } from 'react-toastify';
import { editHomeProductApi } from '../services/allAPI';



function Edit({product}) {

    

  const [show, setShow] = useState(false);
  const [homeProducts, setHomeProducts] = useState({id:product?._id,itemname:product?.itemname,brand:product?.brand,category:product?.category,productImg: "",description:product?.description});

  const [imgFileStatus, setImgFileStatus] = useState(false)
      const [preview, setPreview] = useState("")

      useEffect(() => {
      
              if (homeProducts.productImg.type == "image/png" || homeProducts.productImg.type == "image/jpg" || homeProducts.productImg.type == "image/jpeg") {
      
                  setImgFileStatus(true)
                  setPreview(URL.createObjectURL(homeProducts.productImg))
      
              }
              else {
                  setImgFileStatus(false)
      
                  setHomeProducts({ ...homeProducts, productImg: "" })
                  setPreview("")
              }
      
          }, [homeProducts.productImg]) 


  const handleClose = () => {

    setHomeProducts({id:product?._id,itemname:product?.itemname,brand:product?.brand,category:product?.category,productImg: "",description:product?.description})
    
    setShow(false);
  };

  const handleShow = () =>
     {
        setHomeProducts({id:product?._id,itemname:product?.itemname,brand:product?.brand,category:product?.category,productImg: "",description:product?.description})
        setShow(true);
    }


  const handleUpdate=async()=>{
    const {id,itemname,brand,category,description,productImg}=homeProducts
    if (itemname && brand && category && description) {

        const reqBody=new FormData()
        reqBody.append("itemname",itemname)
        reqBody.append("brand",brand)
        reqBody.append("category",category)
        reqBody.append("description",description)
        preview? reqBody.append("productImg",productImg):reqBody.append("productImg",product?.productImg)

        const token=sessionStorage.getItem("token")
        if (token) {
            const reqHeader={
                "Content-Type": preview?"multipart/form-data":"application/json",
                "authorization": `Bearer ${token}`
            }

            const result=await editHomeProductApi(id,reqBody,reqHeader)
            console.log(result);
            if (result.status==200) {
                handleClose()
                
            }
            
            
        }
        


        
    }
    else{
        toast.error("Please the fields Completely")
    }
  }


  return (
    <>
      <button 
        onClick={handleShow} 
        className='btn' 
        style={{ color: "white", backgroundColor: "#003366" }}
      >
        <i className="fa-solid fa-edit"></i>
      </button>

      <Modal size='lg'
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Update Product Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='text-center'>

                                <div>
                                    <label>
                                        <input onChange={(e) => setHomeProducts({ productImg: e.target.files[0] })} type="file" style={{ display: "none" }} />
                                        <img src={preview?preview:`${SERVER_URL}/uploads/${product?.productImg}`} width={"100px"} alt="" />
                                    </label>
                                    {!imgFileStatus &&
                                        <div className='mt-2 fw-bold text-warning'>
                                            *only upload the following file types(.jpg, .jpeg, .png)
                                        </div>
                                    }
                                </div>
                                <div>

                                    <input value={homeProducts?.itemname} onChange={(e) => setHomeProducts({ ...homeProducts, itemname: e.target.value })} type="text" className='form-control mt-3' placeholder='Item Name' /> <br />
                                    <input value={homeProducts?.brand} onChange={(e) => setHomeProducts({ ...homeProducts, brand: e.target.value })} type="text" className='form-control ' placeholder='Brand' /> <br />
                                    <input value={homeProducts?.category} onChange={(e) => setHomeProducts({ ...homeProducts, category: e.target.value })} type="text" className='form-control' placeholder='Category' /> <br />
                                    <textarea value={homeProducts?.description} className='form-control' placeholder='Description' name="" id="" onChange={(e) => setHomeProducts({ ...homeProducts, description: e.target.value })}></textarea>
                                </div>



                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button onClick={handleUpdate} variant="success">Update</Button>
                            </Modal.Footer>
                        </Modal>
    </>
  );
}

export default Edit;
