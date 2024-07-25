import classes from './Link.module.css';

export default function Link(props: LinkProps) {
    return (
        <a href={props.href} className={classes.link} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
}

export interface LinkProps {
    href: string;
    children: React.ReactNode;
}
