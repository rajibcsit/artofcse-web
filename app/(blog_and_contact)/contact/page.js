"use client";
import callSvg from "@/public/images/svg/call.svg";
import mailSvg from "@/public/images/svg/mail1.svg";
import mapSvg from "@/public/images/svg/map.svg";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const [errors, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}contact`, { name, email, phone, message, website })
      .then((response) => {
        setSuccess(response.data.message);
      })
      .catch((error) => {
        setError(error.response.data.errors);
      });
  };

  return (
    <div>
      <>
        <div className="breadcrumbs section-padding bg-[url('../public/images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
          <div className="container text-center header-section">
            <h2>Contact Us</h2>
            <nav>
              <ol className="flex items-center justify-center space-x-3">
                <li className="breadcrumb-item">
                  <Link href="#">Pages</Link>
                </li>
                <li className="breadcrumb-item">-</li>
                <li className="text-primary">Contact</li>
              </ol>
            </nav>
          </div>
        </div>

        {/*---------------main contact area-------------*/}
        <div className="nav-tab-wrapper tabs pt-10 pb-10">
          <div className="container">
            <div className="grid grid-cols-12 gap-[30px] content-margin">
              <div className="xl:col-span-5 lg:col-span-6 col-span-12">
                <div className="mini-title">Contact Us</div>
                <h4 className="column-title">
                  Get In Touch
                  <span className="shape-bg"> Today</span>
                </h4>
                <ul className="list-item space-y-6 pt-2">
                  <li className="flex">
                    <div className="flex-none mr-6">
                      <div className="">
                        <Image src={mailSvg} alt="Mail" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="lg:text-xl text-lg mb-1">Email-Us :</h4>
                      <div>artofcse@gmail.com</div>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-none mr-6">
                      <div className="">
                        <Image src={callSvg} alt="Call" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="lg:text-xl text-lg mb-1">Call Us:</h4>
                      <div>+8801914-682468</div>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-none mr-6">
                      <div className="">
                        <Image src={mapSvg} alt="Address" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="lg:text-xl text-lg mb-1">Office :</h4>
                      <div>H# 469, R# 07, Avenue# 6, Mirpur - DOHS, Dhaka - 1216</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="xl:col-span-7 lg:col-span-6 col-span-12">
                <form onSubmit={formSubmit}>
                  <div className="bg-white shadow-box7 p-8 rounded-md">
                    <div className="md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                          className="from-control"
                          placeholder="Name*"
                        />

                        {errors?.name && <p style={{ color: "red" }}>{errors.name[0]}</p>}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="from-control"
                          placeholder="Email*"
                        />

                        {errors?.email && <p style={{ color: "red" }}>{errors.email[0]}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          className="from-control"
                          placeholder="Phone No *"
                        />

                        {errors?.phone && <p style={{ color: "red" }}>{errors.phone[0]}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="website"
                          onChange={(e) => setWebsite(e.target.value)}
                          className="from-control"
                          placeholder="Website Address"
                        />
                      </div>
                      <div className="md:col-span-2 col-span-1">
                        <textarea
                          name="message"
                          onChange={(e) => setMessage(e.target.value)}
                          className="from-control"
                          placeholder="Your Message*"
                          rows="5"
                        ></textarea>
                        {errors?.message && <p style={{ color: "red" }}>{errors.message[0]}</p>}
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-[30px]">
                      Send Message
                    </button>
                  </div>
                </form>
                {/* Display success or error messages */}
                {success && <p style={{ color: "green" }}>{success}</p>}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Contact;
