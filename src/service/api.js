const URL = "https://api.chess.com/pub/player/";


export const getUserChess = (name) => {
  return fetch(`${URL}${name}`)
    .then((res) => res.json())
    .catch((err) => err);
};

export const getUserChessStats = (name) => {
  return fetch(`${URL}${name}/stats`)
    .then((res) => res.json())
    .catch((err) => err);
};


