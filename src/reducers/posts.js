/* eslint-disable default-case */

import{
    ACTION_CREATE_POST,
    ACTION_DELETE_POST,
    ACTION_UPDATE_POST
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
        case ACTION_DELETE_POST:
            const deleteState ={
                ...state
            }
            delete deleteState[action.payload.id];
            return deleteState;
        break;
        case ACTION_UPDATE_POST:
            const postToUpdate=state[action.payload.id];
            if (postToUpdate){
                return {
                    ...state,
                    [action.payload.id]:{
                        title: action.payload.title || postToUpdate.title,
                        content: action.payload.content || postToUpdate.content,
                    }
                    };
            } else {
                // no post to update
                return state;
            }
        break;
        default:
            return state;
        break;
    }
}