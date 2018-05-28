import * as types from './actionTypes'
import database from '../firebase/firebase'

export const getAllBlogsSuccess = (blogs) => {
    return { type: types.GET_ALL_BLOGS, blogs }
}

export const startGetAllBlogs = () => dispatch => {
    return database.ref('blogs')
        .once('value').then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })

            dispatch(getAllBlogsSuccess(blogs))
        })
}

export const getTopBlogsSuccess = (blogs) => {
    return { type: types.GET_TOP_BLOGS, blogs }
}

export const addNewBlogSuccess = (blog) => {
    return { type: types.ADD_NEW_BLOG, blog }
}
  
  export const startAddNewBlog = (blog) => dispatch => {  
      return database.ref('blogs').push(blog).then((ref) => {
        dispatch(addNewBlogSuccess({
          id: ref.key,
          ...blog
        }))
      })
    }

export const editBlogSuccess = (blog) => {
    return { type: types.EDIT_BLOG, blog }
}

export const voteUpBlogSuccess = (blog) => {
    return { type: types.VOTE_UP_BLOG, blog }
}

export const voteDownBlogSuccess = (blog) => {
    return { type: types.VOTE_DOWN_BLOG, blog }
}

export const deleteBlogSuccess = (blog) => {
    return { type: types.DELETE_BLOG, blog }
}

export const startDeleteBlog = (id) => dispatch => {
      return database.ref(`blogs/${id}`).remove().then(() => {
        dispatch(deleteBlogSuccess(id))
      })
  }

export const deleteAllBlogsSuccess = (blogs) => {
    return { type: types.DELETE_ALL_BLOGS, blogs }
}