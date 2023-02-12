import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import setSignInOrUp from "../../store/signInOrUp/signInOrUpActions";
import {
  signInAuthUserWithGoogleAsync,
  signInUserWithEmailAndPasswordAsync,
} from "../../store/user/userActions";
// import { selectSignInOrUp } from "../../store/signInOrUp/signInOrUpSelectors";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";

const FORM_INITIAL_STATE = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(FORM_INITIAL_STATE);
  const navigate = useNavigate();
  // const [isSignUp, setIsSignUp] = useState(false);
  // const isSignUp = useSelector(selectSignInOrUp);

  const { email, password } = formFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpSpanClick = () => {
    dispatch(setSignInOrUp(true));
  };

  const handleGoogleSignIn = () => dispatch(signInAuthUserWithGoogleAsync());

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUserWithEmailAndPasswordAsync(email, password));
    setFormFields(FORM_INITIAL_STATE);
    navigate("/");
  };

  return (
    <div className="sign-in-component">
      <h2>Already have an account?</h2>
      <span>Sign In</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          onChange={handleInputChange}
          name="email"
          type="email"
          label="Email"
          value={email}
        />
        <FormInput
          onChange={handleInputChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton
          onClick={handleGoogleSignIn}
          type="button"
          btnType="inverted"
        >
          Google Sign In
        </CustomButton>
      </form>
      <span className="sign-up-prompt-span">
        Don't have an account?{" "}
        <span onClick={handleSignUpSpanClick} className="sign-up-span">
          Sign Up
        </span>
      </span>
    </div>
  );
};

export default SignIn;
