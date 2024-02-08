import React, {useState} from "react";
import { Navigate, useNavigate} from "react-router-dom";
import "./Purchase.css"

const Purchase = () => {

return (
<div className="whole-div">
<header>
購入仕様書作成
</header>
<body className="body">
<div className="top-div wrap-hori">
   <div className="top-left-div wrap-ver">
      <div className="top-left-top-div wrap-hori test2">
         <div className='top-left-top-left-div'>
         <div className="btn-div-format">
         <a className="a-btn-available-format">
            製番
         </a>
         </div>
         </div>
         <div className="top-left-top-right-div wrap-hori">
            <div className="wrap-hori"> 
            <div> 
            <select className="combo-format top-left-top-right-combo">
            <option value="sample1">AP</option>
            <option value="sample2">BP</option>
            <option value="sample3">CP</option>
            </select>     
            </div>
            <div>   
            </div>              
            </div>
            <div>               
            </div>            
         </div>
      </div>
      <div className="top-left-top-div wrap-hori test2">         
      <div className='top-left-top-left-div'>
         <div className="btn-div-format">
         <a className="a-btn-available-format">
            P番
         </a>
         </div>
         </div>
         <div className="top-left-top-right-div">
         </div>
      </div>
      <div className="top-left-bottom-div wrap-hori">         
         <div className="top-left-bottom-left-div">
            <div className="label-format">
               工事情報
            </div>
         </div>
         <div className="top-left-bottom-right-div ">            
         </div>
      </div>
   </div>
   <div className="top-center-div">
   <fieldset className='fieldset-format top-center-fieldset-size'>
   <legend className='fieldset-legend main-fieldset-legend'>リスト編集</legend>
   </fieldset>
   </div>
   <div className="top-right-div">
   <fieldset className='fieldset-format top-right-fieldset-size'>
   <legend className='fieldset-legend search-fieldset-legend'>絞り込み</legend>
   </fieldset>
   </div>
</div>
<div className="middle-div">
</div>
<div className="bottom-div">
</div>
</body>
</div>
);
}

export default Purchase;