import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const mockSkillers = [
  { 
    name: "Aiden", 
    skill: "Electrician - Quick Fix & Install", 
    location: "Dimapur", 
    contact: "7000123456", 
    experience: "5 years",
    gender: "Male",
    sector: "Electrical"
  },
  { 
    name: "Meera", 
    skill: "Tailoring - Custom Dresses", 
    location: "Kohima", 
    contact: "9856123456", 
    experience: "7 years",
    gender: "Female",
    sector: "Fashion & Textile"
  },
  { 
    name: "Dev", 
    skill: "Web Developer - Portfolio Sites", 
    location: "Mokokchung", 
    contact: "9812345678", 
    experience: "3 years",
    gender: "Male",
    sector: "Information Technology"
  },
  { 
    name: "Liam", 
    skill: "Bike Repair - Home Service", 
    location: "Wokha", 
    contact: "9876543210", 
    experience: "4 years",
    gender: "Male",
    sector: "Automotive"
  },
];

const mockSeekers = [
  { 
    name: "Sara", 
    need: "Fix my washing machine", 
    location: "Dimapur", 
    contact: "7000987654",
    gender: "Female",
    sector: "Home Appliances Repair"
  },
  { 
    name: "Raj", 
    need: "Design my small business logo", 
    location: "Kohima", 
    contact: "9856234567",
    gender: "Male",
    sector: "Graphic Design"
  },
  { 
    name: "Kim", 
    need: "Guitar lessons at home", 
    location: "Mokokchung", 
    contact: "9812765432",
    gender: "Female",
    sector: "Music & Education"
  },
  { 
    name: "Tom", 
    need: "Social media content editor", 
    location: "Wokha", 
    contact: "9876123450",
    gender: "Male",
    sector: "Digital Marketing"
  },
];

