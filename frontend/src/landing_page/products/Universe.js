import React from "react";
function Universe() {
  return (
    <div className="container mt-5 text-center p-5 mb-5">
        <p className="p-5 mt-5 mb-5" style={{ fontSize: "30px" }}>
            Want to know more about our technology stack? Check out the{" "}
            <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
            </a>{" "}
            blog.
        </p>
        <div className="row ">
            <h1 className="mt-5">The Zerodha Universe</h1>
            <p className="p-3 fs-5">
            Extend your trading and investment experience even further with our
            partner platforms
            </p>
            <div className="col-4 p-5">
            <a
                href=""
                className="mt-5 mb-5 text-muted text-small"
                style={{ textDecoration: "none" }}
            >
                <img
                src="media/images/zerodhaFundhouse.png"
                style={{ width: "100%" }}
                ></img>
                <p className="mt-5 mb-5">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
                </p>
            </a>
            </div>
            <div className="col-4 p-5">
            <a
                href=""
                className="mt-5 mb-5 text-muted"
                style={{ textDecoration: "none" }}
            >
                <img
                src="media/images/streakLogo.png"
                style={{ width: "100%" }}
                ></img>
                <p className="mt-5 mb-5">
                Systematic trading platform that allows you to create and backtest
                strategies without coding.
                </p>
            </a>
            </div>
            <div className="col-4 p-5">
            <a
                href=""
                className="mt-5 mb-5 text-muted"
                style={{ textDecoration: "none" }}
            >
                <img
                src="media/images/sensibullLogo.svg"
                style={{ width: "100%" }}
                ></img>
                <p className="mt-5 mb-5">
                Options trading platform that lets you create strategies, analyze
                positions, and examine data points like open interest, FII/DII,
                and more.
                </p>
            </a>
            </div>
            <div className="col-4 p-5">
            <a
                href=""
                className="mt-5 mb-5 text-muted"
                style={{ textDecoration: "none" }}
            >
                <img
                src="media/images/smallcaseLogo.png"
                style={{ width: "100%" }}
                ></img>
                <p className="mt-5 mb-5">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
                </p>
            </a>
            </div>
            <div className="col-4 p-5">
            <a
                href=""
                className="mt-5 mb-5 text-muted"
                style={{ textDecoration: "none" }}
            >
                <img
                src="media/images/zerodhaFundhouse.png"
                style={{ width: "100%" }}
                ></img>
                <p className="mt-5 mb-5">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
                </p>
            </a>
            </div>
            <div className="col-4 p-5">
            <a
                href=""
                className="mt-5 mb-5 text-muted"
                style={{ textDecoration: "none" }}
            >
                <img
                src="media/images/zerodhaFundhouse.png"
                style={{ width: "100%" }}
                ></img>
                <p className="mt-5 mb-5">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
                </p>
            </a>
            </div>
            
            
        </div>
        <button
                className="p-2 btn btn-primary fs-5 mb-5"
                style={{ width: "20%", margin: "0 auto" }}
            >
                Sign up for free
            </button>
    </div>
  );
}

export default Universe;
