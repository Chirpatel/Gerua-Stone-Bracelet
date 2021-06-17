import {React,useState,useEffect} from 'react'
import postApi from '../API/postApi';
import getApi from '../API/getApi'
import './Login.css';
function Login() {
    const [selectedFile, setSelectedFile] = useState({});
    const [name, setName] = useState("");
    const [categories, setCategories] = useState("");
    const [price, setPrice] = useState(0);
    const [universalData, setUniversalData] = useState([]);
    const [reloadTable, setReloadTable] = useState(true);

    useEffect(() => {
        const pageData = async (page, pageSize) => {
            return await getApi(`https://gerua-api.vercel.app/data?page=${page}`);
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
            let temp = await getApi("https://gerua-api.vercel.app/data");
            console.log(temp);
            setUniversalData(temp.data)
            if (temp.page < temp.totalPage) {
                dataPageCall(temp.totalPage);
            }
        }
        dataCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadTable])
    const onNameChange = event => {
        setName(event.target.value)
    }
    const onCategoriesChange = event => {
        setCategories(event.target.value);
    }
    const onPriceChange = event => {
        setPrice(event.target.value);
    }
    const onFileChange = event => {
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
            url: `https://flaxen-inconclusive-owner.glitch.me/image/save?name=${name}&categories=${categories}&price=${price}`,
            headers: {
                ...formData.headers
            },
            data: formData
        };
        console.log(await postApi(config))
        setReloadTable(!reloadTable);
    };
    const removeProd = async (id) => {
        console.log(await getApi("https://flaxen-inconclusive-owner.glitch.me/imageRemove?id=" + id));
        setReloadTable(!reloadTable);
    }
    const ignoreList = ["images"]
    return (
        <>
            <div className="upload">
                <h3>Add Product</h3>
                <div>
                    <input type="text" value={name} onChange={onNameChange} /><br />
                    <input type="text" value={categories} onChange={onCategoriesChange} /><br />
                    <input type="text" value={price} onChange={onPriceChange} /><br />
                    <input type="file" onChange={onFileChange} /><br />
                    <button onClick={onFileUpload}>
                        Upload!
                </button>
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
    )
}

export default Login
