// Vue app
const app = Vue.createApp({
    data() {
        return {
            title: 'Porto Dendi Pratama',
            description: 'Software Engineer dengan pengalaman dalam membangun aplikasi web modern dan responsif. Spesialisasi dalam Vue.js, Laravel, dan teknologi frontend lainnya.',
            email: 'dendixpratama@gmail.com',
            projects: [
                {
                    id: 1,
                    title: 'Izin Konstruksi',
                    description: 'Website profile company dalam pengurusan perizinan di sektor konstruksi',
                    image: '/images/izinkonstruksi.png',
                    link: 'https://izinkonstruksi.com/',
                    github: '#',
                    technologies: ['Laravel', 'HTML5', 'Bootstrap', 'SQLite'],
                    date: 'Oktober 2024',
                    category: 'web'
                },
                {
                    id: 2,
                    title: 'BEWIZE by BSI',
                    description: 'Website ini adalah one-stop solution bagi para penggunanya untuk melakukan segala transaksi keuangan seperi Cash Management System, Digital Value Chain dan lain sebagainya.',
                    image: '/images/bewize.png',
                    link: 'https://bewize.bankbsi.co.id/site/login',
                    github: '#',
                    technologies: ['PHP', 'Bootstrap', 'Javascript', 'Oracle'],
                    date: 'Live & Maintaining',
                    category: 'web dashboard'
                },
                {
                    id: 3,
                    title: 'Izin Kesehatan',
                    description: 'Website ini merupakan profile company di bidang perizinan sektor kesehatan.',
                    image: '/images/izinkesehatan.png',
                    link: 'https://project3.example.com',
                    github: 'https://github.com/username/project3',
                    technologies: ['Laravel', 'Bootstrap', 'Javascript', 'SQLite'],
                    date: 'Januari 2025',
                    category: 'web'
                },
                {
                    id: 4,
                    title: 'Rifal Architecture',
                    description: 'Website profile company dan portofolio dari Rifal Architecture',
                    image: '/images/rifalarchitect.png',
                    link: 'https://project4.example.com',
                    github: '#',
                    technologies: ['Vue.js', 'HTML5', 'SQLite', 'Tailwind CSS'],
                    date: 'Oct 2021',
                    category: 'web'
                },
                // {
                //     id: 5,
                //     title: 'Portfolio Website',
                //     description: 'Website portfolio personal dengan animasi interaktif dan tampilan responsif.',
                //     image: 'https://via.placeholder.com/600x400?text=Portfolio+Project',
                //     link: 'https://project5.example.com',
                //     github: 'https://github.com/username/project5',
                //     technologies: ['HTML/CSS', 'JavaScript', 'GSAP', 'Three.js'],
                //     date: 'Agustus 2024',
                //     category: 'web'
                // },
                // {
                //     id: 6,
                //     title: 'Fitness Tracker',
                //     description: 'Aplikasi pelacak kebugaran dengan visualisasi kemajuan dan pembuatan rencana latihan.',
                //     image: 'https://via.placeholder.com/600x400?text=Fitness+App+Project',
                //     link: 'https://project6.example.com',
                //     github: 'https://github.com/username/project6',
                //     technologies: ['Flutter', 'Firebase', 'Google Fit API'],
                //     date: 'September 2024',
                //     category: 'mobile'
                // }
            ],
            currentFilter: 'all',
            currentPage: 1,
            projectsPerPage: 3
        }
    },
    computed: {
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
    methods: {
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
        }
    }
}).mount('#app');

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
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
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
        
        // Validasi sederhana
        if (!name || !email || !message) {
            alert('Semua bidang harus diisi!');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Email tidak valid!');
            return;
        }
        
        // Kirim formulir (di sini Anda akan menambahkan kode untuk mengirim data)
        alert('Pesan Anda telah dikirim!');
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