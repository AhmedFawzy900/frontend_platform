import React from 'react'
import './allteachers.css'
import { Facebook, Twitter, YouTube } from '@mui/icons-material'
import img from '../../../../images/avatar-01.png'
import img1 from "../../../../images/mentor1.jpg";
import img2 from "../../../../images/mentor2.jpg";
import img3 from "../../../../images/mentor3.jpg";
import img4 from "../../../../images/mentor4.jpg";
const mentors = [
  {
    name: "ايمان محمد",
    role: "خبير تطوير الويب",
    courses: "5 دورات",
    image: img1,
  },
  {
    name: "سارة يوسف",
    role: "مدربة تصميم UX/UI",
    courses: "8 دورات",
    image: img2,
  },
  {
    name: "ليلى حسن",
    role: "مدربة التسويق الرقمي",
    courses: "7 دورات",
    image: img4,
  },{
    name: "سارة يوسف",
    role: "مدربة تصميم UX/UI",
    courses: "8 دورات",
    image: img2,
  },
  {
    name: "محمد علي",
    role: "محاضر علوم البيانات",
    courses: "6 دورات",
    image: img3,
  },
  {
    name: "ايمان محمد",
    role: "خبير تطوير الويب",
    courses: "5 دورات",
    image: img1,
  }
];

const AllTeachers = () => {
  return (
    <div class="teachers">
    <div class="team" id="team">
        <div class="container">
        {mentors.map((mentor, index) => ( 
          <div class="box">
            <div class="data">
              <div class="social">
                <a href="#">
                  <Facebook />
                </a>
                <a href="#">
                  <Twitter />
                </a>
                <a href="#">
                  <YouTube />
                </a>
              </div>
              <img src={mentor.image} alt="" />
            </div>
            <div class="info">
              <h3>{mentor.name}</h3>
              <p>{mentor.role}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div class="spikes"></div>
    </div>
  )
}

export default AllTeachers
