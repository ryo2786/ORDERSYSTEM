import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {

let txt : string = "";

const account = () =>{
  if (txt == ""){
    txt = "matuda";
  }
  else {
    txt = "";
  }
  console.log(txt);
}

const navigate = useNavigate();

const logout = () =>{
    account();
    navigate("/");
}

const GoLogin = () =>{
    account();
    navigate("/login");
}

const GoPurchase = () =>{
  account();
  navigate("/Purchase");
}

return (
    
<div className="App">
<header className="header">
  メインメニュー      
</header>
<body className='body-align'>
<center><div className='main-size'>
  <div className='account wrap2'>
    <div className='account-div'>
      <label className='account-label'>アカウント名：</label>   
      <label className='account-label'>{txt}</label> 
    </div>
    <div className='account-div wrap3'>
    <button onClick={GoLogin}>人</button>
    </div>
  </div>
  <fieldset className='fieldset-format main-fieldset'>
    <legend className='fieldset-legend main-fieldset-legend'>購入仕様書</legend>
    <div className="wrap">
      <div className='btn-div-format btn-div-size'>
        <a className="a-btn-available-format a-btn-size" href="#" onClick={GoPurchase}>
          作成
        </a>
      </div>
      <div className='btn-div-format btn-div-size'>
        <a className="a-btn-available-format a-btn-size">
          経歴
        </a>
      </div>
      <div className='btn-div-format btn-div-size'>
        <a className="a-btn-available-format a-btn-size">
          発行
        </a>
      </div>
    </div>       
  </fieldset>
  <div className="wrap">
    <div className='btn-div-format btn-div-size'>
        <a className="a-btn-available-format a-btn-size">
          工事情報
        </a>
    </div>
    <div className='btn-div-format btn-div-size'>
        <a className="a-btn-available-format a-btn-size">
        マスタ
        </a>
    </div>
  </div> 
</div></center>

</body>
</div>

  );
};

//export default Main;
const linkStyle = {
  width: '148px', // ここで横幅を設定します
  hights: '22px',
  display: 'inline-block',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};