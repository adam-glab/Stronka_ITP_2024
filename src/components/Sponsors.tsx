import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import useMediaQuery from "../utils/UseMediaQuery";
import PartnerGears from "./PartnerGears";

function importAll(r: any) {
  return r.keys().map(r);
}

const imagesDesktop = importAll(
  require.context("../images/desktop_backgrounds", false, /\.(png|jpe?g|svg)$/)
);
const imagesMobile = importAll(
  require.context("../images/mobile_backgrounds", false, /\.(png|jpe?g|svg)$/)
);
const logos = importAll(
  require.context("../images/logos", false, /\.(png|jpe?g|svg)$/)
);

const ParentDiv = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
`;

const ChildDiv = styled.div`
  flex: 1;
`;

const LeftDiv = styled(ChildDiv)`
  border-right: 2px solid #000;
  // background-color: #f0f0f0; /* Optional: Add some styling for better visibility */
  position: relative;
  padding: 10px;
  display:grid;
  grid-template-rows: auto 1fr;
  `;

const RightDiv = styled(ChildDiv)`
  // background-color: #e0e0e0; /* Optional: Add some styling for better visibility */
`;

const Card = styled.div`
  height:60vh;
  background: #fffffa;
  // background-color: rgba(0,0,0,0.15);
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items:center;
  position:sticky;
  top:0;
`;

const PartnershipText = styled.span`
  font-size: 120%;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const CompanyContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

// --------------------
const Container = styled.div`
  position: relative;
  display: grid;
  top: 1.75rem;
  aspect-ratio:1;
`;

const ImgDesktop = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const ImgMobile = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 769px) {
    display: none;
  } ;
`;

const SponsorImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  transform: translate(-0.5rem, -0.5rem);
  @media (min-width: 768px) {
    padding: 1.5rem;
    transform: translate(-1.5rem, -1.5rem);
  } ;
`;

const Sabre = styled.a`
  background-color: rgba(0,0,0,0.15);
  width: 20%;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 70%;
  @media (max-width: 768px) {
    right: 32%;
    top: 3.5%;
    width: 38%;
  } ;
`;

const Woodward = styled.a`
  width: 20%;
  position: absolute;
  left: 40%;
  top: 65.4%;
  @media (max-width: 768px) {
    top: 32%;
    left: 7%;
    width: 30%;
  } ;
`;
const Pega = styled.a`
  width: 9%;
  position: absolute;
  left: 45.6%;
  top: 36%;
  @media (max-width: 768px) {
    left: 69%;
    top: 31%;
    width: 17%;
  } ;
`;
const Mars = styled.a`
  width: 11%;
  position: absolute;
  right: 13%;
  top: 36.6%;
  @media (max-width: 768px) {
    right: 10.5%;
    top: 39.4%;
    width: 23%;
  } ;
`;
const Aptiv = styled.a`
  width: 16%;
  position: absolute;
  left: 10.5%;
  top: 44%;
  @media (max-width: 768px) {
    left: 8.4%;
    top: 48.4%;
    width: 27%;
  } ;
`;
const Motorola = styled.a`
  width: 9%;
  position: absolute;
  left: 45.8%;
  top: 43%;
  @media (max-width: 768px) {
    left: 14.5%;
    top: 38.5%;
    width: 16%;
  } ;
`;

const Autodesk = styled.a`
  width: 18.8%;
  position: absolute;
  right: 9.4%;
  top: 44.1%;
  @media (max-width: 768px) {
    right: 6.2%;
    top: 48.5%;
    width: 32%;
  } ;
`;

const GE = styled.a`
  width: 15%;
  position: absolute;
  right: 74%;
  top: 65.4%;
  @media (max-width: 768px) {
    right: 71.5%;
    top: 65.9%;
    width: 24%;
  } ;
`;

const Adecco = styled.a`
  width: 12%;
  position: absolute;
  right: 43.7%;
  top: 65.3%;
  @media (max-width: 768px) {
    right: 38.8%;
    top: 65.6%;
    width: 22%;
  } ;
`;

const Fujijama = styled(Adecco)`
  right: 12.5%;
  top: 65.5%;
  @media (max-width: 768px) {
    right: 7.1%;
    top: 66%;
    width: 19%;
  } ;
`;

const Eska = styled.a`
  width: 12%;
  position: absolute;
  left: 13%;
  top: 86.2%;
  @media (max-width: 768px) {
    left: 8.8%;
    top: 80.5%;
    width: 28%;
  } ;
`;

const PodajDalej = styled.a`
  width: 10%;
  position: absolute;
  right: 45.2%;
  top: 86.2%;
  @media (max-width: 768px) {
    right: 12%;
    top: 96.2%;
    width: 20%;
  } ;
`;

const DlaStudenta = styled.a`
  width: 11%;
  position: absolute;
  right: 13%;
  top: 86.4%;
  @media (max-width: 768px) {
    right: 10.7%;
    top: 80.8%;
    width: 22%;
  } ;
`;

const Eurostudent = styled.a`
  width: 14%;
  position: absolute;
  left: 11.7%;
  top: 93.2%;
  @media (max-width: 768px) {
    left: 7.5%;
    top: 88.5%;
    width: 30%;
  } ;
`;

const KMS = styled.a`
  width: 13%;
  position: absolute;
  right: 44%;
  top: 93.4%;
  @media (max-width: 768px) {
    right: 66%;
    top: 96.3%;
    width: 25%;
  } ;
`;

const FXMAG = styled.a`
  width: 5%;
  position: absolute;
  right: 15.6%;
  top: 93.4%;
  @media (max-width: 768px) {
    right: 16%;
    top: 88.6%;
    width: 11%;
  } ;
`;


