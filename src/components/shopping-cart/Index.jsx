import React from "react";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";

export default function Index() {
  return (
    <>
      <section class="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card">
                <div class="card-body p-4">
                  <div class="row">
                    <CardLeft />
                    <div class="col-lg-5">
                      <CardRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
