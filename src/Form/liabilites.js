import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Liablities = ({ color = "blue" }) => {
  const [openTab, setOpenTab] = React.useState(1);
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
                <h4 className=" border-b-2">Liablities</h4>
              </div>
              <div className="flex flex-col md:flex-wrap md:flex-row items-baseline justify-between items-center	py-3	">
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label htmlFor="assettype" className=" text-lg font-medium ">
                    Liability Type
                  </label>
                  <select
                    id="assettype"
                    name="assettype"
                    className="  mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="0">Current</option>
                    <option value="2">Previous</option>
                  </select>

                  <ErrorMessage name="assettype" />
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
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />

                  <ErrorMessage name="assetdescript" />
                  <p>Max 80 characters.</p>
                </div>
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="assetamount"
                    className=" text-lg font-medium "
                  >
                    Monthly Payment{" "}
                  </label>
                  <input
                    id="assetamount"
                    name="assetamount"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />
                  <ErrorMessage name="assetamount" />
                  <p>Ex. 1000.00 without "$" or ",".</p>
                </div>{" "}
                <div className=" w-60 md:w-2/12 flex flex-col text-[14px] py-5">
                  <label
                    htmlFor="assetamount"
                    className=" text-lg font-medium "
                  >
                    Amount
                  </label>
                  <input
                    id="assetamount"
                    name="assetamount"
                    className=" mt-1   py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                  />
                  <ErrorMessage name="assetamount" />
                  <p>Ex. 1000.00 without "$" or ",".</p>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Liablities;
