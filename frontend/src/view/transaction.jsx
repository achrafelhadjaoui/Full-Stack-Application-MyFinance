import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Transaction = () => {
  return (
    <div className="container align-content-center my-3">
      <section>
        <div className="row">
          <div className="col-xl-6 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <i className="fas fa-calendar-alt text-info me-4" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <div>
                      <h4>Total Posts</h4>
                      <p className="mb-0">Date</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h2 className="h1 mb-0">18,000</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <i className="fas fa-calendar-alt text-info me-4" style={{ fontSize: '2rem' }}></i>
                    </div>
                    <div>
                      <h4>Total Posts</h4>
                      <p className="mb-0">Date</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h2 className="h1 mb-0">18,000</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transaction;