import classes from "./Modal.module.css";
import {FC, ReactNode} from "react";

interface ModalProps {
    setShow: (value: (((prevState: boolean) => boolean) | boolean)) => void;
    setIsLoading?: ((value: (((prevState: boolean) => boolean) | boolean)) => void) | undefined;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({setShow, setIsLoading, children}) => {
    return (
        <div onClick={() => {
            setShow(false);
            setIsLoading && setIsLoading(false);
        }} className={classes.modal_container}>
            <div onClick={(event) => event.stopPropagation()} className={classes.modal_content}>
                <div className={classes.close_container}>
                    <span className={classes.close} onClick={() => setShow(false)}>&times;</span>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;