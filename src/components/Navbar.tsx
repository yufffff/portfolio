import {FC} from 'react'
import { Link } from 'react-scroll';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

const Navbar: FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <Link to='about' smooth='true'>
            <Button color='inherit'>
              ABOUT
            </Button>
          </Link>
          <Link to='skills' smooth='true'>
            <Button color='inherit'>
              SKILLS
            </Button>
          </Link>
          <Link to='works' smooth='true'>
            <Button color='inherit'>
              Works
            </Button>
          </Link>
          <Link to='contact' smooth='true'>
            <Button color='inherit'>
            CONTACT
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
