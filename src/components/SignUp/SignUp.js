import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import setSignInOrUp from "../../store/signInOrUp/signInOrUpActions";
import { signUpUserWithEmailAndPasswordAsync } from "../../store/user/userActions";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignUp.scss";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(INITIAL_FORM_STATE);
  const { name, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not same");
    } else {
      dispatch(signUpUserWithEmailAndPasswordAsync(email, password, name));
      setFormFields(INITIAL_FORM_STATE);
      navigate("/");
    }
  };

  const handleSignInSpanClick = () => {
    dispatch(setSignInOrUp(false));
  };

  return (
    <div className="sign-up_component">
      <h2 className="sign-up-section_title">Don't have an account?</h2>
      <span className="sign-up-section_subtitle">Sign Up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleInputChange}
          name="name"
          type="text"
          value={name}
          label="Name"
        />
        <FormInput
          onChange={handleInputChange}
          name="email"
          type="email"
          value={email}
          label="Email"
        />
        <FormInput
          onChange={handleInputChange}
          name="password"
          type="password"
          value={password}
          label="Password"
        />
        <FormInput
          onChange={handleInputChange}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          label="Confirm Password"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
      <span className="sign-in-prompt-span">
        Already have an account?{" "}
        <span onClick={handleSignInSpanClick} className="sign-in-span">
          Sign In
        </span>
      </span>
    </div>
  );
};

export default SignUp;
