// import React, {useState, useEffect} from "react";
// import { FiSearch } from "react-icons/fi"
// import { Link, withRouter } from 'react-router-dom';

// function SearchBar (props) {
//     const [searchTerm, setSearchTerm] = useState("")
//     // const [searchTerm2, setSearchTerm2] = useState("")
//     // let searchUrl = searchTerm
//     useEffect(()=>{
//         // debugger    
//         props.requestRestaurants()
//     }, [])

//     // console.log(props)
//     // console.log(state)

//     // console.log(setSearchTerm(e.target.value))
    
//     const handleSearch = (e) => {
//         console.log(searchTerm)
//         e.preventDefault();
//     //     let searchUrl = searchTerm
//     //     if (searchUrl === "") {
//     //         searchUrl = '/restaurants'
//     //     } else {
//     //         searchUrl = `/restaurants/search/${searchUrl}`
//     //     }
//     debugger
//         // props.requestRestaurants();
//     //     // props.history.push(`${searchUrl}`)
//         // props.history.push("/restaurants/search/dessert")

//     }

//     let {restaurants} = props

//         return (
//             <div className="searchbar-container">
//                 <div className="searchbar-container-bar">
//                 <p className="searchbar-restaurant">
//                     <input 
//                     type="text" 
//                     className="searchbar-default"
//                     placeholder="Restaurants..."
//                     onChange={(e) => {
//                         setSearchTerm(e.target.value)
//                     }}
//                     value={searchTerm}
//                     />
//                 </p>
//                 <p className="searchbar-location">
//                     <input 
//                     type="text" 
//                     className="searchbar-default"
//                     readOnly placeholder="New York, NY"
//                     />
//                 </p>
                
//                     <FiSearch onClick={()=> handleSearch} className="searchbar-icon"/>

//                 </div>
                
//                 <div className="searchbar-container-result">
//                     <ul>
//                         {restaurants.filter((restaurant)=>{
//                             if (searchTerm === "") {
//                                 return ""
//                             } else if (restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())){
//                                 return restaurant
//                             } else if (restaurant.category.toLowerCase().includes(searchTerm.toLowerCase())){
//                                 return restaurant
//                             } 
//                             // else if (restaurant.city.toLowerCase().includes(searchTerm2.toLowerCase())){
//                             //     return restaurant
//                             // } 
//                         }).map((restaurant,key) => {
//                             return (
//                                 <div key={key}>
//                                     <img className='index-pic' src={restaurant.photoUrls[0]} />
//                                     {restaurant.name}
//                                     {/* <Link to={`/restaurants/${restaurant.id}`} className="index-item" style={{ textDecoration: 'none' }}></Link> */}
//                                 </div>
                                
//                             )
//                         })}
//                     </ul>
//                 </div>
                
//             </div>
           
//         );
// }

// export default withRouter(SearchBar);



// // class SearchBar extends React.Component {
// //     constructor(props){
// //         super(props)
// //     }

// //     componentDidMount(){
// //         // debugger    
// //         this.props.requestRestaurants()
// //     }

// //     render() { 
// //         // debugger
// //         let {restaurants} = this.props
// //         console.log(restaurants)
// //         // console.log(this.props)
// //         return (
// //             <div className="searchbar-container">
// //                 <p className="searchbar-restaurant">
// //                     <input 
// //                     type="text" 
// //                     placeholder="Restaurants..."
                    
// //                     />
// //                 </p>

// //                 <p className="searchbar-location">
// //                     <input 
// //                     type="text" 
// //                     placeholder="New York, NY"
// //                     />
// //                 </p>
// //                 <FiSearch className="searchbar-icon"/>
// //             </div>
// //         );
// //     }
// // }

// // export default SearchBar;