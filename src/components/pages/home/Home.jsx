import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { Link } from "react-router-dom";
import CardBanner from "../../partials/CardBanner";
import CardInformation from "../../partials/CardInformation";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <CardBanner
              title={"Welcome to SportsWorld"}
              background={"from-blue-500 to-blue-700"}
              description={
                "Your ultimate destination for sports news and updates"
              }
            />

            <div className="grid md:grid-cols-2 gap-6">
              <CardInformation
                title={"Featured Football News"}
                description={
                  "The latest transfer rumors and match highlights from the world of football."
                }
                to={"/football"}
                btnBgColor={"bg-blue-600"}
                btnBgColorHover={"hover:bg-blue-700"}
                titleColor={"text-blue-700"}
              />
              <CardInformation
                title={"Basketball Updates"}
                description={
                  "Get the latest scores, stats, and news from the NBA and international leagues."
                }
                to={"/basketball"}
                btnBgColor={"bg-orange-600"}
                btnBgColorHover={"hover:bg-orange-700"}
                titleColor={"text-orange-600"}
              />
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Upcoming Events
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>Champions League Final - June 10</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span>NBA Finals Game 7 - June 18</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>World Athletics Championships - July 15</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
