import AddProductForm from "../../components/add-product-form/add-form.component";
import BuyLotForm from "../../components/buy-lot-form/buy-lot-form.component";
//import Table from '../../components/table/table.component';


import "./invoices.style.scss";

const Invoices = () => {
  return (
    <>
    <section>
    <div className="add-container">
      <BuyLotForm />
      <AddProductForm />
    </div>
    </section>
    <section>
   {/*
    <div className="details-invoices"><Table/></div>
  */}
    </section>
</>
  );
};

export default Invoices;
