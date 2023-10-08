import "./css/App.css";
import { OneInvoice } from "./components/invoice";
import { data } from "./assets/data";

function App() {

  return (
    <div>
      <div className="invoices">
        <div>
          <div>
            <h2>Invoices</h2>
            <p>There are {data.length} total invoices</p>
          </div>
          <div>
            <p><b>Filter by status</b></p>
          </div>
          <div>

          </div>
        </div>
        {
          data ? data.map(invoice => (
            <OneInvoice data={invoice} key={invoice.code}/>
          )) : null
        }
      </div>
    </div>
  );
}

export default App;
