import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const ApplicationForm = ({ color = "blue" }) => {
  const [openPropertyTab, setopenPropertyTab] = React.useState(1);
  return (
    <div className="container-sm">
      <div className=" m-4">
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
          <Form className=" md:px-5 px-3 pb-3  shadow-lg">
            <div className="md:px-5 px-3 pb-3">
              <div className="text-black font-black py-4">
                <h4 className=" border-b-2">Properties</h4>
              </div>
              <div className="flex flex-col md:flex-wrap md:flex-row justify-between items-center	py-3	">
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="employmenttype"
                    className=" text-lg font-medium "
                  >
                    Occupancy
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

                  <ErrorMessage name="employmenttype" />
                </div>
                <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="purchasedate"
                    className=" text-lg font-medium"
                  >
                    Purchase Date
                  </label>
                  <input
                    id="purchasedate"
                    name="purchasedate"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="date"
                  />

                  <ErrorMessage name="purchasedate" />
                </div>
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="lastname" className=" text-lg font-medium ">
                    Purchase Price
                  </label>
                  <input
                    id="purchasedate"
                    name="purchasedate"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />
                  <ErrorMessage name="employmentstatus" />
                </div>
                <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                  <label htmlFor="jobtile" className=" text-lg font-medium">
                    Current Price
                  </label>
                  <input
                    id="jobtile"
                    name="jobtile"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="jobtile" />
                </div>
                <div className="w-60 md:w-2/12   flex flex-col text-[14px] py-5">
                  <label htmlFor="jobtile" className=" text-lg font-medium">
                    Rental Income/month
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
                    <h4 className=" border-b-2">Property Address</h4>
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
                            (openPropertyTab === 1
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setopenPropertyTab(1);
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
                            (openPropertyTab === 2
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setopenPropertyTab(2);
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
                            (openPropertyTab === 3
                              ? "text-white bg-" + color + "-600"
                              : "text-" + color + "-600 bg-white")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setopenPropertyTab(3);
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
                            className={
                              openPropertyTab === 1 ? "block" : "hidden"
                            }
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
                            className={
                              openPropertyTab === 2 ? "block" : "hidden"
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
                            className={
                              openPropertyTab === 3 ? "block" : "hidden"
                            }
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
                    <div className=" w-60 md:w-2.8/12 lg:w-60 flex flex-col text-[14px] ">
                      <label
                        htmlFor="monthlyrentpayment"
                        className=" text-lg font-medium "
                      >
                        Property Annual Tax
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
                    <div className=" w-60 md:w-2.8/12 lg:w-60 flex flex-col text-[14px] ">
                      <label
                        htmlFor="monthlyrentpayment"
                        className=" text-lg font-medium "
                      >
                        Total Condo Fees/month
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
                    <div className=" w-60 md:w-2.8/12 lg:w-60 flex flex-col text-[14px] ">
                      <label
                        htmlFor="monthlyrentpayment"
                        className=" text-lg font-medium "
                      >
                        Condo fees include heat
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
                    </div>{" "}
                    <div className=" w-60 md:w-2.8/12 lg:w-60 flex flex-col text-[14px] ">
                      <label
                        htmlFor="monthlyrentpayment"
                        className=" text-lg font-medium "
                      >
                        Heating Fees/month
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
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ApplicationForm;
