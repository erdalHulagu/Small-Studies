import React from 'react'
import northernLights from "../../assets/img/image1.jpg";

const Image = () => {
  return (
    <div>
        {/* Externel url veya CDN */}
        <img src="https://images.unsplash.com/photo-1672572305595-c0a319dc09f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" width="300"/>

        {/* Statik yöntemde görüntüler public klasörü içinde aranır */}
        <img src="assets/img/car.jpg" alt="" width="300"/>

        {/* Import ve require yönteminde dosyalar src içinde olmalıdır */}
        <img src={northernLights} alt="" width="300"/>

        <img src={require("../../assets/img/image2.jpg")} alt="" width="300"/>

    </div>
  )
}

export default Image

