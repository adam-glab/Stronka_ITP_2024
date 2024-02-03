import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// @ts-ignore
import gear_1 from "../images/gears/d1.svg";
// @ts-ignore
import gear_2 from "../images/gears/d2.svg";
// @ts-ignore
import gear_3 from "../images/gears/d3.svg";
// @ts-ignore
import gear_4 from "../images/gears/d4.svg";
// @ts-ignore
import gear_5 from "../images/gears/d5.svg";
// @ts-ignore
import gear_6 from "../images/gears/d6.svg";
// @ts-ignore
import gear_7 from "../images/gears/d7.svg";
// @ts-ignore
import gear_8 from "../images/gears/d8.svg";
// @ts-ignore
import gear_9 from "../images/gears/d9.svg";
// @ts-ignore
import gear_10 from "../images/gears/d10.svg";
// @ts-ignore
import gear_11 from "../images/gears/d11.svg";
// @ts-ignore
import gear_12 from "../images/gears/d12.svg";
// import gear_13 from "../images/gears/d13.svg";
// import gear_14 from "../images/gears/d14.svg";
// import gear_15 from "../images/gears/d15.svg";
// import gear_16 from "../images/gears/d16.svg";
// import gear_17 from "../images/gears/d17.svg";
// import gear_18 from "../images/gears/d18.svg";
// import gear_19 from "../images/gears/d19.svg";
// import gear_20 from "../images/gears/d20.svg";
// import gear_21 from "../images/gears/d21.svg";
// import gear_22 from "../images/gears/d22.svg";
// import gear_23 from "../images/gears/d23.svg";
// import gear_24 from "../images/gears/d24.svg";


const Container = styled.div`

  // background-color: rgba(0,0,0,0.15);

  position: relative;
  display: grid;
  top: 1rem;

  width: 80%;

  margin: 0 auto;
  margin-top: 8em;
  margin-bottom: 4em;

  aspect-ratio: 1;

  @media (max-width: 768px) {
    margin-top: clamp(16em, 40vh, 200px);
    margin-bottom: calc(10em);
    // min-height: 52vh;
  } ;
`;

const Gear = styled.img`
  position: absolute;
  object-fit: contain;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 0.65s ease-out;
`;

const Gear1 = styled(Gear)`
  width: 18%;
  height: 9%;
  top: -4%;
  bottom: 0;
  left: 63%;
  right: 0;
  @media (max-width: 768px) {
    display:none;
  } ;
`;

const Gear2 = styled(Gear)`
  width: 33%;
  height: 23%;
  top: 0%;
  bottom: 0;
  left: 44%;
  right: 0;
`;

const Gear3 = styled(Gear)`
  width: 35%;
  height: 35%;
  top: 10%;
  bottom: 0;
  left: 68%;
  right: 0;
`;

const Gear4 = styled(Gear)`
  width: 10%;
  height: 14%;
  top: 20.5%;
  bottom: 0;
  left: 51%;
  right: 0;
`;

const Gear5 = styled(Gear)`
  width: 19%;
  height: 19%;
  top: 36%;
  bottom: 0;
  left: 55%;
  right: 0;
`;

const Gear6 = styled(Gear)`
  width: 24%;
  height: 25%;
  top: 45%;
  bottom: 0;
  left: 71.5%;
  right: 0;
  // @media (max-width: 768px) {
  //   display: none;
  // } ;
`;

const Gear7 = styled(Gear)`
  width: 18%;
  height: 18%;
  top: 44%;
  bottom: 0;
  left: 38%;
  right: 0;
  // @media (max-width: 768px) {
  //   display: none;
  // } ;
`;

const Gear8 = styled(Gear)`
  width: 11%;
  height: 11%;
  top: 61.5%;
  bottom: 0;
  left: 47%;
  right: 0;
  // @media (max-width: 768px) {
  //   display: none;
  // } ;
`;

const Gear9 = styled(Gear)`
  width: 27.5%;
  height: 27.5%;
  top: 50%;
  bottom: 0;
  left: 12%;
  right: 0;
  // @media (max-width: 768px) {
  //   display: none;
  // } ;
`;

const Gear10 = styled(Gear)`
  width: 17%;
  height: 17%;
  top: 54%;
  bottom: 0;
  left: -5%;
  right: 0;
  // @media (max-width: 768px) {
  //   display: none;
  // } ;
`;

const Gear11 = styled(Gear)`
  width: 20%;
  height: 20%;
  top: 75%;
  bottom: 0;
  left: 4%;
  right: 0;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const Gear12 = styled(Gear)`
  width: 12%;
  height: 12%;
  top: 92%;
  bottom: 0;
  left: -3%;
  right: 0;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const gearIds = Array.from({ length: 24 }, (_, index) => `#gear${index + 1}`);
const rotationDirections = Array.from({ length: 24 }, (_, index) => (index % 2 === 0 ? 1 : -1));

const rotateGearOnScroll = () => {
  gearIds.forEach((gearId, index) => {
    const gear = document.querySelector(gearId)?.style;

    if (gear) {
      const rotationFactor = 0.12;
      const rotationDirection = rotationDirections[index];
      gear.transform = `rotate(${window.scrollY * rotationFactor * rotationDirection}deg)`;
    }
  });
};

const Gears: React.FC = (props) => {
    useEffect(() => {
        window.addEventListener('scroll', rotateGearOnScroll);

        return () => {
            window.removeEventListener('scroll', rotateGearOnScroll);
        };
    }, []);
    return (
        <>
            <Container>
              {props.children}
                <Gear1 src={gear_1} id="gear1" />
                <Gear2 src={gear_2} id="gear2" />
                <Gear3 src={gear_3} id="gear3" />
                <Gear4 src={gear_4} id="gear4" />
                <Gear5 src={gear_5} id="gear5" />
                <Gear6 src={gear_6} id="gear6" />
                <Gear7 src={gear_7} id="gear7" />
                <Gear8 src={gear_8} id="gear8" />
                <Gear9 src={gear_9} id="gear9" />
                <Gear10 src={gear_10} id="gear10" />
                <Gear11 src={gear_11} id="gear11" />
                <Gear12 src={gear_12} id="gear12" />
            </Container>
        </>
    )
}

export default Gears;