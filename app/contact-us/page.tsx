"use client";
import Footer from "@/components/Footer";
import NavigationMenu from "@/components/NavigationMenu";
import { useForm } from "react-hook-form";

const ContactExpleo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const {
      firstName,
      lastName,
      phone,
      email,
      country,
      company,
      industry,
      reason,
      message,
      updates,
      policy,
    } = data;

    const ToEmail = "harshitha@edvenswatech.com"; // Change to your email

    const body = `
Hello Expleo Team,

I would like to get in touch.

Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Country: ${country}
Company: ${company}
Industry: ${industry}
Reason: ${reason}

Message:
${message}

Updates Consent: ${updates ? "Yes" : "No"}
Policy Accepted: ${policy ? "Yes" : "No"}

Thank you.`;

    const mailTo = `https://mail.google.com/mail/?view=cm&fs=1&to=${ToEmail}&su=Contact%20Request&body=${encodeURIComponent(
      body
    )}`;

    window.open(mailTo, "_blank");
    reset();
  };

  return (
    <>
      <NavigationMenu />
      <div className="bg-[#0B0811] h-[400px] flex items-center pl-20">
        <div className="text-left">
          <p className="text-teal-500 font-semibold tracking-wide">EDVENSWA</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-2">
            Contact us
          </h1>
        </div>
      </div>
      <div className="pt-10 pb-10 max-w-4xl mx-auto px-6 text-center">
        <h4 className="text-teal-600 font-semibold mb-2">Let’s talk</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Like to find out more information on Expleo?
        </h2>
        <p className="text-gray-600 mb-8">
          Please fill in the form below and we will get in touch with you shortly.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <input {...register("firstName", { required: true })} placeholder="First Name*" className="border p-2 w-full" />
            <input {...register("lastName", { required: true })} placeholder="Last Name*" className="border p-2 w-full" />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <input {...register("phone", { required: true })} placeholder="Phone*" className="border p-2 w-full" />
            <input {...register("email", { required: true })} placeholder="Email*" className="border p-2 w-full" />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4">
            <select {...register("country", { required: true })} className="border p-2 w-full text-gray-400">
              <option value="">Country*</option>
              <option value="">↓ Country*</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Belgium</option>
              <option>Canada</option>
              <option>China</option>
              <option>Egypt</option>
              <option>France</option>
              <option>Germany</option>
              <option>India</option>
              <option>Ireland</option>
              <option>Italy</option>
              <option>Malaysia</option>
              <option>Mexico</option>
              <option>Morocco</option>
              <option>Netherlands</option>
              <option>Norway</option>
              <option>Portugal</option>
              <option>Romania</option>
              <option>Singapore</option>
              <option>South Africa</option>
              <option>Spain</option>
              <option>Sweden</option>
              <option>Switzerland</option>
              <option>United Kingdom</option>
              <option>USA</option>
              <option>Other</option>
            </select>
            <input {...register("company", { required: true })} placeholder="Company*" className="border p-2 w-full" />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-2 gap-4">
            <select {...register("industry", { required: true })} className="border p-2 w-full text-gray-400">
              <option value="">Industry*</option>
              <option value="">↓ Industry*</option>
              <option value="Aerospace">Aerospace</option>
              <option value="Automotive">Automotive</option>
              <option value="Banking & Financial Services">Banking & Financial Services</option>
              <option value="Defence">Defence</option>
              <option value="Energy">Energy</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Industrial Equipment">Industrial Equipment</option>
              <option value="Insurance">Insurance</option>
              <option value="IT Service & Solution">IT Service & Solution</option>
              <option value="Life Sciences">Life Sciences</option>
              <option value="Medical Devices">Medical Devices</option>
              <option value="Naval">Naval</option>
              <option value="Non-Profit">Non-Profit</option>
              <option value="Public">Public</option>
              <option value="Retail & Logistics">Retail & Logistics</option>
              <option value="Security">Security</option>
              <option value="Space">Space</option>
              <option value="Telecommunication & Media">Telecommunication & Media</option>
              <option value="Transportation">Transportation</option>
              <option value="Other">Transportation</option>
            </select>
            <select {...register("reason", { required: true })} className="border p-2 w-full text-gray-400">
              <option value="">↓ I am contacting you because*</option>
              <option value="I would like to work for EdvenswaksA">I would like to work for EdvenswaksA</option>
              <option value="I am interested in the EdvenswaksA Services and solutions">I am interested in the EdvenswaksA Services and solutions</option>
              <option value="I would like information on your training and certification">I would like information on your training and certification</option>
              <option value="Other">Other (please specify your request below)</option>
            </select>
          </div>

          {/* Message */}
          <textarea {...register("message")} placeholder="Message" className="border p-2 w-full h-28" />

          {/* Checkboxes */}
          <div className="space-y-2">
            <label className="flex items-start space-x-2 text-gray-500">
              <input type="checkbox" {...register("updates")} />
              <span>I would like to receive relevant updates from Expleo via e-mail and agree to commercial processing of my data.</span>
            </label>
            <label className="flex items-start space-x-2 text-gray-500">
              <input type="checkbox" {...register("policy", { required: true })} />
              <span>
                I accept the Data Protection Policy.* You can revoke your privacy consent and stop receiving our updates at any time by notifying us via all known communication channels. For more information click here.          </span>
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactExpleo;
