const Contact = () => {
  const { motion } = window.Motion
  const [formStatus, setFormStatus] = React.useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formJson),
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus("success")
        form.reset()
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      console.error("Error:", error)
      setFormStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Nome 
                </label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
                type="submit"
              >
                Enviar Mensagem
              </motion.button>
              {formStatus === "success" && <p className="text-green-500 mt-2">Message sent successfully!</p>}
              {formStatus === "error" && <p className="text-red-500 mt-2">Error sending message. Please try again.</p>}
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4323.478901949618!2d-53.79805522445984!3d-29.690664775103595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cbad5ea12305%3A0xcb886d2fa96072e8!2sR.%20Guilherme%20Cassel%20Sobrinho%2C%2004%20-%20Nossa%20Sra.%20das%20Dores%2C%20Santa%20Maria%20-%20RS%2C%2097050-270!5e1!3m2!1spt-BR!2sbr!4v1739548353924!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

