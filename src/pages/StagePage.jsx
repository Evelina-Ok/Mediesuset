import { Hero } from "../components/Hero/Hero";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { useGet } from "../hooks/useGet";
import { StageCard } from "../components/StageCard/StageCard";
import { useState } from "react";

export function StagePage() {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/events"
  );
  if (error) {
    return <p>Error, please try again later</p>;
  }
  console.log("Stages", data);

  const [selectedStage, setSelectedStage] = useState(null);

  
// function setColor(event)
// if (event color = 'Rød scene')
//   return #346174

  return (
    <>
      <Hero img="src/assets/images/hero1.png" />
      <SectionTitle title="LINE UP" />

      <div>
        <button onClick={() => setSelectedStage(null)}>A-Å</button>
        <button onClick={() => setSelectedStage('Rød scene')}>RØD SCENE</button>
        <button onClick={() => setSelectedStage('Blå scene')}>BLÅ SCENE</button>
        <button onClick={() => setSelectedStage('Grøn scene')}>GRØN SCENE</button>
        <button onClick={() => setSelectedStage('Lilla scene')}>LILLA SCENE</button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.items.map((item) =>
          (selectedStage === null || item.stage_name === selectedStage) && 
          // item.stage_name == selectedStage &&
           
            
              <StageCard
                key={item.id}
                imgSrc={item.image}
                title={item.title}
                text={item.teaser}
                id={item.id}
              />
          
          
        )
      )}
    </>
  );
}
