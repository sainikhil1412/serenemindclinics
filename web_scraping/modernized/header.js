// Common Header Component
const headerHTML = `
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <!-- Top Bar -->
        <div class="bg-teal-700 text-white py-2">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div class="flex items-center space-x-4 mb-2 sm:mb-0">
                        <a href="tel:+919966711009" class="flex items-center hover:text-teal-200 transition">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            +91 99667 11009
                        </a>
                        <a href="mailto:serenemindclinics@gmail.com" class="flex items-center hover:text-teal-200 transition">
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            serenemindclinics@gmail.com
                        </a>
                    </div>
                    <a href="appointment-booking.html" class="text-teal-100 hover:text-white transition font-medium">
                        Request an Appointment →
                    </a>
                </div>
            </div>
        </div>

        <!-- Main Navigation -->
        <nav class="bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex-shrink-0">
                        <a href="index.html" class="flex items-center">
                            <img src="static/logo.png" alt="Serene Mind Clinics Logo" class="h-10 w-auto mr-3">
                            <span class="text-2xl font-bold text-teal-700">Serene Mind Clinics</span>
                        </a>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="index.html" class="text-teal-700 font-medium">Home</a>
                        <a href="our-team.html" class="text-gray-600 hover:text-teal-700 transition">Our Team</a>
                        
                        <!-- Conditions Dropdown -->
                        <div class="relative group">
                            <button class="text-gray-600 hover:text-teal-700 transition flex items-center">
                                Conditions
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">In Adults</div>
                                <a href="anxiety-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Anxiety</a>
                                <a href="bipolar-disorder-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Bipolar Disorder</a>
                                <a href="depression-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Depression</a>
                                <a href="deaddiction-center-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Deaddiction</a>
                                <a href="eating-disorders-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Eating Disorders</a>
                                <a href="panic-attack-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Panic Attack</a>
                                <a href="personality-disorders-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Personality Disorders</a>
                                <a href="phobia-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Phobia</a>
                                <a href="sexual-disorder-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Sexual Disorders</a>
                                <a href="sleeping-disorder-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Sleeping Disorder</a>
                                <a href="stress-management-counselling-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Stress Management</a>
                                <div class="border-t border-gray-100 my-1"></div>
                                <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">In Children</div>
                                <a href="autism-center-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Autism</a>
                                <a href="adhd-center-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">ADHD</a>
                                <a href="bed-wetting-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Bed Wetting</a>
                                <a href="conduct-disorders-in-children.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Conduct Disorders</a>
                                <a href="learning-disability-treatment-in-hyderabad.html" class="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700">Learning Disability</a>
                            </div>
                        </div>

                        <a href="appointment-booking.html" class="bg-teal-600 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-700 transition">
                            Book Appointment
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden">
                        <button id="mobile-menu-btn" class="text-gray-600 hover:text-teal-700">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
                <div class="px-4 py-3 space-y-2">
                    <a href="index.html" class="block text-teal-700 font-medium py-2">Home</a>
                    <a href="our-team.html" class="block text-gray-600 py-2">Our Team</a>
                    <div class="py-2">
                        <div class="text-gray-600 font-medium">Conditions</div>
                        <div class="pl-4 mt-2 space-y-1">
                            <div class="text-xs font-semibold text-gray-500 uppercase">In Adults</div>
                            <a href="anxiety-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Anxiety</a>
                            <a href="bipolar-disorder-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Bipolar Disorder</a>
                            <a href="depression-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Depression</a>
                            <a href="deaddiction-center-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Deaddiction</a>
                            <a href="eating-disorders-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Eating Disorders</a>
                            <a href="panic-attack-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Panic Attack</a>
                            <a href="personality-disorders-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Personality Disorders</a>
                            <a href="phobia-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Phobia</a>
                            <a href="sexual-disorder-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Sexual Disorders</a>
                            <a href="sleeping-disorder-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Sleeping Disorder</a>
                            <a href="stress-management-counselling-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Stress Management</a>
                            <div class="text-xs font-semibold text-gray-500 uppercase mt-3">In Children</div>
                            <a href="autism-center-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Autism</a>
                            <a href="adhd-center-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">ADHD</a>
                            <a href="bed-wetting-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Bed Wetting</a>
                            <a href="conduct-disorders-in-children.html" class="block text-gray-600 py-1 pl-2">Conduct Disorders</a>
                            <a href="learning-disability-treatment-in-hyderabad.html" class="block text-gray-600 py-1 pl-2">Learning Disability</a>
                        </div>
                    </div>
                    <a href="appointment-booking.html" class="block bg-teal-600 text-white px-5 py-2 rounded-full font-medium text-center mt-3">
                        Book Appointment
                    </a>
                </div>
            </div>
        </nav>
    </header>
`;

// Inject header into the page
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
        
        // Initialize mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
});