const Sponsors: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(isMobile);
  return (
    <Container id="#sponsors">
      <ParentDiv>
        <LeftDiv>
          <Card>
            <PartnershipText>Sponsor główny</PartnershipText>
            <Sabre href="https://www.sabre.com/locations/poland/" target="_blank">
              <SponsorImg src={logos[0].default} alt="Sabre" />
            </Sabre>
          </Card>
          <Card>
            <PartnershipText>Sponsorzy</PartnershipText>
            <CompanyContainer>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
            </CompanyContainer>
          </Card>
          <Card>
            <PartnershipText>Partner Strefy Studenta</PartnershipText>
              <p>PSS</p>
            <PartnershipText>Sponsor merytoryczny</PartnershipText>
              <p>SM</p>
          </Card>
          <Card>
            <PartnershipText>Partner techniczny</PartnershipText>
              <p>PT</p>
          </Card>
          <Card>
            <PartnershipText>Patroni medialni</PartnershipText>
            <CompanyContainer>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
            </CompanyContainer>
          </Card>
        </LeftDiv>
        <RightDiv>
          {/* Content for the right div */}
          <PartnerGears />
        </RightDiv>
      </ParentDiv>
    </Container>
  );
};

export default Sponsors;

    //   <div id="sponsors">
    //     <Container>
    //       {!isMobile && (
    //         <>
    //           <ImgDesktop src={imagesDesktop[3].default} alt="img4" />
    //           <ImgDesktop src={imagesDesktop[4].default} alt="img5" />
    //           <ImgDesktop
    //             id="partners"
    //             src={imagesDesktop[5].default}
    //             alt="img6"
    //           />
    //           <ImgDesktop
    //             id="patrons"
    //             src={imagesDesktop[6].default}
    //             alt="img7"
    //           />
    //           {/* <Crane src={imagesDesktop[8].default} alt="crane" /> */}

    //           {/* <MovingGears /> */}

    //           {/* <MainSponsorTitle>SPONSOR GŁÓWNY</MainSponsorTitle>
    //           <SponsorsTitle>SPONSORZY</SponsorsTitle>

    //           <StudentPartner>
    //             PARTNER <br /> STREFY <br /> STUDENTA
    //           </StudentPartner>
    //           <ContentPartner>
    //             PARTNER <br /> MERYTORYCZNY{" "}
    //           </ContentPartner>
    //           <TechnicalPartner>
    //             {" "}
    //             PARTNER <br /> TECHNICZNY{" "}
    //           </TechnicalPartner>
    //           <MediaTitle>
    //             {" "}
    //             PARTNERZY <br /> MEDIALNI{" "}
    //           </MediaTitle> */}
    //         </>
    //       )}

    //       {isMobile && (
    //         <>
    //           <ImgMobile src={imagesMobile[3].default} alt="img4" />
    //           <ImgMobile
    //             id="partners patrons"
    //             src={imagesMobile[4].default}
    //             alt="img5"
    //           />
    //         </>
    //       )}

    //       {/* <Sabre href="https://www.sabre.com/locations/poland/" target="_blank">
    //         <SponsorImg src={logos[0].default} alt="Sabre" />
    //       </Sabre>

    //       <Woodward href="https://www.woodward.com/" target="_blank">
    //         <SponsorImg src={logos[1].default} alt="Woodward" />
    //       </Woodward>

    //       <Pega href="https://www.pega.com/" target="_blank">
    //         <SponsorImg src={logos[2].default} alt="Pega" />
    //       </Pega>

    //       <Mars href="https://www.mars.com/" target="_blank">
    //         <SponsorImg src={logos[3].default} alt="Mars" />
    //       </Mars>

    //       <Aptiv href="https://www.aptiv.com/" target="_blank">
    //         <SponsorImg src={logos[4].default} alt="Aptiv" />
    //       </Aptiv>

    //       <Motorola
    //         href="https://www.motorolasolutions.com/en_us/home.html"
    //         target="_blank"
    //       >
    //         <SponsorImg src={logos[5].default} alt="Motorola" />
    //       </Motorola>

    //       <Autodesk href="https://www.autodesk.com/" target="_blank">
    //         <SponsorImg src={logos[6].default} alt="Autodesk" />
    //       </Autodesk>

    //       <GE href="https://www.ge.com/" target="_blank">
    //         <SponsorImg src={logos[7].default} alt="GE" />
    //       </GE>

    //       <Adecco href="https://www.adecco.pl/" target="_blank">
    //         <SponsorImg src={logos[8].default} alt="Adecco" />
    //       </Adecco>

    //       <Fujijama href="https://www.fujijama.pl/" target="_blank">
    //         <SponsorImg src={logos[15].default} alt="Fujijama" />
    //       </Fujijama>

    //       <Eska href="https://www.eska.pl/" target="_blank">
    //         <SponsorImg src={logos[9].default} alt="Eska" />
    //       </Eska>

    //       <PodajDalej href="http://www.podajdalej.info.pl/" target="_blank">
    //         <SponsorImg src={logos[10].default} alt="Podaj Dalej" />
    //       </PodajDalej>

    //       <DlaStudenta href="https://www.dlastudenta.pl/" target="_blank">
    //         <SponsorImg src={logos[11].default} alt="Dla Studenta" />
    //       </DlaStudenta>

    //       <Eurostudent href="https://eurostudent.pl/" target="_blank">
    //         <SponsorImg src={logos[12].default} alt="Eurostudent" />
    //       </Eurostudent>

    //       <KMS href="https://kms.org.pl/" target="_blank">
    //         <SponsorImg src={logos[13].default} alt="KMS" />
    //       </KMS>

    //       <FXMAG href="https://fxmag.pl/" target="_blank">
    //         <SponsorImg src={logos[14].default} alt="FXMAG" />
    //       </FXMAG> */}
    //     </Container>
    //   </div>
