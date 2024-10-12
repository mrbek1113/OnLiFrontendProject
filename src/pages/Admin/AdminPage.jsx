import { useEffect, useState } from "react";
import PlusPng from "../../assets/icons/add.png";
import axios from "axios";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openOptionsModal, setOpenOptionsModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productFile, setProductFile] = useState(null);
  const [productImg, setProductImg] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const url = "https://on-li-backend.vercel.app/products";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const openCreateModalFunc = () => {
    setOpenCreateModal(!openCreateModal);
  };

  const openOptionsModalFunc = (product) => {
    setSelectedProduct(product);
    setOpenOptionsModal(true);
  };

  const closeOptionsModalFunc = () => {
    setOpenOptionsModal(false);
    setSelectedProduct(null);
  };


  const CreateModal = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[600px]">
          <h2 className="text-2xl mb-4">Create New Product</h2>
          <form onSubmit={postProduct}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                required
                type="text"
                placeholder="Name write?"
                className="w-full p-2 border rounded"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <input
                required
                type="text"
                placeholder="Description write?"
                className="w-full p-2 border rounded"
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image</label>
              <input
                type="file"
                className="w-full p-2 border rounded"
                onChange={(e) => setProductImg(e.target.files[0])}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">PDF File</label>
              <input
                type="file"
                className="w-full p-2 border rounded"
                onChange={(e) => setProductFile(e.target.files[0])}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={openCreateModalFunc}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const postProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("desc", productDesc);
    formData.append("img", productImg);
    formData.append("file", productFile);

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData([...data, res.data]);
      setOpenCreateModal(false);
    } catch (error) {
      console.error(error);
    }
  };



  const handleDelete = async () => {
    try {
      await axios.delete(`${url}/${selectedProduct.id}`);
      setData(data.filter((item) => item.id !== selectedProduct.id));
      closeOptionsModalFunc();
    } catch (error) {
      console.error(error);
    }
  };



  const OptionsModal = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[400px]">
          <h2 className="text-2xl mb-4">Delete</h2>
          <div className="flex flex-col">
            <button
              onClick={handleDelete}
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={closeOptionsModalFunc}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-[100vh] bg-gray-100 mx-auto gap-3 p-4">
      <div className="w-[80%] flex flex-wrap mx-auto gap-3">
        <div
          onClick={openCreateModalFunc}
          className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-xl w-full max-w-[250px] flex items-center bg-white justify-center h-[300px] border-2 cursor-pointer"
        >
          <img className="w-[100px]" src={PlusPng} alt="Add" />
        </div>
        {data.map((product) => (
          <div
            key={product.id}
            className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-xl w-full max-w-[250px] bg-white h-[300px] border-2 p-4 font-serif flex flex-col items-center cursor-pointer relative"
          >
            <a className="w-full h-[70%]" href={`http://localhost:4000/${product.file}`}>
              <img
                src={`http://localhost:4000/${product.img}`}
                alt={product.name}
                className="rounded-xl h-full object-cover mb-2"
              />
            </a>
            <h1 className="text-lg font-bold">{product.name}</h1>
            <h1 className="text-sm text-gray-600">{product.desc}</h1>
            <button
              onClick={() => openOptionsModalFunc(product)}
              className="absolute right-4 top-0 text-black text-[25px] rounded-2xl h-[40px]"
            >
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        ))}
      </div>
      {openCreateModal && <CreateModal />}
      {openUpdateModal && <UpdateModal />}
      {openOptionsModal && <OptionsModal />}
    </div>
  );
};

export default AdminPage;
