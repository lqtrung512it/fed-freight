import classNames from 'classnames/bind';
import styles from './UserBox.module.scss';

const cx = classNames.bind(styles);

function UserBox({ feedback = false, chatbox = false, search = false, avatarId, name, content }) {
    let id = JSON.stringify(avatarId).replaceAll('"', '');
    // let src = '..' + id + '.jpg';
    // console.log(src);

    // const avatarSrc = require(src);
    const avatarSrc = require('~/assets/images/mono.jpg');
    const classes = cx('wrapper', {
        feedback,
        chatbox,
        search,
    });
    return (
        <div className={classes}>
            <img src={avatarSrc} alt="" className={cx('customer-avatar')}></img>
            <div className={cx('customer-details')}>
                <div className={cx('customer-name')}>{name}</div>
                <div className={cx('customer-text')}>{content}</div>
            </div>
        </div>
    );
}

export default UserBox;
