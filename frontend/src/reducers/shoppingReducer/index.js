const initialState = {
    action: "",
    status: "loading",
    data: "Loading",
};

const shoppingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                action: "ADD_TO_CART",
                status: payload.status,
                data: payload.data
            }
        case "GET_CART_BY_USER_ID":
            return {
                ...state,
                action: "GET_CART_BY_USER_ID",
                status: payload.status,
                data: payload.data
            }
        case "GET_ORDER_BY_USER_ID":
            return {
                ...state,
                action: "GET_ORDER_BY_USER_ID",
                status: payload.status,
                data: payload.data
            }
        case "CHECKOUT":
            return {
                ...state,
                action: "CHECKOUT",
                status: payload.status,
                data: payload.data
            }
        case "UPDATE_PAYMENT":
            return {
                ...state,
                action: "UPDATE_PAYMENT",
                status: payload.status,
                data: payload.data
            }
        case "EDIT_LINE_ITEM":
            return {
                ...state,
                action: "EDIT_LINE_ITEM",
                status: payload.status,
                data: payload.data
            }
        case "DELETE_LINE_ITEM":
            return {
                ...state,
                action: "DELETE_LINE_ITEM",
                status: payload.status,
                data: payload.data
            }
        default:
            return state;
    }
}

export default shoppingReducer