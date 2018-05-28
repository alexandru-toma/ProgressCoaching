import * as types from '../actions/actionTypes'

const blogReducerDefaultState = [{
    author: 'blog author',
    content: 'blog content',
    date: '',
    name: 'blog name',
    summary: 'blog summary'
}]

export default function blogReducer(state = blogReducerDefaultState, action) {
    const {
        blog,
        blogs,
    } = action
    switch (action.type) {
        case types.GET_ALL_BLOGS:
            return [...blogs]
        case types.ADD_NEW_BLOG:
            return [...state,
                blog
            ]
        case types.DELETE_BLOG:
            return state.filter(({id}) => id !== action.id)
        default:
            return state
    }
}