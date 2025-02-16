const Hero = () => {
  const { motion } = window.Motion
  

  return (

    <section className="w-full pt-24 pb-12 md:py-24 lg:py-32 xl:py-38 bg-gradient-to-r from-blue-50 to-purple-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 py-2"
          >
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-gray-800 md:text-6xl xl:text-7xl">
              Geriatra & Clínica Médica
              </h1>
              <p className="mt-6 text-lg text-gray-600 md:text-xl lg:text-2xl">
              Minha proposta é um cuidado centrado na pessoa, conhecendo cada paciente na sua particularidade e integralidade, conhecendo sua saúde como um todo, sua personalidade e valores de vida, elaborando assim um plano de cuidados e tratamento individual.
              </p>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Agendar Consulta
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/30 rounded-2xl transform rotate-2" />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-100/20 to-purple-100/30 rounded-2xl transform -rotate-2" />
            <img
              src="./images/medica2.png?height=200&width=400"
              alt="Caring medical professional with elderly patient"
        className="relative z-10 w-full h-[600px] rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}



