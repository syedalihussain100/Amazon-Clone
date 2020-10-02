import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* product id title image rating */}
      {/* product */}
      <div className="home_row">
        <Product
          id="121"
          title="Samsung Galaxy S11 in 2020 | Samsung galaxy,"
          price={11.95}
          rating={5}
          image="https://i.pinimg.com/originals/d0/00/54/d000541c331b1ecfeb91564db234ee05.jpg"
        />
        <Product
          id="122"
          title="7 Veteran Auto Writers Name the New Car They'd"
          price={1100.95}
          rating={5}
          image="https://www.insidehook.com/wp-content/uploads/2019/06/aston-hero.png?fit=1200%2C800"
        />
      </div>
      <div className="home_row">
        <Product
          id="123"
          title="Best juicers of 2020 - Business Insider"
          price={11.95}
          rating={5}
          image="https://i.insider.com/594035f1bf76bb25008b5b54?width=1100&format=jpeg&auto=webp"
        />
        <Product
          id="124"
          title="LG WFS1839EKD : DIRECT DRIVE WASHI"
          price={12.96}
          rating={5}
          image="https://www.lg.com/cac_en/images/washing-machines-and-dryers/wfs1839ekd/gallery/large06.jpg"
        />
        <Product
          id="125"
          title="Waliicorners Autumn New Shoes Men Cas"
          price={13.95}
          rating={5}
          image="https://waliicorners.com/wp-content/uploads/2019/08/2019-Autumn-New-Shoes-Men-Casual-Shoes-Male-Sneakers-Cool-Street-Skateboard-Men-Shoes-Brand-Man.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="126"
          title="Best smartwatch 2020: the top wearables you c"
          price={14.01}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="126"
          title="Amazon Echo (3rd Generation)- Smart Speaker"
          price={15.99}
          rating={5}
          image="https://pakref.com/wp-content/uploads/2020/04/amazon-echo-thrid-generation-smart-speaker-price-in-pakistan.jpg"
        />

        <Product
          id="127"
          title="React is an open-source, front end, JavaScript library "
          price={11.0}
          rating={5}
          image="https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/the-benefits-of-reactjs-main.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
