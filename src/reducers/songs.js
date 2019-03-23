import { ACTIONS } from "../actions/songs";

const initialState = {
  songs: [
    {
      id: 1,
      name: "Reptilia",
      artist: "The Strokes",
      album: "Room on Fire",
      photo: "https://i.ibb.co/02BvcgS/reptilia.jpg",
      rating: 4
    },
    {
      id: 2,
      name: "Fix you",
      artist: "Coldplay",
      album: "X&Y",
      photo: "https://i.ibb.co/YdYX00m/fixyou.jpg",
      rating: 2
    },
    {
      id: 3,
      name: "Take on me",
      artist: "Weezer",
      album: "Weezer",
      photo: "https://i.ibb.co/mzBvcXt/takeonme.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "Prove you wrong",
      artist: "Mike Shinoda",
      album: "Post Traumatic",
      photo: "https://i.ibb.co/QCS6LjT/proveyouwrong.jpg",
      rating: 1
    },
    {
      id: 5,
      name: "Otherside",
      artist: "Red Hot Chili Peppers",
      album: "Californication",
      photo: "https://i.ibb.co/J20vcnk/otherside.jpg",
      rating: 3
    },
    {
      id: 6,
      name: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      album: "From Memphis To Vegas/From Vegas to Memphis",
      photo: "https://i.ibb.co/pWYFTq5/elvis.jpg",
      rating: 0
    },
    {
      id: 7,
      name: "One More Light",
      artist: "Linkin Park",
      album: "One More Light",
      photo: "https://i.ibb.co/Dw6nmzT/onemorelight.jpg",
      rating: 5
    },
    {
      id: 8,
      name: "Du Hast",
      artist: "Rammstein",
      album: "Sehnsucht",
      photo: "https://i.ibb.co/2t4vNmw/duhast.jpg",
      rating: 0
    },
    {
      id: 9,
      name: "Firestone ft. Conrad Sewell",
      artist: "Kygo",
      album: "Firestone",
      photo: "https://i.ibb.co/JC8NrZs/firestone.jpg",
      rating: 2
    },
    {
      id: 10,
      name: "Feel Good Inc.",
      artist: "Gorillaz",
      album: "Demon Days",
      photo: "https://i.ibb.co/XZqkctD/feelgoodinc.jpg",
      rating: 3
    }
  ]
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.RATE:
      return {
        ...state,
        songs: state.songs.map(song =>
          song.id === action.payload.id
            ? { ...song, rating: action.payload.rating }
            : song
        )
      };
    default:
      return state;
  }
};

export default songsReducer;
