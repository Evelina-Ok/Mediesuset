import { Hero } from "../components/Hero/Hero";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { useGet } from "../hooks/useGet";
import { StageCard } from "../components/StageCard/StageCard";

export function StagePage() {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/stages"
  );
  if (error) {
    return <p>Error, please try again later</p>;
  }
  console.log("Stages", data);

  return (
    <>
      <Hero img="src/assets/images/hero1.png" />
      <SectionTitle title="LINE UP" />
        {isLoading ? (
                    <div>Loading...</div>
        ) : (
            data?.items.map((item) => {
            return (
              <StageCard
                key={item.title}
                imgSrc={item.image}
                title={item.title}
                text={item.teaser}
                id={item.id}
              />
            );
          })
        )}
    </>
  );
}