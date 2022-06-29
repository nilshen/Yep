import React from 'react';
import { Link } from 'react-router-dom';
import Rater from 'react-rater-plus'
// import Rater from 'react-rater'
// import theme from './mytheme.css'



class RestaurantIndexItem extends React.Component {
    constructor (props) {
        super(props)
      
    }

    componentDidMount () {
        this.props.requestReviews(this.props.restaurant.id)
       
    }

        render() { 
            
            // if (!this.props.restaurant.reviews) return null;
            const {restaurant} = this.props;
            // debugger

            let rating = 0;
            let reviews = this.props.restaurant.reviews
            reviews.map((review)=>(
                rating += review.rating
                ))
            let overallRating = Math.round(rating / reviews.length)
                


        return (
            <div>
        
                <Link to={`/restaurants/${restaurant.id}`} className="index-item" style={{ textDecoration: 'none' }}>
                <div className='index-item-container'>
        
                    <img className='index-pic' src={restaurant.photoUrls[0]} />
        
                    <div className='index-item-individual'>
                        <div>{restaurant.name}</div>
                        <div className='index-item-individual-rating'>
                        <div><Rater total={5} rating={overallRating}/></div>
                        <div className='reviews-length'>{restaurant.reviews.length}</div>
                        </div>
                        <br />
                        <div className='index-item-individual-details'>
                            <div className='index-item-individual-details-cat'>{restaurant.category}</div>
                            <div>{restaurant.price}</div>
                        </div>
                        
                        <div className="index-item-individual-hour">Hours: {restaurant.hours}</div>
                        <br/>
                        
                        
                        
            
                        
                        <div className='review-body'>{restaurant.reviews[0].body}</div>

                    </div>
                </div>
                </Link>
            </div>
        );
        // debugger
    }
}


export default RestaurantIndexItem