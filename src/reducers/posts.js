/* eslint-disable default-case */

import{
    ACTION_CREATE_POST
} from '../actions';
import { bigIntLiteral } from '@babel/types';

import {generateId} from '../utils';

// A reducer is a function that accepts current state and an action
// then calculates/returns the next new version of state

export function posts(state={}, action={type: ''}){

    switch(action.type) {
        case ACTION_CREATE_POST:
        // create post
        // console.log(`you called create post action`)
        const id = generateId()
        // console.log(`new id is: ${id}`)
        const newState={
            ...state,
            // to use a variable as a key in object literal,
            // wrap the veriable in square brackets
            [id]: action.payload
        }
        // to get the equivalent result
        // use the familiar assignment syntax:
        // newState[id] = action.payload;
        return newState;
        break;
        default:
            return state;
        break;
    }
}