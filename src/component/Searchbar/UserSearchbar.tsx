import {FC} from 'react';
import classes from "./UserSearchbar.module.css"
import {IoSearch} from "react-icons/io5";
import SearchResultUserList from "./SearchResultList/SearchResultUserList";
import useSearch from "./useSearchMobile";
import useUserSearch from "./useUserSearch";

const UserSearchbar: FC = () => {
    const {
        outerSearchbarContainerRef,
        showMobileSearchbar,
        hideMobileSearchbar,
        showSearchResult
    } = useSearch();

    const {
        users,
        usersAreLoading,
        usersError,
        activeUsername,
        searchUserParams,
        setSearchUserParams,
        isLoadMore
    } = useUserSearch();

    return (
        <div style={{display: 'flex'}}>
            <div ref={outerSearchbarContainerRef} className={classes.outer_searchbar_container}>
                <div className={classes.searchbar_container}>
                    <div className={classes.close_button_mobile_searchbar}>
                        <a onClick={hideMobileSearchbar} href="#">X</a>
                    </div>
                    <input
                        type="search"
                        onChange={e => {
                            setSearchUserParams({username: e.target.value, page: 0});
                        }}
                        className={classes.search_input}
                    />
                    <IoSearch onClick={() => showMobileSearchbar()}
                              className={classes.search_icon}/>
                </div>
                {showSearchResult &&
                    <SearchResultUserList
                        users={users}
                        usersAreLoading={usersAreLoading}
                        usersError={usersError}
                        activeUsername={activeUsername}
                        searchUserParams={searchUserParams}
                        setSearchUserParams={setSearchUserParams}
                        isLoadMore={isLoadMore}
                    />
                }
            </div>
        </div>
    );
};

export default UserSearchbar;