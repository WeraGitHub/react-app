import React , {useState, useEffect} from 'react';
import { myConfig } from './config.js';
import axios from 'axios';
import ReactLoading from 'react-loading';

export default function Hello(props) {

    const [helloMsg, setHelloMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    function getHello(){
        let url = myConfig['apiUrl'] + 'hello2';
        setIsLoading(true);
        axios.get(url)
        .then(res => {
        
            setHelloMsg(res.data.msg);
            setIsLoading(false);
        })
        .catch( err => {
            // handle error
            setHelloMsg('Catch block');
            setIsLoading(false);

            console.log(err);
          });
    
}

useEffect(() => {
    getHello();
    },
 []
);

// let helloMsg = null;
let msg = null;


if(helloMsg !== '') {
    msg = <div>
        {helloMsg }
        </div>;
}

return (

<div className="Body">
    <p>&nbsp;</p>
    {msg}
    {isLoading &&
                <ReactLoading type="spinningBubbles" color="#444" />
                }
        </div>
    );
}