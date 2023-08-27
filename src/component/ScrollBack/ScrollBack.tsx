import {FaAngleUp} from "react-icons/fa";
import classes from "./ScrollBack.module.css"
import {FC, useEffect, useState} from "react";

const ScrollBack: FC = () => {
    const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={classes.top_to_btm}>
            {showTopBtn &&
                <FaAngleUp
                    className={[classes.icon_position, classes.icon_style].join(" ")}
                    onClick={goToTop}
                />
            }
        </div>
    );
};

export default ScrollBack;