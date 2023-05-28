import React, { useState } from 'react'

type IData = {
    name:string,
     purpose:string,
     coming:string,
     contact:string,
     entry:string,
     idType:string,
     idNumber:string,
     image:string

}
type Props = {
    setFormVisible: (a:string) => void
    setVisitorData: (a: IData) => void
    visitorData: IData
}

const Form = ({setFormVisible, setVisitorData,visitorData}: Props) => {
    const [formData, setFormData] = useState({name:'', purpose:'', coming:'', contact:'', entry:'', idType:'', idNumber:''});
    const handleChange= (e:any) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        setVisitorData({...visitorData, ...formData});
        setFormVisible('false');
    }
  return (
    <div className='container'>
        <h1>Visitor Form</h1>
        <form>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Email address:</label>
            <input type="text" className="form-control" id="name" onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="purpose" className="form-label">Purpose of visit:</label>
            <input type="text" className="form-control" id="purpose" onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="coming" className="form-label">Coming from:</label>
            <input type="text" className="form-control" id="coming" onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact:</label>
            <input type="text" className="form-control" id="contact" onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="entry" className="form-label">Entry Time:</label>
            <input type="datetime-local" className="form-control" id="entry" onChange={handleChange} />
        </div>
        <div className="mb-3">
        <label htmlFor="idType" className="form-label">Id Proof</label>
            <select id="idType" className="form-select mb-3" defaultValue="Select an Id type" onChange={handleChange}>
                <option value="pan">Pan Card</option>
                <option value="driving">Driving License</option>
                <option value="aadhar">Aadhar Card</option>
                <option value="others">Others</option>
            </select>
        <input id="idNumber" type="text" className="form-control"  onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Form