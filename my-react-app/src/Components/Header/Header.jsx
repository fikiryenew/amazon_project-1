import React, { useContext } from 'react'
import classes from './Header.module.css';
import {Link} from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { SlLocationPin } from "react-icons/sl";
import { DataContext } from '../DataProvider/DataProvider';

function Header() {

    const [{ basket }, dispatch] = useContext(DataContext);
    console.log(basket.length)
  return (
    <section className={classes.fixed}>
    <section>
        <div className={classes.header_container}>
            <div className={classes.logo_container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo"/>
                </Link>
                
                <div className={classes.delivery}>
                <span>
                    
                    <SlLocationPin />
                </span>
                <div>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div>
            <div className={classes.search}>
                {/* search bar */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" />
                < BsSearch size={25} />
            </div>
            {/* right side link */}
            <div className={classes.order_container}>
            <Link to="" className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/1920px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail" alt="" />
                    <section>
                        <option value="">EN</option>
                    </section>
                </Link>
                <Link to=''>
                   <div>
                 <p>Sign In</p>
                 <span>Account & Lists</span>
                 </div> 
                </Link>
                <Link to='/orders'>
                    <p>Returns</p>
                    <span>& Orders</span> 
                </Link>
                <Link to="/cart" className={classes.cart} >
                    <BiCart size={35} />
                <span>{basket.length}</span>
                </Link>
            </div>
        </div>
    </section>
    <LowerHeader />
    </section>
  )
}

export default Header
