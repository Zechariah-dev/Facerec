import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  scroll: {
    position: 'fixed',
    width: '60px',
    aspectRatio: '1/1',
    borderRadius: '50%',
    bottom: '20px',
    right: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.tooltip,
    cursor: 'pointer',
    background: theme.palette.secondary.main,
  },
}));

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behaviour: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        disableFocusRipple
        onClick={scrollTop}
        className={classes.scroll}
      >
        <ArrowUpwardOutlinedIcon style={{ fontSize: 30, color: '#fff' }} />
      </IconButton>
    </div>
  );
}
