import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import Modal from "../Modal";
const Home = ({ color = "blue" }) => {
  const form = React.useRef();
  const sendEmail = () => {
    alert("Submitted");
  };
  const pdfExportComponent = React.useRef(null);
  const [openPropertyTab, setopenPropertyTab] = React.useState(1);
  const [openTab, setOpenTab] = React.useState(1);
  const [Liablites, setLiablites] = React.useState([1]);
  const [Downpayment, setDownpayment] = React.useState([1]);
  const [AssetsData, setAssetsData] = React.useState([1]);
  console.log(Downpayment);
  const [EmployeData, setEmployeData] = React.useState([1]);
  return (
    <div className="bg-slate-100	">
      <div className="container-sm">
        <div className=" m-4 " id="textheading">
          <h5 className="text-blue-600 font-black">
            * indicates required field.
          </h5>
        </div>
      </div>
      <Formik
        initialValues={{
          mortgagepurpose: "",
          aproxdate: "",
          applicantno: "",
        }}
        validationSchema={Yup.object({
          mortgagepurpose: Yup.string().required(
            "Please select an item in the list."
          ),
          aproxdate: Yup.date().required(
            "Please fill out this field."
          ),
          applicantno: Yup.string().required(
            "Please select an item in the list."
          ),
          applicantemail: Yup.string()
            .email("Invalid email format")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            sendEmail();
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            // printDocument;
            // printDocument();
          }, 400);
        }}
      >
        <Form ref={form}>
          <div>
            <div >
              <div className="bg-blue-600 mx-3 border rounded-lg  md:px-5 px-3 pb-3">
                <div className="text-white font-black py-4">
                  <h4 className=" border-b-2">
                    <span className="font-light italic text-[18px]">
                      Let's begin by telling me about
                    </span>
                    Your mortgage requirement
                  </h4>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center	py-3	">
                  <div className="w-60 md:w-3/12 flex flex-col text-[14px] ">
                    <label
                      htmlFor="ortgage_purpose"
                      className=" text-lg font-medium text-white"
                    >
                      Mortgage Purpose*
                    </label>
                    <Field
                      as="select"
                      id="mortgagepurpose"
                      name="mortgagepurpose"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Please Select</option>
                      <option value="0">Purchase</option>
                      <option value="2">Refinance</option>
                      <option value="4">Switch</option>{" "}
                    </Field>

                    <ErrorMessage name="mortgagepurpose" />
                  </div>
                  <div className="w-60 md:w-3/12 flex flex-col text-[14px] ">
                    <label
                      htmlFor="aproxdate"
                      className=" text-lg font-medium text-white"
                    >
                      Approx.Date Funds Required *
                    </label>
                    <Field
                      name="aproxdate"
                      type="date"
                      className="
                      h-12  min-w-full	 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <ErrorMessage name="aproxdate" />
                  </div>
                  <div className=" w-60 md:w-3/12 flex flex-col text-[14px] ">
                    <label
                      htmlFor="applicantno"
                      className=" text-lg font-medium text-white"
                    >
                      Do you have a co-applicant? *
                    </label>
                    <Field
                      as="select"
                      id="applicantno"
                      name="applicantno"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="0">Please Select</option>
                      <option value="1">No</option>
                      <option value="2">Yes, I have 1 co-applicant.</option>
                      <option value="3">Yes, I have 2 co-applicants.</option>
                      <option value="4">Yes, I have 3 co-applicants.</option>
                    </Field>

                    <ErrorMessage name="applicantno" />
                  </div>
                </div>
              </div>
              <div className="bg-slate-300 border mx-3 py-6 shadow-lg px-5 px-3 pb-3	text-black ">
                <div className="font-black py-4">
                  <h4 className=" border-b-2">
                    <span className="font-light italic text-[18px]">
                      Please provide
                    </span>
                    Your down payment information
                  </h4>
                </div>
                <div className="">
                  {Downpayment.map((e, i) => {
                    return (
                      <div key={i} className="flex flex-col ">
                        <div className="flex flex-col md:flex-row justify-around items-start		py-3	">
                          <div className="w-60 md:w-3/12 flex flex-col text-[14px] ">
                            <label
                              htmlFor="downpaymentsource"
                              className=" text-lg font-medium "
                            >
                              Down payment Source
                            </label>
                            <Field
                              as="select"
                              id="downpaymentsource"
                              name="downpaymentsource"
                              className="h-12 mt-1 mix-w-full  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">
                                Sale of existing property
                              </option>
                              <option value="1">Personal cash</option>
                              <option value="2">RRSP</option>
                              <option value="3">
                                Borrowed against liquid assets
                              </option>
                              <option value="4">Gift</option>
                              <option value="6">Sweat equity</option>
                              <option value="8">Existing equity</option>
                              <option value="10">Secondary financing</option>
                              <option value="11">Grants</option>
                              <option value="7">Other</option>
                            </Field>

                            <ErrorMessage name="downpaymentsource" />
                          </div>
                          <div className=" w-60 md:w-3/12 flex flex-col text-[14px] ">
                            <label
                              htmlFor="downpaymentamount"
                              className=" text-lg font-medium "
                            >
                              Down payment Amount
                            </label>
                            <div className="mt-1 h-12  flex rounded-md shadow-sm">
                              <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                $
                              </span>
                              <Field
                                defaultValue={0}
                                type="number"
                                name="downpaymentamount"
                                className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <ErrorMessage name="downpaymentamount" />
                          </div>
                          <div className="  w-60 md:w-3/12 flex flex-col text-[14px] ">
                            <label
                              htmlFor="ortgage_purpose"
                              className=" text-lg font-medium "
                            >
                              Notes
                            </label>
                            <Field
                              type="text"
                              placeholder="Optional"
                              id="notes"
                              name="notes"
                              className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage name="firstName" />
                            <p className="text-zinc-300	">
                              Ex. 1000.00 without "$" or ",".
                            </p>
                          </div>
                        </div>
                        <div className=" flex ">
                          {Downpayment.length > 1 ? (
                            <button
                              className="mx-2 px-3 py-2 bg-blue-400 text-white"
                              onClick={() =>
                                setDownpayment(
                                  Downpayment.filter((item) => item != e)
                                )
                              }
                            >
                              -Remove
                            </button>
                          ) : (
                            ""
                          )}

                          <button
                            className="mx-2 px-3 py-2 bg-blue-400 text-white"
                            onClick={() =>
                              setDownpayment((old) => [
                                ...old,
                                Downpayment[Downpayment.length - 1] + 1,
                              ])
                            }
                          >
                            +Add
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" m-4">
                <p className="text-blue-600  font-black  text-5xl py-3 px-4 border-b-2 my-2">
                  Primary Applicant
                </p>
                <div className=" border-2 rounded-lg shadow-lg  md:px-5 px-3 pb-3">
                  <div className="text-black font-black py-4">
                    <h4 className=" border-b-2">Personal Information</h4>
                  </div>
                  <div className="flex flex-col md:flex-wrap	 md:flex-row justify-between items-baseline	py-3	">
                    <div className=" w-60 md:w-2/12 flex flex-col text-[14px] ">
                      <label
                        htmlFor="applicanttitle"
                        className=" text-lg font-medium "
                      >
                        Title *
                      </label>
                      <Field
                        as="select"
                        id="applicanttitle"
                        name="applicanttitle"
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Purchase</option>
                        <option value="2">Refinance</option>
                        <option value="4">Switch</option>{" "}
                      </Field>

                      <ErrorMessage name="applicanttitle" />
                    </div>
                    <div className="w-60 md:w-4/12 flex flex-col text-[14px] ">
                      <label
                        htmlFor="applicantfirstname"
                        className=" text-lg font-medium"
                      >
                        First Name *
                      </label>
                      <Field
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        name="applicantfirstname"
                      />

                      <ErrorMessage name="applicantfirstname" />
                    </div>
                    <div className=" w-60 md:w-4/12 flex flex-col text-[14px] ">
                      <label
                        htmlFor="applicantfirstname"
                        className=" text-lg font-medium "
                      >
                        Last Name *
                      </label>
                      <Field
                        className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        name="applicantlastname"
                      />

                      <ErrorMessage name="applicantlastname" />
                    </div>
                    <div className="w-60 md:w-48 lg:w-62 flex flex-col text-[14px] ">
                      <label
                        htmlFor="applicantfirstinitial"
                        className=" text-lg font-medium "
                      >
                        Initial *
                      </label>
                      <Field
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        name="applicantfirstinitial"
                      />
                    </div>
                    <div className="w-60 sm:w-48 md:w-2/12 justify-around flex flex-col text-[14px] ">
                      <label
                        htmlFor="applicantbirthday"
                        className=" text-lg font-medium "
                      >
                        Birthday *
                      </label>

                      <Field
                        className="h-12 min-w-full mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="date"
                        name="applicantbirthday"
                        placeholder="mm/dd/yyy"
                      />
                      <ErrorMessage name="applicantbirthday" />
                      <p className="text-xs text-start">
                        Ex: MM/DD/YYY.
                        <br /> You must be 18 or older to apply.
                      </p>
                    </div>
                    <div className="w-60 md:w-2/12  justify-around flex flex-col text-[14px] ">
                      <label
                        htmlFor="applicantsinno"
                        className=" text-lg font-medium "
                      >
                        SIN Number
                      </label>
                      <Field
                        className="mt-1 h-12  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        placeholder="123-456-789"
                        name="applicantsinno"
                      />
                      <ErrorMessage name="sin_number" />{" "}
                      <p className="text-xs">Ex:123-456-789</p>
                    </div>
                    <div className="w-60  sm:48 md:w-3/12 justify-around  flex flex-col text-[14px] ">
                      <label
                        htmlFor="buyerstatus"
                        className=" text-lg font-medium "
                      >
                        Are you a First Time Home Buyer ?
                      </label>
                      <Field
                        as="select"
                        id="buyerstatus"
                        name="buyerstatus"
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="0">Yes</option>
                        <option value="1">No</option>
                      </Field>

                      <ErrorMessage name="buyerstatus" />
                    </div>
                    <div className="w-60  md:w-32 justify-around  flex flex-col text-[14px] ">
                      <label
                        htmlFor="applicantmartialstatus"
                        className=" text-lg font-medium "
                      >
                        Martial Status *
                      </label>
                      <Field
                        as="select"
                        id="applicantmartialstatus"
                        name="applicantmartialstatus"
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="0">Yes</option>
                        <option value="1">No</option>
                      </Field>

                      <ErrorMessage name="applicantmartialstatus" />
                    </div>
                    <div className=" w-60  md:w-1/12 justify-around  flex flex-col text-[14px] ">
                      <label
                        htmlFor="applicantcreditrating"
                        className=" text-lg font-medium "
                      >
                        Credit Rating
                      </label>
                      <Field
                        as="select"
                        id="applicantcreditrating"
                        name="applicantcreditrating"
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Very Good">Very Good</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                      </Field>

                      <ErrorMessage name="applicantcreditrating" />
                    </div>
                    <div
                      className=" w-60  md:w-2/12 
                    justify-around  flex flex-col text-[14px] "
                    >
                      <label
                        htmlFor="applicantnumberdep"
                        className=" text-lg font-medium "
                      >
                        Number Dependency
                      </label>
                      <Field
                        defaultValue={0}
                        type="number"
                        id="applicantnumberdep"
                        name="applicantnumberdep"
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />

                      <ErrorMessage name="applicantnumberdep" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:px-6 m-4  px-3 pb-3  border-2 rounded-lg shadow-lg">
                <div className="text-black font-black py-4">
                  <h4 className=" border-b-2">Contact Information</h4>
                </div>
                <div className="flex flex-col md:flex-wrap md:flex-row justify-between items-baseline	py-3	">
                  <div
                    className=" w-60 md:w-4/12 flex flex-col
                   text-[14px]"
                  >
                    <label
                      htmlFor="applicantemail"
                      className=" text-lg font-medium "
                    >
                      Email *
                    </label>
                    <Field
                      type="text"
                      id="applicantemail"
                      name="applicantemail"
                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    <ErrorMessage name="applicantemail" />
                  </div>
                  <div
                    className="w-60 md:w-4/12  
                   flex flex-col text-[14px] py-1"
                  >
                    <label
                      htmlFor="applicantprimarynumber"
                      className=" text-lg font-medium"
                    >
                      Primary Phone Number *
                    </label>
                    <Field
                      id="applicantprimarynumber"
                      name="primaapplicantprimarynumberrynumber"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />

                    <ErrorMessage name="applicantprimarynumber" />
                  </div>
                  <div
                    className=" w-60 md:w-2/12
                   flex flex-col text-[14px] py-1"
                  >
                    <label
                      htmlFor="applicantext"
                      className=" text-lg font-medium "
                    >
                      Extention
                    </label>
                    <Field
                      name="applicantext"
                      id="extenapplicantextstion"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                  </div>
                  <div
                    className="w-60 md:w-3/12  
                   flex flex-col text-[14px] py-1"
                  >
                    <label
                      htmlFor="applicantworkno"
                      className=" text-lg font-medium"
                    >
                      Work Phone Number
                    </label>
                    <Field
                      id="applicantworkno"
                      name="applicantworkno"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                  </div>
                  <div
                    className=" w-60 md:w-2/12 
                  flex flex-col text-[14px] py-1"
                  >
                    <label
                      htmlFor="applicantext2"
                      className=" text-lg font-medium "
                    >
                      Extention
                    </label>
                    <Field
                      name="applicantext2"
                      id="applicantext2"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                  </div>
                  <div
                    className="w-60 md:w-3/12   
                  flex flex-col text-[14px] py-1"
                  >
                    <label
                      htmlFor="primarynumber"
                      className=" text-lg font-medium"
                    >
                      Cell Phone Number
                    </label>
                    <Field
                      id="primarynumber"
                      name="primarynumber"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                  </div>
                  <div
                    className="w-60 md:w-3/12  
                   flex flex-col text-[14px] py-1 "
                  >
                    <label
                      htmlFor="primarynumber"
                      className=" text-lg font-medium"
                    >
                      Fax Number
                    </label>
                    <Field
                      id="primarynumber"
                      name="primarynumber"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                  </div>
                </div>
                <div className="  pb-3">
                  <div className="text-black font-black py-4">
                    <h4 className=" border-b-2">Current Address</h4>
                  </div>

                  <div>
                    <ul
                      className="flex mb-0 list-none justify-center 
                      md:justify-start flex-wrap pt-3 pb-4 flex-row"
                      role="tablist"
                    >
                      <li className="   text-center">
                        <a
                          className={
                            "text-xs font-bold border-2 py-3  rounded  leading-normal " +
                            (openTab === 1
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                          }}
                          data-toggle="tab"
                          href="#canadaAdress"
                          role="tablist"
                        >
                          Canada Address
                        </a>
                      </li>
                      <li className="  text-center">
                        <a
                          className={
                            "text-xs border-2 font-bold uppercase px-1 py-3 rounded  leading-normal " +
                            (openTab === 2
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                          }}
                          data-toggle="tab"
                          href="#usaAddress"
                          role="tablist"
                        >
                          USA Address
                        </a>
                      </li>
                      <li className=" text-center">
                        <a
                          className={
                            "text-xs border-2 font-bold uppercase px-1 py-3  rounded  leading-normal " +
                            (openTab === 3
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(3);
                          }}
                          data-toggle="tab"
                          href="#otheraddress"
                          role="tablist"
                        >
                          Other
                        </a>
                      </li>
                    </ul>
                    <div className="relative flex flex-col  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                      <div className="px-2 py-2 flex-auto">
                        <div className="tab-content tab-space">
                          <div
                            className={openTab === 1 ? "block" : "hidden"}
                            id="canadaAdress"
                          >
                            <div className="flex flex-col md:flex-wrap items-baseline	 md:flex-row justify-between items-center	py-3	">
                              <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="streetNo"
                                  className=" text-lg font-medium "
                                >
                                  Street Number
                                </label>
                                <Field
                                  type="number"
                                  id="streetNo"
                                  name="streetNo"
                                  className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="w-60 md:w-5/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="streetnamecanada"
                                  className=" text-lg font-medium"
                                >
                                  Street Name
                                </label>
                                <Field
                                  id="streetnamecanada"
                                  name="streetnamecanada"
                                  className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  type="text"
                                />
                              </div>
                              <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="streetType"
                                  className=" text-lg font-medium "
                                >
                                  Street Type
                                </label>
                                <Field
                                  as="select"
                                  id="streetType"
                                  name="streetType"
                                  className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </Field>
                              </div>
                              <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="streetDirection"
                                  className=" text-lg font-medium "
                                >
                                  Street Direction
                                </label>
                                <Field
                                  as="select"
                                  id="streetDirection"
                                  name="streetDirection"
                                  className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </Field>

                                <ErrorMessage name="streetType" />
                              </div>
                              <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="unit"
                                  className=" text-lg font-medium "
                                >
                                  Unit
                                </label>
                                <Field
                                  type="text"
                                  id="unit"
                                  name="unit"
                                  className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="city/town"
                                  className=" text-lg font-medium"
                                >
                                  City/Town
                                </label>
                                <Field
                                  id="city/town"
                                  name="city/town"
                                  className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  type="text"
                                />
                              </div>
                              <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="province"
                                  className=" text-lg font-medium "
                                >
                                  Province
                                </label>
                                <Field
                                  as="select"
                                  id="province"
                                  name="province"
                                  className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </Field>
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="postalcode"
                                  className=" text-lg font-medium "
                                >
                                  Postal Code
                                </label>
                                <Field
                                  type="text"
                                  placeholder="EX A2B 3A5"
                                  id="postalcode"
                                  name="postalcode"
                                  className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>{" "}
                              <div className="w-60 md:w-4/12   flex flex-col  text-[14px] py-5">
                                <label
                                  htmlFor="lengthoftime"
                                  className=" text-lg font-medium "
                                >
                                  Length of Time at Residence
                                </label>
                                <div className="py-2  flex flex-col md:flex-row">
                                  <div className="">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      id="lengthoftimeyears"
                                      name="lengthoftimeyears"
                                      className="w-60 md:w-auto h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <p>Years</p>
                                  </div>
                                  <div className="px-0 md:px-2">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      id="lengthoftimemonths"
                                      name="lengthoftimemonths"
                                      className="w-60 md:w-auto h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />

                                    <p>Months</p>
                                  </div>
                                </div>
                              </div>
                              <div className=" w-60 md:w-3/12 flex flex-col text-[14px] ">
                                <label
                                  htmlFor="residentialStatus"
                                  className=" text-lg font-medium "
                                >
                                  Residential Status
                                </label>
                                <Field
                                  as="select"
                                  id="residentialStatus"
                                  name="residentialStatus"
                                  className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </Field>

                                <ErrorMessage name="residentialStatus" />
                              </div>
                              <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                                <label
                                  htmlFor="monthlyrentpaycanada"
                                  className=" text-lg font-medium "
                                >
                                  Monthly Rent Payments
                                </label>

                                <div className=" mt-1 h-12  flex rounded-md shadow-sm">
                                  <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <Field
                                    defaultValue={0}
                                    type="number"
                                    name="monthlyrentpaycanada"
                                    className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={openTab === 2 ? "block" : "hidden"}
                            id="usaAddress"
                          >
                            <div className="flex flex-col md:flex-wrap  items-baseline	 md:flex-row justify-between items-center	py-3	">
                              <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usastreetNo"
                                  className=" text-lg font-medium "
                                >
                                  Street Number
                                </label>
                                <Field
                                  type="number"
                                  id="usastreetNo"
                                  name="usastreetNo"
                                  className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="w-60 md:w-8/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usastreetname"
                                  className=" text-lg font-medium"
                                >
                                  Street Name
                                </label>
                                <Field
                                  id="usastreetname"
                                  name="usastreetname"
                                  className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  type="text"
                                />
                              </div>
                              <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usaunit"
                                  className=" text-lg font-medium "
                                >
                                  Unit
                                </label>
                                <Field
                                  type="text"
                                  id="usaunit"
                                  name="usaunit"
                                  className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usacity/town"
                                  className=" text-lg font-medium"
                                >
                                  City/Town
                                </label>
                                <Field
                                  id="usacity/town"
                                  name="usacity/town"
                                  className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  type="text"
                                />

                                <ErrorMessage name="usacity/town" />
                              </div>
                              <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usastate"
                                  className=" text-lg font-medium "
                                >
                                  State
                                </label>
                                <Field
                                  as="select"
                                  id="usastate"
                                  name="usastate"
                                  className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </Field>
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usazipcode"
                                  className=" text-lg font-medium "
                                >
                                  Zip Code
                                </label>
                                <Field
                                  type="text"
                                  placeholder="EX A2B 3A5"
                                  id="usazipcode"
                                  name="usazipcode"
                                  className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="w-60 md:w-4/12   flex flex-col  text-[14px] py-5">
                                <label
                                  htmlFor="lengthoftime"
                                  className=" text-lg font-medium "
                                >
                                  Length of Time at Residence
                                </label>
                                <div className="flex flex-col md:flex-row">
                                  <div className="px-1">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      id="lengthoftimeyears"
                                      name="lengthoftimeyears"
                                      className="w-60 h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <p>Years</p>
                                  </div>
                                  <div className="px-1">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      id="lengthoftimemonths"
                                      name="lengthoftimemonths"
                                      className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />

                                    <p>Months</p>
                                  </div>
                                </div>
                              </div>
                              <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                                <label
                                  htmlFor="monthlyrentpayusa"
                                  className=" text-lg font-medium "
                                >
                                  Monthly Rent Payments
                                </label>

                                <div className="mt-1 h-12  flex rounded-md shadow-sm">
                                  <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <Field
                                    defaultValue={0}
                                    type="number"
                                    name="monthlyrentpayusa"
                                    className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={openTab === 3 ? "block" : "hidden"}
                            id="otheraddress"
                          >
                            <div className="mb-3 min-w-full">
                              <label
                                htmlFor="otheraddress"
                                className="form-label  mb-2 text-gray-700"
                              >
                                Type a full address if it's from a country other
                                than Canada or USA.
                              </label>
                              <textarea
                                id="otheraddress"
                                className="otheraddress"
                                className="form-control border block px-3 w-full py-1.5"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md shadow-lg">
                  <div className="text-black font-black py-4 px-2">
                    <h4 className=" border-b-2">Employer</h4>
                  </div>
                  {EmployeData.map((el, i) => {
                    return (
                      <div key={i}>
                        <div className="flex shadow-xl  my-1 px-1 flex-col md:flex-wrap md:flex-row justify-between items-center	py-3	">
                          <div
                            className=" w-60 md:w-2/12 flex flex-col 
                          text-[14px] py-1"
                          >
                            <label
                              htmlFor="employmenttype"
                              className=" text-lg font-medium "
                            >
                              Employment Status
                            </label>
                            <select
                              id="employmenttype"
                              name="employmenttype"
                              className="h-12  mt-1 w-60 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Current</option>
                              <option value="2">Previous</option>
                            </select>
                          </div>
                          <div
                            className="w-60 md:w-5/12  
                           flex flex-col text-[14px] py-1"
                          >
                            <label
                              htmlFor="nameofemployer"
                              className=" text-lg font-medium"
                            >
                              Name of Employer
                            </label>
                            <input
                              id="nameofemployer"
                              name="nameofemployer"
                              className="h-12 mt-1  
                               py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              type="text"
                            />
                          </div>
                          <div
                            className=" w-60 md:w-2/12
                           flex flex-col text-[14px] py-1"
                          >
                            <label
                              htmlFor="lastname"
                              className=" text-lg font-medium "
                            >
                              Employment Type{" "}
                            </label>
                            <select
                              id="employmentstatus"
                              name="employmentstatus"
                              className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Current</option>
                              <option value="2">Previous</option>
                            </select>

                            <ErrorMessage name="employmentstatus" />
                          </div>
                          <div
                            className="w-60 md:w-2/12 
                            flex flex-col text-[14px] py-1"
                          >
                            <label
                              htmlFor="jobtile"
                              className=" text-lg font-medium"
                            >
                              Job Title
                            </label>
                            <input
                              id="jobtile"
                              name="jobtile"
                              className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              type="text"
                            />

                            <ErrorMessage name="jobtile" />
                          </div>

                          <div className=" ">
                            <div className="text-black font-black  px-2 py-4">
                              <h4 className=" border-b-2 px-2">
                                Employer Address
                              </h4>
                            </div>

                            <div>
                              <ul
                                className="flex mb-0 list-none flex-wrap px-3 pb-4 flex-row"
                                role="tablist"
                              >
                                <li className="   text-center">
                                  <a
                                    className={
                                      "text-xs font-bold  px-1 py-3 shadow-lg rounded  leading-normal " +
                                      (openTab === 1
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                    }
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#canadaAdress"
                                    role="tablist"
                                  >
                                    Canada Address
                                  </a>
                                </li>
                                <li className="  text-center">
                                  <a
                                    className={
                                      "text-xs font-bold uppercase px-1 py-3 shadow-lg rounded  leading-normal " +
                                      (openTab === 2
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                    }
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#usaAddress"
                                    role="tablist"
                                  >
                                    USA Address
                                  </a>
                                </li>
                                <li className=" text-center">
                                  <a
                                    className={
                                      "text-xs font-bold uppercase px-1 py-3 shadow-lg rounded  leading-normal " +
                                      (openTab === 3
                                        ? "text-white bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                    }
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#otheraddress"
                                    role="tablist"
                                  >
                                    Other
                                  </a>
                                </li>
                              </ul>
                              <div className="relative flex flex-col px-1  min-w-0 break-words bg-white w-full mb-6">
                                <div className="px-2 py-5 flex-auto">
                                  <div className="tab-content tab-space">
                                    <div
                                      className={
                                        openTab === 1 ? "block" : "hidden"
                                      }
                                      id="canadaAdress"
                                    >
                                      <div
                                        className="flex flex-col md:flex-wrap 
                                      items-baseline	 md:flex-row justify-between items-center	
                                      py-3	"
                                      >
                                        <div
                                          className=" w-60 md:w-2/12 flex flex-col 
                                        text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="streetNo"
                                            className=" text-lg font-medium "
                                          >
                                            Street Number
                                          </label>
                                          <Field
                                            type="number"
                                            id="streetNo"
                                            name="streetNo"
                                            className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          />
                                        </div>
                                        <div
                                          className="w-60 md:w-5/12  
                                         flex flex-col text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="streetnamecanada"
                                            className=" text-lg font-medium"
                                          >
                                            Street Name
                                          </label>
                                          <Field
                                            id="streetnamecanada"
                                            name="streetnamecanada"
                                            className="h-12 mt-1  
                                             py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            type="text"
                                          />
                                        </div>
                                        <div
                                          className=" w-60 md:w-2/12 
                                        flex flex-col text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="streetType"
                                            className=" text-lg font-medium "
                                          >
                                            Street Type
                                          </label>
                                          <Field
                                            as="select"
                                            id="streetType"
                                            name="streetType"
                                            className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          >
                                            <option value="">
                                              Please Select
                                            </option>
                                            <option value="0">Purchase</option>
                                            <option value="2">Refinance</option>
                                            <option value="4">
                                              Switch
                                            </option>{" "}
                                          </Field>
                                        </div>
                                        <div
                                          className="w-60 md:w-2/12  
                                         flex flex-col text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="streetDirection"
                                            className=" text-lg font-medium "
                                          >
                                            Street Direction
                                          </label>
                                          <Field
                                            as="select"
                                            id="streetDirection"
                                            name="streetDirection"
                                            className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          >
                                            <option value="">
                                              Please Select
                                            </option>
                                            <option value="0">Purchase</option>
                                            <option value="2">Refinance</option>
                                            <option value="4">
                                              Switch
                                            </option>{" "}
                                          </Field>

                                          <ErrorMessage name="streetType" />
                                        </div>
                                        <div
                                          className=" w-60 md:w-2.8/12 flex
                                         flex-col text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="unit"
                                            className=" text-lg font-medium "
                                          >
                                            Unit
                                          </label>
                                          <Field
                                            type="text"
                                            id="unit"
                                            name="unit"
                                            className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          />
                                        </div>
                                        <div
                                          className="w-60 md:w-3/12  
                                         flex flex-col text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="city/town"
                                            className=" text-lg font-medium"
                                          >
                                            City/Town
                                          </label>
                                          <Field
                                            id="city/town"
                                            name="city/town"
                                            className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            type="text"
                                          />
                                        </div>
                                        <div
                                          className=" w-60 md:w-3/12 flex 
                                        flex-col text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="province"
                                            className=" text-lg font-medium "
                                          >
                                            Province
                                          </label>
                                          <Field
                                            as="select"
                                            id="province"
                                            name="province"
                                            className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          >
                                            <option value="">
                                              Please Select
                                            </option>
                                            <option value="0">Purchase</option>
                                            <option value="2">Refinance</option>
                                            <option value="4">
                                              Switch
                                            </option>{" "}
                                          </Field>
                                        </div>
                                        <div
                                          className="w-60 md:w-3/12  
                                         flex flex-col text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="postalcode"
                                            className=" text-lg font-medium "
                                          >
                                            Postal Code
                                          </label>
                                          <Field
                                            type="text"
                                            placeholder="EX A2B 3A5"
                                            id="postalcode"
                                            name="postalcode"
                                            className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          />
                                        </div>{" "}
                                        <div
                                          className="w-60 md:w-4/12 
                                          flex flex-col  text-[14px] py-1"
                                        >
                                          <label
                                            htmlFor="lengthoftime"
                                            className=" text-lg font-medium "
                                          >
                                            Length of Time at Residence
                                          </label>
                                          <div className="py-2 flex items-center flex-col md:flex-row">
                                            <div className="">
                                              <input
                                                type="number"
                                                placeholder="0"
                                                id="lengthoftimeyears"
                                                name="lengthoftimeyears"
                                                className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                              />
                                              <p>Years</p>
                                            </div>
                                            <div className="md:px-2">
                                              <input
                                                type="number"
                                                placeholder="0"
                                                id="lengthoftimemonths"
                                                name="lengthoftimemonths"
                                                className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                              />

                                              <p>Months</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className=" w-60 md:w-3/12 flex flex-col text-[14px] ">
                                          <label
                                            htmlFor="residentialStatus"
                                            className=" text-lg font-medium "
                                          >
                                            Residential Status
                                          </label>
                                          <Field
                                            as="select"
                                            id="residentialStatus"
                                            name="residentialStatus"
                                            className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          >
                                            <option value="">
                                              Please Select
                                            </option>
                                            <option value="0">Purchase</option>
                                            <option value="2">Refinance</option>
                                            <option value="4">
                                              Switch
                                            </option>{" "}
                                          </Field>

                                          <ErrorMessage name="residentialStatus" />
                                        </div>
                                        <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                                          <label
                                            htmlFor="monthlyrentpaycanada"
                                            className=" text-lg font-medium "
                                          >
                                            Monthly Rent Payments
                                          </label>

                                          <div className=" mt-1 h-12  flex rounded-md shadow-sm">
                                            <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                              $
                                            </span>
                                            <Field
                                              defaultValue={0}
                                              type="number"
                                              name="monthlyrentpaycanada"
                                              className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        openTab === 2 ? "block" : "hidden"
                                      }
                                      id="usaAddress"
                                    >
                                      <div className="flex flex-col md:flex-wrap  items-baseline	 md:flex-row justify-between items-center	py-3	">
                                        <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                                          <label
                                            htmlFor="usastreetNo"
                                            className=" text-lg font-medium "
                                          >
                                            Street Number
                                          </label>
                                          <Field
                                            type="number"
                                            id="usastreetNo"
                                            name="usastreetNo"
                                            className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          />
                                        </div>
                                        <div className="w-60 md:w-8/12   flex flex-col text-[14px] py-5">
                                          <label
                                            htmlFor="usastreetname"
                                            className=" text-lg font-medium"
                                          >
                                            Street Name
                                          </label>
                                          <Field
                                            id="usastreetname"
                                            name="usastreetname"
                                            className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            type="text"
                                          />
                                        </div>
                                        <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                                          <label
                                            htmlFor="usaunit"
                                            className=" text-lg font-medium "
                                          >
                                            Unit
                                          </label>
                                          <Field
                                            type="text"
                                            id="usaunit"
                                            name="usaunit"
                                            className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          />
                                        </div>
                                        <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                          <label
                                            htmlFor="usacity/town"
                                            className=" text-lg font-medium"
                                          >
                                            City/Town
                                          </label>
                                          <Field
                                            id="usacity/town"
                                            name="usacity/town"
                                            className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            type="text"
                                          />

                                          <ErrorMessage name="usacity/town" />
                                        </div>
                                        <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                                          <label
                                            htmlFor="usastate"
                                            className=" text-lg font-medium "
                                          >
                                            State
                                          </label>
                                          <Field
                                            as="select"
                                            id="usastate"
                                            name="usastate"
                                            className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          >
                                            <option value="">
                                              Please Select
                                            </option>
                                            <option value="0">Purchase</option>
                                            <option value="2">Refinance</option>
                                            <option value="4">
                                              Switch
                                            </option>{" "}
                                          </Field>
                                        </div>
                                        <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                          <label
                                            htmlFor="usazipcode"
                                            className=" text-lg font-medium "
                                          >
                                            Zip Code
                                          </label>
                                          <Field
                                            type="text"
                                            placeholder="EX A2B 3A5"
                                            id="usazipcode"
                                            name="usazipcode"
                                            className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          />
                                        </div>
                                        <div className="w-60 md:w-4/12   flex flex-col  text-[14px] py-5">
                                          <label
                                            htmlFor="lengthoftime"
                                            className=" text-lg font-medium "
                                          >
                                            Length of Time at Residence
                                          </label>
                                          <div className="flex  flex-col md:flex-row">
                                            <div className="px-2">
                                              <input
                                                type="number"
                                                placeholder="0"
                                                id="lengthoftimeyears"
                                                name="lengthoftimeyears"
                                                className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                              />
                                              <p>Years</p>
                                            </div>
                                            <div className="px-2">
                                              <input
                                                type="number"
                                                placeholder="0"
                                                id="lengthoftimemonths"
                                                name="lengthoftimemonths"
                                                className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                              />

                                              <p>Months</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                                          <label
                                            htmlFor="monthlyrentpayusa"
                                            className=" text-lg font-medium "
                                          >
                                            Monthly Rent Payments
                                          </label>

                                          <div className="mt-1 h-12  flex rounded-md shadow-sm">
                                            <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                              $
                                            </span>
                                            <Field
                                              defaultValue={0}
                                              type="number"
                                              name="monthlyrentpayusa"
                                              className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        openTab === 3 ? "block" : "hidden"
                                      }
                                      id="otheraddress"
                                    >
                                      <div
                                        className="mb-3 "
                                        style={{ width: "82rem" }}
                                      >
                                        <label
                                          htmlFor="otheraddress"
                                          className="form-label  mb-2 text-gray-700"
                                        >
                                          Type a full address if it's from a
                                          country other than Canada or USA.
                                        </label>
                                        <textarea
                                          id="otheraddress"
                                          className="otheraddress"
                                          className="form-control border block px-3 w-full py-1.5"
                                          id="exampleFormControlTextarea1"
                                          rows="3"
                                          placeholder="Your message"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col px-3 md:flex-row md:flex-wrap items-baseline justify-between">
                              <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-1">
                                <label
                                  htmlFor="occupationtype"
                                  className=" text-lg font-medium "
                                >
                                  Occupation Type
                                </label>
                                <select
                                  id="typeofincome"
                                  name="typeofincome"
                                  className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="1">Refinance</option>
                                  <option value="2">Switch</option>{" "}
                                </select>
                                <ErrorMessage name="occupationtype" />
                              </div>
                              <div className="w-60 md:w-2.8/12   flex flex-col text-[14px] py-1">
                                <label
                                  htmlFor="industrysection"
                                  className=" text-lg font-medium"
                                >
                                  Industry Sector
                                </label>
                                <select
                                  id="typeofincome"
                                  name="typeofincome"
                                  className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </select>
                              </div>
                              <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-1">
                                <label
                                  htmlFor="typeofincome"
                                  className=" text-lg font-medium "
                                >
                                  Type of Income
                                </label>
                                <select
                                  id="typeofincome"
                                  name="typeofincome"
                                  className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </select>
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-1">
                                <label
                                  htmlFor="annualincome"
                                  className=" text-lg font-medium "
                                >
                                  Annual Income
                                </label>
                                <input
                                  type="text"
                                  placeholder="EX A2B 3A5"
                                  id="annualincome"
                                  name="annualincome"
                                  className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div className="w-60 md:w-2/12  items-start flex flex-col text-[14px] py-1 ">
                                <label
                                  htmlFor="lengthofemployment"
                                  className=" text-lg font-medium "
                                >
                                  Length of Employment
                                </label>
                                <div className="py-2  flex flex-col md:flex-row">
                                  <div className="">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      id="lengthoftimeyears"
                                      name="lengthoftimeyears"
                                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <p>Years</p>
                                  </div>
                                  <div className="md:px-2">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      id="lengthoftimemonths"
                                      name="lengthoftimemonths"
                                      className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />

                                    <p>Months</p>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="w-60 md:w-4/12   
                              flex flex-col text-[14px] py-1"
                              >
                                <label
                                  htmlFor="lengthofemployment"
                                  className=" text-lg font-medium "
                                >
                                  Years in Line of Business
                                </label>
                                <div
                                  className="py-2 flex flex-col 
                                md:flex-row"
                                >
                                  <div className="">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      id="lengthoftimeyears"
                                      name="lengthoftimeyears"
                                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <p>Years</p>
                                  </div>
                                  <div className="md:px-2">
                                    <input
                                      type="number"
                                      placeholder="0"
                                      id="lengthoftimemonths"
                                      name="lengthoftimemonths"
                                      className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />

                                    <p>Months</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" flex justify-end">
                          <button
                            className="px-3 py-2 bg-blue-400 text-white"
                            onClick={() => setEmployeData((old) => [...old, 1])}
                          >
                            +Add
                          </button>{" "}
                          <button
                            className="px-3 py-2 bg-blue-400 text-white"
                            onClick={() => setEmployeData((old) => [...old, 1])}
                          >
                            -Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="md:px-5 px-3 my-2  pb-3 border-2 
                rounded-lg shadow-lg"
                >
                  <div className="text-black font-black py-4">
                    <h4 className=" border-b-2">Other Income</h4>
                  </div>
                  <div className="flex flex-col md:flex-wrap md:flex-row justify-between items-center	py-3	">
                    <div
                      className=" w-60 md:w-3/12 flex 
                    flex-col text-[14px] py-2"
                    >
                      <label
                        htmlFor="incomesource"
                        className=" text-lg font-medium "
                      >
                        Other Income Source
                      </label>
                      <select
                        id="incomesource"
                        name="incomesource"
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Current</option>
                        <option value="2">Previous</option>
                      </select>
                    </div>
                    <div
                      className="w-60 md:w-3/12  
                     flex flex-col text-[14px] py-2"
                    >
                      <label
                        htmlFor="description"
                        className=" text-lg font-medium"
                      >
                        Description
                      </label>
                      <input
                        id="nameofemployer"
                        name="nameofemployer"
                        className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                      />
                    </div>
                    <div
                      className=" w-60 md:w-3/12 flex 
                    flex-col text-[14px] py-2"
                    >
                      <label
                        htmlFor="lastname"
                        className=" text-lg font-medium "
                      >
                        Period
                      </label>
                      <select
                        id="employmentstatus"
                        name="employmentstatus"
                        className="h-12  mt-1   py-2 px-3 
                        border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Current</option>
                        <option value="2">Previous</option>
                      </select>
                    </div>
                    <div
                      className=" w-60 md:w-3/12 lg:w-60 
                    flex flex-col text-[14px] "
                    >
                      <label
                        htmlFor="monthlyrentpayment"
                        className=" text-lg font-medium "
                      >
                        Amount
                      </label>
                      <div className=" h-12  flex rounded-md shadow-sm">
                        <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <Field
                          defaultValue={0}
                          type="number"
                          name="downpaymentamount"
                          className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:px-5 px-3 pb-3 border-2 rounded-lg shadow-lg">
                  <div className="text-black font-black py-4">
                    <h4 className=" border-b-2">Properties</h4>
                  </div>
                  <div className="flex flex-col md:flex-wrap md:flex-row justify-between items-center	py-3	">
                    <div
                      className=" w-60 md:w-2/12 flex 
                    flex-col text-[14px] py-2"
                    >
                      <label
                        htmlFor="employmenttype"
                        className=" text-lg font-medium "
                      >
                        Occupancy
                      </label>
                      <select
                        id="employmenttype"
                        name="employmenttype"
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Current</option>
                        <option value="2">Previous</option>
                      </select>
                    </div>
                    <div
                      className="w-60 md:w-2/12 
                      flex flex-col text-[14px] py-2"
                    >
                      <label
                        htmlFor="purchasedate"
                        className=" text-lg font-medium"
                      >
                        Purchase Date
                      </label>
                      <input
                        id="purchasedate"
                        name="purchasedate"
                        className="h-12 mt-1 min-w-full  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="date"
                      />
                    </div>
                    <div
                      className=" w-60 md:w-2/12 flex flex-col
                     text-[14px] py-2"
                    >
                      <label
                        htmlFor="lastname"
                        className=" text-lg font-medium "
                      >
                        Purchase Price
                      </label>
                      <input
                        id="purchasedate"
                        name="purchasedate"
                        className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                      />
                    </div>
                    <div
                      className="w-60 md:w-2/12  
                     flex flex-col text-[14px] py-2"
                    >
                      <label htmlFor="jobtile" className=" text-lg font-medium">
                        Current Price
                      </label>
                      <input
                        id="jobtile"
                        name="jobtile"
                        className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                      />
                    </div>
                    <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                      <label htmlFor="jobtile" className=" text-lg font-medium">
                        Rental Income/month
                      </label>
                      <input
                        id="jobtile"
                        name="jobtile"
                        className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                      />
                    </div>
                    <div className="   md:px-5 px-3 pb-3">
                      <div>
                        <ul
                          className="flex mb-0 list-none justify-center md:justify-start flex-wrap pt-3 pb-4 flex-row"
                          role="tablist"
                        >
                          <li className="   text-center">
                            <a
                              className={
                                "text-xs font-bold border-2 px-1 py-3  rounded  leading-normal " +
                                (openTab === 1
                                  ? "text-white bg-" + color + "-600"
                                  : "text-" + color + "-600 bg-white")
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                              }}
                              data-toggle="tab"
                              href="#canadaAdress"
                              role="tablist"
                            >
                              Canada Address
                            </a>
                          </li>
                          <li className="  text-center">
                            <a
                              className={
                                "text-xs border-2 font-bold uppercase px-1 py-3 rounded  leading-normal " +
                                (openTab === 2
                                  ? "text-white bg-" + color + "-600"
                                  : "text-" + color + "-600 bg-white")
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                              }}
                              data-toggle="tab"
                              href="#usaAddress"
                              role="tablist"
                            >
                              USA Address
                            </a>
                          </li>
                          <li className=" text-center">
                            <a
                              className={
                                "text-xs border-2 font-bold uppercase px-1 py-3  rounded  leading-normal " +
                                (openTab === 3
                                  ? "text-white bg-" + color + "-600"
                                  : "text-" + color + "-600 bg-white")
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(3);
                              }}
                              data-toggle="tab"
                              href="#otheraddress"
                              role="tablist"
                            >
                              Other
                            </a>
                          </li>
                        </ul>
                        <div className="relative flex flex-col  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                          <div className="px-2 py-5 flex-auto">
                            <div className="tab-content tab-space">
                              <div
                                className={openTab === 1 ? "block" : "hidden"}
                                id="canadaAdress"
                              >
                                <div className="flex flex-col md:flex-wrap items-baseline	 md:flex-row justify-between items-center	py-3	">
                                  <div
                                    className=" w-60 md:w-2/12 
                                  flex flex-col text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="streetNo"
                                      className=" text-lg font-medium "
                                    >
                                      Street Number
                                    </label>
                                    <Field
                                      type="number"
                                      id="streetNo"
                                      name="streetNo"
                                      className=" h-12 mt-1    px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div
                                    className="w-60 md:w-5/12  
                                   flex flex-col text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="streetnamecanada"
                                      className=" text-lg font-medium"
                                    >
                                      Street Name
                                    </label>
                                    <Field
                                      id="streetnamecanada"
                                      name="streetnamecanada"
                                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      type="text"
                                    />
                                  </div>
                                  <div
                                    className=" w-60 md:w-2/12 
                                  flex flex-col text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="streetType"
                                      className=" text-lg font-medium "
                                    >
                                      Street Type
                                    </label>
                                    <Field
                                      as="select"
                                      id="streetType"
                                      name="streetType"
                                      className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="">Please Select</option>
                                      <option value="0">Purchase</option>
                                      <option value="2">Refinance</option>
                                      <option value="4">Switch</option>{" "}
                                    </Field>
                                  </div>
                                  <div
                                    className="w-60 md:w-2/12  
                                   flex flex-col text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="streetDirection"
                                      className=" text-lg font-medium "
                                    >
                                      Street Direction
                                    </label>
                                    <Field
                                      as="select"
                                      id="streetDirection"
                                      name="streetDirection"
                                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="">Please Select</option>
                                      <option value="0">Purchase</option>
                                      <option value="2">Refinance</option>
                                      <option value="4">Switch</option>{" "}
                                    </Field>

                                    <ErrorMessage name="streetType" />
                                  </div>
                                  <div
                                    className=" w-60 md:w-2.8/12 
                                  flex flex-col text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="unit"
                                      className=" text-lg font-medium "
                                    >
                                      Unit
                                    </label>
                                    <Field
                                      type="text"
                                      id="unit"
                                      name="unit"
                                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div
                                    className="w-60 md:w-3/12  
                                   flex flex-col text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="city/town"
                                      className=" text-lg font-medium"
                                    >
                                      City/Town
                                    </label>
                                    <Field
                                      id="city/town"
                                      name="city/town"
                                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      type="text"
                                    />
                                  </div>
                                  <div
                                    className=" w-60 md:w-3/12 
                                  flex flex-col text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="province"
                                      className=" text-lg font-medium "
                                    >
                                      Province
                                    </label>
                                    <Field
                                      as="select"
                                      id="province"
                                      name="province"
                                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="">Please Select</option>
                                      <option value="0">Purchase</option>
                                      <option value="2">Refinance</option>
                                      <option value="4">Switch</option>{" "}
                                    </Field>
                                  </div>
                                  <div
                                    className="w-60 md:w-3/12  
                                   flex flex-col text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="postalcode"
                                      className=" text-lg font-medium "
                                    >
                                      Postal Code
                                    </label>
                                    <Field
                                      type="text"
                                      placeholder="EX A2B 3A5"
                                      id="postalcode"
                                      name="postalcode"
                                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>{" "}
                                  <div
                                    className="w-60 md:w-4/12  
                                   flex flex-col  text-[14px] py-2"
                                  >
                                    <label
                                      htmlFor="lengthoftime"
                                      className=" text-lg font-medium "
                                    >
                                      Length of Time at Residence
                                    </label>
                                    <div className="py-2  flex flex-col md:flex-row">
                                      <div className="">
                                        <input
                                          type="number"
                                          placeholder="0"
                                          id="lengthoftimeyears"
                                          name="lengthoftimeyears"
                                          className="w-60 md:w-auto h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <p>Years</p>
                                      </div>
                                      <div className="px-0 md:px-2">
                                        <input
                                          type="number"
                                          placeholder="0"
                                          id="lengthoftimemonths"
                                          name="lengthoftimemonths"
                                          className="w-60 md:w-auto h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />

                                        <p>Months</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className=" w-60 md:w-3/12 flex flex-col text-[14px] ">
                                    <label
                                      htmlFor="residentialStatus"
                                      className=" text-lg font-medium "
                                    >
                                      Residential Status
                                    </label>
                                    <Field
                                      as="select"
                                      id="residentialStatus"
                                      name="residentialStatus"
                                      className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="">Please Select</option>
                                      <option value="0">Purchase</option>
                                      <option value="2">Refinance</option>
                                      <option value="4">Switch</option>{" "}
                                    </Field>

                                    <ErrorMessage name="residentialStatus" />
                                  </div>
                                  <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                                    <label
                                      htmlFor="monthlyrentpaycanada"
                                      className=" text-lg font-medium "
                                    >
                                      Monthly Rent Payments
                                    </label>

                                    <div className=" mt-1 h-12  flex rounded-md shadow-sm">
                                      <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        $
                                      </span>
                                      <Field
                                        defaultValue={0}
                                        type="number"
                                        name="monthlyrentpaycanada"
                                        className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={openTab === 2 ? "block" : "hidden"}
                                id="usaAddress"
                              >
                                <div className="flex flex-col md:flex-wrap  items-baseline	 md:flex-row justify-between items-center	py-3	">
                                  <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                                    <label
                                      htmlFor="usastreetNo"
                                      className=" text-lg font-medium "
                                    >
                                      Street Number
                                    </label>
                                    <Field
                                      type="number"
                                      id="usastreetNo"
                                      name="usastreetNo"
                                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="w-60 md:w-8/12   flex flex-col text-[14px] py-5">
                                    <label
                                      htmlFor="usastreetname"
                                      className=" text-lg font-medium"
                                    >
                                      Street Name
                                    </label>
                                    <Field
                                      id="usastreetname"
                                      name="usastreetname"
                                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      type="text"
                                    />
                                  </div>
                                  <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                                    <label
                                      htmlFor="usaunit"
                                      className=" text-lg font-medium "
                                    >
                                      Unit
                                    </label>
                                    <Field
                                      type="text"
                                      id="usaunit"
                                      name="usaunit"
                                      className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                    <label
                                      htmlFor="usacity/town"
                                      className=" text-lg font-medium"
                                    >
                                      City/Town
                                    </label>
                                    <Field
                                      id="usacity/town"
                                      name="usacity/town"
                                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      type="text"
                                    />

                                    <ErrorMessage name="usacity/town" />
                                  </div>
                                  <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                                    <label
                                      htmlFor="usastate"
                                      className=" text-lg font-medium "
                                    >
                                      State
                                    </label>
                                    <Field
                                      as="select"
                                      id="usastate"
                                      name="usastate"
                                      className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="">Please Select</option>
                                      <option value="0">Purchase</option>
                                      <option value="2">Refinance</option>
                                      <option value="4">Switch</option>{" "}
                                    </Field>
                                  </div>
                                  <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                    <label
                                      htmlFor="usazipcode"
                                      className=" text-lg font-medium "
                                    >
                                      Zip Code
                                    </label>
                                    <Field
                                      type="text"
                                      placeholder="EX A2B 3A5"
                                      id="usazipcode"
                                      name="usazipcode"
                                      className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div className="w-60 md:w-4/12   flex flex-col  text-[14px] py-5">
                                    <label
                                      htmlFor="lengthoftime"
                                      className=" text-lg font-medium "
                                    >
                                      Length of Time at Residence
                                    </label>
                                    <div className="flex flex-col md:flex-row">
                                      <div className="px-1">
                                        <input
                                          type="number"
                                          placeholder="0"
                                          id="lengthoftimeyears"
                                          name="lengthoftimeyears"
                                          className="w-60 h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <p>Years</p>
                                      </div>
                                      <div className="px-1">
                                        <input
                                          type="number"
                                          placeholder="0"
                                          id="lengthoftimemonths"
                                          name="lengthoftimemonths"
                                          className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />

                                        <p>Months</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                                    <label
                                      htmlFor="monthlyrentpayusa"
                                      className=" text-lg font-medium "
                                    >
                                      Monthly Rent Payments
                                    </label>

                                    <div className="mt-1 h-12  flex rounded-md shadow-sm">
                                      <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        $
                                      </span>
                                      <Field
                                        defaultValue={0}
                                        type="number"
                                        name="monthlyrentpayusa"
                                        className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={openTab === 3 ? "block" : "hidden"}
                                id="otheraddress"
                              >
                                <div
                                  className="mb-3 "
                                  style={{ width: "82rem" }}
                                >
                                  <label
                                    HtmlFor="otheraddress"
                                    className="form-label  mb-2 text-gray-700"
                                  >
                                    Type a full address if it's from a country
                                    other than Canada or USA.
                                  </label>
                                  <textarea
                                    id="otheraddress"
                                    className="otheraddress"
                                    className="form-control border block px-3 w-full py-1.5"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Your message"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:flex-wrap items-baseline justify-between">
                        <div className="px-2 w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                          <label
                            htmlFor="monthlyrentpayment"
                            className=" text-lg font-medium "
                          >
                            Property Annual Tax
                          </label>
                          <div
                            className="mt-1 h-12  
                          flex rounded-md shadow-sm px-2"
                          >
                            <span
                              className="inline-flex items-center mt-1 
                               px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                            >
                              $
                            </span>
                            <Field
                              defaultValue={0}
                              type="number"
                              name="downpaymentamount"
                              className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className=" w-60 md:w-3/12  px-2 lg:w-60 flex flex-col text-[14px] ">
                          <label
                            htmlFor="monthlyrentpayment"
                            className=" text-lg font-medium "
                          >
                            Total Condo Fees/month
                          </label>
                          <div className="mt-1 h-12   flex rounded-md shadow-sm">
                            <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                              $
                            </span>
                            <Field
                              defaultValue={0}
                              type="number"
                              name="downpaymentamount"
                              className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>{" "}
                        </div>
                        <div className=" w-60 md:w-3/12 px-2 lg:w-60 flex flex-col text-[14px] ">
                          <label
                            htmlFor="monthlyrentpayment"
                            className=" text-lg font-medium "
                          >
                            Condo fees include heat
                          </label>
                          <div className="mt-1 h-12  flex rounded-md shadow-sm">
                            <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                              $
                            </span>
                            <Field
                              defaultValue={0}
                              type="number"
                              name="downpaymentamount"
                              className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>{" "}
                        <div className="px-2 w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                          <label
                            htmlFor="monthlyrentpayment"
                            className=" text-lg font-medium "
                          >
                            Heating Fees/month
                          </label>
                          <div className="mt-1 h-12  flex rounded-md shadow-sm">
                            <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                              $
                            </span>
                            <Field
                              defaultValue={0}
                              type="number"
                              name="downpaymentamount"
                              className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:px-5 px-3 pb-3 border-2 rounded-lg shadow-lg my-3">
                  <div className="text-black font-black py-4">
                    <h4 className=" border-b-2">Assets</h4>
                  </div>
                  {AssetsData.map((e, index) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <div className="flex flex-col md:flex-wrap md:flex-row items-baseline justify-between items-center	py-3	">
                          <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="assettype"
                              className=" text-lg font-medium "
                            >
                              Asset Type
                            </label>
                            <select
                              id="assettype"
                              name="assettype"
                              className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Current</option>
                              <option value="2">Previous</option>
                            </select>
                          </div>
                          <div className="w-60 md:w-7/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="assetdescript"
                              className=" text-lg font-medium"
                            >
                              Description
                            </label>
                            <input
                              id="assetdescript"
                              name="assetdescript"
                              className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              type="text"
                            />

                            <p>Max 80 characters.</p>
                          </div>
                          <div className=" w-60  flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="assetamount"
                              className=" text-lg font-medium "
                            >
                              Amount
                            </label>
                            <div className=" h-12  flex rounded-md shadow-sm">
                              <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                $
                              </span>
                              <Field
                                defaultValue={0}
                                type="number"
                                name="downpaymentamount"
                                className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <p>Ex. 1000.00 without "$" or ",".</p>
                          </div>
                        </div>
                        <div className=" flex ">
                          {AssetsData.length > 1 ? (
                            <button
                              className="mx-2 px-3 py-2 bg-blue-400 text-white"
                              onClick={() =>
                                setAssetsData(
                                  AssetsData.filter((item) => item != e)
                                )
                              }
                            >
                              -Remove
                            </button>
                          ) : (
                            ""
                          )}

                          <button
                            className="mx-2 px-3 py-2 bg-blue-400 text-white"
                            onClick={() =>
                              setAssetsData((old) => [
                                ...old,
                                AssetsData[AssetsData.length - 1] + 1,
                              ])
                            }
                          >
                            +Add
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="md:px-5 px-3 pb-3 border-2 rounded-lg shadow-lg">
                  <div className="text-black font-black py-4">
                    <h4 className=" border-b-2">Liablities</h4>
                  </div>
                  {Liablites.map((e, i) => {
                    return (
                      <div key={i} className="flex-col flex">
                        <div className="flex flex-col md:flex-wrap md:flex-row items-baseline justify-between items-center	py-3	">
                          <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="assettype"
                              className=" text-lg font-medium "
                            >
                              Liability Type
                            </label>
                            <select
                              id="assettype"
                              name="assettype"
                              className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Current</option>
                              <option value="2">Previous</option>
                            </select>
                          </div>
                          <div className="w-60 md:w-4/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="assetdescript"
                              className=" text-lg font-medium"
                            >
                              Description
                            </label>
                            <input
                              id="assetdescript"
                              name="assetdescript"
                              className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              type="text"
                            />

                            <p>Max 80 characters.</p>
                          </div>
                          <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="assetamount"
                              className=" text-lg font-medium "
                            >
                              Monthly Payment{" "}
                            </label>
                            <div className=" mt-1 h-12  flex rounded-md shadow-sm">
                              <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                $
                              </span>
                              <Field
                                defaultValue={0}
                                type="number"
                                name="monthlyrentpaycanada"
                                className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <p>Ex. 1000.00 without "$" or ",".</p>
                          </div>{" "}
                          <div className=" w-60 flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="assetamount"
                              className=" text-lg font-medium "
                            >
                              Amount
                            </label>
                            <div className=" mt-1 h-12  flex rounded-md shadow-sm">
                              <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                $
                              </span>
                              <Field
                                defaultValue={0}
                                type="number"
                                name="monthlyrentpaycanada"
                                className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <p>Ex. 1000.00 without "$" or ",".</p>
                          </div>
                        </div>
                        <div className=" flex ">
                          {Liablites.length > 1 ? (
                            <button
                              className="mx-2 px-3 py-2 bg-blue-400 text-white"
                              onClick={() =>
                                setLiablites(
                                  Liablites.filter((item) => item != e)
                                )
                              }
                            >
                              -Remove
                            </button>
                          ) : (
                            ""
                          )}

                          <button
                            className="mx-2 px-3 py-2 bg-blue-400 text-white"
                            onClick={() =>
                              setLiablites((old) => [
                                ...old,
                                Liablites[Liablites.length - 1] + 1,
                              ])
                            }
                          >
                            +Add
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className=" border  md:px-5 px-3 pb-3">
                  <p className="text-blue-600  font-black  text-2xl md:text-5xl py-3 px-4 border-b-2 my-2">
                    Subject Property Information
                  </p>
                  <div className="text-black font-black py-4">
                    <h4 className=" border-b-2">Property Information</h4>
                  </div>
                  <div className="flex flex-col md:flex-wrap items-end md:flex-row justify-between items-end	py-3	">
                    <div className=" w-60 md:w-4/12 flex flex-col text-[14px] ">
                      <label
                        htmlFor="msllistingno"
                        className=" text-lg font-medium "
                      >
                        MLS Listing Number
                      </label>
                      <input
                        id="msllistingno"
                        name="msllistingno"
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                      />
                    </div>
                    <div className="w-60 md:w-3/12 flex flex-col text-[14px] ">
                      <label
                        htmlFor="purchaseprice"
                        className=" text-lg font-medium "
                      >
                        Purchase Price
                      </label>
                      <div className=" mt-1 h-12  flex rounded-md shadow-sm">
                        <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <Field
                          defaultValue={0}
                          type="number"
                          name="monthlyrentpaycanada"
                          className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="w-60 md:w-4/12  flex flex-col text-[14px] ">
                      <label
                        htmlFor="currentpropertyvalue"
                        className=" text-lg font-medium "
                      >
                        Current Value of Property
                      </label>
                      <div className=" mt-1 h-12  flex rounded-md shadow-sm">
                        <span className="h-12 inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          $
                        </span>
                        <Field
                          defaultValue={0}
                          type="number"
                          name="monthlyrentpaycanada"
                          className="h-12 w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className=" w-60 md:w-1/5 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="constructiontype"
                        className=" text-lg font-medium "
                      >
                        Construction Type
                      </label>
                      <select
                        id="constructiontype"
                        name="constructiontype"
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Current</option>
                        <option value="2">Previous</option>
                      </select>
                    </div>
                    <div className=" w-60 md:w-1/5 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="dwellingtype"
                        className=" text-lg font-medium "
                      >
                        Dwelling Type
                      </label>
                      <select
                        id="dwellingtype"
                        name="dwellingtype"
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Current</option>
                        <option value="2">Previous</option>
                      </select>
                    </div>{" "}
                    <div className=" w-60 md:w-1/5 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="dwellingstyle"
                        className=" text-lg font-medium "
                      >
                        Dwelling Style
                      </label>
                      <select
                        id="dwellingstyle"
                        name="dwellingstyle"
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Current</option>
                        <option value="2">Previous</option>
                      </select>
                    </div>
                    <div className=" w-60 md:w-1/5  flex flex-col text-[14px] py-5">
                      <label htmlFor="tenure" className=" text-lg font-medium ">
                        Tenure
                      </label>
                      <select
                        id="tenure"
                        name="tenure"
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Current</option>
                        <option value="2">Previous</option>
                      </select>
                    </div>
                    <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="livingspacesize"
                        className=" text-lg font-medium "
                      >
                        Living Space
                      </label>
                      <input
                        type="number"
                        id="livingspacesize"
                        name="livingspacesize"
                        className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <p className="text-xs">Size</p>
                    </div>
                    <div className=" w-60 md:w-1/12 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="livingspacesizeunit"
                        className=" text-lg font-medium "
                      ></label>
                      <select
                        type="number"
                        id="livingspacesizeunit"
                        name="livingspacesizeunit"
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="1">Square Ft</option>
                        <option value="2">Square M</option>
                      </select>
                      <p className="text-xs">Size</p>
                    </div>
                    <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="lotsize"
                        className=" text-lg font-medium "
                      >
                        Lot Size
                      </label>
                      <input
                        type="number"
                        id="lotsize"
                        name="lotsize"
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <p className="text-xs">Size</p>
                    </div>
                    <div className=" w-60 md:w-1/12 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="lotsizeunit"
                        className=" text-lg font-medium "
                      ></label>
                      <select
                        type="number"
                        id="lotsizeunit"
                        name="lotsizeunit"
                        className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="1">Square Ft</option>
                        <option value="2">Square M</option>
                      </select>
                      <p className="text-xs">Unit</p>
                    </div>
                    <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="ageinyears"
                        className=" text-lg font-medium "
                      >
                        Age in Years
                      </label>
                      <input
                        defaultValue="0"
                        type="number"
                        id="ageinyears"
                        name="ageinyears"
                        className="h-12 mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <p className="text-xs">
                        Ex. If a property is 3 years old, enter 3.
                      </p>
                    </div>
                  </div>
                  <div className="items-center">
                    <div className="text-black font-black py-4">
                      <h4 className=" border-b-2">Property Address</h4>
                    </div>
                    <div className=" w-100 items-center  text-[14px] py-5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500  h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="ageinyears"
                        className=" px-1 text-lg font-medium "
                      >
                        Same as the Primary applicant's current address.
                      </label>
                    </div>
                    <div className=" w-100 items-center  text-[14px] py-5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500  h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="ageinyears"
                        className=" px-1 text-lg font-medium "
                      >
                        This is my principal residence.
                      </label>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center	">
                      <div className=" w-60 md:w-2/12 flex flex-col text-[14px] ">
                        <label
                          htmlFor="streetnumber"
                          className=" text-lg font-medium "
                        >
                          Street Number
                        </label>
                        <input
                          id="streetnumber"
                          name="streetnumber"
                          className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="text"
                        />
                      </div>
                      <div className=" w-60 md:w-5/12 flex flex-col text-[14px] ">
                        <label
                          htmlFor="pstreetname"
                          className=" text-lg font-medium "
                        >
                          Street Name
                        </label>
                        <input
                          id="pstreetname"
                          name="pstreetname"
                          className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="text"
                        />
                      </div>
                      <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                        <label
                          htmlFor="streettype"
                          className=" text-lg font-medium "
                        >
                          Street Type
                        </label>
                        <select
                          id="streettype"
                          name="streettype"
                          className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Please Select</option>
                          <option value="0">Current</option>
                          <option value="2">Previous</option>
                        </select>

                        <ErrorMessage name="streettype" />
                      </div>
                      <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                        <label
                          htmlFor="streettype"
                          className=" text-lg font-medium "
                        >
                          Street Direction
                        </label>
                        <select
                          id="streettype"
                          name="streettype"
                          className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Please Select</option>
                          <option value="0">Current</option>
                          <option value="2">Previous</option>
                        </select>
                      </div>
                      <div className=" w-60 md:w-1/5 flex flex-col text-[14px] ">
                        <label htmlFor="unit" className=" text-lg font-medium ">
                          Unit
                        </label>
                        <input
                          id="unit"
                          name="unit"
                          className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="text"
                        />
                      </div>
                      <div className=" w-60 md:w-1/5 flex flex-col text-[14px] ">
                        <label htmlFor="unit" className=" text-lg font-medium ">
                          City/Town
                        </label>
                        <input
                          id="unit"
                          name="unit"
                          className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="text"
                        />
                      </div>
                      <div className=" w-60 md:w-1/5 flex flex-col text-[14px] ">
                        <label
                          htmlFor="province"
                          className=" text-lg font-medium "
                        >
                          Province
                        </label>
                        <select
                          id="province"
                          name="province"
                          className="h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Please Select</option>
                          <option value="0">Current</option>
                          <option value="2">Previous</option>
                        </select>
                      </div>
                      <div className=" w-60 md:w-1/5 flex flex-col text-[14px] ">
                        <label
                          htmlFor="postalcode"
                          className=" text-lg font-medium "
                        >
                          Postal Code
                        </label>
                        <input
                          id="postalcode"
                          name="postalcode"
                          className=" h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="text"
                          placeholder="EX:A2B-3A5"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-black font-black py-4">
                      <h4 className=" border-b-2">Expense Details</h4>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center	">
                      <div className=" w-60 md:w-1/8 flex flex-col text-[14px] ">
                        <label
                          htmlFor="taxyear"
                          className=" text-lg font-medium "
                        >
                          Tax Year
                        </label>
                        <input
                          id="taxyear"
                          name="taxyear"
                          className=" h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="number"
                        />
                      </div>
                      <div className="w-60 md:w-1/8 flex flex-col text-[14px] ">
                        <label
                          htmlFor="propertyAnntax"
                          className=" text-lg font-medium "
                        >
                          Property Annual Tax
                        </label>
                        <div className="mt-1 h-12  flex rounded-md shadow-sm">
                          <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            $
                          </span>
                          <Field
                            defaultValue={0}
                            type="number"
                            name="downpaymentamount"
                            className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <ErrorMessage name="propertyAnntax" />
                      </div>
                      <div className="w-60 md:w-1/8 flex flex-col text-[14px] ">
                        <label
                          htmlFor="totalcondofee"
                          className=" text-lg font-medium "
                        >
                          Total Condo Fees/month
                        </label>
                        <div className="mt-1 h-12  flex rounded-md shadow-sm">
                          <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            $
                          </span>
                          <Field
                            defaultValue={0}
                            type="number"
                            name="downpaymentamount"
                            className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <ErrorMessage name="totalcondofee" />
                      </div>
                      <div className=" w-60 md:w-1/8 flex flex-col text-[14px] ">
                        <label
                          htmlFor="condofees"
                          className=" text-lg font-medium "
                        >
                          Condo fees include heat
                        </label>
                        <select
                          id="condofees"
                          name="condofees"
                          className=" h-12  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Please Select</option>
                          <option value="0">Current</option>
                          <option value="2">Previous</option>
                        </select>
                        <ErrorMessage name="condofees" />
                      </div>
                      <div className="w-60 md:w-1/8 flex flex-col text-[14px] ">
                        <label
                          htmlFor="heatingfees"
                          className=" text-lg font-medium "
                        >
                          Heating Fees/month
                        </label>
                        <div className="mt-1 h-12  flex rounded-md shadow-sm">
                          <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            $
                          </span>
                          <Field
                            defaultValue={0}
                            type="number"
                            name="downpaymentamount"
                            className=" w-60 mt-1 py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <ErrorMessage name="heatingfees" />
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-600  font-black text-xl md:text-4xl py-3 px-2 border-b-2 ">
                    Acknowledgement and Agreement
                  </p>
                  <div className="mb-3 w-100vw">
                    <label
                      htmlFor="otheraddress"
                      className="form-label text-lg py-2  mb-2 text-gray-700"
                    >
                      Note to your Mortgage Advisor
                    </label>
                    <textarea
                      id="otheraddress"
                      className="otheraddress"
                      className="form-control border block px-3 w-full py-1.5"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="bg-blue-500 text-white border-2 rounded-md px-3 py-3">
                    <div className=" font-black py-4">
                      <h4 className=" border-b-2">Primary Applicant</h4>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="w-100 md:w-8/12">
                        <Modal />

                        <div className=" w-100 items-center  text-[14px] py-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="focus:ring-indigo-500  h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="ageinyears"
                            className=" px-1 text-sm md:text-lg font-medium "
                          >
                            I have read, understood and herby agree and consent
                            to the terms and conditions of this application. *
                            Please check this box if you want to proceed.
                          </label>
                          <ErrorMessage name="ageinyears" />
                        </div>
                        <div className=" w-100 items-center  text-[14px] py-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="focus:ring-indigo-500  h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="ageinyears"
                            className=" px-1 text-sm md:text-lg font-medium "
                          >
                            I hereby agree to receive electronic messages
                            containing information, updates and commercial
                            offers, related to this transaction. I understand my
                            consent can be withdrawn at any time.
                          </label>
                          <ErrorMessage name="ageinyears" />
                        </div>
                      </div>
                      <div className="w-60 md:w-2/12 flex flex-col">
                        <label
                          htmlFor="msllistingno"
                          className=" text-lg font-medium "
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          className="
                      h-12  min-w-full	 mt-1   py-2 px-3 border border-gray-300 bg-white text-black rounded-md"
                          placeholder="MM/DD/YYYY"
                        />
                        <p>Ex:MM/DD/YYYY</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pb-4 mb-4 justify-center border-2 py-2 px-3">
              <button
                type="submit"
                className="flex bg-blue-400 text-lg px-3 py-2 text-white justify-center md:justify-end pt-2"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Home;
