import React from "react";

const CardInfo = props => {
  const { playerInfo } = props;
  console.log(props);

  return (
    <div className="players-box">
      {playerInfo.map((player, index) => {
        return (
          <div className="players" key={index}>
            <div className="card-info">
              <p className="name">{player.name} </p>
              <p>Country: {player.country}</p>

              <p>Searches: {player.searches}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CardInfo;
