import React from 'react'

const page = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20  bg-black text-white">
    <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
      
      <h1 className="text-3xl font-dirt text-white uppercase text-center">Species</h1>
      <div className="text-left text-white">
      <div className="species mb-4">
      <h3 id="pure-strain-human" className="text-white font-bold text-xl" >Pure-Strain Human</h3>
<p><strong>Benefits:</strong></p>
<ul className="list-disc list-inside">
<li>+3 points to distribute to any stats (max 18)</li>
<li>No inherent drawbacks</li>
<li>Most adaptable species</li>
</ul>
</div>
<div className="species mb-4">
<h3 id="hybrid" className="text-white font-bold text-xl">Hybrid</h3>
<p><strong>Animal Hybrid Benefits:</strong></p>
<ul className="list-disc list-inside">
<li>+1 Strength</li>
<li>+1 Dexterity</li>
<li>Animal affinity</li>
</ul>
<p><strong>Plant Hybrid Benefits:</strong></p>
<ul className="list-disc list-inside">
<li>+1 Intelligence</li>
<li>+1 Wisdom</li>
<li>Plant affinity</li>
</ul>
</div>
<div className="species mb-4">
<h3 id="psychant" className="text-white font-bold text-xl">Psychant</h3>
<p><strong>Benefits:</strong></p>
<ul className="list-disc list-inside">
<li>Randomly assigned mental ability (unique psychic power)</li>
<li>Each mental ability has specific benefits</li>
<li>Access to psychic abilities others can&#39;t use</li>
</ul>
<p><strong>Drawbacks:</strong></p>
<ul className="list-disc list-inside">
<li>Mental abilities often come with drawbacks specific to the power</li>
</ul>
</div>
<div className="species mb-4">
<h3 id="mutant" className="text-white font-bold text-xl">Mutant</h3>
<p><strong>Benefits:</strong></p>
<ul className="list-disc list-inside">
<li>1-3 random mutations</li>
<li>Each mutation provides unique abilities</li>
<li>Potential for powerful combinations</li>
</ul>
<p><strong>Drawbacks:</strong></p>
<ul className="list-disc list-inside">
<li>Mutations often come with drawbacks</li>
<li>Unpredictable abilities (random)</li>
</ul>
</div>
<div className="species mb-4   ">
<h3 id="zombo" className="text-white font-bold text-xl">Zombo</h3>
<p><strong>Benefits:</strong></p>
<ul className="list-disc list-inside">
<li>+2 Constitution</li>
<li>+2 Hit Points</li>
</ul>
<p><strong>Drawbacks:</strong></p>
<ul className="list-disc list-inside">
<li>Undead nature may affect social interactions</li>
<li>May have limitations with healing methods
markdown.</li>
</ul>
</div>
</div>
    </main>
    </div>
  )
}

export default page
