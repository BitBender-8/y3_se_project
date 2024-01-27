'use client';

import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
  Image,
  Avatar,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
} from '@nextui-org/react';
import { CartIcon } from '../Icons/CartIcon';

function DisplayNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className=' flex items-center rounded bg-amber-700/50'
    >
      <NavbarContent>
        <NavbarBrand className='flex flex-row gap-2'>
          <Image src='Eneho_books_logo.png' alt='Bookstore logo' width={70} />
          <p className='text-xl font-bold'>እነሆ መጻሕፍት</p>
        </NavbarBrand>
      </NavbarContent>

      <div className='flex flex-row gap-5'>
        <Badge color='danger' content={50} shape='circle'>
          <Button
            radius='full'
            isIconOnly
            aria-label='more than 99 notifications'
            variant='light'
          >
            <CartIcon size={30} />
          </Button>
        </Badge>

        <NavbarContent as='div' justify='end'>
          <Dropdown placement='bottom-end'>
            <DropdownTrigger>
              <Avatar
                isBordered
                as='button'
                className='transition-transform'
                color='secondary'
                name='Test User'
                size='sm'
                src=''
              />
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
              <DropdownItem key='profile' className='h-14 gap-2'>
                <p className='font-semibold'>Signed in as</p>
                <p className='font-semibold'>test@example.com</p>
              </DropdownItem>
              <DropdownItem key='settings'>My Settings</DropdownItem>
              <DropdownItem key='team_settings'>Change Username</DropdownItem>
              <DropdownItem key='analytics'>Analytics</DropdownItem>
              <DropdownItem key='logout' color='danger'>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </div>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />

      <NavbarMenu>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Search Books
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Latest Books
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default DisplayNavbar;
