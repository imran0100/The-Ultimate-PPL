import React from "react";
import "./AboutDatabasePage.css";
function AboutDatabasePage() {
  return (
    <div>
      <section>
        <h2>About Database</h2>
        <p>
          Our website has two versions of EASA Database. EASA 2016 and EASA
          2021, both databases consist of questions appearing on the Real Exams
          most frequently.
        </p>

        <div class="row">
          <div class="col-1">
            <h3>EASA 2016 (ECQB 7.0) Database</h3>
            <p>
              The Last Updated EASA ECQB 7.0 Question Bank, Approximately 100
              new questions added every month, We keep updated our database with
              students feedback.
            </p>
          </div>
          <div class="col-1">
            <h3>EASA 2021 Database</h3>
            <p>
              The EASA 2021 database has been released! This database has a
              different structure of learning objectives. Some objectives were
              added or moved, while others were taken out.
            </p>
          </div>
          <div class="col-1">
            <h3>Multiple Choice Questions</h3>
            <p>
              Over 10,000 ATPL(A) multiple choice exam questions. Most of
              questions have detailed explanation taken from ICAO ANNEXES AND
              DOC SERIES.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDatabasePage;
