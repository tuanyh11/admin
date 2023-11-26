import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/`, product, config);

  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${base_url}product/${id}`, config);
  return response.data;
}
export const editProduct = async (product) => {
  const response = await axios.put(`${base_url}product/${product._id}`, product, config);

  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  return response.data;
};

const productService = {
  getProducts,
  createProduct,
};

export default productService;
