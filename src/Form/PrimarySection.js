import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const ApplicationForm = ({ color = "blue" }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="container-sm">
      <div className=" m-4">
        <p className="text-blue-600  font-black  text-5xl py-3 px-4 border-b-2 my-2">
          Primary Applicant
        </p>
        <Formik
          initialValues={{ firstName: "" }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(3, "Less then 3 characters")
              .max(15, "Must be 15 characters or less")
              .required("Required"),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              //   handleNext();
            }, 400);
          }}
        >
          <Form className=" md:px-5 px-3 pb-3">
            <div className=" border  md:px-5 px-3 pb-3">
              <div className="text-black font-black py-4">
                <h4 className=" border-b-2">Personal Information</h4>
              </div>
              <div className="flex flex-col md:flex-wrap	 md:flex-row justify-between items-center	py-3	">
                <div className=" w-60 md:w-28 flex flex-col text-[14px] ">
                  <label
                    htmlFor="applicant_title"
                    className=" text-lg font-medium "
                  >
                    Title *
                  </label>
                  <select
                    id="applicant_title"
                    name="applicant_title"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Purchase</option>
                    <option value="2">Refinance</option>
                    <option value="4">Switch</option>{" "}
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
                <div className="w-60 md:w-48 lg:w-64 flex flex-col text-[14px] ">
                  <label htmlFor="first_name" className=" text-lg font-medium">
                    First Name *
                  </label>
                  <input
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="firstName" />
                </div>
                <div className=" w-60 md:w-44 lg:w-72 flex flex-col text-[14px] ">
                  <label htmlFor="lastname" className=" text-lg font-medium ">
                    Last Name *
                  </label>
                  <input
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="lastname" />
                </div>
                <div className="w-60 md:w-40 lg:w-62 flex flex-col text-[14px] ">
                  <label htmlFor="initial" className=" text-lg font-medium ">
                    Initial *
                  </label>
                  <input
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="firstName" />
                </div>
              </div>
              <div className=" flex flex-col md:flex-row flex-wrap justify-between items-center	py-3	">
                <div className="w-60 md:w-40 h-36 justify-around flex flex-col text-[14px] ">
                  <label htmlFor="aprox_date" className=" text-lg font-medium ">
                    Birthday *
                  </label>
                  <div>
                    <input
                      className="w-60 md:w-40  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="date"
                      placeholder="mm/dd/yyy"
                    />

                    <ErrorMessage name="firstName" />
                    <p className="text-xs">
                      Ex: MM/DD/YYY. You must be 18 or older to apply.
                    </p>
                  </div>
                </div>
                <div className="w-60 md:w-40 h-36 justify-around flex flex-col text-[14px] ">
                  <label htmlFor="sin_number" className=" text-lg font-medium ">
                    SIN Number
                  </label>
                  <div>
                    <input
                      className="mt-1 w-60 md:w-40   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                      placeholder="123-456-789"
                    />
                    <ErrorMessage name="sin_number" />{" "}
                    <p className="text-xs">Ex:123-456-789</p>
                  </div>
                </div>
                <div className="w-60  md:w-40 h-36 justify-around  flex flex-col text-[14px] ">
                  <label htmlFor="firstbuyer" className=" text-lg font-medium ">
                    Are you a First Time Home Buyer ?
                  </label>
                  <select
                    id="applicant_title"
                    name="applicant_title"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="0">Yes</option>
                    <option value="1">No</option>
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
                <div className="w-60  md:w-40 h-36 justify-around  flex flex-col text-[14px] ">
                  <label htmlFor="aprox_date" className=" text-lg font-medium ">
                    Martial Status *
                  </label>
                  <select
                    id="martial_status"
                    name="martial_status"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="0">Yes</option>
                    <option value="1">No</option>
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
                <div className=" w-60  md:w-40 h-36 justify-around  flex flex-col text-[14px] ">
                  <label htmlFor="aprox_date" className=" text-lg font-medium ">
                    Credit Rating
                  </label>
                  <select
                    id="martial_status"
                    name="martial_status"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Very Good">Very Good</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
                <div className=" w-60  md:w-40 h-36 justify-around  flex flex-col text-[14px] ">
                  <label htmlFor="aprox_date" className=" text-lg font-medium ">
                    Number Dependency
                  </label>
                  <input
                    type="number"
                    id="numberdepency"
                    name="numberdepency"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                  <ErrorMessage name="firstName" />
                </div>
              </div>
            </div>
            <div className="md:px-5 px-3 pb-3">
              <div className="text-black font-black py-4">
                <h4 className=" border-b-2">Contact Information</h4>
              </div>
              <div className="flex flex-col md:flex-wrap md:flex-row justify-between items-center	py-3	">
                <div className=" w-60 md:w-4/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="email" className=" text-lg font-medium ">
                    Email *
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                  <ErrorMessage name="email" />
                </div>
                <div className="w-60 md:w-4/12   flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="primarynumber"
                    className=" text-lg font-medium"
                  >
                    Primary Phone Number *
                  </label>
                  <input
                    id="primarynumber"
                    name="primarynumber"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="firstName" />
                </div>
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="lastname" className=" text-lg font-medium ">
                    Extention
                  </label>
                  <input
                    className="extenstion"
                    id="extenstion"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="lastname" />
                </div>
                <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="primarynumber"
                    className=" text-lg font-medium"
                  >
                    Work Phone Number
                  </label>
                  <input
                    id="primarynumber"
                    name="primarynumber"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="firstName" />
                </div>
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="lastname" className=" text-lg font-medium ">
                    Extention
                  </label>
                  <input
                    className="extenstion"
                    id="extenstion"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="lastname" />
                </div>
                <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="primarynumber"
                    className=" text-lg font-medium"
                  >
                    Cell Phone Number
                  </label>
                  <input
                    id="primarynumber"
                    name="primarynumber"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="firstName" />
                </div>
                <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5 ">
                  <label
                    htmlFor="primarynumber"
                    className=" text-lg font-medium"
                  >
                    Fax Number
                  </label>
                  <input
                    id="primarynumber"
                    name="primarynumber"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="firstName" />
                </div>
              </div>
            </div>
            <div className="  pb-3">
              <div className="text-black font-black py-4">
                <h4 className=" border-b-2">Current Address</h4>
              </div>

              <div>
                <ul
                  className="flex mb-0 list-none justify-center md:justify-start flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="   text-center">
                    <a
                      className={
                        "text-xs font-bold boder-2 px-1 py-3 shadow-lg rounded  leading-normal " +
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
                        "text-xs border-2 font-bold uppercase px-1 py-3 shadow-lg rounded  leading-normal " +
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
                        "text-xs border-2 font-bold uppercase px-1 py-3 shadow-lg rounded  leading-normal " +
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
                  <div className="px-4 py-5 flex-auto">
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
                            <input
                              type="text"
                              id="streetNo"
                              name="streetNo"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="streetNo" />
                          </div>
                          <div className="w-60 md:w-5/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="streetname"
                              className=" text-lg font-medium"
                            >
                              Street Name
                            </label>
                            <input
                              id="streetname"
                              name="streetname"
                              className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              type="text"
                            />

                            <ErrorMessage name="firstName" />
                          </div>
                          <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="streetType"
                              className=" text-lg font-medium "
                            >
                              Street Type
                            </label>
                            <select
                              id="streetType"
                              name="streetType"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Purchase</option>
                              <option value="2">Refinance</option>
                              <option value="4">Switch</option>{" "}
                            </select>

                            <ErrorMessage name="streetType" />
                          </div>
                          <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="streetDirection"
                              className=" text-lg font-medium "
                            >
                              Street Direction
                            </label>
                            <select
                              id="streetDirection"
                              name="streetDirection"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Purchase</option>
                              <option value="2">Refinance</option>
                              <option value="4">Switch</option>{" "}
                            </select>

                            <ErrorMessage name="streetType" />
                          </div>
                          <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="unit"
                              className=" text-lg font-medium "
                            >
                              Unit
                            </label>
                            <input
                              type="text"
                              id="unit"
                              name="unit"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="unit" />
                          </div>
                          <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="city/town"
                              className=" text-lg font-medium"
                            >
                              City/Town
                            </label>
                            <input
                              id="city/town"
                              name="city/town"
                              className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              type="text"
                            />

                            <ErrorMessage name="city/town" />
                          </div>
                          <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="province"
                              className=" text-lg font-medium "
                            >
                              Province
                            </label>
                            <select
                              id="province"
                              name="province"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Purchase</option>
                              <option value="2">Refinance</option>
                              <option value="4">Switch</option>{" "}
                            </select>

                            <ErrorMessage name="province" />
                          </div>
                          <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="postalcode"
                              className=" text-lg font-medium "
                            >
                              Postal Code
                            </label>
                            <input
                              type="text"
                              placeholder="EX A2B 3A5"
                              id="postalcode"
                              name="postalcode"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="postalcode" />
                          </div>{" "}
                          <div className="w-60 md:w-/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="lengthoftime"
                              className=" text-lg font-medium "
                            >
                              Length of Time at Residence
                            </label>
                            <input
                              type="number"
                              placeholder="0"
                              id="lengthoftimeyears"
                              name="lengthoftimeyears"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="lengthoftimeyears" />
                            <p>Years</p>
                          </div>
                          <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="lengthoftimemonths"
                              className=" text-lg font-medium "
                            >
                              Length of Time at Residence
                            </label>
                            <input
                              type="number"
                              placeholder="0"
                              id="lengthoftimemonths"
                              name="lengthoftimemonths"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="lengthoftime" />
                            <p>Months</p>
                          </div>
                          <div className=" w-60 md:w-3/12 flex flex-col text-[14px] ">
                            <label
                              htmlFor="residentialStatus"
                              className=" text-lg font-medium "
                            >
                              Residential Status
                            </label>
                            <select
                              id="residentialStatus"
                              name="residentialStatus"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Purchase</option>
                              <option value="2">Refinance</option>
                              <option value="4">Switch</option>{" "}
                            </select>

                            <ErrorMessage name="residentialStatus" />
                          </div>
                          <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                            <label
                              htmlFor="monthlyrentpayment"
                              className=" text-lg font-medium "
                            >
                              Monthly Rent Payments
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                $
                              </span>
                              <input
                                type="text"
                                name="monthlyrentpayment"
                                id="monthlyrentpayment"
                                className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="www.example.com"
                              />
                            </div>

                            <ErrorMessage name="monthlyrentpayment" />
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
                            <input
                              type="text"
                              id="usastreetNo"
                              name="usastreetNo"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="usastreetNo" />
                          </div>
                          <div className="w-60 md:w-8/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="usastreetname"
                              className=" text-lg font-medium"
                            >
                              Street Name
                            </label>
                            <input
                              id="usastreetname"
                              name="usastreetname"
                              className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              type="text"
                            />

                            <ErrorMessage name="usastreetname" />
                          </div>
                          <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="usaunit"
                              className=" text-lg font-medium "
                            >
                              Unit
                            </label>
                            <input
                              type="text"
                              id="usaunit"
                              name="usaunit"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="usaunit" />
                          </div>
                          <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="usacity/town"
                              className=" text-lg font-medium"
                            >
                              City/Town
                            </label>
                            <input
                              id="usacity/town"
                              name="usacity/town"
                              className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                            <select
                              id="usastate"
                              name="usastate"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value="">Please Select</option>
                              <option value="0">Purchase</option>
                              <option value="2">Refinance</option>
                              <option value="4">Switch</option>{" "}
                            </select>

                            <ErrorMessage name="usastate" />
                          </div>
                          <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="usazipcode"
                              className=" text-lg font-medium "
                            >
                              Zip Code
                            </label>
                            <input
                              type="text"
                              placeholder="EX A2B 3A5"
                              id="usazipcode"
                              name="usazipcode"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="usazipcode" />
                          </div>{" "}
                          <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="lengthoftime"
                              className=" text-lg font-medium "
                            >
                              Length of Time at Residence
                            </label>
                            <input
                              type="number"
                              placeholder="0"
                              id="lengthoftimeyears"
                              name="lengthoftimeyears"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="lengthoftimeyears" />
                            <p>Years</p>
                          </div>
                          <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                            <label
                              htmlFor="lengthoftimemonths"
                              className=" text-lg font-medium "
                            >
                              Length of Time at Residence
                            </label>
                            <input
                              type="number"
                              placeholder="0"
                              id="lengthoftimemonths"
                              name="lengthoftimemonths"
                              className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />

                            <ErrorMessage name="lengthoftime" />
                            <p>Months</p>
                          </div>
                          <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                            <label
                              htmlFor="monthlyrentpayment"
                              className=" text-lg font-medium "
                            >
                              Monthly Rent Payments
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                $
                              </span>
                              <input
                                type="text"
                                name="monthlyrentpayment"
                                id="monthlyrentpayment"
                                className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <ErrorMessage name="monthlyrentpayment" />
                          </div>
                        </div>
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="otheraddress"
                      >
                        <div className="mb-3 " style={{ width: "82rem" }}>
                          <label
                            for="otheraddress"
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
            <div className="md:px-5 px-3 pb-3">
              <div className="text-black font-black py-4">
                <h4 className=" border-b-2">Employer</h4>
              </div>
              <div className="flex flex-col md:flex-wrap md:flex-row justify-between items-center	py-3	">
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="employmenttype"
                    className=" text-lg font-medium "
                  >
                    Employment Status
                  </label>
                  <select
                    id="employmenttype"
                    name="employmenttype"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Current</option>
                    <option value="2">Previous</option>
                  </select>

                </div>
                <div className="w-60 md:w-5/12   flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="nameofemployer"
                    className=" text-lg font-medium"
                  >
                    Name of Employer
                  </label>
                  <input
                    id="nameofemployer"
                    name="nameofemployer"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="nameofemployer" />
                </div>
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="lastname" className=" text-lg font-medium ">
                    Employment Type{" "}
                  </label>
                  <select
                    id="employmentstatus"
                    name="employmentstatus"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Current</option>
                    <option value="2">Previous</option>
                  </select>

                  <ErrorMessage name="employmentstatus" />
                </div>
                <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                  <label htmlFor="jobtile" className=" text-lg font-medium">
                    Job Title
                  </label>
                  <input
                    id="jobtile"
                    name="jobtile"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="jobtile" />
                </div>

                <div className="   md:px-5 px-3 pb-3">
                  <div className="text-black font-black py-4">
                    <h4 className=" border-b-2">Employer Address</h4>
                  </div>

                  <div>
                    <ul
                      className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
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
                    <div className="relative flex flex-col  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                      <div className="px-4 py-5 flex-auto">
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
                                <input
                                  type="text"
                                  id="streetNo"
                                  name="streetNo"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="streetNo" />
                              </div>
                              <div className="w-60 md:w-5/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="streetname"
                                  className=" text-lg font-medium"
                                >
                                  Street Name
                                </label>
                                <input
                                  id="streetname"
                                  name="streetname"
                                  className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  type="text"
                                />

                                <ErrorMessage name="firstName" />
                              </div>
                              <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="streetType"
                                  className=" text-lg font-medium "
                                >
                                  Street Type
                                </label>
                                <select
                                  id="streetType"
                                  name="streetType"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </select>

                                <ErrorMessage name="streetType" />
                              </div>
                              <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="streetDirection"
                                  className=" text-lg font-medium "
                                >
                                  Street Direction
                                </label>
                                <select
                                  id="streetDirection"
                                  name="streetDirection"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </select>

                                <ErrorMessage name="streetType" />
                              </div>
                              <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="unit"
                                  className=" text-lg font-medium "
                                >
                                  Unit
                                </label>
                                <input
                                  type="text"
                                  id="unit"
                                  name="unit"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="unit" />
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="city/town"
                                  className=" text-lg font-medium"
                                >
                                  City/Town
                                </label>
                                <input
                                  id="city/town"
                                  name="city/town"
                                  className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  type="text"
                                />

                                <ErrorMessage name="city/town" />
                              </div>
                              <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="province"
                                  className=" text-lg font-medium "
                                >
                                  Province
                                </label>
                                <select
                                  id="province"
                                  name="province"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </select>

                                <ErrorMessage name="province" />
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="postalcode"
                                  className=" text-lg font-medium "
                                >
                                  Postal Code
                                </label>
                                <input
                                  type="text"
                                  placeholder="EX A2B 3A5"
                                  id="postalcode"
                                  name="postalcode"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="postalcode" />
                              </div>
                              <div className="w-60 md:w-/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="lengthoftime"
                                  className=" text-lg font-medium "
                                >
                                  Length of Time at Residence
                                </label>
                                <input
                                  type="number"
                                  placeholder="0"
                                  id="lengthoftimeyears"
                                  name="lengthoftimeyears"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="lengthoftimeyears" />
                                <p>Years</p>
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="lengthoftimemonths"
                                  className=" text-lg font-medium "
                                >
                                  Length of Time at Residence
                                </label>
                                <input
                                  type="number"
                                  placeholder="0"
                                  id="lengthoftimemonths"
                                  name="lengthoftimemonths"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="lengthoftime" />
                                <p>Months</p>
                              </div>
                              <div className=" w-60 md:w-3/12 flex flex-col text-[14px] ">
                                <label
                                  htmlFor="residentialStatus"
                                  className=" text-lg font-medium "
                                >
                                  Residential Status
                                </label>
                                <select
                                  id="residentialStatus"
                                  name="residentialStatus"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </select>

                                <ErrorMessage name="residentialStatus" />
                              </div>
                              <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                                <label
                                  htmlFor="monthlyrentpayment"
                                  className=" text-lg font-medium "
                                >
                                  Monthly Rent Payments
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <input
                                    type="text"
                                    name="monthlyrentpayment"
                                    id="monthlyrentpayment"
                                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="www.example.com"
                                  />
                                </div>

                                <ErrorMessage name="monthlyrentpayment" />
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
                                <input
                                  type="text"
                                  id="usastreetNo"
                                  name="usastreetNo"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="usastreetNo" />
                              </div>
                              <div className="w-60 md:w-8/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usastreetname"
                                  className=" text-lg font-medium"
                                >
                                  Street Name
                                </label>
                                <input
                                  id="usastreetname"
                                  name="usastreetname"
                                  className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  type="text"
                                />

                                <ErrorMessage name="usastreetname" />
                              </div>
                              <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usaunit"
                                  className=" text-lg font-medium "
                                >
                                  Unit
                                </label>
                                <input
                                  type="text"
                                  id="usaunit"
                                  name="usaunit"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="usaunit" />
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usacity/town"
                                  className=" text-lg font-medium"
                                >
                                  City/Town
                                </label>
                                <input
                                  id="usacity/town"
                                  name="usacity/town"
                                  className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                <select
                                  id="usastate"
                                  name="usastate"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                  <option value="">Please Select</option>
                                  <option value="0">Purchase</option>
                                  <option value="2">Refinance</option>
                                  <option value="4">Switch</option>{" "}
                                </select>

                                <ErrorMessage name="usastate" />
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="usazipcode"
                                  className=" text-lg font-medium "
                                >
                                  Zip Code
                                </label>
                                <input
                                  type="text"
                                  placeholder="EX A2B 3A5"
                                  id="usazipcode"
                                  name="usazipcode"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="usazipcode" />
                              </div>{" "}
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="lengthoftime"
                                  className=" text-lg font-medium "
                                >
                                  Length of Time at Residence
                                </label>
                                <input
                                  type="number"
                                  placeholder="0"
                                  id="lengthoftimeyears"
                                  name="lengthoftimeyears"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="lengthoftimeyears" />
                                <p>Years</p>
                              </div>
                              <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                                <label
                                  htmlFor="lengthoftimemonths"
                                  className=" text-lg font-medium "
                                >
                                  Length of Time at Residence
                                </label>
                                <input
                                  type="number"
                                  placeholder="0"
                                  id="lengthoftimemonths"
                                  name="lengthoftimemonths"
                                  className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />

                                <ErrorMessage name="lengthoftime" />
                                <p>Months</p>
                              </div>
                              <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                                <label
                                  htmlFor="monthlyrentpayment"
                                  className=" text-lg font-medium "
                                >
                                  Monthly Rent Payments
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <input
                                    type="text"
                                    name="monthlyrentpayment"
                                    id="monthlyrentpayment"
                                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  />
                                </div>

                                <ErrorMessage name="monthlyrentpayment" />
                              </div>
                            </div>
                          </div>
                          <div
                            className={openTab === 3 ? "block" : "hidden"}
                            id="otheraddress"
                          >
                            <div className="mb-3 " style={{ width: "82rem" }}>
                              <label
                                for="otheraddress"
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
                  <div className="flex flex-col md:flex-row md:flex-wrap items-baseline justify-between">
                    <div className=" w-60 md:w-2.8/12 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="occupationtype"
                        className=" text-lg font-medium "
                      >
                        Occupation Type
                      </label>
                      <select
                        id="typeofincome"
                        name="typeofincome"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Purchase</option>
                        <option value="1">Refinance</option>
                        <option value="2">Switch</option>{" "}
                      </select>
                      <ErrorMessage name="occupationtype" />
                    </div>
                    <div className="w-60 md:w-2.8/12   flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="industrysection"
                        className=" text-lg font-medium"
                      >
                        Industry Sector
                      </label>
                      <select
                        id="typeofincome"
                        name="typeofincome"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Purchase</option>
                        <option value="2">Refinance</option>
                        <option value="4">Switch</option>{" "}
                      </select>

                      <ErrorMessage name="industrysection" />
                    </div>
                    <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="typeofincome"
                        className=" text-lg font-medium "
                      >
                        Type of Income
                      </label>
                      <select
                        id="typeofincome"
                        name="typeofincome"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Please Select</option>
                        <option value="0">Purchase</option>
                        <option value="2">Refinance</option>
                        <option value="4">Switch</option>{" "}
                      </select>

                      <ErrorMessage name="typeofincome" />
                    </div>
                    <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
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
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage name="annualincome" />
                    </div>
                    <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="lengthofemployment"
                        className=" text-lg font-medium "
                      >
                        Length of Employment
                      </label>
                      <input
                        type="number"
                        id="lengthofemployment"
                        name="lengthofemployment"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage name="lengthofemployment" />
                      <p>Years</p>
                    </div>
                    <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="lengthofemployment"
                        className=" text-lg font-medium "
                      ></label>
                      <input
                        type="number"
                        id="lengthofemployment"
                        name="lengthofemployment"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage name="lengthofemployment" />
                      <p>Month</p>
                    </div>{" "}
                    <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="lengthofemployment"
                        className=" text-lg font-medium "
                      >
                        Years in Line of Business
                      </label>
                      <input
                        type="number"
                        id="lengthofemployment"
                        name="lengthofemployment"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage name="lengthofemployment" />
                      <p>Years</p>
                    </div>
                    <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                      <label
                        htmlFor="lengthofemployment"
                        className=" text-lg font-medium "
                      ></label>
                      <input
                        type="number"
                        id="lengthofemployment"
                        name="lengthofemployment"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <ErrorMessage name="lengthofemployment" />
                      <p>Month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:px-5 px-3 pb-3">
              <div className="text-black font-black py-4">
                <h4 className=" border-b-2">Other Income</h4>
              </div>
              <div className="flex flex-col md:flex-wrap md:flex-row justify-between items-center	py-3	">
                <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="incomesource"
                    className=" text-lg font-medium "
                  >
                    Other Income Source
                  </label>
                  <select
                    id="incomesource"
                    name="incomesource"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Current</option>
                    <option value="2">Previous</option>
                  </select>

                  <ErrorMessage name="incomesource" />
                </div>
                <div className="w-60 md:w-3/12   flex flex-col text-[14px] py-5">
                  <label htmlFor="description" className=" text-lg font-medium">
                    Description
                  </label>
                  <input
                    id="nameofemployer"
                    name="nameofemployer"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="nameofemployer" />
                </div>
                <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="lastname" className=" text-lg font-medium ">
                    Period
                  </label>
                  <select
                    id="employmentstatus"
                    name="employmentstatus"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Current</option>
                    <option value="2">Previous</option>
                  </select>

                  <ErrorMessage name="employmentstatus" />
                </div>
                <div className=" w-60 md:w-3/12 lg:w-60 flex flex-col text-[14px] ">
                  <label
                    htmlFor="monthlyrentpayment"
                    className=" text-lg font-medium "
                  >
                    Amount
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      $
                    </span>
                    <input
                      type="text"
                      name="monthlyrentpayment"
                      id="monthlyrentpayment"
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="www.example.com"
                    />
                  </div>

                  <ErrorMessage name="monthlyrentpayment" />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default ApplicationForm;
