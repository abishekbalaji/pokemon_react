// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { selectSignInOrUp } from "../../store/signInOrUp/signInOrUpSelectors";
import "./Authentication.scss";

const Authentication = () => {
  const isSignInOrUp = useSelector(selectSignInOrUp);
  // console.log(isSignInOrUp)
  // const [isSignUp, setIsSignUp] = useState(isSignInOrUp);
  // useEffect(() => {
  //   setIsSignUp(isSignInOrUp);
  //   console.log(isSignUp);
  // }, [isSignInOrUp, isSignUp]);
  return (
    <div className="auth_section">
      <div className="sign-in-up_container">
        {isSignInOrUp ? <SignUp /> : <SignIn />}
      </div>
      <div className="auth_image-container"></div>
    </div>
  );
};

export default Authentication;
