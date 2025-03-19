import React, {useContext} from "react";
import LabFive3 from './lab53'
function ReviewList({reviewList}) {
    return reviewList.map(function(reviewList) {return <li>{reviewList}</li>})
}
export default ReviewList;