"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Phone, MapPin, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formStatus, setFormStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copiedField, setCopiedField] = useState(null)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umairawan2239@gmail.com",
      href: "mailto:umairawan2239@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0306-7880329",
      href: "tel:+923067880329",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Multan, Pakistan",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "muhammad-umair-akram",
      href: "https://www.linkedin.com/in/muhammad-umair-akram-33908a28b/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/umairawan",
      href: "https://github.com",
    },
  ]

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setFormStatus("Message sent successfully!")
      setIsLoading(false)
      e.target.reset()
      setTimeout(() => setFormStatus(""), 3000)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const rightItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">Let's work together and create something amazing</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg glassmorphic focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg glassmorphic focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg glassmorphic focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Status Messages */}
              {formStatus && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm font-semibold"
                >
                  ✓ {formStatus}
                </motion.p>
              )}

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-70"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const isCopied = copiedField === info.label

              return (
                <motion.div key={info.label} variants={rightItemVariants} className="group">
                  <motion.div
                    whileHover={{ scale: 1.02, translateX: 4 }}
                    onClick={() => {
                      if (info.label !== "Location") {
                        handleCopy(info.value, info.label)
                      }
                    }}
                    className={`flex items-start gap-4 p-4 rounded-lg glassmorphic transition-all duration-300 ${
                      info.label !== "Location" ? "cursor-pointer" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="mt-1 flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <Icon className="w-6 h-6 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>

                    {/* Copy Icon */}
                    {info.label !== "Location" && (
                      <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {isCopied ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
