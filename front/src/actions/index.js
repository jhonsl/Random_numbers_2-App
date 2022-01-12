export const fetchRandom = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`https://app-random-back.herokuapp.com/r`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({list: state}) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}

export const fetchRandomRange = (state) => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`https://app-random-back.herokuapp.com/r/range`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state) // body data type must match "Content-Type" header
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result", data: json });
          dispatch({ type: "view-loaded" });
        })
}

export const GetAll = () => (dispatch) => {

    dispatch({ type: "view-loading" });

    return fetch(`https://app-random-back.herokuapp.com/r`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: "random-result-all", data: json });
          dispatch({ type: "view-loaded" });
        })
}