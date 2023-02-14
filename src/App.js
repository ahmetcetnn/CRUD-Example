import {useState} from "react"
import './App.css';
import {Routes,Link,Route} from 'react-router-dom'
import Bilgiler from './Bilgiler'


function App() {
const [form,setForm]=useState({isim:'', sehir:'', dogum:'', renk:'', adres:''});

const handleChange=(event) =>{
  setForm({...form,[event.target.name]:event.target.value})
  console.log(form)
}

  return (
    <div className="App">
      <h2>Bilgilerini Giriniz</h2>
      <form>
        <input type="text" name="isim" value={form.isim} onChange={handleChange} placeholder='İsim Soyisim Giriniz'/>
        <select name="sehir" value={form.sehir} onChange={handleChange}>
          <option value="">Lütfen Şehir Seçiniz</option>
          <option value="Kilis">Kilis</option>
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>

        </select>
        <input type="date" name="dogum" value={form.dogum} onChange={handleChange}/>
        <input type="color" name="renk" value={form.renk} onChange={handleChange}/>
        <textarea name="adres" placeholder='Adresinizi Giriniz' value={form.adres} onChange={handleChange}/>
        <Link to ="/bilgiler" ><button>Gönder</button></Link>
      </form>
      
      <Routes>
         <Route path="/" exact ></Route>
         <Route path="/bilgiler" element={<Bilgiler form={form}/>} />

      </Routes>
    </div>
  );
}

export default App;
