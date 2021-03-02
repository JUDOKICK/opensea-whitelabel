import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import rndrLogo from "../../static/images/rndrLogo.png";
import ResponsiveHeader from 'dna-responsive-nav'
import 'semantic-ui-css/semantic.min.css'
import '../../static/styles/dna-rn.css'


const links =(
    <ul>
        <li key='about-menu'>
            <a
                className={'test'}
                href='https://rendertoken.com/index#about'
            >
                About
            </a>
        </li>
        <li key='intro-menu'>
            <a
                className={'test2'}
                href='https://rendertoken.com/index#intro'
            >
                Render Token
            </a>
        </li>
        <li key='problem-menu'>
            <a
                className={'test3'}
                href='https://rendertoken.com/index#problem'
            >
                The Problem
            </a>
        </li>
        <li key='team-menu'>
            <a
                className={'test4'}
                href='https://rendertoken.com/index#team'
            >
                Team & Advisors
            </a>
        </li>
        <li key='roadmap-menu'>
            <a
                className={'test5'}
                href='https://rendertoken.com/index#roadmap'
            >
                Roadmap
            </a>
        </li>
    </ul>
);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f0f3f5',
        color: '#000000'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    links: {

    },
    logoImage: {
        width: 100,
        height: 50

    },
    navBar: {
        color: '#000000'
    }
}));

export default function HeaderBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ResponsiveHeader
                siteName=''
                links={links}
                logo={rndrLogo}
            />
        </div>
    );
}
