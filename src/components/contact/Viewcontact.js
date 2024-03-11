import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getContact, getGroup } from '../../services/Servises';
import Spinner from '../Spinner';
import { CURRENTLINE, PURPLE, CYAN } from '../../helpers/Colors';

export default function Viewcontact() {
  const contactid = useParams();
  console.log(contactid);
  const [state, setState] = useState({
    loading: false,
    contact: {},
    group: {},
  });
  const { loading, contact, group } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        const { data: contactData } = await getContact(contactid.id);
        const { data: groupData } = await getGroup(contactData.group);

        setState({
          ...state,
          loading: false,
          contact: contactData,
          group: groupData,
        });
      } catch (err) {
        console.log('error to load');
        setState({ ...state, loading: false });
      }
    };

    fetchData();
  }, []);

  console.log(contact);
  return (
    <>
      <section className="view-contact-intro p3">
        <div className="container">
          <div className="grid my-2 text-center">
            <p className="h3 text-lg font-bold" style={{ color: CYAN }}>
              اطلاعات مخاطب
            </p>
          </div>
        </div>
      </section>

      <hr style={{ backgroundColor: CYAN }} />

      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(contact).length > 0 && (
            <section className="view-contact mt-20">
              <div
                className="container p-2"
                style={{ borderRadius: "1em", backgroundColor: CURRENTLINE }}
              >
                <div className="flex items-center ">
                  <div className="w-1/4">
                    <img
                      src={contact.photo || 'https://placehold.co/200'}
                      alt=""
                      className="w-[100%] rounded"
                      style={{ border: `1px solid ${PURPLE}` }}
                    />
                  </div>
                  <div className="w-3/4 text-[#fff]  px-7">
                    <ul className="list-group  w-full">
                      <li className="mb-3">
                        نام و نام خانوادگی :{" "}
                        <span className="fw-bold">{contact.fullname}</span>
                      </li>
                      <li className="mb-3">
                        شماره موبایل :{" "}
                        <span className="fw-bold">{contact.mobile}</span>
                      </li>
                      <li className="mb-3">
                        ایمیل : <span className="fw-bold">{contact.email}</span>
                      </li>
                      <li className="mb-3">
                        شغل : <span className="fw-bold">{contact.job}</span>
                      </li>
                      <li className="mb-3">
                        گروه : <span className="fw-bold">{group.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid my-2">
                  <div className="grid gap-2 mx-auto w-1/2 ">
                    <Link
                      to={"/contacts"}
                      className="btn text-center"
                      style={{ backgroundColor: PURPLE }}
                    >
                      برگشت به صفحه اصلی
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
