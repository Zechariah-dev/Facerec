import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'

const useStyles = makeStyles((theme) => ({
    root: {

    },
    scroll: {
        position: 'fixed',
        width: "100%",
        bottom: "20px",
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: theme.zIndex.tooltip,
        cursor: "pointer",
    }
}))


export default function ScrollToTop() {
    const [showScroll, setShowScroll ] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behaviour: 'smooth'});
    }

    window.addEventListener('scroll', checkScrollTop)

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton disableFocusRipple onClick={scrollTop} className={classes.scroll}>
                <ArrowUpwardOutlinedIcon />
            </IconButton>
        </div>
    )
}