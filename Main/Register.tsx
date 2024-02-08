import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
 
    const navigate = useNavigate();

    const login = async() =>{
        navigate("/login");
    }

    const main = async() => {
        navigate("/")
    }

  return (
    <>
      <h1>新規登録</h1>
      <form>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
          />
        </div>
        <button>登録</button>
        <button onClick={login}>ログイン</button>
        <button onClick={main}>終了</button>
      </form>
    </>
  );
};

export default Register;