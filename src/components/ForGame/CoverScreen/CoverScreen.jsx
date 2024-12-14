'use client'
import Button from "../Button/Button";
import "./CoverScreen.css";

const CoverScreen = ({ score, onStartGame, duration }) => (
  <div className="flex flex-1 flex-col h-full w-full text-center justify-center items-center">
    <h1 className="title">{score > -1 ? "Игра окончена!" : "Тапай их!"}</h1>
    {score > -1 ? (
      <p style={{fontFamily: 'Klyakson'}} className="description">
        {`Ваш счет ${
          score === 0 ? "0 очков" : `${score} ${score > 1 ? "очков" : "очко"}`
        }`}
      </p>
    ) : (
      <p style={{fontFamily: 'Klyakson'}} className="description px-2">
        Тапайте по предметам в течении {duration}-секунд. 
        В конце игры ваши разаботанные очки превратятся в купоны.
      </p>
    )}
    <div className="action">
      <Button onClick={onStartGame} width={"wide"}>
        {score > -1 ? "Играть еще раз" : "Начать игру"}
      </Button>
    </div>
  </div>
);

export default CoverScreen;
