// Action types
export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';


// Action Creators
export function createPost(payload){
    // assumes that the `data` argument looks like this:
    // {
    // title: 'lorem upsum.'
    // content: 'lorem upsum.'
    // }
    return {
        type: ACTION_CREATE_POST,
        payload
    }
};

export function updatePost(){
    return {

    }
};

// comment out later
window.createPost= createPost;

export function deletePost(){
    return {

    }
};
