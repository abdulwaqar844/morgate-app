import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import jsPDF from "jspdf";
import emailjs, { init } from "@emailjs/browser";
export const Email = () => {
  init("user_aVMjgLam4rroy8ETgabF9");
  const [formData, setformData] = useState({
    mortgagepurpose: "",
    aproxdate: "",
    applicantno: "",
  });
  console.log(formData);
  const { mortgagepurpose, aproxDate, applicantNo } = formData;
  const form = useRef();
  const HandleChange = (e) => {
    const name = e.target.name;
    setformData((preState) => ({
      ...preState,
      [name]: e.target.value,
    }));
  };
  return (
    <div className="container-sm">
      <div className=" m-4">
        <h5 className="text-blue-600 font-black">
          * indicates required field.
        </h5>

        <Formik
          initialValues={{
            mortgagepurpose: "",
            aproxdate: "",
            applicantNo: "",
          }}
          validationSchema={Yup.object({
            mortgagepurpose: Yup.string().required(
              "Please select an item in the list."
            ),
            aproxdate: Yup.date().required("Please fill out this field."),
            applicantno: Yup.string().required(
              "Please select an item in the list."
            ),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              const doc = new jsPDF("p", "px");
              doc.text(`Mortgate Purpose :${mortgagepurpose}`, 14, 14);
              doc.save();
              console.log(JSON.stringify(values, null, 2));
              //   handleNext();
            }, 400);
          }}
        >
          <Form className=" md:px-5 px-3 pb-3">
            <>
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
                  <div className="w-60 md:w-3/12 flex flex-col text-[14px] ">
                    <label
                      htmlFor="ortgage_purpose"
                      className=" text-lg font-medium text-white"
                    >
                      Mortgage Purpose*
                    </label>
                    <Field
                      value={formData.mortgagepurpose}
                      as="select"
                      id="mortgagepurpose"
                      name="mortgagepurpose"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={HandleChange}
                    >
                      <option value="" defaultValue>
                        Please Select
                      </option>
                      <option value="Purchase">Purchase</option>
                      <option value="Refinance">Refinance</option>
                      <option value="Switch">Switch</option>
                    </Field>

                    {/* <ErrorMessage name="mortgagepurpose" /> */}
                    <ErrorMessage name="mortgagepurpose">
                      {(msg) => (
                        <div className="max-w-max	 m-2 bg-red-400	 text-white text-md rounded-md px-2">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="w-60 md:w-3/12 flex flex-col text-[14px] ">
                    <label
                      htmlFor="aproxdate"
                      className=" text-lg font-medium text-white"
                    >
                      Approx.Date Funds Required *
                    </label>
                    <Field
                      value={formData.aproxdate}
                      name="aproxdate"
                      onChange={HandleChange}
                      type="date"
                      className="
                      h-12  min-w-full	 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />

                    {/* <ErrorMessage name="aproxdate" /> */}
                    <ErrorMessage name="aproxdate">
                      {(msg) => (
                        <div className="max-w-max	 m-2 bg-red-400	 text-white text-md rounded-md px-2">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className=" w-60 md:w-3/12 flex flex-col text-[14px] ">
                    <label
                      htmlFor="applicantno"
                      className=" text-lg font-medium text-white"
                    >
                      Do you have a co-applicant? *
                    </label>

                    <Field
                      value={formData.applicantno}
                      as="select"
                      id="applicantno"
                      name="applicantno"
                      className="h-12 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={HandleChange}
                    >
                      <option value="">Please Select</option>
                      <option value="0">No</option>
                      <option value="1">Yes, I have 1 co-applicant.</option>
                      <option value="2">Yes, I have 2 co-applicants.</option>
                      <option value="3">Yes, I have 3 co-applicants.</option>
                    </Field>

                    {/* <ErrorMessage name="applicantno" /> */}
                    <ErrorMessage name="applicantno">
                      {(msg) => (
                        <div className="max-w-max	 m-2 bg-red-400	 text-white text-md rounded-md px-2">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
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
                      htmlFor="downPayment"
                      className=" text-lg font-medium "
                    >
                      Down payment Source
                    </label>
                    <select
                      id="downPayment"
                      name="downPayment"
                      className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Please Select</option>
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
                  </div>{" "}
                  <div className=" w-60 md:w-50 lg:w-60 flex flex-col text-[14px] ">
                    <label
                      htmlFor="downPaymentAmount"
                      className=" text-lg font-medium "
                    >
                      Down payment Amount
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center mt-1   py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        max="999999999999"
                        step="0.01"
                        placeholder="0.00"
                        type="number"
                        name="downPaymentAmount"
                        id="downPaymentAmount"
                        className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-[14px] ">
                    <label
                      htmlFor="paymentNotes"
                      className=" text-lg font-medium "
                    >
                      Notes
                    </label>
                    <input
                      type="text"
                      placeholder="Optional"
                      name="paymentNotes"
                      className=" w-60 md:w-50 lg:w-60 mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <p className="text-zinc-300	">
                      Ex. 1000.00 without "$" or ",".
                    </p>
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
            </>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
