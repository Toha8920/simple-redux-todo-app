import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from './redux/todos/actions';
import addTodo from './redux/todos/thunk/addTodo';

const Header = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(input));
        setInput('')
    }

    const completeAll = () => {
        dispatch(allCompleted())
    }

    const clearCompletedAlll = () => {
        dispatch(clearCompleted())
    }
    return (
        <div>
            <form class="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSubmit}>
                <img src="./images/notes.png" class="w-6 h-6" alt="Add todo" />
                <input type="text" placeholder="Type your todo" value={input} onChange={handleInput}
                    class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" />
                <button type="submit"
                    class="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"></button>
            </form>

            <ul class="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={completeAll} class="flex space-x-1 cursor-pointer">
                    <img class="w-4 h-4" src="./images/double-tick.png" alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li class="cursor-pointer" onClick={clearCompletedAlll}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;