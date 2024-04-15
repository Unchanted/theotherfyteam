import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import "../App.css";

function LoginPage({ loginfunc, emailsetter }) {
  {
    /*function datatobackend(data) {
    console.log(data);
    const mutatedata = useMutation(["login"], () =>
      fetch("https://b94e-14-142-143-98.ngrok-free.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    );
  }*/
  }

  function Sender(data) {
    console.log(data);
    fetch("http://10.0.129.69:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response); // Inspect the response object
        if (!response.ok) {
          throw new Error(
            `HTTP error ${response.status}: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        emailsetter(data.email);
        if (data.log === "true") {
          loginfunc(true);
        } else {
          loginfunc(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // .then((data) => {
    //   console.log("Success:", data);
    //   emailsetter(data.email);
    //   if (data.log === "true") {
    //     loginfunc(true);
    //   } else {
    //     loginfunc(false);
    //   }
    // })
  }

  return (
    <>
      <div className="login-box main">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="header">Mera Khazana</h1>
              <p className="leading-relaxed mt-4">
                At Mera Khazana, we are driven by a passion for innovation and a
                commitment to excellence. Our team of experienced professionals
                is dedicated to providing world-class solutions that address
                your specific challenges and help you achieve your goals. With a
                deep understanding of the industry and a focus on continuous
                improvement, we strive to deliver results that exceed your
                expectations. Our approach is centered around collaboration and
                open communication. We work closely with you to understand your
                needs and tailor our services to suit your requirements. By
                leveraging the latest technology and best practices, we create
                solutions that are not only effective but also sustainable for
                your business. We take pride in building long-lasting
                relationships with our clients and being a trusted partner in
                their success. Let us show you how we can make a positive impact
                on your operations and help you reach new heights.
              </p>
            </div>
            <div className="login-button">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded = jwtDecode(
                    credentialResponse.credential
                  );
                  Sender(credentialResponseDecoded);
                  console.log(credentialResponseDecoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
