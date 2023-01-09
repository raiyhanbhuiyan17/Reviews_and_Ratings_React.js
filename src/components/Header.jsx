import PropTypes from 'prop-types'
function Header({
     text= "Feedback UI",
     bgColor = "rgba(0,0,0,0.4)",
    textColor = "#ff6a95",
}) {
    const headerStyles = {
        background: bgColor,
        color:textColor,
    };

return(
        <header style={headerStyles}>
         <div className={'container'}>
            {/*<h2>Feedback UI</h2>*/}
             <h2>{text}</h2>
        </div>
        </header>

    );

}
Header.propTypes={
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
export default Header