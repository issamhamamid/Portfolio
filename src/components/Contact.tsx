import React, { useState } from "react";
import { FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    console.log(form)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_tolupid", // replace with your service ID
                "template_ut73x2t", // replace with your template ID
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                "ZasnR1S9ugalqyq0x" // replace with your public key
            )
            .then(
                () => {
                    alert("Message sent successfully!")
                    setForm({ name: "", email: "", subject: "", message: "" });
                    setLoading(false);
                },
                (error) => {
                    alert("Failed to send message.");
                    console.error("EmailJS error:", error);
                    setLoading(false);
                }
            );
    };

    return (
        <div className="px-4 py-30 flex flex-col gap-5 items-center">
            <div className=" text-center  text-[.8rem] font-bold text-[#9B87F5] bg-[#171B37] rounded-xl py-1 px-3">
                Contact
            </div>
            <h1 className=" text-center text-white text-5xl font-bold">Contact Me</h1>
            <p className="text-lg/7 max-w-190 text-center text-[#94a3b8] mb-6">
                Feel free to reach out to me for collaboration, questions, or just to say hello. I'm open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12  w-3/4">
                {/* Left Panel */}
                <div className="lg:col-span-2 bg-[#212738] rounded-lg border-1 border-[#4E5260]">
                    <div className="glass-panel p-8 rounded-lg h-full">
                        <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                        <p className=" mb-8 text-[#94a3b8]">I'd love to hear from you. Whether you have a question, proposal, or just want to say hi.</p>
                        <div className="space-y-6 mb-8">
                            <a href="mailto:issamhamamid6@gmail.com" className="flex bg-[#1D2032] items-start p-4 bg-[#171529]/40 rounded-lg hover:bg-[#171529] transition-colors">
                                <div className="flex-shrink-0 bg-brand-purple/10 p-3 rounded-full mr-4 text-[#9B87F5] bg-[#2A2B46]">
                                    <FaRegEnvelope className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1 text-white">Email</h3>
                                    <p className="text-[#94a3b8]">issamhamamid6@gmail.com</p>
                                </div>
                            </a>
                            <a className="flex bg-[#1D2032] items-start p-4 bg-[#171529]/40 rounded-lg hover:bg-[#171529] transition-colors">
                                <div className="flex-shrink-0 bg-brand-purple/10 p-3 rounded-full mr-4 text-[#9B87F5] bg-[#2A2B46]">
                                    <FiPhone className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1 text-white">Phone</h3>
                                    <p className="text-[#94a3b8]">0792484582</p>
                                </div>
                            </a>
                            <a
                                href="https://www.google.com/maps/place/La+Scala,+Oued+Koriche"
                                className="flex bg-[#1D2032] items-start p-4 rounded-lg hover:bg-[#171529] transition-colors"
                            >
                                <div className="flex-shrink-0 bg-brand-purple/10 p-3 rounded-full mr-4 text-[#9B87F5] bg-[#2A2B46]">
                                    <GrLocation className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1 text-white">Location</h3>
                                    <p className="text-[#94a3b8]">El Biar, Algiers, Algeria</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4 text-white">Connect with me:</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/issamhamamid"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-[#171529] rounded-full hover:bg-brand-purple hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FiGithub className="text-2xl text-white" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/issam-hammamid-95a762251/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 bg-[#171529] rounded-full hover:bg-brand-purple hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FiLinkedin className="text-2xl text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Form Panel */}
                <div className="lg:col-span-3 rounded-lg bg-[#212738]">
                    <div className="glass-panel p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>
                        <p className="text-muted-foreground mb-8  text-[#94a3b8]">
                            Let's start a conversation. Fill out the form below and I'll get back to you as soon as possible.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block font-medium text-white">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#171529] rounded-lg border-2 border-[#9B87F5] focus:outline-none placeholder:text-white text-white focus:border-[#464471]"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block font-medium text-white">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#171529] rounded-lg border-2 border-[#9B87F5] focus:outline-none placeholder:text-white text-white focus:border-[#464471]"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="block font-medium text-white">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#171529] rounded-lg border-2 border-[#9B87F5] focus:outline-none placeholder:text-white text-white focus:border-[#464471]"
                                    placeholder="Subject of your message"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="block font-medium text-white">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 bg-[#171529] rounded-lg border-2 border-[#9B87F5] focus:outline-none placeholder:text-white text-white focus:border-[#464471]"
                                    placeholder="Your message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#9B87F5] text-white py-3 px-6 rounded-lg hover:bg-[#7a65e7] transition-colors"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
