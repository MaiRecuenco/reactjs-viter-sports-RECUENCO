import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import CardBanner from "../../partials/CardBanner";
import CardPreview from "../../partials/CardPreview";
import CardStanding from "../../partials/CardStanding";

const Basketball = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <CardBanner
              title={"Basketball Updates"}
              background={"from-orange-600 to-red-700"}
              description={
                "Court-side coverage of NBA and international basketball"
              }
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <CardPreview
                image={
                  "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                }
                alt={"NBA game"}
                title={"NBA Finals: Game 7 Preview"}
                description={
                  "The championship comes down to one final game between two historic rivals."
                }
                bgColor={"bg-orange-600"}
                bgColorHover={"hover:bg-orange-700"}
              />
              <CardPreview
                image={
                  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                }
                alt={"Basketball player"}
                title={"Rising Stars of the Season"}
                description={
                  "Meet the young players who are taking the league by storm this year."
                }
                bgColor={"bg-orange-600"}
                bgColorHover={"hover:bg-orange-700"}
              />
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                NBA Standings
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 px-4 text-left">Team</th>
                      <th className="py-2 px-4 text-center">W</th>
                      <th className="py-2 px-4 text-center">L</th>
                      <th className="py-2 px-4 text-center">PCT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CardStanding
                      teamName={"Boston Celtics"}
                      win={"57"}
                      lose={"25"}
                      pct={".695"}
                    />
                    <CardStanding
                      teamName={"Milwaukee Bucks"}
                      win={"58"}
                      lose={"24"}
                      pct={".707"}
                    />
                    <CardStanding
                      teamName={"Denver Nuggets"}
                      win={"53"}
                      lose={"29"}
                      pct={".646"}
                    />
                    <CardStanding
                      teamName={"Phoenix Suns"}
                      win={"45"}
                      lose={"37"}
                      pct={".549"}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Basketball;
