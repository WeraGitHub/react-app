import React , {useState, useEffect} from 'react';
import { myConfig } from './config.js';
import axios from 'axios';
import ReactLoading from 'react-loading';

const List = () => {

    const [listRoutes, setListRoutes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function getRoutes(){
        let url = myConfig['apiUrl'] + 'list2';
        setIsLoading(true);
        axios.get(url)
        .then(res => {
        
            setListRoutes(res.data.Routes);
            console.log(listRoutes);
            setIsLoading(false);
        })
        .catch( err => {
            // handle error
            setListRoutes('Catch block');
            setIsLoading(false);

            console.log(err);
          });
    
}

useEffect(() => {
    getRoutes();
    },
 []
);

let routes = null;

routes = listRoutes.map(route => 
    <div key={route}>
        <li>{route}</li>
    </div>)


  return (
    <div className="lefty">
      <p>List of Routes for the Python API</p>
      <ul>
      {routes}
      </ul>
      {isLoading &&
                <ReactLoading type="spinningBubbles" color="#444" />
                }
    </div>
  );
}

export default List;
