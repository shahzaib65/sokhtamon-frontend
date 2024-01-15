import React, { useState } from "react";
import { Text } from "../components/Text";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/setup";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Send = () => {
  const navigate = useNavigate();

  const [confirmationResult, setConfirmationResult] = useState({});

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className=" w-[40%] h-full mt-40 flex">
        {showDiv1 && (
          <div className=" flex flex-col w-full h-[100%] justify-center items-center">
            <Text
              className=" h-max inset-[0] items-center  sm:text-[40px] xs:text-[20px] md:text-[46px] text-[50px] text-start text-yellow-800 tracking-[-1.00px] w-max"
              size="txtRobotoRomanBold50"
            >
              Войти
            </Text>
            <div className=" my-4 flex flex-col w-[60%]">
              <Text
                className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-4 mb-1"
                size="txtRobotoMedium12"
              >
                Номер телефона
              </Text>

              <input
                name="phone number"
                className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                value={phone}
                maxLength={10}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <div className=" w-full flex justify-center mt-[15px] mb-7">
                <button
                  onClick={async () => {
                    if (phone === "") {
                      toast.error("please enter a phone number");
                      return;
                    }

                    const phoneNumber = "+992" + phone;
                    console.log(phoneNumber)
                    const recaptchaVerifier = new RecaptchaVerifier(
                      auth,
                      "recaptcha",
                      {
                        size: "invisible",
                        callback: () => {
                          console.log("recaptcha resolved..");
                        },
                      }
                    );

                    await signInWithPhoneNumber(
                      auth,
                      phoneNumber,
                      recaptchaVerifier
                    )
                      .then((res) => {
                        setConfirmationResult(res);
                        console.log(res.verificationId);
                      })
                      .catch((err) => {
                        console.log(err.message);
                      });
                    setShowDiv1(!showDiv1);
                    setShowDiv2(true);
                    toast.success("otp sended successfully");
                  }}
                  className=" bg-yellow-800 w-[100%] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]"
                >
                  Отправить смс
                </button>
              </div>
            </div>
            <div id="recaptcha"></div>
          </div>
        )}

        {showDiv2 && (
          <div className=" w-full h-full flex justify-center items-center">
            <div className=" my-4 flex flex-col w-[60%]">
              <Text
                className="text-base text-gray-600 tracking-[-0.15px] text-left w-auto mt-4 mb-1"
                size="txtRobotoMedium12"
              >
                Введите свой отп
              </Text>

              <input
                name="phone number"
                className="p-[19px] bg-gray-100 outline-none placeholder:text-gray-700 text-left text-sm w-full"
                value={otp}
                maxLength={6}
                onChange={(e) => setOtp(e.target.value)}
              ></input>
              <div
                className=" w-full flex justify-center mt-[15px] mb-7"
                onClick={() => {
                  if (otp === "") {
                    toast.error("please enter a code");
                    return;
                  }
                  confirmationResult.confirm(otp)
                    .then(async (res) => {
                      console.log(res.user.phoneNumber);
                      const response = await fetch(
                        "https://sokhtamon-backend-production.up.railway.app/api/user/loginwithMobile",
                        {
                          method: "POST",
                          body: JSON.stringify({
                            mobile: res.user.phoneNumber,
                            role: "user",
                          }),
                          headers: { "content-type": "application/json" },
                        }
                      );
                      console.log(response)
                      if (response.ok) {
                        navigate("/");
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <button className=" bg-yellow-800 w-[100%] h-[50px] flex justify-center items-center rounded-sm text-white-A700 font-roboto font-semibold tracking-[0.20px]">
                  Проверить код
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Send;
