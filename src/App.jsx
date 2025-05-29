import { useState } from 'react'
import './App.css'
import Cookie from './components/Cookie'
import Header from './components/Header'
import{db} from './data/db'
import { motion } from "framer-motion";

function App() {
  const[data,]=useState(db)
  return (
    <>
    <Header/>
    <main className="max-w-6xl mx-auto ">
      <section className="pt-12 sm:pt-16 pb-6 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">




    <motion.div whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-amber-100 rounded-xl shadow-md hover:shadow-lg p-4 sm:p-6">
      <img
        src="/img/ingredientes.png"
        className=" h-36 sm:h-48 md:h-60 hover:scale-105 transition-transform duration-300 mx-auto mb-4"
        alt="ingredientes"
      />
      <h3 className="text-lg sm:text-xl text-orange-950 font-poppins mb-2">
        Ingredientes Naturales
      </h3>
      <p className="text-sm sm:text-base font-poppins text-yellow-950">
        Nuestras cookies no contienen ningún tipo de conservantes o aditivos artificiales.
      </p>
    </motion.div>





    <motion.div whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-amber-100 rounded-xl shadow-md p-4 sm:p-6">
      <img
        src="/img/receta.png"
        className="drop-shadow-lg hover:drop-shadow-sm h-36 sm:h-48 md:h-60 hover:scale-105 transition-transform duration-300 mx-auto mb-4"
        alt="receta secreta"
      />
      <h3 className="text-lg sm:text-xl text-orange-950 font-poppins mb-2">
        Recetas Verificadas
      </h3>
      <p className="text-xs sm:text-base font-poppins text-yellow-950">
        Usamos las mejores recetas, aprobadas por todos nuestros clientes.
      </p>
    </motion.div>





    <motion.div whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-amber-100 rounded-xl shadow-md p-4 sm:p-6">
      <img
        src="/img/chef.png"
        className="drop-shadow-lg hover:drop-shadow-sm h-36 sm:h-48 md:h-60 hover:scale-105 transition-transform duration-300 mx-auto mb-4"
        alt="chef"
      />
      <h3 className="text-lg sm:text-xl text-orange-950 font-poppins mb-2">
        Hechas por Profesionales
      </h3>
      <p className="text-xs sm:text-base font-poppins text-yellow-950">
        Tenemos experiencia horneando cookies desde hace más de 5 años.
      </p>
    </motion.div>
  </div>
</section>
<div className=" flex items-center justify-center">
    <motion.a whileTap={{ scale: 0.95 }} href="https://homebtm.netlify.app/" target="_blank" className="text-white  bg-[#51290e] hover:bg-yellow-950 mt-4 rounded-full text-lg px-5 p-2.5 text-center" >Quiero mis cookies!</motion.a>
  </div>




  <section id="productos" className="align-items-center pt-10 lg:pt-16 pb-6 lg:pb-16 px-6">
  <div className="max-w-6xl mx-auto mt-6 text-center mb-10">
    <h2 className="text-3xl md:text-4xl lg:text-6xl font-pacifico text-orange-950 mb-4">Nuestras Cookies</h2>
    <p className="text-lg font-poppins text-orange-950">Elegí tu favorita y llevate 5 por $4000</p>
  </div>



  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-stretch">
  {data.map((cookie) => (
    <div className="h-full">
      <Cookie key={cookie.id} cookie={cookie} />
    </div>
  ))}
</div>

</section>

  </main>
  <footer className="w-full bg-[#51290e] mt-10 pt-10 px-4">
  <div className="text-center">
    <p className="text-white font-poppins text-lg">Nuestras redes sociales</p>

    <div className="py-4 flex items-center justify-center gap-6">
      <motion.a
        whileTap={{ scale: 0.95 }}
        href="https://www.instagram.com/biteme_vcp"
        target="_blank"
      >
        <img src="/img/ig.png" className="h-10 sm:h-12" alt="Instagram" />
      </motion.a>

      <motion.a
        whileTap={{ scale: 0.95 }}
        href="https://www.tiktok.com/@biteme.vcp"
        target="_blank"
      >
        <img src="/img/tt.png" className="h-10 sm:h-12" alt="TikTok" />
      </motion.a>
    </div>

    <p className="font-poppins text-sm sm:text-base text-white pb-6">
      Iturrusgarai, Cisneros y Espósito
    </p>
  </div>
</footer>
  </>
  
  )
}

export default App
