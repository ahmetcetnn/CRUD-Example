import React from 'react'
import {Link} from 'react-router-dom'
function Form({form,handleChange}) {
  return (
    <div>
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
    </div>
  )
}

export default Form
