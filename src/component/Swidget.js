import React from 'react'
import './Swidget.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';

function Swidget({type}) {
  let data;
  const amount=100;
  const diff=20;
  switch(type){
    case "user":
        data={
            title:"USER",
            isMoney:false,
            link:"see all users",
            icone:<Person2OutlinedIcon className='icons'/>
        };
        break;
        case "order":
        data={
            title:"ORDER",
            isMoney:false,
            link:"view all orders",
            icone:<ShoppingCartOutlinedIcon className='icons'/>
        };
        break;
        case "erning":
        data={
            title:"ERNING",
            isMoney:true,
            link:"view net erning",
            icone:<WalletOutlinedIcon className='icons'/>
        };
        break;
        case "balnce":
        data={
            title:"BALNCE",
            isMoney:false,
            link:"see all users",
            icone:<AccountBalanceWalletOutlinedIcon className='icons'/>
        };
        break;
        default:
            break;
  }
  
  
    return (
    <div className='Swidget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"}{amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='persentage'>
            <KeyboardArrowUpOutlinedIcon/>
                {diff}%
            
            </div>
            {data.icone}
        </div>
    </div>
  )
}

export default Swidget