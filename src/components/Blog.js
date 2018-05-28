import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startGetAllBlogs } from '../actions/blogs'
import ListBlog from './ListBlog'

class Blog extends Component {
    componentDidMount() {
        this.props.startGetAllBlogs()
    }

    render() {
        const { blogs } = this.props
        return (
            <div>
                <ul>
                    {this.props.blogs.map(blog =>
                        ((blog.deleted === false) ?
                            (<ListBlog title={blog.title}
                                        key={blog.id}
                                        author={blog.author}
                                        date={blog.date}
                                        summary={blog.summary}/>) : ''))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startGetAllBlogs: () => dispatch(startGetAllBlogs())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)
