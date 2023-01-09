import PropTypes from "prop-types";

function FeedbackStats({feedback}){
    //Calculate ratings avg
    let average =
        feedback.reduce((acc,cur)=>{
            return acc+cur.rating
        },0)/feedback.length
    average=average.toFixed(1) //decimal only 1 like 6.0,9.5 not 8.888.
    //here second argument is 0 because initially accumulator is 0
    // console.log(average)
    return <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0: average}</h4>
        </div>
}
FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}
export default FeedbackStats