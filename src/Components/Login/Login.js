import {React,useState,useEffect} from 'react'
import Loading from '../Loading/Loading'
import postApi from '../API/postApi';
import getApi from '../API/getApi'
import './Login.css';
require('dotenv').config()
const url = process.env.REACT_APP_VERCEL_URL;
const glitchurl = process.env.REACT_APP_GLITCH_URL;
function Login() {
    const [selectedFile, setSelectedFile] = useState({});
    const [awakeLoading, setAwakeLoading] = useState(true);
    const [tableLoading, setTableLoading] = useState(true);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [productSucess, setProductSucess] = useState(false);
    const [name, setName] = useState("");
    const [categories, setCategories] = useState("");
    const [price, setPrice] = useState(0);
    const [universalData, setUniversalData] = useState([]);
    const [reloadTable, setReloadTable] = useState(true);

    useEffect(()=>{
        const awake= async()=>{
            await getApi(glitchurl);
            setAwakeLoading(false);
        }
        awake();
    },[])
    useEffect(() => {
        const pageData = async (page, pageSize) => {
            return await getApi(`${url}/data?page=${page}`);
        }
        const dataPageCall = async (totalPage) => {
            let page = 2;
            let temp = [];
            while (page <= totalPage) {
                temp = [...temp, ...(await pageData(page)).data];
                page += 1;
            }
            setUniversalData((prevState) => { console.log(prevState); return [...prevState, ...temp] })
        }
        const dataCall = async () => {
            setTableLoading(true)
            let temp = await getApi(url+"/data");
            setUniversalData(temp.data)
            if (temp.page < temp.totalPage) {
                dataPageCall(temp.totalPage);
            }
            setTableLoading(false)
        }
        dataCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadTable])
    const onNameChange = event => {
        setProductSucess(false);
        setName(event.target.value)
    }
    const onCategoriesChange = event => {
        setProductSucess(false);
        setCategories(event.target.value);
    }
    const onPriceChange = event => {
        setProductSucess(false);
        setPrice(event.target.value);
    }
    const onFileChange = event => {
        setProductSucess(false);
        setSelectedFile(event.target.files[0]);
    };
    const onFileUpload = async () => {
        const formData = new FormData();
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );
        console.log(selectedFile);
        let config = {
            method: 'post',
            url: glitchurl+`/image/save?name=${name}&categories=${categories}&price=${price}`,
            headers: {
                ...formData.headers
            },
            data: formData
        };
        setSelectedFile({});
        setName("");
        setCategories("");
        setPrice(0);
        document.getElementById("Image").value="";
        setUploadLoading(true)
        setProductSucess(false);
        await postApi(config)
        setUploadLoading(false)
        setProductSucess(true);
        setReloadTable(!reloadTable);
    };
    const removeProd = async (id) => {
        await getApi(glitchurl+"/imageRemove?id=" + id);
        setReloadTable(!reloadTable);
    }
    const ignoreList = ["images"]
    return (
        <>
            {awakeLoading &&
                <div style={{ width: "100%", textAlign: "center",margin:"10px" }}>
                    <Loading />
                </div>
            }
            {!awakeLoading &&
                <>
                    <div className="upload">
                        <div className="upload-div">
                            <h3>Add Product</h3>
                            <div className="upload-container">
                                <label for="name">Name</label><br />
                                <input type="text" id="name" value={name} onChange={onNameChange} /><br />
                                <label for="Category" >Category</label><br />
                                <input type="text" id="Category" value={categories} onChange={onCategoriesChange} /><br />
                                <label for="Price">Price</label><br />
                                <input type="text" id="Price" value={price} onChange={onPriceChange} /><br />
                                <label for="Image">Choose Image</label>
                                <input type="file" id="Image" onChange={onFileChange} /><br />
                                <button onClick={onFileUpload} className={uploadLoading?"disabled":""}>Upload!</button>
                                {uploadLoading &&
                                    <div style={{ width: "100%", textAlign: "center",margin:"10px" }}>
                                        <Loading width={16} height={16}/>
                                    </div>
                                }
                                {productSucess && !uploadLoading &&
                                    <div style={{ width: "100%", textAlign: "center",margin:"10px" }}>
                                        Product added Successfully.
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="products">
                                {tableLoading &&
                            <div style={{ width: "100%", textAlign: "center",margin:"10px" }}>
                                <Loading width={32} height={32}/>
                            </div>
                        }
                        {!tableLoading && universalData.length > 0 &&
                            <table>
                                <thead>
                                    <tr>
                                        {// eslint-disable-next-line array-callback-return
                                            Object.keys(universalData[0]).map((col, index) => {
                                                if (!ignoreList.includes(col))
                                                    return <th key={index}>{col.toUpperCase()}</th>
                                            })}
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        universalData.map((data, index) => {

                                            return <tr key={index}>

                                                {// eslint-disable-next-line array-callback-return
                                                    Object.keys(data).map((key, i) => {
                                                        if (!ignoreList.includes(key))
                                                            return <td key={i}>{data[key]}</td>
                                                    })}
                                                <td><button onClick={() => { removeProd(data.prodId); }}>Remove</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>

                            </table>
                        }
                    </div>
                </>
            }
        </>
    )
}

export default Login
