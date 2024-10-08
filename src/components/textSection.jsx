function TextSection() {
    return (
      <>
        <section className="bg-gray-100 text-center py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold">All-in-One Cloud Software</h2>
            <p className="mt-4">
              TOTC is one powerful online software suite that combines all the
              tools needed to run a successful school or office.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {/* Online Billing Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-teal-500 mb-4">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <h3 className="text-xl font-bold">
                  Online Billing, Invoicing, & Contracts
                </h3>
                <p className="mt-2">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts.
                </p>
              </div>
  
              {/* Scheduling & Attendance Tracking Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-teal-500 mb-4">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3 className="text-xl font-bold">
                  Easy Scheduling & Attendance Tracking
                </h3>
                <p className="mt-2">
                  Schedule and reserve classrooms at one campus or multiple
                  campuses. Keep detailed records of student attendance.
                </p>
              </div>
  
              {/* Customer Tracking Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-teal-500 mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold">Customer Tracking</h3>
                <p className="mt-2">
                  Automate and track emails to individuals or groups. Skillfully
                  manage your contacts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default TextSection;
  