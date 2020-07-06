import React from 'react'
import { connect } from 'react-redux';
import './Counter.css'
const mapStateToProps = ({count}) => {
    return {count}
}
const Counter = (props) => {
const increment = () => {
    props.dispatch({type: 'INCREMENT'})
}
const decrement = () => {
    props.dispatch({type: 'DECREMENT'})
}

    return(
    <div className="container_counter">
      <div>
        <button onClick={() => increment()}>+</button>
        <span>{props.count}</span>
        <button onClick={() => decrement()}>-</button>
      </div>
    </div>
    )
}


export default connect(mapStateToProps)(Counter);