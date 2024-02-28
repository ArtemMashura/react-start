import './component.css';
import useMediaQuery from './mediaQuery';

function App() {
    const {isMobile, isTablet, isDesktop} = useMediaQuery()
  return (
    <div className="App">
      <main>
        <div className='product'>
            <div>{isMobile ? "Mobile" : isTablet ? "Tablet" : isDesktop ? "Desktop" : "I don't know what platfrom that is"}</div>
            <div className='icons'>

                <div className='discount'>
                    <div className='wrap'>
                        -16%
                    </div>
                </div>
                
                <div className='heart'>
                    <img src='https://w7.pngwing.com/pngs/592/704/png-transparent-yellow-red-heart-color-pink-heart-love-heart-color-thumbnail.png' alt=''></img>
                </div>

                <div>
                    
                </div>

                <div  className='scales'>
                    <img src='https://media.istockphoto.com/id/1277216880/vector/balance-scale-of-justice-icon.jpg?s=170667a&w=0&k=20&c=1Jz1aw4FcZjhhWC-ZSJ_3I3i6ZmDerXwKxq-xkRACXc=' alt=''></img>
                </div>
            </div>
            <div>
                <div >
                    <img className='photo' src='https://media.istockphoto.com/id/147063335/photo/us-coins-collection-isolated-on-white.jpg?s=612x612&w=0&k=20&c=etkfcmYnS0AqzIcyo4QqzVM7xCIUzo3IB3MufN9WLoI=' alt=''></img>
                </div>
            </div>
            <div className='info'>
                <div className='text'>
                    Набір монет України ЗСУ "ППО - надійний щит"
                </div>
                <div className='ratings'>
                    <img className='stars' src="https://t3.ftcdn.net/jpg/05/31/76/76/360_F_531767656_9ZYTdKAhUXatTUAUp7iYi6coq9dy3nSF.jpg" alt=""></img>
                    <div>
                        <img className='comment' src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt=''></img>
                    </div>
                    <div>
                        <label className='comment-count'>2</label>
                    </div>
                </div>
                <div className='price'>
                    <div className='oldPrice'>
                        <s>450₴</s>
                    </div>
                    <div className='buySegment'>
                        <div className='newPrice'>
                            379₴
                        </div>
                        <div className='buy'>
                            <img className='cart' src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=' alt=''></img>
                        </div>
                    </div>
                    <div>
                        <label className='avaliable'>
                            Есть в наличии
                        </label>
                    </div>
                </div>
                
            </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
