import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react'
import { axios} from 'react'
import UseContext from './hooks/UseContext'
import UseRef from './hooks/UseRef';
import UseReducer from './hooks/UseReducer';
import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseMemo from './hooks/UseMemo';
import UseCallBack from './hooks/UseCallBack';
import CustomHooksMain from './hooks/CustomHooksMain';


function App() {

  const [count,setCount]=useState(0)
  const [otherCount,setOtherCount]=useState(5)
  const [data, setData] = useState(null);
  //STATE MANAGEMENT
  //useffect without dependencies after  every change its rendering

  // useEffect(()=>{
  // document.title=`${count} times`

  // })

  

   //useffect  dependencies only once rendr when componen t render first time after that not 
  useEffect(()=>{
  document.title=`${otherCount} times`

  },[otherCount])

  //ASYNC OPERATION
  // useEffect(()=>{
  //   fetch('https://api.example.com/data') .then(response => response.json()).then(result => {
  //     // Update state with fetched data
  //     setData(result);
  // })

  // },[])

  //axios
//   useEffect(() => {
//     // Fetch data asynchronously from an API using Axios
//     axios.get('https://api.example.com/data')
//         .then(response => {
//             // Handle successful response
//             setData(response.data);
//         })
//         .catch(error => {
//             // Handle error
//             console.error('Error fetching data:', error);
//         });
// }, []); // Run effect only once after initial render
  
  return (
    <div className="App">
     <div>
      {/* <h3>{count} times</h3>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <h3>{otherCount} times</h3>
      <button onClick={()=>setOtherCount(otherCount+5)}>Increase</button> */}
     </div>

     <div>
            <h2>Asynchronous Data Fetching</h2>
            {data ? (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
        {/* <UseContext></UseContext>
        <UseRef></UseRef>
        <UseReducer></UseReducer> */}
        {/* <UseLayoutEffect></UseLayoutEffect> */}
    {/* <UseMemo></UseMemo> */}
    {/* <UseCallBack></UseCallBack> */}
    <CustomHooksMain></CustomHooksMain>
    

    </div>
  );
}

export default App;
