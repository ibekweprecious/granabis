import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Users from "../Users/Users";
import Products from "../Products/Products";
import Blog from "../Blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import Address from "../Address/Address";
import Payment from "../payment/payment";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Users />
            <Products />
            <Payment />
        </div>
        <div className="content-grid-two">
            <Budget />
            <ContactUs />
            <div className="grid-two-item">
              <div className="subgrid-two">
            <Report />
            <Address />
              </div>
            </div>

        </div>
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Blog />
              </div>
            </div>
    </div>
  )
}

export default ContentMain
