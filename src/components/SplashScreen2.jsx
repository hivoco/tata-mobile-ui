import { useEffect, useState } from "react";
import Layout from "../../Layout";

function SplashScreen2() {
  const [isUIVisible, setUIVisibility] = useState(false);
  useEffect(function () {
    const timer = setTimeout(function () {
      setUIVisibility(true);
    }, 2000);

    return function () {
      clearInterval(timer);
    };
  }, []);

  return (
    <Layout bg={'bg-[url("images/ss2.png")]'}>
        {isUIVisible ? (
            <div>
                
            </div>
        ) : ""}
    </Layout>
  );
}

export default SplashScreen2;
