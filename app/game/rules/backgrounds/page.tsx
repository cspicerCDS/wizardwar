"use client";

import { Background, backgrounds } from "@/lib/backgrounds";
import PageHeader from "@/components/page-header";
import NavigationButtons from "@/components/navigation-buttons";
import { Badge } from "@/components/ui/badge";

export default function Backgrounds() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center bg-black text-white">
      <section className="flex flex-col gap-8 row-start-2 items-center w-full">
        <PageHeader title="Backgrounds" />
        
        <div className="text-left text-white w-full max-w-4xl">
          {backgrounds.map((background: Background) => (
            <div key={background.id} className="mb-4 bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-white font-bold text-xl">{background.name} 
                {background.species.map((species, index) => (
                    <span key={index} className="font-normal text-lg">&mdash;
                      {species.charAt(0).toUpperCase() + species.slice(1)}
                    </span>
                  ))}</h3>
              <p className="mt-2 mb-4">{background.description}</p>
              <div className="mt-2 mb-4 flex flex-wrap gap-2"> {background.classes.map((className, index) => (
                    <Badge variant="outline" className="text-white mr-1" key={index}>{className}</Badge>
                  ))}
                  </div>
              
              <div className="mt-4">
                <h4 className="font-bold">Proficiencies:</h4>
                <ul className="list-disc list-inside">
                  {background.proficiencies.map((prof, index) => (
                    <li key={index}>{prof}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-bold">Equipment:</h4>
                <ul className="list-disc list-inside">
                  {background.equipment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <NavigationButtons
          backPath="/game/rules/classes/"
          backLabel="Classes"
          forwardPath="/game/rules/mutations/"
          forwardLabel="Mutations"
        />
      </section>
    </div>
  );
}