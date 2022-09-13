import React from "react";
import "./table.css";
// import axios from 'axios'
import { data } from "../../data";

// const apiUrl = "https://api.sweb.ru/notAuthorized/";

//имеется некоторая проблема с апи, нужные данные не возвращаются + корс на вашем сервере не даёт реализовать запрос
//поэтому получил данные через postman и буду работать с ними локально

// const authAxios = axios.create({
//   baseURL: apiUrl,
//   method: 'POST',
//   mode: 'no-cors',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
// });
const Table = () => {
  // const [info, setInfo] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [requestError, setRequestError] = useState();
  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const { results } = (await authAxios.post()).data;
  //     setInfo(results);
  //   } catch (err) {
  //     setRequestError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const bars = data.vpsPlans;
  return (
    <div className="table__wrapper">
      <div className="table__top">
        <h4 className="table__acc">АККАУНТ</h4>
        <h1 className="table__order"> ЗАКАЗАТЬ VPS</h1>
        <div className="line"></div>
        <div className="label">Категория</div>
        <select className="select">
          <option value="all">Все</option>
        </select>
      </div>
      <div>
        <div className="bars">
          {bars.map((bar) => (
            <div className={bar.name}>
              <div className="bar__top">
                <div className={`bar__logo${bar.name}`}></div>
                <h4 className="bar__name">{bar.name}</h4>
              </div>
              <div className="bar__body">
                <h4 className="bar__price">{bar.price_per_month} ₽/мес.</h4>
                <h5 className="stats">
                  <div className="stats__text">CPU</div> {bar.cpu_cores} × 2,8
                  ГГц{" "}
                </h5>
                <h5 className="stats">
                  <div className="stats__text">RAM</div> {bar.ram} МБ
                </h5>
                <h5 className="stats">
                  <div className="stats__text">DISC</div> {bar.volume_disk}{" "}
                  {bar.disk_type}
                </h5>
                <div className="label">Дистрибутив</div>
                <select className="bar__select">
                  <option value="all">Ubuntu 20.04 LTS</option>
                </select>
                <div className="label">Программное обеспечение</div>
                <select className="bar__select">
                  <option value="all">Без ПО</option>
                </select>
                <div className="label">Дата-центр</div>
                <div className="switch"></div>
                <div className="bottom">
                  <div className="plus">+</div>
                  <div className="bar__adds">
                    <h4 className="bar__add">2 IP-адреса (lPv4 + lPv6)</h4>
                    <h4 className="bar__add">3 резервных копии</h4>
                  </div>
                </div>
                <button className="bar__btn">ЗАКАЗАТЬ</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
