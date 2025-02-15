const Faq = () => {
  const { motion, AnimatePresence } = window.Motion
  const [openIndex, setOpenIndex] = React.useState(null)

  const faqItems = [
    {
      question: "What services does StreamLine offer for geriatric care?",
      answer:
        "StreamLine offers a comprehensive range of services including 24/7 monitoring, personalized care plans, medication management, assistance with daily activities, and coordination with healthcare providers.",
    },
    {
      question: "How does StreamLine use technology in geriatric care?",
      answer:
        "We integrate smart home technology, wearable devices, and AI-powered monitoring systems to enhance the safety and well-being of our clients. This allows for real-time health tracking and quick response to emergencies.",
    },
    {
      question: "What qualifications do StreamLine caregivers have?",
      answer:
        "All our caregivers are certified nursing assistants or have equivalent qualifications. They undergo rigorous background checks and receive ongoing training in geriatric care, emergency response, and the latest care technologies.",
    },
    {
      question: "Can StreamLine accommodate special dietary or medical needs?",
      answer:
        "Absolutely. We create personalized care plans that take into account all special dietary and medical needs. Our staff is trained to handle various medical conditions and can coordinate with nutritionists and healthcare providers.",
    },
    {
      question: "How does StreamLine ensure the safety and security of its clients?",
      answer:
        "We employ a multi-layered approach to safety, including 24/7 monitoring, emergency response systems, regular safety audits of living spaces, and strict protocols for medication management and fall prevention.",
    },
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <motion.button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md"
                onClick={() => toggleQuestion(index)}
                initial={false}
                animate={{ backgroundColor: openIndex === index ? "#EBF8FF" : "#FFFFFF" }}
              >
                <span className="font-semibold">{item.question}</span>
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                >
                  <path d="M0 7 L 20 7 L 10 16" fill="#4A5568" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-4 pt-2 pb-4 rounded-b-lg shadow-md"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FAQ

