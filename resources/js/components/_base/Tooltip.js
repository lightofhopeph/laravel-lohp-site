import React, {useState} from 'react';
import {Tooltip as MaterialTooltip} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

function arrowGenerator(color) {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.95em',
            width: '2em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${color} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.95em',
            width: '2em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${color} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.95em',
            height: '2em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${color} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.95em',
            height: '2em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${color}`,
            },
        },
    };
}

const useStyles = makeStyles(() => ({
    arrow: {
        position: 'absolute',
        fontSize: 6,
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    popper: arrowGenerator('#009EFF'),
    tooltip: {
        position: 'relative',
        backgroundColor: '#009EFF',
        fontSize: 12,
        padding: '4px 12px',
        borderRadius: 3,
        letterSpacing: 0.5,
        fontFamily: 'Basis Grotesque Pro, sans-serif',
        maxWidth: 180,
    },
    tooltipPlacementLeft: {
        margin: '0 8px',
    },
    tooltipPlacementRight: {
        margin: '0 8px',
    },
    tooltipPlacementTop: {
        margin: '8px 0',
    },
    tooltipPlacementBottom: {
        margin: '8px 0',
    },
}));

const Tooltip = ({...rest}) => {
    const {arrow, ...classes} = useStyles();
    const [arrowRef, setArrowRef] = useState(null);

    return (
        <MaterialTooltip
            classes={classes}
            PopperProps={{
                popperOptions: {
                    modifiers: {
                        arrow: {
                            enabled: Boolean(arrowRef),
                            element: arrowRef,
                        },
                    },
                },
            }}
            {...rest}
            title={
                <>
                    {rest.title}
                    <span className={arrow} ref={setArrowRef} />
                </>
            }
        />
    );
};

export default Tooltip;
