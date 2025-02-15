const Testimonials = () => {
  const { motion } = window.Motion

  const testimonials = [
    {
      quote:  "Sou colega de profissão da doutora. Ela atendeu o meu pai com os cuidados paliativos decorrentes de um CA metastático de cólon. Somos muito gratos pela assistência que ela prestou a ele e a nossa família! Muito obrigado..",
      author: "J D.",
    },
    {
      quote: "Minha imensa gratidão à doutora pelo grande esforço e humanidade maravilhosa que ela dedicou a minha mãezinha.",
      author: "M. S",
    },
    {
      quote: "Dra, a senhora é uma inspiração para mim como Geriatra. Eu fiz residência em clínica médica e pós em geriatria e gerontologia no hospital Albert Einstein. Ainda vou fazer a residência, mas saber mais sobre envelhecimento e tudo que envolvem os idosos é um encanto para mim. Parabéns pelo seu trabalho e dedicação. Que Deus te abençoe grandemente.",
      author: "S L.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

