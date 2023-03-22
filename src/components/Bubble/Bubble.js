import classNames from 'classnames/bind';
import styles from './Bubble.module.scss';

const cx = classNames.bind(styles);

function Bubble({ yourself, other, content }) {
    const classes = cx('bubble', {
        yourself,
        other,
    });
    return (
        <div className={cx('wrapper')}>
            <div className={classes}>{content}</div>
        </div>
    );
}

export default Bubble;
