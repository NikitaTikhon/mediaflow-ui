import {useEffect, useRef} from "react";

export interface LoadMoreParams {
    username: string;
    page: number;
}

export const useObserverLoadMore = (setSearchParams: (value: (((prevState: LoadMoreParams) => LoadMoreParams) | LoadMoreParams)) => void, isLoading: boolean) => {
    const observerTarget = useRef(null);

    useEffect(() => {
        if (!isLoading) {
            const observer = new IntersectionObserver(
                entries => {
                    if (entries[0].isIntersecting) {
                        setSearchParams(prevState => ({...prevState, page: prevState.page + 1}));
                    }
                },
                {threshold: 1}
            );

            if (observerTarget.current) {
                observer.observe(observerTarget.current);
            }

            return () => {
                if (observerTarget.current) {
                    observer.unobserve(observerTarget.current);
                }
            };
        }
    }, [observerTarget, isLoading]);

    return observerTarget;
}