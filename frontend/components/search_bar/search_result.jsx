import React from "react";
import Header from "../header/header";
import Search_bar_container from "./search_bar_container";
import { Link } from "react-router-dom";
import {Footer} from "../footer/footer";


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
        
        
        
        let restaurants = this.props.restaurants;
    
        

        return (
            <div>
            <div>
                <Header/>
            </div>
            
            <Search_bar_container/>
                <div className="indexlayout-container">
                    <div>filter placeholder</div>
                
                    <ul className="indexlayout-item">
                    {restaurants.map((restaurant)=>(
                    <Link to={`/restaurants/${restaurant.id}`} className="index-item" style={{ textDecoration: 'none' }}>
                    <div className='index-item-container'>
            
                        <img className='index-pic' src={restaurant.photoUrls[0]} />
            
                        <div className='index-item-individual'>
                            <h3>{restaurant.name}</h3>
                    
                            <div className='index-item-individual-details'>
                                <div className='index-item-individual-details-cat'>{restaurant.category}</div>
                                <div>{restaurant.price}</div>
                            </div>
                            
                            <div className="index-item-individual-hour">Hours: {restaurant.hours}</div>
                        
                        </div>
                    </div>
                    </Link>
                        ))}
                    </ul>
                    <div>Google Map placeholder</div>
                
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
        )
    }
};


export default SearchResult;