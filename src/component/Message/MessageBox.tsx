import {FC, ReactNode} from 'react';
import classes from "./MessageBox.module.css";

interface MessageBoxInf {
    children: ReactNode
    noFill?: boolean
}

const MessageBox: FC<MessageBoxInf> = ({children, noFill}) => {
    return (
        noFill
            ? <div style={{flexGrow: "0"}} className={classes.message_container}>
                {children}
            </div>

            : <div className={classes.message_container}>
                {children}
            </div>
    );
};

export default MessageBox;