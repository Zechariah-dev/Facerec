import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.primary.main,
    width: '146px',
    padding: '12px',
    textTransform: 'none',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: theme.palette.common.white,
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const AppButton = ({ children, onClick, size = 'medium', style }) => {
  const classes = useStyles();

  return (
    <Button
      size={size}
      className={!style ? classes.btn : `${classes.btn} ${style}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default AppButton;
