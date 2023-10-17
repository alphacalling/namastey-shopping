import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';
import Img4 from '../assets/Img4.jpg';
import Img5 from '../assets/Img5.jpg';
import Img6 from '../assets/Img6.jpg';

const About = () => {
    return (
        <>
            <div className='w-60 h-60 p-4 m-16 gap-4 flex justify-between cursor-pointer md:items-center'>
                <img className='rounded-lg' src={Img1} alt="Image" />
                <img className='rounded-lg' src={Img2} alt="Image" />
                <img className='rounded-lg' src={Img3} alt="Image" />
                <img className='rounded-lg' src={Img4} alt="Image" />
                <img className='rounded-lg' src={Img5} alt="Image" />
                <img className='rounded-lg' src={Img6} alt="Image" />

            </div>
            <div className="flex p-5 justify-evenly font-bold text-xl border-y-red sm:flex flex-wrap md:flex-wrap">
                <ul className="cursor-pointer underline">About
                    <li className="text-lg font-normal">About Us</li>
                    <li className="text-lg font-normal">Contact Us</li>
                    <li className="text-lg font-normal">Press</li>
                    <li className="text-lg font-normal">ClearTrip</li>
                </ul>
                <ul className="cursor-pointer underline">Help
                    <li className="text-lg font-normal">Payment</li>
                    <li className="text-lg font-normal">Shipping</li>
                    <li className="text-lg font-normal">Cancellation & Return</li>
                    <li className="text-lg font-normal">FAQ</li>
                </ul>
                <ul className="cursor-pointer underline">Social
                    <li className="text-lg font-normal">facebook</li>
                    <li className="text-lg font-normal">Twitter</li>
                    <li className="text-lg font-normal">Instagram</li>
                </ul>
            </div>
        </>
    )
}

export default About;