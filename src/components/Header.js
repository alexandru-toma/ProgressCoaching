import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'

const Header = () => (
    <Menu>
        <Menu.Item as={NavLink} to='/' exact={true}>
            Home
        </Menu.Item>
        <Menu.Item as={NavLink} to='/blog' exact={true}>
            Blog
        </Menu.Item>
        <Menu.Item as={NavLink} to='/services' exact={true}>
            Services
        </Menu.Item>
        <Menu.Item as={NavLink} to='/testimonials' exact={true}>
            Testimonials
        </Menu.Item>
        <Menu.Item as={NavLink} to='/contact' exact={true}>
            Contact
        </Menu.Item>
        <Dropdown text='More' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to='/news' exact={true}>
                    News
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to='/aboutus' exact={true}>
                    About Us
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='Admin' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to='/blogmanagement' exact={true}>
                    Blog Management
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu>
);

export default Header