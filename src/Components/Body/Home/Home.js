import {React, useState,useEffect} from 'react'
import ProductView from '../ProductView/ProductView'
import getApi from '../../API/getApi'
import Loading from '../../Loading/Loading'
import './Home.css'
require('dotenv').config()
const url = process.env.REACT_APP_VERCEL_URL;
function Home({setLoad}) {
    const [data,setData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [universalData, setUniversalData] = useState([]);
    const [categories,setCategories] = useState({});
    const [filterCatg, setFilterCatg] = useState({});

    const setCategory = (data) =>{
        let cat = {};
        let fCat ={}
        if(data)
        // eslint-disable-next-line array-callback-return
        data.map((prod)=>{
            // eslint-disable-next-line array-callback-return
            prod.categories.map((catg)=>{
                if(cat[catg]===undefined){
                    cat[catg]=1;
                    fCat[catg]=true;
                }else{
                    cat[catg]+=1;
                }
            })
        })
        console.log(cat);
        setFilterCatg(fCat)
        setCategories(cat);
    }
    const checkCategory = (filterCatgs,catg) =>{
        let catgs = Object.keys(filterCatgs).filter(catg => filterCatgs[catg]);
        return catgs.includes(catg);
    }
    const filterData = (filterCatgs)=>{
        if(universalData)
            setData(universalData.filter(prod => prod.categories.some((catg)=>{return checkCategory(filterCatgs,catg)})))
        
    }
    
    useEffect(() => {
        const pageData = async(page,pageSize) =>{
            return await getApi(`${url}/data?page=${page}`);
        }
        const dataPageCall = async (totalPage) =>{
            let page = 2;
            let temp =[];
            while(page<=totalPage){
                temp =[...temp,...(await pageData(page)).data];
                page+=1;
            }
            setUniversalData((prevState)=>{console.log(prevState);return [...prevState, ...temp]})
            setData((prevState)=>{console.log(prevState);return [...prevState, ...temp]})
            setCategory([...universalData, ...temp])
        }
        const dataCall = async () => {
            let temp = await getApi(url+"/data");
            console.log(temp);
            setUniversalData(temp.data)
            setData(temp.data)
            setCategory(temp.data)
            if(temp.page<temp.totalPage){
                dataPageCall(temp.totalPage);
            }
            setDataLoading(false);
        }
        dataCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addChecked=(catg)=>{
        let tempcatg= {};
        tempcatg[catg]=!filterCatg[catg]
        setFilterCatg({...filterCatg, ...tempcatg})
        filterData({...filterCatg, ...tempcatg})
    }


    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row g-2">
                    <div className="col-md-3">
                        <div className="t-products p-2">
                            <h6 className="text-uppercase">Categories</h6>
                        </div>
                        <div className="processor p-2">
                            {dataLoading &&
                                <div style={{ width: "100%", textAlign: "center"}}>
                                    <Loading height={32} width={32}/>
                                </div>
                            }
                            {categories &&
                                Object.keys(categories).map((catg, key) => {
                                    return (
                                        <div key={key} className="d-flex justify-content-between mt-2">
                                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => { addChecked(catg) }} defaultChecked={filterCatg[catg]} /> <label className="form-check-label" htmlFor="flexCheckDefault"> {catg} </label> </div> <span>{categories[catg]}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row g-2">
                            {data && data.map((prod, index) => {
                                return <ProductView key={index} data={{ src: prod.images.medImg, name: prod.name, price: prod.price }} />
                            })

                            }
                        </div>
                    </div>
                </div>
            </div>
            {dataLoading &&
                <div style={{ width: "100%", textAlign: "center", margin: "10px" }}>
                    <Loading />
                </div>
            }
        </>
    )
}

export default Home
