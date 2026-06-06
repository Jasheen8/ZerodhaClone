import React from "react";
function Hero() {
  return (
    <div className="p-5" style={{ backgroundColor: "#eee" }}>
      <div className="d-flex ">
        <div className="me-auto ">
          <a
            href=""
            className=""
            style={{ textDecoration: "none", color: "#424242" }}
          >
            <h1>Support Portal</h1>
          </a>
        </div>
        <div className="">
          <button
            className=" btn btn-primary fs-5 "
            style={{ width: "100%", margin: "0 auto" }}
          >
            My Tickets
          </button>
        </div>
      </div>
      <br />
      <div class="input-group flex-nowrap ">
        <input
          type="text"
          class="form-control p-4 fs-5 text-muted"
          placeholder="
Eg: How do I open my account, How do i activate F&O...
"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
    </div>
  );
}

export default Hero;
