import PropTypes from "prop-types";

function Card({children, reverse}){
    // return <div className={`card ${reverse && 'reverse'}`}> {children}</div>  //${reverse && 'reverse'} means => if reverse we want the class of reverse

    return (
        <div className='card' style={{
            backgroundColor: reverse ?'rgba(0,0,0,0.4)' :'#fff',
            color: reverse ? '#fff' : '#000'
        }}>{children}</div>
    )
}

Card.defaultProps = {
    reverse:false //white-dark
    //reverse: true // dark-white
}
Card.propTypes={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
export default Card