import React from 'react';
import Counter from './components/counter';

const App = ({counter}) => {
    console.log(counter);
    return (
        <Counter counter={ counter } />
    );
}

export {App};
