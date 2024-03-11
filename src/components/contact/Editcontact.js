import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getALLGroups, getContact, updatContact } from "../../services/Servises";
import Spinner from "../Spinner";
import { COMMENT, ORANGE, PURPLE } from "../../helpers/Colors";
import { Contactcontex } from '../contex/Contactcontex';
import { toast } from 'react-toastify';
// import toast from 'react-hot-toast';

export default function Editcontact() {
  const contactId = useParams();
  // const navigate = useNavigate();   it dosent work
  const { filtercontact, setfiltercontact, } = useContext(Contactcontex)

  const [state, setState] = useState({
    loading: false,
    contact: {
    },
    groups: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        const { data: contactData } = await getContact(contactId.id);
        const { data: groupsData } = await getALLGroups();
        setState({
          ...state,
          loading: false,
          contact: contactData,
          groups: groupsData,
        });

      } catch (err) {
        console.log(err);
        setState({ ...state, loading: false });
      }
    };

    fetchData();
  }, []);

  const setContactInfo = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: [event.target.value],
      },
    });
  };

  const submitForm = async (event) => {
    // event.preventDefault();
    try {
      setState({ ...state, loading: true });
      const { data } = await updatContact(state.contact, contactId.id);
      setState({ ...state, loading: false });
      if (data) {
        // navigate("/contacts");  //it dosent work

        // const allcontacts = [...filtercontact]
        // const contactindex = allcontacts.findIndex(i => i.id === contactId.id)
        // allcontacts[contactindex] = { ...data }
        // console.log(allcontacts);
        // setfiltercontact([...allcontacts])  
        toast.info('مخاطب با موفقیت ویرایش شد')
        setState({
          ...state,
          loading: false,
          contact: data,
        });
        console.log('hello');

      }
    } catch (err) {
      console.log(err);
      setState({ ...state, loading: false });
    }
  };

  const { loading, contact, groups } = state;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className=" mt-20">
            <div className=" my-2">
              <div className="col text-center ">
                <p className="font-bold text-xl" style={{ color: ORANGE }}>
                  ویرایش مخاطب
                </p>
              </div>
            </div>

            <div className="container flex justify-between ">
              {/* <hr style={{ backgroundColor: ORANGE }} /> */}

              <div
                className=" w-1/3 "
                style={{ borderRadius: "1em" }}
              >
                <div className="">
                  <form>
                    <div className="mb-2">
                      <input
                        name="fullname"
                        type="text"
                        className="form-control p-2 w-full"
                        value={contact.fullname}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="نام و نام خانوادگی"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        type="text"
                        value={contact.photo}
                        onChange={setContactInfo}
                        className="form-control p-2 w-full"
                        // required={true}
                        placeholder="آدرس تصویر"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="mobile"
                        type="number"
                        className="form-control p-2 w-full"
                        value={contact.mobile}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="شماره موبایل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="email"
                        type="email"
                        className="form-control p-2 w-full"
                        value={contact.email}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="آدرس ایمیل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="job"
                        type="text"
                        className="form-control p-2 w-full"
                        value={contact.job}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="شغل"
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        value={contact.group}
                        onChange={setContactInfo}
                        required={true}
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
                    </div>
                    <div className="mb-2">
                      {/* <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="ویرایش مخاطب"
                      /> */}
                      <Link
                        to={"/contacts"}
                        onClick={submitForm}
                        style={{ backgroundColor: PURPLE }}>
                        ویرایش مخاطب</Link>
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 ">
                  <img
                    src={contact.photo || "https://placehold.co/200"}
                    className="img-fluid rounded "
                    style={{ border: `1px solid ${PURPLE}` }}
                  />
                </div>
              </div>
              <div className="text-center  mt-1">
                <img
                  src={require("../../assets/man-taking-note.png")}
                  height="300px"
                  style={{ opacity: "60%" }}
                />
              </div>
            </div>


          </section>
        </>
      )}
    </>
  );
}
