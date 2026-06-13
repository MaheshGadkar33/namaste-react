const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>

      <form action="">
        <input className="border 1px m-2" type="text" placeholder="name" />
        <input className="border 1px m-2" type="text" placeholder="lastName" />
        <button className="border 1px m-2 p-2 rounded-sm">submit</button>
      </form>
    </div>
  );
};

export default Contact;
