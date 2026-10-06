
function showDetails(id, content) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = content;
  el.style.display = "block";
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function openCourse(course) {
  const data = {
    mba: ["MBA", "Master of Business Administration", "Management, finance, marketing, human resources and business strategy."],
    mtech: ["M.Tech", "Master of Technology", "Advanced technology, engineering, research and practical project work."],
    bca: ["BCA", "Bachelor of Computer Applications", "Programming, databases, web development, software engineering and computer applications."],
    bba: ["BBA", "Bachelor of Business Administration", "Business fundamentals, management, marketing, finance and entrepreneurship."],
    btech: ["B.Tech", "Bachelor of Technology", "Engineering fundamentals, technology, programming and industry-oriented practical learning."],
    mca: ["MCA", "Master of Computer Applications", "Advanced computer applications, software development, databases and emerging technologies."]
  };
  const d = data[course];
  if (!d) return;
  showDetails("courseDetails", `<h2>${d[0]}</h2><h3>${d[1]}</h3><p>${d[2]}</p>`);
}

function openFacility(facility) {
  const data = {
    classroom: ["Smart Classrooms", "Digital and interactive classrooms designed for modern teaching and learning."],
    labs: ["Computer & Science Labs", "Modern laboratory facilities for practical learning, experiments and projects."],
    library: ["Central Library", "A learning resource center with books, references and study materials."],
    wifi: ["Wi-Fi Campus", "High-speed internet access to support academic and digital learning activities."],
    sports: ["Sports & Recreation", "Facilities and activities supporting physical fitness, recreation and student wellness."],
    hostel: ["Hostel Facility", "A safe and comfortable residential facility for students."]
  };
  const d = data[facility];
  if (!d) return;
  showDetails("facilityDetails", `<h2>${d[0]}</h2><p>${d[1]}</p>`);
}

function openPlacement(company) {
  const data = {
    accenture: ["Accenture", "Consulting & Technology", "Opportunities in technology, consulting and digital services."],
    ibm: ["IBM", "Technology & Research", "Technology, research, cloud and enterprise solutions."],
    tcs: ["TCS", "IT Services & Consulting", "IT services, consulting and digital transformation opportunities."],
    infosys: ["Infosys", "Global Technology Company", "Technology services, consulting and digital solutions."],
    wipro: ["Wipro", "IT & Business Solutions", "IT services, engineering and business solutions."],
    hcl: ["HCL", "Engineering & R&D Services", "Technology, engineering and research & development opportunities."]
  };
  const d = data[company];
  if (!d) return;
  showDetails("placementDetails", `<h2>${d[0]}</h2><h3>${d[1]}</h3><p>${d[2]}</p>`);
}

function submitEnquiry(event) {
  event.preventDefault();
  alert("Thank you! Your enquiry has been submitted.");
  event.target.reset();
}

function submitAdmission(event) {
  event.preventDefault();
  alert("Thank you! Your admission application has been submitted.");
  event.target.reset();
}

// Keep all sections visible for the single-page layout.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".page").forEach(function (page) {
    page.style.display = "block";
  });
});
