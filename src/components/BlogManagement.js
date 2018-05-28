import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAddNewBlog, startDeleteBlog } from '../actions/blogs'
import { Button, Header, Modal, Form } from 'semantic-ui-react'

class BlogManagement extends Component {
    state = {
        open: false,
        author: '',
        content: '',
        date: '',
        summary: '',
        title: '',
    }
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleSubmit = () => {
        const {author, content, date, summary, title} = this.state
      const blog = {
          author: author,
          content: content,
          date: date,
          summary: summary,
          title: title,
          votes: 0,
          deleted: false
      }  
      this.props.startAddNewBlog(blog)
      this.setState({
        author: '',
        content: '',
        date: '',
        summary: '',
        title: '',
        open: false
      })
    }

    onDeleteBlog = () =>{
        this.props.startDeleteBlog('-LDaSrBBfAXXMp9firnj')
    }
    render() {
        const {
            author,
            content,
            date,
            summary,
            title
        } = this.state

        return (
            <div>
            <Button onClick={this.show}>Add New Blog</Button>
                <Modal dimmer='blurring'
                    style={inlineStyle.modal}
                    open={this.state.open}
                    onClose={this.close}>
                    <Modal.Header>Add New Blog</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit} success>
                            <Form.Group>
                                <Form.Input placeholder='Title' name='title' value={title} onChange={this.handleChange} width={8} required />
                                <Form.Input placeholder='Author' name='author' value={author} onChange={this.handleChange} width={8} required />
                            </Form.Group>
                                <Form.Input placeholder='Summary' name='summary' value={summary} onChange={this.handleChange} />
                                <Form.TextArea placeholder='Content' name='content' value={content} onChange={this.handleChange} />
                                <Form.Input placeholder='Date' name='date' value={date} onChange={this.handleChange} />
                                <Form.Button content='Submit' />
                        </Form>
                    </Modal.Content>
                </Modal>
                <Button primary onClick={this.onDeleteBlog}>Delete Blog</Button>
            </div>
        )
    }
}
const inlineStyle = {
    modal : {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startAddNewBlog: (blog) => dispatch(startAddNewBlog(blog)),
        startDeleteBlog: (id) => dispatch(startDeleteBlog(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogManagement)
