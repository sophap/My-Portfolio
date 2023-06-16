import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { github } from '../assets';
import { linkedin } from '../assets';
import { CP } from '../assets';
import { upwork } from '../assets';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_0863n47',
      'template_l05naz5',
      {
        from_name: form.name,
        to_name: 'Sophie',
        from_email: form.email,
        to_email: 'rightpraise@gmail.com',
        message: form.message,
      },
      'cSV6gV677C2MAwHkg'
    )
    .then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error)

      alert('Something went wrong.')
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what is your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what is your message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div
                  onClick={() => window.open("https://github.com/sophap", "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                    <img
                      src={github}
                      alt="github"
                      className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                <div
                  onClick={() => window.open("https://www.linkedin.com/in/sophia-right-8b6a69232/", "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                <div
                  onClick={() => window.open("https://codepen.io/sophiaright", "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                    <img
                      src={CP}
                      alt="CP"
                      className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                <div
                  onClick={() => window.open("https://www.upwork.com/freelancers/~010a23e3946b9c1866?viewMode=1", "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                    <img
                      src={upwork}
                      alt="upwork"
                      className='w-1/2 h-1/2 object-contain'
                    />
                </div>
      </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
      
    </div>
    

  )
}

export default SectionWrapper(Contact, "contact");