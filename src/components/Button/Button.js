import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    width: '100%',
    margin: '10px',
    padding: '12px',
    maxWidth: '250px',
    fontWeight: 700,
    borderRadius: '10px',
    textTransform: 'none',
    fontSize: '14px',
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
