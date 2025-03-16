// Vue app
const app = Vue.createApp({
    data() {
        return {
            language: 'id', // Default language set to Indonesian
            title: 'Porto Dendi Pratama',
            description: {
                id: 'Software Engineer dengan pengalaman dalam membangun aplikasi web modern dan responsif. Spesialisasi dalam Vue.js, Laravel, dan teknologi frontend lainnya.',
                en: 'Software Engineer with experience in building modern and responsive web applications. Specializing in Vue.js, Laravel, and other frontend technologies.'
            },
            email: 'dendixpratama@gmail.com',
            projects: [
                {
                    id: 1,
                    title: {
                        id: 'Izin Konstruksi',
                        en: 'Construction Permit'
                    },
                    description: {
                        id: 'Website profile company dalam pengurusan perizinan di sektor konstruksi',
                        en: 'Company profile website for construction sector permit management'
                    },
                    image: '/images/izinkonstruksi.png',
                    link: 'https://izinkonstruksi.com/',
                    github: '#',
                    technologies: ['Laravel', 'HTML5', 'Bootstrap', 'SQLite'],
                    date: {
                        id: 'Oktober 2024',
                        en: 'October 2024'
                    },
                    category: 'web'
                },
                {
                    id: 2,
                    title: 'BEWIZE by BSI',
                    description: {
                        id: 'Website ini adalah one-stop solution bagi para penggunanya untuk melakukan segala transaksi keuangan seperi Cash Management System, Digital Value Chain dan lain sebagainya.',
                        en: 'This website is a one-stop solution for users to perform all financial transactions such as Cash Management System, Digital Value Chain, and more.'
                    },
                    image: '/images/bewize.png',
                    link: 'https://bewize.bankbsi.co.id/site/login',
                    github: '#',
                    technologies: ['PHP', 'Bootstrap', 'Javascript', 'Oracle'],
                    date: {
                        id: 'Live & Maintaining',
                        en: 'Live & Maintaining'
                    },
                    category: 'web dashboard'
                },
                {
                    id: 3,
                    title: {
                        id: 'Izin Kesehatan',
                        en: 'Health Permit'
                    },
                    description: {
                        id: 'Website ini merupakan profile company di bidang perizinan sektor kesehatan.',
                        en: 'This website is a company profile in the health sector permitting field.'
                    },
                    image: '/images/izinkesehatan.png',
                    link: 'https://project3.example.com',
                    github: 'https://github.com/username/project3',
                    technologies: ['Laravel', 'Bootstrap', 'Javascript', 'SQLite'],
                    date: {
                        id: 'Januari 2025',
                        en: 'January 2025'
                    },
                    category: 'web'
                },
                {
                    id: 4,
                    title: 'Rifal Architecture',
                    description: {
                        id: 'Website profile company dan portofolio dari Rifal Architecture',
                        en: 'Company profile website and portfolio for Rifal Architecture'
                    },
                    image: '/images/rifalarchitect.png',
                    link: 'https://project4.example.com',
                    github: '#',
                    technologies: ['Vue.js', 'HTML5', 'SQLite', 'Tailwind CSS'],
                    date: {
                        id: 'Oktober 2021',
                        en: 'October 2021'
                    },
                    category: 'web'
                }
            ],
            uiText: {
                id: {
                    home: 'Beranda',
                    about: 'Tentang',
                    projects: 'Project',
                    contact: 'Kontak',
                    filters: {
                        all: 'Semua',
                        web: 'Web',
                        mobile: 'Mobile',
                        dashboard: 'Dashboard'
                    },
                    viewProject: 'Demo',
                    viewCode: 'Code',
                    prev: 'Sebelumnya',
                    next: 'Selanjutnya',
                    contactForm: {
                        name: 'Nama',
                        email: 'Email',
                        message: 'Pesan',
                        send: 'Kirim Pesan',
                        required: 'Semua bidang harus diisi!',
                        invalidEmail: 'Email tidak valid!',
                        success: 'Pesan Anda telah dikirim!'
                    }
                },
                en: {
                    home: 'Home',
                    about: 'About',
                    projects: 'Projects',
                    contact: 'Contact',
                    filters: {
                        all: 'All',
                        web: 'Web',
                        mobile: 'Mobile',
                        dashboard: 'Dashboard'
                    },
                    viewProject: 'Demo',
                    viewCode: 'Code',
                    prev: 'Previous',
                    next: 'Next',
                    contactForm: {
                        name: 'Name',
                        email: 'Email',
                        message: 'Message',
                        send: 'Send Message',
                        required: 'All fields are required!',
                        invalidEmail: 'Invalid email!',
                        success: 'Your message has been sent!'
                    }
                }
            },
            currentFilter: 'all',
            currentPage: 1,
            projectsPerPage: 3,
            secretCode: '',
            targetCode: 'diffa',
            showEasterEgg: false
        }
    },
    computed: {
        // Get the current language texts
        currentLangText() {
            return this.uiText[this.language];
        },
        // Get the description in the current language
        currentDescription() {
            return this.description[this.language];
        },
        filteredProjects() {
            // Filter berdasarkan kategori
            let filtered = this.projects;
            if (this.currentFilter !== 'all') {
                filtered = this.projects.filter(project => project.category === this.currentFilter);
            }
            
            // Pagination
            const startIndex = (this.currentPage - 1) * this.projectsPerPage;
            const endIndex = startIndex + this.projectsPerPage;
            return filtered.slice(startIndex, endIndex);
        },
        totalPages() {
            let filtered = this.projects;
            if (this.currentFilter !== 'all') {
                filtered = this.projects.filter(project => project.category === this.currentFilter);
            }
            return Math.ceil(filtered.length / this.projectsPerPage);
        }
    },
    created() {
        // Tambahkan event listener untuk mendeteksi ketika pengguna mengetik
        window.addEventListener('keydown', this.handleKeyDown);
        
        // Tambahkan komentar HTML yang akan terlihat di tab Elements
        const commentNode = document.createComment(' Easter Egg: Ketik nama pasangan saat ini untuk menemukan kejutan! ');
        document.body.appendChild(commentNode);
      },
      beforeDestroy() {
        // Hapus event listener ketika komponen dihancurkan
        window.removeEventListener('keydown', this.handleKeyDown);
      },
    methods: {
        changeLanguage(lang) {
            this.language = lang;
            // Update the language buttons UI
            document.querySelectorAll('.language-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`.language-btn[onclick="changeLanguage('${lang}')"]`).classList.add('active');
        },
        // Method to get the project title in the current language
        getProjectTitle(project) {
            return typeof project.title === 'object' ? project.title[this.language] : project.title;
        },
        // Method to get the project description in the current language
        getProjectDescription(project) {
            return typeof project.description === 'object' ? project.description[this.language] : project.description;
        },
        // Method to get the project date in the current language
        getProjectDate(project) {
            return typeof project.date === 'object' ? project.date[this.language] : project.date;
        },
        filterProjects(category) {
            this.currentFilter = category;
            this.currentPage = 1; // Reset ke halaman pertama saat mengganti filter
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        getTechIcon(tech) {
            // Mengembalikan kelas ikon berdasarkan teknologi
            const iconMap = {
                'HTML5': 'fab fa-html5',
                'PHP': 'fab fa-php',
                'Laravel': 'fab fa-laravel',
                'Javascript': 'fab fa-js',
                'Bootstrap': 'fab fa-bootstrap',
                'Vue.js': 'fab fa-vuejs',
                'React': 'fab fa-react',
                'React Native': 'fab fa-react',
                'JavaScript': 'fab fa-js',
                'Node.js': 'fab fa-node-js',
                'HTML/CSS': 'fab fa-html5',
                'MongoDB': 'fas fa-database',
                'Firebase': 'fas fa-fire',
                'Tailwind CSS': 'fab fa-css3',
                'Chart.js': 'fas fa-chart-bar',
                'Canvas API': 'fas fa-paint-brush',
                'Howler.js': 'fas fa-music',
                'Socket.io': 'fas fa-plug',
                'GSAP': 'fas fa-magic',
                'Three.js': 'fas fa-cube',
                'REST API': 'fas fa-exchange-alt',
                'Redux': 'fas fa-layer-group',
                'Stripe': 'fab fa-stripe',
                'Flutter': 'fas fa-mobile-alt',
                'Google Fit API': 'fas fa-heartbeat'
            };
            
            return iconMap[tech] || 'fas fa-code';
        },
         // Easter Egg Method
         handleKeyDown(event) {
            // console.log('Key pressed:', event.key);
        
            this.secretCode += event.key.toLowerCase();
        
            // Batasi panjang secretCode agar tidak melebihi targetCode
            if (this.secretCode.length > this.targetCode.length) {
                this.secretCode = this.secretCode.slice(-this.targetCode.length);
            }
        
            // console.log('Current secret code:', this.secretCode);diffa
        
            if (this.secretCode === this.targetCode) {
                this.showEasterEgg = true;
                setTimeout(() => {
                    this.showEasterEgg = false;
                    this.secretCode = '';
                }, 3000);
            }
        }
        
    }
}).mount('#app');

// Expose the changeLanguage method globally for the navbar buttons
window.changeLanguage = function(lang) {
    app.changeLanguage(lang);
};

// Animasi ketik untuk nama
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('typed-name');
    const name = 'Dendi Pratama';
    let i = 0;
    
    function typeWriter() {
        if (i < name.length) {
            nameElement.innerHTML += name.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
});

// Toggle Light/Dark Mode
function toggleMode() {
    const body = document.body;
    const darkIcon = document.getElementById('darkIcon');
    const lightIcon = document.getElementById('lightIcon');
    
    // Toggle class light-mode pada body
    body.classList.toggle('light-mode');
    
    // Update tampilan ikon berdasarkan mode
    if (body.classList.contains('light-mode')) {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';
        document.documentElement.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.2)');
    } else {
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
        document.documentElement.style.setProperty('--shadow-color', '#000000');
    }
}

// Animasi parallax sederhana untuk kartu proyek
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.project-card');
    const scrollY = window.scrollY;
    
    cards.forEach(card => {
        const speed = 0.05;
        const yPos = -(scrollY * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
});

// Tambahkan animasi saat kartu proyek muncul
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Skip empty anchors or links that are just "#"
        if (targetId === "#") return;
        
        // Try to find the element
        const targetElement = document.querySelector(targetId);
        
        // Only scroll if the element exists
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validasi kontak
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Get current language for error messages
        const currentLang = app.language;
        const errorMessages = app.uiText[currentLang].contactForm;
        
        // Validasi sederhana
        if (!name || !email || !message) {
            alert(errorMessages.required);
            return;
        }
        
        if (!validateEmail(email)) {
            alert(errorMessages.invalidEmail);
            return;
        }
        
        // Kirim formulir (di sini Anda akan menambahkan kode untuk mengirim data)
        alert(errorMessages.success);
        contactForm.reset();
    });
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Loading screen logic
window.addEventListener('load', function() {
    // Hide loading screen after everything is loaded
    setTimeout(function() {
        document.getElementById('loading-screen').classList.add('fade-out');
        document.getElementById('app').classList.remove('loading');
    }, 2500); // Menampilkan loading selama 2.5 detik agar animasi astronot terlihat
});