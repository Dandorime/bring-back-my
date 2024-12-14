'use client'
import React, { useEffect, useState } from "react";
import Constants from "@/utils/constants";
import classnames from "classnames";
import "./Balloon.css";
import Frappuchino from '@/app/_assets/gift/frappuchino.png'

const Balloon = ({ id, color, isActive, onClick }) => {
  const [isPopped, setIsPopped] = useState(false);
  const [isPoppedCell, setIsPoppedCell] = useState(false);

  const classNames = classnames("balloon balloon--moving", {
    "balloon--active": isActive,
    "balloon--popping": isPopped,
  });

  useEffect(() => {
    if (isPopped) {
      setIsPoppedCell(true)
      setTimeout(() =>{
        setIsPoppedCell(false)
      }, 80)
    }
  }, [isPopped])

  const balloonCell = classnames("balloon-cell h-fit w-fit", {
    "balloon-cell--popping": isPoppedCell,
  });

  const clickHandler = (e) => {
    if (!isPopped) {
      setIsPopped(true);
      onClick();

      setTimeout(() => {
        setIsPopped(false);
      }, Constants.randomnessLimits.lower);
    }
  };

  const balloonWidth = Constants.balloonWidth;
  const balloonHeight = balloonWidth * 1.17;
  const threadHeight = Constants.threadHeight;

  return (
    <div className={balloonCell}>
      <div
        onClick={clickHandler}
        className={classNames}
        style={{ color: color }}
      >
        <div className={`w-[${balloonWidth}] h-[${balloonHeight + threadHeight}]`}>
          <img
            alt="props.imageSrc"
            src={Frappuchino.src}
            style={{ width: 'auto', height: '100%' }}
          />
        </div>

        {/* <svg
          className="balloon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}
        >
          <defs>
            <radialGradient
              id={`balloon-gradient-${id}`}
              cx="40%"
              cy="40%"
              r="50%"
              fx="30%"
              fy="30%"
            >
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="currentColor" />
            </radialGradient>
            <filter
              id={`balloon-shadow-${id}`}
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <feMerge>
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect
            x={balloonWidth / 2}
            y={balloonHeight}
            width="1"
            height={threadHeight}
            fill="currentColor"
          />
          <polygon
            points={`${balloonWidth / 2},${balloonHeight - 3} ${balloonWidth / 2 + 8
              },${balloonHeight + 5} ${balloonWidth / 2 - 8},${balloonHeight + 5
              }`}
            fill="currentColor"
          />
          <ellipse
            cx={balloonWidth / 2}
            cy={balloonHeight / 2}
            rx={balloonWidth / 2}
            ry={balloonHeight / 2}
            fill={`url(#balloon-gradient-${id})`}
            filter={`url(#balloon-shadow-${id})`}
          />
        </svg> */}
      </div>
    </div>
  );
};

export default Balloon;
