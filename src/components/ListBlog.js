import React from 'react'
import { Header, Image, Button, Icon } from 'semantic-ui-react'

const ListBlog = (props) => (
    <div>
        <Header as='h2'>
            <Image src='http://placehold.it/120x120&text=image1' />
            {props.title}
            <Header.Subheader>
                {props.date} / {props.author}
            </Header.Subheader>
            <Header.Subheader>
                {props.summary}
            </Header.Subheader>
            <Button animated>
                <Button.Content visible>Read more</Button.Content>
                <Button.Content hidden>
                    <Icon name='book' />
                </Button.Content>
            </Button>
        </Header>
    </div>
)

export default ListBlog