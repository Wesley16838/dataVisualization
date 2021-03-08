import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_TIMES = gql`
  mutation AddTimes($type: String!) {
    addtimes(type: $type) {
      id
      value
      time
    }
  }
`;
function Dashboard() {
    // Declare a new state variable, which we'll call "count"
    const [addtimes, { data }] = useMutation(ADD_TIMES);
    return (
        <div>
            <button onClick={() => addtimes({variables: {value: 'a'}})}>
                a
            </button>
            <button onClick={() => addtimes({ variables: { value: 'b'}})}>
                b
            </button>
            <button onClick={() => addtimes({ variables: { value: 'c'}})}>
                c
            </button>
        </div>
    );
}
export default Dashboard;