import { fetchTags } from "./../util/tag_api_util";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
// export const CLEAR_SEARCH = "CLEAR_SEARCH";

const recieveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

// export const clearSearchTerm = () => ({
//   type: CLEAR_SEARCH
// });

export const receiveTags = () => dispatch => {
  return fetchTags().then(tags => dispatch(recieveTags(tags)));
};
