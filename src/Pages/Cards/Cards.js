import React from "react";
import "./Cards.css";
// import { cardsData } from "../Dashoard/Data";

import { cardsData } from "../Dashoard/Data";
import Chart from "react-apexcharts";

const Cards = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <>
      {/* <h1>hun</h1> */}
      <div className="Cards">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              {" "}
              <Chart options={data.options} series={data.series} type="area" />
              
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              {" "}
              <Chart options={data.options} series={data.series} type="area" />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              {" "}
              <Chart options={data.options} series={data.series} type="area" />
            </div>
          </div>
        </div>
        {/* {
          cardsData.map((card, id) =>{

            return(
              <div className="parentContainer " key={id}>
                <p
                 title={card.title}
                 color={card.color}
                 barValue={card.barValue}
                 value={card.value}
                 png={card.png}
                 series={card.series}
                />
              </div>
            )
          })
        } */}
      </div>
    </>

    // <div className="Cards">
    //   {cardsData.map((card, id) => {
    //     return (
    //       <div className="parentContainer" key={id}>
    //         <Card
    //           title={card.title}
    //           color={card.color}
    //           barValue={card.barValue}
    //           value={card.value}
    //           png={card.png}
    //           series={card.series}
    //         />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Cards;
