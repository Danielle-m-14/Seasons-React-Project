import "./SeasonDisplay.css";
import React from 'react';

const seasonConfig = {
  summer: {
    text: '"A life without love is like a year without summer" -Swedish Proverb',
    iconName: "sun"
  },
  winter: {
    text: '"To appreciate the beauty of a snowflake it is necessary to stand out in the cold." - Aristotle',
    iconName: "snowflake"
  },
  spring: {
    text: '"Blossom by blossom the spring begins." -Algernon Charles Swinburne',
    iconName: "bug"
  },
  fall: {
    text: '"Autumn carries more gold in its pocket than all the other seasons." -Jim Bishop',
    iconName: "leaf"
  }
};

const getSeason = (lat, month) => {
   if (month > 1 && month < 5) {
    return lat > 0 ? 'spring' : 'fall';
   }
   if (month > 4 && month < 8) {
     return lat > 0 ? 'summer' : 'winter';
   }
   if (month > 7 && month < 11) {
     return lat > 0 ? 'fall' : 'spring';
   }
   else {  
     return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; 

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />  
      <h1> {text} </h1>
      <i className={`icon-right massive ${iconName} icon`} />  
    </div>
  );
  };

export default SeasonDisplay;