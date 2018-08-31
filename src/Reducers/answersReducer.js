export default function(state = [], action){
    switch(action.type) {
        case 'SET ANSWERS':
        return [action.payload];
        break;
    default: 
        return state
    }
}