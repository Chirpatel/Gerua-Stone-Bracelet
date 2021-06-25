import {React,useState,useEffect} from 'react'
<<<<<<< HEAD
import Loading from '../Loading/Loading'
=======
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
import postApi from '../API/postApi';
import getApi from '../API/getApi'
import './Login.css';
require('dotenv').config()
const url = process.env.REACT_APP_VERCEL_URL;
const glitchurl = process.env.REACT_APP_GLITCH_URL;
function Login() {
    const [selectedFile, setSelectedFile] = useState({});
<<<<<<< HEAD
    const [awakeLoading, setAwakeLoading] = useState(true);
    const [tableLoading, setTableLoading] = useState(true);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [productSucess, setProductSucess] = useState(false);
=======
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
    const [name, setName] = useState("");
    const [categories, setCategories] = useState("");
    const [price, setPrice] = useState(0);
    const [universalData, setUniversalData] = useState([]);
    const [reloadTable, setReloadTable] = useState(true);

<<<<<<< HEAD
    useEffect(()=>{
        const awake= async()=>{
            await getApi(glitchurl);
            setAwakeLoading(false);
        }
        awake();
    },[])

=======
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
    useEffect(() => {
        const pageData = async (page, pageSize) => {
            return await getApi(`${url}/data?page=${page}`);
        }
        const dataPageCall = async (totalPage) => {
<<<<<<< HEAD
            
=======
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
            let page = 2;
            let temp = [];
            while (page <= totalPage) {
                temp = [...temp, ...(await pageData(page)).data];
                page += 1;
            }
            setUniversalData((prevState) => { console.log(prevState); return [...prevState, ...temp] })
        }
        const dataCall = async () => {
<<<<<<< HEAD
            setTableLoading(true)
=======
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
            let temp = await getApi(url+"/data");
            console.log(temp);
            setUniversalData(temp.data)
            if (temp.page < temp.totalPage) {
                dataPageCall(temp.totalPage);
            }
<<<<<<< HEAD
            setTableLoading(false)
=======
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
        }
        dataCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadTable])
    const onNameChange = event => {
<<<<<<< HEAD
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
        console.log(event.target.files[0])
=======
        setName(event.target.value)
    }
    const onCategoriesChange = event => {
        setCategories(event.target.value);
    }
    const onPriceChange = event => {
        setPrice(event.target.value);
    }
    const onFileChange = event => {
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
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
<<<<<<< HEAD
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
=======
        console.log(await postApi(config))
        setReloadTable(!reloadTable);
    };
    const removeProd = async (id) => {
        console.log(await getApi(glitchurl+"/imageRemove?id=" + id));
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
        setReloadTable(!reloadTable);
    }
    const ignoreList = ["images"]
    return (
        <>
<<<<<<< HEAD
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
=======
            <div className="upload">
                <div className="upload-div">
                    <h3>Add Product</h3>
                    <div className="upload-container">
                        <label for="name">Name</label><br/>
                        <input type="text" id="name" value={name} onChange={onNameChange} /><br />
                        <label for="Category" >Category</label><br/>
                        <input type="text"id="Category"  value={categories} onChange={onCategoriesChange} /><br />
                        <label for="Price">Price</label><br/>
                        <input type="text" id="Price" value={price} onChange={onPriceChange} /><br />
                        <label for="Image">Choose Image</label>
                        <input type="file" id ="Image"onChange={onFileChange} /><br />
                        <button onClick={onFileUpload}>Upload!</button>
                    </div>
                </div>
            </div>
            <div className="products">
                {universalData.length > 0 &&
                    <table>
                        <thead>
                            <tr>
                                {// eslint-disable-next-line array-callback-return
                                    Object.keys(universalData[0]).map((col, index) => {
                                        if (!ignoreList.includes(col))
                                            return <th key={index}>{col}</th>
                                    })}
                                    <th></th>
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
>>>>>>> 580d019b23d9ecb8d073ac3a377913053b740468
        </>
    )
}

export default Login
