import classNames from 'classnames/bind';
import styles from './Contributor.module.scss';
import Button from '../Button';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function Contributor({ stars, quantity, name }) {
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
                <div className={cx('action')}>
                    <Button contact>Liên Lạc</Button>
                </div>
            </div>
        </div>
    );
}

export default Contributor;
