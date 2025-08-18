import emailjs from "emailjs-com";

export const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);

    emailjs
      .send(
        "service_3gegr2f",     // from EmailJS
        "template_pdw2kzu",    // from EmailJS
        formInputData,
        "n2FS66V4EhGGGauKp"    // from EmailJS
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message.");
      });
  };

  return (
    <div id="Contact" className="py-20 pt-0 px-4 md:px-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Any Query? Let's Connect!
      </h2>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(new FormData(e.target));
          }}
          className="space-y-6"
        >
          <input
            type="text"
            name="user_name" // ✅ fixed name
            placeholder="Enter your name"
            required
            autoComplete="off"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="user_email" // ✅ fixed name
            placeholder="Enter your email"
            required
            autoComplete="off"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message" // ✅ stays the same
            rows="6"
            placeholder="Enter your message"
            required
            autoComplete="off"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            value="send"
            className="w-full bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;