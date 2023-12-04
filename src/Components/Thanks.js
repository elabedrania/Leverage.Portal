
import '../Components/thanks.css';
import img2 from '../images/success.png';
const Thanks = () => {
    return(
        <div className='Thanks-container'>
            <div className='thanks'>
                <h1 className='thanks-title'>
                    Thank you dear costumer ! Your Data Has Been Saved Successfully!  
                </h1>
            </div>
            <div className='success'>
                <img src={img2} className='image-thanks' alt='success' />
            </div>
        </div>
    )
}


export default Thanks;