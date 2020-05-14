import React , {useState, useEffect} from 'react';
import { myConfig } from './config.js';
import axios from 'axios';
import ReactLoading from 'react-loading';

export default function Bye(props) {

    const [byeMsg, setByeMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    function getBye(){
        let url = myConfig['apiUrl'] + 'bye2';
        setIsLoading(true);
        axios.get(url)
        .then(res => {
        
            setByeMsg(res.data.msg);
            setIsLoading(false);
        })
        .catch( err => {
            // handle error
            setByeMsg('Catch block');
            setIsLoading(false);

            console.log(err);
          });
    
}

useEffect(() => {
    getBye();
    },
 []
);

let msg = null;


if(byeMsg !== '') {
    msg = <div>
        {byeMsg }
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