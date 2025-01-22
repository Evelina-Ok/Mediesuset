import { useContext, useState } from "react";
import { SectionTitle } from "../components/SectionTitle/SectionTitle.jsx";
import { UserContext } from "../context/userContext.jsx";
import { InputField } from "../components/InputField/InputField";

export function LoginPage () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginMessage, setLoginMessage] = useState();
    const [error, setError] = useState();

    console.log("input values", email, password);

    const { setUserData } = useContext(UserContext);

    function submitData() {
        const body = new URLSearchParams();
        body.append("username", email);
        body.append("password", password);

        const options = {
            method: "POST",
            body: body,
          };

          fetch("https://api.mediehuset.net/token", options)
          .then((res) => res.json())
          .then((data) => {
            // setData(data)
            if (data.access_token) {
                setUserData(data);
                setLoginMessage(
                    `Du er nu logget ind... Velkommen tilbage ${data.user.firstname}`
                );
            } else {
                setLoginMessage("Du har indtastet forkert password eller email");
            }
          })
          .catch((err) => setError(err));
    };
    //  console.log("data response", data);

  return (
    <>
        <SectionTitle title={"Login"} />
        <h5>{loginMessage}</h5>
        <form>
          <InputField
            type="email"
            placeholder="Indtast din mail"
            email="Email"
            id="emailField"
            labelText="Email"
            name="Email"
            action={setEmail}
          />

          <InputField
            type="password"
            placeholder="Indtast dit password"
            password="Password"
            id="passwordField"
            labelText="Password"
            action={setPassword}
          />
        </form>
        {/* button should never be inside the form as it's going to refresh the form. Or use prevent default */}
        <button onClick={() => submitData()}>Send</button>
    </>
  );    
}