import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  //   const [data, setData] = useState([
  //     { id: 1, company: "toyota", brand: "agya" },
  //     { id: 2, company: "toyota", brand: "sigra" },
  //     { id: 3, company: "daihatsu", brand: "ayla" },
  //     { id: 4, company: "daihatsu", brand: "calya" },
  //   ]);

  //   const [data, setData] = useState(false);

  //   useEffect(() => {
  //     setData(true);
  //   }, []);

  //   const [cars, setCars] = useState([]);

  //   useEffect(() => {
  //     setCars([
  //       { id: 1, company: "toyota", brand: "agya" },
  //       { id: 2, company: "toyota", brand: "sigra" },
  //       { id: 3, company: "daihatsu", brand: "ayla" },
  //       { id: 4, company: "daihatsu", brand: "calya" },
  //     ]);
  //   }, []);

  //   const [users, setUsers] = useState([]);
  //   const[error,setError] = useState()

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => {
  //         console.log(res?.data);
  //         const response = res?.data;
  //         setUsers(response);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  const [userDetail, setUserDetail] = useState({});

  const getUserDetail = () => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => {
        console.log(res?.data?.data);
        const response = res?.data?.data;
        setUserDetail(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div>
      {/* <h1>Daftar mobil</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>company: {item.company}</p>
            <p>brand:{item.brand}</p>
          </li>
        ))}
      </ul> */}

      {/* <h1>{false ? "single" : "menikah"}</h1> */}

      {/* <h1>Daftar mobil</h1>

      {cars.map((item) => (
        <div key={item.id}>
          <p>
            <b>company:</b> {item.company}
          </p>
          <p>
            <b>brand:</b>
            {item.brand}
          </p>
        </div>
      ))} */}

      {/* {users.map((item) => (
        <div>
          <h1>{item?.email}</h1>
          <p>{item?.name}</p>
        </div>
      ))} */}

      <div>
        <img src={userDetail?.avatar} alt="" />
        <p>{userDetail?.first_name}</p>
      </div>
    </div>
  );
};

export default App;
