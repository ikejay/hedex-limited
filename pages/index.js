import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { AnimatedTitle } from "../components/animatedtitles";
import "../components/activity"
import Activity from '../components/activity'
import 'tailwindcss/tailwind.css'




const text = "Do you need help with CONSTRUCTION ?"
const text1 = "What do you need help with ?"

export default function Home() {

  const [inView, updateInView] = useState(false);
  const [upperView, updateupperView] = useState(false);

  useEffect((item) => {
    let timeout = setTimeout(() => {
      updateInView(!inView);
    }, 3000);
  });

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     updateupperView(!upperView);
  //   }, 3000, (""));
  // });


  const mRotate = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { ease: "circular", duration: 2, repeat: Infinity } }
  };

  const activities = [{ key: 1, heading: "Architectural Work", info: "dfkamfk;p,mlkmlkmlkmlkmlkmkllkjhkjhbkjhgkjgkkoimlslb", color: "gray" },
  { key: 2, heading: "Architectural Work", info: "mallam", color: "blue" },
  { key: 3, heading: "Architectural Work", info: "O", color: "gray" }]

  return (
    <div class="md:block">
      <div class="flex h-96 md:h-screen bg-mBackground bg-cover lg:bg-cover md:bg-cover 2xl:w-full items-center justify-center">
          <div class="block items-center justify-center">
            <div class="sm:text-2xl sm:align-middle lg:text-6xl md:text-4xl items-center text-center">
              <AnimatedTitle currentInView={inView} type={'h3'}>
                {text}
              </AnimatedTitle>
            </div>
        </div>
      </div>
      <div class="md:flex md:flex-row">
        {activities.map((item) => (
          <Activity key={item.key} heading={item.heading} info={item.info} color={item.color} />
        ))}
      </div>
      <div class="h-screen bg-gray-300">
        <div class="flex flex-row w-full bg-yellow-100">
          <div>
            <h3>fjakldlkamf</h3>
            <p>dlkf;laldm;aldmf;a dmf;a mafld;a fmla;e fmla; d</p>
          </div>
          <div>
            <h3>JDFIOADIOAIDD</h3>
            <p>jdsifoa dioai a dnaofi a odifnao afiodain a idao ao dao ao d uoei90p aidoi ikdkd</p>
          </div>
        </div>
      </div>
    </div>
  )
}