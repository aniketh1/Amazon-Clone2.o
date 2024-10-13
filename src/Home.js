import React from "react";
import "./Home.css"
import Product from "./Product";
function Home(){
    return(
        <div className="home">
            
            <div className="home__container">
                <img src="https://amazon-clone-with-stripe-payment.netlify.app/images/banner.jpg"className="home__banner"/>
            </div>

            <div className="home__row">
                {/* Product */}
                <Product 
                id="121DF5D4F54E8RE"
                title={"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation To Create Radically Successful Businesses By Er-Paperback "}
                price={29.99}
                image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.wook.pt%2Fimages%2Flean-startup-eric-ries%2FMXwxNDc4MDc5NnwxMDI2MzA0OHwxMzgzNTkwMDc2MDAw%2F500x&f=1&nofb=1&ipt=8157b6e249389a91819b58c64b065c94390d6c6b71b00f8028ac3a361aba9b3a&ipo=images"}
                rating={4}
                />
                <Product 
                id="121DF5D4F54E8RF"
                title={"Apple 2022 MacBook Air Laptop with M2 chip: Built for Apple Intelligence, 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera; Space Gray "}
                price={949.99}
                image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F149426355.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fm2air-hero-6c.png&f=1&nofb=1&ipt=eabaa53132d60aa818c17e6952019330672b758d829a8b3d4403467abc282d07&ipo=images"}
                rating={4}
                />
                
                
                {/* Product */}
            </div>
            <div className="home__row">
                <Product 
                id="121DF5D4F54E8RG"
                title={"Razer Blade 16 (2024) Gaming Laptop: NVIDIA GeForce RTX 4090 - Intel Core i9-14900HX 14th Gen CPU - 16 OLED QHD+ 240Hz Display - 32GB RAM - 2TB SSD - Windows 11 - Chroma RGB - Snap Tap  "}
                price={999.99}
                image={"https://m.media-amazon.com/images/I/81-QcFPVt-L._AC_UY436_FMwebp_QL65_.jpg"}
                rating={4}
                />
                <Product 
                id="121DF5D4F54E8RH"
                title={"GTPLAYER Gaming Chair, Computer Chair with Footrest and Lumbar Support, Height Adjustable Game Chair with 360°-Swivel Seat and Headrest and for Office or Gaming (White)"}
                price={1818.99}
                image={"https://m.media-amazon.com/images/I/71WvJeaS4PL._AC_UL640_FMwebp_QL65_.jpg"}
                rating={4}
                />
                
                <Product 
                id="121DF5D4F54E8RI"
                title={"LOVEVOOK Laptop Backpack for Women, 15.6 Inch Work Business Backpacks Purse with USB Port, Large Capacity Nurse Bag College Bookbag for School, Waterproof Casual Daypack for Travel,Black-White-Brown"}
                price={34.99}
                image={"https://m.media-amazon.com/images/I/71olG7l8KlL._AC_UY436_FMwebp_QL65_.jpg"}
                rating={4}
                />
               
                
        
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>
            <div className="home__row">
                {/* Product */}
                <Product 
                id="121DF5D4F54E8RJ"
                title={"SAMSUNG 75-Inch Class Neo QLED 4K QN90C Series Quantum HDR+, Dolby Atmos, Object Tracking Sound+, Anti-Glare, Gaming Hub, Q-Symphony, Smart TV with Alexa Built-in (QN75QN90C, 2023 Model)"}
                price={687.99}
                image={"https://m.media-amazon.com/images/I/81mu53Xnv2L._AC_UY436_FMwebp_QL65_.jpg"}
                rating={4}
                />
                
                
            </div>
        </div>
    )
}
export default Home;