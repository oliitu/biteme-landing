import { motion } from "framer-motion"; 
export default function Cookie({cookie}) {


    const {name,image,description,price}=cookie

    return (
        
      <motion.div whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-radial min-h-59 from-amber-100 from-40% to-[#fff2c3] rounded-xl shadow hover:drop-shadow-xl
                py-2 md:py-6 px-2 md:px-4 text-center flex flex-col justify-between
                 md:min-h-[380px]"> 
      <motion.img
        whileHover={{ rotate: 40 }}
        transition={{ duration: 0.3 }}
        src={`/img/${image}.png`}
        alt="Cookie"
        className="drop-shadow-lg mt-2 hover:drop-shadow-xl rounded-lg h-18 xs:h-24 sm:h-28 md:h-36 lg:h-48 mx-auto object-contain mb-1"
      />
      <h3 className="font-pacifico text-orange-950 text-lg sm:text-xl md:text-2xl mb-1">
    {name}
  </h3>
  <p className="text-xs sm:text-sm md:text-base text-orange-950 font-poppins mb-2">
    {description}
  </p>
  <p className="font-poppins text-[#1c0c07] font-bold text-sm md:text-lg">
  ${price}
</p>
</motion.div>
    ) }