import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='secondary' light expand='md'>
        <Link className='text-light nav-link' to='/'>
          FashionTech
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className='ml-5 text-light nav-link' to='/'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className='ml-5 text-light nav-link' to='products'>
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link className='ml-5 text-light nav-link' to='about'>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link className='ml-5 text-light nav-link' to='cart'>
                Card
              </Link>
            </NavItem>
            <NavItem>
              <Link className='ml-5 text-light nav-link' to='login'>
                Login
              </Link>
            </NavItem>
          </Nav>
          <form class='form-inline my-2 my-lg-0'>
            <input
              class='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button class='btn btn-outline-success my-2 my-sm-0 ' type='submit'>
              Search
            </button>
          </form>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
