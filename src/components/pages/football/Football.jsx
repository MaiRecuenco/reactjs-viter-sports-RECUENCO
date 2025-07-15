import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import CardBanner from "../../partials/CardBanner";
import CardLeague from "../../partials/CardLeague";
import CardPreview from "../../partials/CardPreview";

const Football = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <CardBanner
              title={"Football News"}
              background={"from-green-600 to-green-800"}
              description={"All the latest from the world of football"}
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <CardPreview
                image={"./images/football-1.webp"}
                alt={"Football match"}
                title={"Champions League Final Preview"}
                description={
                  "The two best teams in Europe face off in what promises to be an epic clash."
                }
                bgColor={"bg-green-600"}
                bgColorHover={"hover:bg-green-700"}
              />
              <CardPreview
                image={"./images/football-2.webp"}
                alt={"Football transfer"}
                title={"Summer Transfer Window Heats Up"}
                description={
                  "Top clubs are spending big as the transfer market reaches its peak."
                }
                bgColor={"bg-green-600"}
                bgColorHover={"hover:bg-green-700"}
              />
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Top Leagues
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <CardLeague
                  title={"Premier League"}
                  country={"England"}
                  titleColor={"text-blue-700"}
                />
                <CardLeague
                  title={"La Liga"}
                  country={"Spain"}
                  titleColor={"text-blue-500"}
                />
                <CardLeague
                  title={"Serie A"}
                  country={"Italy"}
                  titleColor={"text-black"}
                />
                <CardLeague
                  title={"Bundesliga"}
                  country={"Germany"}
                  titleColor={"text-red-600"}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Football;
