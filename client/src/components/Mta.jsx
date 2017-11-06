import React from 'react';


const Mta = props => {
  return (
    <div>
      <h3>This component is for test purposes ONLY!!</h3>
      <p>Enter the number in the input field by the train of your choice from below...</p>
      <li>1 for Train Lines - 1, 2, 3, 4, 5, 6, S</li>
      <li>26 for Train Lines - A, C, E</li>
      <li>16 for Train Lines - N, Q, R, W</li>
      <li>21 for Train Lines - B, D, F, M</li>
      <li>2 for Train Line - L</li>
      <li>36 for Train Lines - J, Z</li>
      <li>31 for Train Line - G</li>
      <li>11 for Staten Island Railway</li>
      <input type="number"
        name="field_id"
        value={props.field_id}
        onChange={props.handleOnChange} 
        placeholder="field id"
      /> <br />
      <input type="text" 
        name="line"
        value={props.line}
        onChange={props.handleOnChange}
        placeholder="Train Line"
      /> <br />
      <input type="button" value="submit" onClick={props.handleMtaLookup} />
    </div>
  )
}

export default Mta;