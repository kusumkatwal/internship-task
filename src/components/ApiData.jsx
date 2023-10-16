import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';
import Service5 from './Service5';
import Service6 from './Service6';
import Service7 from './Service7';
function ApiData()
{

    const [data, setData] = useState([]);

    useEffect(() =>{
        const api = 'https://admin.naxa.com.np/api/services';

        axios.get(api).then((response) => {
            console.log("API request succesful")
            setData(response.data)
        })
        .catch((error) =>{
            console.error("Failed to make an API request:",error);
        });

    }, []);
    return(
        <div className='body'>
                <div className='nav'>

                </div>
                <div className='data'>
                    {/* {data.map((item) => {
                        return(<Service1 data={item}/> );
                    }
                    )} */}

                    <Service1 data={data[6]}/>
                    <Service2 data={data[2]}/>
                    <Service3 data={data[3]}/>
                    <Service4 data={data[5]}/>
                    <Service5 data={data[0]}/>
                    <Service6 data={data[1]}/>
                    <Service7 data={data[4]}/>
                </div>
        </div>
    );
}
export default ApiData;