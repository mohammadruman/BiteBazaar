import React from "react";
import ReactDOM from "react-dom/client";



/* Importing the HeaderComponent 
Header
 - Logo
    - Navigation
        - Home
        - About
        - Contact
-Body
    - Content
    -search bar
    -Restaurant container
    -Restaurant card
        - Image
        - Name
        - Rating
        -cuisine
        - Delivery time
        - Delivery charges

    - Sidebar
- Footer
    - Social media links
    - Contact us
    - About us  



*/

//data from swiggy api
const resList = [
    {
        name: "Pizza Delight",
        cloudinaryImageId: "57a56b68fa69d5fa79443df6d7444521",
        locality: "MG Road",
        areaName: "Shivaji Nagar",
        costForTwo: "₹500 for two",
        cuisines: ["Pizza", "Italian"],
        avgRating: 4.2,
        parentId: "12345",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
            deliveryTime: 30,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 23:00:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/pizza-delight-mg-road-shivaji-nagar-67890",
            type: "WEBLINK"
        }
    },
    {
        name: "Burger King",
       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Brigade Road",
        areaName: "Ashok Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food"],
        avgRating: 4.0,
        parentId: "67890",
        avgRatingString: "4.0",
        totalRatingsString: "15K+",
        sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 22:00:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/burger-king-brigade-road-ashok-nagar-12345",
            type: "WEBLINK"
        }
    },
    {
        name: "Sushi House",
        cloudinaryImageId: "12579b16e37776facff7974e32c367f7",
        locality: "Koramangala",
        areaName: "8th Block",
        costForTwo: "₹800 for two",
        cuisines: ["Japanese", "Sushi"],
        avgRating: 4.5,
        parentId: "13579",
        avgRatingString: "4.5",
        totalRatingsString: "8K+",
        sla: {
            deliveryTime: 35,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 21:00:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹200 OFF",
            subHeader: "ABOVE ₹599",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/sushi-house-koramangala-8th-block-24680",
            type: "WEBLINK"
        }
    },
    {
        name: "Taco Bell",
       cloudinaryImageId: "db36928443988d0c1ec71ac018695225",
        locality: "Indiranagar",
        areaName: "12th Main",
        costForTwo: "₹350 for two",
        cuisines: ["Mexican", "Tex-Mex"],
        avgRating: 4.3,
        parentId: "24680",
        avgRatingString: "4.3",
        totalRatingsString: "12K+",
        sla: {
            deliveryTime: 20,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 23:30:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹75 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/taco-bell-indiranagar-12th-main-13579",
            type: "WEBLINK"
        }
    },
    {
        name: "Chinese Wok",
        cloudinaryImageId: "yuai9tmymsdhq4az9os2",
        locality: "Whitefield",
        areaName: "ITPL",
        costForTwo: "₹600 for two",
        cuisines: ["Chinese", "Asian"],
        avgRating: 3.8,
        parentId: "35791",
        avgRatingString: "3.8",
        totalRatingsString: "9K+",
        sla: {
            deliveryTime: 40,
            lastMileTravel: 7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "7.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 22:30:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/chinese-wok-whitefield-itpl-35791",
            type: "WEBLINK"
        }
    },
    {
        name: "Kebab Nation",
    cloudinaryImageId: "a0ae8f476c8fb42bce34766d6372b4e9",
        locality: "HSR Layout",
        areaName: "Sector 7",
        costForTwo: "₹450 for two",
        cuisines: ["North Indian", "Kebabs"],
        avgRating: 4.1,
        parentId: "46913",
        avgRatingString: "4.1",
        totalRatingsString: "6K+",
        sla: {
            deliveryTime: 28,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 23:00:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/kebab-nation-hsr-layout-sector-7-46913",
            type: "WEBLINK"
        }
    },
    {
        name: "Pasta Villa",
        cloudinaryImageId: "pdsvarxwfwp1vds1z6lr",
        locality: "Jayanagar",
        areaName: "4th Block",
        costForTwo: "₹550 for two",
        cuisines: ["Italian", "Pasta"],
        avgRating: 4.4,
        parentId: "58024",
        avgRatingString: "4.4",
        totalRatingsString: "11K+",
        sla: {
            deliveryTime: 32,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 21:30:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/pasta-villa-jayanagar-4th-block-58024",
            type: "WEBLINK"
        }
    },
    {
        name: "Dosa Corner",
    cloudinaryImageId: "fc42ef9df56b1a1b701546f0b8cd8d5e",
        locality: "Basavanagudi",
        areaName: "Bull Temple Road",
        costForTwo: "₹250 for two",
        cuisines: ["South Indian", "Dosa"],
        avgRating: 4.0,
        parentId: "69135",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
            deliveryTime: 22,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 20:00:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹50 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/dosa-corner-basavanagudi-bull-temple-road-69135",
            type: "WEBLINK"
        }
    },
    {
        name: "Grill Master",
       cloudinaryImageId: "19cf4ff9375af8d23861e4099ba977b3",
        locality: "Koramangala",
        areaName: "5th Block",
        costForTwo: "₹700 for two",
        cuisines: ["Barbecue", "Grill"],
        avgRating: 4.6,
        parentId: "80246",
        avgRatingString: "4.6",
        totalRatingsString: "7K+",
        sla: {
            deliveryTime: 45,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 23:45:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹200 OFF",
            subHeader: "ABOVE ₹499",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/grill-master-koramangala-5th-block-80246",
            type: "WEBLINK"
        }
    },
    {
        name: "Cafe Mocha",
        cloudinaryImageId: "cadd4qgaodthe0ulvbgv",
        locality: "Church Street",
        areaName: "MG Road",
        costForTwo: "₹600 for two",
        cuisines: ["Cafe", "Desserts"],
        avgRating: 4.3,
        parentId: "91357",
        avgRatingString: "4.3",
        totalRatingsString: "13K+",
        sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 21:00:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/cafe-mocha-church-street-mg-road-91357",
            type: "WEBLINK"
        }
    },
    {
        name: "Spice Symphony",
       cloudinaryImageId: "r3jtq0ipwol9tby1khja",
        locality: "JP Nagar",
        areaName: "3rd Phase",
        costForTwo: "₹500 for two",
        cuisines: ["Indian", "Spicy"],
        avgRating: 4.0,
        parentId: "102468",
        avgRatingString: "4.0",
        totalRatingsString: "8K+",
        sla: {
            deliveryTime: 27,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-08 22:45:00",
            opened: true
        },
        badges: {
            imageBadges: [
                {
                    imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    description: "OnlyOnSwiggy"
                }
            ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {
                    badgeObject: [
                        {
                            attributes: {
                                description: "OnlyOnSwiggy",
                                imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "₹75 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/spice-symphony-jp-nagar-3rd-phase-102468",
            type: "WEBLINK"
        }
    }
];


const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?t=st=1717793138~exp=1717796738~hmac=1edefd03275d3773435308448de94c7d19d6652db70295e456325bf00e996a07&w=740" />
            </div>
        <div className="nav-item">
            <ul>
            <li>Home</li>
            <li>About-Us</li>
            <li>Contact-us</li>
            <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}
const RestaurantCard=(props)=>{
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo} = resData;
    return (
        <div className="res-card" >
            <img className="res-logo"
             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId} />
                <h3>{name}</h3>   
                <h4>{cuisines}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}</h4>
                <h4>{costForTwo } </h4>

        </div>
    )
}

const Body = () => {
    return (
    <div className="body">
        <div className="searchbar">search</div>
        <div className="restaurant-container">
       {
        resList.map((restaurant) =>(
        <RestaurantCard key = {restaurant.parentId} resData= {restaurant}/>)
        )
       }
        </div>
    </div>
    )
}

const AppLayour =()=>{
    return (
        <div className="App">
            <Header/>
            <Body />
             </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
 
  root.render(<AppLayour/>);
