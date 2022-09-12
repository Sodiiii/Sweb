import React, {useEffect, useState} from 'react'
import './table.css'
import axios from 'axios'

// const apiUrl = 'https://api.sweb.ru/notAuthorized/';
// fetch(apiUrl, {
//   method: 'POST',
//   mode: 'no-cors',
//   headers:{
//     'Content-Type': 'json',
//   },
// })
// .then(response =>{
//   return response.json();
// })
// .then(data =>{
//   console.log(data);
// });
const apiUrl = "https://api.sweb.ru/notAuthorized/";

const authAxios = axios.create({
  baseURL: apiUrl,
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});


const Table = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestError, setRequestError] = useState();
  const fetchData = async () => {
    try {
      setLoading(true);
      const { results } = (await authAxios.post()).data;
      setInfo(results);
    } catch (err) {
      setRequestError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='table__wrapper'>
      <div className='table__top'>
          <h4 className='table__acc'>АККАУНТ</h4>
          <h1 className='table__order'> ЗАКАЗАТЬ VPS</h1>
          <div className='line'></div>
          <h5 className='category'>Категория</h5>
          <select className='select'></select>
      </div>

    </div>
  )
}

export default Table