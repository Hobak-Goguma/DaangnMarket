import React,{useState} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyDrop = ({localID,logOut}) =>{
    
  const [myMenu, setMyMenu] = useState(false);
  const dropdownOpen = ()=>{
      setMyMenu(true);
  }
  const dropdownClose = ()=>{
      setMyMenu(false);
  }

  const LoginTrue = styled.section`
  
      font-size:10px;
      margin:0;
      .myMenu>li{display:inline-block;}
      .welcome{
          border: 1px solid #ff8a3d;
          border-radius: 20px;
          font-weight: bold;
          text-align: center;
          height:20px;
          width: 50px;
          line-height:20px;
          color: #ff8a3d; 
      }
      .dropdown{
          margin-left:15px;
          font-size:12px;
          i{
              right:15px;
          }
      }
      
  `;
    return(<LoginTrue>
    <ul className="myMenu"
            onMouseOver={()=>dropdownOpen()}
            onMouseOut ={()=>dropdownClose()}
        >
        <li className="welcome">
            <span>웰컴</span>
        </li>
        <li >
            <span className="dropdown">{localID}님 <i className="fas fa-chevron-down"> </i></span>
        </li>
    </ul>
    <ul className={myMenu? "dropMenu active":"dropMenu"}>
        <li>정보수정</li>
        <li>채팅내역</li>
        <li>채팅내역</li>
        <li>채팅내역</li>
        <li>
            <Link to="/login">
                <div onClick={logOut}>
                    <span>로그아웃</span>
                </div>
            </Link>
        </li>
    </ul>
    {/*  */}
  </LoginTrue>);
}


export default MyDrop;