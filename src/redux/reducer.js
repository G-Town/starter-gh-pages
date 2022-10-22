import { REDITEMS } from '../shared/reditems';
import { COMMENTS } from '../shared/comments';
import { BLUEITEMS } from '../shared/blueitems';
import { GREENITEMS } from '../shared/greenitems';

export const initialState = {
    reditems: REDITEMS,
    comments: COMMENTS,
    blueitems: BLUEITEMS,
    greenitems: GREENITEMS
};

export const Reducer = (state = initialState, action) => {
    return state;
};