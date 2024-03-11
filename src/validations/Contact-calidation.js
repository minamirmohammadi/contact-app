import * as Yup from 'yup'
export const ContactSchema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی الزامی می باشد'),
    // photo: Yup.string().url('آدزس معتبر نیست').required('تصویر مخاطب الزامی می باشد'),
    mobile: Yup.number().required('شماره موبایل الزامی می باشد'),
    email: Yup.string().email('ادرس ایمیل معتبر نیست').required('آدرس ایویل الزامی می باشد'),
    job: Yup.string(),
    group: Yup.string().required('انتخاب گروه الزامی می باشد')
})

