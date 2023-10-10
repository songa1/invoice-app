import { useState } from "react";
import { data } from "../assets/data";

export const Form = ({setShowForm}) => {
    const [date, setDate] = useState(new Date("DD MM YYYY"));
    const [address, setAddress] = useState("");
    const [cityFrom, setCityFrom] = useState("");
    const [postFrom, setPostFrom] = useState("");
    const [countryFrom, setCountryFrom] = useState("");
    const [cityTo, setCityTo] = useState("");
    const [postTo, setPostTo] = useState("");
    const [countryTo, setCountryTo] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [addressTo, setAddressTo] = useState("");
    const [payment, setPaymentTerm] = useState(1);
    const [description, setDescription] = useState(1);

    const generateCode = () => {
        let lastItem = data.length > 0 ? data[data.length - 1].code : null;

        let newCode = `RT_${Number(lastItem.split("_")[1]) + 1}`;
        return newCode;
    }

    const addData = async(e, status) => {
        e.preventDefault();
        let id = await generateCode();
        const info = {
            code: id,
            client: {
                name: clientName,
                email: clientEmail,
            },
            address: {
                from: address,
                to: addressTo
            },
            invoiceDate: date,
            description: description,
            items: [
                "fanta"
            ],
            status: status,
            price: 678
        }

        await data.push(info);
        setShowForm(false)
    }

    return (
        <form>
            <h3>Bill From</h3>
            <div className="input-form">
                <label htmlFor="street-addr">Street Address</label>
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} name="street-addr" />
            </div>
            <div className="input-group">
                <div className="input-form">
                    <label htmlFor="city-1">City</label>
                    <input type="text" name="city-1" value={cityFrom} onChange={e => setCityFrom(e.target.value)}/>
                </div>
                <div className="input-form">
                    <label htmlFor="post-1">Post code</label>
                    <input type="text" name="post-1" value={postFrom} onChange={e => setPostFrom(e.target.value)}/>
                </div>
                <div className="input-form">
                    <label htmlFor="country-1">Country</label>
                    <input type="text" name="country-1" value={countryFrom} onChange={e => setCountryFrom(e.target.value)}/>
                </div>
            </div>
            <h3>Bill To</h3>
            <div className="input-form">
                <label htmlFor="client">{"Client's name"}</label>
                <input type="text" name="client" value={clientName} onChange={e => setClientName(e.target.value)}/>
            </div>
            <div className="input-form">
                <label htmlFor="client-email">{"Client's email address"}</label>
                <input type="email" name="client-email" placeholder="e.g. email@example.com" value={clientEmail} onChange={e => setClientEmail(e.target.value)}/>
            </div>
            <div className="input-form">
                <label htmlFor="street">{"Street address"}</label>
                <input type="text" name="street" value={addressTo} onChange={e => setAddressTo(e.target.value)}/>
            </div>
            <div className="input-group">
                <div className="input-form">
                    <label htmlFor="city-2">City</label>
                    <input type="text" name="city-2" value={cityTo} onChange={e => setCityTo(e.target.value)}/>
                </div>
                <div className="input-form">
                    <label htmlFor="post-2">Post code</label>
                    <input type="text" name="post-2" value={postTo} onChange={e => setPostTo(e.target.value)}/>
                </div>
                <div className="input-form">
                    <label htmlFor="country-2">Country</label>
                    <input type="text" name="country-2" value={countryTo} onChange={e => setCountryTo(e.target.value)}/>
                </div>
            </div>
            <div className="input-form">
                <label htmlFor="date">{"Invoice date"}</label>
                <input type="date" name="date" value={date} onChange={e=>setDate(e.target.value)}/>
            </div>
            <div className="input-form">
                <label htmlFor="payment">{"Payment terms"}</label>
                <input type="number" name="payment" placeholder="1" value={payment} onChange={e => setPaymentTerm(e.target.value)}/>
            </div>
            <div className="input-form">
                <label htmlFor="description">{"Project description"}</label>
                <input type="text" name="description" placeholder="e.g. Graphic design services" value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="flex">
                <button className="btn" onClick={() => setShowForm(false)}>Discard</button>
                <div className="flex">
                    <button className="btn" onClick={e => addData(e, "draft")}>Save as draft</button>
                    <button className="btn" onClick={e => addData(e, "pending")}>Save & Send</button>
                </div>
            </div>
        </form>
    )
}