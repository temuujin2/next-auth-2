
import fetch from "node-fetch";
import axios from "axios";


export const getData = async () => {
    const instance = axios.create({
      baseURL: `https://dummyapi.io/data/v1/user`,
      timeout: 2000,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "app-id": "63104c3120f6e665ecf628ba",
      }
    })
    try {
      const data = await fetch("https://dummyapi.io/data/v1/user", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // use your own app-id of dummy api
          "app-id": "633656b151a80d35d5103c6f",
        },
      });
  
      const jsonData = await data.json();
      setAaa(jsonData);
      console.log("orj irsen",jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  getData();

export const DummyApi = () => {
    return (
        <div>
            
        </div>
    )
} 