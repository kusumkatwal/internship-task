import './Banner.css';
function Banner ()
{
    return (
        <div className="banner">
            <div className='banner-top'><p className="text1">services</p></div>
            <div className='banner-mid'><p className="text2">At <span className="blue">NAXA</span>, we work on <span className="blue">ideas</span>; ideas that can provide <span className="blue">simple solutions</span> to <span className="blue">complex problems</span>.</p></div>
            <div className='banner-buttom'><p className="text3">We work as a team to generate, explore, build and validate ideas. 
            We also contextualize innovations around the world to find the best fitting solutions to local problems.</p></div>
        </div>
    );
}
export default Banner;