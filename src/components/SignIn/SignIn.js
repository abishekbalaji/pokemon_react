import { useState } from "react";
import { useDispatch } from "react-redux";
import setSignInOrUp from "../../store/signInOrUp/signInOrUpActions";
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
        <CustomButton type="button" btnType="inverted">
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
