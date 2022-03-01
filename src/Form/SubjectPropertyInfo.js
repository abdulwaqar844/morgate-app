import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "./../Modal";
const SubjectPropertyInfo = () => {
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
          <Form className=" md:px-5 px-3 pb-3">
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
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  <div className=" mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      $
                    </span>
                    <input
                      type="text"
                      name="purchaseprice"
                      id="purchaseprice"
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="www.example.com"
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
                  <div className=" mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      $
                    </span>
                    <input
                      type="text"
                      name="currentpropertyvalue"
                      id="currentpropertyvalue"
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="www.example.com"
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
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="1">Square Ft</option>
                    <option value="2">Square M</option>
                  </select>
                  <p className="text-xs">Size</p>
                </div>
                <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="lotsize" className=" text-lg font-medium ">
                    Lot Size
                  </label>
                  <input
                    type="number"
                    id="lotsize"
                    name="lotsize"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="1">Square Ft</option>
                    <option value="2">Square M</option>
                  </select>
                  <p className="text-xs">Unit</p>
                </div>
                <div className=" w-60 md:w-3/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="ageinyears" className=" text-lg font-medium ">
                    Age in Years
                  </label>
                  <input
                    defaultValue="0"
                    type="number"
                    id="ageinyears"
                    name="ageinyears"
                    className="mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                    <ErrorMessage name="streetnumber" />
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
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                    <ErrorMessage name="pstreetname" />
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
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Please Select</option>
                      <option value="0">Current</option>
                      <option value="2">Previous</option>
                    </select>

                    <ErrorMessage name="streettype" />
                  </div>
                  <div className=" w-60 md:w-1/5 flex flex-col text-[14px] ">
                    <label htmlFor="unit" className=" text-lg font-medium ">
                      Unit
                    </label>
                    <input
                      id="unit"
                      name="unit"
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                    <ErrorMessage name="unit" />
                  </div>
                  <div className=" w-60 md:w-1/5 flex flex-col text-[14px] ">
                    <label htmlFor="unit" className=" text-lg font-medium ">
                      City/Town
                    </label>
                    <input
                      id="unit"
                      name="unit"
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                    <ErrorMessage name="unit" />
                  </div>
                  <div className=" w-60 md:w-1/5 flex flex-col text-[14px] ">
                    <label htmlFor="province" className=" text-lg font-medium ">
                      Province
                    </label>
                    <select
                      id="province"
                      name="province"
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    <label htmlFor="taxyear" className=" text-lg font-medium ">
                      Tax Year
                    </label>
                    <input
                      id="taxyear"
                      name="taxyear"
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                    />
                    <ErrorMessage name="taxyear" />
                  </div>
                  <div className="w-60 md:w-1/8 flex flex-col text-[14px] ">
                    <label
                      htmlFor="propertyAnntax"
                      className=" text-lg font-medium "
                    >
                      Property Annual Tax
                    </label>
                    <div className="  mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="text"
                        name="propertyAnntax"
                        id="propertyAnntax"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    <div className=" mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="text"
                        name="totalcondofee"
                        id="totalcondofee"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        type="text"
                        name="heatingfees"
                        id="heatingfees"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  for="otheraddress"
                  className="form-label  mb-2 text-gray-700"
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
                  <div className="w-100 md:w-9/12">
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
                        I have read, understood and herby agree and consent to
                        the terms and conditions of this application. * Please
                        check this box if you want to proceed.
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
                        I hereby agree to receive electronic messages containing
                        information, updates and commercial offers, related to
                        this transaction. I understand my consent can be
                        withdrawn at any time.
                      </label>
                      <ErrorMessage name="ageinyears" />
                    </div>
                  </div>
                  <div className="w-100 md:w-2/12 flex flex-col">
                    <label
                      htmlFor="msllistingno"
                      className=" text-lg font-medium "
                    >
                      Date
                    </label>
                    <input type="date" placeholder="MM/DD/YYYY" />
                    <p>Ex:MM/DD/YYYY</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end pt-2">  Submit
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SubjectPropertyInfo;
