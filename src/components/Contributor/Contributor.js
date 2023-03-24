import classNames from 'classnames/bind';
import styles from './Contributor.module.scss';
import Button from '../Button';
import icons from '~/assets/icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';


const cx = classNames.bind(styles);

function Contributor({ stars, quantity, name }) {
    // const [selectedOption, setSelectedOption] = useState('')

    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

    // const handleButtonClick = () => {
    //     if (selectedOption === 'chat') {
    //         // Do something when chat option is selected
    //     } else if (selectedOption === 'edit') {
    //         // Do something when edit option is selected
    //     }
    // };
    const list = [];
    for (let i = 1; i <= stars; i++) {
        list.push(<img src={icons.star} alt="" className={cx('icon')}></img>);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('detail')}>
                <div className={cx('info')}>
                    <div className={cx('rate')}>
                        <div className={cx('stars')}>{list}</div>
                        <div className={cx('votes')}>{quantity} đánh giá</div>
                    </div>
                    <div className={cx('name')}>{name}</div>
                </div>
                    <Tippy
                        placement="top"
                        interactive
                        render={(attrs) => (
                            <PopperWrapper>
                                <Button option to="/chat">
                                    Nhắn tin
                                </Button>
                                <Button option to="/">
                                    Đặt Giao hàng
                                </Button>
                                
                            </PopperWrapper>
                        )}
                    >
                                <div className={cx('action')}>
                        <Button contact>Liên Lạc</Button>
                </div>
                    </Tippy>
                    
            </div>
        </div>
    );
}

export default Contributor;
