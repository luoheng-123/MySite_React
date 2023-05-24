import { useSelector,useDispatch } from 'react-redux';

function Counter() {
    const dispatch = useDispatch()
    // const {count} = useSelector((state)=>({
    //   count:state.countReducer.count
    // }))
    const count ='ssss'
    const {userInfo} = useSelector((state)=>({
      userInfo:state.userReducer
    }))
  const handleIncrement = () => {
    dispatch({type:'INCREMENT_REQUEST',val:1})

  };
  const handleName = () => {
    dispatch({type:'getUserInfo',val:1})
  };

  const handleDecrement = () => {

  };
  console.log(userInfo);
  return (
    <div>
      <h1>Count: {userInfo.username}</h1>
      <h1>username: {userInfo.age}</h1>
      <button onClick={handleName}>name</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}


export default Counter;