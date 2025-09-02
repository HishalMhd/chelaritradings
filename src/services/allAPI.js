import SERVER_URL from '../services/server_url'
import commonAPI from '../services/commonAPI'


// ..............................REGISTER AND LOGIN..............................................

// api call for register user
export const registerApi = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/register`, reqBody)
}

// api call for login
export const loginApi = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/login`, reqBody)
}

// .............................HOME PRODUCTS....................................................

// api call for adding home products
export const addHomeProductsApi = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVER_URL}/home-add-product`, reqBody, reqHeader)
}

// api call for get home products
export const getHomeProductsApi = async () => {
  return await commonAPI("GET", `${SERVER_URL}/get-home-products`, "")
}

// api call for admin products display
export const getAdminHomeProductsApi = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/get-admin-home-products`, "", reqHeader)
}


// api call for edit products
export const editHomeProductApi = async (pid,reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVER_URL}/edit-home-products/${pid}`, reqBody, reqHeader)
}


// api call for delete products
export const deleteHomeProductApi = async (pid, reqHeader) => {
  return await commonAPI("DELETE", `${SERVER_URL}/delete-home-products/${pid}`,{}, reqHeader)
}

// Get single Home product by ID
export const getHomeProductByIdApi = async (pid) => {
    return await commonAPI("GET", `${SERVER_URL}/home-product/${pid}`, "");
}



// ....................................DOOR PRODUCTS..............................................

// ✅ api call for adding door products
export const addDoorProductsApi = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVER_URL}/door-add-product`, reqBody, reqHeader)
}

// ✅ api call for admin doors products display
export const getAdminDoorProductsApi = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/get-admin-door-products`, "", reqHeader)
}

// api call for get all doors products user display

export const getDoorProductsApi = async () => {
  return await commonAPI("GET",`${SERVER_URL}/get-door-products`,"")
}

// Edit door product
export const editDoorProductApi = async (pid, reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVER_URL}/edit-door-product/${pid}`, reqBody, reqHeader);
}

// Delete door product
export const deleteDoorProductApi = async (pid, reqHeader) => {
  return await commonAPI("DELETE", `${SERVER_URL}/delete-door-product/${pid}`, {}, reqHeader);
}



// .......................HARDWARE..............................................

// api call for adding hardware products
export const addHardwareProductsApi = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVER_URL}/hardware-add-product`, reqBody, reqHeader);
};

// api call for get all hardware products user display

export const getHardwareProductsApi = async () => {
  return await commonAPI("GET",`${SERVER_URL}/get-hardware-products`,"")
}

// api call for admin hardware products display
export const getAdminHardwareProductsApi = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/get-admin-hardware-products`, "", reqHeader);
};

// Edit hardware product
export const editHardwareProductApi = async (pid, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/edit-hardware-product/${pid}`, reqBody, reqHeader);
}

// Delete hardware product
export const deleteHardwareProductApi = async (pid, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/delete-hardware-product/${pid}`, {}, reqHeader);
}




// ...............................PLYWOOD.......................................

// Add plywood product
export const addPlywoodProductApi = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVER_URL}/plywood/add`, reqBody, reqHeader)
}

// Get plywood products (User)
export const getPlywoodProductsApi = async () => {
  return await commonAPI("GET", `${SERVER_URL}/plywood`, "")
}

// Get plywood products (Admin)
export const getAdminPlywoodProductsApi = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/admin/plywood`, "", reqHeader)
}

// Edit plywood product
export const editPlywoodProductApi = async (pid, reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVER_URL}/edit-plywood-product/${pid}`, reqBody, reqHeader);
};

// Delete plywood product
export const deletePlywoodProductApi = async (pid, reqHeader) => {
  return await commonAPI("DELETE", `${SERVER_URL}/delete-plywood-product/${pid}`, {}, reqHeader);
};




// ...............................GLASS........................................

// api call for adding glass products
export const addGlassProductsApi = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVER_URL}/glass-add-product`, reqBody, reqHeader);
};

// api call for user glass products display
export const getGlassProductsApi = async () => {
  return await commonAPI("GET", `${SERVER_URL}/get-glass-products`, "");
};

// api call for admin glass products display
export const getAdminGlassProductsApi = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/get-admin-glass-products`, "", reqHeader);
};

// Edit glass product
export const editGlassProductApi = async (pid, reqBody, reqHeader) => {
  return await commonAPI("PUT", `${SERVER_URL}/edit-glass-product/${pid}`, reqBody, reqHeader);
};

// Delete glass product
export const deleteGlassProductApi = async (pid, reqHeader) => {
  return await commonAPI("DELETE", `${SERVER_URL}/delete-glass-product/${pid}`, {}, reqHeader);
};






// ...............................KITCHEN FITTINGS................................................

// Kitchen Fittings - Add product
export const addKitchenFittingsProductsApi = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVER_URL}/kitchenfittings-add-product`, reqBody, reqHeader)
}

// Kitchen Fittings - Get admin products
export const getAdminKitchenFittingsProductsApi = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/get-admin-kitchenfittings-products`, "", reqHeader)
}

// Kitchen Fittings - Get user products
export const getKitchenFittingsProductsApi = async () => {
  return await commonAPI("GET", `${SERVER_URL}/get-kitchenfittings-products`, "")
}


// Kitchen Fittings - Edit product
export const editKitchenFittingsProductApi = async (pid, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/edit-kitchenfittings-product/${pid}`, reqBody, reqHeader);
};

// Kitchen Fittings - Delete product
export const deleteKitchenFittingsProductApi = async (pid, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/delete-kitchenfittings-product/${pid}`, {}, reqHeader);
};




// ...................................ALL PRoducts

// ✅ Unified product details API
export const getProductByIdApi = async (pid) => {
    return await commonAPI("GET", `${SERVER_URL}/products/${pid}`, "")
}

// ✅ Unified all products API (for "Our Products" random section)
export const getAllProductsApi = async () => {
  return await commonAPI("GET", `${SERVER_URL}/products`, "")
}