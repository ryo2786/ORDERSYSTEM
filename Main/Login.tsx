import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

const navigate = useNavigate();

const login = async() =>{
    navigate("/", {
        state: {
          toast: { status: "松田"},
        },
      });
}

const register = async() => {
    navigate("/register")
}

return (
<div>
  <header>
    ログイン
  </header>
  <body>
    <div>
      <div className="wrap">
      <div className="login-label-div">
      <label>名前</label>
      </div>
      <div className="login-input-div">
      <input
        name="input_name"
      />
      </div>
      </div>
      <div>


      </div>
    </div>
  <div>
          <label>名前</label>
          <input
            name="input_name"
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
          />
        </div>
        <button onClick={login}>ログイン</button>
        <button onClick={register}>新規追加</button>
  </body>
</div>

  );
};

export default Login;