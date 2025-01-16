import { Hero } from "../components/Hero/Hero";
import { NewsCard } from "../components/NewsCard/NewsCard";
import { NewsContainer } from "../components/NewsContainer/NewsContainer";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { useGet } from "../hooks/useGet";

export function FrontPage() {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/news"
  );
  if (error) {
    return <p>Error, please try again later</p>;
  }
  console.log("newsdata", data);

  return (
    <>
      <Hero img="src/assets/images/hero1.png" />
      <SectionTitle title="NYHEDER" />
      <NewsContainer>
        {isLoading ? (
                    <div>Loading...</div>
        ) : (
            data?.items.map((item) => {
            return (
              <NewsCard
                key={item.title}
                // {item.image && <img src={item.image} alt={item.title} />}
                imgSrc={item.image}
                title={item.title}
                text={item.teaser}
                id={item.id}
              />
            );
          })
        )}
      </NewsContainer>
    </>
  );
}
