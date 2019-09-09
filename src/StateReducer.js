import { imageUrls } from './Assets/imageUrls.json';
import { INCREMENT_LIKE, DECREMENT_LIKE } from './StateActions'

// Adiciona uma prop "likeCounter" em cada objeto da lista de imagens extraída do JSON e armazena em uma nova lista.
const imageList = imageUrls.map(imageUrl => {
  imageUrl.likeCounter = 0;
  return imageUrl;
});

export const initialState = { imageList };

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_LIKE:
      return {
        ...state,
        imageList: state.imageList.map(image => {
          if (image.id === action.id) {
            return { ...image, likeCounter: image.likeCounter + 1 };
          }
          return image;
        })
      };
    case DECREMENT_LIKE:
      return {
        ...state,
        imageList: state.imageList.map(image => {
          if (image.id === action.id) {
            return { ...image, likeCounter: image.likeCounter - 1 };
          }
          return image;
        })
      };
    default:
      return state;
  }
};
