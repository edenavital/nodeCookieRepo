import axios from "axios";
import "./App.css";
const URL = "/api";

const App = () => {
  const specialReq = async ({ method, data }) => {
    try {
      const res = await axios({
        method,
        data,
        url: URL,
        withCredentials: true,
      });
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };

  const getData = () => {
    specialReq({ method: "get" });
  };

  const postData = async () => {
    specialReq({
      method: "post",
      data: "testtt",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button style={{ marginBottom: 10 }} onClick={getData}>
          GET REQ
        </button>
        <button onClick={postData}>POST REQ</button>
      </header>
    </div>
  );
};

export default App;
