import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Listing.css'
import { deleteUser, editUser } from '../../Redux/Actions/Actions'
function Listing() {
    const users = useSelector(state => state.reducers.users)
    const [data,setData] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()
    console.log(users, 'user')
    console.log(data,'jii')
    function handleDelete(id) {
        alert('Are You Sure You Want To Delete')
        dispatch(deleteUser(id))
    }

    function handleEdit(x,id) {
        setIsEdit(true)
        setData(x)
        // dispatch(editUser(x,id))
    }
    function handleUpdate(){
        dispatch(editUser(data))
        setIsEdit(false)
    }
    return (
        < >

            {isEdit ?  
                < div style={{ position: 'absolute', top: '30%', left: '40%', backgroundColor: 'black', height: '15rem',width:'20rem', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
                    <input value={data.fname} onChange={(e) =>
                      setData({
                        ...data,
                        fname: e.target.value,
                      })
                    }/>
                    <input value={data.lname} onChange={(e) =>
                      setData({
                        ...data,
                        lname: e.target.value,
                      })
                    }  />
                    <input value={data.email} onChange={(e) =>
                      setData({
                        ...data,
                        email: e.target.value,
                      })
                    } />
                    <input value={data.phoneno} onChange={(e) =>
                      setData({
                        ...data,
                        phoneno: e.target.value,
                      })
                    }/>
                    <button onClick={handleUpdate}>Save</button>
                </div>:<table>
                <tr>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>EMAIL</th>
                    <th>PHONENUMBER</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
                {
                    users?.map((x, id) => (
                        <tr key={id}>
                            <td>{x.fname}</td>
                            <td>{x.lname}</td>
                            <td>{x.email}</td>
                            <td>{x.phoneno}</td>
                            <td> <button onClick={() => handleEdit(x,id)}>Edit</button></td>
                            <td> <button onClick={() => handleDelete(id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
            }
        </>
    )
}

export default Listing