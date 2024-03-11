import React, { useContext } from 'react'
import Spinner from '../Spinner';
import { COMMENT, GREEN, PURPLE } from '../../helpers/Colors';
import { Link } from 'react-router-dom';
import { Contactcontex } from '../contex/Contactcontex';
// import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
// import { ContactSchema } from '../../validations/Contact-calidation';

// export default function Addcontact({ loading, contact, setContactInfo, groups, createContactForm, }) {
export default function Addcontact() {

  // console.log(typeof (contact));
  const { loading, contact, setContactInfo, groups, createContact, errors } = useContext(Contactcontex)
  // const formik = useFormik({
  //   initialValues: {
  //     fullname: '',
  //     photo: '',
  //     email: '',
  //     job: '',
  //     mobile: '',
  //     group: ''
  //   },
  //   validationSchema: ContactSchema,
  //   onSubmit: values => {
  //     console.log(values);
  //     createContact(values)
  //   }
  // })
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3 mt-20">
            <img
              src={require("../../assets/man-taking-note.png")}
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className=''>
                {/* <div className="col test"> */}
                <p
                  className={`text-xl font-bold text-center w-full mb-7`}
                  style={{ color: GREEN }}
                >
                  ساخت مخاطب جدید
                </p>
                {/* </div> */}
              </div>
              {/* <hr style={{ backgroundColor: GREEN }} /> */}
              <div className=" grid grid-cols-3">
                <div className="col">
                  {/* {errors.map((error, index) => (
                    <p key={index} className=' text-red-600 '>{error.message}</p>
                  ))} */}


                  {/* <Formik initialValues={{
                    fullname: '',
                    photo: '',
                    email: '',
                    job: '',
                    mobile: '',
                    group: ''
                  }}
                    validationSchema={ContactSchema}
                    onSubmit={values => {
                      console.log(values);
                      createContact(values)
                    }}
                  > */}
                  {/* { */}
                  {/* formik => ( */}
                  {/* <Form> */}
                  <form>
                    {/* <form onSubmit={formik.handleSubmit}> */}
                    <div className="mb-2">
                      {/* <Field */}
                      <input
                        id='fullname'
                        name="fullname"
                        type="text"
                        value={contact.fullname}
                        onChange={setContactInfo}
                        // value={formik.values.fullname}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        //  {...formik.getFieldProps('fullname')} // tis code is insted of 3 code above and use 
                        className="form-control p-2 w-full"
                        placeholder="نام و نام خانوادگی"
                      // required={true}
                      />
                      {/* <ErrorMessage name='fullname' render={msg => (<><div className='text-red-600'>{msg}</div></>)} /> */}
                      {/* {formik.touched.fullname && formik.errors.fullname ? <div className='t text-red-500'>{formik.errors.fullname}</div> : null} */}
                    </div>
                    <div className="mb-2">
                      {/* <Field */}
                      <input
                        id='photo'
                        name="photo"
                        type="text"
                        value={contact.photo}
                        onChange={setContactInfo}
                        // value={formik.values.photo}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // {...formik.getFieldProps('photo')}
                        className="form-control p-2 w-full"
                        // required={true}
                        placeholder="آدرس تصویر"
                      />
                      {/* <ErrorMessage name='fullname' render={msg => (<><div className='text-red-600'>{msg}</div></>)} /> */}
                      {/* {formik.touched.photo && formik.errors.photo ? <div className='t text-red-500'>{formik.errors.photo}</div> : null} */}
                    </div>
                    <div className="mb-2">
                      {/* <Field */}
                      <input
                        id='mobile'
                        name="mobile"
                        type="number"
                        value={contact.mobile}
                        onChange={setContactInfo}
                        // value={formik.values.mobile}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // {...formik.getFieldProps('mobile')}
                        className="form-control p-2 w-full"
                        // required={true}
                        placeholder="شماره موبایل"
                      />
                      {/* <ErrorMessage name='fullname' render={msg => (<><div className='text-red-600'>{msg}</div></>)} /> */}
                      {/* {formik.touched.mobile && formik.errors.mobile ? <div className='t text-red-500'>{formik.errors.mobile}</div> : null} */}
                    </div>
                    <div className="mb-2">
                      {/* <Field */}
                      <input
                        id='email'
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={setContactInfo}
                        // value={formik.values.email}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // {...formik.getFieldProps('email')}
                        className="form-control p-2 w-full"
                        // required={true}
                        placeholder="آدرس ایمیل"
                      />
                      {/* <ErrorMessage name='fullname' render={msg => (<><div className='text-red-600'>{msg}</div></>)} /> */}
                      {/* {formik.touched.email && formik.errors.email ? <div className='t text-red-500'>{formik.errors.email}</div> : null} */}
                    </div>
                    <div className="mb-2">
                      {/* <Field */}
                      <input
                        id='job'
                        type="text"
                        name="job"
                        value={contact.job}
                        onChange={setContactInfo}
                        // value={formik.values.job}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // {...formik.getFieldProps('job')}
                        className="form-control p-2 w-full"
                        // required={true}
                        placeholder="شغل"
                      />
                      {/* <ErrorMessage name='fullname' render={msg => (<><div className='text-red-600'>{msg}</div></>)} /> */}
                      {/* {formik.touched.job && formik.errors.job ? <div className='t text-red-500'>{formik.errors.job}</div> : null} */}
                    </div>
                    <div className="mb-2">
                      {/* <Field */}
                      <select
                        id='group'
                        name="group"
                        value={contact.group}
                        onChange={setContactInfo}
                        // value={formik.values.group}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // {...formik.getFieldProps('group')}
                        // required={true}
                        className="form-control p-2 w-full"
                      >
                        <option value="">انتخاب گروه</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                      {/* <Field/> */}
                      {/* <ErrorMessage name='fullname' render={msg => (<><div className='text-red-600'>{msg}</div></>)} /> */}
                      {/* {formik.touched.group && formik.errors.group ? <div className='t text-red-500'>{formik.errors.group}</div> : null} */}
                    </div>
                    <div className="mx-2">
                      {/* <input
                        type='submit'
                        // onClick={createContact}
                        className="btn p-2 cursor-pointer"
                        style={{ backgroundColor: PURPLE }}
                        value="ساخت مخاطب"
                      /> */}
                      <Link
                        className="btn p-2 cursor-pointer"
                        style={{ backgroundColor: PURPLE }}
                        onClick={createContact}
                        to={"/contacts"}>ساخت مخاطب
                      </Link>
                      <Link
                        to={"/contacts"}
                        className="btn mx-2 p-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
                  {/* ) */}
                  {/* } */}
                  {/* </Form> */}
                  {/* </Formik> */}
                </div>
              </div>
            </div>
          </section>
        </>
      )
      }
    </>
  );
}

