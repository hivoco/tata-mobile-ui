import Layout from "../../Layout";

function QuizLoading() {
  return (
    <Layout bg={" bg-[url('images/ss3.png')] "}>
      <div className="flex justify-center w-full px-6 pt-32" >
        <div className="flex flex-col items-center gap-7 border border-solid border-white bg-[#FFFFFFE5] w-[413px] py-10 px-[30px] rounded-[10px] ">
          <div className="flex flex-col items-center gap-6">
            <header className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-[70px] font-normal leading-[77.56px]  text-[#252042] font-OdibeeSans">
                Welcome!
              </h1>
              <h4 className="font-Inter text-base text-[background: #2B262D] font-medium leading-[19.36px] text-center">
                Answer questions correctly and in the shortest timespan to
                improve your chances of winning.
              </h4>
            </header>

            <img
              className="w-24"
              src="gifs/loading.gif"
              alt="loading"
            />

          </div>

          <h1 className="font-Inter text-3xl font-bold leading-[36.31px] text-right text-[#1D55FD]">
            Quiz is Loading..
          </h1>

        </div>
      </div>
    </Layout>
  );
}

export default QuizLoading;
