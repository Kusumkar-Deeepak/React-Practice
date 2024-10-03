import PropTypes from 'prop-types'

function Props({ name, age, features }) {
  const list = features.map((index,feature) => <li key={index}>{feature}</li>)
  return (
    <>
      <div>
        <h1 style={{'textAlign':'center'}}>the name of student is  : {name}</h1>
        <h3 style={{'textAlign':'center'}}>And The Age Is : {age}</h3>
        <p style={{'textAlign':'center'}}>{list}</p>
      </div>
    </>
  );
}

Props.propTypes = {
  name : PropTypes.string.isRequired,
  age : PropTypes.number.isRequired,
  features : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Props;
