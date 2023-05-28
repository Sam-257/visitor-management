import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Camera from './Camera';
import Form from './Form';

type Props = {}

const Parent = (props: Props) => {
  const navigate = useNavigate();
    const [formVisible, setFormVisible] = useState('true');
    const [visitorData, setVisitorData] = useState({name:'', purpose:'', coming:'', contact:'', entry:'', idType:'', idNumber:'', image:''})
    useEffect(() => {
        if(formVisible === ''){
            axios.post('http://localhost:8080/visitors', visitorData)
            .then((res) => navigate('/table'))
            .catch(err => alert('Invalid id'));
        }
    }, [formVisible]);
  return (
    <div>
        {formVisible==='true' ? <Form visitorData={visitorData} setFormVisible={setFormVisible} setVisitorData={setVisitorData} /> : <Camera visitorData={visitorData} setFormVisible={setFormVisible} setVisitorData={setVisitorData} />}
    </div>
  )
}

export default Parent