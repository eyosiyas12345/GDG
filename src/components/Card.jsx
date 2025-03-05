
function  Card(props){
  const cardStyle = {
    backgroundColor: props.backgroundColor || '#f0f0f0', // Default color if not provided
    padding: '20px',
     border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '300px',
     margin: '10px',
     boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  };

    return(
<div className="card" style={cardStyle}>
  <h1></h1> 
  <p>Name: {props.name}</p>
  <p>Email: {props.email}</p>
  <p>Age: {props.age}</p>
</div>
    );
}

export default Card;