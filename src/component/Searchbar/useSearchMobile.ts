import classes from "./UserSearchbar.module.css";
import React, {useEffect} from "react";
import {useComponentVisible} from "../../hooks/useComponentVisible";

interface SearchMobileInf {
    outerSearchbarContainerRef: React.MutableRefObject<HTMLDivElement | null>;
    showMobileSearchbar: () => void;
    hideMobileSearchbar: () => void;
    showSearchResult: boolean;
}

const useSearchMobile = (): SearchMobileInf  => {
    const {
        ref: outerSearchbarContainerRef,
        isComponentVisible: showSearchResult,
        setIsComponentVisible: setShowSearchResult
    } = useComponentVisible(false);

    const showMobileSearchbar = () => {
        if (mobileWindowWidth()) {
            outerSearchbarContainerRef.current?.children[0].classList.add(classes.mobile);
            outerSearchbarContainerRef.current?.children[0].children[0].classList.add(classes.mobile);
            outerSearchbarContainerRef.current?.children[0].children[0].children[0].classList.add(classes.mobile);
            outerSearchbarContainerRef.current?.children[0].children[1].classList.add(classes.mobile);
            outerSearchbarContainerRef.current?.children[0].children[2].classList.add(classes.mobile);
        }
        (<HTMLInputElement> outerSearchbarContainerRef.current?.children[1]).focus();
    }

    const hideMobileSearchbar = () => {
        outerSearchbarContainerRef.current?.children[0].classList.remove(classes.mobile);
        outerSearchbarContainerRef.current?.children[0].children[0].classList.remove(classes.mobile);
        outerSearchbarContainerRef.current?.children[0].children[0].children[0].classList.remove(classes.mobile);
        outerSearchbarContainerRef.current?.children[0].children[1].classList.remove(classes.mobile);
        outerSearchbarContainerRef.current?.children[0].children[2].classList.remove(classes.mobile);
        setShowSearchResult(false);
    }

    useEffect(() => {
        !showSearchResult && hideMobileSearchbar();
    }, [showSearchResult])

    const mobileWindowWidth = () => window.innerWidth <= 480;

    return {outerSearchbarContainerRef, showMobileSearchbar, hideMobileSearchbar, showSearchResult}
}

export default useSearchMobile;