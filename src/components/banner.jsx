import '../styles/banner.scss';

const Banner = () =>{
    return(
        <div className='banner'>
            <img className="banner-img" src="/images/user.png" alt="banner-image" />
            <p>Welcome to <span>1TAP</span>, Zaheer! Select a package to access our full range of services.</p>
        </div>
    )
}
export default Banner;