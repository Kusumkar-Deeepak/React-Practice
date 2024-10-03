
import PropTypes from'prop-types'
function Hello({name, Textcolor}) { 
  let styles = {color : Textcolor}
  return (
    <>
    <h1 style={styles}>Hello {name}</h1>
    </>
  )
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  Textcolor: PropTypes.string.isRequired
};

export default Hello

