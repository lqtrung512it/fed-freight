import classNames from 'classnames/bind';
import styles from './Chat.module.scss';
import icons from '~/assets/icons/icons';
import UserBox from '~/components/UserBox';
import Bubble from '~/components/Bubble';
const cx = classNames.bind(styles);

function Chat() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('search-container')}>
                    <div className={cx('search')}>
                        <img src={icons.search} alt="" className={cx('logo')}></img>
                        <input type="text" className={cx('input')} placeholder="Tìm kiếm người dùng"></input>
                    </div>
                </div>
                <div className={cx('chat-container')}>
                    <div className={cx('chat-list')}>
                        <UserBox
                            chatbox
                            avatarId={'mono'}
                            name={'Nguyễn Việt Hoàng'}
                            content={
                                'Bữa có concert bảo anh Tùng bên Hàn gửi về mấy quả dưa chuột ăn giải khát, mình đang diễn khát khô cổ mà shipper giao lên tận sân khấu!'
                            }
                        ></UserBox>
                        <UserBox
                            chatbox
                            avatarId={'mono'}
                            name={'Nguyễn Việt Hoàng'}
                            content={
                                'Bữa có concert bảo anh Tùng bên Hàn gửi về mấy quả dưa chuột ăn giải khát, mình đang diễn khát khô cổ mà shipper giao lên tận sân khấu!'
                            }
                        ></UserBox>
                        <UserBox
                            chatbox
                            avatarId={'mono'}
                            name={'Nguyễn Việt Hoàng'}
                            content={
                                'Bữa có concert bảo anh Tùng bên Hàn gửi về mấy quả dưa chuột ăn giải khát, mình đang diễn khát khô cổ mà shipper giao lên tận sân khấu!'
                            }
                        ></UserBox>
                        <UserBox
                            chatbox
                            avatarId={'mono'}
                            name={'Nguyễn Việt Hoàng'}
                            content={
                                'Bữa có concert bảo anh Tùng bên Hàn gửi về mấy quả dưa chuột ăn giải khát, mình đang diễn khát khô cổ mà shipper giao lên tận sân khấu!'
                            }
                        ></UserBox>
                        <UserBox
                            chatbox
                            avatarId={'mono'}
                            name={'Nguyễn Việt Hoàng'}
                            content={
                                'Bữa có concert bảo anh Tùng bên Hàn gửi về mấy quả dưa chuột ăn giải khát, mình đang diễn khát khô cổ mà shipper giao lên tận sân khấu!'
                            }
                        ></UserBox>
                        <UserBox
                            chatbox
                            avatarId={'mono'}
                            name={'Nguyễn Việt Hoàng'}
                            content={
                                'Bữa có concert bảo anh Tùng bên Hàn gửi về mấy quả dưa chuột ăn giải khát, mình đang diễn khát khô cổ mà shipper giao lên tận sân khấu!'
                            }
                        ></UserBox>
                        <UserBox
                            chatbox
                            avatarId={'mono'}
                            name={'Nguyễn Việt Hoàng'}
                            content={
                                'Bữa có concert bảo anh Tùng bên Hàn gửi về mấy quả dưa chuột ăn giải khát, mình đang diễn khát khô cổ mà shipper giao lên tận sân khấu!'
                            }
                        ></UserBox>
                        <UserBox
                            chatbox
                            avatarId={'mono'}
                            name={'Nguyễn Việt Hoàng'}
                            content={
                                'Bữa có concert bảo anh Tùng bên Hàn gửi về mấy quả dưa chuột ăn giải khát, mình đang diễn khát khô cổ mà shipper giao lên tận sân khấu!'
                            }
                        ></UserBox>
                    </div>

                    <div className={cx('chat-room')}>
                        <div className={cx('chat-screen')}>
                            <Bubble yourself content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble other content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble yourself content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble yourself content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble other content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble other content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble other content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble yourself content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble other content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble yourself content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble yourself content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble other content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                            <Bubble yourself content="Nếu có, bạn cho mình xin đánh giá ạ!"></Bubble>
                        </div>
                        <div className={cx('chat-send')}>
                            <form>
                                <input type="file" name="file" id="file" className={cx('file')}></input>
                                <label htmlFor="file">
                                    <img src={icons.picture} alt="" className={cx('icon')}></img>
                                </label>

                                <div className={cx('message-input')}>
                                    <input
                                        type="text"
                                        name="message"
                                        id="message"
                                        className={cx('input')}
                                        placeholder="Aa"
                                    ></input>
                                </div>

                                <input type="submit" name="send" id="send" className={cx('send')}></input>
                                <label htmlFor="send">
                                    <img src={icons.send} alt="" className={cx('icon')}></img>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
