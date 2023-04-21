
const initialState = {



    cards: [],

    activeCard: []


}



const reducer = (state = initialState, action) => {

    switch (action.type) {


        case 'ADD':
            return {
                cards:
                    [...state.cards, action.payload],

                activeCard: [...state.activeCard]
            }

        case 'ACTIVE':
            return {
                activeCard:
                    [state.activeCard = action.payload],
                cards:    
                    [...state.cards]
            }

        case 'DELETE': 
            return {
                cards: 
                state.cards.filter(elem => elem !== action.payload),
                activeCard:
                [...state.activeCard.filter(elem => elem !== action.payload)]
          
            }    


        default:
            return state
    }
}



export default reducer;

// 