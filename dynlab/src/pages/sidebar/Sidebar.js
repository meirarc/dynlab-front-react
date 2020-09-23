import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// Material Icons
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

// Material Core
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// css
import './Sidebar.css';

import { SignOut } from 'aws-amplify-react';


const sidelist = [
    {name: 'Dashboard', path: '/dashboard', icon: <DashboardIcon />}, 
    {name: 'Crypto', path: 'crypto', icon: <MonetizationOnIcon />},
    {name: 'Carteira', path: '/wallet', icon: <AccountBalanceWalletIcon />},
    {name: 'To-do', path: '/todo', icon: <FormatListBulletedIcon />},
    {name: 'Profile', path: '/profile', icon: <AccountCircleIcon />},
];



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sidelist.map((text, index) => (
          <ListItemLink href={text.path}>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
            </ListItemLink>
        ))}
      </List>
      <Divider />
      <List>
        
            <ListItem>
                <SignOut />
            </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <div className='fab'>
            <Fab size="small" color="primary" aria-label="add" className={classes.margin} onClick={toggleDrawer('bottom', true)}>
            <AddIcon />
        </Fab>

        </div>
        
        <Drawer anchor={'bottom'} open={state['bottom']} onClose={toggleDrawer('bottom', false)}>
            {list('bottom')}
          </Drawer>
    </div>
  );
}