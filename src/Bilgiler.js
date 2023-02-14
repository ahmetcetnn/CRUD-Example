import React from 'react'

function Bilgiler({form}) {
  return (
    <div>
      <h2>İsim Soyisim:{form.isim} </h2>
      <p>Şehir:{form.sehir}</p>
      <p>Doğum Tarihi:{form.dogum}</p>
      <p>Favori Renk:{form.renk}</p>
      <p>Adres: {form.adres}</p>
    </div>
  )
}

export default Bilgiler
