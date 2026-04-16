import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AboutCards from "./AboutCards";

export default function PortfolioPage() {

  useEffect(() => {
    window.AOS?.init();
  }, []);

  useEffect(() => {
    window.AOS?.init();

    const isotopeLayouts = document.querySelectorAll(".isotope-layout");

    isotopeLayouts.forEach((isotopeItem) => {
      const container = isotopeItem.querySelector(".isotope-container");
      if (!container || !window.Isotope) return;

      const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      const filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
      const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

      const iso = new window.Isotope(container, {
        itemSelector: ".isotope-item",
        layoutMode: layout,
        filter: filter,
        sortBy: sort,
      });

      isotopeItem.querySelectorAll(".isotope-filters li").forEach((filterBtn) => {
        filterBtn.addEventListener("click", function () {
          const active = isotopeItem.querySelector(".isotope-filters .filter-active");
          if (active) active.classList.remove("filter-active");

          this.classList.add("filter-active");
          iso.arrange({
            filter: this.getAttribute("data-filter"),
          });
        });
      });
    });
  }, []);

  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex justify-content-center align-items-center">

          <nav id="navmenu" className="navmenu">
            <ul className="d-flex justify-content-center align-items-center mb-0">
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

        </div>
      </header>

      <main className="main">
        <section id="home" className="hero section dark-background">
          <img src="/assets/img/home-banner.png" alt="" data-aos="fade-in" />
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2>Hi, I&apos;m Vrajesh Vagadiya</h2>
                <p>
                  I&apos;m a Software Developer
                </p>
                <div className="social-links">

                  <a href="https://www.linkedin.com/in/vrajesh-vagadiya/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  
                  <a href="https://github.com/vrajesh0804" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>

                  <a href="https://leetcode.com/u/QPaJdvI7XA/" target="_blank" rel="noreferrer">
                    <SiLeetcode />
                  </a>

                  <a href="mailto:vrajesh.vagadiya0804@gmail.com">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">About Me</span>
            <h2>About Me</h2>
            <AboutCards />
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
                <div className="profile-card">
                  <div className="profile-header">
                    <div className="profile-avatar">
                      <img src="/assets/img/Vrajesh-Vagadiya-Image.png" className="img-fluid" alt="" />
                      <div className="status-indicator"></div>
                    </div>
                    <h3>Vrajesh Vagadiya</h3>
                    <span className="role">Software Developer</span>
                  </div>
                  <div className="profile-actions">
                    <a href="/assets/resume/Vrajesh-Vagadiya-CV.pdf" className="btn-primary"><i className="bi bi-download" download="Vrajesh-Vagadiya-CV.pdf"></i> Download CV</a>
                    <a href="/assets/cover-letter/Vrajesh-Vagadiya-Cover-Letter.pdf" className="btn-primary"><i className="bi bi-download" download="Vrajesh-Vagadiya-Cover-Letter.pdf"></i> Download Cover Letter</a>
                    <a href="#contact" className="btn-secondary"><i className="bi bi-envelope"></i> Contact</a>
                  </div>
                  <div className="social-connect">
                    <a href="https://www.linkedin.com/in/vrajesh-vagadiya/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/vrajesh0804" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
                <div className="content-wrapper">
                  <div className="bio-section">
                    <div className="section-tag">About Me</div>
                    <h2>Building Scalable Backend Systems & High-Performance Web Applications</h2>
                    <p>
                      I focus on building reliable backend systems and scalable web applications that perform efficiently in real-world environments. With 5+ years of experience, I have worked extensively on API development, database optimization, and system design using Django, Laravel, and modern frontend frameworks. My experience includes automation, secure payment systems, and handling high-traffic applications with a strong emphasis on performance and maintainability. I have contributed to research-oriented system reliability work in Germany and developed production-ready solutions for diverse use cases. Currently, I am pursuing my Master’s in Computer Science and actively seeking full-time software engineering roles in Germany and India.
                    </p>
                  </div>

                  <div className="details-grid">
                    <div className="detail-item" data-aos="fade-up" data-aos-delay="250">
                      <i className="bi bi-briefcase"></i>
                      <div className="detail-content">
                        <span>Experience</span>
                        <strong>5+ Years</strong>
                      </div>
                    </div>
                    <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
                      <i className="bi bi-envelope"></i>
                      <div className="detail-content">
                        <span>Email</span>
                        <strong><a href="mailto:vrajesh.vagadiya0804@gmail.com">vrajesh.vagadiya0804@gmail.com</a></strong>
                      </div>
                    </div>
                    <div className="detail-item" data-aos="fade-up" data-aos-delay="350">
                      <i className="bi bi-geo-alt"></i>
                      <div className="detail-content">
                        <span>Currently</span>
                        <strong>Kaiserslautern, Germany</strong>
                      </div>
                    </div>
                    <div className="detail-item" data-aos="fade-up" data-aos-delay="350">
                      <i className="bi bi-geo-alt"></i>
                      <div className="detail-content">
                        <span>Based In</span>
                        <strong>Gujarat, India</strong>
                      </div>
                    </div>
                    <div className="detail-item" data-aos="fade-up" data-aos-delay="150">
                      <i className="bi bi-whatsapp"></i>
                      <div className="detail-content">
                        <span>Phone [India]</span>
                        <strong>+91 91067 55871</strong>
                      </div>
                    </div>
                    <div className="detail-item" data-aos="fade-up" data-aos-delay="150">
                      <i className="bi bi-phone"></i>
                      <div className="detail-content">
                        <span>Phone [Germany]</span>
                        <strong>+49 176 45822351</strong>
                      </div>
                    </div>
                    <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
                      <i className="bi bi-mortarboard"></i>
                      <div className="detail-content">
                        <span>Degree</span>
                        <strong>Master of Computer Science</strong>
                      </div>
                    </div>
                    <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
                      <i className="bi bi-calendar-check"></i>
                      <div className="detail-content">
                        <span>Availability</span>
                        <strong>Open to Work</strong>
                      </div>
                    </div>
                  </div>

                  <div className="skills-showcase" data-aos="fade-up" data-aos-delay="250">
                    <div className="section-tag">Core Skills</div>
                    <h3>Technical Proficiency</h3>
                    <div className="skills-list skills-animation">
                      {[
                        ['Python (Django)', 90],
                        ['PHP (Laravel)', 90],
                        ['React', 80],
                        ['PostgreSQL & MySQL', 85],
                        ['Docker', 85],
                        ['AWS & Azure', 75],
                        ['System Design & APIs', 85],
                        ['Automation (Playwright)', 80],
                        ['Payment Integrations', 85],
                      ].map(([name, percent]) => (
                        <div className="skill-item" key={name}>
                          <div className="skill-info">
                            <span className="skill-name">{name}</span>
                            <span className="skill-percent">{percent}%</span>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={percent}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: `${percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume section">
          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Resume</span>
            <h2>Resume</h2>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="experience-section">
                  <div className="section-header" data-aos="fade-right" data-aos-delay="200">
                    <div className="header-content">
                      <span className="section-badge">Experience</span>
                      <h2>Professional Journey</h2>
                    </div>
                  </div>

                  <div className="experience-cards">
                    <div className="exp-card featured" data-aos="zoom-in" data-aos-delay="300">
                      <div className="card-header">
                        <div className="company-logo">
                          <i className="bi bi-code-slash"></i>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3>Master Thesis -  Python Simulation Framework for Distributed Systems</h3>
                        <p className="company-name">Max Planck Institute for Software Systems (MPI-SWS)</p>
                        <span className="duration">11/2025 - 05/2026</span>
                        <p className="description">Designed a deterministic Python-based simulation framework to test distributed systems with simulated networks, fault scenarios, and AWS service emulation.</p>
                        <div className="skills-tags">
                          <span className="skill-tag">Python</span>
                          <span className="skill-tag">Amazon Web Services</span>
                          <span className="skill-tag">Distributed Systems</span>
                        </div>
                      </div>
                    </div>

                    <div className="exp-card" data-aos="zoom-in" data-aos-delay="350">
                      <div className="card-header">
                        <div className="company-logo">
                          <i className="bi bi-code-slash"></i>
                        </div>
                        <div className="period-badge">Current</div>
                      </div>
                      <div className="card-body">
                        <h3>Software Developer</h3>
                        <p className="company-name">Koinon / TU München</p>
                        <span className="duration">05/2025 - Present</span>
                        <p className="description">Developing scalable backend systems, role-based workflows, and optimized database solutions in a Dockerized Agile environment.</p>
                        <div className="skills-tags">
                          <span className="skill-tag">PHP</span>
                          <span className="skill-tag">MySQL</span>
                          <span className="skill-tag">Docker</span>
                        </div>
                      </div>
                    </div>

                    <div className="exp-card" data-aos="zoom-in" data-aos-delay="400">
                      <div className="card-header">
                        <div className="company-logo">
                          <i className="bi bi-code-slash"></i>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3>Working Student – Software Configuration & Testing</h3>
                        <p className="company-name">Cogitanda DataProtect, Germany</p>
                        <span className="duration">11/2022 - 03/2025</span>
                        <p className="description">Maintained high system reliability through structured testing, documentation, and release validation processes.</p>
                        <div className="skills-tags">
                          <span className="skill-tag">Testing</span>
                          <span className="skill-tag">Documentation</span>
                          <span className="skill-tag">System Reliability</span>
                        </div>
                      </div>
                    </div>

                    <div className="exp-card" data-aos="zoom-in" data-aos-delay="400">
                      <div className="card-header">
                        <div className="company-logo">
                          <i className="bi bi-code-slash"></i>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3>Full-Stack Developer Intern</h3>
                        <p className="company-name">Prishni, Bengaluru, India</p>
                        <span className="duration">08/2021 - 02/2022</span>
                        <p className="description">Built and scaled Django-based backend systems with Azure deployment and secure payment integrations while mentoring junior developers.</p>
                        <div className="skills-tags">
                          <span className="skill-tag">Django</span>
                          <span className="skill-tag">PostgreSQL</span>
                          <span className="skill-tag">Azure</span>
                        </div>
                      </div>
                    </div>

                    <div className="exp-card" data-aos="zoom-in" data-aos-delay="400">
                      <div className="card-header">
                        <div className="company-logo">
                          <i className="bi bi-code-slash"></i>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3>Freelance Web Developer</h3>
                        <span className="duration">11/2022 - 03/2025</span>
                        <p className="description">Delivered multiple full-stack web applications for international clients across job portals, finance platforms, and business systems.</p>
                        <div className="skills-tags">
                          <span className="skill-tag">Python (Web scrapping)</span>
                          <span className="skill-tag">PHP (Laravel)</span>
                          <span className="skill-tag">JavaScript (React)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="education-section">
                  <div className="section-header" data-aos="fade-left" data-aos-delay="200">
                    <div className="header-content">
                      <span className="section-badge">Education</span>
                      <h2>Academic Background</h2>
                    </div>
                  </div>

                  <div className="education-timeline" data-aos="fade-left" data-aos-delay="300">
                    <div className="timeline-track">
                      <div className="timeline-item">
                        <div className="timeline-marker"><i className="bi bi-mortarboard-fill"></i></div>
                        <div className="timeline-content">
                          <div className="education-meta">
                            <span className="year-range">2022 - 2026</span>
                            <span className="degree-level">Masters</span>
                          </div>
                          <h4>Master of Computer Science</h4>
                          <p className="institution">Rheinland-Pfälzische Technische Universität Kaiserslautern-Landau, Germany</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-marker"><i className="bi bi-book"></i></div>
                        <div className="timeline-content">
                          <div className="education-meta">
                            <span className="year-range">2018 - 2021</span>
                            <span className="degree-level">Bachelor</span>
                          </div>
                          <h4>Bachelor of Engineering in Information Technology</h4>
                          <p className="institution">Government Engineering College, Gandhinagar, Gujarat, India</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-marker"><i className="bi bi-book"></i></div>
                        <div className="timeline-content">
                          <div className="education-meta">
                            <span className="year-range">2015 - 2018</span>
                            <span className="degree-level">Diploma</span>
                          </div>
                          <h4>Diploma in Information Technology</h4>
                          <p className="institution">Government Polytechnic, Ahmedabad, Gujarat, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Portfolio</span>
            <h2>Portfolio</h2>
            <p>
              A collection of projects focused on performance, scalability, and real-world impact.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <li data-filter="*" className="filter-active">All Work</li>
                <li data-filter=".filter-fullstack">Full Stack</li>
                <li data-filter=".filter-research">Research</li>
                <li data-filter=".filter-automation">Automation</li>
              </ul>

              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {[
                  [
                    "filter-research",
                    "Python Simulation Framework for Distributed Systems",
                    "Designed a deterministic Python-based simulation framework inspired by Rust’s Turmoil to test distributed systems under delays, packet loss, reordering, and network partitions. Integrated LocalStack to emulate AWS services and enable reproducible reliability and fault-tolerance experiments.",
                    ["Python", "Distributed Systems", "LocalStack", "AWS", "TCP Simulation"],
                  ],
                  [
                    "filter-automation",
                    "Network Automation using Python & Playwright",
                    "Built an automation script to streamline LinkedIn networking by logging in, performing targeted searches, applying filters, handling pagination, and sending connection requests.",
                    ["Python", "Playwright", "Automation", "Browser Scripting", "Web Workflows"],
                  ],
                  [
                    "filter-fullstack",
                    "EventGem",
                    "Developed a web-based offline ticketing solution that allows event organizers to sell tickets through Stripe Reader S700 and manage sales using a custom salesman portal. Implemented secure role-based access, real-time payment processing, and automated email confirmations.",
                    ["Laravel", "Stripe Terminal", "JWT", "Role Management", "Payments"],
                  ],
                  [
                    "filter-fullstack",
                    "Koinon Workflow Platform",
                    "Designed and implemented scalable backend services for application processing, approval workflows, and project coordination across multiple departments. Improved concurrent performance, optimized MySQL queries, and delivered maintainable features in a Dockerized Agile environment.",
                    ["PHP", "MySQL", "Docker", "MVC", "Agile"],
                  ],
                  [
                    "filter-automation",
                    "WebScraper",
                    "Developed multiple Playwright-based web scrapers for high-speed automated data extraction, PDF downloading, and ZIP file handling. Added robust error handling, logging, and optimized execution for large-scale scraping workflows.",
                    ["Python", "Playwright", "Web Scraping", "PDF Processing", "Automation"],
                  ],
                  [
                    "filter-research",
                    "Agda Search Engine",
                    "Built a search engine for Agda-based codebases to retrieve relevant functions, definitions, and proofs through parsing and indexing mechanisms. Focused on improving developer productivity with efficient keyword and type-based search.",
                    ["Python", "Parsing", "Search Engine", "Indexing", "Optimization"],
                  ],
                  [
                    "filter-fullstack",
                    "Invoice Management System",
                    "Built a complete invoice management platform with admin panel, customer and invoice CRUD, analytics dashboard, and Excel import-export support. Used Django and Python ecosystem tools to deliver secure, structured, and reporting-friendly business workflows.",
                    ["Django", "Python", "Pandas", "Excel Export", "Admin Panel"],
                  ],
                  [
                    "filter-fullstack",
                    "Prishni",
                    "Developed and maintained a Django-based full-stack application with PostgreSQL database architecture and Azure deployment support. Integrated Razorpay authentication, mentored junior developers, and worked directly with clients in an Agile development process.",
                    ["Django", "PostgreSQL", "Azure", "Razorpay", "Team Leadership"],
                  ],
                  [
                    "filter-fullstack",
                    "Camiray – Conversational Dialogue Engine",
                    "Built a conversational web platform using Django and Flask with patient and therapist modules, real-time chat, and API-based AI engine integration. Focused on secure communication, authentication, and scalable backend architecture for mental health support.",
                    ["Django", "Flask", "Real-time Chat", "API Integration", "Authentication"],
                  ],
                  [
                    "filter-fullstack",
                    "Jobuss",
                    "Developed a scalable Laravel-based recruitment platform connecting employers and candidates through job listings, application workflows, and webinar sessions. Implemented RBAC, optimized database performance, and built secure backend architecture for concurrent usage.",
                    ["Laravel", "PHP", "MySQL", "RBAC", "REST APIs"],
                  ],
                  [
                    "filter-fullstack",
                    "Go-Verde",
                    "Developed a Core PHP eCommerce website with product listings, shopping cart, checkout, secure payment integration, order management, and inventory tracking. Focused on usability, performance, and scalable business operations.",
                    ["PHP", "E-commerce", "Payment Integration", "Order Management", "Performance"],
                  ],
                  [
                    "filter-fullstack",
                    "Shyam Machinery",
                    "Built an industrial machinery eCommerce platform using Core PHP with product management, admin-side inventory control, and customer purchase workflows. Optimized performance for faster loading and smoother browsing experience.",
                    ["PHP", "Admin Panel", "Inventory Management", "E-commerce", "Performance"],
                  ],
                  [
                    "filter-fullstack",
                    "Fabric Printing Management System",
                    "Developed a custom fabric printing eCommerce platform where users could upload and personalize designs for apparel products. Included admin-side product and order management with a user-friendly customization flow.",
                    ["Core PHP", "JavaScript", "E-commerce", "Admin Panel", "UI/UX"],
                  ],
                  [
                    "filter-fullstack",
                    "Book Sharing System",
                    "Created a web-based platform for students and faculty to share books and stationery resources in a convenient digital environment. The project focused on enabling community-driven exchange and improving access to useful semester materials.",
                    ["Web Application", "PHP", "Student Platform", "Resource Sharing", "UI Design"],
                  ],
                ].map(([filterClass, title, description, skills]) => (
                  <div
                    className={`portfolio-item isotope-item ${filterClass}`}
                    key={title}
                  >
                    <div className="portfolio-card h-100 p-4">
                      <div className="portfolio-content">
                        <h4 className="mb-3">{title}</h4>
                        <p className="mb-3">{description}</p>

                        <div className="project-tags d-flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span className="tag" key={skill}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Contact</span>
            <h2>Contact</h2>
          </div>

          <div className="container">
            <div className="row gy-4">
              {[
                ["bi-envelope", "Email Me", "vrajesh.vagadiya0804@gmail.com"],
                ["bi-telephone", "Call Me", "+49 176 45822351"],
                ["bi-telephone", "WhatsApp", "+91 91067 55871"],
                ["bi-geo-alt", "Current Address", "Kaiserslautern, Germany"],
                ["bi-geo-alt", "Permanent Address", "Ahmedabad, Gujarat"],
              ].map(([icon, title, value]) => (
                <div className="col-md-6 col-lg-4" key={title}>
                  <div className="info-item">
                    <div className="icon-wrapper">
                      <i className={`bi ${icon}`}></i>
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>
                        {title === "Email Me" ? (
                          <a href={`mailto:${value}`}>{value}</a>
                        ) : (
                          value
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
