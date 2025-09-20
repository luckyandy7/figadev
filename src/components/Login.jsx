import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Prism from "./Prism";
import Stepper, { Step } from "./Stepper";
import BackButton from "./BackButton";

const Login = ({ onBack }) => {
  const [showStepper, setShowStepper] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [name, setName] = useState("");

  const handleSignUpClick = () => {
    setShowStepper(true);
  };

  const handleStepperComplete = () => {
    // 회원가입 완료 후 부드럽게 로그인 화면으로 돌아가기
    setIsTransitioning(true);
    setTimeout(() => {
      setShowStepper(false);
      setIsTransitioning(false);
    }, 800); // 0.8초의 부드러운 전환
  };

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggingIn(true);

    // 부드러운 전환 효과
    setTimeout(() => {
      setIsFadingOut(true);
      // 페이드아웃 완료 후 페이지 이동
      setTimeout(() => {
        const base = process.env.PUBLIC_URL || '';
        window.location.href = `${base}/solar-explorer/`;
      }, 800);
    }, 1000);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        opacity: isFadingOut ? 0 : 1,
        transition: "opacity 0.8s ease-out",
      }}
    >
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0}
        colorFrequency={1}
        noise={0.5}
        glow={1}
      />
      <LoginContainer>
        {onBack && (
          <BackButtonWrapper>
            <BackButton onClick={onBack} />
          </BackButtonWrapper>
        )}

        <AnimatePresence mode="wait">
          {showStepper ? (
            <motion.div
              key="stepper"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{
                opacity: isTransitioning ? 0 : 1,
                scale: isTransitioning ? 0.95 : 1,
                y: isTransitioning ? 20 : 0,
              }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <StepperWrapper>
                <Stepper
                  initialStep={1}
                  onStepChange={(step) => {
                    console.log(step);
                  }}
                  onFinalStepCompleted={handleStepperComplete}
                  backButtonText="Previous"
                  nextButtonText="Next"
                >
                  <Step>
                    <h2>Welcome to Sign Up!</h2>
                    <p>Let's get you started with your account!</p>
                  </Step>
                  <Step>
                    <h2>Personal Information</h2>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      style={{
                        width: "100%",
                        padding: "10px",
                        margin: "10px 0",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </Step>
                  <Step>
                    <h2>Account Details</h2>
                    <input
                      type="email"
                      placeholder="Email address"
                      style={{
                        width: "100%",
                        padding: "10px",
                        margin: "5px 0",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      style={{
                        width: "100%",
                        padding: "10px",
                        margin: "5px 0",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </Step>
                  <Step>
                    <h2>Welcome Aboard!</h2>
                    <p>Your account has been created successfully!</p>
                  </Step>
                </Stepper>
              </StepperWrapper>
            </motion.div>
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{
                opacity: isLoggingIn ? 0 : 1,
                scale: isLoggingIn ? 0.8 : 1,
                y: isLoggingIn ? -50 : 0,
              }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <StyledWrapper>
                <form className="form">
                  <div className="title">
                    Welcome Back
                    <br />
                    <span>Sign in to continue</span>
                  </div>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />

                  <div className="login-with">
                    <div className="button-log">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                    <div className="button-log">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div className="button-log">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </div>
                  </div>

                  <button
                    className="button-confirm"
                    onClick={handleLoginSuccess}
                    disabled={isLoggingIn}
                    style={{
                      opacity: isLoggingIn ? 0.7 : 1,
                      transform: isLoggingIn ? "scale(0.95)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isLoggingIn ? "Launching..." : "Let's go!"}
                  </button>

                  <div className="signup-link">
                    Don't have an account?{" "}
                    <span className="signup-text" onClick={handleSignUpClick}>
                      Sign Up
                    </span>
                  </div>
                </form>
              </StyledWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </LoginContainer>
    </div>
  );
};

const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 10;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
`;

const StepperWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 600px;
  height: auto;
  max-height: 80vh;
  z-index: 1000;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: white;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }

  input {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      border-color: #5227ff;
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;

const StyledWrapper = styled.div`
  .form {
    --input-focus: #5227ff;
    --font-color: white;
    --font-color-sub: rgba(255, 255, 255, 0.8);
    --bg-color: rgba(0, 0, 0, 0.9);
    --main-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    max-width: 600px;
    width: 100%;
  }

  .title {
    color: var(--font-color);
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 25px;
  }

  .title span {
    color: var(--font-color-sub);
    font-weight: 600;
    font-size: 17px;
  }

  .input {
    width: 100%;
    max-width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--main-color);
    background: rgba(255, 255, 255, 0.1);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 10px;
    outline: none;
  }

  .input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .input:focus {
    border: 1px solid var(--input-focus);
    background: rgba(255, 255, 255, 0.15);
  }

  .login-with {
    display: flex;
    gap: 20px;
  }

  .button-log {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: var(--font-color);
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }

  .button-log:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  .icon {
    width: 24px;
    height: 24px;
    fill: white;
  }

  .button-log:active,
  .button-confirm:active {
    transform: scale(0.95);
  }

  .button-confirm {
    margin: 50px auto 0 auto;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--input-focus);
    background: var(--input-focus);
    font-size: 17px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button-confirm:hover:not(:disabled) {
    background: rgba(82, 39, 255, 0.8);
    transform: translateY(-1px);
  }

  .button-confirm:disabled {
    cursor: not-allowed;
  }

  .signup-link {
    text-align: center;
    color: var(--font-color-sub);
    font-size: 14px;
    margin-top: 20px;
  }

  .signup-text {
    color: var(--input-focus);
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
  }

  .signup-text:hover {
    color: rgba(82, 39, 255, 0.8);
  }
`;

export default Login;
