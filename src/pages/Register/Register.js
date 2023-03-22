import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import icons from '~/assets/icons/icons';
import Button from '~/components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const cx = classNames.bind(styles);

const Register = () => {
    const regexEmail =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            role: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Vui lòng nhập tên người dùng'),
            email: Yup.string().required('Vui lòng nhập email').matches(regexEmail, 'Vui lòng nhập đúng email'),
            password: Yup.string()
                .required('Vui lòng nhập mật khẩu')
                .min(8, 'Mật khẩu chứa ít nhất 8 ký tự')
                .matches(/^(?=.*[a-z]).{8,}$/, 'Mật khẩu chứa chữ thường')
                .matches(/^(?=.*[A-Z]).{8,}$/, 'Mật khẩu chứa chữ hoa')
                .matches(/^(?=.*[0-9]).{8,}$/, 'Mật khẩu chứa chữ số'),
            role: Yup.string().required('Vui lòng chọn vai trò'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Đăng Ký</h2>
                <form action="#" onSubmit={formik.handleSubmit} autoComplete="off">
                    <div className={cx('input-box')}>
                        <img src={icons.username} alt="" className={cx('icon')}></img>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            placeholder=" "
                        ></input>
                        <label htmlFor="username">Tên đăng nhập</label>
                    </div>
                    {formik.errors.username && <p className={cx('error-message')}>{formik.errors.username}</p>}

                    <div className={cx('input-box')}>
                        <img src={icons.email} alt="" className={cx('icon')}></img>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder=" "
                        ></input>
                        <label htmlFor="email">Email</label>
                    </div>
                    {formik.errors.email && <p className={cx('error-message')}>{formik.errors.email}</p>}

                    <div className={cx('input-box')}>
                        <img src={icons.password} alt="" className={cx('icon')}></img>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder=" "
                        ></input>
                        <label htmlFor="password">Mật Khẩu</label>
                    </div>
                    {formik.errors.password && <p className={cx('error-message')}>{formik.errors.password}</p>}

                    <div className={cx('role-selection')} role="group" aria-labelledby="my-radio-group">
                        <label htmlFor="role">Bạn sẽ trở thành?</label>
                        <div>
                            <input
                                type="radio"
                                name="role"
                                value="customer"
                                id="customer"
                                defaultChecked={formik.values.role === 'customer'}
                                onChange={formik.handleChange}
                            ></input>
                            <label htmlFor="customer">Khách hàng</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="role"
                                value="contributor"
                                id="contributor"
                                defaultChecked={formik.values.role === 'contributor'}
                                onChange={formik.handleChange}
                            ></input>
                            <label htmlFor="contributor">Nhà Phân Phối</label>
                        </div>
                    </div>
                    {formik.errors.role && <p className={cx('error-message')}>{formik.errors.role}</p>}

                    <Button completeForm type="submit">
                        Đăng Ký
                    </Button>

                    <p className={cx('redirect')}>
                        Bạn đã có tài khoản?
                        <a href="/login">Đăng nhập</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
