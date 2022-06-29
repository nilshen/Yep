import React from "react";
import Header from "../header/header";
import Search_bar_container from "./search_bar_container";
import { Link } from "react-router-dom";
import {Footer} from "../footer/footer";
import RestaurantIndexItem from '../restaurants/restaurant_index_item';


class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestRestaurants(this.props.match.params.input);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.input !== this.props.match.params.input) {
            this.componentDidMount();
        }
    }


    render() {
        
        
        
        const {restaurants, requestReviews } = this.props;
    
        

        return (
            <div>
            <div>
                <Header/>
            </div>
            
            <Search_bar_container/>
                <div className="indexlayout-container">
                    {/* <div>filter placeholder</div> */}
                
                    <ul className="indexlayout-item">
                    {restaurants.map((restaurant)=>(
                        <RestaurantIndexItem 
                        restaurant = { restaurant }
                        requestReviews = {requestReviews}
                        key = { restaurant.id }
                    />
                        ))}
                    </ul>
                    {/* <div>Google Map placeholder</div> */}
                
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
        )
    }
};


export default SearchResult;