import React from "react";
import "../App.css";
function FormPage({ email }) {
  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get form data from the event target
    const formData = new FormData(event.target);

    // Convert form data to a JSON object
    const data = {
      formdata: {
        name: formData.get("name"),
        age: formData.get("age"),
        career: formData.get("career"),
        income: formData.get("income"),
        assets: {
          savingsAccount: formData.get("asset_SavingsAccount"),
          stocks: formData.get("asset_Stocks"),
          bonds: formData.get("asset_Bonds"),
          mutualFunds: formData.get("asset_MutualFunds"),
          realEstate: formData.get("asset_RealEstate"),
          jewellery: formData.get("asset_Jewellery"),
          crypto: formData.get("asset_Crypto"),
          automobile: formData.get("asset_Automobile"),
          otherAssets: formData.get("asset_OtherAssets"),
        },
        liabilities: {
          mortgage: formData.get("liability_Mortgage"),
          carLoan: formData.get("liability_CarLoan"),
          studentLoan: formData.get("liability_StudentLoan"),
          personalLoan: formData.get("liability_PersonalLoan"),
          residualBill: formData.get("liability_ResidualBill"),
          creditCardDebt: formData.get("liability_CreditCardDebt"),
          payableTaxes: formData.get("liability_PayableTaxes"),
          monthlyEMIs: formData.get("liability_MonthlyEMIs"),
        },
      },
      email: email,
    };

    // Make a POST request to the server
    try {
      const response = await fetch("http://10.0.129.69:5000/form", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("Success:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container main">
      <h1 className="my-4">Form Page</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input type="number" name="age" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Career:</label>
          <div>
            <div className="form-check">
              <input
                type="radio"
                name="career"
                value="job"
                className="form-check-input"
              />
              <label className="form-check-label">Job</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="career"
                value="business"
                className="form-check-input"
              />
              <label className="form-check-label">Business</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Income:</label>
          <input
            type="number"
            name="income"
            className="form-control"
            required
          />
        </div>

        {/* Assets */}
        <h3 className="mb-3">Assets</h3>
        {[
          "Savings Account",
          "Stocks",
          "Bonds",
          "Mutual Funds",
          "Real Estate",
          "Jewellery",
          "Crypto",
          "Automobile",
          "Other Assets",
        ].map((asset, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{asset}:</label>
            <input
              type="number"
              name={`asset_${asset.replace(/\s+/g, "")}`}
              className="form-control"
            />
          </div>
        ))}

        {/* Liabilities */}
        <h3 className="mb-3">Liabilities</h3>
        {[
          "Mortgage",
          "Car Loan",
          "Student Loan",
          "Personal Loan",
          "Residual Bill",
          "Credit Card Debt",
          "Payable Taxes",
          "Monthly EMIs",
        ].map((liability, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{liability}:</label>
            <input
              type="number"
              name={`liability_${liability.replace(/\s+/g, "")}`}
              className="form-control"
            />
          </div>
        ))}

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
