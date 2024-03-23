import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  function clickHandler() {
    setData([...data, {
      nameinput: name,
      emailinput: email
    }])
    setName("");
    setEmail("");
  }

  function removeHandler(index) {
    let tempArr = data;
    tempArr.splice(index, 1);
    setData([...tempArr]);

  }

  return (
    <>
      <div className='container'>
        <div className='center'>
          <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" />
          <TextField id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
          <Button variant="contained" color="success" onClick={clickHandler}>
            <AddCircleIcon></AddCircleIcon>
          </Button>
        </div>
        <div className='ui'>
          <div className='ui-list'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {data.map((item, index) => {
            return (
              <div key={index} className='ui-list'>
                <p>{item.nameinput}</p>
                <p>{item.emailinput}</p>
                <button onClick={()=>removeHandler(index)}>
                  <DeleteIcon></DeleteIcon>
                </button>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )



}

export default App
