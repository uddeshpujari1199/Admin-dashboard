import React from 'react'
import './table.css'
import lap from "./../Assets/lap.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Stable() {
    const rows=[
        {
            id:1,
            product:"Assus",
            img:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703082715/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272241_0_mrfnqe.png',
            customer:"Rohit Sharma",
            data:"12 April",
            amount:999,
            method:"case on delivery",
            status:"approved",
        },
        {
            id:2,
            product:"Assus",
            img:'https://dlcdnwebimgs.asus.com/gain/d13bab25-68bc-433f-bbe3-8e5a31f16e94/',
            customer:"Uddesh Pujari",
            data:"12 April",
            amount:999,
            method:"case on delivery",
            status:"Padding",
        },
        {
            id:3,
            product:"Assus",
            img:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08393101.png',
            customer:"Virat Sharma",
            data:"12 April",
            amount:999,
            method:"case on delivery",
            status:"approved",
        }
    ]
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell lclassName='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Dtae</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell cassName='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell cassName='tableCell'>{row.id}</TableCell>
              <TableCell cassName='tableCell'>
                <div className='cellWrapper'>
                <img src={row.img} alt='' className='image'></img>
                {row.product}
                </div>
              </TableCell>
              <TableCell cassName='tableCell'>{row.customer}</TableCell>
              <TableCell cassName='tableCell'>{row.data}</TableCell>
              <TableCell cassName='tableCell'>{row.amount}</TableCell>
              <TableCell cassName='tableCell'>{row.method}</TableCell>
              <TableCell cassName='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Stable