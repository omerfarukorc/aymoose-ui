import "src/pages/login/Login.css";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { RootState, AppDispatch } from "src/redux/store";
import { loginUser, LoginUserInput } from "src/redux/AuthSlice";
import login from "src/assets/images/login.jpg";

function Login() {
  const authState = useSelector((store: RootState) => store.authentication);
  useEffect(() => {
    console.log("auth state is printing now");
    console.log("hello world");
    console.log(authState);
  }, [authState]);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = async () => {
    setLoginError(null);
    let result;
    try {
      const credentials: LoginUserInput = { mail, password };
      if (mail === "" || password === "") {
        setLoginError("Lütfen giriş bilgilerinizi giriniz.");
        return;
      } else {
        result = await dispatch(loginUser(credentials)).unwrap();
        console.log("Giriş başarılı:", result);
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Giriş başarısız:", error);
      setLoginError(
        "Giriş işlemi başarısız. Lütfen bilgilerinizi kontrol edin."
      );
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${login})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-container">
        <div className="login-container-section">
          <div className="login-container-section-title">
            Tekrar hoşgeldiniz
          </div>
          <div className="login-container-section-description">
            Giriş yapın ve kolay bir şekilde halısaha randevunuzu alın.
          </div>

          <div className="login-container-section-email-title">Email</div>
          <div className="login-container-section-email-textfield">
            <TextField
              style={{
                backgroundColor: "rgba(247,251,255)",
                borderRadius: "1rem",
                width: 400,
                fontSize: 16,
              }}
              id="filled-helperText"
              variant="filled"
              value={mail}
              onChange={handleMailChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: "transparent",
                  borderRadius: "1rem",
                  fontSize: "1rem",
                  padding: "px 14px",
                  boxSizing: "border-box",
                  lineHeight: "4.8",
                },
              }}
            />
          </div>

          <div className="login-container-section-password-title">Password</div>
          <div className="login-container-section-password-textfield">
            <TextField
              style={{
                backgroundColor: "rgba(247,251,255)",
                borderRadius: "1rem",
                width: 400,
                fontSize: 16,
              }}
              id="filled-password"
              variant="filled"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: "transparent",
                  borderRadius: "1rem",
                  fontSize: "1rem",
                  padding: "1px 14px",
                  boxSizing: "border-box",
                  lineHeight: "1.5",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="login-container-section-forgot-password">
            <Link
              to="/password-reset"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontFamily: "Roboto",
              }}
            >
              Şifremi Unuttum?
            </Link>
          </div>

          <div className="login-container-section-button-signin">
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginClick}
              style={{
                borderRadius: "1rem",
                width: "100%",
                height: "48px",
                backgroundColor: "#162D3A",
              }}
            >
              Giriş Yap
            </Button>
          </div>

          <div className="login-container-section-error">
            {loginError && <p>{loginError}</p>} {/* Hata mesajı */}
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Login;
