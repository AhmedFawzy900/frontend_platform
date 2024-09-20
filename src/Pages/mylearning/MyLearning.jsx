import React from 'react'
import ArabicNavbar from '../../Components/user/nav/ArabicNavbar'
import StarterSection from '../../Components/user/mylearning/starter_section/StarterSection'
import MyCourses from '../../Components/user/mylearning/courses/MyCourses'
import Footer from '../../Components/user/footer/Footer'


const MyLearning = () => {
  return (
    <>
      <ArabicNavbar />
      {/* content */}
      <StarterSection />
      <MyCourses />
      {/* end content */}
      <Footer />
    </>
  )
}

export default MyLearning
