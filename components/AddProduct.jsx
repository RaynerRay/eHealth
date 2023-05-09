"use client";

// import product from "@/backend/models/product";
import { useState, useContext, useEffect } from "react";

// import Sidebar from "../layouts/Sidebar";

import AuthContext from "@/context/AuthContext";
import { toast } from "react-toastify";

const NewProduct = () => {
  const {error, addNewProduct, clearErrors} = useContext(AuthContext);

//   const countriesList = Object.values(countries);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [policy, setPolicy] = useState("");
  const [phone, setPhone] = useState("");
  const [membership, setMembership] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      address,
      email,
      phone,
      policy,
      membership,
      age,
    };

    addNewProduct(newProduct);
  };

  return (
    <>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <div
                style={{ maxWidth: "1280px" }}
                className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
              >
                <form onSubmit={submitHandler}>
                  <h2 className="mb-5 text-2xl font-semibold">
                    Add new Claim
                  </h2>

                  <div className="mb-4 grid md:grid-cols-2">
                    <div>
                        <label className="block mb-1"> Full Name </label>
                        <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        placeholder="Type your First Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* <div>
                    <label className="block mb-1"> Last Name </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type your First Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    </div> */}
                  </div>
                 

                  <div className="grid md:grid-cols-2 gap-x-3">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Address </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        placeholder="Type your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Email </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-2">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Policy Number </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        placeholder="Type policy number here"
                        value={policy}
                        onChange={(e) => setPolicy(e.target.value)}
                      />
                    </div>

                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Phone No </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        placeholder="Type phone number here"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-2">
                    <div>
                    <label className="block mb-1"> Membership ID</label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        placeholder="Type membership here"
                        value={membership}
                        onChange={(e) => setMembership(e.target.value)}
                      />
                      </div>
                    <div>
                    <label className="block mb-1"> Age </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        placeholder="Type age here"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                      </div>
                  </div>

                  <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    Add
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
