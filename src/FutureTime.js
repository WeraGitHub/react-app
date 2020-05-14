import React , {useState, useEffect} from 'react';
import { myConfig } from './config.js';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import querystring from 'query-string';

const FutureTime = () => {
    const [futureTime, setFutureTime] = useState('');
    const [hoursAdded, setHoursAdded] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        getFutureTime();
    }

    function getFutureTime(){
        let url = myConfig['apiUrl'] + 'futuretime2';
        setIsLoading(true);
        axios.post(`${url}`, querystring.stringify({'num_hours': hoursAdded}))
        // axios.post(url)
        .then(res => {
        
            setFutureTime(res.data.futuretime);
            setHoursAdded(res.data.hours_added);
            console.log(futureTime);
            setIsLoading(false);
        })
        .catch( err => {
            // handle error
            setFutureTime('Catch block');
            setIsLoading(false);

            console.log(err);
          });
    
}

useEffect(() => {
    getFutureTime();
    },
 []
);

  return (
    <div>
      <h3>Changed Time</h3>
      {!isLoading &&  
        <div className="Body">
        <p>&nbsp;</p>
    <Form inline="false" onSubmit={handleSubmit}>
    <FormGroup controlId="numHoursID">
    <FormControl type="label" htmlFor="numHoursID" value="Number of Hours" readOnly />
    <FormControl type="text" placeholder="Number of hours" name="numHoursID"
    value={hoursAdded}
    onChange={e=> setHoursAdded(e.target.value)}
    />
    </FormGroup>
    <p>&nbsp;</p>
    <Button type="submit">Retrieve Changed Date and Time</Button>
    <p>&nbsp;</p>
    </Form>
    {isLoading &&
                <ReactLoading type="spinningBubbles" color="#444" />
                }
    </div>
}
{!isLoading && 
    <div>
    <p>Local Data and Time with {hoursAdded} hour(s) Added</p>
    <p>{futureTime}</p>
        
    </div>
    }
    </div>
  );
}

export default FutureTime;
