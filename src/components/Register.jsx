import React, { useState } from "react";
import { motion } from "framer-motion";
import { validateForm } from "../FormValidation";
import { registerUser } from "../Api";
import "./Register.css";
import useReducedMotion from "../hooks/useReducedMotion";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startUpSector: "",
    headquarter: "",
    linkedin: "",
    description: "",
    challan: "",
  });

  const [challan, setChallan] = useState(""); // Challan number state
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [challanError, setChallanError] = useState(""); // Challan error state

  const handleChange = (e) => {
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChallanChange = (e) => {
    setChallan(e.target.value);
    formData.challan = e.target.value;
    setChallanError(""); 
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const validationErrors = validateForm(formData);
    setChallanError("");

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    
    if (!challan) {
      throw new Error("Please provide the challan number of your payment.");
    }

    // Validate acceptance of declaration (checkbox)
    if (!checkboxChecked) {
      setErrors(prev => ({ ...prev, declaration: 'Please accept the declaration to continue.' }));
      return;
    }

    try {
      setLoading(true);
      const responseMessage = await registerUser(formData); // Expecting only the message
      setMessage(responseMessage); // Set the success message
    } catch (error) {
      setMessage(error.message || "An error occurred"); // Display error message to the user
      if (
        error.message.includes("Please give challan number of your payment")
      ) {
        setChallanError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const reduced = useReducedMotion();

  return (
    <div
      id="reg"
      className="bg-black w-full flex flex-col justify-center items-center pb-24 px-4 md:px-0"
    >
      <h1 className="text-5xl text-brand mt-10 font-bold px-4 md:px-0" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>REGISTER NOW</h1>

      <motion.div className="flex flex-col mt-10 w-full max-w-3xl mx-auto px-6 translucent-card p-6 text-white rounded-3xl shadow-2xl glass" initial={reduced ? undefined : { opacity: 0, y: 12, scale: 0.98 }} whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.18 }} transition={reduced ? undefined : { duration: 0.6, ease: "easeOut" }}>
        <div className="h-1/7 flex justify-center items-center mb-6">
          <p className="text-brand text-2xl font-semibold">Register as a Startup</p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mt-1 font-medium">
              Startup Name <span className="text-brand required-star" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              aria-invalid={errors.name ? "true" : "false"}
              className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] transition"
              placeholder="Enter your Startup Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <span className="text-brand">{errors.name}</span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mt-1 font-medium">
              Email <span className="text-brand required-star" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              required
              aria-invalid={errors.email ? "true" : "false"}
              className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] transition"
              placeholder="Enter your email address"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="text-brand">{errors.email}</span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="startUpSector" className="mt-1 font-medium">
              Startup's Sector <span className="text-brand required-star" aria-hidden="true">*</span>
            </label>
            <input
              id="startUpSector"
              name="startUpSector"
              required
              aria-invalid={errors.startUpSector ? "true" : "false"}
              className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] transition"
              placeholder="Sector of your Startup"
              type="text"
              value={formData.startUpSector}
              onChange={handleChange}
            />
            <span className="text-brand">{errors.startUpSector}</span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="headquarter" className="mt-1 font-medium">
              Startup Headquarter <span className="text-brand required-star" aria-hidden="true">*</span>
            </label>
            <input
              id="headquarter"
              name="headquarter"
              required
              aria-invalid={errors.headquarter ? "true" : "false"}
              className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] transition"
              placeholder="Place of Startup Headquarter"
              type="text"
              value={formData.headquarter}
              onChange={handleChange}
            />
            <span className="text-brand">{errors.headquarter}</span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="linkedin" className="mt-1 font-medium">
              LinkedIn/Website of your Startup <span className="text-brand required-star" aria-hidden="true">*</span>
            </label>
            <input
              id="linkedin"
              name="linkedin"
              required
              aria-invalid={errors.linkedin ? "true" : "false"}
              className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] transition"
              placeholder="Enter your LinkedIn or Website URL"
              type="text"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <span className="text-brand">{errors.linkedin}</span>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="description" className="mt-1 font-medium">
              Description of Startup <span className="text-brand required-star" aria-hidden="true">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              aria-invalid={errors.description ? "true" : "false"}
              placeholder="Brief description of idea/product/service"
              className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] transition"
              cols="30"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <span className="text-brand">{errors.description}</span>
          </div>

          <div className="md:col-span-2">
            <div className="mb-2 mt-2 text-white text-lg">
              Step 2:{" "}
              <a
                className="text-[#4a4adf] underline text-lg"
                href="https://pay.vnit.ac.in/event"
                target="_blank"
                rel="noopener noreferrer"
              >
                Generate Challan
              </a>
              <p className="mb-2 px-1 md:px-5 text-white text-sm md:text-lg">
                Please visit the link, complete the payment, and then copy and
                paste the Challan number from the official VNIT payment site.
              </p>
            </div>

            <label htmlFor="challan" className="mb-2 text-lg font-medium">
              Challan Number
            </label>
            <input
              type="text"
              id="challan"
              name="challan"
              value={formData.challan}
              onChange={handleChallanChange}
              className="bg-white/5 text-white rounded-md px-3 py-2 border border-white/6 focus:outline-none focus:ring-2 focus:ring-[var(--brand-2)] mb-2 transition w-full"
            />
            {challanError && (
              <div className="text-brand">{challanError}</div>
            )}
          </div>

          <div className="md:col-span-2 flex items-center">
            <label htmlFor="declaration" className="flex items-center cursor-pointer">
              <input
                id="declaration"
                type="checkbox"
                className="hidden-checkbox"
                checked={checkboxChecked}
                aria-required={true}
                aria-invalid={errors.declaration ? 'true' : 'false'}
                onChange={() => { setCheckboxChecked(!checkboxChecked); setErrors(prev => ({...prev, declaration: ''})); }}
              />
              <span className="checkbox-custom mr-3" aria-hidden="true"></span>
              <span className="ml-1 text-white">I hereby declare that I have read the brochure and the details furnished above are correct to the best of my knowledge.</span>
            </label>
            {errors.declaration && <div className="text-brand mt-2">{errors.declaration}</div>}
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto rounded-full py-3 px-8 text-lg text-white shadow-md hover:scale-105 transition disabled:opacity-60 btn-gradient"
            >
              {loading ? "LOADING..." : "REGISTER"}
            </button>
          </div>
        </form>
        <p className="m-auto text-white">{message}</p>
      </motion.div>
    </div>
  );
}
