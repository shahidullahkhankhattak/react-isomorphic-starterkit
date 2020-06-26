import React from 'react';

export default function Register() {
  return (
    <>
      <main id="container">
        <section className="registration">
          <div className="container">
            <h2>Registration</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">Phone No.</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

