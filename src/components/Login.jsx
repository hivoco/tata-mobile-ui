import Layout from "../../Layout";

function Login() {
  return (
    <Layout bg={" bg-[url('images/ss3.png')] "}>
      <div className=" flex flex-col px-[29px]  items-center  bg-no-repeat  container   overflow-x-hidden">
        <div className="flex flex-col items-center ">
          <div className="h-40 w-auto">
            <img src="svgs/Its-Game-time.svg" alt="its game time" />
          </div>

          <div className="flex flex-col gap-[18px]">
            <div className="modal-css  p-6 rounded-[10px]  flex flex-col gap-5">
              <div>
                <div className="flex flex-col gap-[52px]">
                  <div className="flex  flex-col gap-1  items-center">
                    <h2 className="w-full font-DarkerGrotesque text-[40px] font-bold leading-[54px] text-left text-[#252042]">
                      Enter Details
                    </h2>

                    <p className=" text-base leading-[19.36px] text-left text-[#252042] font-Inter font-normal">
                      Just a few details and you're good to go...{" "}
                    </p>
                  </div>

                  <div className=" flex flex-col gap-[14px]">
                    <input
                      className="w-full py-5 px-[18px] border border-solid border-[#ADD1FF] text-xs font-Inter font-normal rounded-[10px]
            outline-none  leading-[14.5px] text-left"
                      //   onChange={(e) => setName(e.target.value)}
                      placeholder={"Your Name"}
                      type="text"
                    />

                    <input
                      className="w-full py-5 px-[18px] border border-solid border-[#ADD1FF] text-xs font-Inter font-normal rounded-[10px]
                                        outline-none  leading-[14.5px] text-left"
                      //   onChange={(e) => setPhone(e.target.value)}
                      placeholder={"Your Phone No."}
                      type="tel"
                    />
                  </div>
                </div>

                <div className="font-Inter  flex flex-col gap-3 items-center">
                  <button
                    // onClick={() => handleData()}
                    className="purple-btn shadow-[4px_4px_0px_0px_black]  py-[26px] px-[31.28px] rounded-[13px] w-full font-bold text-[18px] leading-[22px] text-white"
                  >
                    SUBMIT
                  </button>

                  <p className="font-Inter text-[9px] text-[#252042] font-medium leading-[11px] text-center">
                    By signing up you accept the{" "}
                    <span className="text-[#1F54FD] font-bold">
                      Terms & Conditions
                    </span>
                  </p>
                </div>
              </div>

              <p className="font-Inter font-normal leading-[14.73px] text-center">
                Have an account?{" "}
                <span className="font-bold text-[#1F54FD]">Log In</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
