import React from "react";
import RestaurantIndexItem from './restaurant_index_item';
import Search_bar_container from "../search_bar/search_bar_container";
import { Link } from 'react-router-dom';
import Header from "../header/header";
import {Footer} from '../footer/footer'

class RestaurantIndex extends React.Component {
    constructor(props){
        super(props)

        // this.state = {
        //     name:""
        // }
    }
    componentDidMount(){
        // debugger
        this.props.requestRestaurants()
    }

    render() { 
        // debugger
        let { restaurants } = this.props
        // debugger
        // console.log(this.state)
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Search_bar_container/>
                </div>
                    <div className="indexlayout-container">
                        <div>filter placeholder</div>
                    
                        <ul className="indexlayout-item">
                        {restaurants.map((restaurant)=>(
                            <RestaurantIndexItem 
                                restaurant = { restaurant }
                                key = { restaurant.id }
                            />
                            ))}
                        </ul>
                        <div>Google Map placeholder</div>
                    
                    </div>
                    <div>
                        <Footer/>
                    </div>
            </div>
        );
    }
}
export default RestaurantIndex;