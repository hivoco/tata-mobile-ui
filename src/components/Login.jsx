import { useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import axios from "../api/instance.js";

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState("");
  const handleData = async () => {
    if (!phone) {
      return;
    }
    const d = await axios.post(
      `/after_login_update
      `,
      {
        name: name,
        phone: phone,
        uuid: sessionStorage.getItem("unique_id"),
      }
    );
    sessionStorage.setItem("user_data", JSON.stringify(d.data));
    navigate(`/quiz/play/finish`);
  };
  return (
    <Layout bg={"/images/ss3.png"}>
      <div className=" flex flex-col px-6  gap-[1.82rem] items-center  bg-no-repeat     overflow-x-hidden">
        <div className="w-full flex flex-col items-center  ">
          <div className="h-40 w-auto">
            <img src="/svgs/Its-Game-time.svg" alt="its game time" />
          </div>

          <div className=" flex flex-col gap-[18px]   ">

            <div className="modal-css  p-6 rounded-[10px]  flex flex-col gap-[18px]">
              <div className=" flex flex-col gap-5">
                <div className="flex flex-col gap-[30px]">
                  <div className=" flex  flex-col gap-1  ">
                    <h2 className=" font-DarkerGrotesque text-[40px] font-bold leading-[54px] text-left text-[#252042]">
                      Enter Details
                    </h2>

                    <p className="  text-[10px] leading-[12.1px] text-left text-[#252042] font-Inter font-normal">
                      Just a few details and you're good to go...
                    </p>
                  </div>

                  <div className=" flex flex-col items-center justify-center  gap-[14px] ">
                    <input
                      className="w-full py-[18px] px-5 border border-solid border-[#ADD1FF] text-xs font-Inter font-normal rounded-[10px]
            outline-none  leading-[14.5px] text-left"
                      // onChange={(e) => setName(e.target.value.replace(/[^A-Za-z]/ig, ''))}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      placeholder={"Your Name"}
                      type="text"
                      // required
                    />

                    <input
                      className="w-full py-[18px] px-5 border border-solid border-[#ADD1FF] text-xs font-Inter font-normal rounded-[10px]
                                        outline-none  leading-[14.5px] text-left"
                      onChange={(e) => {
                        const re = /^[0-9\b]+$/;
                        if (e.target.value === "" || re.test(e.target.value)) {
                          setPhone(e.target.value);
                        }
                      }}
                      
                      value={phone}
                      maxLength={10}
                      minLength={10}
                      placeholder={"Your Phone No."}
                      inputMode="numeric"
                      // required
                    />
                  </div>

                </div>

                <div className="font-Inter  flex flex-col gap-3  items-center">
                  <button
                    onClick={() => handleData()}
                    className="border-2 font-Inter purple-btn shadow-[4px_4px_0px_0px_black]   py-[20px] px-[99.5px] rounded-[10px] w-fit font-bold text-[14px] leading-[16.94px] text-white"
                  >
                    SUBMIT
                  </button>

                  <p className="  font-Inter text-[9px] text-[#252042] font-medium leading-[10.89px] text-center">
                    By signing up you accept the{" "}
                    <span className="text-[#1F54FD] font-bold">
                      Terms & Conditions
                    </span>
                  </p>
                </div>
              </div>

              <p className="  font-Inter font-normal leading-[15.73px] text-center">
                Have an account?{" "}
                <span className="font-bold text-[#1F54FD]">Log In</span>
              </p>
            </div>
          </div>
        </div>

        <img src="svgs/poweredBy.svg" alt="powered by" />

      </div>
    </Layout>
  );
}

export default Login;
