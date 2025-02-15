const Features = () => {
  const { motion } = window.Motion

  const features = [
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock care and monitoring for peace of mind.",
      icon: "🕒",
    },
    {
      title: "Personalized Care Plans",
      description: "Tailored care plans to meet individual needs and preferences.",
      icon: "📋",
    },
    {
      title: "Smart Technology",
      description: "Utilizing advanced technology for improved care and communication.",
      icon: "🖥️",
    },
    {
      title: "Expert Staff",
      description: "Highly trained and compassionate caregivers and medical professionals.",
      icon: "👨‍⚕️",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

