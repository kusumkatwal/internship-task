import {NavLink} from 'react-router-dom';

function Ribbon()
{
    return(
        <div className='routing'>
            <NavLink to='/service1'>Software & Apps Development</NavLink>
            <NavLink to='/service2'>Software & Apps Development</NavLink>
            <NavLink to='/service3'>Software & Apps Development</NavLink>
            <NavLink to='/service4'>Software & Apps Development</NavLink>
            <NavLink to='/service5'>Software & Apps Development</NavLink>
            <NavLink to='/service6'>Software & Apps Development</NavLink>
            <NavLink to='/service7'>Software & Apps Development</NavLink>
        </div>
    );
}
export default Ribbon;