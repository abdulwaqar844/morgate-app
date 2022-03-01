import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const ApplicationForm = () => {
  return (
    <div className="container-sm">
      <div className=" m-4">
        <h5 className="text-blue-600 font-black">
          * indicates required field.
        </h5>

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
            <div className="bg-blue-600 border  md:px-5 px-3 pb-3">
              <div className="text-white font-black py-4">
                <h4 className=" border-b-2">
                  <span className="font-light italic text-[18px]">
                    Let's begin by telling me about
                  </span>
                  Your mortgage requirement
                </h4>
              </div>
              <div className="flex flex-col md:flex-row justify-around items-center	py-3	">
                <div className="flex flex-col text-[14px] ">
                  <label
                    htmlFor="ortgage_purpose"
                    className=" text-lg font-medium text-white"
                  >
                    Mortgage Purpose*
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    className="w-60 md:w-50 lg:w-60 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Purchase</option>
                    <option value="2">Refinance</option>
                    <option value="4">Switch</option>{" "}
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
                <div className="flex flex-col text-[14px] ">
                  <label
                    htmlFor="aprox_date"
                    className=" text-lg font-medium text-white"
                  >
                    Approx.Date Funds Required *
                  </label>
                  <input
                    className="w-60 md:w-50 lg:w-60 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="date"
                    placeholder="mm/dd/yyy"
                  />

                  <ErrorMessage name="firstName" />
                </div>
                <div className="flex flex-col text-[14px] ">
                  <label
                    htmlFor="applicant"
                    className=" text-lg font-medium text-white"
                  >
                    Do you have a co-applicant? *
                  </label>
                  <select
                    id="applicant"
                    name="applicant"
                    autoComplete="applicant-name"
                    className=" w-60 md:w-50 lg:w-60 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" defaultValue>
                      Please Select
                    </option>
                    <option value="0">No</option>
                    <option value="1">Yes, I have 1 co-applicant.</option>
                    <option value="2">Yes, I have 2 co-applicants.</option>
                    <option value="3">Yes, I have 3 co-applicants.</option>
                  </select>

                  <ErrorMessage name="firstName" />
                </div>
              </div>
            </div>
            <div className="bg-slate-300 border py-6  px-5 px-3 pb-3	text-black ">
              <div className="font-black py-4">
                <h4 className=" border-b-2">
                  <span className="font-light italic text-[18px]">
                    Please provide
                  </span>
                  Your down payment information
                </h4>
              </div>
              <div className="flex flex-col md:flex-row justify-around items-start		py-3	">
                <div className="w-56 md:w-50 lg:w-60 flex flex-col text-[14px] ">
                  <label
                    htmlFor="ortgage_purpose"
                    className=" text-lg font-medium "
                  >
                    Down payment Source
                  </label>
                  <select
                    id="down_payment"
                    name="down_payment"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Sale of existing property</option>
                    <option value="1">Personal cash</option>
                    <option value="2">RRSP</option>
                    <option value="3">Borrowed against liquid assets</option>
                    <option value="4">Gift</option>
                    <option value="6">Sweat equity</option>
                    <option value="8">Existing equity</option>
                    <option value="10">Secondary financing</option>
                    <option value="11">Grants</option>
                    <option value="7">Other</option>
                  </select>

                  <ErrorMessage name="firstName" />
                </div>{" "}
                <div className=" w-60 md:w-50 lg:w-60 flex flex-col text-[14px] ">
                  <label
                    htmlFor="ortgage_purpose"
                    className=" text-lg font-medium "
                  >
                    Down payment Amount
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      $
                    </span>
                    <input
                      type="number"
                      name="company-website"
                      id="company-website"
                      className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="www.example.com"
                    />
                  </div>

                  <ErrorMessage name="firstName" />
                </div>
                <div className="flex flex-col text-[14px] ">
                  <label
                    htmlFor="ortgage_purpose"
                    className=" text-lg font-medium "
                  >
                    Notes
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    id="notes"
                    name="notes"
                    className=" w-60 md:w-50 lg:w-60 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage name="firstName" />
                  <p className="text-zinc-300	">Ex. 1000.00 without "$" or ",".</p>

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
