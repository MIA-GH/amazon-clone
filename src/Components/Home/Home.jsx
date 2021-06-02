import React from 'react';
import './Home.css';
import {
    AmazonBanner,
    ProductLarge,
    ProductLarge2,
    Product0,
    Product1,
    Product2,
    Product3,
    Product4,
    Product5,
    Product6,
    Product7,
    Product8,
    Product9,
} from "../../assets/AssetExport";
import { Product } from "../index";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src={AmazonBanner}
                alt="home banner"
            />
            <div className="home__row">
                <Product
                    id="1232131"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={41.36}
                    rating={2}
                    image={Product0}
                />

                <Product
                    id="1232132"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={991.36}
                    rating={5}
                    image={Product1}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1232133"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={191.36}
                    rating={1}
                    image={Product2}
                />

                <Product
                    id="1232134"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={551.36}
                    rating={5}
                    image={Product3}
                />

                <Product
                    id="1232135"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={131.36}
                    rating={4}
                    image={Product4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1232136"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={111.36}
                    rating={5}
                    image={ProductLarge}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1232137"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={41.36}
                    rating={2}
                    image={Product5}
                />

                <Product
                    id="1232138"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={991.36}
                    rating={5}
                    image={Product6}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1232139"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={191.36}
                    rating={5}
                    image={Product7}
                />

                <Product
                    id="1232110"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={551.36}
                    rating={4}
                    image={Product8}
                />

                <Product
                    id="1232111"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={131.36}
                    rating={2}
                    image={Product9}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1232112"
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore ipsam minima"
                    price={111.36}
                    rating={3}
                    image={ProductLarge2}
                />
            </div>
        </div>
    );
}

export default Home;