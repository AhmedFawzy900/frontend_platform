import React from 'react'
import ArabicNavbar from '../../Components/user/nav/ArabicNavbar'
import Footer from '../../Components/user/footer/Footer'
import AllTeachers from '../../Components/user/teachers/all_teachers/AllTeachers'

const Teachers = () => {
  return (
    <div>
      <ArabicNavbar />
      {/* content */}
      <AllTeachers />
      {/* content */}
      <Footer/>
    </div>
  )
}

export default Teachers
