import React, { useState } from "react";
import "../styles/internForm.css";

const InternForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    degree: "",
    institution: "",
    graduationYear: "",
    percentage: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First Name is required";
      if (!formData.lastName) newErrors.lastName = "Last Name is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
    }

    if (step === 2) {
      if (!formData.degree) newErrors.degree = "Degree is required";
      if (!formData.institution)
        newErrors.institution = "Institution is required";
      if (!formData.graduationYear)
        newErrors.graduationYear = "Graduation Year is required";
      if (!formData.percentage) newErrors.percentage = "Percentage is required";
    }

    if (step === 3) {
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.pincode) newErrors.pincode = "Pincode is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="form-container" style={{ marginTop: "40px" }}>
      <div className="form-card">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
            }}
          ></div>
        </div>

        <h2 style={{ color: "#d4af37" }}>
          {step === 1 && "Personal Information"}
          {step === 2 && "Education Information"}
          {step === 3 && "Address Information"}
        </h2>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div>
                <input
                  type="text"
                  name="firstName"
                  //  className="gold-input"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && (
                  <p className="error">{errors.firstName}</p>
                )}

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && (
                  <p className="error">{errors.lastName}</p>
                )}

              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
               {errors.phone && (
                  <p className="error">{errors.phone}</p>
                )}

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
              />
               {errors.email && (
                  <p className="error">{errors.email}</p>
                )}

              <input
                // type="date"
                name="dob"
                placeholder="Date of Birth (DD/MM/YYYY) *"
                value={formData.dob}
                onChange={handleChange}
                required
              />
               {errors.dob && (
                  <p className="error">{errors.dob}</p>
                )}

              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <input
                type="text"
                name="degree"
                placeholder="Degree (B.E / B.Tech / B.Sc) *"
                value={formData.degree}
                onChange={handleChange}
                required
              />
               {errors.degree && (
                  <p className="error">{errors.degree}</p>
                )}

              <input
                type="text"
                name="institution"
                placeholder="Institution Name *"
                value={formData.institution}
                onChange={handleChange}
                required
              />
               {errors.institution && (
                  <p className="error">{errors.institution}</p>
                )}

              <input
                type="number"
                name="graduationYear"
                placeholder="Year of Graduation *"
                value={formData.graduationYear}
                onChange={handleChange}
                required
              />
               {errors.graduationYear && (
                  <p className="error">{errors.graduationYear}</p>
                )}


              <input
                type="number"
                name="percentage"
                placeholder="Percentage / CGPA *"
                value={formData.percentage}
                onChange={handleChange}
                required
              />
              {errors.percentage && (
                  <p className="error">{errors.percentage}</p>
                )}

              <div className="button-group">
                <button type="button" onClick={prevStep}>
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <input
                type="text"
                name="country"
                placeholder="Country *"
                value={formData.country}
                onChange={handleChange}
                required
              />
               {errors.country && (
                  <p className="error">{errors.country}</p>
                )}

              <input
                type="text"
                name="state"
                placeholder="State *"
                value={formData.state}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City *"
                value={formData.city}
                onChange={handleChange}
                required
              />
               {errors.City && (
                  <p className="error">{errors.City}</p>
                )}

              <input
                type="text"
                name="pincode"
                placeholder="Pincode *"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
              {errors.pincode && (
                  <p className="error">{errors.pincode}</p>
                )}

              <div className="button-group">
                <button type="button" onClick={prevStep}>
                  Back
                </button>

                <button type="submit">Pay</button>
              </div>
            </>
          )}

        </form>
      </div>
    </div>
  );
};

export default InternForm;
