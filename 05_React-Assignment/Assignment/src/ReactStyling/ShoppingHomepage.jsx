import React, { useState } from "react";
import logo from "../ReactStyling/images/logo.png";
import sliderimage from "./images/sliderimage001.jpg";
import slider2 from "./images/slider2.jpg"
import Fruit from "./images/Frute.jpg"

import {
  Input,
  InputGroup,
  InputGroupText,
  Nav,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  UncontrolledCarousel,
} from "reactstrap";
import {
  Grid2X2,
  Headset,
  Heart,
  RefreshCw,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export default function ShoppingHomepage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="main_section">
      <div
        className="d-flex justify-around"
        style={{ backgroundColor: "lightgray" }}
      >
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">
              My Account <span className="fa-solid fa-angle-down"></span>
            </a>
          </li>
          <li>
            <a href="">Wish List</a>
          </li>
          <li>
            <a href="">Other Trending</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              Get Great Devices Up to 50% off<span></span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Need Any Help?</a>
          </li>
          <li>
            <a href="">
              Contact Us At: <span className="text-success">2200 3001</span>
            </a>
          </li>
          <li>
            <a href="">
              English <span className="fa-solid fa-angle-down"></span>
            </a>
          </li>
          <li>
            <a href="">
              USD<span className="fa-solid fa-angle-down"></span>
            </a>
          </li>
        </ul>
      </div>
      <hr className="m-2" />
      <div className=" Header-section px-4 d-flex align-items-center justify-content-between">
        <div className="Nest-logo">
          <img src={logo} alt="Logo" style={{ height: "100px" }} />
        </div>
        <div className="search  px-2 d-flex align-items-center gap-2 border border-success">
          <div>
            <UncontrolledDropdown className="p-0" nav inNavbar>
              <DropdownToggle nav caret>
                All categories
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="">
            <InputGroup>
              <Input
                style={{ border: "none" }}
                className="shadow-none border-none outline-none"
                placeholder="Search for items..... "
              />
              <InputGroupText
                style={{ border: "none", backgroundColor: "transparent" }}
                className="border-none"
              >
                <Search className="border-none" />
              </InputGroupText>
            </InputGroup>
          </div>
        </div>
        <div className="wishlist d-flex align-items-center">
          <div className="silect">
            <UncontrolledDropdown
              className="p-1 m-0   border  border-black "
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                Your Location
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Ahemdabad </DropdownItem>
                <DropdownItem>Baroda </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Surat </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div>
            <ul>
              <li>
                <RefreshCw />
                <a role="button">Compare</a>
              </li>
              <li>
                <Heart />
                <a role="button">Wishlist</a>
              </li>
              <li>
                <ShoppingCart />
                <a role="button">Wishlist</a>
              </li>
              <li>
                <User />
                <a role="button">Account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="m-2" />
      <div className="Navbar">
        <header>
          <div className="d-flex align-items-center justify-content-between  ">
            <div className="Menu_sec">
              <button className="btn btn-success ">
                <span className="">
                  <Grid2X2 />
                </span>
                Brows All Catagories
              </button>
              <a
                href=""
                style={{
                  color: "green",
                  fontWeight: "600",
                  paddingLeft: "10px",
                }}
              >
                Home <span className="fa-solid fa-angle-down"></span>
              </a>
              <a href="">
                Shop <span className="fa-solid fa-angle-down"></span>
              </a>
              <a href="">
                Stories <span className="fa-solid fa-angle-down"></span>
              </a>
              <a href="">
                Product <span className="fa-solid fa-angle-down"></span>
              </a>
              <a href="">
                Blog <span className="fa-solid fa-angle-down"></span>
              </a>
              <a href="">Contact Us</a>
            </div>
            <div className=" d-flex num-sec align-items-center">
              <div>
                <Headset size={40} />
              </div>
              <div>
                <span>
                  <h1 className="text-success">1900 - 888</h1>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <hr />
      <div className="slider-section h-50">
        <UncontrolledCarousel
          items={[
            {
              altText: "Slide 1",
              caption: "Slide 1",
              key: 1,
              src:sliderimage,
            },
            {
              altText: "Slide 2",
              caption: "Slide 2",
              key: 2,
              src:slider2,
            },
            {
              altText: "Slide 3",
              caption: "Slide 3",
              key: 3,
              src: Fruit,
            },
          ]}
        />
      </div>
      <hr className="m-2" />
      <div className="feacher-section p-2 ">
       <h3>Featured Catogaries</h3> 
      
       <div className="image-section">
       <div className="div1">
        <p>
          Milk and Die
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wZwsqltBQTOxiM2mSl0aW9tmSbvr6ngujgQ3gRp27RwmP9CPS9uX-Rbk3gvoKJaApuI&usqp=CAU" alt="" style={{height:'100px'}}/>
        <p>3 items</p>

       </div>
       <div className="div2">
        <p>
          Clothing & Be...
        </p>
        <img src="https://pngimg.com/d/strawberry_PNG2598.png" alt="" style={{height:'100px'}}/>
        <p>0 items</p>
       </div>
       <div className="div3">
        <p>
          Pet Toy
        </p>
        <img src="https://w7.pngwing.com/pngs/741/271/png-transparent-puppy-dog-food-pedigree-petfoods-milk-puppy-food-animals-pet-thumbnail.png" alt="" style={{height:'100px'}}/>
        <p>0 items</p>
       </div>
       <div className="div4">
        <p>
          Baking Mate
        </p>
        <img src="https://png.pngtree.com/png-vector/20240127/ourlarge/pngtree-some-black-grapes-all-together-png-image_11561762.png" alt="" style={{height:'100px'}}/>
        <p>1 items</p>
       </div>
       <div className="div5">
        <p>
          Baking MateS
        </p>
        <img src="https://png.pngtree.com/png-clipart/20191115/ourmid/pngtree-fresh-kiwi-fruits-isolated-on-transparent-png-image_1952934.jpg" alt="" style={{height:'100px'}}/>
        <p>1 items</p>
       </div>
       <div className="div6">
        <p>
          Fresh Fruit
        </p>
        <img src="https://w7.pngwing.com/pngs/73/409/png-transparent-green-grapes-juice-grape-leaves-water-fruit-spray-grapes-food-photography-drop.png" alt="" style={{height:'100px'}}/>
        <p>1 items</p>
       </div>
       <div className="div7">
        <p>
          Fresh Fruit
        </p>
        <img src="https://e7.pngegg.com/pngimages/1001/506/png-clipart-slices-of-oranges-orange-juice-flavor-fruit-nutritious-orange-natural-foods-food-thumbnail.png" alt="" style={{height:'100px'}}/>
        <p>1 items</p>
       </div>
       <div className="div7">
        <p>
          Fresh Fruit
        </p>
        <img src="https://w7.pngwing.com/pngs/73/409/png-transparent-green-grapes-juice-grape-leaves-water-fruit-spray-grapes-food-photography-drop.png" alt="" style={{height:'100px'}}/>
        <p>1 items</p>
       </div>
       </div>
      </div>
    </div>  
  );
}
