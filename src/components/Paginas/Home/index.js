import React from "react";
import Carousel from "../../Carousel";
import { MarginMedium } from "../../UI";
import HomeBgVideo from "../../HomeBgVideo";


export default function Home({ categoryData }){
  
    return (
        <main>
        <HomeBgVideo
          category={categoryData[0].category}
          description={categoryData[0].description}
          url={categoryData[0].url}
          color={categoryData[0].color}
          videos={categoryData[0].videos}
        />
        {categoryData
          .slice(1)
          .filter((data) => data.videos.length > 0)
          .map((data, index) => {
            return (
              <Carousel
                key={index}
                category={data.category}
                url={data.url}
                description={data.description}
                color={data.color}
                videos={data.videos}
              />
            );
          })}
  
        <MarginMedium />
      </main>
    )
}
