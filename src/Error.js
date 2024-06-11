import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
  return (
    
    <div>
     
      <h1 style={
        {
          color: 'red',
          textAlign: 'center',
          margin: '100px'
        }
      
      }>Page Not Found</h1>
      <h3 style={
        {
          color: 'red',
          textAlign: 'center',
          margin: '100px'
        }
      
      
      }>
        {err.status}: {err.statusText}
      </h3>
    </div>
  )
}


export default Error;
