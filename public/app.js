const App = () => {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </React.Fragment>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById("root"))
  