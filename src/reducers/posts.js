/* eslint-disable default-case */

import{
    ACTION_CREATE_POST
} from '../actions';
import { bigIntLiteral } from '@babel/types';

// A reducer is a function that accepts current state and an action
// then calculates/returns the next new version of state

export function posts(state={}, action={type: ''}){

    switch(action.type) {
        case ACTION_CREATE_POST:
        // create post
        console.log(`you called create post action`)
        break;
        default:
            return state;
        break;
    }
}