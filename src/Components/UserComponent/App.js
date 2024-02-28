import './App.css';

function UserComponent(props) {
  return (
    <div className="App">
      
      <main>
        <div className='productInfo'>
          <div className='data'>
            <div className='name'>{props.name}</div>
            <div className='price'>{props.price} грн</div>
            <div className='buyBTN'>Купити</div>
          </div>
          <div className="PhotoBox">
            <img className="UserPhoto" src={props.url} alt=''></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserComponent;
