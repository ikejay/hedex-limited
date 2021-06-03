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

  const activities = [{ key: 1, heading: "Architectural Work", info: "odasijgdoaid bdian oaidnoa oian do oaid avo ia doai avoi oakdjhaiodhjogaid ooaidvhnoa oaidnaodinvoa ovaidoiadk oabdoa dolndoainoa dahinodianvidoafhdklkalddmkmalkdnaodlikvndklakdndvolakdnvaldk dvlkd alv dl adlv ald, l adl al  dkdlkivhoiaHDOVIHDIVAODIVAIODIVIAODINVAODINVIAO", color: "gray" },
  { key: 2, heading: "Architectural Work", info: "dahinodianvidoaivhoiaHDOVIHDIVAODIVAIODIVIAODINVAODINVIAO", color: "blue" },
  { key: 3, heading: "Architectural Work", info: "dahinodianvidoaivhoiaHDOVIHDIVAODIVAIODIVIAODINVAODINVIAO", color: "gray" }]

  return (
    <div class="flex-row">
      {/* <div class="flex h-screen bg-mBackground bg-cover w-screen relative">
          <div style={{ display: "block" }}>
            <div style={{ fontSize: "2vw" }}>
              <AnimatedTitle currentInView={inView} type={'h3'}>
                {text}
              </AnimatedTitle>
            </div>
        </div>
      </div> */}
      <div class="md:h-52 block md:flex">
        {activities.map((item) => (
          <Activity key={item.key} heading={item.heading} info={item.info} color={item.color} />
        ))}
      </div>
    </div>
  )
}