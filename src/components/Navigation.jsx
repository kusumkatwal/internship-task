import './Navigation.css';


function Navigation()
{
    return(
        <div className='navigation'>
            <div className='navigation-left'>
                <h3>naxa</h3>
            </div>

            <div className='navigation-mid'>
                <a href='/'>Services</a>
                <a href='/'>Portfolio</a>
                <a href='/'>Company</a>
                <a href='/'>Events & Media</a>
                <a href='/'>Blogs</a>                
            </div>

            <div className='navigation-right'>
                <a href='#'>Let's Talk</a>
            </div>
        </div>
    );

}
export default Navigation;