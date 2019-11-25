/******************************* Reducer Actions *************************************/
export const PUT_GAMES = 'PUT_GAMES';
export const putGames = (games = []) => { 
    return {
        type: PUT_GAMES,
        games
    };
};

export const PUT_UI = 'PUT_UI';
export const putUi = (ui = {}) => { 
    return {
        type: PUT_UI,
        ui
    };
};


/******************************* Saga Actions *************************************/
export const GET_APP_DATA = 'GET_APP_DATA';
export const getAppData = () => {
    return {
        type: GET_APP_DATA
    };
};

export const GET_GAMES = 'GET_GAMES';
export const getGames = () => {
    return {
        type: GET_GAMES
    };
};
