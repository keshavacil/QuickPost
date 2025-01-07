import React, { useState } from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";

const UserSignUp = () => {
  const router = useRouter();

  const fields = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      required: true,
    },
    {
      id: "middleName",
      label: "Middle Name",
      type: "text",
      placeholder: "Middle Name",
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
    },
    {
      id: "dob",
      label: "Date of Birth",
      type: "date",
      placeholder: "Date of Birth",
      required: true,
    },
    { id: "address", label: "Address", type: "text", placeholder: "Address" },
    {
      id: "city",
      label: "City",
      type: "text",
      placeholder: "City",
      required: true,
    },
    {
      id: "state",
      label: "State",
      type: "text",
      placeholder: "State",
      required: true,
    },
    {
      id: "postalCode",
      label: "Postal Code",
      type: "text",
      placeholder: "Postal Code",
      required: true,
    },
    {
      id: "country",
      label: "Country",
      type: "text",
      placeholder: "Country",
      required: true,
    },
    {
      id: "gender",
      label: "Gender",
      type: "radio",
      options: ["Male", "Female", "Other"],
      required: true,
    },
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    gender: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} is required.`;
        isValid = false;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10 digits).";
      isValid = false;
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      router.push("/dashboard");
    }
  };

  return (
    <div className={styles.Signup}>
      <div className={styles.SignUpcontainer}>
        <div className={styles.SignUpheader}>
          <h1>Sign Up to Quick Post</h1>
        </div>
        <form className={styles.SignUpform} onSubmit={handleSubmit}>
          <div className={styles.SignUpinputForm}>
            {fields.map((field) => {
              const isRequired = field.required ? (
                <span className={styles.required}>*</span>
              ) : null;

              if (field.type === "radio") {
                return (
                  <div key={field.id} className={styles.SignUpinput}>
                    <label>
                      {field.label}
                      {isRequired}
                    </label>
                    <div className={styles.radioGroup}>
                      {field.options.map((option) => (
                        <label key={option} className={styles.radioLabel}>
                          <input
                            type="radio"
                            name="gender"
                            value={option}
                            checked={formData.gender === option}
                            onChange={handleChange}
                            className={styles.radioInput}
                          />
                          <span className={styles.radioCustom}></span>
                          {option}
                        </label>
                      ))}
                    </div>
                    {errors.gender && (
                      <p className={styles.error}>{errors.gender}</p>
                    )}
                  </div>
                );
              }

              return (
                <div key={field.id} className={styles.SignUpinput}>
                  <label htmlFor={field.id}>
                    {field.label}
                    {isRequired}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    value={formData[field.id] || ""}
                    onChange={handleChange}
                  />
                  {errors[field.id] && (
                    <p className={styles.error}>{errors[field.id]}</p>
                  )}
                </div>
              );
            })}
          </div>
          <div className={styles.SignUpSubmitbutton}>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
