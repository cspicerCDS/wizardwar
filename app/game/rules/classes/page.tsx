'use client'
import React from 'react'
import NavigationButtons from "@/components/navigation-buttons";
import PageHeader from "@/components/page-header";
const Page = () => {
  const classes = [
    {
      name: "Wasteland Warrior",
      description: "A battle-hardened fighter who excels at combat and survival in the harsh wasteland.",
      features: [
        "Cleave",
        "Weapon Specialization",
        "Combat Mastery",
        "Extra Attack"
      ],
      details: [
        "Cleave: When you down a creature with a melee weapon attack, you can make another attack against a nearby creature.",
        "Weapon Specialization: +1 to hit and damage with a weapon you are proficient with.",
        "Combat Mastery: +1 attack bonus.",
        "Extra Attack: You can attack twice, instead of once, when you take the Attack action on your turn."
      ]
    },
    {
      name: "Scavenger",
      description: "A resourceful survivor skilled at finding useful items and avoiding danger. Expert at stealth and exploration.",
      features: [
        "Expertise Skills",
      ],
      details: [
        "Bushcraft (1 in 6)",
        "Climb (1 in 6)",
        "Sleight of Hand (1 in 6)",
        "Sneak Attack",
        "Stealth (1 in 6)",
        "Tinker (1 in 6)"
      ]
    },
    {
      name: "Tech Adept",
      description: "A master of ancient technology who can understand and repair pre-war devices. Specializes in tech solutions.",
      features: [
        "Tech Understanding",
        "Device Repair",
        "Artifact Knowledge",
        "Tech Improvisation"
      ],
      details: [
        "Tech Understanding: You have advantage on checks and saving throws related to technology.",
        "Device Repair: (1 in 6)",
        "Artifact Knowledge: (1 in 6)",
        "Tech Improvisation: You can create a simple device or tool using common materials and tools."
      ]
    },
    {
      name: "Mystic",
      description: "A wielder of mysterious powers, blending ancient knowledge with supernatural abilities. Masters of the unknown.",
      features: [
        "Black Magic",
        "Ancient Knowledge",
        "White Magic",
        "Ritual Casting"
      ],   
      details: [
        "Black Magic: Spell from the black magic school.",
        "Ancient Knowledge: You have advantage on checks and saving throws related to ancient knowledge.",
        "White Magic: Spell from the white magic school.",
        "Ritual Casting: You can cast rituals with a DC of 15."
      ]
    }
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-2xl">
        {/* <h1 className="text-3xl font-dirt uppercase text-center">Classes</h1> */}
        <PageHeader title="Classes" />
        <div className="grid gap-6 w-full">
          {classes.map((classInfo) => (
            <div key={classInfo.name} className="bg-neutral-900 p-6 rounded-lg">
              <h2 className="text-2xl mb-2 font-bold">{classInfo.name}</h2>
              <p className="text-gray-300 mb-4">{classInfo.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {classInfo.features.map((feature, index) => (
                  <div key={index} className="text-sm bg-neutral-800 p-2 rounded">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="grid mt-4">
                {classInfo.details.map((detail, index) => (
                  <div key={index} className="text-sm bg-neutral-800 p-2 rounded">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-8">      
          <NavigationButtons 
            backPath="/game/rules/species/" 
            backLabel="Species"
            forwardPath="/game/rules/combat/"
            forwardLabel="Combat"
            />
        </div>
      </main>
    </div>
  );
};

export default Page;
