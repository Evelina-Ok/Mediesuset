import { Hero } from "../components/Hero/Hero";
import { useGet } from "../hooks/useGet";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";

import { NavLink } from "react-router-dom"


export function TicketPage() {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/tickets"
  );
  if (error) {
    return <p>Error, please try again later</p>;
  }
  console.log("ticket data", data);

  return (
    <>
      <Hero img="../assets/images/hero2.png" />
      <SectionTitle title="BILLETTER" />
      <h2>PARTOUT BILLET - ALLE DAGE</h2>
    {data?.items?.filter((item) => item.type === "partout").map((ticket) => {
        return (
            <div>
                <p>{ticket.name}</p>
                <p>{ticket.price}</p>

                <NavLink to={`/ticket/${ticket.id}`}>KØB BILLET</NavLink>
            </div>
        )
    })}

    <h2>ENKELTBILLETTER</h2>
    {data?.items?.filter((item) => item.type === "single").map((ticket) => {
        return (
            <div>
                <p>{ticket.name}</p>
                <p>{ticket.price}</p>

                <NavLink to={`/ticket/${ticket.id}`}>KØB BILLET</NavLink>
            </div>
        )
    })}
    </>
  );
}
