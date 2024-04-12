export const userColums=[
    { field: 'id', headerName: 'ID', width: 70 },
    { field:'user', headerName:'User', width:230, renderCell:(params)=>{
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt=""/>
                {params.row.userName}
            </div>
        )
    }},
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', width: 230 },
    { field: 'status', headerName: 'Status', width: 230,
    renderCell:(params)=>{
        return <div className={`cellwithstatus ${params.row.status}`}>{params.row.status}</div>;
    },
},
]

export const userRows=[
    {
        id:1,
        userName:'uddesh',
        img:'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw',
        status:'active',
        email:"ud@gmail.com",
        age:35,
    },
    {
        id:2,
        userName:'uddesh',
        img:'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
        status:'pending',
        email:"ud@gmail.com",
        age:35,
    },
    {
        id:3,
        userName:'uddesh',
        img:'https://marketplace.canva.com/EAFu3pqFr-k/1/0/1600w/canva-pink-and-blue-neon-facebook-profile-picture-dKTM-ks2g_c.jpg',
        status:'active',
        email:"ud@gmail.com",
        age:35,
    },
]