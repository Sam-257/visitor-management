import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}

const Table = (props: Props) => {
    const [id, setId] = useState(0);
    const initialState = {
        name: "",
        purpose: "",
        coming: "",
        contact: "",
        entry: "",
        idType: "",
        idNumber: "",
        image: "",
        exit: "",
        received: false,
        id: 0
      }
    const [visitorData, setVisitorData] = useState(initialState)
    const handleChange = (e:any) => {
        setId(e.target.value);
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/visitors/${id}`)
        .then(res => setVisitorData({...visitorData, ...res.data}))
        .catch(err => console.log(err));
    }
    const handleSave = () => {
        axios.put(`http://localhost:8080/visitors/${id}`, visitorData)
        .then(() => alert('saved'))
        .catch(err => console.log(err));
    }
    useEffect(() => {
        setVisitorData(initialState);
    }, [id]);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="number" className='form-control' placeholder='Enter Id' onChange={handleChange} value={id}/>
            <button type='submit' className='btn btn-primary'>Submit </button>
        </form>
        <table className="table table-hover mt-3">
            <thead>
                <tr>
                    <th>name</th>
                    <th>purpose</th>
                    <th>coming</th>
                    <th>contact</th>
                    <th>entry</th>
                    <th>idType</th>
                    <th>idNumber</th>
                    <th>image</th>
                    <th>exit</th>
                    <th>received</th>
                    <th>save</th>
                </tr>
            </thead>
            <tbody> 
                {!(id === 0) ? 
                <tr>
                    <td>{visitorData.name}</td>
                    <td>{visitorData.purpose}</td>
                    <td>{visitorData.coming}</td>
                    <td>{visitorData.contact}</td>
                    <td>{visitorData.entry}</td>
                    <td>{visitorData.idType}</td>
                    <td>{visitorData.idNumber}</td>
                    <td><img src={visitorData.image} alt='visitor' height={40} width={40}/></td>
                    <td><input type="datetime-local" value={visitorData.exit} onChange={(e) => setVisitorData({...visitorData, 'exit': e.target.value})} /></td>
                    <td><input type="checkbox" checked={visitorData.received} onChange={() => setVisitorData({...visitorData, 'received': !visitorData.received})} /></td>
                    <td><button className='btn btn-success' onClick={handleSave}>Save</button></td>
                    
                </tr> : null}
            </tbody>
        </table>
    </div>
  )
}

export default Table