export default function Home() {
  const [formType, setFormType] = useState("skill");
  const [formData, setFormData] = useState({ 
    name: "", 
    location: "", 
    contact: "", 
    gender: "", 
    sector: "", 
    skill: "", 
    experience: "", 
    need: ""
  });

  const [skillerSectorFilter, setSkillerSectorFilter] = useState("All");
  const [seekerSectorFilter, setSeekerSectorFilter] = useState("All");

  const filteredSkillers = skillerSectorFilter === "All"
    ? mockSkillers
    : mockSkillers.filter((p) => p.sector === skillerSectorFilter);

  const filteredSeekers = seekerSectorFilter === "All"
    ? mockSeekers
    : mockSeekers.filter((p) => p.sector === seekerSectorFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted! (Placeholder)");
  };

  const getAllSectors = (data) => [
    "All",
    ...Array.from(new Set(data.map((d) => d.sector)))
  ];

  // Testimonials for slider
  const testimonials = [
    "I found a skilled electrician in minutes! – An impressed customer",
    "The tailored service was exactly what I needed. – A happy client",
    "My small business got a stunning logo designed. – A satisfied entrepreneur"
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Copy contact number and vibrate
  const handleContactClick = (number) => {
    navigator.clipboard.writeText(number);
    if (navigator.vibrate) navigator.vibrate(100);
    alert(Number ${number} copied to clipboard);
  };

  return (
    <main className="min-h-screen bg-blue-50 text-black p-8 font-mono">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center mb-12 text-blue-900"
      >
        SkillSync — No Sign Up. Just Connect.
      </motion.h1>

      {/* Form Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <Card className="bg-white border-2 border-blue-900 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold uppercase mb-4 text-blue-900">
              {formType === "skill" ? "I Have a Skill" : "I Need a Skill"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <Input placeholder="Your Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              <Input placeholder="Contact Number" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} onClick={() => handleContactClick(formData.contact)} />
              <Input placeholder="Gender" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
              <Input placeholder="Sector" value={formData.sector} onChange={(e) => setFormData({ ...formData, sector: e.target.value })} />
              {formType === "skill" ? (
                <>
                  <Input placeholder="What Can You Do?" value={formData.skill} onChange={(e) => setFormData({ ...formData, skill: e.target.value })} />
                  <Input placeholder="Years of Experience (e.g. 3 years)" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />
                </>
              ) : (
                <Input placeholder="What Do You Need Help With?" value={formData.need} onChange={(e) => setFormData({ ...formData, need: e.target.value })} />
              )}
              <Button type="submit" className="w-full bg-blue-700 text-white hover:bg-blue-900">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4 text-center">
          <Button className={w-full border-2 border-blue-900 ${formType === "skill" ? "bg-blue-700 text-white" : "bg-white text-blue-900"}} onClick={() => setFormType("skill")}>
            I Have a Skill
          </Button>
          <Button className={w-full border-2 border-blue-900 ${formType === "need" ? "bg-blue-700 text-white" : "bg-white text-blue-900"}} onClick={() => setFormType("need")}>
            I Need a Skill
          </Button>
        </div>
      </div>

      {/* Filters Section - Side by Side */}
      <div className="flex justify-center space-x-8 mt-8 max-w-4xl mx-auto">
        <div className="w-full">
          <label className="block text-lg mb-2 text-blue-900">Skilled Individuals Filter:</label>
          <Select value={skillerSectorFilter} onValueChange={setSkillerSectorFilter}>
            <SelectTrigger className="w-full border-2 border-blue-900 shadow-md">
              <SelectValue placeholder="Filter by Sector" />
            </SelectTrigger>
            <SelectContent>
              {getAllSectors(mockSkillers).map((sector) => (
                <SelectItem key={sector} value={sector}>
                  {sector}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <label className="block text-lg mb-2 text-blue-900">People Seeking Help Filter:</label>
          <Select value={seekerSectorFilter} onValueChange={setSeekerSectorFilter}>
            <SelectTrigger className="w-full border-2 border-blue-900 shadow-md">
              <SelectValue placeholder="Filter by Sector" />
            </SelectTrigger>
            <SelectContent>
              {getAllSectors(mockSeekers).map((sector) => (
                <SelectItem key={sector} value={sector}>
                  {sector}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Listings Section */}
      <section className="max-w-4xl mx-auto mt-20 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold uppercase mb-4 text-blue-900">Skilled Individuals</h3>
          <div className="space-y-4">
            {filteredSkillers.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-white border-2 border-blue-900 shadow-sm hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
              >
                <strong>{person.name}</strong> — {person.skill} <br />
                <span>📍 {person.location}</span> <br />
                <span className="cursor-pointer text-blue-700 underline" onClick={() => handleContactClick(person.contact)}>
                  📞 {person.contact}
                </span>
                <br />
                <span>⏱ {person.experience} experience</span> <br />
                <span>⚥ {person.gender}</span> <br />
                <span>🏭 {person.sector}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold uppercase mb-4 text-blue-900">People Seeking Help</h3>
          <div className="space-y-4">
            {filteredSeekers.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-white border-2 border-blue-900 shadow-sm hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
              >
                <strong>{person.name}</strong> — {person.need} <br />
                <span>📍 {person.location}</span> <br />
                <span className="cursor-pointer text-blue-700 underline" onClick={() => handleContactClick(person.contact)}>
                  📞 {person.contact}
                </span>
                <br />
                <span>⚥ {person.gender}</span> <br />
                <span>🏭 {person.sector}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="max-w-4xl mx-auto mt-20 p-4 bg-white border-2 border-blue-900 shadow-lg">
        <h3 className="text-xl font-bold uppercase text-blue-900 mb-4 text-center">Testimonials</h3>
        <AnimatePresence exitBeforeEnter>
          <motion.p
            key={currentTestimonial}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg"
          >
            {testimonials[currentTestimonial]}
          </motion.p>
        </AnimatePresence>
      </section>

      <footer className="mt-16 text-center text-xs uppercase tracking-widest text-blue-900">
        Brutal. Minimal. Functional. — © SkillSync
      </footer>
    </main>
  );
}

i want to host this on vercel  // Home component will be inserted here.