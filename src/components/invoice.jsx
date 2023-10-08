export const OneInvoice = ({data}) => {
  console.log(data)
  return (
    <div className="card">
      <div className="left">
        <p>
          <b>#{data.code}</b>
        </p>
        <p>{new Date(data.invoiceDate).toLocaleDateString()}</p>
        <p>{data.client}</p>
      </div>
      <div className="right">
        <p>£ {data.price}</p>
        <div className={`status ${data.status}`}>
          <span className="dot">&#x2022;</span>
          <span>{data.status}</span>
        </div>
        <p>&#x203A;</p>
      </div>
    </div>
  );
};
