import React from "react";
import TopCast from "./TopCast";
import OfficialVideo from "./OfficialVideo";

const OtherDetails = ({ title, data }) => {

    const getIndividualComponent = (item, index)=>{
        switch(title){
            case "Top Cast":
                return <TopCast key={index} {...item}/>
            case "Official Videos":
                return <OfficialVideo key={index} {...item}/>
            case "Similar Movies":
                return <Card key={index} element={item} type="Movies"/>
            case "Similar Tv Shows":
                return <Card key={index} element={item} type="TV Shows"/>
            case "Recommendations":
                return <Similar key={index} {...item}/>
        }
    }

  return (
    <div className="p-6">
      <h4 className="text-2xl">{title}</h4>
      <div className="flex flex-row">
        {
          data && data.length > 0 ? (
            data.map((item, index) => (
              getIndividualComponent(item, index)
            ))) : null
        }
      </div>
    </div>
  );
};

export default OtherDetails;
