import "./users.css";
import { useEffect, useReducer, useState } from "react";

   

const Users = () => {
  
  const [limit,setLimit] = useState(2)  

  useEffect(()=>{
    fetch('https://dygranabis.onrender.com/api/users/?limit='+limit)
    .then(res => res.json())
    .then(data => {
 
      setFilterData(data)
      setData(data)
    }).catch(err => console.log(err))
  },[limit])
     
      const loadmore = () =>{
        setLimit(limit+2)
      }
     
  const [data,setData] = useState([]) 
     const [filterData, setFilterData] = useState([])     
const handleFilter = (value) => {
  const res = filterData.filter(f => f.email?.toLowerCase().includes(value))
  setData(res)
}


  return (
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">All Users</h3>
        </div>
              <form class="search-box">
         <input onChange={e => handleFilter(e.target.value)} style={{verticalAlign: "4px", width: "255px", borderRadius:"10px", padding:"5px"}}  type="text" name="focus" placeholder="Search" id="search-input" />
  </form>

        <div className="grid-content">
            <div className="grid-items">
                {
                    data?.map((user) => (
                        <div className="grid-item" key = { user._id }>
                            <div className="grid-item-l">
                                <p className="text">{ user.email } <span>{ user.createdAt }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-scarlet"></span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button style={{padding:"10px",background:"white",borderRadius:"10px"}} onClick={loadmore}>Load More</button>
        </div>
    </div>
  )
}

export default Users
