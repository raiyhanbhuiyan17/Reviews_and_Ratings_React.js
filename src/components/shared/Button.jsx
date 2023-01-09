import PropTypes from 'prop-types'
function Button({children,version,type,isDisabled}){
    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}

        </button>
    )
}
Button.defaultProps={
    version: 'primary',
    type: 'submit',
    isDisabled: false,
}
// eslint-disable-next-line react/no-typos
Button.PropTypes ={
   children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Button