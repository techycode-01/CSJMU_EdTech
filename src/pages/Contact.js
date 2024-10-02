import React from "react"

import Footer from "../components/common/Footer"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactForm"
import ReviewSlider from "../components/common/ReviewSlider"

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-between w-11/12 gap-10 mx-auto mt-20 text-white max-w-maxContent lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-between w-11/12 gap-8 mx-auto my-20 text-white max-w-maxContent bg-richblack-900">
        {/* Reviws from Other Learner */}
        <h1 className="mt-8 text-4xl font-semibold text-center">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default Contact