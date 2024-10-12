import axios from "axios";
import React, { useEffect, useState } from "react";

const UserPage = () => {
  const url = "https://on-li-backend.vercel.app/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  console.log(data);
  
  return (
    <div className="w-full h-full flex bg-gray-100 flex-wrap gap-4 p-[15px]">
      {data.map((product) => (
        <a
          href={`https://on-li-backend.vercel.app/${product.file}`}
          target="_blank"
          rel="noopener noreferrer"
          key={product.id}
          className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-xl  w-[250px] bg-white h-[300px] border-2 p-[15px] font-serif"
        >
          <img
            src={`https://on-li-backend.vercel.app/${product.img}`}
            alt={product.name}
            className="rounded-xl w-full h-[80%] object-cover"
          />
          <h1>{product.name}</h1>
          <h1>{product.desc}</h1>
        </a>
      ))}
    </div>
  );
};

export default UserPage;
