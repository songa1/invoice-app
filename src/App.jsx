import "./css/App.css";
import { OneInvoice } from "./components/invoice";
import { data } from "./assets/data";
import { useEffect, useState } from "react";
import { Form } from "./components/form";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [dataToShow, setDataToShow] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(()=>{
    setDataToShow(data.sort((a, b) => a.code < b.code))
  }, [data])

  return (
    <div>
      {showForm && <div className="overlay">
        <div className="overlay-content">
          <Form setShowForm={setShowForm}/>
        </div>
      </div>}
      <div className="invoices">
        <div className="top-header">
          <div className="title">
            <h2>Invoices</h2>
            <small>There are {data.length} total invoices</small>
          </div>
          <div className="filter-add">
            <div className="dropdown">
              <p className="drop-title" onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)}><b>Filter by status</b></p>
              <div className={showMenu ? `drop-menu` : `hidden`}>
              <p onClick={() => {
                  setDataToShow(data)
                  setShowMenu(false)
                }}>All</p>
                <p onClick={() => {
                  setDataToShow(data.filter(d => d.status === "paid"))
                  setShowMenu(false)
                }}>Paid</p>
                <p onClick={() => {
                  setDataToShow(data.filter(d => d.status === "draft"))
                  setShowMenu(false)
                }}>Draft</p>
                <p onClick={() => {
                  setDataToShow(data.filter(d => d.status === "pending"))
                  setShowMenu(false)
                }}>Pending</p>
              </div>
            </div>
            <button className="add" onClick={() => setShowForm(true)}>
              <p>Add Invoice</p>
            </button>
          </div>
        </div>
        {
          dataToShow ? dataToShow.map(invoice => (
            <OneInvoice data={invoice} key={invoice.code}/>
          )) : null
        }
      </div>
    </div>
  );
}

export default App;
