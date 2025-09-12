"use client";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { usePathname, notFound } from "next/navigation";
import EventData from "@/app/events/EventData";


const Details = () => {
  const slug = decodeURIComponent(
    usePathname().replace("/events/", "")
  ).toLowerCase();
  const event = EventData.find((x) => x.name.toLowerCase() === slug);
  if (!event) return notFound();

  return (
    <>
      <Navbar />
      <div className="bg-custom-gradient min-h-screen py-40 flex flex-col sm: items-center xl:flex-row gap-12 px-6 md:px-40">
        <img
          src={event.poster}
          className="w-[25rem] xl:h-[38rem]"
          alt={"poster"}
        />
        <div className="border-white border-l-4 h-[30rem] hidden xl:block"></div>
        <div className="border-white border-b-4 w-[20rem] block xl:hidden"></div>
        <div className="text-white text-xl flex flex-col gap-4 px-10 md:px-32 xl:px-0">
          <div>
            <Title text={"Description"} />
            <Content text={event.longDescription} />
          </div>
          <div>
            <Title text={"Date and Time"} />
            <div className="flex flex-row gap-2">
              <Content text={event.dateAndTime.split("|")[0]} />
              <Content text={"|"} />
              <Content text={event.dateAndTime.split("|")[1]} />
            </div>
          </div>
          <div>
            <Title text={"Team Size"} />
            <Content text={event.teamSize} />
          </div>
          <div>
            <Title text={"Venue"} />
            <Content text={event.venue} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Title = ({ text }) => {
  return <div className="font-[600] underline">{text}:</div>;
};

const Content = ({ text }) => {
  return <div>{text}</div>;
};

export default Details;
