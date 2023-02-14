import {useState} from "react"
import './App.css';
import {Routes,Link,Route} from 'react-router-dom'
import Bilgiler from './Bilgiler'
import Form from "./Form";

function App() {
const [form,setForm]=useState({isim:'', sehir:'', dogum:'', renk:'', adres:''});

const handleChange=(event) =>{
  setForm({...form,[event.target.name]:event.target.value})
  console.log(form)
}

  return (
    <div className="App">
      <h2>Bilgilerini Giriniz</h2>
     
      
      <Routes>
         <Route path="/" exact ></Route>
         <Route path="/bilgiler" element={<Bilgiler form={form}/>} />

      </Routes>
    </div>
  );
}

export default App;
