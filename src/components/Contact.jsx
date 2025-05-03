import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/blllkxlb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong")
    }
  };
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto  px-4 md:px-20"
    >
      <h1 className="text-3xl font-bold mb-4">Contact </h1>
      <span>Please fill out form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          //   action="https://getform.io/f/blllkxlb"
          //   method="POST"
          className="bg-slate-300 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block test-gray-700">FullName</label>
            <input
              {...register("name", { required: true })}
              className="shadow  rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder=" Enter Your fullname"
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block test-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow  rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="enter your email address"
            />
            {errors.email && <span>This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block test-gray-700">Message</label>
            <input
              {...register("message", { required: true })}
              className="shadow  rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="message"
              name="message"
              type="text"
              placeholder="Enter Your Query"
            />
            {errors.message && <span>This field is required</span>}
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-3"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
