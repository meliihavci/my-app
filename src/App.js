
import "./App.css";
import {useEffect, useState } from "react";
import axios from "axios";
import CoinList from "./CoinList";

function App() {
  const [data, setData] = useState([]);
  const[loading,setLoading] = useState(true);
  async function fetchData(){
    try{
      setLoading(true);
      const result = await axios(
        'https://api.coinlore.net/api/tickers/?start=0&limit=20',
      );
      console.log(result)
      setData(result.data);
    } finally{
      setLoading(false);
    }
  }
  useEffect(() => {
   
    fetchData();
    console.log("done");
  }, []);
 
  return (
       <div className="row">
        {loading == true ?<h1>Veriler yükleniyor...</h1>:data.data.map((item) => (
         <CoinList {...item}  />
    ))}
    </div>
  );
}

export default App;
