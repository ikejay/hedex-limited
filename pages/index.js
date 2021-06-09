import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { AnimatedTitle } from "../components/animatedtitles";
import "../components/activity"
import Activity from '../components/activity'
import 'tailwindcss/tailwind.css'
import Duties from '../components/duties';
import Button from '@material-ui/core/Button';


import { FaPenAlt, FaPencilAlt, FaDraftingCompass, FaRuler, FaPencilRuler, FaVectorSquare } from 'react-icons/fa'
import { FcPlanner } from 'react-icons/fc'




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
      <div class="h-auto bg-gray-300">
        <div class="h-full flex flex-row flex-wrap items-center justify-center bg-yellow-100">
          <div class="flex bg-red-500 md:w-4/5 w-full lg:w-1/2 h-full justify-center ">
            <div class="w-72 py-12">
              <div>
                <h3 class=" font-bold text-4xl text-left">10+ YEARS OF EXPERIENCE</h3>
              </div>
              <hr class="w-2/3" style={{ height: "6px", border: "none", borderTop: "3px solid white" }} />
              <p class>
                Zombie ipsum reversus ab viral inferno,
                Summus brains sit​​, morbo vel maleficia?
                undead survivor dictum mauris. Hi mindless mortuis soulless creaturas
                , imo evil stalking monstra adventus resi dentevil vultus comedat
              </p>
            </div>
          </div>
          <div class="flex bg-green-100 w-1/2 h-full justify-center">
            <div class="w-3/5 self-center ">
              <p>
                Lorem Ipsum proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                Duis sed odio sit amet nvvvibh vulputate cursus a sit amet mauris.
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
                a ornare odio. Sed non mauris vitae erat consequat. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Mauris in erat justo. Nullam ac urna eu felis dapibus elit set condimentum
                sit amet a auguecondimentum fermentum nunc.
              </p>
              <Button variant="contained" color="gray">Read more</Button>
            </div>
          </div>
        </div>
        <div class="bg-red-200 justify-center flex w-full p-20">
          <div class="flex flex-row flex-wrap w-3/5 bg-white">
            <Duties component={<FaDraftingCompass size={120} color="gray" />} />
            <Duties component={<FaPencilRuler size={120} color="gray" />} />
            <Duties component={<FaVectorSquare size={120} color="gray" />} />
            <Duties component={<FaVectorSquare size={120} color="gray" />} />
            <Duties component={<FaVectorSquare size={120} color="gray" />} />
            <Duties component={<FaVectorSquare size={120} color="gray" />} />
            <input type="button" name="load_more" title="See more" />
          </div>
        </div>
      </div>
    </div>
  )
}