import classNames from 'classnames/bind';
import styles from './ContributorList.module.scss';
import icons from '~/assets/icons/icons';
import Button from '~/components/Button';
import Contributor from '~/components/Contributor';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import UserBox from '~/components/UserBox';

const cx = classNames.bind(styles);

function ContributorList() {
    const [searchResult, setSearchResult] = useState([]);
    const [contributor, setContributor] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000/contributorList');
        const json = await response.json();
        const data = json.user;
        setContributor(data);
    };

    useEffect(() => {
        console.log(contributor);
    }, [contributor]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1]);
    //     }, 5000);
    // }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('content')}>
                    <div className={cx('content-heading')}>Việc gì khó, đã có chúng tôi lo</div>
                    <Tippy
                        placement="bottom"
                        interactive
                        visible={searchResult.length > 0}
                        //     render={(attrs) => (
                        //         <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        //             <PopperWrapper>
                        //                 <h4 className={cx('search-title')}>Accounts</h4>
                        //                 <UserBox search avatarId="mono" name="Moi Moi Moi" content="moimoimoimoi"></UserBox>
                        //                 <UserBox search avatarId="mono" name="Moi Moi Moi" content="moimoimoimoi"></UserBox>
                        //                 <UserBox search avatarId="mono" name="Moi Moi Moi" content="moimoimoimoi"></UserBox>
                        //                 <UserBox search avatarId="mono" name="Moi Moi Moi" content="moimoimoimoi"></UserBox>
                        //             </PopperWrapper>
                        //         </div>
                        //     )
                        // }
                    >
                        <div className={cx('search-container')}>
                            <img src={icons.blackSearch} alt="" className={cx('logo')}></img>
                            <input type="text" className={cx('input')} placeholder="Tìm kiếm Nhà Phân Phối"></input>
                            <Button search>Tìm Kiếm</Button>
                        </div>
                    </Tippy>
                    <div className={cx('contributor-list')}>
                        {contributor &&
                            Array.isArray(contributor) &&
                            contributor.map((value, index) => (
                                <Contributor
                                    stars={value.stars}
                                    quantity={value.quantity}
                                    name={value.userName}
                                    key={index}
                                ></Contributor>
                            ))}

                        {/* <Contributor stars="5" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="4" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="3" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="2" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="1" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="5" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="4" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="3" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="2" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="5" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="4" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="3" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="2" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="5" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="4" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="3" quantity="2346" name="Moi Moi Moi"></Contributor>
                        <Contributor stars="2" quantity="2346" name="Moi Moi Moi"></Contributor> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContributorList;
