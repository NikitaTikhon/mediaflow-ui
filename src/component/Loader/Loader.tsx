import {FC} from 'react';
import classes from './Loader.module.css'

interface ILoader {
    outer?: boolean;
    size?: string;
}

const Loader: FC<ILoader> = ({outer, size}) => {
    if (outer) return (
        <div className={classes.outer_spinner_container}>
            <div className={size === "sm" ? classes.sm_spinner : classes.spinner}>
            </div>
        </div>
    );

    return (
        <div className={size === "sm" ? classes.sm_spinner : classes.spinner}>
        </div>
    );
};

export default Loader;