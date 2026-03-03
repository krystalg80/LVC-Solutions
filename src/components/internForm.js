import React, { useState } from "react";
import Disclaimer from "./disclaimer";
import "../styles/internForm.css";

const InternForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    // lastName: "",
    phone: "",
    email: "",
    // dob: "",
    degree: "",
    institution: "",
    graduationYear: "",
    branch: "",
    percentage: "",
    role: "",
    resume: null,
    country: "",
    state: "",
    city: "",
    pincode: "",
    feeConsent: false,
    selectionConsent: false,
    contactConsent: false,
  });

  const roles = [
    "AI/ML Intern",
    "Gen AI Intern",
    "UI/UX Design Intern",
    "Digital Marketing Intern",
    "Data Science Intern",
    "DevOps Intern",
    "Full Stack Intern",
    "Mobile App Developer Intern"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData(prev => ({
      ...prev,
      resume: file
    }));

    setErrors(prev => ({
      ...prev,
      resume: ""
  }));
  };
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
      if (!formData.email) newErrors.email = "Email is required";
      // if (!formData.dob) newErrors.dob = "Date of Birth is required";
    }

    if (step === 2) {
      if (!formData.degree) newErrors.degree = "Degree is required";
      if (!formData.institution)
        newErrors.institution = "Institution is required";
      if (!formData.graduationYear)
        newErrors.graduationYear = "Graduation Year is required";
      if (!formData.branch) 
        newErrors.branch = "Branch is required";
      if (!formData.percentage) newErrors.percentage = "Percentage is required";
      if (!formData.role) newErrors.role = "Internship Role is required";
      if (!formData.resume)
        newErrors.resume = "Resume is required";
    }

    if (step === 3) {
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.pincode) newErrors.pincode = "Pincode is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.feeConsent)
        newErrors.feeConsent = "You must agree that fee is non-refundable";
      if (!formData.selectionConsent)
        newErrors.selectionConsent ="You must agree selection is not guaranteed";
      if (!formData.contactConsent)
        newErrors.contactConsent ="You must agree to be contacted";
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
    if (!validateStep()) return; 
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
                <label className="input-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  //  className="gold-input"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                {errors.fullName && (
                  <p className="error">{errors.fullName}</p>
                )}
              </div>
              
              <label className="input-label">
                  Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
               {errors.phone && (
                  <p className="error">{errors.phone}</p>
                )}
              
              <label className="input-label">
                  Email Address <span className="required">*</span>
                </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
               {errors.email && (
                  <p className="error">{errors.email}</p>
                )}

              {/* <input
                // type="date"
                name="dob"
                placeholder="Date of Birth (DD/MM/YYYY) *"
                value={formData.dob}
                onChange={handleChange}
                required
              />
               {errors.dob && (
                  <p className="error">{errors.dob}</p>
                )} */}

              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <label className="input-label">
                  Degree (B.E / B.Tech / B.Sc) <span className="required">*</span>
              </label>
              <input
                type="text"
                name="degree"
                placeholder="Enter Your Degree"
                value={formData.degree}
                onChange={handleChange}
                required
              />
               {errors.degree && (
                  <p className="error">{errors.degree}</p>
                )}
              
              <label className="input-label">
                  Institution Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="institution"
                placeholder="Enter Your Institution Name"
                value={formData.institution}
                onChange={handleChange}
                required
              />
               {errors.institution && (
                  <p className="error">{errors.institution}</p>
                )}
              <label className="input-label">
                  Year of Graduation <span className="required">*</span>
              </label>
              <input
                type="number"
                name="graduationYear"
                placeholder="Enter Year of Graduation"
                value={formData.graduationYear}
                onChange={handleChange}
                required
              />
               {errors.graduationYear && (
                  <p className="error">{errors.graduationYear}</p>
                )}

              <label className="input-label">
                  Branch <span className="required">*</span>
              </label>
              <input
                type="text"
                name="branch"
                placeholder="Enter Your Branch"
                value={formData.branch}
                onChange={handleChange}
                required
              />
               {errors.branch && (
                  <p className="error">{errors.branch}</p>
                )}
              <label className="input-label">
                  Percentage / CGPA <span className="required">*</span>
              </label>
              <input
                type="number"
                name="percentage"
                placeholder="Enter Your Percentage / CGPA "
                value={formData.percentage}
                onChange={handleChange}
                required
              />
              {errors.percentage && (
                  <p className="error">{errors.percentage}</p>
                )}
              
              <label className="input-label">
                Internship Role <span className="required">*</span>
              </label>
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange}
                className="input">
                <option value="">Select Internship Role *</option>

                  {roles.map((role, index) => (
                  <option key={index} value={role}>
                {role}
                </option>
                ))}
              </select>
              {errors.role && (
                  <p className="error">{errors.role}</p>
                )}

              <label className="input-label">
                Upload Resume <span className="required">*</span>
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.docx"
                onChange={handleFileChange}
                className={`input-file ${errors.resume ? "error-input" : ""}`}
              />
              {errors.resume && (
                  <p className="error">{errors.resume}</p>
                )}
              <label className="input-label">
                GitHub/Portfolio/LinkedIn Link
              </label>
              <input
                type="text"
                name="portfolio"
                placeholder="Enter GitHub/Portfolio/LinkedIn Link"
                value={formData.portfolio}
                onChange={handleChange}
              />

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
              <label className="input-label">
                Country <span className="required">*</span>
              </label>
              <input
                type="text"
                name="country"
                placeholder="Enter Your Country"
                value={formData.country}
                onChange={handleChange}
                required
              />
               {errors.country && (
                  <p className="error">{errors.country}</p>
                )}
              
              <label className="input-label">
                State <span className="required">*</span>
              </label>
              <input
                type="text"
                name="state"
                placeholder="Enter Your State"
                value={formData.state}
                onChange={handleChange}
                required
              />
              {errors.state && (
                <p className="error">{errors.state}</p>
              )}

              <label className="input-label">
                City <span className="required">*</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                value={formData.city}
                onChange={handleChange}
                required
              />
               {errors.city && (
                  <p className="error">{errors.city}</p>
                )}
              
              <label className="input-label">
                Pincode <span className="required">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter Your Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
              {errors.pincode && (
                  <p className="error">{errors.pincode}</p>
                )}
              
            <div className="consent-section">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="feeConsent"
                  checked={formData.feeConsent}
                  onChange={handleChange}
                />
                I agree the fee is non-refundable
              </label>
              {errors.feeConsent && (
                <p className="error">{errors.feeConsent}</p>
              )}

              <label className="checkbox-label">
                <input
                type="checkbox"
                name="selectionConsent"
                checked={formData.selectionConsent}
                onChange={handleChange}
                />
                I agree selection is not guaranteed
              </label>
              {errors.selectionConsent && (
              <p className="error">{errors.selectionConsent}</p>
              )}

              <label className="checkbox-label">
                <input
                type="checkbox"
                name="contactConsent"
                checked={formData.contactConsent}
                onChange={handleChange}
              />
              I agree to be contacted via email/phone
              </label>
              {errors.contactConsent && (
                <p className="error">{errors.contactConsent}</p>
              )}
            </div>
              <div className="button-group">
                <button type="button" onClick={prevStep}>
                  Back
                </button>

                <button type="submit">Pay</button>
              </div>
            </>
          )}

        </form>
        <Disclaimer />
      </div>
    </div>
  );
};

export default InternForm;
